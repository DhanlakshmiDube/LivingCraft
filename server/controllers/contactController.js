const Contact = require("../models/Contact");
const { getDBStatus } = require("../config/db");

// In-memory fallback store when MongoDB is not running locally
const inMemoryContacts = [];

// @route   POST /api/contact
// @desc    Submit a new quote request or consultation message
// @access  Public
const submitContact = async (req, res) => {
  try {
    const { name, email, roomType, area, material, budget, message } = req.body;

    if (!name || !email || !roomType || !area || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields (name, email, roomType, area, message)",
      });
    }

    const newInquiry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      roomType: roomType || "Living Room",
      area: Number(area),
      material: material || "Standard",
      budget: budget || "Not specified",
      message: message.trim(),
      status: "new",
      createdAt: new Date(),
    };

    if (getDBStatus()) {
      const savedInquiry = await Contact.create(newInquiry);
      return res.status(201).json({
        success: true,
        message: "Thank you! Your quote request has been received by our design team.",
        data: savedInquiry,
      });
    } else {
      // In-memory fallback
      const inMemRecord = {
        _id: "inq_" + Date.now(),
        ...newInquiry,
      };
      inMemoryContacts.unshift(inMemRecord);

      return res.status(201).json({
        success: true,
        message: "Thank you! Your quote request has been received by our design team (offline mode).",
        data: inMemRecord,
      });
    }
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to submit quote request. Please try again.",
    });
  }
};

// @route   GET /api/contact
// @desc    Get all inquiries (admin view)
// @access  Public (or protected)
const getContacts = async (req, res) => {
  try {
    if (getDBStatus()) {
      const inquiries = await Contact.find().sort({ createdAt: -1 });
      return res.json({
        success: true,
        count: inquiries.length,
        data: inquiries,
      });
    } else {
      return res.json({
        success: true,
        count: inMemoryContacts.length,
        data: inMemoryContacts,
      });
    }
  } catch (error) {
    console.error("Get contacts error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to retrieve quote inquiries",
    });
  }
};

module.exports = {
  submitContact,
  getContacts,
};
