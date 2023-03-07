const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsersTable, (req, res) => {
  res.status(200).json(res.locals.users);
});

module.exports = router;