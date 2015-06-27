Example step
============
Move single bones 

Goal
====
Move single bones of a rigged model

Instructions
============

+ need to switch to ThreeJS r69

+ start from our [previous tutorial](22_loading_skeleton_animations.md)

+ in the animations discovering loop, after the model has been loaded, drop the _animation.play()_ row

    ```javascript
    if (model.animations !== undefined) {
        for (var i = 0; i < model.animations.length; i += 1) {
            animation = new THREE.Animation(mesh, model.animations[i]);
            console.log(i+' '+animation.data.name);
            animations.push(animation);
            // animation.play();
        }
    }
    ```
    
+ now iterate for each __THREE.Bone__ using _mesh.skeleton.bones_ and take the ones which have "DEF" in their name: they
 are the only working bones for manual animation

    ```javascript
    var myBones = {}, bone;
    var regex = new RegExp('DEF');
            for (var k = 0; k < mesh.skeleton.bones.length; k += 1) {
                bone = mesh.skeleton.bones[k];
                if (regex.test(bone.name)) {
                    console.log(k + ' ' + bone.name);
                    myBones[bone.name] = bone;
                }
            }
    ```

+ now open the javascript console and try to modify the bones based on their names 

    ```javascript
    // just a little example
    mybones['DEF_upper_arm.L'].rotation.set(-0.075,0.004,0.0003);
    ```
    
+ experiment as much as possible and try to get your own animation

Explanation
===========