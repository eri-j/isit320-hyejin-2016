define(function() {
    'use strict';

    function Control() {
        console.log('Control constructor called');
        $('#status').click(status);
    }

    var status = function() {
        // WRITE AN AJAX OR GET JSON METHOD THAT CALLS THE /info ROUTE AND DISPLAYS THE RESULT
        // THIS SHOULD INCLUDE THE USER INFORMATION SHOWN BELOW IN MY GOOGLE ACCOUNT SCREENSHOT
        $.ajax({
            url: '/status'
        }).done(function(serverInfo) {
            $('#report').html(JSON.stringify(serverInfo));
        }).fail(function(err) {
            $('#debug').html(err);
        });
    };

    return Control;

});