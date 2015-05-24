Example step
============
Create a THREEJS scene
Goal
====
Understand how THREEJS relates to HTML and the Canvas
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
Explanation
===========
Working with THREE.WebGLRenderer, THREE.Scene, THREE.Camera