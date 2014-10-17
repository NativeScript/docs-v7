---
nav-title: "Class fps-meter"
title: "Class fps-meter"
description: "Class fps-meter"
---
# Module: "fps-meter"

``` JavaScript
// To import the "fps-meter" module:
var fps_meter = require("fps-meter");
```

##### Functions
 - **start()**
 - **stop()**
 - **running()** _Boolean_
   - _**return**_ - _Boolean_
 - **addCallback(** callback _Function_... **)** _Number_
   - **callback** - _Function_(fps _Number_, minFps _Number_)
   - _**return**_ - _Number_
 - **removeCallback(** id _Number_ **)**
   - **id** - _Number_