$(document).ready(function() { 'use strict';

    function showPage(pageRoute) {
        // YOUR CODE HERE
        // Be sure to handle the .done .fail and .always chained methods for
        // your call to the server. See the jQuery docs for details.
        console.log('showPage called');

        $.getJSON('/' + pageRoute, function(result) {
            console.log(result);
            $('#display').html(JSON.stringify(result, null, 4));
        }).fail(function(jq, status, error) {
            $('#display').html('error: ' + jq.responseText);
            console.log('error: ', status);
            console.log('error: ', error);
        });
    }

    $('#page01').click(function() {
        showPage('page01')
    });
    $('#page02').click(function() {showPage('page02')
    });
    $('#page03').click(function() {showPage('page03')
    });

    $('#viewPage01').click(function() {
        showPage('page01')
    });
    $('#viewPage02').click(function() {
        showPage('page02')
    });
});
