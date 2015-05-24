Example step
============
Let the scene be explored with the mouse.
Goal
====
Build a quick setup that allows the user explore the scene.
Instructions
============
- add a new dependency to our scene: THREE.OrbitControls (from https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js)
- find out renderer creation point in your code: new THREE.WebGLRenderer()
- after renderer and camera creation, we can use OrbitControls:
``var controls = new THREE.OrbitControls( theCamera, renderer.domElement );`
- if you run again your scene, you will be able to move around and zoom using either the mouse or the trackpad
Explanation
===========
Handling mouse and touch events is quite hard, fortunately the THREEJS team came out with this little helper.
It need just the current camera being used and the actual canvas.