/**
 * @author Charlie Calvert
 */

require.config({
    paths: {
        'jquery': '/components/jquery/dist/jquery.min',
        'ClickEvents': 'javascripts/click-events'
    }
});

require(['jquery', 'click-events'], function(jquery, ClickEvents) {
    'use strict';

    console.log('Main called');
    $(document).ready(function() {
        var clickEvents = new ClickEvents();
    });
});
