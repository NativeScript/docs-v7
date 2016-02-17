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
var observer = label.on(gestures.GestureTypes.doubleTap, function (args) {
    console.log("Double Tap");
});
```
### Double Tap
``` JavaScript
var label = new labelModule.Label();
var observer = label.on("doubleTap", function (args) {
    console.log("Double Tap");
});
```
### Long Press
``` JavaScript
var label = new labelModule.Label();
var observer = label.on(gestures.GestureTypes.longPress, function (args) {
    console.log("Long Press");
});
```
### Long Press
``` JavaScript
var label = new labelModule.Label();
var observer = label.on("longPress", function (args) {
    console.log("Long Press");
});
```
### Pan
``` JavaScript
var label = new labelModule.Label();
var observer = label.on(gestures.GestureTypes.pan, function (args) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```
### Pan
``` JavaScript
var label = new labelModule.Label();
var observer = label.on("pan", function (args) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```
### Pinch
``` JavaScript
var label = new labelModule.Label();
var observer = label.on(gestures.GestureTypes.pinch, function (args) {
    console.log("Pinch scale: " + args.scale);
});
```
### Pinch
``` JavaScript
var label = new labelModule.Label();
var observer = label.on("pinch", function (args) {
    console.log("Pinch scale: " + args.scale);
});
```
### Rotation
``` JavaScript
var label = new labelModule.Label();
var observer = label.on(gestures.GestureTypes.rotation, function (args) {
    console.log("Rotation: " + args.rotation);
});
```
### Rotation
``` JavaScript
var label = new labelModule.Label();
var observer = label.on("rotation", function (args) {
    console.log("Rotation: " + args.rotation);
});
```
### Swipe
``` JavaScript
var label = new labelModule.Label();
var observer = label.on(gestures.GestureTypes.swipe, function (args) {
    console.log("Swipe direction: " + args.direction);
});
```
### Swipe
``` JavaScript
var label = new labelModule.Label();
var observer = label.on("swipe", function (args) {
    console.log("Swipe direction: " + args.direction);
});
```
### Tap
``` JavaScript
var label = new labelModule.Label();
var observer = label.on(gestures.GestureTypes.tap, function (args) {
    console.log("Tap");
});
```
### Tap
``` JavaScript
var label = new labelModule.Label();
var observer = label.on("tap", function (args) {
    console.log("Tap");
});
```
### Stop observing
``` JavaScript
var label = new labelModule.Label();
var observer = label.on(gestures.GestureTypes.tap, function (args) {
    console.log("Tap");
});
observer.disconnect();
```
### Multiple gestures
``` JavaScript
var label = new labelModule.Label();
var observer = label.on(gestures.GestureTypes.tap | gestures.GestureTypes.doubleTap | gestures.GestureTypes.longPress, function (args) {
    console.log("Event: " + args.eventName);
});
```
### Multiple gestures as comma separated string
``` JavaScript
var label = new labelModule.Label();
var observer = label.on("tap, doubleTap, longPress", function (args) {
    console.log("Event: " + args.eventName);
});
```
### Events combined with gestures as comma separated string
``` JavaScript
var label = new labelModule.Label();
var observer = label.on("loaded, tap, longPress", function (args) {
    console.log("Event: " + args.eventName);
});
```
