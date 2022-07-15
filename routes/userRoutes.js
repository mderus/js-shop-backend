const express = require('express');
const userRouter = express.Router();

const {authUser} = require('../controllers/userController');

userRouter.post('/login', authUser);

module.exports = {userRouter};
