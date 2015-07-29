Example step
============
Make a reflective material.

Goal
====
Make a reflective material. 

Instructions
============

+ start from our [default scene with environment](../examples/00_default_scene_with_environment.html) or make it following
the [environment mapping tutorial](14_environment_texture.md)

+ now we need camera able to map the cube map of the environment all around an object: the _THREE.CubeCamera_ is composed
from six different cameras and can therefore capture everything in the scene, mapping it to an image
 
+ _THREE.CubeCamera_ takes the _near plane_, the _far plane_ and the _size_ of the texture to be rendered

    ```javascript
    var cubeCamera = new THREE.CubeCamera(0.1, 5000, 512);
    ```
 
+ a texture resolution of 512 is quite and average value, but you may want something more

+ since we are looking for reflections, we must the camera which mapping to use for the renderering, setting the 
_cubeCamera.renderTarget.mapping_ property

    ```javascript
    cubeCamera.renderTarget.mapping = THREE.CubeReflectionMapping;
    ```

+ add the _CubeCamera_ to the scene

+ let's create a _MeshBasicMaterial_ with just the _envMap_ option 

    ```javascript
    var reflectMaterial = new THREE.MeshBasicMaterial({ 
        envMap: cubeCamera.renderTarget 
    });
    ```

+ get a big sphere geometry with a good subdivision (like 16) using _THREE.SphereGeometry_

    ```javascript
    var sphereGeometry = new THREE.SphereGeometry(4, 16, 16);
    ```

+ and finally create the sphere object using the geometry and the material with _THREE.Mesh_

    ```javascript
    var sphere = new THREE.Mesh(sphereGeometry, reflectMaterial)
    ```

- put your geometry right in the center of the scene and set the _CubeCamera_ for that material at the same position

    ```javascript
    sphere.position.set(0,0,0);
    cubeCamera.position = sphere.position;
    ```
    
- last but not least, you need to update the cube map every frame in order to keep in consistent with the view: in the 
_animate()_ function add the call 

    ```javascript
    cubeCamera.updateCubeMap( renderer, scene );
    ```
- try to experiment with different materials (Lambert, Phong, ...)

- work with parameter _reflectivity_ of _THREE.Material_ in order to improve your reflections

Explanation
===========
In order to reflect the environment, the renderer needs to use raytracing, which is not available in THREEJS and is a 
very expensive technique.

For this reason we emulate it using a texture mapped onto the world: the _CubeCamera_ helps us giving a "ready to go" 
environment projection from six different cameras.