---
nav-title: "activity-indicator How-To"
title: "activity-indicator How-To"
description: "Examples for using activity-indicator"
---
# ActivityIndicator
Using the activity indicator requires the ActivityIndicator module.
``` JavaScript
var activityIndicatorModule = require("ui/activity-indicator");
```
## Creating an activity indicator
``` JavaScript
var indicator = new activityIndicatorModule.ActivityIndicator();
```
## Showing activity indicator while image is loading
``` JavaScript
var image = new imageModule.Image();
var indicator = new activityIndicatorModule.ActivityIndicator();
indicator.width = 100;
indicator.height = 100;
// Bind the busy property of the indicator to the isLoading property of the image
indicator.bind({
    sourceProperty: "isLoading",
    targetProperty: "busy"
}, image);
```
