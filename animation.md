---
nav-title: Animation
title: "Animation"
description: Learn how to animate view properties.
position: 18
---

# Animation API

## AnimationDefinition Interface
The [`AnimationDefinition`](ApiReference/ui/animation/AnimationDefinition.md) interface is central for defining an animation for **one or more properties** of a **single** [`View`](ApiReference/ui/core/View.md). The animatable properties are:
 - opacity
 - backgroundColor
 - translateX and translateY
 - scaleX and scaleY
 - rotate

The [`AnimationDefinition`](ApiReference/ui/animation/AnimationDefinition.md) interface has the following members:
 - target: The view whose property is to be animated.
 - opacity: Animates the opacity of the view. Value should be a number between 0.0 and 1.0.
 - backgroundColor: Animates the backgroundColor of the view.
 - translate: Animates the translate affine transform of the view. Value should be a [`Pair`](ApiReference/ui/animation/Pair.md).
 - scale: Animates the scale affine transform of the view. Value should be a [`Pair`](ApiReference/ui/animation/Pair.md).
 - rotate: Animates the rotate affine transform of the view. Value should be a number specifying the rotation amount in degrees.
 - duration: The length of the animation in milliseconds. The default duration is 300 milliseconds.
 - delay: The amount of time, in milliseconds, to delay starting the animation.
 - iterations: Specifies how many times the animation should be played. Default is 1. iOS animations support fractional iterations, i.e. 1.5. To repeat an animation infinitely, use Number.POSITIVE_INFINITY
 - curve: An optional animation curve of type [`UIViewAnimationCurve`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIView_Class/#//apple_ref/c/tdef/UIViewAnimationCurve) for iOS or [`android.animation.TimeInterpolator`](http://developer.android.com/reference/android/animation/TimeInterpolator.html) for Android.

 All members of the interface are **optional** and have default values with the following exceptions:
 - target is only optional when calling the **animate** method of a [`View`](ApiReference/ui/core/View.md) instance since it is set automatically for you.
 - You must specify at least one property among opacity, backgroundColor, scale, rotate and translate.

## Animation Class
The [`Animation`](ApiReference/ui/animation/Animation.md) class represents a **set** of one or more [`AnimationDefinitions`](ApiReference/ui/animation/AnimationDefinition.md which can be played either **simultaneously or sequentially**. **This class is typically used when you need to animate several views together**. The constructor of the the [`Animation`](ApiReference/ui/animation/Animation.md) class accepts an array of [`AnimationDefinitions`](ApiReference/ui/animation/AnimationDefinition.md) and a boolean parameter indicating whether to play the animations sequentially. Creating an instance of the [`Animation`](ApiReference/ui/animation/Animation.md) class does not start the animation playback. The class has four members:
 - play: a method that starts the animation and returns the instance it was called on for fluent animation chaining.
 - cance: a void method which stops the animation.
 - finished: a promise which will be resolved when the animation finishes or rejected when the animaton is cancelled or stops for another reason.
 - isPlaying: a boolean property returning true if the animation is currently playing.

## View.animate Method
In case you need to animate a **single** [`View`](ApiReference/ui/core/View.md) and you don't need to be able to **cancel** the animation, you can simply use the shortcut **View.animate** method which accepts an [`AnimationDefinition`](ApiReference/ui/animation/AnimationDefinition.md), immediately starts the animation and returns its finished promise.

# Examples

## Opacity
![opacity](img/modules/animation/opacity.gif "Opacity")
``` JavaScript
view.animate({
    opacity: 0,
    duration: 3000
});
```
``` TypeScript
view.animate({
    opacity: 0,
    duration: 3000
});
```

## Background Color
![background-color](img/modules/animation/background-color.gif "Background Color")
``` JavaScript
view.animate({
    backgroundColor: new colorModule.Color("#3D5AFE"),
    duration: 3000
});
```
``` TypeScript
view.animate({
    backgroundColor: new colorModule.Color("#3D5AFE"),
    duration: 3000
});
```

## Translate
![translate](img/modules/animation/translate.gif "Translate")
``` JavaScript
view.animate({
    translate: { x: 100, y: 100},
    duration: 3000
});
```
``` TypeScript
view.animate({
    translate: { x: 100, y: 100},
    duration: 3000
});
```

## Scale
![scale](img/modules/animation/scale.gif "Scale")
``` JavaScript
view.animate({
    scale: { x: 2, y: 2},
    duration: 3000
});
```
``` TypeScript
view.animate({
    scale: { x: 2, y: 2},
    duration: 3000
});
```
## Rotate
![rotate](img/modules/animation/rotate.gif "Rotate")
``` JavaScript
view.animate({
    rotate: 360,
    duration: 3000
});
```
``` TypeScript
view.animate({
    rotate: 360,
    duration: 3000
});
```
