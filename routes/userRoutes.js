const express = require('express');
const userRouter = express.Router();

const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware');

userRouter.route('/').post(registerUser);
userRouter.post('/login', authUser);
userRouter
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = {userRouter};
