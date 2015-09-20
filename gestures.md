---
nav-title: Gestures in NativeScript 
title: "UI: Gestures"
description: Learn what are the touch gestures that NativeScript supports and how to make use of them.
position: 15

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

## Tap

Triggers the default functionality for a given item.

**Action: Briefly touch the screen**

``` JavaScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.tap, function (args) {
    console.log("Tap");
});
```
``` TypeScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.tap, function (args: gestures.GestureEventData) {
    console.log("Tap");
});
```

## Double Tap

Scales up the object with a predefined percentage, centered around the double-tapped region. Keeping repeating the gesture continues to scale up until the maximum scale is reached.

In nested views, the gesture scales up the smallest targetable view or returns it to its original scale. 

Also used for text selection.

**Action: Two taps in a quick succession**

``` JavaScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.doubleTap, function (args) {
    console.log("Double Tap");
});
```
``` TypeScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.doubleTap, function (args: gestures.GestureEventData) {
    console.log("Double Tap");
});
```

## Long Press

Enters data selection mode. Allows you to select one or more items in a view and act upon the data using a contextual action bar. Avoid using long press for displaying contextual menus.

**Action: Press you finger against the screen for a few moments**

``` JavaScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.longPress, function (args) {
    console.log("Long Press");
});
```
``` TypeScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.longPress, function (args: gestures.GestureEventData) {
    console.log("Long Press");
});
```

## Swipe

Navigates between views in the same hierarchy. Swipes are quick and affect the screen even after the finger is lifted off the screen.

**Action: Swiftly slide your finger across the screen**

``` JavaScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.swipe, function (args) {
    console.log("Swipe Direction: " + args.direction);
});
```
``` TypeScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.swipe, function (args: gestures.SwipeGestureEventData) {
    console.log("Swipe Direction: " + args.direction);
});
```

## Pan

Scrolls overflowing content. Pans are executed more slowly and allow for more precision and the screen stops responding as soon as the finger is lifted off it.

**Action: Press your finger down and immediately start moving it around**

``` JavaScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.pan, function (args) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```
``` TypeScript
label.on(gestures.GestureTypes.pan, function (args: gestures.PanGestureEventData) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```

## Pinch

Zooms into content or out of content.

**Action 1: Touch using two of your fingers, then move them towards each other**
**Action 2: Touch using two of your fingers, then move them away of each other**


``` JavaScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.pinch, function (args) {
    console.log("Pinch Scale: " + args.scale);
});
```
``` TypeScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.pinch, function (args: gestures.PinchGestureEventData) {
    console.log("Pinch Scale: " + args.scale);
});
```

## Rotation

Rotates content clockwise or counterclockwise.

**Action: Touch using two of your fingers, then rotate them simultaneously left or right**

``` JavaScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.rotation, function (args) {
    console.log("Rotation: " + args.rotation);
});
```
``` TypeScript
var label = new labelModule.Label();
label.on(gestures.GestureTypes.rotation, function (args: gestures.RotationGestureEventData) {
    console.log("Rotation: " + args.rotation);
});
```

# Subscribing to multiple gestures and events

Since NativeScript 1.3 when subscribing you can use gestures names, comma separated gestures names and/or even mix with events.


``` JavaScript
var label = new labelModule.Label();
label.on("loaded, tap, doubleTap, longPress", function (args) {
    console.log("Event: " + args.eventName + ", sender: " + args.object);
});
```
``` TypeScript
var label = new labelModule.Label();
label.on("loaded, tap, doubleTap, longPress", function (args: gestures.GestureEventData) {
    console.log("Event: " + args.eventName + ", sender: " + args.object);
});
```
