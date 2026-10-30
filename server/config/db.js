const mongoose = require("mongoose");
const dns = require("dns");
const { seedDatabase } = require("./seed");

let isConnected = false;

// Resolve Windows DNS issue where Node.js cannot resolve SRV records from local router DNS
try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {
  // Ignore
}

// Clean connection string (e.g. remove unintentional angle brackets from <password>)
const sanitizeMongoURI = (rawUri) => {
  if (!rawUri) return "";
  // If user pasted mongodb+srv://user:<password>@cluster..., remove the < and >
  return rawUri.replace(/:<([^>]+)>@/, ":$1@");
};

const connectDB = async () => {
  let uri = sanitizeMongoURI(process.env.MONGO_URI);

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
    console.warn("[Database Notice] Replace YOUR_ACTUAL_PASSWORD with your real MongoDB Atlas password in server/.env");
    return null;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`[Database] MongoDB connected successfully to ${conn.connection.host}`);
    console.log(`[Database] Database Name: ${conn.connection.name}`);

    // Seed collections immediately so collections are visible in Atlas GUI & Compass
    await seedDatabase();

    return conn;
  } catch (error) {
    isConnected = false;
    console.warn(`[Database Warning] Could not connect to MongoDB Atlas (${error.message}).`);

    if (error.message.includes("whitelist") || error.message.includes("Could not connect to any servers")) {
      console.warn("==========================================================================");
      console.warn(" [ACTION REQUIRED IN MONGODB ATLAS]: IP Access Whitelist");
      console.warn(" Your current IP is blocked by your MongoDB Atlas Network Access rules.");
      console.warn(" 1. Go to https://cloud.mongodb.com -> Security -> Network Access");
      console.warn(" 2. Click '+ ADD IP ADDRESS'");
      console.warn(" 3. Click 'ALLOW ACCESS FROM ANYWHERE' (0.0.0.0/0) or add your IP (103.9.12.131)");
      console.warn(" 4. Click 'Confirm'");
      console.warn("==========================================================================");
    }

    console.warn("[Database Info] While connecting, LivingCraft is running in offline demo mode.");
    startAutoReconnect(uri);
    return null;
  }
};

let retryTimer = null;
const startAutoReconnect = (uri) => {
  if (retryTimer || isConnected) return;
  retryTimer = setInterval(async () => {
    if (isConnected) {
      clearInterval(retryTimer);
      retryTimer = null;
      return;
    }
    try {
      const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 4000 });
      isConnected = true;
      clearInterval(retryTimer);
      retryTimer = null;
      console.log(`\n>>> [Database] Connected to MongoDB Atlas (${conn.connection.host})! <<<`);
      await seedDatabase();
    } catch (e) {
      // Continue background retry silently
    }
  }, 10000);
};

const getDBStatus = () => isConnected;

module.exports = { connectDB, getDBStatus };
