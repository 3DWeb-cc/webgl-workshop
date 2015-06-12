Example step
============
Make a transparent object.
Goal
====
Understand opacity and transparency. 
Instructions
============
- create a new THREE.MeshPhongMaterial with the following properties:
``
    new THREE.MeshPhongMaterial( { 
		color: 0xccccff
	});
``
- Create a half sphere geometry, using `phiStart` and `phiLength` properties of `SphereGeometry`: 
``new THREE.SphereGeometry(4, 16, 16, 0, Math.PI*2, Math.PI/2, Math.PI);``
- create a new `THREE.Mesh` based on the previous geometry and the material just created and add it to the scene
- move the half sphere upwards by 3 units (use `position.setY`)
- create a cylinder mesh, using the same material and the following size: 
``new THREE.CylinderGeometry(0.6,0.6,4,16)``
- add it to the scene and move downward by 1 units
- create and add a little disc, with the same material and a geometry like: 
``new THREE.CylinderGeometry(2,2,0.2,16)``
- move the little disc to the bottom (Y to -3)
- now you should have a nice, old fashioned glass: let's change the material to this one:
``
    new THREE.MeshPhongMaterial( { 
		color: 0xccccff,  
        opacity: 0.2,
        transparent: true
	} );
``
- create a new plane geometry:
`new THREE.PlaneGeometry(20,10)`
- add a plane creating a new mesh with the plane geometry just created and a LambertMaterial, color 0x77FF66
- rotate the plane by -90° (half a radiant) on the X axis: `plane.rotation.set(-Math.PI/2,0,0)`
- move the plane at the bottom: `setY(-3)` 
Explanation
===========
Material's opacity can be used to make quick transparent object: it forces the light to pass through the geometry
allowing you to see what's behind. 

Deeper:

Have a look at [WebGLRenderer](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer) documentation: are there some alpha properties to be set?