const express = require('express');
const userRouter = express.Router();

const {
  authUser,
  getUserProfile,
  registerUser,
} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware');

userRouter.route('/').post(registerUser);
userRouter.post('/login', authUser);
userRouter.route('/profile').get(protect, getUserProfile);

module.exports = {userRouter};
