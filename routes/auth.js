const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const validationHelper = require('../helpers/validation');
const isLoggedInHelper = require('../helpers/isLoggedIn');

router.get('/login', isLoggedInHelper, authController.getLogin);
router.post('/login', validationHelper.login(), authController.postLogin);

router.get('/signup', isLoggedInHelper, authController.getSignup);
router.post('/signup', validationHelper.signup(), authController.postSignup);

router.get('/forget-password', isLoggedInHelper, authController.getForgetPassword);
router.post('/forget-password', validationHelper.forget(), authController.postForgetPassword);

router.get('/reset-password/:token', isLoggedInHelper, authController.getResetPassword);
router.post('/reset-password', validationHelper.reset(), authController.postResetPassword);

router.post('/logout', authController.postLogout);

module.exports = router;
