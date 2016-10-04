var express = require('express');
var app = express();

const port = 3000;

app.listen(port, function() {
    console.log(`Connteced ${port} port!`);
});

app.get('/', function(req, res) {
    res.send('Hello world!');
});

app.get('/login', function(req, res) {
    res.send('login please');
});

/*
//node에서 기본으로 제공해주는 모듈
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var cbWorker = function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
}

var cbListen = function() {
  console.log(`Server running at http://${hostname}:${port}/`);
}

const server = http.createServer(cbWorker);
server.listen(port, hostname, cbListen);
*/
