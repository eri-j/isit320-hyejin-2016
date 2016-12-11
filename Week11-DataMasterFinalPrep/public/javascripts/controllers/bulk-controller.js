define(['runQuery', 'utility', 'jsonToHtml'], function(runQuery, utility, jsonToHtml) {
    'use strict';

    var bulkController = function(query, data) {
        var docElement = $('#docs');
        docElement.empty();
        if (query.requestFailed) {
            docElement.html(JSON.stringify(query.requestFailed, null, 4));
        } else {
            var gameDocs = result.docs;
            displayGameCode(gameDocs[index]);
        }

        var debug = $('#debug');
        var docs = $('#docs');
        var displayData = JSON.stringify(data, null, 5);
        if (query === '/databaseName') {
            debug.html(displayData);
        } else {
            docs.html('allDatabases: ' + displayData);
            var jsonHtmlTable = jsonToHtml(JSON.parse(displayData), 'jsonTable', 'table table-bordered table-striped', 'Download');
            $('#myTable').html(jsonHtmlTable);

        }
    };

    nameController.databaseName = function($q) {
        return runQuery('/databaseName', $q);
    };

    nameController.allDbs = function($q) {
        return runQuery('/listDb', $q);
    };

    return nameController;
});