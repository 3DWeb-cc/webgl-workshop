Example step
============
Let your scene be rendered

Goal
====
Understand WebGL rendering pipeline and `requestAnimationFrame()` role.

Instructions
============
Let the renderer parse your scene with `renderer.render()` method, passing it your scene and the camera.
Set up the frame by frame pipeline using the native function `window.requestAnimationFrame()`.

Explanation
===========
Build a scene is not enough: we need to ask THREE Renderer to "cook" it for us, passing it the scene itself and our point of view (the camera).
Then, we might want this process to run for each available frame. Let think about it as a movie. Each movie is build on a fast repetition of frames: still images that, moving fast (more or less 30 fps) make a kind magic with our eyes and let us give the illusion of motions.

Deeper:
+ [Hertz](http://en.wikipedia.org/wiki/Hertz), [Eadweard Muybridge](en.wikipedia.org/wiki/Eadweard_Muybridge) and [Persistence of vision](http://en.wikipedia.org/wiki/Persistence_of_vision)
+ [Stats.js](https://github.com/mrdoob/stats.js/), a JavaScript Performance Monitor
+ Paul Irish on [smart animating](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)

