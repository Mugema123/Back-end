
const express = require("express");
const app = express();
const mongoose = require("mongoose");



// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/News", { useNewUrlParser: true }).then(() =>{

    
app.use(express.json());

const blog = require("./contro/letters");
app.use("/",blog);
    app.listen(9000, ( ) => {
        console.log("<< localhost:9000>>");
    }); 
}).catch(()=>{
    console.log('connection has failed')
});





