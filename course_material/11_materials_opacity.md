Example step
============
Make a transparent object

Goal
====
Understand opacity and transparency 

Instructions
============

+ start from our [default scene](../examples/00_default_scene.html)

+ create a new THREE.MeshPhongMaterial with the following properties:

    ```javascript
    var material = new THREE.MeshPhongMaterial( { 
		color: 0xccccff
	});
    ```
    
+ create a half sphere geometry, using __phiStart__ and __phiLength__ properties of _THREE.SphereGeometry_ (remember, angles
are expressed in radiants)
    
    ```javascript
    var halfSphereGeometry = new THREE.SphereGeometry(4, 16, 16, 0, Math.PI*2, Math.PI/2, Math.PI);
    ```

+ create a new _THREE.Mesh_ based on the previous geometry and the material just created and add it to the scene

   ```javascript
    var halfSphere = new THREE.Mesh(halfSphereGeometry, material);
    ```

+ move the half sphere upwards by 3 units (use _sphere.position.setY_)

    ```javascript
    halfSphere.position.setY(3);
    ```

+ create a cylinder mesh, using the same material and the following size:
 
    ```javascript
     var cylinderMesh = new THREE.CylinderGeometry(0.6,0.6,4,16);
     ```

+ add it to the scene and move downward by 1 units

+ create and add a little disc, with the same material and a geometry like:
 
    ```javascript
    var littleDiscGeometry = new THREE.CylinderGeometry(2,2,0.2,16);
    var littleDisc = new THREE.Mesh(littleDiscGeometry, material);
    ```

+ move the little disc to the bottom (Y to -3)

    ```javascript
    littleDisc.position.setY(-2);
    ```
    
+ run the scene and have a look: now you should have a nice, old fashioned glass; oh... did you rember to add the objects
to the scene with _scene.add()_?

+ now let's change the material with this new values
    
    ```javascript
    material.setValues( { 
		color: 0xccccff,  
        opacity: 0.2,
        transparent: true
	} );
    ```
    
+ let's put a plane in order to appreciate transparency:

    ```javascript
    var planeGeometry = new THREE.PlaneGeometry(20,10);
    ```

+ add the plane creating a new mesh with the plane geometry just created and a LambertMaterial, color 0x77FF66

    ```javascript
    var plane = new THREE.Mesh(planeGeometry, new THREE.MeshLambertMaterial({
        color: 0x77FF66
    }));
    ```
    
+ rotate the plane by -90° (half a radiant) on the X axis, as it's oriented vertically by default

    ```javascript
    plane.rotation.set(-Math.PI/2,0,0);
    ```

+ move the plane at the bottom

    ```javascript
    plane.position.setY(-3);
    ```

Explanation
===========
Material's opacity can be used to make quick transparent object: it forces the light to pass through the geometry
allowing you to see what's behind. 

Deeper:

Have a look at [WebGLRenderer](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer) documentation: are there some alpha properties to be set?
