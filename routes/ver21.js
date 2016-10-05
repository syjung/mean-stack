module.exports = function(app) {
    var express = require('express');
    var route = express.Router();

    route.get('/1', function(req, res) {
            res.send('/ver2/1');
    });
    route.get('/2', function(req, res) {
            res.send('/ver2/2');
    });

    return route;
};
