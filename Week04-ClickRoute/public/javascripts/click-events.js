define(['jquery'], function(jquery) {
    'use strict';

    var elf = {};
    elf.run = {};

    elf.ClickEvents = (function() {
        var listItem = $('.listItem');
        var intro = $('#intro');

        function ClickEvents() {
            $(intro).html('ClickEvents is loaded. Click the three items seen below.');
            $(intro).addClass('blue');
            $(listItem).click(listClick);
        }

        var listClick = function(event) {
            var clickText = event.target.innerText;
            var prompt = 'You clicked: ';
            $(intro).html(prompt + clickText);
        };

        function callServer() {
            var theRoute = // Define the route based on the information you already have
                $.getJSON(theRoute, function(result) {
                    alert(JSON.stringify(result));
                });
        }

        return ClickEvents;

    }());

    return elf.ClickEvents;

});
