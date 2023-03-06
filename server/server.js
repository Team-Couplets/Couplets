const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static("public"));

const api = require(__dirname + '/routes/api.js');

app.use("/", api);


app.use("*", (req, res) => {
  res.status(404).json("Page not found");
})

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json('internal server error');
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})