---
title: Animations with Code
description: Animated view properties by using code.
slug: animations-code
position: 10
publish: false
---

# Animations with code

The easiest way to animate a **single** [`View`](http://docs.nativescript.org/api-reference/classes/_ui_core_view_.view.html) is by using the `View.animate` method which accepts an [`AnimationDefinition`](http://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition.html), immediately starts the animation and then returns its finished promise.

__Example 20: How to execute animation on single view.__

``` JavaScript
view.animate({
    translate: { x: 0, y: 100},    
    duration: 1000,
    curve: enums.AnimationCurve.easeIn
});
```
``` TypeScript
view.animate({
    translate: { x: 0, y: 100},    
    duration: 1000,
    curve: enums.AnimationCurve.easeIn
});
```

> You should create an [`Animation`](http://docs.nativescript.org/api-reference/classes/_ui_animation_.animation.html) class in order to be able to **cancel** the animation. This is demonstrated below.

## The AnimationDefinition interface

The [`AnimationDefinition`](http://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition.html) interface is central for defining an animation for **one or more properties** of a **single** [`View`](http://docs.nativescript.org/api-reference/classes/_ui_core_view_.view.html). The animatable properties are:

 - **opacity**
 - **backgroundColor**
 - **translateX** and **translateY**
 - **scaleX** and **scaleY**
 - **rotate**

The [`AnimationDefinition`](http://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition.html) interface has the following members:

 - **target**: The view whose property is to be animated.
 - **opacity**: Animates the opacity of the view. Value should be a number between 0.0 and 1.0.
 - **backgroundColor**: Animates the backgroundColor of the view.
 - **translate**: Animates the translate affine transform of the view. Value should be a [`Pair`](http://docs.nativescript.org/api-reference/interfaces/_ui_animation_.pair.html).
 - **scale**: Animates the scale affine transform of the view. Value should be a [`Pair`](http://docs.nativescript.org/api-reference/interfaces/_ui_animation_.pair.html).
 - **rotate**: Animates the rotate affine transform of the view. Value should be a number specifying the rotation amount in degrees.
 - **duration**: The length of the animation in milliseconds. The default duration is 300 milliseconds.
 - **delay**: The amount of time, in milliseconds, to delay starting the animation.
 - **iterations**: Specifies how many times the animation should be played. Default is 1. iOS animations support fractional iterations, i.e., 1.5. To repeat an animation infinitely, use `Number.POSITIVE_INFINITY`.
 - **curve**: An optional animation curve. Possible values are contained in the [AnimationCurve enumeration](http://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve.html). Alternatively, you can pass an instance of type [`UIViewAnimationCurve`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIView_Class/#//apple_ref/c/tdef/UIViewAnimationCurve) for iOS or [`android.animation.TimeInterpolator`](http://developer.android.com/reference/android/animation/TimeInterpolator.html) for Android.

 All members of the interface are **optional** and have default values with the following exceptions:
 
 - target is only optional when calling the `animate` method of a [`View`](http://docs.nativescript.org/api-reference/classes/_ui_core_view_.view.html) instance since it is set automatically for you.
 - You must specify at least one property from this list: opacity, backgroundColor, scale, rotate or translate.

## The Animation class

The [`Animation`](http://docs.nativescript.org/api-reference/classes/_ui_animation_.animation.html) class represents a **set** of one or more [`AnimationDefinitions`](http://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition.html) that can be played either **simultaneously or sequentially**. **This class is typically used when you need to animate several views together**. The constructor of the  [`Animation`](http://docs.nativescript.org/api-reference/classes/_ui_animation_.animation.html) class accepts an array of [`AnimationDefinitions`](http://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition.html) and a boolean parameter indicating whether to play the animations sequentially. Creating an instance of the [`Animation`](http://docs.nativescript.org/api-reference/classes/_ui_animation_.animation.html) class does not start the animation playback. The class has four members:

 - **play**: A method that starts the animation and returns the instance it was called on for fluent animation chaining.
 - **cancel**: A void method that stops the animation.
 - **finished**: A promise that will be resolved when the animation finishes or rejected when the animation is cancelled or stops for another reason.
 - **isPlaying**: A boolean property returning __True__ if the animation is currently playing.

## Animating multiple properties

It is easy to animate multiple properties at once; just pass the desired animatable properties and the corresponding values when calling the animate function.

__Example 21: How to animate multiple properties.__

``` JavaScript
view.animate({
    backgroundColor: new color.Color("#3D5AFE"),
    opacity: 0.5,
    translate: { x: 100, y: 100 },
    rotate: 180,
    duration: 3000
});
```
``` TypeScript
view.animate({
    backgroundColor: new color.Color("#3D5AFE"),
    opacity: 0.5,
    translate: {x: 100, y: 100},
    rotate: 180,
    duration: 3000
});
```

![multiple-properties](../img/modules/animation/multiple-properties.gif "Multiple Properties")

## Chaining animations with promises

The animate method returns a promise that you can use to chain animations, as shown in __Example 21__. 

__Example 22: How to create chain animations.__

``` JavaScript
view.animate({ opacity: 0 })
    .then(function () { return view.animate({ opacity: 1 }); })
    .then(function () { return view.animate({ translate: { x: 100, y: 100 } }); })
    .then(function () { return view.animate({ translate: { x: 0, y: 0 } }); })
    .then(function () { return view.animate({ scale: { x: 3, y: 3 } }); })
    .then(function () { return view.animate({ scale: { x: 1, y: 1 } }); })
    .then(function () { return view.animate({ rotate: 180 }); })
    .then(function () { return view.animate({ rotate: 0 }); })
    .then(function () {
    console.log("Animation finished");
})
    .catch(function (e) {
    console.log(e.message);
});
```
``` TypeScript
view.animate({ opacity: 0 })
    .then(() => view.animate({ opacity: 1 }))
    .then(() => view.animate({ translate: { x: 100, y: 100 } }))
    .then(() => view.animate({ translate: { x: 0, y: 0 } }))
    .then(() => view.animate({ scale: { x: 3, y: 3 } }))
    .then(() => view.animate({ scale: { x: 1, y: 1 } }))
    .then(() => view.animate({ rotate: 180 }))
    .then(() => view.animate({ rotate: 0 }))
    .then(() => {
    console.log("Animation finished");
  })
    .catch((e) => {
    console.log(e.message);
  });
```

![chaining-with-promises](../img/modules/animation/chaining-with-promises.gif "Chaining with Promises")
