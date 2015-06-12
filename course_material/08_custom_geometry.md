Example step
============
Load custom geometry

Goal
====
Load external file using COLLADA  

Instructions
============

+ in order to load custom geometry, we need the appropriate importer: since we are loading a Collada file, get the [Collada 
loader for ThreeJS](https://github.com/mrdoob/three.js/tree/master/examples/js/loaders/ColladaLoader.js) and load it 
into your HTML page after _three.js_; you can find in our [examples folder](../examples)

+ get the 3D Model [tha_face_web.dae](../examples/models/tha_face_web.dae)

+ build a basic scene (renderer, scene, camera), with just a couple of direct light _THREE.DirectionalLight_

+ pull your camera a little behind the center and a bit higher, ie. (0,10,20)

    ```javascript
    camera.position.set(0, 10, 20);
    ```
 
+ move the lights far from the scene's center, like (20,20,20) and (-20,20,20)

+ then we need to instantiate a new Collada loader

    ```javascript
    loader = new THREE.ColladaLoader();
    ```
    
+ now we are ready to load the Collada file (assuming you are executing it from the _examples_ folder: 

    ```javascript
    loader.load( './models/tha_face_web.dae', function ( collada ) {
    
        // access to your model here using collada.scene
        
    })
    ```

+ the loading process is asyncronous: this means that you need to define an anonymous function (the callback) which will
 be called as soon as the model is loaded and available

+ the callback function receive the parsed Collada object: you can retrieve the whole Collada scene from _collada.scene_ and
append it to your scene

    ```javascript
    scene.add(collada.scene)
    ```

+ you should now be able to see the imported mesh with the right color, as materials are imported as well

Explanation
===========
Primitives are powerful, but when it comes to the production you are likely to be using cool 3D models made by the 3D artists: this 
is why you will probably manage large assets. As other assets loaders even ThreeJS importers are asyncronous, meaning that
you can handle the external asset only by the time it has been loaded.
 
We decided to go for Collada (DAE) format because is widely used in the industry (expecially the game industry), and it 
is mantained by the Khronos Group itself; anyhow ThreeJS offers importers for a lot of file formats: OBJ, Collada, JS, STL, ...

Check the [repository for more exporters](https://github.com/mrdoob/three.js/tree/master/examples/js/loaders)

Troubleshooting 
===============

+ first of all, always keep your console open and check for errors
 
+ if you see the canvas totally black, check your lights: they are likely to be inside the object, too far or too weak

+ if you see something strange check the camera: it could be inside the object or looking away