Example step
============
Find the object being intersected from mouse

Goal
====
Understand the raycaster and projections

Instructions
============

+ start from our [default scene](../examples/00_default_scene.html)

+ set the camera position at (0,20,30)

+ create a new _MeshLambertMaterial_ whit color _0xFC6A45_

    ```javascript
    var material = new THREE.MeshLambertMaterial({
     color: 0xFC6A45
    });
    ```

+ create one _BoxGeometry_ with size 6

    ```javascript
    var geometry = new THREE.BoxGeometry(6,6,6);
    ```

+ now using a loop-construct build up to six cubes using the same geometry and material, and try to position all the 
  cubes around; don't forget to add them to the scene!

    ```javascript
    var geometry = new THREE.BoxGeometry(6, 6, 6);
    var cube, k = -6;
    while (k++ < 6) {
      cube = new THREE.Mesh(geometry, theMaterial);
      cube.name = 'cube_' + k;
      if (k%2) {
        cube.position.set(
          8 * k,
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 10));
      } else {
        cube.position.set(
          8 * k,
          -Math.round(Math.random() * 10),
          -Math.round(Math.random() * 10));
      }
      scene.add(cube);
    }
    ```

+ then we need to save the cubes in an array to check against when we will cast the rays; define it on the top

    ```javascript
    var intersectables = [];
    while (k++ < 6) {
      
      //...
      
      intersectables.push(cube);
    }
    ```
+ take the function _onMouseMove()_ that we created in the [previous tutorial](17_translating_mouse_coordinates.md) and 
bring it here

+ bind the listener on the canvas as per [previous tutorial](17_translating_mouse_coordinates.md)
 
    ```javascript
    $(canvas).on('mousemove', onMouseMove);
    ```

+ at this point we need to create a bunch of new objects; put them at the top of your code:

    ```javascript
    var mouseVector = new THREE.Vector3();
    var rayCaster = new THREE.Raycaster();
    
    // to cache the last selected object  
    var lastIntersected;
    ```
    
+ now create a new function called _findIntersections()_ which takes two arguments: mouseX and mouseY; you must retrieve 
these values using the formulas from [translating mouse coordinates tutorial](17_translating_mouse_coordinates.md)

    ```javascript
    function checkIntersections(mouseX, mouseY) {
        var currentIntersection;

        // add code here

    }
    ```
    
+ let's update the vector which represents the mouse with the current coordinates

    ```javascript
    mouseVector.set(mouseX, mouseY, 1);
    ```
    
+ setup the RayCaster with the new mouse position and the camera from which we are looking to the scene

    ```javascript
    rayCaster.setFromCamera(mouseVector, camera);
    ```

+ and finally, let the RayCaster check for intersections with our cached objects

    ```javascript
    var intersections = rayCaster.intersectObjects(intersectables);
    ```

+  the RayCaster gives back an array of intersected objects, the first is the closer to the camera: just print it out in console,
in order to check whether it is working or not

    ```javascript
    var obj;
    if (intersections.length > 0) {
        obj = intersections[0].object;
        console.log(obj.name);
    }
    ```

+ and here is the complete _checkIntersections_ function

    ```javascript
    function checkIntersections(mouseX, mouseY) {

        // generate the inverse projection
        mouseVector.set(mouseX, mouseY, 1);

        // set the parameters for raycaster
        rayCaster.setFromCamera(mouseVector, camera);

        // calculate intersections
        var intersections = rayCaster.intersectObjects(intersectables);

        var obj;
        if (intersections.length > 0) {
            obj = intersections[0].object;
            console.log(obj.name);
        }

    }
    ```


Explanation
===========
This is the simplest (as of r71) way to calculate intersections, not the only one.
