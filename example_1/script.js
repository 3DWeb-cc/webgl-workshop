// Code goes here
var
    theContainer, theColor = 0xFC6A45, renderer, theCube, theLight, theScene, theCamera, theGeometry, theMaterial, IS_WIRE_FRAME, ANIMATE;

function onStart() {

    theContainer = document.getElementById("theContainer");
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(640, 480);
    theScene = new THREE.Scene();
    theCamera = new THREE.PerspectiveCamera(75, 640 / 480, 0.1, 1000);
    theCamera.position.set(0, 0, 10);
    theContainer.appendChild(renderer.domElement);

    theGeometry = new THREE.BoxGeometry(2, 2, 2);
    theMaterial = new THREE.MeshLambertMaterial({
        color: theColor
    });
    theCube = new THREE.Mesh(theGeometry, theMaterial);
    theCube.position.set(0, 0, 0);
    theScene.add(theCube);

    theLight = new THREE.DirectionalLight(0xffffff, 1);
    theLight.position.set(10, 10, 10)
    theScene.add(theLight);

    requestAnimationFrame(animate);

    function animate() {
        renderer.render(theScene, theCamera);
        if (ANIMATE) {
            theCube.rotation.y += 0.01;
            theCube.rotation.x += 0.01;
        }
        requestAnimationFrame(animate);
    }
}

function onShowCube(evt) {
    if (evt.target.checked) {
        theScene.remove(theCube);
    } else {
        theScene.add(theCube);
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
    theCube.material = theMaterial;
}

function viewWireframe(evt) {
    IS_WIRE_FRAME = evt.target.checked;

    theCube.material.setValues({
        'wireframe': IS_WIRE_FRAME
    });
}

function animateScene(evt) {
    ANIMATE = evt.target.checked;
}

function onColor(evt) {
    var value = evt.target.value.toUpperCase().replace(/^#/, "0x");
    theColor = parseInt(value, 16);
    theCube.material.setValues({
        "color": theColor
    });
}

function setCameraFOV(evt) {
    theCamera.fov = evt.target.value;
    theCamera.updateProjectionMatrix();
    console.log(theCamera)
}