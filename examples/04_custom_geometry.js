// Code goes here
var
    theContainer, cubeCamera, mirrorSphereCamera, mirrorSphereCameras = [], theColor = 0xFC6A45, renderer, theSphere, theLight, theScene, theCamera, theGeometry, theMaterial, IS_WIRE_FRAME, ANIMATE;

function onStart() {

    // boilerplate
    theContainer = document.getElementById("theContainer");
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(640, 480);
    theScene = new THREE.Scene();
    theCamera = new THREE.PerspectiveCamera(40, 640 / 480, 0.1, 4000);
    theCamera.position.set(0, 10, 20);
    theContainer.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(theCamera, renderer.domElement);
    var loader = new THREE.ColladaLoader();

    //loader.options.convertUpAxis = false;
    loader.load( './models/tha_face_web.dae', function ( collada ) {
        dae = collada.scene;
        /*
        dae.traverse( function ( child ) {
            // for traversing the whole scene
        } );
        */
        init();
        animate();
    } );

    function init() {

        // Grid
        var size = 14, step = 1;
        var geometry = new THREE.Geometry();
        var material = new THREE.LineBasicMaterial( { color: 0x303030 } );
        for ( var i = - size; i <= size; i += step ) {
            geometry.vertices.push( new THREE.Vector3( - size, - 0.04, i ) );
            geometry.vertices.push( new THREE.Vector3(   size, - 0.04, i ) );
            geometry.vertices.push( new THREE.Vector3( i, - 0.04, - size ) );
            geometry.vertices.push( new THREE.Vector3( i, - 0.04,   size ) );
        }
        var line = new THREE.Line( geometry, material, THREE.LinePieces );
        theScene.add( line );

        // Add the COLLADA
        theScene.add( dae );

        // Lights
        //theScene.add( new THREE.AmbientLight( 0xcccccc ) );

        var directionalLight = new THREE.DirectionalLight(0xeeeeee );
        directionalLight.position.x = 20;
        directionalLight.position.y = 20;
        directionalLight.position.z = 20;
        directionalLight.position.normalize();
        theScene.add( directionalLight );

        var directionalLight2 = new THREE.DirectionalLight(0xeeeeee );
        directionalLight2.position.x = -20;
        directionalLight2.position.y = 20;
        directionalLight2.position.z = 20;
        directionalLight2.position.normalize();
        theScene.add( directionalLight2 );

    }

    requestAnimationFrame(animate);

    function animate() {
        renderer.render(theScene, theCamera);
        requestAnimationFrame(animate);
    }
}