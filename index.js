var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.listen(3001)
console.log('You are listening to port 3001')

app.get('/todo', function(req, res){
    res.send("Hello World !")
})