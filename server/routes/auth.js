const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

//post request to /auth/login to verify token
router.post('/login', authController.verifyJWT, userController.userSignUp, (req, res) => {
    return res.status(200).json(res.locals.email);
})

module.exports = router;