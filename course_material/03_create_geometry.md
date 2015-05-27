Example step
============
Create a real 3D object: just a simple cube

Goal
====
See the differences between 3D mesh, a pure geometry, a material and its position in the hierarchy (the so called _scene graph_). Understand how the _scene graph_ is implemented in THREEJS with the basic abstract type `Object3D`

Instructions
============
Create a new `THREE.BoxGeometry object`, calling it with the three sizes of the box: a cube will do the job, 2 units length 
per axis.
Then we need a `THREE.MeshLambertMaterial` in order to let the geometry be rendered.
Now we can create a new `THREE.Mesh` calling providing the constructor with the geometry and the material.
Don't forget to append your brand new mesh to the scene, using `scene.add()`. 

Explanation
===========
Every 3d mesh need basically two main features: the points onto its faces are built and the material to paint them with.
THREEJS provides us with several materials like `MeshLambertMaterial`, which is the general purpose one and the most used one, 
and with several 3D primitives like the `BoxGeometry` we used
By the way, if you run your page, you will still see nothing. Can you figure out why?

Abstract Objects:
+ [Object3D](http://threejs.org/docs/#Reference/Core/Object3D)
+ [Geometry](http://threejs.org/docs/#Reference/Core/Geometry)
+ [Material](http://threejs.org/docs/#Reference/Materials/Material)
+ [Mesh](http://threejs.org/docs/#Reference/Objects/Mesh)

Question:
Are `Camera` and `Scene` instances of Object3D?

Deeper:

+ [Polygon Mesh](http://en.wikipedia.org/wiki/Polygon_mesh) and differences between Vertices, Points, Faces, Polygons, Surfaces
+ [Open Sceen Graph](http://osgjs.org/) JavaScript porting
+ [.obj files](http://en.wikipedia.org/wiki/Wavefront_.obj_file)

