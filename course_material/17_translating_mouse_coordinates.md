Example step
============
Find the mouse position and translate it to scene's coordinates

Goal
====
Understand the difference between page, canvas and scene coordinates and the related formulas

Instructions
============
- start with a scene with environment
- open the javascript console, we'll use it for debug
- add jQuery to your page, as trying to manage different browsers' events is not our aim and would require some boilerplate
- now we need to listen for 'mousemove' event on canvas element `$(canvas).on('mousemove', evenHandler)`
- our eventHandler function will receive 'event' as argument, which is normalized by jQuery in order to show consistent data across
different environments
- with event we can get the current mouse position related to the page
- first, let's calculate the mouse position related to the canvas: just subtract canvas.offset().left from event.pageX and
canvas.offset().top from event.pageY.
- print it to the console or write it into an HTML element in order to monitor it and try to run the page just to see it
- now we must translate local coordinates to WebGL context's coordinates: we know that the context is just a cartesian graph
with (0,0) in the center of canvas, horizontal x axis and vertical y axis. The limits are (-1,1) for all axis.
- so just divide the local coordinates per canvas width, multiply it for 2 and subtract 1 to the result: these are the real canvas
 coordinates!
- example: `(localX / renderer.domElement.width) * 2 - 1;`
- print or write the canvas coordinates in order to see and compare them with local and page coordinates.  

Explanation
===========
