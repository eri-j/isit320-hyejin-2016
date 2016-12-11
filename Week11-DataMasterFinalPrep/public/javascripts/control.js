/**
 * name: Control
 */

//var myModule = angular.module('myModule', ['ngRoute']);

define(['nameController', 'queryController'], function(nameController, queryController) {

    function control($routeProvider) {
        'use strict';

        $routeProvider.when('/databaseName', {
            templateUrl: 'templates/DatabaseNames.html',
            controller: 'NameController',
            resolve: {
                databaseName: nameController.databaseName,
                allDbs: nameController.allDbs
            }
        }).when('/deleteDb', {
            templateUrl: 'templates/QueryView.html',
            controller: 'QueryController',
            resolve: {
                result: queryController.delete
            }
        }).when('/createDb', {
            templateUrl: 'templates/QueryView.html',
            controller: 'QueryController',
            resolve: {
                result: queryController.create
            }
        }).when('/insertnpcsBulk', {
            templateUrl: 'templates/npcs.html',
            controller: 'QueryController',
            resolve: {
                result: queryController.npcsBulk
            }
        }).when('/insertnpcsOneDoc', {
            templateUrl: 'templates/npcs.html',
            controller: 'QueryController',
            resolve: {
                result: queryController.npcsOneDoc
            }
        }).when('/designDoc', {
            templateUrl: 'templates/QueryView.html',
            controller: 'QueryController',
            resolve: {
                result: queryController.design
            }
        }).when('/readOne', {
            templateUrl: 'templates/QueryView.html',
            controller: 'QueryController',
            resolve: {
                result: queryController.readOne
            }
        }).when('/viewBulk', {
            templateUrl: 'templates/QueryView.html',
            controller: 'QueryController',
            resolve: {
                result: queryController.viewBulk
            }
        }).when('/viewOneDoc', {
            templateUrl: 'templates/QueryView.html',
            controller: 'QueryController',
            resolve: {
                result: queryController.viewOneDoc
            }
        }).when('/viewBulknpcsCapital', {
            templateUrl: 'templates/QueryView.html',
            controller: 'QueryController',
            resolve: {
                result: queryController.viewBulkAngular
            }
        }).otherwise({
            redirectTo: '/'
        });

    }

    return control;

});
/*
 window.onload = function() {
 $.getJSON('/read?docName=3e82f91797ece19dcfa2285dde098e8e', function(result) {
 console.log(result);
 });
 } */
