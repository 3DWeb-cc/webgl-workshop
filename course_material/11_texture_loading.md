Example step
============
Load texture and apply it to a material.

Goal
====
Make a wood material using wood texture. 

Instructions
============
- start with our default scene
- download a wood texture from [linzhouweb.com](http://linzhouweb.com/183651-seamless-wood-texture)
- set up a cube geometry of 3 units per side
- create a new texture with `THREE.ImageUtils.loadTexture(src)`
- create new LambertMaterial with option `map` assigned to the texture `new THREE.MeshLambertMaterial({map: texture})`
- assemble the Mesh object using cube geometry and the material and put it onto the scene
- do you see something strange like black faces? Maybe you need more lights!


Explanation
===========
Textures are a way to add realistic effect to materials: they need to be created using an image.
Note that texture loading is async and that the object returned from `loadTexture()` is going to be modified as soon as the
file has been loaded. 
You could also define a onLoad and onError handler, have a look to method's signature:
`loadTexture ( url, mapping, onLoad, onError )`

Deeper:

- Texture theory are based on [UV mapping](http://en.wikipedia.org/wiki/UV_mapping), and they are well known from cartographer. See more in the wikipedia page about [map projection](http://en.wikipedia.org/wiki/Map_projection).