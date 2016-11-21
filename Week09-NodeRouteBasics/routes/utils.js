var express = require('express');
var router = express.Router();

var MyObject = (function() {
    'use strict';

    function MyObject() {}

    MyObject.prototype.circumference = function(radius) {
        return 2 * radius * Math.PI;
    };

    return MyObject;

})();

exports.myObject = new MyObject();
