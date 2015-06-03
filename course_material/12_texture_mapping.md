Example step
============
Load a cube map and apply it to a material.

Goal
====
Make a wood material using wood texture. 

Instructions
============
- start with our default scene
- find the six images provided (crate_#.jpg from 1 to 6)
- for each face of the cube, we must create a material. Get a new Array element and fill it with: 
``
 var imgName = "crate_";
 for (var i = 1; i < 7; i++)
        materialArray.push(new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture( imgName + i),
            side: THREE.BackSide
        }));
``
- you should probably set `texture.minFilter = THREE.NearestFilter` since the images are not power of two 
- now create a FaceMaterial which automatically assigns materials to faces: ``new THREE.MeshFaceMaterial( materialArray );``
- assemble the Mesh object using cube geometry and the material and put it onto the scene
- do you see something strange like black faces? Maybe you need more lights!


Explanation
===========
Textures can be mapped in different ways onto geometries: usually we'll have textures pre-mapped onto assets coming from
3d artist, so the default THREE.UVMapping would be ok.
In production, we would prefer to pack textures in smaller files in order to improve the assets loading and the user experience.
Using cube maps is a good way to map environments and decorations.