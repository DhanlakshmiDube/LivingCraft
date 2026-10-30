const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    roomType: {
      type: String,
      required: [true, "Room type is required"],
      enum: ["Living Room", "Kitchen", "Office", "Bedroom", "Bathroom", "Balcony", "Porch", "Other"],
      default: "Living Room",
    },
    area: {
      type: Number,
      required: [true, "Room area is required"],
      min: [1, "Area must be at least 1 sq. ft."],
    },
    material: {
      type: String,
      enum: ["Basic", "Standard", "Premium"],
      default: "Standard",
    },
    budget: {
      type: String,
      default: "Not specified",
    },
    message: {
      type: String,
      required: [true, "Project description message is required"],
      maxlength: [2000, "Message cannot exceed 2000 characters"],
    },
    status: {
      type: String,
      enum: ["new", "reviewing", "contacted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
