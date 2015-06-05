Example step
============
Let the scene be explored with the mouse.

Goal
====
Build a quick setup that allows the user explore the scene.

Instructions
============
+   add a new dependency to our scene: [THREE.OrbitControls](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js)
+   find out renderer creation point in your code, should be something like: 

    ```javascript
    var renderer = new THREE.WebGLRenderer();
    ```
+   after renderer and camera creation, we can use OrbitControls object:

    ```javascript
    var controls = new THREE.OrbitControls( camera, renderer.domElement );
    ```
+    if you run again your scene, you will be able to move around and zoom using either the mouse or the trackpad

Explanation
===========
Handling mouse and touch events is quite hard, but fortunately the ThreeJs team came out with this little helper (and some more).

It need just the current camera being used and the actual canvas.

Deeper:
=======
- Try other kind of controls, like `TrackballControl`
- Explore the [THREEJS git repository](https://github.com/mrdoob/three.js) and see how the camera controls are not in the main directory but in example. For a deeper exercise, if you are confident with bower, try to find a way to install THREEJS with it.. Note: there is still not a standard way! If you manage to do it in a good way, share it!
- If you are confident with JavaScript language, try to read the code and see how, like all other THREEJS pieces, everything is build on classes. But there is a difference between how some other prototype-based class (like `THREE.Object3D`) are written and the controls. The motivation of this difference relies on the `this` scope and the user-event listener.. can you explain what is it?