Example step
============
Create a real 3D object: just a simple cube
Goal
====
See the differences between 3D mesh, a pure geometry, a material and its position in the hierarchy.
Instructions
============
Create a new THREE.BoxGeometry object, calling it with the three sizes of the box: a cube will do the job, 2 units length 
per axis.
Then we need a THREE.MeshLambertMaterial in order to let the geometry be rendered.
Now we can create a new THREE.Mesh calling providing the constructor with the geometry and the material.
Don't forget to append your brand new mesh to the scene, using scene.add(). 
Explanation
===========
Every 3d mesh need basically two main features: the points onto its faces are built and the material to paint them with.
THREEJS provides us with several materials like MeshLambertMaterial, which is the general purpose one and the most used one, 
and with several 3D primitives like the BoxGeometry we used
By the way, if you run your page, you will still see nothing. Can you figure out why?

