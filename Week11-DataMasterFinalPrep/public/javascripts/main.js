requirejs.config({
    baseUrl: '.',
    paths: {
        'bootstrap': 'components/bootstrap/dist/js/bootstrap',
        'control': 'javascripts/control',
        'jquery': 'components/jquery/dist/jquery',
        'utility': 'javascripts/utility',
        'jsonToHtml': '/components/elf-json-to-table/json-to-table',
        'bulkController': 'javascripts/controllers/bulk-controller',
        'nameController': 'javascripts/controllers/name-controller',
        'queryController': 'javascripts/controllers/query-controller',
        'passportController': 'javascripts/pcontrollers/assport-controller',
        'readController': 'javascripts/controllers/read-controller',
        'Route': 'javascripts/route-provider/route',
        'runQuery': 'javascripts/route-provider/run-query'
    }
});

requirejs(['jquery'], function($) {
    'use strict';

    requirejs(['Route', 'control'], function(Route, control) {
        $(document).ready(function() {

            var route = new Route();
            var handleClicks = function(event) {
                event.preventDefault();
                route.setRoute(event.target.pathname);
                control(route);
            };
            $('#navigationbar').addClass('databaseOptions');
            $('#main-content').load('/menu-links', function() {
                $('#databaseOptions ul li a').click(function (event) {
                    handleClicks(event);
                });
            })
        });
    });
});