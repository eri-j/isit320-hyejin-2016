var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
    'use strict';
    response.render('index', {
        title: 'Click Routes'
    });
});

router.get('/Item01', function(request, response) {
    'use strict';
    var result = {
        'result': 'SuccessForIsit320'
    };
    response.send(result);
});

router.get('/Item02', function(request, response) {
    'use strict';
    var route = {
        'route': '/Item02'
    };
    response.send(route);
});

router.get('/Item03', function(request, response) {
    'use strict';
    var message = {
        'message': 'The server sent me.'
    };
    response.send(message);
});

module.exports = router;
