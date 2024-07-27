const express = require('express');
const { login, register, verifyRegistration } = require('../../controller/authController');

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.get('/register-verification', verifyRegistration);

module.exports = authRouter;