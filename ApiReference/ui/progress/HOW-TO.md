---
nav-title: "progress How-To"
title: "progress How-To"
description: "Examples for using progress"
---
# Progress
Using the progress view requires the Progress module.
``` JavaScript
var progressModule = require("ui/progress");
```
Binding the Progress value property to a view-model property.
```XML
<Page loaded="pageLoaded">
  <Progress value="{{ someProperty }}" />
</Page>
```
```JS
function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = { someProperty : 42 };
}
exports.pageLoaded = pageLoaded;
```
## Creating a progress view
``` JavaScript
var progress = new progressModule.Progress();
```
## Setting up the progress view
``` JavaScript
progress.maxValue = 255;
progress.value = 16;
```
