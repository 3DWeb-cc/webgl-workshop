Example step
============
Load and run a Collada animated model 

Goal
====
Manage keyframe animations

Instructions
============

+ start from our [default scene](../examples/00_default_scene.html)

+ we are going to load a __Collada__ model, so we need to create a _THREE.ColladaLoader_

    ```javascript
    var loader = new THREE.ColladaLoader();
    ```
    
+ create an empty array to store the animation(s)
    
    ```javascript
    var animations = []
    ```
    
+ now, find out the model located in _models/clock.dae_, load it and add it to the scene as per [tutorial 8](08_custom_geometry.md)

    ```javascript
    loader.load('models/clock.dae', function(collada) {
        
        // write the next code here 
        
        scene.add(collada);
        
    }
    ```
    
+ the animations are listed under _collada.animation_: for each of them, create a _THREE.KeyFrameAnimation()_ passing it 
the current animation, then add it to your _animations_ array

    ```javascript
    var animation;
    for (var i = 0; i < dae.animations.length; i += 1) {
        animation = new THREE.KeyFrameAnimation(dae.animations[i]);
        animations.push(animation);
    }
    ```

+ then we can decide whether the animation is playing or not, calling _animation.play()_; to stop it, call _animation.stop()_

    ```javascript
    var animation;
    for (var i = 0; i < dae.animations.length; i += 1) {
        animation = new THREE.KeyFrameAnimation(dae.animations[i]);
        animations.push(animation);
        animation.play();
    }
    ```

+ at this point, the animations are loaded in ThreeJS and they are playing: although the current frame is never changed, we 
 need to do it in our _animate()_ function
 
+ in _animate_, cycle _animations_ array and for each animation call _update()_ method passing it a number: this is the time 
delta which is used to calculate the current frame
 
    ```javascript
    function animate() {
    
        renderer.render(scene, camera);
        
        for (var i = 0; i < animations.length; i += 1) {
            animations[i].update(10);
        }
        
        requestAnimationFrame(animate);
        
    }
    ```

+ note that by default the animation is played as a loop (it never ends): you can control this behaviour setting _animation.loop_
 flag to __false__

Explanation
===========
The keyframe animation is the most basic animation you can use: just keyframe describing transformations on objects: though, 
it is widely used and is more effective than animating programmatically the geometry, and moreover it allows you to let the 
animator guy do his job.

Instead of using a static number, you can calculate the delta relative to current time frame, which is passed to _animate()_
function as argument.
