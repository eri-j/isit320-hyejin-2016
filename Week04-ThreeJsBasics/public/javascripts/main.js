requirejs.config({
    baseUrl: '.',
    paths: {
        'jquery': 'components/jquery/dist/jquery',
        'Three': 'javascripts/three',
        'control': 'javascripts/control'

    },
    shim: {
        'Three': {
            exports: 'THREE'
        }
    }
});

requirejs(['jquery'], function($) {
    'use strict';
    requirejs(['Three', 'control'], function(THREE, Control) {
        $(document).ready(function() {
            var control = new Control(THREE);
        });
    });
});
