var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        pageTitle: 'Main Page',
        programTitle: 'Week10-JadeMixinBasics'
    });
});

router.get('/foo', function(request, response) {
    'use strict';
    console.log(request.query);
    response.send(request.query);
});

module.exports = router;
