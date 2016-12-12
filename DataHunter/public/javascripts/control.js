/* globals define: true, THREE:true */
define(['floor', 'PointerLockControls', 'PointerLockSetup', 'Collisions', 'Npcs'],
    function(Floor, PointerLockControls, PointerLockSetup, Collisions, npcs) {
        'use strict';

        var scene = null;
        var camera = null;
        var collisions;
        var cubes = [];
        var npcList = [];
        var size = 20;
        var raycaster;
        var renderer = null;
        var controls;
        var THREE = null;
        var crateImage = null;

        var result = collisions.npcDetection(mainCharacter.x, mainCharacter.z, npcs.npcList);
        if (result) {
            npcs.removeNpc(mainCharacter.x, mainCharacter.z, scene);
        }

        var keyMove = {
            moveForward: false,
            moveBackward: false,
            moveLeft: false,
            moveRight: false
        };

        var cameraPosition = {
            x: 2,
            y: 0,
            z: 2
        };

        function Control(InitThree) {
            THREE = InitThree;
            init();
            animate();
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function init() {

            var screenWidth = window.innerWidth / window.innerHeight;
            camera = new THREE.PerspectiveCamera(75, screenWidth, 1, 1000);

            scene = new THREE.Scene();
            scene.fog = new THREE.Fog(0xffffff, 0, 750);

            addCubes(scene, camera, false);

            doPointerLock();

            addLights();

            var floor = new Floor(THREE);
            floor.drawFloor(scene);
            collisions = new Collisions(THREE);
            npcs = new Npcs(THREE);

            npcs.loadNPC(scene, camera, wireFrame);

            raycaster = new THREE.Raycaster(new THREE.Vector3(),
                new THREE.Vector3(0, -1, 0), 0, 10);

            renderer = new THREE.WebGLRenderer({
                antialias: true
            });

            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            window.addEventListener('resize', onWindowResize, false);
        }

        function doPointerLock() {
            controls = new PointerLockControls(camera, THREE);
            var yawObject = controls.getObject();
            scene.add(yawObject);

            yawObject.position.x = size;
            yawObject.position.z = size;

            var ps = new PointerLockSetup(controls);
        }

        function drawText(position) {
            $('#cameraX').html(position.x);
            $('#cameraZ').html(position.z);

            $('#mazeX').html(Math.abs(Math.round(position.x / size)));
            $('#mazeZ').html(Math.abs(Math.round(position.z / size)));

            $('#npcsUL').empty();
            for (var i = 0; i < npcList.length; i++) {
                $('#npcs').append('<li>' + npcList[i] + '</li>');
            }
        }

        function animate() {

            requestAnimationFrame(animate);

            var xAxis = new THREE.Vector3(1, 0, 0);

            controls.isOnObject(false);

            var controlObject = controls.getObject();
            var position = controlObject.position;

            // drawText(controlObject, position);
            drawText(position);

            collisions.collisionDetection(controls, cubes, raycaster);

            // Move the camera
            controls.update();

            renderer.render(scene, camera);
        }

        function addCube(scene, camera, wireFrame, x, z) {
            var geometry = new THREE.BoxGeometry(size, size, size);
            /*var material = new THREE.MeshNormalMaterial({
             color : 0x00ffff,
             wireframe : wireFrame
             });*/

            var dataReaders = new DataReaders();
            dataReaders.readDatabase(function(docs) {
                npcs.readNpcGrid(scene, wireFrame, docs);
            });

            var loader = new THREE.TextureLoader();

            if (!crateImage) {
                crateImage = loader.load('/images/crate.jpg');
            }

            var material = new THREE.MeshLambertMaterial({
                map: crateImage
            });

            var cube = new THREE.Mesh(geometry, material);
            cube.position.set(x, size / 2, z);
            scene.add(cube);

            cubes.push(cube);

            return cube;
        }

        function addCubes(scene, camera, wireFrame) {
            $.getJSON('grid000.json', function(grid) {
                for (var i = 0; i < grid.length; i++) {
                    console.log(grid[i]);
                    for (var j = 0; j < grid[i].length; j++) {
                        if (grid[j][i] == 1) {
                            addCube(scene, camera, wireFrame, size * j, -(i * size));
                        }
                    }
                }
            });

            readDatabase();
        }

        function readDatabase() {
            $.getJSON('/read?docName=npcsDoc', function(data) {
                console.log(JSON.stringify(data.docs, null, 4));
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
        }

        function addLights() {
            var light = new THREE.DirectionalLight(0xffffff, 1.5);
            light.position.set(1, 1, 1);
            scene.add(light);
            light = new THREE.DirectionalLight(0xffffff, 0.75);
            light.position.set(-1, -0.5, -1);
            scene.add(light);
        }

        return Control;
    });
