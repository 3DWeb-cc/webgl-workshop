Example step
============
Create a real 3D object: just a simple cube

Goal
====
See the differences between 3D mesh, a pure geometry, a material and its position in the hierarchy (the so called _scene graph_). 

Understand how the _scene graph_ is implemented in THREEJS with the basic abstract type `Object3D`.

Instructions
============
+	create a new `BoxGeometry` object, calling it with the three sizes of the box: a cube will do the job, 2 units length per axis

    ```javascript
    new THREE.BoxGeometry(2,2,2);
    ```
+	then we need a material in order to let the geometry be rendered; the most common material is probably the `MeshLambertMaterial`, which accept some options and we will use the _color_ one with this reddish color

	```javascript
    new THREE.MeshLambertMaterial({
        color: 0xFC6A45
    })
    ```
+	now we can create the `Mesh` object, which will connect geometry with material allowing the renderer to know how to show the cube; we must provide the constructor with the geometry and the material

    ```javascript
    new THREE.Mesh(geometry, material)
    ```
+	don't forget to append your brand new mesh to the scene, using

	```javascript
    scene.add(mesh)
    ```

Explanation
===========
Every 3d mesh needs basically two main features: the points onto its faces are built and the material to paint them with.

ThreeJs provides us with several materials like `MeshLambertMaterial`, which is the general purpose one and the most used one, and with several 3D primitives like the `BoxGeometry` we used in this tutorial.

By the way, if you run your page, you will still see nothing. Can you figure out why?

Abstract Objects:
+ [Object3D](http://threejs.org/docs/#Reference/Core/Object3D)
+ [Geometry](http://threejs.org/docs/#Reference/Core/Geometry)
+ [Material](http://threejs.org/docs/#Reference/Materials/Material)
+ [Mesh](http://threejs.org/docs/#Reference/Objects/Mesh)

Question:
are `Camera` and `Scene` instances of Object3D?

Deeper:

+ [Polygon Mesh](http://en.wikipedia.org/wiki/Polygon_mesh) and differences between Vertices, Points, Faces, Polygons, Surfaces
+ [Open Sceen Graph](http://osgjs.org/) JavaScript porting
+ [.obj files](http://en.wikipedia.org/wiki/Wavefront_.obj_file)

