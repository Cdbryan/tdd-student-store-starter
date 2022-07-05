// YOUR CODE HERE

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Store = require("./models/store")
const {storage} = require("./data/storage")
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
  const id = req.params.productID
  const product =  Store.getById(id)
  res.send({product})
});

app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

app.post("/store", (req,res) => {
  try{
    const user = {
      name: req.body.name,
      email: req.body.email
    } 
    // var purchases = storage.get("purchases").value()
    storage.get("purchases").push(user).write()
    // console.log("purchases array", purchases)
    res.status(201).json({user})
  }
  catch(e)
  {
    console.log(e)
  }
})

module.exports = app;
