Example step
============
Load custom geometry
Goal
====
Load custom geometry 
Instructions
============
- in order to load custom geometry, we need the appropriate exporter: since we are loading a Collada file, get the Collada 
loader for ThreeJS from  https://github.com/mrdoob/three.js/tree/master/examples/js/loaders/ColladaLoader.js and load it 
into your page after three.js
- get the 3D Model ''tha_face_web.dae'' from models/
- build a basic scene (renderer, scene, camera), with just one direct light (THREE.DirectionalLight).
- pull your camera a little behind the center, ie. (0,0,20) 
- move the light far from the scene's center (like (20,20,20))
- then we need to instantiate a new loader: `new THREE.ColladaLoader()`
- now we are ready to load the Collada file: `loader.load( './models/tha_face_web.dae', function ( collada ) {...})`
- the load method takes the complete filename and the callback to be called once the file is ready, passing a collada objects 
as argument: you can retrieve the whole Collada scene from `collada.scene`
- last but not least, just append the collada scene to your own scene: `myScene.add(collada.scene)`
- you should now be able to see the imported mesh with the right color, as the material are imported as well
- Troubleshooting 1: first of all, always keep your console open. 
- if you see the canvas totally black, check your lights: they are likely to be inside the object, too far or too weak
- if you see something strange check the camera: it could be inside the object or looking away


Explanation
===========
Primitives are powerful, but when it comes to the production you are likely to be using cool 3D models made by the 3D artists: this 
is why you will probably manage large assets. As other assets loaders even ThreeJS importers are asyncronous, meaning that
you can handle the external asset only by the time it has been loaded. 
We decided to go for Collada (DAE) format because is widely used in the industry, and it is mantained by the Khronos Group;
anyhow ThreeJS offers importers for a lot of file formats: OBJ, Collada, JS, STL, ...
Check the repository for more exporters: https://github.com/mrdoob/three.js/tree/master/examples/js/loaders