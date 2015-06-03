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

    loader.options.convertUpAxis = false;
    loader.load( './models/tha_face_web.dae', function ( collada ) {
        dae = collada.scene;
        /*
        dae.traverse( function ( child ) {
            if ( child instanceof THREE.SkinnedMesh ) {
                var animation = new THREE.Animation( child, child.geometry.animation );
                animation.play();
            }
        } );
        dae.scale.x = dae.scale.y = dae.scale.z = 0.002;
        dae.updateMatrix();
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
/*
        particleLight = new THREE.Mesh( new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
        scene.add( particleLight );
*/
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

/*
        var pointLight = new THREE.PointLight( 0xffffff, 4 );
        particleLight.add( pointLight );
*/

        /*
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        theContainer.appendChild( renderer.domElement );
        */
/*
        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );
        //
*/
        //window.addEventListener( 'resize', onWindowResize, false );
    }

    requestAnimationFrame(animate);

    function animate() {
        renderer.render(theScene, theCamera);
        requestAnimationFrame(animate);
    }
}