//node에서 기본으로 제공해주는 모듈
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

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
