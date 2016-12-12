requirejs.config({
    baseUrl: '.',
    paths: {
        'jquery': 'components/jquery/dist/jquery',
        'bootstrap': 'components/bootstrap/dist/js/bootstrap',
        'control': 'javascripts/control',
        'Collisions': 'javascripts/collision',
        'floor': 'javascripts/floors',
        'Npcs': 'javascripts/npcs',
        'PointerLockControls': 'javascripts/pointer-lock-controls',
        'PointerLockSetup': 'javascripts/pointer-lock-setup',
        'Three': 'javascripts/three',
        'utilities': '/javascripts/utilities'
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
        //window.THREE = THREE;
        $(document).ready(function() {
            var control = new Control(THREE);
        });
    });
});
