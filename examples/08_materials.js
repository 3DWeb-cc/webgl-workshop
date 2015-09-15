// Code goes here
var
    theContainer, dae, cubeCamera, mirrorSphereCamera, mirrorSphereCameras = [], theColor = 0xFC6A45, renderer, theSphere, theLight, theScene, theCamera, theGeometry, theMaterial, IS_WIRE_FRAME, ANIMATE;

function onStart() {

    theContainer = document.getElementById("theContainer");
    renderer = new THREE.WebGLRenderer({
        //antialias: true
    });
    renderer.setSize(640, 480);
    theScene = new THREE.Scene();
    theCamera = new THREE.PerspectiveCamera(75, 640 / 480, 0.1, 10000);
    theCamera.position.set(0, 0, 20);
    theContainer.appendChild(renderer.domElement);

    var cubeCamerasList = [];
    var sphereRadius = 3;
    var controls = new THREE.OrbitControls(theCamera, renderer.domElement);

    // custom geometry
    var loader = new THREE.ColladaLoader();

    var cam = new THREE.CubeCamera(0.1, 5000, 512);
    cam.renderTarget.mapping = THREE.CubeReflectionMapping;
    cubeCamerasList.push(cam);
    theScene.add(cam);

    theMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        envMap: cam.renderTarget,
        //refractionRatio: 0.985,
        reflectivity: 0.9
    });
/*
    //loader.options.convertUpAxis = false;
    loader.load( './models/tha_face_web.dae', function ( collada ) {
    //loader.load( './models/test.dae', function ( collada ) {
        dae = collada.scene;


         dae.traverse( function ( child ) {

             if (child instanceof THREE.Mesh) {

                 child.material = theMaterial;

                 child.material.setValues({
//                     color: 0xffaa77,
                     //transparent: true
                     //opacity: 0.4
                     envMap: cam.renderTarget,
                     reflectivity: 0.9
                 });


                 child.geometry.mergeVertices();
                 child.geometry.computeVertexNormals();
             }

         } );

       theScene.add(dae);

    } );
*/



    //theGeometry = new THREE.BoxGeometry(2, 2, 2);
    theGeometry = new THREE.SphereGeometry(sphereRadius, 16, 16);

    //theScene.add(new THREE.Mesh(theGeometry, theMaterial));

    var materialsToShow = [
        //THREE.MeshBasicMaterial,
        //THREE.MeshLambertMaterial,
        THREE.MeshPhongMaterial
    ];
    var effectsType = [
        // refractions
/*
        function (mat) {
            var cam = new THREE.CubeCamera(0.1, 5000, 512);
            cam.renderTarget.mapping = THREE.CubeRefractionMapping;
            return {
                camera: cam,
                material: new mat({
                    envMap: cam.renderTarget,
                    refractionRatio: 0.985
        //            reflectivity: 0.9
                })
            };
        },*/
        // reflections
        function (mat) {
            var cam = new THREE.CubeCamera(0.1, 5000, 512);
            cam.renderTarget.mapping = THREE.CubeReflectionMapping;
            return {
                camera: cam,
                material: new mat({
                    envMap: cam.renderTarget
                })
            };
        }
    ];

    var startPointX = -((materialsToShow.length - 1) * sphereRadius * 3) / 2;
    var startPointY = -((effectsType.length - 1) * sphereRadius * 3) / 2;
    var obj,matAndCam;
    var reflectionSpheres = [];

var _obj
    for (var j = 0; j < effectsType.length; j += 1) {
        for (var k = 0; k < materialsToShow.length; k += 1) {
            matAndCam = effectsType[j](materialsToShow[k]);
            _obj = new THREE.Mesh(
                theGeometry,
                matAndCam.material
            );
            for (var h = 0; h < 10; h += 1) {
              obj = _obj.clone();
              obj.position.set(
                /*startPointX + (k * sphereRadius * 3) +*/ Math.random()*6 * (5-h),
                /*startPointY + (j * sphereRadius * 3) +*/ Math.random()*6* (5-h),
                0 + Math.random()*10
              );
              obj.scale.set(Math.random(), Math.random(), Math.random());
              matAndCam.camera.position = obj.position;
              cubeCamerasList.push(matAndCam.camera);
              reflectionSpheres.push(obj);
              theScene.add(matAndCam.camera);
              theScene.add(obj);
            }

        }
    }


    /*
     var obj;
     var refractionSpheres = [];
     for (var l = 0; l < materialsToShow.length; l += 1) {
     obj = {
     mesh: null,
     cubeCamera: new THREE.CubeCamera(0.1, 5000, 512)
     };
     obj.mesh = new THREE.Mesh(
     theGeometry,
     new materialsToShow[l]({
     color: 0xccccff,
     envMap: obj.cubeCamera.renderTarget,
     refractionRatio: 0.985,
     reflectivity: 0.9
     }
     )
     );
     obj.mesh.position.set(startPointX + (l * sphereRadius * 3), -6, 0);
     obj.cubeCamera.position = obj.mesh.position;
     refractionSpheres.push(obj);
     theScene.add(obj.cubeCamera);
     theScene.add(obj.mesh);
     }
     */

    theLight = new THREE.DirectionalLight(0xffffff, 1);
    theLight.position.set(10, 10, 10);
    theScene.add(theLight);


    // SKYBOX from
    var imagePrefix = "img/";
    //var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
    var directions = ["posx", "negx", "posy", "negy", "posz", "negz"];
    var imageSuffix = ".jpg";
    var skyGeometry = new THREE.BoxGeometry(5000, 5000, 5000);

    var materialArray = [];
    for (var i = 0; i < 6; i++)
        materialArray.push(new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
            side: THREE.BackSide
        }));
    var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
    var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
//    theScene.add(skyBox);

  // spherical
  var envSphereGeometry = new THREE.SphereGeometry(5000, 64, 64);
  var envSphereText = THREE.ImageUtils.loadTexture('img/bolo.jpg');
  envSphereText.minFilter = THREE.NearestFilter;
  var envSphereMaterial = new THREE.MeshBasicMaterial({
    map: envSphereText,
    side: THREE.BackSide
  });
  var envSphere = new THREE.Mesh(
      envSphereGeometry,
      envSphereMaterial
  );

  theScene.add(envSphere);
      

    var ambientLight = new THREE.AmbientLight(0xffffff);
    theScene.add(ambientLight);


    requestAnimationFrame(animate);

    function animate() {
        renderer.render(theScene, theCamera);

      envSphere.rotateY(-0.0004);

        // if flickering, try hiding the geometry
        //theSphere.visible = false;
        var elm, i = cubeCamerasList.length;
        while (i--) {
            cubeCamerasList[i].updateCubeMap(renderer, theScene);
        }

        //theSphere.visible = true;

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