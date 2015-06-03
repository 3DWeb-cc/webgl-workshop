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
    //theScene.add(light);
    theLight = new THREE.DirectionalLight(0xffffff, 1.4);
    theLight.position.set(10, 10, 10);
    theScene.add(theLight);
    theLight1 = new THREE.DirectionalLight(0xffeeee, 0.8);
    theLight1.position.set(-10, -10, -10);
    theScene.add(theLight1);

    var mousePositionText = document.getElementById('mousePosition');
    var canvasPositionText = document.getElementById('canvasPosition');

    var boxSize = 12;
    var controls = new THREE.OrbitControls(theCamera, renderer.domElement);


    theGeometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    //theGeometry = new THREE.SphereGeometry(boxSize, 16, 16);

    // image from http://wiki.secondlife.com/wiki/Case_Study_-_Example_wood_crate_using_materials

    // SKYBOX from
    var imagePrefix = "img/";
    //var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];


    function onMouseMove(event) {

        event.preventDefault();

        var offset = $(theContainer).offset();

        // canvas element local
        var localX =  event.pageX - offset.left;
        var localY =  event.pageY - offset.top;

        // webgl context
        var canvasX = (localX / renderer.domElement.width) * 2 - 1;
        var canvasY = (1 - (localY / renderer.domElement.height)) * 2 -1;

        $(mousePositionText).text(localX + ', ' + localY);
        $(canvasPositionText).text((Math.round(canvasX* 100) / 100) + ',' + (Math.round(canvasY* 100) / 100));

    }

    function checkIntersections() {

    }



    $(renderer.domElement).on('touchmove', onMouseMove);
    $(renderer.domElement).on('mousemove', onMouseMove);

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
}