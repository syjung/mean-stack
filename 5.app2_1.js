var express = require('express');
var app = express();

const port = 8000;

app.listen(port, function() {
    console.log(`Connteced ${port} port!`);
});

var  ver1 = express.Router();
app.use('/ver1', ver1);
ver1.get('/1', function(req, res) {
    res.send('/ver1/1');
});
ver1.get('/2', function(req, res) {
    res.send('/ver1/1');
});

var  ver2 = express.Router();
app.use('/ver2', ver2);
ver2.get('/1', function(req, res) {
    res.send('/ver2/1');
});
ver2.get('/2', function(req, res) {
    res.send('/ver2/1');
});