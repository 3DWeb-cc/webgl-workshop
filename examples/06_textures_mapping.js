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

    var boxSize = 12;
    var controls = new THREE.OrbitControls(theCamera, renderer.domElement);


    theGeometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    //theGeometry = new THREE.SphereGeometry(boxSize, 16, 16);

    // image from http://wiki.secondlife.com/wiki/Case_Study_-_Example_wood_crate_using_materials

    // SKYBOX from
    var imagePrefix = "img/";
    //var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];


/* TUTORIAL FOR TEXTURE MAPPING

 var imgName = "crate_";
 var imgBumpName = "crate_bump_";
 var imageSuffix = ".jpg";

    var texture,bumpTexture, materialArray = [];
    for (var i = 1; i < 7; i++) {
        texture = THREE.ImageUtils.loadTexture(imagePrefix + imgName + i + imageSuffix);
        texture.minFilter = THREE.NearestFilter;
        bumpTexture = THREE.ImageUtils.loadTexture(imagePrefix + imgBumpName + i + imageSuffix);
        bumpTexture.minFilter = THREE.NearestFilter;
        bumpTexture.anisotropy = 4;
        bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
        bumpTexture.format = THREE.RGBFormat;
        materialArray.push(new THREE.MeshLambertMaterial({
            map: texture,
            bumpMap: bumpTexture,
            bumpScale: 200,
            specular: 0x333333,
            shininess: 25
        }));
    }
*/

    var imgName = "crate_";
    var imgBumpName = "crate_2_diffuse";
    var imageSuffix = ".png";
    var texture,bumpTexture, materialArray = [];
    for (var i = 1; i < 7; i++) {
        texture = THREE.ImageUtils.loadTexture(imagePrefix + 'crate_2_diffuse_1' + imageSuffix);
        texture.minFilter = THREE.NearestFilter;
        bumpTexture = THREE.ImageUtils.loadTexture(imagePrefix + 'crate_2_normal_1' + imageSuffix);
        bumpTexture.minFilter = THREE.NearestFilter;
        bumpTexture.anisotropy = 4;
        bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
        bumpTexture.format = THREE.RGBFormat;
        specTexture = THREE.ImageUtils.loadTexture(imagePrefix + 'crate_2_specular_1' + imageSuffix);
        specTexture.minFilter = THREE.NearestFilter;
        materialArray.push(new THREE.MeshPhongMaterial({
            //color: 0xdddddd,
            //specular: 0xffffff,
            //shininess: 100,
            map: texture,
            specularMap: specTexture,
            normalMap: bumpTexture
            //normalScale: new THREE.Vector2( 0.26, 0.26 )
            /*,
            wrapRGB: new THREE.Vector3( 0.575, 0.5, 0.5 ),
            wrapAround: true*/
        }));
    }


    texture = THREE.ImageUtils.loadTexture(imagePrefix + 'crate_2_diffuse_1' + imageSuffix);
    texture.minFilter = THREE.NearestFilter;
    bumpTexture = THREE.ImageUtils.loadTexture(imagePrefix + 'crate_2_normal_1' + imageSuffix);
    bumpTexture.minFilter = THREE.NearestFilter;
    //bumpTexture.anisotropy = 4;
    //bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
    bumpTexture.format = THREE.RGBFormat;
    specTexture = THREE.ImageUtils.loadTexture(imagePrefix + 'crate_2_specular_1' + imageSuffix);
    specTexture.minFilter = THREE.NearestFilter;
    var singleMat = new THREE.MeshPhongMaterial({
        //color: 0xdddddd,
        specular: 0xffffff,
        shininess: 100,
        map: texture,
        specularMap: specTexture,
        normalMap: bumpTexture,
        normalScale: new THREE.Vector2( 0.01, 0.01 )
    });

    var theMaterial = new THREE.MeshFaceMaterial(materialArray);

    var theCrate = new THREE.Mesh(theGeometry, singleMat);

    theScene.add(theCrate);

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