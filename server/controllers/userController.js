const sqlDB = require('../models/users');

const userController = {};

userController.getUsersTable = (req, res, next) => {
  console.log('getUsers triggered');
  sqlDB.query('select * from Users', (err, response) => {
    if (err) return next({
      log: 'Error with getUsers - unable to grab data from sqlDB',
      status: 400,
      message: {err: 'Error with getUsers'},
    });
    res.locals.users = response.rows;
    return next();
  });
}

userController.userSignUp = (req, res, next) => {
  const userQuery = 'SELECT * FROM Users WHERE email = $1'
  const value = [res.locals.email.toLowerCase()];
  sqlDB.query(userQuery, value, (err, response) => {
    if (err) return next ({
      log: 'Error with userSignUp - unable to grab data from sqlDB',
      status: 400,
      message: {err: 'Error with userSignUp'},
    })
    if (response.rowCount < 1) {
      const newUserQuery = 'INSERT INTO Users (email) VALUES ($1)';
      sqlDB.query(newUserQuery, value, (err, response) => {
        if (err) return next ({
          log: 'Error with userSignUp - unable to store user to sqlDB',
          status: 400,
          message: {err: 'Error with userSignUp'},
        })
      })
    }
  });
  return next();
}

module.exports = userController;