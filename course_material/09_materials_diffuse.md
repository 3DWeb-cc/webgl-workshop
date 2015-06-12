Example step
============
Change material's color.
Goal
====
Work with diffuse property of different materials. 
Instructions
============
- Create a brand new sphere with a `THREE.MeshBasicMaterial` and add it to your scene.
- Change the color of material through console: use `Color.setHSL()`, `Color.setHex()`, `Color.setStyle()`.
- Add another sphere beside the first with a `THREE.MeshLambertMaterial` with the same color.
- Add another sphere beside the first with a `THREE.MeshPhongMaterial` with the same color.
- Note how the different materials have the same color but show different results.
- Tip: try to animate color, changing for instance just one of the three RGB values inside the `render()`. 

Explanation
===========
Diffuse is the most known property of a material: it's raw color. However, the raw color is fully visible only with `MeshBasicMaterial`,
due to the reaction of the other materials to the lights.
One should take into account also this behaviour in order to get the best result.

Deeper:
- the light is one of the most important things in a render scene. What we are actually doing is a ray physical simulation. There are a number of more sofisticated simulations with more pleasure results but of course more computational power ([Ray tracing](http://en.wikipedia.org/wiki/Ray_tracing_(graphics)), [Radiosity](http://en.wikipedia.org/wiki/Radiosity_(computer_graphics)), [Photon mapping](http://en.wikipedia.org/wiki/Photon_mapping), and more).