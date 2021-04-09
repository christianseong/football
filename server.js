const express = require('express');

const serveStatic =require('serve-static');
const path = require('path');

const app = express();

app.use(express.static(__dirname+"/dist/"));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/dist/index.html");

});

app.get('/test', function(req,res){
    res.send("this is test");
    console.log("test");
})

const port = process.env.PORT || 8080
app.listen(port);

console.log('Listening port'+port);
