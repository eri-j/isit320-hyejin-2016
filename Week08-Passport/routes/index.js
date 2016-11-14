var express = require('express');
var router = express.Router();
var passport = require('passport');

var clientId = '98536876757-4bgto6qnr253ae4140j2a4kuk3ajqtfd.apps.googleusercontent.com';
var clientSecret = 's1C_mAUoWzJ6hrDwKIe4F-wm';

/* GET home page. */
router.get('/', function(request, response, next) {
    'use strict';
    console.log('Index called');

    var data = {
        title: 'Passport Google'
    };

    if (request.isAuthenticated && request.user && request.user.displayName) {
        data.name = request.user.displayName;
    }

    response.render('index', data);

});

passport.serializeUser(function(user, done) {
    'use strict';
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    'use strict';
    done(null, obj);
});

router.get('/login', function(req, res) {
    'use strict';
    res.render('login', {
        user: req.user
    });
});

router.get('/logout', function(request, response) {
    'use strict';
    request.logout();
    response.redirect('/');
});

router.get('/status', function(request, response) {
    'use strict';
    console.log('Status called');
    console.log('Auth: ' + request.isAuthenticated('google'));
    response.send({
        result: 'Success',
        authenticated: request.isAuthenticated()
    });
});

module.exports = router;
