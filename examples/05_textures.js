// Code goes here
var
    theContainer, cubeCamera, mirrorSphereCamera, mirrorSphereCameras = [], theColor = 0xFC6A45, renderer, theSphere, theLight, theScene, theCamera, theGeometry, theMaterial, IS_WIRE_FRAME, ANIMATE;

function onStart() {

    // boilerplate
    theContainer = document.getElementById("theContainer");
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(640, 480);
    theScene = new THREE.Scene();
    theCamera = new THREE.PerspectiveCamera(75, 640 / 480, 0.1, 4000);
    theCamera.position.set(0, 0, 20);
    theContainer.appendChild(renderer.domElement);
    var light = new THREE.PointLight(0xffffff);
    light.position.set(0, 250, 0);
    theScene.add(light);
    theLight = new THREE.DirectionalLight(0xffffff, 1);
    theLight.position.set(10, 10, 10);
    theScene.add(theLight);

    var boxSize = 3;
    var controls = new THREE.OrbitControls(theCamera, renderer.domElement);


    //theGeometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    //theGeometry = new THREE.SphereGeometry(boxSize, 16, 16);

    // image from http://linzhouweb.com/183651-seamless-wood-texture
    var texture = THREE.ImageUtils.loadTexture('img/wood.jpg', THREE.SphereReflectionMapping);



    var materialsToShow = [
        THREE.MeshBasicMaterial,
        THREE.MeshLambertMaterial,
        THREE.MeshPhongMaterial
    ];
    var geometries = [
        new THREE.BoxGeometry(boxSize, boxSize, boxSize),
        new THREE.SphereGeometry(boxSize, 16, 16)
    ];
    var startPointX = -((materialsToShow.length - 1) * boxSize * 3) / 2;
    var startPointY = -((geometries.length - 1) * boxSize * 3) / 2;

    var obj, matAndCam;
    var reflectionSpheres = [];
    var cubeCamerasList = [];
    for (var i = 0; i < geometries.length; i += 1) {
        for (var k = 0; k < materialsToShow.length; k += 1) {
            obj = new THREE.Mesh(
                geometries[i],
                new materialsToShow[k]({
                    map: texture
                })
            );
            obj.position.set(
                startPointX + (k * boxSize * 3), startPointY + (i * boxSize * 3), 0);
            theScene.add(obj);
        }
    }

    requestAnimationFrame(animate);

    function animate() {
        renderer.render(theScene, theCamera);
        requestAnimationFrame(animate);
    }
}

function onShowSphere(evt) {
    if (evt.target.checked) {
        theScene.remove(theSphere);
    } else {
        theScene.add(theSphere);
    }
}

function onShowLight(evt) {
    if (evt.target.checked) {
        theScene.remove(theLight);
    } else {
        theScene.add(theLight);
    }
}

function viewShadeless(evt) {
    if (evt.target.checked) {
        theMaterial = new THREE.MeshBasicMaterial({
            'color': theColor,
            'wireframe': IS_WIRE_FRAME

        });
    } else {
        theMaterial = new THREE.MeshLambertMaterial({
            'color': theColor,
            'wireframe': IS_WIRE_FRAME
        });
    }
    theSphere.material = theMaterial;
}

function viewWireframe(evt) {
    IS_WIRE_FRAME = evt.target.checked;

    theSphere.material.setValues({
        'wireframe': IS_WIRE_FRAME
    });
}

function animateScene(evt) {
    ANIMATE = evt.target.checked;
}

function onColor(evt) {
    var value = evt.target.value.toUpperCase().replace(/^#/, "0x");
    theColor = parseInt(value, 16);
    theSphere.material.setValues({
        "color": theColor
    });
}

function setCameraFOV(evt) {
    theCamera.fov = evt.target.value;
    theCamera.updateProjectionMatrix();
    console.log(theCamera)
}