Example step
============
Load a cube map and apply it to a material

Goal
====
Decorate a small crate using cube maps

Instructions
============

+ start from our [default scene](../examples/00_default_scene.html)

+ set up a cube geometry of 3 units per side
    
    ```javascript
    var cubeGeometry = new THREE.BoxGeometry(3,3,3);
    ```

+ find the six images provided [crate_#.jpg](../examples/img/crate_*.jpg) from 1 to 6

+ for each face of the cube, we must create a material and save them into an array; we have to create also a new _THREE.Texture_
passing the right image: note that the material saves a _reference_ of the texture
    
    ```javascript
    var imgName = './img/crate_';
    for (var i = 1; i < 7; i++) {
        materialArray.push(new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture( imgName + i)
        }));
    }
    ```
    
+ you should probably set _texture.minFilter_ since the images are not power of two
    
    ```javascript
    texture.minFilter = THREE.NearestFilter
    ```
 
+ now create a _THREE.FaceMaterial_ which automatically assigns materials to faces, passing it the array just created

    ```javascript
    var faceMaterial = new THREE.MeshFaceMaterial( materialArray );
    ```

+ assemble the Mesh object using cube geometry and the material and put it onto the scene as usual

    ```javascript
    var cube = new THREE.Mesh(cubeGeometry, faceMaterial);
    ```

- run and try to mess up the textures' order


Explanation
===========

In production, we would prefer to pack textures in smaller files in order to improve the assets loading and the user experience.

Using cube maps is a good way to map environments and decorations.

Deeper:

- [Why are textures always square powers of two? What if they aren't?](http://gamedev.stackexchange.com/questions/26187/why-are-textures-always-square-powers-of-two-what-if-they-arent)