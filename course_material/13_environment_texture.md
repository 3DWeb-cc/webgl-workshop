Example step
============
Map an environment onto to the sky.
Goal
====
Use cube maps in order to get an environment. 

Instructions
============
- get a cube texture. We took [this one](http://www.humus.name/index.php?page=Textures&ID=134).
- in order to map an environment texture, we need a giant cube. Create a new THREE.CubeGeometry with size 5000
- for each face of the cube, we must create a material as per previous tutorial. Get a new Array element and fill it with: 
```
 var imageNames  = ["posx", "negx", "posy", "negy", "posz", "negz"];
 var imageSuffix = ".jpg";
 for (var i = 0; i < 6; i++)
        materialArray.push(new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture( imageNames[i]+imageSuffix ),
            side: THREE.BackSide
        }));
```
- the `THREE.BackSide` parameter is mandatory, as we'll be inside the cube, looking at its back faces
- note that the order of image names is important: try to mess it up if you are curios!
- now create a FaceMaterial which automatically assigns materials to faces: ``new THREE.MeshFaceMaterial( materialArray );``
- and finally create a new `THREE.Mesh` using the former CubeGeometry and the FaceMaterial. Add it to your scene. 

Explanation
===========
Cube maps are a 360° view of an environment: they can be mapped onto a cube giving the sensation of a full immersion.
They are useful for environments, reflections, refractions and eve lighting.