define(['utilities'], function(utilities) {
    'use strict';

    function DataReaders() {}

    DataReaders.prototype.readDatabase = function(callback) {
        var query = '/read?docNAme=npcsDoc';
        $.getJSON(query, function(json) {
            callback(json.docs);
            console.log('Sucess: ' + JSON.stringify(json, null, 4));
        }).done(function() {
            utilities.showDebug('Database loaded second success');
        }).fail(function(jqxhr, textStatus, error) {
            var response = JSON.parse(jqxhr);
        });
    };
});
