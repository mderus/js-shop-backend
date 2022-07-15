const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      // @TODO: find out how to cut a piece of data (password) from this returned promise
      req.user = await User.findOne({where: {_id: decodedToken.id}});

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token found');
  }
});

module.exports = {
  protect,
};
