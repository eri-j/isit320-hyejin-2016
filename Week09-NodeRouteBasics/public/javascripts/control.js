$(document).ready(function() {
    'use strict';

    $('#feetToMile').click(function() {
        console.log('Click on feet to miles');
        var feet = $('#lengthInput').val();
        var input = {
            feet: feet
        };
        $.getJSON('/feetToMiles', input, function(result) {
            var output = JSON.stringify(result, null, 4);
            console.log(output);
            $('#debug').html(output);
        });
    });

    $('#mileToFeet').click(function() {
        console.log('Click on miles to feet');
        var miles = $('#lengthInput').val();
        var input = {
            miles: miles
        };
        $.getJSON('/milesToFeet', input, function(result) {
            var output = JSON.stringify(result, null, 4);
            console.log(output);
            $('#debug').html(output);
        });
    });

    $('#getCircumference').click(function() {
        console.log('Click on radius to circumference');
        var radius = $('#lengthInput').val();
        $.ajax({
            url: '/getCircumference',
            type: 'POST',
            data: {
                'radius': radius
            },
            dataType: 'json',
            success: function(data) {
                console.log(data);
                $('#debug').html('radius entered: ' + data.radiusEntered +
                    '<br>circumference: ' + data.circumference);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.responseText);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    });
});
