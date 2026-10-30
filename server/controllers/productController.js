const Product = require("../models/Product");
const { getDBStatus } = require("../config/db");
const { defaultProducts } = require("../data/products");

// @route   GET /api/products
// @desc    Get all catalog products
// @access  Public
const getProducts = async (req, res) => {
  try {
    if (getDBStatus()) {
      let products = await Product.find();
      if (!products || products.length === 0) {
        products = await Product.insertMany(defaultProducts);
      }
      return res.json({
        success: true,
        count: products.length,
        data: products,
      });
    } else {
      return res.json({
        success: true,
        count: defaultProducts.length,
        data: defaultProducts.map((p, idx) => ({ id: idx + 1, ...p })),
      });
    }
  } catch (error) {
    console.error("Get products error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to load products",
    });
  }
};

module.exports = {
  getProducts,
  defaultProducts,
};
