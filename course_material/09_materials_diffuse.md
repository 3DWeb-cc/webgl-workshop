Example step
============
Change material's color.
Goal
====
Work with diffuse property of different materials. 
Instructions
============
- Create a brand new sphere with a THREE.MeshBasicMaterial and add it to your scene.
- Change the color of material through console: use Color.setHSL(), Color.setHex(), Color.setStyle().
- Add another sphere beside the first with a THREE.MeshLambertMaterial with the same color.
- Add another sphere beside the first with a THREE.MeshPhongMaterial with the same color.
- Note how the different materials have the same color but show different results.
- Tip: try to animate color, changing for instance just one of the three RGB values. 
Explanation
===========
Diffuse is the most known property of a material: it's raw color. However, the raw color is fully visible only with MeshBasicMaterial,
due to the reaction of the other materials to the lights.
One should take into account also this behaviour in order to get the best result.