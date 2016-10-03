var fs = require('fs');

var foo = fs.readFileSync('index.json');
var aProperty;

// Asynch
fs.readFile('./index.json', 'utf8', function(err, rawJson) {
    'use strict';
    if (err) {
        throw err;
    }

    var json = JSON.parse(rawJson);
    console.log(json);
    console.log('----loop----');
    for (aProperty in json) {
        console.log(aProperty, ': ', typeof json[aProperty]);
    }
});
