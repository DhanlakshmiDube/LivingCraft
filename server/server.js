const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB, getDBStatus } = require("./config/db");

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging in development
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Root & Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "LivingCraft backend is running!",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "LivingCraft API is fully operational",
    database: getDBStatus() ? "connected" : "in-memory (offline development)",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/products", productRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API route ${req.method} ${req.originalUrl} not found`,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();
  } catch (error) {
    console.warn("[Database Warning] Database initialization skipped:", error.message);
  }

  app.listen(PORT, () => {
    console.log(`LivingCraft server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
  });
}

startServer();
