Example step
============
Make a glass material.

Goal
====
Make a material which uses refraction. 

Instructions
============
- start with a scene with environment
- now we need camera able to map the cube map of the environment all around an object: THREE.CubeCamera() which takes as
 parameters near plane, far plane, and resolution.
- a texture resolution of 512 is quite and average value
- tell the camera which mapping you want to use for the renderering: ``cubeCamera.renderTarget.mapping = THREE.CubeRefractionMapping``
- let's create a MeshBasicMaterial with some options: ``new THREE.MeshBasicMateria({ envMap: cubeCamera.renderTarget,refractionRatio: 0.985, reflectivity: 0.9 })`
- get a big sphere geometry with a good subdivision (like 16) using THREE.SphereGeometry
- and finally create the sphere object using the geometry and the material with THREE.Mesh
- put your geometry right in the center of the scene
- last but not least, you need to update the cube map every frame in order to keep in consistent with the view: in the 
animate() routine add the call ``cubeCamera.updateCubeMap( renderer, scene );``
- try to experiment with different materials (Lambert, Phong...)

Explanation
===========
As per Reflection, we have no raytracing engine out of the box.
The technique to be used is just the same of reflective materials but with different parameters.

##Parameters:
- the CubeCamera used needs to use a THREE.CubeRefractionMapping type in order to show what's behind rather than what's in front of geometry.
- the material need to know what is the refraction's ratio with 'refractionRatio' (0 to 1 with 0 totally opaque)
- we can mix different properties like 'reflectitity' to get a better result