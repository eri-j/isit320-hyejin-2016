$(document).ready(function() {
    'use strict';

    function showPage(pageRoute) {
        // YOUR CODE HERE
        // Be sure to handle the .done .fail and .always chained methods for
        // your call to the server. See the jQuery docs for details.
        console.log('showPage called');

        $.getJSON(pageRoute, function(result) {
            console.log(result);
            $('#display').html(JSON.stringify(result, null, 4));
        }).fail(function(jq, status, error) {
            $('#display').html('error: ' + jq.responseText);
            console.log('error: ', status);
            console.log('error: ', error);
        });
    }

    function showViews(pageRoute) {
        // YOUR CODE HERE
        // Be sure to handle the .done .fail and .always chained methods for
        // your call to the server. See the jQuery docs for details.
        console.log('viewPage called');

        $.getJSON('/views' + pageRoute, function(result) {
            console.log(result);
            $('#display').html(JSON.stringify(result, null, 4));
        }).fail(function(jq, status, error) {
            $('#display').html('error: ' + jq.responseText);
            console.log('error: ', status);
            console.log('error: ', error);
        });
    }

    function showFileStore(pageRoute) {
        // YOUR CODE HERE
        // Be sure to handle the .done .fail and .always chained methods for
        // your call to the server. See the jQuery docs for details.
        console.log('fileStore called');

        $.getJSON('/views' + pageRoute, function(result) {
            console.log(result);
            $('#display').html(JSON.stringify(result, null, 4));
        }).fail(function(jq, status, error) {
            $('#display').html('error: ' + jq.responseText);
            console.log('error: ', status);
            console.log('error: ', error);
        });
    }

    function showRequest(pageRoute) {
        // YOUR CODE HERE
        // Be sure to handle the .done .fail and .always chained methods for
        // your call to the server. See the jQuery docs for details.
        console.log('request called');

        $.getJSON('/views' + pageRoute, function(result) {
            console.log(result);
            $('#display').html(JSON.stringify(result, null, 4));
        }).fail(function(jq, status, error) {
            $('#display').html('error: ' + jq.responseText);
            console.log('error: ', status);
            console.log('error: ', error);
        });
    }

    function showSessionStatus(pageRoute) {
        // YOUR CODE HERE
        // Be sure to handle the .done .fail and .always chained methods for
        // your call to the server. See the jQuery docs for details.
        console.log('sessionStatus called');

        $.getJSON('/views' + pageRoute, function(result) {
            console.log(result);
            $('#display').html(JSON.stringify(result, null, 4));
        }).fail(function(jq, status, error) {
            $('#display').html('error: ' + jq.responseText);
            console.log('error: ', status);
            console.log('error: ', error);
        });
    }

    $('#page01').click(function() {
        showPage('/page01');
    });
    $('#page02').click(function() {
        showPage('/page02');
    });
    $('#page03').click(function() {
        showPage('/page03');
    });

    $('#viewPage01').click(function() {
        showViews('/page01');
    });
    $('#viewPage02').click(function() {
        showViews('/page02');
    });

    $('#fileStore').click(function() {
        showFileStore('/file-store');
    });
    $('#request').click(function() {
        showRequest('/request');
    });
    $('#sessionStatus').click(function() {
        showSessionStatus('/session-status');
    });
});
