const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsersTable, (req, res, next) => {
  res.status(200).json(res.locals.users);
});

// router.get('/user/setup')

router.get('/user/poems', userController.addPoems, (req, res, next) => {
  res.status(200).json(res.locals.users);
});

module.exports = router;