const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

// Fetch all products
// GET /api/products
// Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.findAll(req.params.products);
  res.json(products);
});

// Fetch product by id
// GET /api/products/:id
// Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

module.exports = {
  getProducts,
  getProductById,
};
