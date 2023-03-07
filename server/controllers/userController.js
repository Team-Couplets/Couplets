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
    res.locals.users = response;
    return next();
  });
}

userController.addPoems = (req, res, next) => {
  console.log('addPoems triggered');
  const poem1 = req.body.poem1;
  const poem2 = req.body.poem2;
  const poem3 = req.body.poem3;
  const email = req.body.email;
  console.log(req.body.poem1, req.body.poem2, req.body.poem3, req.body.email);
  db.query('UPDATE poems SET poem1 = $1, poem2 = $2, poem3 = $3 WHERE accid = $4', [poem1, poem2, poem3, email], (err, response) => {
    if (err) next({
      log: 'Error with addPoems - unable to add data from db',
      status: 400,
      message: {err: 'Error with addPoems'},
    });
    res.locals.users = response;
    return next();
  });
}

module.exports = userController;