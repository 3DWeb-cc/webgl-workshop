Example step
============
Let your scene be rendered

Goal
====
Understand WebGL rendering pipeline and `requestAnimationFrame()` role.

Instructions
============
In order to give you a nice picture of the scene, the render must know that the scene is existing and the point of view you are looking from (the camera, in other words)
+ 	create a function without arguments and call it _animate_
+	in _animate_ function, let the renderer parse your scene, passing it your scene and the camera

    ```javascript
    renderer.render(scene, camera);
    ```
+	now insert a recursive call into the _animate_ function, making it be called each frame, with the native function
 
    ```javascript
    window.requestAnimationFrame(animate)
    ```
+	last, call ```window.requestAnimationFrame(animate)``` somewhere in the end of your script; this way you are starting the whole chain

Explanation
===========
Building a scene is not enough: we need to ask THREE Renderer to "cook" it for us, passing it the scene itself and our point of view (the camera).

Then, we might want this process to run for each available frame. 

Let's think about it as a movie. Each movie is build on a fast repetition of frames: still images that, moving fast (more or less 30 fps) make a kind magic with our eyes and let us give the illusion of motions.

Deeper:
+ [Hertz](http://en.wikipedia.org/wiki/Hertz), [Eadweard Muybridge](en.wikipedia.org/wiki/Eadweard_Muybridge) and [Persistence of vision](http://en.wikipedia.org/wiki/Persistence_of_vision)
+ [Stats.js](https://github.com/mrdoob/stats.js/), a JavaScript Performance Monitor
+ Paul Irish on [smart animating](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)

