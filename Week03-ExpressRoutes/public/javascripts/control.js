$(document).ready(function() {
    'use strict';
    console.log('Document loaded in isit320');

    $('#read').click(read);
    $('#readJson').click(readJson);
    $('#add').click(add);

    function read() {
        console.log('callRead called');
        $.getJSON('/read', function(result) {
            console.log(result);
            $('#display').html(JSON.stringify(result));
        });
    }

    function readJson() {
        console.log('readJson called');
        $.getJSON('names.json', function(result) {
            console.log(result);
            $('#display').html(JSON.stringify(result));
        });
    }

    function add() {
        var operatorA = $('#operatorA').val();
        var operatorB = $('#operatorB').val();
        console.log('operators:', operatorA, operatorB);
        var requestQuery = {
            operatorA: operatorA,
            operatorB: operatorB
        };
        $.getJSON('/add', requestQuery, function(sum) {
            console.log('Sum: ', sum);
            $('#display').html(JSON.stringify('The sum is: ' + sum.sum));
        });
    }
});
