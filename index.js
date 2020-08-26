const morgan = require("morgan");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//const userRoutes = require('./api/routes/user');
const userRoutes = require('./signin/routes/user');
// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/News", { useNewUrlParser: true }).then(() =>{
 
    
app.use(express.json());

const blog = require("./contro/letters");
app.use("/",blog);



app.use("/user", userRoutes);   
//app.use("/user", userRoutes);
     
    app.listen(8000, ( ) => {
        console.log("<< localhost:5000>>");
    }); 
}).catch(()=>{
    console.log('connection has failed')
});

 


