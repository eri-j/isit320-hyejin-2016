define(function() {
    'use strict';

    var scene;

    function Npcs() {

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

    Npcs.prototype.readNpcsGrid = function() {
        $.getJSON('npc000.json', function(grid) {
            for (var i = 0; i < grid.length; i++) {
                console.log(grid[i]);
                for (var j = 0; j < grid[i].length; j++) {
                    if (grid[j][i] !== 0) {
                        npcsList.push([j, i]);
                        addSphere(scene, camera, wireFrame, size, size * -6);
                    }
                }
            }
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
