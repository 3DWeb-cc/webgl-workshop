Example step
============
Find the mouse position and translate it to scene's coordinates

Goal
====
Understand the difference between page, canvas and scene coordinates and the related formulas

Instructions
============

+ start from our [default scene](../examples/00_default_scene.html)

+ open the javascript console, we'll use it for debug

+ note that we are going to use jQuery, as trying to manage different browsers' events is not our aim and would require some boilerplate

+ define a new function and name it _onMouseMove_

    ´´´javascript
    function onMouseMove(event) {
    
       // code here
       
    }
    ´´´

+ now we need to listen for _mousemove_ event on __canvas__ element, passing it the event handler function _onMouseMove_

    ´´´javascript
    $(canvas).on('mousemove', onMouseMove);
    ´´´ 

+ our _onMouseEvent_ function will receive __event__ as argument, which is normalized by jQuery in order to provide consistent 
data across different environments

   ´´´javascript
    $(canvas).on('mousemove', evenHandler);
    ´´´

+ with __event__ we can get the current mouse position related to the page

    ´´´javascript
    var pageX = event.pageX;
    var pageY = event.pageY;
    ´´´

+ then we will get the current canvas' offsets: the distance from the left and the top borders

    ´´´javascript
    var offset = $(renderer.domElement).offset();
    ´´´
    
+ first, let's calculate the mouse position related to the canvas: just subtract _offset.left_ from _pageX_ and
_offset.top_ from _event.pageY_

    ´´´javascript
    var canvasX = pageX - offset.left;
    var canvasY = pageY - offset.top;
    ´´´

+ print it to the console or write it into an HTML element in order to monitor it and try to run the page just to see it

+ now we must translate local coordinates to WebGL context's coordinates: we know that the context is just a cartesian graph
with (0,0) in the center of canvas, horizontal x axis and vertical y axis. The limits are (-1,1) for all axis

+ so just divide the local coordinates per canvas width, multiply it for 2 and subtract 1 to the result: these are the real canvas
 coordinates!
 
    ´´´javascript
    var mouseX = (localX / renderer.domElement.width) * 2 - 1;
    var mouseY = (1 - (localY / renderer.domElement.height)) * 2 - 1;
    ´´´

+ print or write the canvas coordinates in order to see and compare them with local and page coordinates. 

Explanation
===========
