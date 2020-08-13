var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hello Sir");
});

app.listen(8000, function( ){
    console.log("<< localhost:8000>>");
});


/*const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Rwanda,Hello");
});

app.listen(9000, ( ) => {
    console.log("<< localhost:9000>>");
}); */