Example step
============
Change material's color

Goal
====
Work with diffuse property of different materials
 
Instructions
============

+ start from our [default scene](../examples/00_default_scene.html)

+ create a brand new sphere with a _THREE.MeshBasicMaterial_ and add it to your scene, defining the variable in the global scope
in order to be able to access it from the console

+ run your scene and change the color of material through console: use _Color.setHSL(h,s,l)_ , _Color.setHex(0xffffff)_ or 
_Color.setStyle(css_string)_ to feel confident with the different implementations

+ add another sphere beside the first (use position.setX()) with a _THREE.MeshLambertMaterial_ with the same color

+ add another sphere beside the first two _THREE.MeshPhongMaterial_

+ note how the different materials have the same color but show different results

+ try to animate color, changing for instance just one of the three RGB values inside the _animate()_ loop

Explanation
===========
Diffuse is the most known property of a material: its raw color. However, the raw color is fully visible only with _MeshBasicMaterial_,
due to the reaction of the other materials to the lights.

One should take into account also this behaviour in order to get the best result.

Deeper:
+ the light is one of the most important things in a render scene. What we are actually doing is a ray physical simulation. There are a number of more sofisticated simulations with more pleasure results but of course more computational power ([Ray tracing](http://en.wikipedia.org/wiki/Ray_tracing_(graphics)), [Radiosity](http://en.wikipedia.org/wiki/Radiosity_(computer_graphics)), [Photon mapping](http://en.wikipedia.org/wiki/Photon_mapping), and more).