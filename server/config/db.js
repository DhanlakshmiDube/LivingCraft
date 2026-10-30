const mongoose = require("mongoose");
const dns = require("dns");

let isConnected = false;

// Resolve Windows DNS issue where Node.js cannot resolve SRV records from local router DNS
try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {
  // Ignore if custom DNS setting is not permitted in environment
}

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.warn("[Database Info] No MONGO_URI specified in .env. Running with in-memory persistence fallback.");
    return null;
  }

  // Check for placeholder credentials in Atlas connection strings
  if (
    uri.includes("YOUR_ACTUAL_PASSWORD") ||
    uri.includes("YOUR_REAL_PASSWORD") ||
    uri.includes("<password>")
  ) {
    console.warn("[Database Notice] MONGO_URI contains a placeholder password. Running in offline in-memory mode.");
    console.warn("[Database Notice] When ready, replace the placeholder password with your real MongoDB Atlas password in server/.env");
    return null;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`[Database] MongoDB connected successfully to ${conn.connection.host}`);
    return conn;
  } catch (error) {
    isConnected = false;
    console.warn(`[Database Warning] Could not connect to MongoDB (${error.message}).`);
    console.warn("[Database Info] Server is running with in-memory persistence fallback for offline development.");
    console.warn("[Database Info] All APIs (/api/auth, /api/contact, /api/products) remain fully functional.");
    return null;
  }
};

const getDBStatus = () => isConnected;

module.exports = { connectDB, getDBStatus };
