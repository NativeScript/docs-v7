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
* [Touch](#touch)
* [Subscribing to Multiple Gestures and Events](#subscribing-to-multiple-gestures-and-events)

## Tap

**Action: Briefly touch the screen.**

{% nativescript %}
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
{% endnativescript %}
{% angular %}
TODO...
{% endangular %}

## Double Tap

**Action: Two taps in a quick succession**

{% nativescript %}
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
{% endnativescript %}
{% angular %}
TODO...
{% endangular %}
Possible implementation:
* Scale up the object with a predefined percentage, centered around the double-tapped region. Keeping repeating the gesture continues to scale up until the maximum scale is reached.
* Scale up the smallest targetable view or returns it to its original scale in nested views.
* Select text.

## Long Press

**Action: Press you finger against the screen for a few moments.**

{% nativescript %}
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
{% endnativescript %}
{% angular %}
TODO...
{% endangular %}
Possible implementation: Select one or more items in a view and act upon the data using a contextual action bar. Enter data selection mode. Avoid using long press for displaying contextual menus.

## Swipe

**Action: Swiftly slide your finger across the screen. Swipes are quick and affect the screen even after the finger is lifted off the screen.**

{% nativescript %}
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
{% endnativescript %}
{% angular %}
TODO...
{% endangular %}
Possible implementation: Navigate between views in the same hierarchy.

## Pan

**Action: Press your finger down and immediately start moving it around. Pans are executed more slowly and allow for more precision and the screen stops responding as soon as the finger is lifted off it.**

{% nativescript %}
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
{% endnativescript %}
{% angular %}
TODO...
{% endangular %}

## Pinch

**Action: Touch using two of your fingers, then move them towards each other or away from each other.**

{% nativescript %}
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
{% endnativescript %}
{% angular %}
TODO...
{% endangular %}
Possible implementation: Zoom into content or out of content.

## Rotation

**Action: Touch using two of your fingers, then rotate them simultaneously left or right.**

{% nativescript %}
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
{% endnativescript %}
{% angular %}
TODO...
{% endangular %}

## Touch

**Action: A finger action was performed.**

This is a general purpose gesture that is triggered whenever pointer (usually finger) has performed a touch action (up, down, move or cancel). `TouchGestureEventData` provides information about all the pointers currently on the screen and their position inside the view that triggered the event.

{% nativescript %}
``` JavaScript
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.touch, function (args) {
    console.log("Touch: x: " + args.getX() + " y: " + args.getY());
});
```
``` TypeScript
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.touch, function (args: gestures.TouchGestureEventData) {
    console.log("Touch: x: " + args.getX() + " y: " + args.getY());
});
```
{% endnativescript %}
{% angular %}
TODO...
{% endangular %}

# Subscribing to Multiple Gestures and Events

Since NativeScript 1.3 when subscribing you can use gestures names, comma separated gestures names and/or even mix with events.

{% nativescript %}
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
{% endnativescript %}
{% angular %}
TODO...
{% endangular %}
