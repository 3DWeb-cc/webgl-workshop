Example step
============
Load a cube map and apply it to a material.

Goal
====
Make a wood material using wood texture. 

Instructions
============
- start with our default scene
- create the diffuse texture using 'crate_2_diffuse_1.png'
- create the normal texture using 'crate_2_normal_1.png'
- create the specular texture using 'crate_2_specular_1.png'
- build cube using BoxGeometry
- build an array of materials (THREE.MeshPhongMaterial) using the following parameters:
`new THREE.MeshPhongMaterial({
                shininess: 35,
                specular: 0xffffff,
                map: texture,
                specularMap: specTexture,
                normalMap: bumpTexture,
                normalScale: new THREE.Vector2( 0.26, 0.26 )
})`
- now create a FaceMaterial which automatically assigns materials to faces: ``new THREE.MeshFaceMaterial( materialArray );``
- assemble the Mesh object using cube geometry and the material and put it onto the scene
- try to play a little with parameters: 'shininess' and 'specular' are controlling reflections
- play also with normal map using 'normalScale'


Explanation
===========
Textures are basically matrix of values that can be interpreted in different ways: what we see more often is just the RGB
representation (map values to colors).
Mapping them to the 'normal' channel is a technique used when we want to simulate more geometry than what we actually have: just
influencing light's behaviour the rendering engine creates small shadows and reflections.
Mapping them to the 'specular' channel the surfaces will reflect differently even using the same material, depending on the
lightness of the texture.