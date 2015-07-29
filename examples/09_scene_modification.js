// Code goes here
var
    theContainer, cubeCamera, mirrorSphereCamera,cubeCamera, controls, mirrorSphereCameras = [], theColor = 0xFC6A45, renderer, theSphere, theLight, theScene, theCamera, theGeometry, theMaterial, IS_WIRE_FRAME, ANIMATE;

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


    // skybox
    var materialArray = [];
    var imageNames = ["posx", "negx", "posy", "negy", "posz", "negz"];
    var imageSuffix = ".jpg";
    for (var i = 0; i < 6; i++) {
        materialArray.push(new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('img/'+imageNames[i] + imageSuffix),
            side: THREE.BackSide
        }));
    }
    var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
    var skyBox = new THREE.Mesh(
        new THREE.BoxGeometry(5000, 5000, 5000),
        skyMaterial
    );

    theScene.add(skyBox);

    // cube camera for reflections
    cubeCamera = new THREE.CubeCamera(0.1, 6000, 512);
    cubeCamera.renderTarget.mapping = THREE.CubeReflectionMapping;
    cubeCamera.position.set(0,20,0)
    theScene.add(cubeCamera);


    var loader = new THREE.ColladaLoader();

    loader.options.convertUpAxis = true;

    loader.load('models/wood_man.dae', function (dae) {
        var scene = dae.scene;
        scene.scale.set(10, 10, 10);

        scene.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                //console.log(child.id+' -> ', child.material.name);
                uniqueMaterials[child.material.id] = child.material;
            }
        });

        $.map(uniqueMaterials, function (mat) {
            var diffuse;

            switch (mat.name) {
                case 'acciao' :
                    console.log('acciaio ok');
                    mat.setValues({
                        shininess: 1000,
                        reflectivity: 1,
                        specular: 0xaaaaff,
                        envMap: cubeCamera.renderTarget
                    });
                    break;
                case 'legno' :
                    console.log('legno ok');
                    diffuse = THREE.ImageUtils.loadTexture('./models/wood_diffuse.jpg');
                    mat.setValues({
                        color: 0xff9999,
                        map: diffuse,
                        shininess: 0,
                        specular: 0xffaaaa
                    });
                    break;
                default:
                    console.error('missing implementation ' + mat.name);
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

    // cheating with framerate... not a good idea but is working
    /*window.setInterval(function() {
        cubeCamera.updateCubeMap(renderer, theScene);
    }, 1000);*/

    requestAnimationFrame(animate);

    function animate() {
        renderer.render(theScene, theCamera);
        cubeCamera.updateCubeMap(renderer, theScene);
        requestAnimationFrame(animate);
    }
}