Example step
============
Let your scene be rendered
Goal
====
Understand WebGL rendering pipeline and requestAnimationFrame() role
Instructions
============
Let the renderer parse your scene with renderer.render() method, passing it your scene and the camera.
Set up the frame by frame pipeline using the native function window.requestAnimationFrame().
Explanation
===========
Build a scene is not enough: we need to ask THREE Renderer to "cook" it fo us, passing it the scene itself and our point of view (the camera).
Then, we might want this process to run for each available frame.

