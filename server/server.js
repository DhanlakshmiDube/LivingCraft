const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "LivingCraft backend is running!"
  }); 
}); 

app.get("/api/health", (req, res) => {
  res.json({ 
    success: true,
    message: "LivingCraft API is working" 
  }); 
}); 

const PORT = process.env.PORT || 5000; 

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`LivingCraft server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start LivingCraft:", error.message);
    process.exit(1);
  }
} 

startServer();
