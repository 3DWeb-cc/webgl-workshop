Example step
============
Modify the object being intersected from mouse

Goal
====
Change the material of the current intersected object

Instructions
============
+ start with the scene from [tutorial 19](18_find_intersections.md)
    
+ create another _MeshPhongMaterial_ with color __0x00ff00__, and name it "highlightMaterial"; we will use it in order to highlight 
the intersected objects

    ```javascript
    var highlightMaterial = new THREE.MeshPhongMaterial({
     color: 0x00ff00,
     opacity: 0.6,
     transparent: true
    });
    ```
    
+ add two new variables on the top of your main function: we are going to use them in order to store the current intersection and
the last one

    ```javascript
    var currentIntersection;
    var lastIntersected;
    ```
    
+ get your _checkIntersections_ function : we might want to assign to the first intersected object the __hightlight material__ 
we made before.

    ```javascript
    if (intersections.length > 0) {
        currentIntersection = intersections[0].object;
        currentIntersection.material = hightlightMaterial;
    }
    ```
+ now we need to reassign the original material if the object has changed, otherwise all cubes will maintain the highlight 
  color; just after the _currentSelection_ statement append the following code

    ```javascript
    if (lastIntersected !== undefined) {
        lastIntersected.material = theMaterial;
    }
    ```

+ finally assign the current value to _lastIntersected_ to keep it up to date

    ```javascript
    lastIntersected = currentIntersection;
    ```

+ if you run the scene right now, you'll notice that ugly flickering: this is caused by the continuous material switch, even
if it's not needed; we must add another condition

    ```javascript
    if (lastIntersected !== undefined && lastIntersected !== currentIntersection) {
        lastIntersected.material = theMaterial;
    }
    ```
  
+ this is the complete _checkIntersections_ function

    ```javascript
    function checkIntersections(mouseX, mouseY) {
        var currentIntersection;

        // generate the inverse projection
        mouseVector.set(mouseX, mouseY, 1);

        // set the parameters for raycaster
        rayCaster.setFromCamera(mouseVector, camera);

        // calculate intersections
        var intersections = rayCaster.intersectObjects(intersectables);

        if (intersections.length > 0) {
            currentIntersection = intersections[0].object;
            currentIntersection.material = hightlightMaterial;
        }

        if (lastIntersected !== undefined && lastIntersected !== currentIntersection) {
            lastIntersected.material = theMaterial;
        }

        lastIntersected = currentIntersection;

    }
    ```


Explanation
===========
This is the simplest (as of r71) way to calculate intersections, not the only one.