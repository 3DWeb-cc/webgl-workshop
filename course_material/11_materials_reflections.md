Example step
============
Make a reflective material.

Goal
====
Make a reflective material. 

Instructions
============
- start with a scene with environment
- now we need camera able to map the cube map of the environment all around an object: THREE.CubeCamera() which takes as
 parameters near plane, far plane, and resolution.
- a texture resolution of 512 is quite and average value
- let's create a MeshBasicMaterial with just one option: ``new THREE.MeshBasicMateria({ envMap: cubeCamera.renderTarget })`
- get a big sphere geometry with a good subdivision (like 16) using THREE.SphereGeometry
- and finally create the sphere object using the geometry and the material with THREE.Mesh
- put your geometry right in the center of the scene
- last but not least, you need to update the cube map every frame in order to keep in consistent with the view: in the 
animate() routine add the call ``cubeCamera.updateCubeMap( renderer, scene );``
- try to experiment with different materials (Lambert, Phong...)

Explanation
===========
In order to reflect the environment, the renderer needs to use raytracing, which is not available in THREEJS and is a 
very expensive technique.
For this reason we emulate it using a texture mapped onto the world: the CubeCamera helps us giving a "ready to go" 
environment projection.