
var http = require('http');

var server = http.createServer(function(req, res){
    console.log(req.url);
    res.end('Hey Guys !');
});

server.listen(3001, '127.0.0.1')