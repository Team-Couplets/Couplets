const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static("client/assets"));

const apiRouter = require(__dirname + '/routes/api.js');
const authRouter = require(__dirname + '/routes/auth.js');

app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.use("*", (req, res) => {
  res.status(404).json("Page not found");
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})