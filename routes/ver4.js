var express = require('express');
var  route = express.Router();

route.get('/1', function(req, res) {
        res.send('/ver4/1');
});
route.get('/2', function(req, res) {
        res.send('/ver4/2');
});

module.exports = route;
