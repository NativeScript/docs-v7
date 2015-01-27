---
nav-title: "frame How-To"
title: "frame How-To"
description: "Examples for using frame"
---
# Frame
To perform navigation, you will need a reference to the topmost frame of the application.
``` JavaScript
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
```
# Navigating to a Module
``` JavaScript
topmost.navigate("app/details-page");
```
# Navigating with a Factory Function
``` JavaScript
var factoryFunc = function () {
    var label = new labelModule.Label();
    label.text = "Hello, world!";
    var page = new pagesModule.Page();
    page.content = label;
    return page;
};
topmost.navigate(factoryFunc);
```
# Navigating with NavigationEntry
``` JavaScript
var navigationEntry = {
    moduleName: "app/details-page",
    context: { info: "something you want to pass to your page" },
    animated: false
};
topmost.navigate(navigationEntry);
```
# Navigating Back
``` JavaScript
topmost.goBack();
```
