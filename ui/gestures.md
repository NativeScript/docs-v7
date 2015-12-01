---
title: Gestures
description: Learn what are the touch gestures that NativeScript supports and how to make use of them.
position: 8
slug: gestures
previous_url: /gestures

---

# Overview

Gestures, such as tap, slide, and pinch, allow users to interact with your app by manipulating UI elements on the screen.

In NativeScript, `View`&mdash;the base class for all NativeScript UI elements&mdash;has an `on` and `off` methods that lets you subscribe or unsubscribe to all events and gestures recognized by the UI element.  

As first parameter of the `on` and `off` methods you pass the type of gesture you are interested in. The second  parameter is a function that is called each time the specified gesture is recognized. The function arguments contain additional information about the gesture, if applicable.

- **on(** type _Number_ | name _String_ | names Comma separated _String_, callback _Function_... **)
   - **type** - _Number_ | **name** - _String_ | **names** - Comma separated _String_
   - **callback** - _Function_(args _GestureEventData_)

- **off(** type _Number_ | name _String_ | names Comma separated _String_, callback _Function_... **)
   - **type** - _Number_ | **name** - _String_ | **names** - Comma separated _String_
   - **callback** - _Function_(args _GestureEventData_)

The next sections introduce you to all the gestures recognized by NativeScript:

* [Tap](#tap)
* [Double Tap](#double-tap)
* [Long Press](#long-press)
* [Swipe](#swipe)
* [Pan](#pan)
* [Pinch](#pinch)
* [Rotation](#rotation)
* [Subscribing to Multiple Gestures and Events](#subscribing-to-multiple-gestures-and-events)

## Tap

**Action: Briefly touch the screen.**

``` JavaScript
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.tap, function (args) {
    console.log("Tap");
});
```
``` TypeScript
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.tap, function (args: gestures.GestureEventData) {
    console.log("Tap");
});
```

## Double Tap

**Action: Two taps in a quick succession**

``` JavaScript
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.doubleTap, function (args) {
    console.log("Double Tap");
});
```
``` TypeScript
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.doubleTap, function (args: gestures.GestureEventData) {
    console.log("Double Tap");
});
```
Possible implementation:
* Scale up the object with a predefined percentage, centered around the double-tapped region. Keeping repeating the gesture continues to scale up until the maximum scale is reached.
* Scale up the smallest targetable view or returns it to its original scale in nested views.
* Select text.

## Long Press

**Action: Press you finger against the screen for a few moments.**

``` JavaScript
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.longPress, function (args) {
    console.log("Long Press");
});
```
``` TypeScript
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.longPress, function (args: gestures.GestureEventData) {
    console.log("Long Press");
});
```
Possible implementation: Select one or more items in a view and act upon the data using a contextual action bar. Enter data selection mode. Avoid using long press for displaying contextual menus.

## Swipe

**Action: Swiftly slide your finger across the screen. Swipes are quick and affect the screen even after the finger is lifted off the screen.**

``` JavaScript
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.swipe, function (args) {
    console.log("Swipe Direction: " + args.direction);
});
```
``` TypeScript
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.swipe, function (args: gestures.SwipeGestureEventData) {
    console.log("Swipe Direction: " + args.direction);
});
```
Possible implementation: Navigate between views in the same hierarchy.

## Pan

**Action: Press your finger down and immediately start moving it around. Pans are executed more slowly and allow for more precision and the screen stops responding as soon as the finger is lifted off it.**

``` JavaScript
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.pan, function (args) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```
``` TypeScript
import labelModule = require("ui/label");
label.on(gestures.GestureTypes.pan, function (args: gestures.PanGestureEventData) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```

## Pinch

**Action: Touch using two of your fingers, then move them towards each other or away from each other.**

``` JavaScript
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.pinch, function (args) {
    console.log("Pinch Scale: " + args.scale);
});
```
``` TypeScript
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.pinch, function (args: gestures.PinchGestureEventData) {
    console.log("Pinch Scale: " + args.scale);
});
```
Possible implementation: Zoom into content or out of content.

## Rotation

**Action: Touch using two of your fingers, then rotate them simultaneously left or right.**

``` JavaScript
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.rotation, function (args) {
    console.log("Rotation: " + args.rotation);
});
```
``` TypeScript
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.rotation, function (args: gestures.RotationGestureEventData) {
    console.log("Rotation: " + args.rotation);
});
```

# Subscribing to Multiple Gestures and Events

Since NativeScript 1.3 when subscribing you can use gestures names, comma separated gestures names and/or even mix with events.

``` JavaScript
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on("loaded, tap, doubleTap, longPress", function (args) {
    console.log("Event: " + args.eventName + ", sender: " + args.object);
});
```
``` TypeScript
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on("loaded, tap, doubleTap, longPress", function (args: gestures.GestureEventData) {
    console.log("Event: " + args.eventName + ", sender: " + args.object);
});
```
