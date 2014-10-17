---
nav-title: "timer How-To"
title: "timer How-To"
description: "Examples for using timer"
---
# Timer module
``` JavaScript
require("globals");
// OR
var timer = require("timer");
```
### Evaluates an expression after 0 milliseconds.
``` JavaScript
timer.setTimeout(function () {
});

```
### Evaluates an expression after a specified number of milliseconds.
``` JavaScript
timer.setTimeout(function () {
}, 500);

```
### Cancels the evaluation with the clearTimeout method.
``` JavaScript
var id = timer.setTimeout(function () {
}, 2000);

// Clear timeout with specified id.
timer.clearTimeout(id);

```
### Evaluates an expression each time a specified number of milliseconds has elapsed.
``` JavaScript
timer.setInterval(function () {
}, 100);

```
### Cancel the interval previously started using the setInterval method.
``` JavaScript
var id = timer.setInterval(function () {
    timer.clearInterval(id);
}, 100);

```
