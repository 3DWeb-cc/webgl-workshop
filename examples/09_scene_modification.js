// Code goes here
var
    theContainer, cubeCamera, mirrorSphereCamera, controls, mirrorSphereCameras = [], theColor = 0xFC6A45, renderer, theSphere, theLight, theScene, theCamera, theGeometry, theMaterial, IS_WIRE_FRAME, ANIMATE;

var theMaterials = {};
var uniqueMaterials = {};

function onStart() {
    'use strict';

    // boilerplate
    theContainer = document.getElementById("theContainer");
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xaabbff);
    renderer.setSize(640, 480);
    theScene = new THREE.Scene();
    theCamera = new THREE.PerspectiveCamera(50, 640 / 480, 0.1, 4000);
    theCamera.position.set(0, 0, 40);
    theContainer.appendChild(renderer.domElement);

    var loader = new THREE.ColladaLoader();

    loader.options.convertUpAxis = true;

    loader.load('models/wood_man.dae', function (dae) {
        var scene = dae.scene;
        scene.scale.set(10, 10, 10);

        scene.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                //console.log(child.id+' -> ', child.material.name);
                theMaterials[child.id] = child.material;
                uniqueMaterials[child.material.id] = child.material;
            }
        });

        $.map(uniqueMaterials, function (mat) {
            var diffuse;

            switch (mat.name) {
                case 'acciaio' :
                    console.log('acciaio');
                    mat.setValues({});
                    break;
                case 'legno' :
                    console.log('legno ok');
                    diffuse = THREE.ImageUtils.loadTexture('./models/wood_diffuse.jpg');
                    mat.setValues({
                        color: 0xff9999,
                        map: diffuse
                    });
                    break;
                default:
                    console.error('missing implementation '+mat.name);
            }
        });

        theScene.add(scene);

    });


    controls = new THREE.OrbitControls(theCamera, renderer.domElement);

    // two lights
    var theLight1 = new THREE.DirectionalLight(0xffdddd, 1);
    theLight1.position.set(10, 10, 20);
    theScene.add(theLight1);

    var theLight2 = new THREE.DirectionalLight(0xddddff, 0.7);
    theLight2.position.set(10, 10, -20);
    theScene.add(theLight2);

    requestAnimationFrame(animate);

    function animate() {
        renderer.render(theScene, theCamera);
        requestAnimationFrame(animate);
    }
}