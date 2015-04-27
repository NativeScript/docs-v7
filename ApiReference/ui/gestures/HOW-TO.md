---
nav-title: "gestures How-To"
title: "How-To"
description: "Examples for using gestures"
---
# Gestures
Detecting user gestures requires the "ui/gestures" module.
``` JavaScript
var gestures = require("ui/gestures");
```
### Double Tap
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.doubleTap, function (args) {
    console.log("Double Tap");
});
```
### Long Press
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.longPress, function (args) {
    console.log("Long Press");
});
```
### Pan
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.pan, function (args) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```
### Pinch
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.pinch, function (args) {
    console.log("Pinch scale: " + args.scale);
});
```
### Rotation
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.rotation, function (args) {
    console.log("Rotation: " + args.rotation);
});
```
### Swipe
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.swipe, function (args) {
    console.log("Swipe direction: " + args.direction);
});
```
### Tap
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.tap, function (args) {
    console.log("Tap");
});
```
### Stop observing
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.tap, function (args) {
    console.log("Tap");
});
observer.disconnect();
```
