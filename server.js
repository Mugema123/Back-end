const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./signin/routes/user");
const blog = require("./contro/letters");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");


//mongodb+srv://Mugema:<password>@cluster0.s89cn.mongodb.net/<dbname>?retryWrites=true&w=majority
//connect("mongodb://localhost:27017/News", { useNewUrlParser: true })
// Connect to MongoDB database
mongoose
  .connect("mongodb+srv://Mugema:M50nF742OTqlkRvt@cluster0.s89cn.mongodb.net/myBrand?retryWrites=true&w=majority", { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("connection has failed");
  });
  app.get('/', (req, res) => {
    res.json({"message": "Welcome to Backend. "});
});

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
 
app.use("/", blog);
app.use("/user", userRoutes);

app.listen(5000, () => {
  console.log("<< localhost:5000>>");
});
