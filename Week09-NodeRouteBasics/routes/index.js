var express = require('express');
var router = express.Router();
var routerUtils = require('../routes/utils');

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'NodeRouteBasics'
    });
});

router.get('/feetToMiles', function(request, response) {
    'use strict';
    console.log(request.body);
    var feet = parseFloat(request.query.feet) / 5280;
    response.send({
        result: 'success',
        ok: true,
        feetEntered: feet
    });
});

router.get('/milesToFeet', function(request, response) {
    'use strict';
    console.log(request.body);
    var miles = parseFloat(request.query.miles) * 5280;
    response.send({
        result: 'success',
        ok: true,
        mileEntered: miles
    });
});

router.post('/getCircumference', function(request, response) {
    'use strict';
    console.log(request.body);
    var radius = parseFloat(request.body.radius);
    var result = routerUtils.myObject.circumference(radius);
    response.send({
        result: 'success',
        ok: true,
        radiusEntered: radius,
        circumference: result
    });
});

module.exports = router;
