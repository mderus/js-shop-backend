const express = require('express');
const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

const productRouter = express.Router();

productRouter
  .get(
    '/',
    asyncHandler(async (req, res) => {
      const products = await Product.findAll(req.params.products);

      res.json(products);
    })
  )
  .get(
    '/:id',
    asyncHandler(async (req, res) => {
      const product = await Product.findOne({where: {_id: req.params.id}});

      if (product) {
        res.json(product);
      } else {
        res.status(404);
        throw new Error('Product not found');
      }
    })
  );

module.exports = {productRouter};
