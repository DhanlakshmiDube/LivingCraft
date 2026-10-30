const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { getDBStatus } = require("../config/db");

// In-memory fallback store when MongoDB is not running locally
const inMemoryUsers = [];

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || "livingcraft_dev_jwt_secret_2026",
    { expiresIn: "7d" }
  );
};

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and password",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    if (getDBStatus()) {
      const userExists = await User.findOne({ email: normalizedEmail });
      if (userExists) {
        return res.status(400).json({
          success: false,
          message: "An account with this email already exists",
        });
      }

      const user = await User.create({
        name: name.trim(),
        email: normalizedEmail,
        password,
      });

      return res.status(201).json({
        success: true,
        message: "Account created successfully",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: generateToken(user._id.toString()),
        },
      });
    } else {
      // In-memory fallback
      const existing = inMemoryUsers.find((u) => u.email === normalizedEmail);
      if (existing) {
        return res.status(400).json({
          success: false,
          message: "An account with this email already exists",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = {
        _id: "mem_" + Date.now(),
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        role: "user",
        createdAt: new Date(),
      };
      inMemoryUsers.push(newUser);

      return res.status(201).json({
        success: true,
        message: "Account created successfully (local mode)",
        data: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          token: generateToken(newUser._id),
        },
      });
    }
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server error while registering",
    });
  }
};

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    if (getDBStatus()) {
      const user = await User.findOne({ email: normalizedEmail });
      if (user && (await user.matchPassword(password))) {
        return res.json({
          success: true,
          message: "Signed in successfully",
          data: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id.toString()),
          },
        });
      }
    } else {
      // In-memory fallback
      const user = inMemoryUsers.find((u) => u.email === normalizedEmail);
      if (user && (await bcrypt.compare(password, user.password))) {
        return res.json({
          success: true,
          message: "Signed in successfully (local mode)",
          data: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
          },
        });
      }
    }

    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server error during login",
    });
  }
};

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
const getMe = async (req, res) => {
  try {
    return res.json({
      success: true,
      data: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch user profile",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  inMemoryUsers,
};
