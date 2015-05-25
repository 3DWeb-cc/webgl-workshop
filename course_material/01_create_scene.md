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
+   create new THREE.WebGLRenderer
+   set renderer's size
+   create new THREE.Scene
+   create new THREE.Camera with the right parameters: FOV, ratio, near cull plane, far cull plane
+   set the camera position at (0,0,10) with camera.position.set()
+   append renderer.domElement to your container
+   add CSS (size, border or background) to the webgl canvas and/or add more HTML elements

Explanation
===========
Concept: [creating a scene](http://threejs.org/docs/#Manual/Introduction/Creating_a_scene).

Working with: [THREE.WebGLRenderer](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer), [THREE.Scene](http://threejs.org/docs/#Reference/Scenes/Scene), [THREE.Camera](http://threejs.org/docs/#Reference/Cameras/Camera).

Deeper: 
+ [CanvasRenderer](http://threejs.org/docs/#Reference/Renderers/CanvasRenderer).
+ [Camera Math](http://ksimek.github.io/2013/08/13/intrinsic/)




