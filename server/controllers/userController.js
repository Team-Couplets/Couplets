const db = require('../models/users');

const userController = {};

userController.getUsersTable = (req, res, next) => {
  console.log('getUsers triggered');
  db.query('select * from Users', (err, response) => {
    if (err) return next({
      log: 'Error with getUsers - unable to grab data from db',
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
  db.query(userQuery, value, (err, response) => {
    if (err) return next ({
      log: 'Error with userSignUp - unable to grab data from db',
      status: 400,
      message: {err: 'Error with userSignUp'},
    })
    if (response.rowCount < 1) {
      const newUserQuery = 'INSERT INTO Users (email) VALUES ($1)';
      db.query(newUserQuery, value, (err, response) => {
        if (err) return next ({
          log: 'Error with userSignUp - unable to store user to db',
          status: 400,
          message: {err: 'Error with userSignUp'},
        })
      })
    }
  });
  return next();
}

userController.setupUser = (req, res, next) => {
  const pName = req.body.penName;
  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const location = req.body.location;
  const bio = req.body.bio;
  const email = req.body.email;
  console.log(pName, fName, lName, location, email);
  db.query("UPDATE users SET penName = $1, firstName = $2, lastName = $3, location = $4, bio = $5 WHERE email = $6", [pName, fName, lName, location, bio, email], (err, response) => {
    if (err) next({
      log: 'Error with setupUser - unable to add data from db',
      status: 400,
      message: {err: 'Error with setupUser'},
    });
    res.locals.users = response;
    return next();
  });
}

userController.addPoems = (req, res, next) => {
  console.log('addPoems triggered');
  const poem1 = req.body.poem1;
  const poem2 = req.body.poem2;
  const poem3 = req.body.poem3;
  const email = req.body.email.toLowerCase();
  db.query("UPDATE users SET poem1 = $1, poem2 = $2, poem3 = $3 WHERE email = $4", [poem1, poem2, poem3, email], (err, response) => {
    if (err) next({
      log: 'Error with addPoems - unable to add data from db',
      status: 400,
      message: {err: 'Error with addPoems'},
    });
    res.locals.poems = response;
    return next();
  });
}

userController.getPoems = (req, res, next) => {
  console.log('getPoems triggered');
  const email = req.body.email;
  db.query('SELECT poem1, poem2, poem3 FROM users WHERE email = $1', [email.toLowerCase()], (err, response) => {
    if (err) next({
      log: 'Error with getPoems - unable to add data from db',
      status: 400,
      message: {err: 'Error with getPoems'},
    });
    res.locals.poems = response.rows;
    return next();
  });
}

module.exports = userController;