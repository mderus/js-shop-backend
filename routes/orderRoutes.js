const express = require('express');
const orderRouter = express.Router();

const {addOrderItems} = require('../controllers/orderController');
const {protect} = require('../middleware/authMiddleware');

orderRouter.route('/').post(protect, addOrderItems);

module.exports = {
  orderRouter,
};
