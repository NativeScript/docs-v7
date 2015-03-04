---
nav-title: Gestures in NativeScript 
title: UI: Gestures
description: Learn what are the touch gestures that NativeScript supports and how to make use of them.
position: 16

---

# Overview

Gestures, such as tap, slide, and pinch, allow users to interact with your app by manipulating UI elements on the screen.

In NativeScript, `View`&mdash;the base class for all NativeScript UI elements&mdash;has an `observe` method that lets you subscribe to gestures recognized by the UI element.

As first parameter of the `observe` method you pass the type of gesture you are interested in. The second  parameter is a function that is called each time the specified gesture is recognized. The function arguments contain additional information about the gesture, if applicable. Calling the `observe` method returns a `GestureObserver` object that you will need later to stop detecting gestures.

- **observe(** type _Number_, callback _Function_... **)** _GesturesObserver_
   - **type** - _Number_
   - **callback** - _Function_(args _GestureEventData_)
   - _**return**_ - _GesturesObserver_

The next sections introduce you to all the gestures recognized by NativeScript:

* [Tap](#tap)
* [Double Tap](#double-tap)
* [Long Press](#long-press)
* [Swipe](#swipe)
* [Pan](#pan)
* [Pinch](#pinch)
* [Rotation](#rotation)

To learn how to stop receiving information about gestures, go to [Stop Detecting Gestures](#stop-detecting-gestures).

## Tap

Triggers the default functionality for a given item.

**Action: Briefly touch the screen**

``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Tap, function (args) {
    console.log("Tap");
});
```
``` TypeScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Tap, function (args: gestures.GestureEventData) {
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
var observer = label.observe(gestures.GestureTypes.DoubleTap, function (args) {
    console.log("Double Tap");
});
```
``` TypeScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.DoubleTap, function (args: gestures.GestureEventData) {
    console.log("Double Tap");
});
```

## Long Press

Enters data selection mode. Allows you to select one or more items in a view and act upon the data using a contextual action bar. Avoid using long press for displaying contextual menus.

**Action: Press you finger against the screen for a few moments**

``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.LongPress, function (args) {
    console.log("Long Press");
});
```
``` TypeScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.LongPress, function (args: gestures.GestureEventData) {
    console.log("Long Press");
});
```

## Swipe

Navigates between views in the same hierarchy. Swipes are quick and affect the screen even after the finger is lifted off the screen.

**Action: Swiftly slide your finger across the screen**

``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Swipe, function (args) {
    console.log("Swipe Direction: " + args.direction);
});
```
``` TypeScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Swipe, function (args: gestures.SwipeGestureEventData) {
    console.log("Swipe Direction: " + args.direction);
});
```

## Pan

Scrolls overflowing content. Pans are executed more slowly and allow for more precision and the screen stops responding as soon as the finger is lifted off it.

**Action: Press your finger down and immediately start moving it around**

``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Pan, function (args) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```
``` TypeScript
var observer = label.observe(gestures.GestureTypes.Pan, function (args: gestures.PanGestureEventData) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```

## Pinch

Zooms into content or out of content.

**Action 1: Touch using two of your fingers, then move them towards each other**
**Action 2: Touch using two of your fingers, then move them away of each other**


``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Pinch, function (args) {
    console.log("Pinch Scale: " + args.scale);
});
```
``` TypeScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Pinch, function (args: gestures.PinchGestureEventData) {
    console.log("Pinch Scale: " + args.scale);
});
```

## Rotation

Rotates content clockwise or counterclockwise.

**Action: Touch using two of your fingers, then rotate them simultaneously left or right**

``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Rotation, function (args) {
    console.log("Rotation: " + args.rotation);
});
```
``` TypeScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Rotation, function (args: gestures.RotationGestureEventData) {
    console.log("Rotation: " + args.rotation);
});
```

## Stop Detecting Gestures

To stop receiving information about gestures, simply call the `disconnect` method of the observer object  that you received when you called the `observe` method.

``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Tap, function (args) {
    console.log("Tap");
});
observer.disconnect();
```
``` TypeScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Tap, function (args: gestures.GestureEventData) {
    console.log("Tap");
});
observer.disconnect();
```
