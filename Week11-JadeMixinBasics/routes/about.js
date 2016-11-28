var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    'use strict';
    res.render('about', {
        title: 'About'
    });
});

module.exports = router;
