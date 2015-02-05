---
nav-title: "Gestures"
title: "Gestures"
description: "Gestures"
position: 12

---
# Overview
People use gestures—such as tap, drag, and pinch—to interact with apps and their devices. People generally expect gestures to work the same in all the apps they use. Gestures allow users to interact with your app by manipulating widgets on the screen.
*View*, which is the base class for all NativeScript widgets, has an **observe** method which lets you subscribe to gestures recognized by the widget. The first parameter of the *observe* method is the type of gesture you are interested in and the second is a function which will be called each time this particular gesture is recognized. The function arguments contain additional information about the gesture if applicable. Calling the **observe** method will return a **GestureObserver** object which you will need later to stop detecting gestures.

- **observe(** type _Number_, callback _Function_... **)** _GesturesObserver_
   - **type** - _Number_
   - **callback** - _Function_(args _GestureEventData_)
   - _**return**_ - _GesturesObserver_   

## Tap
Triggers the default functionality for a given item.

**Action: Press, lift**

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
Scales up a standard amount around the target with each repeated gesture until reaching maximum scale. For nested views, scales up the smallest targetable view, or returns it to its original scale. Also used as a secondary gesture for text selection.

**Action: Two taps in quick succession**

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
Enters data selection mode. Allows you to select one or more items in a view and act upon the data using a contextual action bar. Avoid using long press for showing contextual menus.

**Action: Press, wait, lift**

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
Navigates between views in the same hierarchy. Swipes are quick and affect the screen even after the finger is picked up.

**Action: Press, move, lift**

``` JavaScript
```
``` TypeScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Swipe, function (args: gestures.SwipeGestureEventData) {
    console.log("Swipe Direction: " + args.direction);
});
```

## Pan
Scrolls overflowing content. Pans are slower and more precise, and the screen stops responding when the finger is picked up.

**Action: Press, move, lift**

``` JavaScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Pan, function (args) {
    console.log("Pan");
});
```
``` TypeScript
var label = new labelModule.Label();
var observer = label.observe(gestures.GestureTypes.Pan, function (args: gestures.GestureEventData) {
    console.log("Pan");
});
```

## Pinch
Zooms into content or out of content.

**Action: 2-finger press, move outwards, lift**

**Action: 2-finger press, move inwards, lift**

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
Rotates content clockwise or counter clockwise.

**Action: 2-finger press, draw circle with fingers, lift**

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
To stop receiving information about gestures, simply call the **disconnect** method of the observer object you received when you called the **observe** method.

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