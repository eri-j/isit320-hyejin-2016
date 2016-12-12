var express = require('express');
var router = express.Router();
var databaseControl = require('./databaseControl');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Week07-DataMaster'});
});

router.get('/create', function (req, res) {
    databaseControl.createDatabase(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            result.methodName = 'create';
            res.send(result);
        }
    });
});

router.get('/delete', function (req, res) {
    databaseControl.deleteDatabase(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            result.methodName = 'delete';
            res.send(result);
        }
    });
});

router.get('/read', function (req, res) {
    databaseControl.readDatabase(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result.rows);
        }
    });
});

router.get('/insertBulk', function (req, res) {
    databaseControl.insertBulk(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            result.methodName = 'insertBulk';
            res.send(result);
        }
    });
});

router.get('/deleteNpc/:id', function (req, res) {

    databaseControl.deleteNpc(req.params.id, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            result.methodName = 'deleteNpc';
            res.send(result);
        }
    })

});

module.exports = router;