var express = require('express');
var router = express.Router();
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

/**************************************
 *  Facebook
 **************************************/

router.get('/profile', require('connect-ensure-login').ensureLoggedIn(),
    function(req, res) {
        'use strict';
        console.log(req.user);
        res.render('profile-facebook', {
            title: 'Facebook Profile',
            user: req.user
        });
    });

passport.use(new Strategy({
        clientID: process.env.CLIENT_ID || '308058496247255',
        clientSecret: process.env.CLIENT_SECRET || 'bb092c748664712e481212dfba698c37',
        callbackURL: 'http://localhost:30025/facebook/login/return'
    },
    function(accessToken, refreshToken, profile, done) {
        'use strict';
        // In this example, the user's Facebook profile is supplied as the user
        // record.  In a production-quality application, the Facebook profile should
        // be associated with a user record in the application's database, which
        // allows for account linking and authentication with other identity
        // providers.
        return done(null, profile);
    }));

// passport.use(new FacebookStrategy({
//         clientID: process.env.CLIENT_ID || '308058496247255',
//         clientSecret: process.env.bb092c748664712e481212dfba698c37,
//         callbackURL: 'http://localhost:30025/facebook/login/return',
//         profileFields: ['id', 'displayName', 'photos', 'email']
//     },
//     function(accessToken, refreshToken, profile, done) {
//         'use strict';
//         console.log('accessToken', accessToken);
//         console.log('refreshToken', refreshToken);
//         console.log('profile', profile);
//         return done(null, profile);
//     }));

router.get('/login',
    passport.authenticate('facebook'));

//router.get('/login/facebook/return',
router.get('/login/return',
    passport.authenticate('facebook', {
        failureRedirect: '/login'
    }),
    function(req, res) {
        'use strict';
        res.redirect('/');
    });

module.exports = router;
