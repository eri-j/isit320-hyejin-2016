var About = (function() {
    'use strict';

    console.log('about loaded');

    function About() {
        // Code to initialize button handler (click) goes here.
        $('#aboutButton').click(function() {
            $('#display').html('charlie was out & about');
        });
    }

    return About;
})();

$(document).ready(function() {
    'use strict';

    var about = new About();
});
