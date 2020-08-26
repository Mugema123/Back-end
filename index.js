const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./signin/routes/user");
const blog = require("./contro/letters");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/News", { useNewUrlParser: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("connection has failed");
  });

app.use("/", blog);
app.use("/user", userRoutes);

app.listen(5050, () => {
  console.log("<< localhost:5050>>");
});
