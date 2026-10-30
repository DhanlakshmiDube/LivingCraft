const Product = require("../models/Product");
const Contact = require("../models/Contact");
const { defaultProducts } = require("../data/products");

const seedDatabase = async () => {
  try {
    // 1. Seed Products if empty
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      await Product.insertMany(defaultProducts);
      console.log(`[Database Seed] Inserted ${defaultProducts.length} default products into 'products' collection.`);
    }

    // 2. Ensure Contact collection has at least 1 initial entry so collection shows in Atlas
    const contactCount = await Contact.countDocuments();
    if (contactCount === 0) {
      await Contact.create({
        name: "LivingCraft Welcome Consultation",
        email: "consult@livingcraft.com",
        roomType: "Living Room",
        area: 350,
        material: "Premium",
        budget: "₹1–₹3 lakh",
        message: "Welcome to LivingCraft! This initial inquiry verifies your MongoDB Atlas connection and schema synchronization.",
        status: "new",
      });
      console.log("[Database Seed] Created initial consultation record in 'contacts' collection.");
    }

    console.log("[Database Seed] All collections (users, contacts, products) are ready in MongoDB Atlas!");
  } catch (error) {
    console.warn("[Database Seed Error]:", error.message);
  }
};

module.exports = { seedDatabase };
