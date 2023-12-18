var express = require('express');
var bodyParser = require('body-parser');


var app = express()

//set up template engine
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({extended: false});

//static files
app.use('/assets', express.static('./public/assets'));

app.post('/todo', urlencodedParser, function(req, res){
    //get data from view and add it to mongodb
    var newTodo = Todo(req.body).save().then((data) => res.json(data)).catch((err) => console.log('error'))
});


//listen to port
app.listen(3001);
console.log('You are listening to port 3001');

