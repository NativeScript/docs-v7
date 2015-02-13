---
nav-title: "Class timer"
title: "Class timer"
description: "Class timer"
---
# Module: "timer"

``` JavaScript
// To import the "timer" module:
var timer = require("timer");
```

##### Functions
 - **setTimeout(** callback _Function_, milliseconds? _Number_ **)** _Number_  
     Calls a function after a specified delay.
   - **callback** - _Function_  
     The function to be called.
   - **milliseconds** - _(optional)_ - _Number_  
     The time to wait before the function is called. Defaults to 0.
   - _**return**_ - _Number_
 - **clearTimeout(** id _Number_ **)**  
     Clears the delay set by a call to the setTimeout function.
   - **id** - _Number_  
     The identifier returned by the previously called setTimeout() method.
 - **setInterval(** callback _Function_, milliseconds? _Number_ **)** _Number_  
     Calls a function repeatedly with a delay between each call.
   - **callback** - _Function_  
     The function to be called.
   - **milliseconds** - _(optional)_ - _Number_  
     The delay between each function call.
   - _**return**_ - _Number_
 - **clearInterval(** id _Number_ **)**  
     Clears repeated function which was set up by calling setInterval().
   - **id** - _Number_  
     The identifier returned by the setInterval() method.