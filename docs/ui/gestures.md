---
title: Gestures
description: Learn what touch gestures NativeScript supports and how to use them.
position: 90
slug: gestures
previous_url: /gestures

---

# Overview

Gestures, such as tap, slide and pinch, allow users to interact with your app by manipulating UI elements on the screen.

In NativeScript, `View`&mdash;the base class for all NativeScript UI elements&mdash;has `on` and `off` methods that let you subscribe or unsubscribe to all events and gestures recognized by the UI element.

As the first parameter, you pass an `on` or `off` method and the type of gesture you want to track. The second  parameter is a function that is called each time the specified gesture is recognized. The function arguments contain additional information about the gesture, if applicable.

- **on(** type _Number_ | name _String_ | names Comma separated _String_, callback _Function_... **)
   - **type** - _Number_ | **name** - _String_ | **names** - Comma separated _String_
   - **callback** - _Function_(args _GestureEventData_)

- **off(** type _Number_ | name _String_ | names Comma separated _String_, callback _Function_... **)
   - **type** - _Number_ | **name** - _String_ | **names** - Comma separated _String_
   - **callback** - _Function_(args _GestureEventData_)

## Tap

**Action: Briefly touch the screen.**

{% nativescript %}
``` JavaScript
var gestures = require("ui/gestures");
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.tap, function (args) {
    console.log("Tap");
});
```
``` TypeScript
import { GestureTypes, GestureEventData } from "ui/gestures";
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(GestureTypes.tap, function (args: GestureEventData) {
    console.log("Tap");
});
```
{% endnativescript %}
{% angular %}
{%snippet ng-tap-gesture%}
{% endangular %}

## Double Tap

**Action: Two taps in a quick succession.**

{% nativescript %}
``` JavaScript
var gestures = require("ui/gestures");
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.doubleTap, function (args) {
    console.log("Double Tap");
});
```
``` TypeScript
import { GestureTypes, GestureEventData } from "ui/gestures";
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(GestureTypes.doubleTap, function (args: GestureEventData) {
    console.log("Double Tap");
});
```
{% endnativescript %}
{% angular %}
{%snippet ng-double-tap-gesture%}
{% endangular %}
Possible implementation:
* Scale up the object with a predefined percentage, centered around the double-tapped region. If a user keeps repeating the double tap gesture, continue to scale up until the maximum scale is reached.
* Scale up the smallest targetable view or returns it to its original scale in nested views.
* Select text.

## Long Press

**Action: Press your finger against the screen for a few moments.**

{% nativescript %}
``` JavaScript
var gestures = require("ui/gestures");
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.longPress, function (args) {
    console.log("Long Press");
});
```
``` TypeScript
import { GestureTypes, GestureEventData } from "ui/gestures";
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(GestureTypes.longPress, function (args: GestureEventData) {
    console.log("Long Press");
});
```
{% endnativescript %}
{% angular %}
{%snippet ng-long-press-gesture%}
{% endangular %}
Possible implementation: Select one or more items in a view and act upon the data using a contextual action bar. Enter data selection mode. Avoid using long press for displaying contextual menus.

## Swipe

**Action: Swiftly slide your finger across the screen. Swipes are quick and affect the screen even after the finger is lifted off the screen.**

{% nativescript %}
``` JavaScript
var gestures = require("ui/gestures");
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.swipe, function (args) {
    console.log("Swipe Direction: " + args.direction);
});
```
``` TypeScript
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(GestureTypes.swipe, function (args: SwipeGestureEventData) {
    console.log("Swipe Direction: " + args.direction);
});
```
{% endnativescript %}
{% angular %}
{%snippet ng-swipe-gesture%}
{% endangular %}
Possible implementation: Navigate between views in the same hierarchy.

## Pan

**Action: Press your finger down and immediately start moving it around. Pans are executed more slowly and allow for more precision and the screen stops responding as soon as the finger is lifted off it.**

{% nativescript %}
``` JavaScript
var gestures = require("ui/gestures");
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.pan, function (args) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```
``` TypeScript
import { GestureTypes, PanGestureEventData } from "ui/gestures";
import labelModule = require("ui/label");
label.on(GestureTypes.pan, function (args: PanGestureEventData) {
    console.log("Pan deltaX:" + args.deltaX + "; deltaY:" + args.deltaY + ";");
});
```
{% endnativescript %}
{% angular %}
{%snippet ng-pan-gesture%}
{% endangular %}

## Pinch

**Action: Touch the screen using two of your fingers, then move them towards each other or away from each other.**

{% nativescript %}
``` JavaScript
var gestures = require("ui/gestures");
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.pinch, function (args) {
    console.log("Pinch Scale: " + args.scale);
});
```
``` TypeScript
import { GestureTypes, PinchGestureEventData } from "ui/gestures";
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(GestureTypes.pinch, function (args: PinchGestureEventData) {
    console.log("Pinch Scale: " + args.scale);
});
```
{% endnativescript %}
{% angular %}
{%snippet ng-pinch-gesture%}
{% endangular %}
Possible implementation: Zoom into content or out of content.

## Rotation

**Action: Touch the screen using two of your fingers, then rotate them simultaneously left or right.**

{% nativescript %}
``` JavaScript
var gestures = require("ui/gestures");
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.rotation, function (args) {
    console.log("Rotation: " + args.rotation);
});
```
``` TypeScript
import { GestureTypes, RotationGestureEventData } from "ui/gestures";
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(GestureTypes.rotation, function (args: RotationGestureEventData) {
    console.log("Rotation: " + args.rotation);
});
```
{% endnativescript %}
{% angular %}
{%snippet ng-rotate-gesture%}
{% endangular %}

## Touch

**Action: A finger action was performed.**

This is a general purpose gesture that is triggered whenever a pointer (usually a finger) has performed a touch action (up, down, move or cancel). `TouchGestureEventData` provides information about all the pointers currently on the screen and their position inside the view that triggered the event.

{% nativescript %}
``` JavaScript
var gestures = require("ui/gestures");
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(gestures.GestureTypes.touch, function (args) {
    console.log("Touch: x: " + args.getX() + " y: " + args.getY());
});
```
``` TypeScript
import { GestureTypes, TouchGestureEventData } from "ui/gestures";
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on(GestureTypes.touch, function (args: TouchGestureEventData) {
    console.log("Touch: x: " + args.getX() + " y: " + args.getY());
});
```
{% endnativescript %}
{% angular %}
{% snippet ng-touch-gesture %}
{% endangular %}

{% nativescript %}
# Subscribing to Multiple Gestures and Events

Since the release of NativeScript 1.3, when subscribing you can use gestures names, comma separated gestures names and/or even mix with events.

``` JavaScript
var gestures = require("ui/gestures");
var labelModule = require("ui/label");
var label = new labelModule.Label();
label.on("loaded, tap, doubleTap, longPress", function (args) {
    console.log("Event: " + args.eventName + ", sender: " + args.object);
});
```
``` TypeScript
import { GestureEventData } from "ui/gestures";
import labelModule = require("ui/label");
var label = new labelModule.Label();
label.on("loaded, tap, doubleTap, longPress", function (args: GestureEventData) {
    console.log("Event: " + args.eventName + ", sender: " + args.object);
});
```
{% endnativescript %}
