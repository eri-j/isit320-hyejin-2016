$('nav li').hover(function(event) {
    'use strict';
    setActiveMenuItem(event.currentTarget.id);
});

function setActiveMenuItem() {
    'use strict';
    $('.nav li').removeClass('active');

    // var menuItem = $('a[href='.' + this.location.pathname + '']');
    var name = this.location.pathname;
    name = name.slice(1, name.length).trim();
    if (name.length === 0) {
        name = 'home';
    }
    var selector = '#' + name;
    try {
        var menuItem1 = $(selector);
        menuItem1.addClass('active');
    } catch (e) {
        // console.log('Could not find selector. This is expected when testing.', e);
    }
}

var Main = (function() {
    'use strict';

    console.log('main loaded');

    function Main() {
        // Code to initialize button handler (click) goes here.
        $('#mainButton').click(function() {
            $('#display').html('charlie was here on main');
        });
    }

    return Main;
})();

$(document).ready(function() {
    'use strict';

    var main = new Main();
});
