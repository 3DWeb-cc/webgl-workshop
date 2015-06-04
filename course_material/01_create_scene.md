Example step
============
Create a THREEJS scene

Goal
====
Understand how THREEJS relates to HTML and the Canvas

Prerequisites
=============
Some prerequisites required to understand this (and next) charapters:
+ Element of HTML pages
+ Basis of JavaScript language

Instructions
============
Write a simple HTML page with a div named "theContainer".
Then, using Javascript:
+   retrieve your container with ```document.getElementById(id)```
+   create new renderer with 

	```javascript
	new THREE.WebGLRenderer();
	```
+   set renderer's size, keeping it the same as the canvas in order to avoid distortions

	```javascript
    renderer.setSize(width, height);
    ```
+   then create a brand new scene, which will be the containers of all objects

	```javascript
    new THREE.Scene();
    ```
+   create new THREE.Camera with the right parameters: it requires the field of view (FOV), the ratio between renderer's width and height, the near and far clipping 		planes; These are typical common parameters but you can adjust them as you wish

	```javascript
    new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
	```
+   now set the camera position a bit behind the center, in order to be able to see it later: let's use (0,0,10) as coordinates (remember, Z axis goes outside the monitor)

	```javascript
    camera.position.set(0,0,10)
    ```
+   and finally, append the canvas created by ThreeJS to the container

	```javascript
    container.appendChild(renderer.domElement)
    ```
+   congratulations! You have just created your first ThreeJS scene.
+   add CSS (size, border or background) to the webgl canvas and/or add more HTML elements

Explanation
===========
The scene is basically composed by the camera, the renderer and the scene object. But of course, it is an empty scene and is not being rendered yet. Let's see what is missing!

Concept: [creating a scene](http://threejs.org/docs/#Manual/Introduction/Creating_a_scene).

Working with: [THREE.WebGLRenderer](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer), [THREE.Scene](http://threejs.org/docs/#Reference/Scenes/Scene), [THREE.Camera](http://threejs.org/docs/#Reference/Cameras/Camera).

Deeper: 
+ [CanvasRenderer](http://threejs.org/docs/#Reference/Renderers/CanvasRenderer)
+ [Camera Math](http://ksimek.github.io/2013/08/13/intrinsic/)




