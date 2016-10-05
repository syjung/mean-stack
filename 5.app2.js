var express = require('express');
var app = express();

const port = 8000;

app.listen(port, function() {
    console.log(`Connteced ${port} port!`);
});

app.get('/ver1/1', function(req, res) {
    res.send('/ver1/1');
});
app.get('/ver1/2', function(req, res) {
    res.send('/ver1/1');
});

app.get('/ver2/1', function(req, res) {
    res.send('/ver2/1');
});
app.get('/ver2/2', function(req, res) {
    res.send('/ver2/1');
});