Example step
============
Load external animation 

Goal
====
Load an animated model using JSON

Instructions
============

+ need to switch to ThreeJS r69

+ start from our [default scene](../examples/00_default_scene.html)

+ we are going to load a __JSON__ model, so we need to create a _THREE.JSONLoader_

    ```javascript
    var loader = new THREE.JSONLoader();
    ```
    
+ create an empty array to store the animation(s)
    
    ```javascript
    var animations = []
    ```
    
+ now, find out the model located in _models/frankie-animated.json_, load it and make a new _THREE.Mesh_ object using the 
materials loaded from file

    ```javascript
    loader.load('models/frankie-animated.json', function (model, modelMats) {
        
        var facemat = new THREE.MeshFaceMaterial(modelMats);
        mesh = new THREE.SkinnedMesh(model, facemat);

        // write the next code here 
        
        scene.add(mesh);
        
    });
    ```
    
+ since we are loading an animated mesh, we need to set the _skinning_ flag to true for each material loaded

    ```javascript
    loader.load('models/frankie-animated.json', function (model, modelMats) {
        $.each(modelMats, function(index, mat) {
            mat.skinning = true;
        });
        
        var facemat = new THREE.MeshFaceMaterial(modelMats);
        mesh = new THREE.SkinnedMesh(model, facemat);
        
        // write the next code here 
                
        scene.add(mesh);
                
    });
    
+ the animations are listed under _model.animation_: for each of them, create a _THREE.Animation()_ passing it 
the current animation, print to console the animation's name then add it to your _animations_ array

    ```javascript
    if (model.animations !== undefined) {
        for (var i = 0; i < model.animations.length; i += 1) {
            animation = new THREE.Animation(mesh, model.animations[i]);
            console.log(i+' '+animation.data.name);
            animations.push(animation);
        }
    }
    ```

+ then we can decide whether the animation is playing or not, calling _animation.play()_; to stop it, call _animation.stop()_

    ```javascript
    if (model.animations !== undefined) {
        for (var i = 0; i < model.animations.length; i += 1) {
            animation = new THREE.Animation(mesh, model.animations[i]);
            console.log(i+' '+animation.data.name);
            animations.push(animation);
            animation.play();
        }
    }
    ```

+ at this point, the animations are loaded in ThreeJS and they are playing: although the current frame is never changed, we 
 need to do it in our _animate()_ function
 
+ first, we need to create a new _THREE.Clock_ object in order to get the current time

    ```javascript
    clock = new THREE.Clock();
    ```
 
+ then in _animate_ function get the delta of the time and pass it to the _THREE.AnimationHandler.update()_ which is the
 animation manager of the framework
 
    ```javascript
    function animate() {
    
        renderer.render(scene, camera);
        
        THREE.AnimationHandler.update(clock.getDelta());
        
        requestAnimationFrame(animate);
        
    }
    ```

Explanation
===========