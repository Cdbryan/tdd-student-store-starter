// YOUR CODE HERE

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Store = require("./models/store");
const { storage } = require("./data/storage");
// const router = express.Router();

var cors = require("cors");
app.use(cors());

var morgan = require("morgan");
morgan("tiny");

app.use(express.json());
app.use(bodyParser.json());
// app.use("/", router);

app.get("/store", (req, res) => {
  res.send(Store.listProducts());
});

app.get("/store/:productID", (req, res) => {
  console.log(req.params);
  const id = req.params.productID;
  const product = Store.getById(id);
  res.send({ product });
});

app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

//time stuff 
let date_ob = new Date();
// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours() - 12;

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);

app.post("/store", (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
    };
    const shoppingCart = {
      order: req.body.order,
      total: req.body.total,
    };
    const time = {
      year: year, 
      month: month, 
      date: date,
      hours: hours,
      minutes: minutes,
      seconds: seconds
     };
    const receipt = {user, shoppingCart, time};
    storage.get("purchases").push(receipt).write();
    res.status(201).json({ "purchase": purchase });
  } catch (e) {
    console.log(e);
  }
});

module.exports = app;
