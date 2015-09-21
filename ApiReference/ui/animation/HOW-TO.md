---
nav-title: "animation How-To"
title: "How-To"
description: "Examples for using animation"
---
# Animation
Animating view properties requires the "ui/animation" module.
``` JavaScript
var animation = require("ui/animation");
```
# Animating properties
``` JavaScript
label.animate({
    opacity: 0.75,
    backgroundColor: new colorModule.Color("Red"),
    translate: { x: 100, y: 100 },
    scale: { x: 2, y: 2 },
    rotate: 180,
    duration: 1000,
    delay: 100,
    iterations: 3,
    curve: label.ios ? UIViewAnimationCurve.UIViewAnimationCurveEaseIn : new android.view.animation.AccelerateInterpolator(1),
})
    .then(function () {
    //console.log("Animation finished.");
})
    .catch(function (e) {
    console.log(e.message);
});
```
# Cancelling animation
``` JavaScript
var animation1 = label.createAnimation({ translate: { x: 100, y: 100 } });
animation1.play().finished
    .then(function () {
    //console.log("Animation finished");
})
    .catch(function (e) {
    //console.log("Animation cancelled");
});
animation1.cancel();
```
# Chaining animations
``` JavaScript
label.animate({ opacity: 0 })
    .then(function () { return label.animate({ opacity: 1 }); })
    .then(function () { return label.animate({ translate: { x: 200, y: 200 } }); })
    .then(function () { return label.animate({ translate: { x: 0, y: 0 } }); })
    .then(function () { return label.animate({ scale: { x: 5, y: 5 } }); })
    .then(function () { return label.animate({ scale: { x: 1, y: 1 } }); })
    .then(function () { return label.animate({ rotate: 180 }); })
    .then(function () { return label.animate({ rotate: 0 }); })
    .then(function () {
    //console.log("Animation finished");
})
    .catch(function (e) {
    console.log(e.message);
});
```
# Animating multiple views simultaneously
``` JavaScript
var animations = [
    { target: label1, translate: { x: 200, y: 200 }, duration: 1000, delay: 0 },
    { target: label2, translate: { x: 200, y: 200 }, duration: 1000, delay: 333 },
    { target: label3, translate: { x: 200, y: 200 }, duration: 1000, delay: 666 },
];
var a = new animation.Animation(animations);
a.play().finished
    .then(function () {
    //console.log("Animations finished");
})
    .catch(function (e) {
    console.log(e.message);
});
```
