Example step
============
Map an environment onto to the sky

Goal
====
Use cube maps in order to get an environment 

Instructions
============

+ start from our [default scene](../examples/00_default_scene.html)

+ get a cube texture. We took [this one](http://www.humus.name/index.php?page=Textures&ID=134).

+ in order to map an environment texture, we need a giant cube: create a new _THREE.BoxGeometry with size 5000

    ```javascript
    var cubeGeometry = new THREE.BoxGeometry(3,3,3);
    ```

+ for each face of the cube, we must create a material as per [previous tutorial](13_texture_mapping); nevertheless, we have
to set the _side_ option using the constant _THREE.BackSide_, so that the ThreeJS will render the __inner__ faces

    ```javascript
    var materialArray = [];
    var imageNames  = ["posx", "negx", "posy", "negy", "posz", "negz"];
    var imageSuffix = ".jpg";
    for (var i = 0; i < 6; i++) {
        materialArray.push(new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture( imageNames[i]+imageSuffix ),
            side: THREE.BackSide
        }));
    }
    ```
    
+ the _THREE.BackSide_ parameter is mandatory, as we'll be inside the cube, looking at its back faces; we could use _THREE.DoubleSide_
but it more expensive to be rendered and we won't go outside the cube

+ note that the order of image names is important: try to mess it up if you are curious

+ now create a FaceMaterial which automatically assigns materials to faces
    
    ```javascript
    material = new THREE.MeshFaceMaterial( materialArray );
    ``

+ and finally create a new _THREE.Mesh_ using the former geometery and the material
 
+ add it to your scene 

Explanation
===========
Cube maps are a 360° view of an environment: they can be mapped onto a cube giving the sensation of a full immersion.
They are useful for environments, reflections, refractions and eve lighting.