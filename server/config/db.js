const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/livingcraft";
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000,
    });
    isConnected = true;
    console.log(`[Database] MongoDB connected successfully to ${conn.connection.host}`);
    return conn;
  } catch (error) {
    isConnected = false;
    console.warn(`[Database Warning] Could not connect to MongoDB at ${uri} (${error.message}).`);
    console.warn("[Database Info] Server is running with in-memory persistence fallback for offline development.");
    return null;
  }
};

const getDBStatus = () => isConnected;

module.exports = { connectDB, getDBStatus };
