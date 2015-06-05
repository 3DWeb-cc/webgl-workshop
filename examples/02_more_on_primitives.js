// Code goes here
var theLegGeometry, theLeg, theChairObject,theTableLegGeometry,theTableLegObject,
  theContainer, theImage, renderer, theCube, theLight1, theLight2, theScene, 
  theCamera, theGeometry, theMaterial, IS_WIRE_FRAME, 
  cameraDistance = 30,
  theColor = 0xFC6A45,
  ANIMATE = false;

function onStart() {

  var angle = 0.25;

  theContainer = document.getElementById("theContainer");
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(640, 480);
  theScene = new THREE.Scene();
  theCamera = new THREE.PerspectiveCamera(75, 640 / 480, 0.1, 1000);
  theContainer.appendChild(renderer.domElement);
  var controls = new THREE.OrbitControls(theCamera, renderer.domElement);


  moveCamera(angle);

  theAxisHelper = new THREE.AxisHelper(10);
  theScene.add(theAxisHelper);

  theMaterial = new THREE.MeshLambertMaterial({
    color: theColor
  });

  // the whole chair
  theChairObject = new THREE.Object3D();

  // chair's legs
  theLegGeometry = new THREE.BoxGeometry(1, 10, 1);
  var i, x, z;
  for (i = 0; i < 4; i += 1) {
    theLeg = new THREE.Mesh(theLegGeometry, theMaterial);
    x = (i > 1) ? 4 : -4;
    z = (i % 2 === 0) ? 4 : -4;
    theLeg.position.set(x, 0, z);
    theChairObject.add(theLeg);
  }

  // chair's seat
  theSeatGeometry = new THREE.BoxGeometry(9.5, 1, 9.5);
  theSeat = new THREE.Mesh(theSeatGeometry, theMaterial);
  theSeat.position.set(0, 5.5, 0);
  theChairObject.add(theSeat);

  // chair's back
  theBackGeometry = new THREE.BoxGeometry(1, 10, 9);
  theBack = new THREE.Mesh(theBackGeometry, theMaterial);
  theBack.position.set(-3.5, 11, 0);
  theChairObject.add(theBack);
  theChairObject.position.set(-10, 0, 0);
  theScene.add(theChairObject);

  // table object
  theTableObject = new THREE.Object3D();

  // tables's legs
  theTableLegGeometry = new THREE.CylinderGeometry(0.6, 0.6, 16, 8, 1);
  for (i = 0; i < 4; i += 1) {
    theLeg = new THREE.Mesh(theTableLegGeometry, theMaterial);
    x = (i > 1) ? 6 : -6;
    z = (i % 2 === 0) ? 6 : -6;
    theLeg.position.set(x, 0, z);
    theTableObject.add(theLeg);
  }

  // the table's top
  theTableTopGeometry = new THREE.CylinderGeometry(12, 12, 1, 16, 1);
  theTableTop = new THREE.Mesh(theTableTopGeometry, theMaterial);
  theTableTop.position.set(0, 8.5, 0);
  theTableObject.add(theTableTop);
  theTableObject.position.set(0, 3, 0);
  theScene.add(theTableObject);

  // two lights
  theLight1 = new THREE.DirectionalLight(0xffdddd, 1);
  theLight1.position.set(10, 10, 20)
  theScene.add(theLight1);

  theLight2 = new THREE.DirectionalLight(0xddddff, 0.7);
  theLight2.position.set(10, 10, -20)
  theScene.add(theLight2);

  requestAnimationFrame(animate);

  function animate() {
    var x, y;
    renderer.render(theScene, theCamera);
    if (ANIMATE) {
      moveCamera(angle);
      angle = (angle === 2) ? 0 : (angle + 0.01);
    }
    requestAnimationFrame(animate);
  }
}

function moveCamera(angle) {
  x = Math.cos(angle) * cameraDistance;
  z = Math.sin(angle) * cameraDistance;
  theCamera.position.set(x, 16, z);
  theCamera.lookAt(new THREE.Vector3(0, 6, 0));
  theCamera.updateProjectionMatrix();
}


function onshowChair(evt) {
  if (evt.target.checked) {
    theScene.remove(theChairObject);
  } else {
    theScene.add(theChairObject);
  }
}

function onshowTable(evt) {
  if (evt.target.checked) {
    theScene.remove(theTableObject);
  } else {
    theScene.add(theTableObject);
  }
}

function viewWireframe(evt) {
  if (evt.target.checked) {
    IS_WIRE_FRAME = true;
  } else {
    IS_WIRE_FRAME = false
  }
  theMaterial.setValues({
    'wireframe': IS_WIRE_FRAME
  });
}

function animateScene(evt) {
  ANIMATE = evt.target.checked;
  console.log('ANIMATE -> ' + ANIMATE);
}

function onBgColor(evt) {
  var value = evt.target.value.toUpperCase().replace(/^#/, "0x");
  theColor = parseInt(value, 16);
  renderer.setClearColor(theColor);
}

function onColor(evt) {
  var value = evt.target.value.toUpperCase().replace(/^#/, "0x");
  theColor = parseInt(value, 16);
    theMaterial.setValues({
    "color": theColor
  });
}

function setCameraFOV(evt) {
  theCamera.fov = evt.target.value;
  theCamera.updateProjectionMatrix();
}