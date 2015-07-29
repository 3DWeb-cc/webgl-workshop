Example step
============
Load and apply different textures to the right channels

Goal
====
Learn _specular_ and _normal_ channels and how they affect materials

Instructions
============

+ start from our [default scene](../examples/00_default_scene.html)

+ remember to set the _minFilter_ to _THREE.NearestFilter_ if your textures are not power of two, otherwise they will
 produce a blurry effect on the side

+ the diffuse texture is what you immediately see (remember the [material diffuse tutorial](10_materials_diffuse.md)?),
create the diffuse texture using [crate_2_diffuse_1.png](../examples/img/crate_2_diffuse_1.png)

    ```javascript
    var texture = THREE.ImageUtils.loadTexture('img/crate_2_diffuse_1.png');
    texture.minFilter = THREE.NearestFilter;
    ```

+ the normal and bump textures give the illusion of extra geometry using shadows and lights: they are useful for simulating 
rough surfaces or small details without burdening on the renderer; create the normal texture using 
[crate_2_normal_1.png](../examples/crate_2_normal_1.png)

    ```javascript
    var normalTexture = THREE.ImageUtils.loadTexture('img/crate_2_normal_1.png');
    normalTexture.minFilter = THREE.NearestFilter;
    ```

+ the specular texture describes how much the surfaces' areas reflect light; create the specular texture using 
[crate_2_specular_1.png](../examples/crate_2_specular_1.png)

    ```javascript
    var specTexture = THREE.ImageUtils.loadTexture('img/crate_2_specular_1.png');
    specTexture.minFilter = THREE.NearestFilter;
    ```

+ now build a _THREE.MeshPhongMaterial_ using the textures just created 

    ```javascript
    material = new THREE.MeshPhongMaterial({
        map: texture,
        specularMap: specTexture,
        normalMap: bumpTexture,
    });
    ```

+ assemble the Mesh object using cube geometry and the material and put it onto the scene

+ run the scene and notice how normal map is affecting the render; though, the specular map effect is not really visible: 
let's modify the _shininess_ attribute setting it to 100

    ```javascript
    material = new THREE.MeshPhongMaterial({
        shininess: 100,
        map: texture,
        specularMap: specTexture,
        normalMap: bumpTexture
    });
    ```
    
+ much better; let's modify the _specular_ attribute setting it to _0xffffff_ and you will really see the specular map working

    ```javascript
    material = new THREE.MeshPhongMaterial({
        specular: 0xffffff,
        map: texture,
        specularMap: specTexture,
        normalMap: bumpTexture
    });
    ```
    
- you will probably notice that the normal map's effect is way too rough: we can change it working on _normalScale_ parameter
which accept a _THREE.Vector2_

    ```javascript
    material = new THREE.MeshPhongMaterial({
        specular: 0xffffff,
        map: texture,
        specularMap: specTexture,
        normalMap: bumpTexture,
        normalScale: new THREE.Vector2( 0.26, 0.26 )
    });
    ```

Explanation
===========
Textures are basically matrix of values that can be interpreted in different ways: what we see more often is just the RGB
representation (map values to colors).

Mapping them to the _normal_ channel is a technique used when we want to simulate more geometry than what we actually have: just
influencing light's behaviour the rendering engine creates small shadows and reflections.

Mapping them to the _specular_ channel the surfaces will reflect differently even using the same material, depending on the
lightness of the texture.