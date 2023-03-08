const sqlDB = require('../models/users');
const mongoDB = require('../models/mongoDBUsers');

const userController = {};

userController.getUsersTable = (req, res, next) => {
  console.log('getUsers triggered');
  sqlsqlDB.query('select * from Users', (err, response) => {
    if (err) return next({
      log: 'Error with getUsers - unable to grab data from sqlsqlDB',
      status: 400,
      message: {err: 'Error with getUsers'},
    });
    res.locals.users = response;
    return next();
  });
}

userController.userSignUp = (req, res, next) => {
  const userQuery = 'SELECT * FROM Users WHERE email = $1'
  const value = [res.locals.email.toLowerCase()];
  sqlsqlDB.query(userQuery, value, (err, response) => {
    if (err) return next ({
      log: 'Error with userSignUp - unable to grab data from sqlsqlDB',
      status: 400,
      message: {err: 'Error with userSignUp'},
    })
    if (response.rowCount < 1) {
      const newUserQuery = 'INSERT INTO Users (email) VALUES ($1)';
      sqlsqlDB.query(newUserQuery, value, (err, response) => {
        if (err) return next ({
          log: 'Error with userSignUp - unable to store user to sqlsqlDB',
          status: 400,
          message: {err: 'Error with userSignUp'},
        })
      })
    }
  });
  return next();
}

userController.setupUser = (req, res, next) => {
  const body = req.body.formBody;
  const pName = body.penName;
  const fName = body.firstName;
  const lName = body.lastName;
  const location = body.location;
  const bio = body.bio;
  const email = body.email;
  console.log(pName, fName, lName, location, email);
  sqlDB.query("UPDATE users SET penName = $1, firstName = $2, lastName = $3, location = $4, bio = $5 WHERE email = $6", [pName, fName, lName, location, bio, email], (err, response) => {
    if (err) next({
      log: 'Error with setupUser - unable to add data from sqlDB',
      status: 400,
      message: {err: 'Error with setupUser'},
    });
    res.locals.users = response;
    return next();
  });
}

userController.getUser = (req, res, next) => {
  const email = req.body.formBody.email;
  sqlDB.query("SELECT * from users WHERE email = $1", [email], (err, response) => {
    if (err) next({
      log: 'Error with setupUser - unable to add data from sqlDB',
      status: 400,
      message: {err: 'Error with setupUser'},
    });
    res.locals.users = response.rows;
    return next();
  });
}

userController.addPoems = (req, res, next) => {
  console.log('addPoems triggered');
  const body = req.body.formBody;
  const poem1 = body.poem1;
  const poem2 = body.poem2;
  const poem3 = body.poem3;
  const email = body.email.toLowerCase();
  sqlDB.query("UPDATE users SET poem1 = $1, poem2 = $2, poem3 = $3 WHERE email = $4", [poem1, poem2, poem3, email], (err, response) => {
    if (err) next({
      log: 'Error with addPoems - unable to add data from sqlDB',
      status: 400,
      message: {err: 'Error with addPoems'},
    });
    res.locals.poems = response;
    return next();
  });
}

userController.getPoems = (req, res, next) => {
  console.log('getPoems triggered');
  const email = req.body.formBody.email;
  sqlDB.query('SELECT poem1, poem2, poem3 FROM users WHERE email = $1', [email.toLowerCase()], (err, response) => {
    if (err) next({
      log: 'Error with getPoems - unable to add data from sqlDB',
      status: 400,
      message: {err: 'Error with getPoems'},
    });
    res.locals.poems = response.rows;
    return next();
  });
}

module.exports = userController;