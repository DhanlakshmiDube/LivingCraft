const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { inMemoryUsers } = require("../controllers/authController");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "livingcraft_dev_jwt_secret_2026"
      );

      // Check MongoDB first if connected
      let user = null;
      try {
        user = await User.findById(decoded.id).select("-password");
      } catch (err) {
        // DB not reachable, fall back to in-memory check
      }

      if (!user && inMemoryUsers) {
        const memUser = inMemoryUsers.find((u) => u._id === decoded.id);
        if (memUser) {
          const { password, ...safeUser } = memUser;
          user = safeUser;
        }
      }

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User not found or authorization revoked",
        });
      }

      req.user = user;
      return next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, token verification failed",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, no token provided",
    });
  }
};

module.exports = { protect };
