const express = require('express');
const productRouter = express.Router();

const {
  getProducts,
  getProductById,
} = require('../controllers/productController');

productRouter.route('/').get(getProducts);
productRouter.route('/:id').get(getProductById);

module.exports = {productRouter};
