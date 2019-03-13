var express = require('express');
var app = express();

var things = require('./things.js');
var dynamic = require('./dynamic.js');

app.use('/things', things);

app.use('/dynamic', dynamic);

app.get('/', function(req, res){
 res.send("Hello world!");
});

app.get('/hello',function(req,res) {
    res.send("Welcome to hello controller!!");
});

app.listen(3000);
