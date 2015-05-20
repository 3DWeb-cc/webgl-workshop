Example step
============
Link more meshes together.
Goal
====
Create three spheres and group them through Object3d. 
Instructions
============
Create a new THREE.Object3D and add it to the scene. Put it at (0,0,0) as usual.
Create two spheres with radius 10 and 8 with THREE.SphereGeometry: specify radius and subdivision segments.
Instead of adding the spheres to the scene, add them to the Object3D.
Move the second sphere on the y axis, in order to place it just above the first.
Create another smaller sphere (radius 5) and put it above the second, like the head of a small snowman.
Now move around the Object3D: the snowman will follow its movements.
Explanation
===========
Every 3D object can have children: they are linked inheriting parent's transformations, so that you can transform multiple
objects in a while.
There's almost no limit to hierarchy levels, just the GPU capabilities!