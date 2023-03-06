const db = require('../models/users');

const userController = {};

userController.getUsersTable = (req, res, next) => {
  console.log('getUsers triggered');
  db.query('select * from Users', (err, response) => {
    if (err) next({
      log: 'Error with getUsers - unable to grab data from db',
      status: 400,
      message: {err: 'Error with getUsers'},
    });
    res.locals.users = response.rows;
    return next();
  });
}

module.exports = userController;