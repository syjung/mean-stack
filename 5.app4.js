var fs = require('fs');
var express = require('express');
var app = express();

const port = 8000;

app.listen(port, function() {
    console.log(`Connteced ${port} port!`);
});

// var  ver1 = require('./routes/ver11')(app);
// app.use('/ver1', ver1);
//
// var  ver2 = require('./routes/ver21')(app);
// app.use('/ver2', ver2);

var modules = {};
app.use('/:base', function(req, res, next){
  var base = req.params.base || 'index';
  var module = `./routes/${base}`;
  var fileName = `${__dirname}/routes/${base}.js`;

  var requireFunc = getRequire(module, fileName);
  requireFunc(req, res, next);
});

function getRequire(module, fileName) {
    var stats = fs.statSync(fileName);
    if(modules[fileName]) {
        if(!stats.mtime.toString().localeCompare(modules[fileName].mtime.toString())){
            return require(module)(app);
        } else {
            modules[fileName] = stats;
            delete require.cache[require.resolve(module)];
            return require(module)(app);
        }
    } else {
        modules[fileName] = stats;
        return require(module)(app);
    }
}
