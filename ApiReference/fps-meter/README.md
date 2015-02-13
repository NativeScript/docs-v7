---
nav-title: "Module fps-meter"
title: "Module fps-meter"
description: "Module fps-meter"
---
# Module: "fps-meter"

``` JavaScript
// To import the "fps-meter" module:
var fps_meter = require("fps-meter");
```

##### Functions
 - **start()**  
     Starts the frames-per-second meter.
 - **stop()**  
     Stops the frames-per-second meter.
 - **running()** _Boolean_  
     Returns a valid indicating whether the frames-per-second meter is currently running.
   - _**return**_ - _Boolean_
 - **addCallback(** callback _Function_... **)** _Number_  
     Adds a callback function to be called each time FPS data is due to be reported. Returns an unique id which can be used to remove this callback later.
   - **callback** - _Function_(fps _Number_, minFps _Number_)
   - _**return**_ - _Number_
 - **removeCallback(** id _Number_ **)**  
     Removes the callback with the specified id.
   - **id** - _Number_