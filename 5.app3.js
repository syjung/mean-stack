var express = require('express');
var app = express();

const port = 8000;

app.listen(port, function() {
    console.log(`Connteced ${port} port!`);
});

var  ver1 = require('./routes/ver11')(app);
app.use('/ver1', ver1);

var  ver2 = require('./routes/ver21')(app);
app.use('/ver2', ver2);

