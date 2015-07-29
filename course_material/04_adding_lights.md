Example step
============
Add light to the scene

Goal
====
Make your mesh visible through light 

Remember the word _photography_, from the Greek roots φωτός (phōtos), "light" and γραφή (graphé) "drawing", together meaning "drawing with light" [[Wikipedia](http://en.wikipedia.org/wiki/Photography)]. Like photography, also computer graphics lies on the light to reveal the captured scene.

Instructions
============
+	create a brand new `DirectionalLight`: it needs the light's color (in HEX) and the light's power (1 is a good starting value)

    ```javascript
    new THREE.DirectionalLight(0xffffff, 1);
    ```
+	using a `DirectionalLight` requires a good position to project the light from: try to set it to (10,10,10) using
 
	```javascript
    light.position.set(10,10,10);
    ```
+	as usual, don't forget to add the light to your scene (remember the _scene graph_)!

Explanation
===========
In order to see anything in a 3D space, you need photons: like in the real world, they are supposed to transport colors to our eyes.
Lights represent our photons source in the 3D world, so you will always need at least one.

Try to experiment with different light sources included in THREEJS: [AmbientLight](http://threejs.org/docs/#Reference/Lights/AmbientLight), [SpotLight](http://threejs.org/docs/#Reference/Lights/SpotLight), [PointLight](http://threejs.org/docs/#Reference/Lights/PointLight).

Deeper:
+ [THREE.Color](http://threejs.org/docs/#Reference/Math/Color) class
+ [Toxixlib.js color](https://github.com/hapticdata/toxiclibsjs/tree/develop/lib/toxi/color)
+ [Path tracing](http://madebyevan.com/webgl-path-tracing/) in WebGL
+ [Deferred irradiance volume](http://codeflow.org/entries/2012/aug/25/webgl-deferred-irradiance-volumes/) in WebGL.