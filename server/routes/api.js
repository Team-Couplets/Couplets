const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsersTable, (req, res) => {
  res.status(200).json(res.locals.users);
});

router.post("/user/setup", userController.setupUser, (req, res, next) => {
  res.status(200).json(res.locals.users);
});

router.get("/user/get", userController.getUser, (req, res, next) => {
  res.status(200).json(res.locals.users);
});

router.get("/user/poems", userController.getPoems, (req, res, next) => {
  console.log("hit finished");
  res.status(200).json(res.locals.poems);
});

router.post("/user/poems", userController.addPoems, (req, res, next) => {
  res.status(200).json(res.locals.poems);
});

router.get("/feed", userController.getFeed, (req, res, next) => {
  // console.log(res.locals.feed);
  res.status(200).json(res.locals.feed);
});

// router.post('/like', userController.addLike, (req, res, next) => {
//   res.status(200).json("Profile Liked");
// })

//for testing
// router.post('/user/create', userController.userSignUp, (req, res, next) => {
//   res.status(200).json("this ran fully");
// })

module.exports = router;
