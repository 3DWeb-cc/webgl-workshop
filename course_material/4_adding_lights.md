Example step
============
Add light to the scene
Goal
====
Make your mesh visible through light
Instructions
============
Create a brand new THREE.DirectionalLight: it needs the light's color (in HEX) and the light's power (1 is a good starting value).
Then, using a DirectionalLight requires a good position to project the light from: set it to (10,10,10) using light.position.set().
Don't forget to add the light to your scene!
Explanation
===========
In order to see anything in a 3D space, you need photons: like in the real world, they are supposed to transport colors 
to our eyes.
Lights represent our photons source in the 3D world, so you will always need at least one.
Try to experiment with different light sources included in THREEJS: AmbientLight, SpotLight, PointLight. 