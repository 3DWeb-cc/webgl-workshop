Example step
============
Make a glass like material

Goal
====
Make a material which uses refraction 

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

+ since now we are looking for refractions, we must tell the camera to use _THREE.CubeRefractionMapping_ for the rendering, setting the 
_cubeCamera.renderTarget.mapping_ property; this way we'll see what's __behind__ the object

    ```javascript
    cubeCamera.renderTarget.mapping = THREE.CubeRefractionMapping;
    ```

+ add the _CubeCamera_ to the scene

+ let's create a _MeshBasicMaterial_ with the _envMap_ option as per [reflection tutorial](16_materials_reflections.md) 

    ```javascript
    var refractMaterial = new THREE.MeshBasicMaterial({ 
        envMap: cubeCamera.renderTarget
    });
    ```

+ get a big sphere geometry with a good subdivision (like 16) using _THREE.SphereGeometry_

    ```javascript
    var sphereGeometry = new THREE.SphereGeometry(5, 16, 16);
    ```

+ and finally create the sphere object using the geometry and the material with _THREE.Mesh_

    ```javascript
    var sphere = new THREE.Mesh(sphereGeometry, refractMaterial)
    ```

+ put your geometry right in the center of the scene and set the _CubeCamera_ for that material at the same position

    ```javascript
    sphere.position.set(0,0,0);
    cubeCamera.position = sphere.position;
    ```
    
+ last but not least, you need to update the cube map every frame in order to keep in consistent with the view: in the 
_animate()_ function add the call 

    ```javascript
    cubeCamera.updateCubeMap( renderer, scene );
    ```
+ try to experiment with different materials (Lambert, Phong, ...)

+ you can modify the refraction level using _refractionRatio_ parameter of _THREE.Material_: think about this parameter 
as a __IOR__ equivalent value  mapped from 0 to 1

    ```javascript
    var refractMaterial = new THREE.MeshBasicMaterial({ 
        envMap: cubeCamera.renderTarget,
        refractionRatio: 0.985
    });
    ```

- work with parameter _reflectivity_ of _THREE.Material_ to make the material more interesting

Explanation
===========
As per Reflection, we have no raytracing engine out of the box.

The technique to be used is just the same of reflective materials but with different parameters.

##Parameters:
+ the CubeCamera used needs to use a _THREE.CubeRefractionMapping_ type in order to show what's behind rather than
 what's in front of geometry.
+ the material need to know what is the refraction's ratio with _refractionRatio_ (0 to 1 with 1 totally flat)
+ we can mix different materials properties: try it! 