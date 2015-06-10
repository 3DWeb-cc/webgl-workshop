// Code goes here
var
  theContainer, cubeCamera, mirrorSphereCamera, controls, mirrorSphereCameras = [], theColor = 0xFC6A45, renderer, theSphere, theLight, theScene, theCamera, theGeometry, theMaterial, IS_WIRE_FRAME, ANIMATE;

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

  var mousePositionText = document.getElementById('mousePosition');
  var canvasPositionText = document.getElementById('canvasPosition');
  var selectionName = document.getElementById('currentSelection');
  var mouseVector = new THREE.Vector3();
  var rayCaster = new THREE.Raycaster();

  var loader = new THREE.ColladaLoader();

  loader.options.convertUpAxis = true;

  loader.load('models/wood_man.dae', function (dae) {
    var scene = dae.scene;
    scene.scale.set(10, 10, 10);

    scene.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        //console.log(child.id+' -> ', child.material.name);
        intersectables.push(child);
      }
    });

    theScene.add(scene);

  });


  controls = new THREE.OrbitControls(theCamera, renderer.domElement);

  var hightlightMaterial = new THREE.MeshPhongMaterial({
    name       : 'highlighted',
    color      : 0x00ff00,
    opacity    : 0.6,
    transparent: true
  });

  var selectedMaterial = new THREE.MeshPhongMaterial({
    name     : 'selected',
    color    : 0x0000ff,
    wireframe: true
  });

  var theMaterials = {};

  function normalizeCoordinates(event) {
    var offset = $(theContainer).offset();

    // canvas element local
    var localX = event.pageX - offset.left;
    var localY = event.pageY - offset.top;

    // webgl context
    var canvasX = (localX / renderer.domElement.width) * 2 - 1;
    var canvasY = (1 - (localY / renderer.domElement.height)) * 2 - 1;

    return {
      canvas: {
        x: canvasX,
        y: canvasY
      },
      local : {
        x: localX,
        y: localY
      }
    }
  }


  var lastMouseDown = new THREE.Vector2();
  var isMouseDown = false;
  var lastIntersected;
  var intersectables = [];
  var currentIntersection;

  function onMouseDown(event) {
    event.preventDefault();

    isMouseDown = true;

    var normalized = normalizeCoordinates(event);
    lastMouseDown.set(normalized.canvas.x, normalized.canvas.y);
  }

  function onMouseUp(event) {
    event.preventDefault();

    isMouseDown = false;

    var normalized = normalizeCoordinates(event);

    console.log(Math.abs(lastMouseDown.x - normalized.canvas.x) + ' > 0.2 || ' + Math.abs(lastMouseDown.y - normalized.canvas.y) + '> 0.2');
    if (Math.abs(lastMouseDown.x - normalized.canvas.x) > 0.2 || Math.abs(lastMouseDown.y - normalized.canvas.y) > 0.2)
      return;

    if (currentIntersection !== undefined) {
      if (currentIntersection.material.name === selectedMaterial.name) {
        currentIntersection.material = theMaterial;
      } else {
        currentIntersection.material = selectedMaterial;
      }
    }

  }

  function onMouseMove(event) {
    event.preventDefault();

    var normalized = normalizeCoordinates(event);

    $(mousePositionText).text(normalized.local.x + ', ' + normalized.local.y);
    $(canvasPositionText).text((Math.round(normalized.canvas.x * 100) / 100) + ',' + (Math.round(normalized.canvas.y * 100) / 100));

    if (isMouseDown)
      return;

    mouseVector.set(normalized.canvas.x, normalized.canvas.y, 1);

    rayCaster.setFromCamera(mouseVector, theCamera);

    var intersections = rayCaster.intersectObjects(intersectables);

    if (intersections.length > 0) {
      currentIntersection = intersections[0].object;
      console.log(currentIntersection.id + ' -> ', currentIntersection.material.name);
      if (currentIntersection.material.name !== selectedMaterial.name && currentIntersection.material.name !== hightlightMaterial.name) {
        theMaterials[currentIntersection.id] = currentIntersection.material.clone();
        currentIntersection.material = hightlightMaterial;
        console.log(theMaterials[currentIntersection.id].name);
      }
      $(selectionName).text(currentIntersection.id);
    } else {
      $(selectionName).text('none');
      currentIntersection = undefined;
    }

    if (lastIntersected !== undefined && lastIntersected !== currentIntersection) {
      console.log(lastIntersected.id + ' -> ' + lastIntersected.material.name + ' vs '+selectedMaterial.name+' last id '+theMaterials[lastIntersected.id].name);
      if (lastIntersected.material.name !== selectedMaterial.name) {
        lastIntersected.material = theMaterials[lastIntersected.id].clone();
      }
    }


    lastIntersected = currentIntersection;

  }

  // two lights
  var theLight1 = new THREE.DirectionalLight(0xffdddd, 1);
  theLight1.position.set(10, 10, 20);
  theScene.add(theLight1);

  var theLight2 = new THREE.DirectionalLight(0xddddff, 0.7);
  theLight2.position.set(10, 10, -20);
  theScene.add(theLight2);

  $(renderer.domElement).on('touchmove', onMouseMove);
  $(renderer.domElement).on('mousemove', onMouseMove);
  $(renderer.domElement).on('mouseup', onMouseUp);
  $(renderer.domElement).on('mousedown', onMouseDown);

  requestAnimationFrame(animate);

  function animate() {
    renderer.render(theScene, theCamera);
    requestAnimationFrame(animate);
  }
}