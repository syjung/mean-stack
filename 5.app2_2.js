var express = require('express');
var app = express();

const port = 8000;

app.listen(port, function() {
    console.log(`Connteced ${port} port!`);
});

var ver1 = require('./routes/ver1');
app.use('/ver1', ver1);

var ver2 = require('./routes/ver2');
app.use('/ver2', ver2);

