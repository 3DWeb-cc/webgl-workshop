Example step
============
Load texture and apply it to a material.

Goal
====
Make a wood material using wood texture. 

Instructions
============

+ start from our [default scene](../examples/00_default_scene.html)

+ download a wood texture from [linzhouweb.com](http://linzhouweb.com/183651-seamless-wood-texture)

+ set up a cube geometry of 3 units per side
    
    ```javascript
    var cubeGeometry = new THREE.BoxGeometry(3,3,3);
    ```

+ create a new texture with _THREE.ImageUtils.loadTexture(src)_, in this example we are picking the one in [examples/img](../examples/img)

    ```javascript
    var texture = THREE.ImageUtils.loadTexture('img/wood.jpg');
    ```

+ create new _LambertMaterial_ with option `map` referencing the texture

    ```javascript
    material = new THREE.MeshLambertMaterial({
        map: texture
    });
    ```

+ assemble the Mesh object using cube geometry and the material as usual and add it to your scene

    ```javascript
    var mesh = new THREE.Mesh(cubeGeometry, material);
    scene.add(mesh);
    ```

+ keep always the console open: by default the missing textures fall back to black color, so if you see something strange
maybe that the script is not finding the image


Explanation
===========
Textures are a way to add realistic effect to materials: they need to be created using an image and _THREE.ImageUtils.loadTexture(src)_
is the quickest and simplest method to do it. However, we are using the returned object, which is actually a _THREE.Texture_ object
with undefined source. It will be modified __after__ the texture loading, so be aware of this if you are accessing the image data.
 
See the sources for more informations [THREE.ImageUtils sources](https://github.com/mrdoob/three.js/blob/master/src/extras/ImageUtils.js)
 
You could also define a onLoad and onError handler, have a look to method's signature:

    ```javascript
    loadTexture ( url, mapping, onLoad, onError )
    ```

Deeper:

+ Texture theory are based on [UV mapping](http://en.wikipedia.org/wiki/UV_mapping), and they are well known from cartographer. See more in the wikipedia page about [map projection](http://en.wikipedia.org/wiki/Map_projection).