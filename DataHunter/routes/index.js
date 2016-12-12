var express = require('express');
var router = express.Router();
//var router = require('./Couch');

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'hyejin DataHunter'
    });
});

module.exports = router;
