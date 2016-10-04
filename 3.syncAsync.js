const fs = require('fs');

var data = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(data.length);

/*
var data = fs.readFile('data.txt', {'encoding' : 'utf8'}, function(){
    console.log(2);
    console.log(data);
});
*/
var cbFunc = function(err, data) {
    console.log(2);
    console.log(data.length);
}
console.log(1);
fs.readFile('data.txt', {'encoding' : 'utf8'}, cbFunc);
console.log(3);

