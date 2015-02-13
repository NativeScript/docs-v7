---
nav-title: "gestures How-To"
title: "gestures How-To"
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
var observer = label.observe(gestures.GestureTypes.DoubleTap, function (args) {
    console.log("Double Tap");
});
```
### Long Press
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.LongPress, function (args) {
    console.log("Long Press");
});
```
### Pan
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Pan, function (args) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```
### Pinch
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Pinch, function (args) {
    console.log("Pinch scale: " + args.scale);
});
```
### Rotation
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Rotation, function (args) {
    console.log("Rotation: " + args.rotation);
});
```
### Swipe
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Swipe, function (args) {
    console.log("Swipe direction: " + args.direction);
});
```
### Tap
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Tap, function (args) {
    console.log("Tap");
});
```
### Stop observing
``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Tap, function (args) {
    console.log("Tap");
});
observer.disconnect();
```
