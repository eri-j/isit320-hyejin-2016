requirejs.config({
    baseUrl: '.',
    paths: {
        'jquery': 'components/jquery/dist/jquery',
        'Three': 'javascripts/three',
        'control': 'javascripts/control',
        'floors': 'javascripts/floors'

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
            new Control(THREE);
        });
    });
});
