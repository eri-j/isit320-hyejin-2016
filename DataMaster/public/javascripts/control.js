$(document).ready(function () {
    'use strict';

    console.log('Control loaded');
    var npcData;
    var dataIndex = 0;
    var displaySpan = $('#display');
    var displaySpanId = $('#displayId');

    $('#previous').click(function () {
        display(npcData[--dataIndex]);
    });

    $('#next').click(function () {
        display(npcData[++dataIndex]);
    });

    $('#deleteNpc').click(function () {
        displayPath('/deleteNpc/' + npcData[dataIndex].doc.npc_id);
    });

    $('#createDB').click(function () {
        displayPath('/create');
    });

    $('#deleteDB').click(function () {
        displayPath('/delete');
    });

    $('#insertBulk').click(function () {
        displayPath('/insertBulk');
    });

    $('#readDB').click(function () {
        $.getJSON('/read', function (result) {
            npcData = result;
            display(npcData[dataIndex]);
        });
    });

    function displayPath(path) {
        $.getJSON(path, function (result) {
            display(result);
        });
    }

    function display(output) {
        displaySpanId.html();
        displaySpan.html(JSON.stringify(output, null, 4));
    }

});
