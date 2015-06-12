Example step
============
Traverse the loaded scene

Goal
====
Find and collect meshes and materials  

Instructions
============

+ start from our [default scene](../examples/00_default_scene.html)

+ load a 3d model from external file following the [custom geometry tutorial](08_custom_geometry.md)

+ now locate the _loader.load(asset, function(collada) {...})_ call in the code

+ we are going to use a nice implementation of the _visitor pattern_ which comes with ThreeJS: the _collada.scene.traverse()_
method which takes the callback function to be executed for each node of the scene graph

+ let's start with something really simple: for each node, print in console its _id_ and _type_

    ```javascript
    loader.load( './models/tha_face_web.dae', function ( collada ) {
        collada.scene.traverse( function ( child ) {
            console.log(child.id + ' ' + child.type);
        });
    })
    ```

+ try to filter just _THREE.Mesh_ objects and print their material _type_
    
    ```javascript
    loader.load( './models/tha_face_web.dae', function ( collada ) {
        collada.scene.traverse( function ( child ) {
            if (child instanceof THREE.Mesh) {
                console.log(child.id + ' ' + child.material.type);
            }
        });
    })
    ```

+ try to explore and filter different properties or objects

Explanation
===========
The scene graph is a powerful hierarchy structure, and is easy to explore thanks to _Object3D.traverse_ function.

For large scenes, you can use _Object3D.traverseVisible()_ which traverse only visible objects.