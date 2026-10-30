const Product = require("../models/Product");
const { getDBStatus } = require("../config/db");

const defaultProducts = [
  {
    name: "LACK Side Table",
    category: "Tables",
    price: 799,
    description: "A simple, versatile table for your living space.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=LACK%20side%20table",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Minimalist table in a home interior",
  },
  {
    name: "BILLY Bookcase",
    category: "Storage",
    price: 4990,
    description: "A classic bookcase for books and decorative pieces.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=BILLY%20bookcase",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Books arranged on a bookshelf",
  },
  {
    name: "FADO Table Lamp",
    category: "Lighting",
    price: 1499,
    description: "Soft lighting for a cosy interior.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=FADO%20lamp",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Decorative lamp creating warm ambient lighting",
  },
  {
    name: "KALLAX Shelving Unit",
    category: "Storage",
    price: 3990,
    description: "Open shelving for organising your home.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=KALLAX",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Organised shelving in a modern interior",
  },
  {
    name: "Dining Table",
    category: "Tables",
    price: 5990,
    description: "Explore dining tables for everyday living.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=dining%20table",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Dining furniture in a contemporary home",
  },
  {
    name: "Decorative Cushion",
    category: "Decor",
    price: 499,
    description: "Add a finishing touch to your sofa or bed.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=cushion",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Soft furnishings and home decor",
  },
];

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
