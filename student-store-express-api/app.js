// YOUR CODE HERE

const express = require("express");
const app = express();
const { storage } = require("./data/storage");

var cors = require('cors')
app.use(cors())

var morgan = require("morgan");
morgan("tiny");

app.use(express.json());

app.get("/store", (req, res) => {
  console.log(storage);
  res.send(storage.get("products").value());
});

module.exports = app;
