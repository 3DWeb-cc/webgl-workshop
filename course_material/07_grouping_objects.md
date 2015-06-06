Example step
============
Link more meshes together.
Goal
====
Create three spheres and group them through Object3d. 
Instructions
============
+   create a new _THREE.Object3D_ and add it to the scene. Put it at (0,0,0) as usual.
    
    ```javascript
    new THREE.Object3D();
    ```
+   create two spheres with radius 10 and 8 with _THREE.SphereGeometry_: specify radius and subdivision segments.

    ```javascript
    new THREE.SphereGeometry(10, 8, 8);
    ```
    
+   instead of adding the spheres to the scene, add them to the Object3D
    ```javascript
    object3d.add(sphere)
    ```

+   move the second sphere on the y axis, in order to place it just above the first

+   create another smaller sphere (radius 5) and put it above the second, like the head of a small snowman

+   now move around the Object3D: the snowman will follow its movements

Explanation
===========
Every 3D object can have children: they are linked inheriting parent's transformations, so that you can transform multiple
objects in a while.

There's almost no limit to hierarchy levels, just the GPU capabilities!