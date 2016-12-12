define(function() {
    'use strict';

    var THREE;
    var size = 20;
    var space = 3;
    var spheres = [];

    function Npcs(threeInit) {
        THREE = threeInit;
    }

    Npcs.prototype.createNpc = function(sne, camera, wireFrame, x, z) {

        var geometry = new THREE.SphereGeometry(10, 40, 25);
        var material = new THREE.MeshNormalMaterial({
            wireframe: wireFrame
        });

        var sphere = new THREE.Mesh(geometry, material);
        sphere.overdraw = true;
        sphere.name = getName(baseName, x, z);
        sphere.position.set(x, size / 2, z);
        scene.add(sphere);
        sphere.push(sphere);

        return sphere;
    };

    Npcs.prototype.loadNPC = function(scene, camera, wireFrame) {
        var test = this;
        $.getJSON('NPC000.json', function(result) {
            for (var i = 0; i < result.length; i++) {
                for (var j = 0; j < result.length; j++) {
                    if (result[i][j] > 0) {
                        test.createNPC(scene, camera, wireFrame, i * size, -(j * size));
                    }
                }
            }

        }).fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ', ' + error;
            console.log({
                'Request Failed': err
            });
            var response = JSON.parse(jqxhr.responseText);
            var responseValue = JSON.stringify(response, null, 4);
            console.log(responseValue);
            alert('Database not connected' + responseValue);
        });
    };

    Npcs.prototype.readNpcGrid = function(scene, wireFrame, docs) {
        var that = this;
        var docNum = 0;
        $.getJSON('npc000.json', function(grid) {
            var gridNpc = grid;
            for (var i = 0; i < grid.length; i++) {
                //console.log(grid[i]);
                for (var j = 0; j < grid[i].length; j++) {
                    if (grid[j][i] !== 0) {
                        var x = j * size;
                        var z = size * -i;
                        that.createNpc(scene, wireFrame, x, z,
                            j, i, docs[docNum++]);
                        that.npcCoordinates.push([i, j]);
                    }
                }
            }
        }).done(function() {
            utilities.showDebug('npc loaded second success');
        }).fail(function(jqxhr, textStatus, error) {
            utilities.showDebug('npc loaded error: ' +
                jqxhr.status + ' ' + textStatus + ' ' + error);
        }).always(function() {
            utilities.showDebug('npc loaded complete');
        });
    };

    Npcs.prototype.removeNpc = function(x, z, scene) {
        gridNpc[x][z] = 0;
        var objectName = getName(baseName, x, z);
        var selectedObject = scene.getObjectByName(objectName);
        var index = this.npcList.indexOf(selectedObject);
        this.npcList.splice(index, 1);
        scene.remove(selectedObject);
    };

    return Npcs;
});
