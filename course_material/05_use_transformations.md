Example step
============
Move the cube in the 3D space.

Goal
====
Translate, rotate and scale the cube on the 3 axis understanding transformations.
 
Instructions
============
Move the cube 4 units upper using `cube.position.setY()`.
Make it a little bit larger using `cube.scale.setX(20)`.
Now it should be too large for the camera: try to pull the camera on the Z axis until you see it again.
If you wish to play, put a transformation in the `animate()` function: if you use a mutable state (i.e. variable) you will be
able to animate your cube.
TIP: angles are expressed in radiant.

Explanation
===========
Every 3D object (be it mesh, light or camera) supports the three fundamental geometrical transformation through vectors.
You can apply transformation one axis per time (setX, setY, setZ), passing a complete Vector3, or using additive transformations
like `object.translateOnAxis(axis, distance)` and  `object.rotateOnAxis(x,y,z)`.

Deeper:
+ [Tween.js](http://learningthreejs.com/blog/2011/08/17/tweenjs-for-smooth-animation/)
+ Math, Linear transformation, [Matrix multiplication](http://en.wikipedia.org/wiki/Transformation_matrix) and keep [order](http://gamedev.stackexchange.com/questions/16719/what-is-the-correct-order-to-multiply-scale-rotation-and-translation-matrices-f) in mind!
+ 3D transformation calculi with [Excel](http://blogs.office.com/2015/02/18/excel-fun-build-3d-graphics-spreadsheet/)