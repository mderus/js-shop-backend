const express = require('express');
const {ProductRecord} = require('../records/productRecord');

const productRouter = express.Router();

productRouter
  .get('/', async (req, res) => {
    const products = await ProductRecord.getProducts();
    res.json(products);
  })
  .get('/:id', async (req, res) => {
    const product = await ProductRecord.getProductById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  });

module.exports = {productRouter};
