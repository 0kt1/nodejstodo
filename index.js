var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('./public/assets'));

app.listen(3001)
console.log('You are listening to port 3001')

app.get('/todo', function(req, res){
    res.render('todo', {todos: req.params.item})
})