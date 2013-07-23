var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    var res = fs.readFileSync('./index.html').toString();
    response.send(res);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});