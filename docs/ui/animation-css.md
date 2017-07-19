---
title: Animations with CSS
description: Animate view properties by using CSS stylesheets.
slug: animation-css
position: 100
publish: false
---

# CSS Animations

CSS animations are based on the simple and easy to use standard [CSS3 animations API](http://www.w3schools.com/css/css3_animations.asp). You can use them to animate almost every native view without even having to know JavaScript. You have the potential to alter the appearance and behavior of an element whenever a state change occurs, such as when it is touched or activated. You can use multiple frames and change the animation direction. Finally, with CSS animations, you can separate the animation code from your application logic.

CSS animations consist of two components: a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation's style, as well as possible intermediate waypoints. You can change as many animatable CSS properties you want, as many times you want.

__Example 1__ binds the "example" animation to the button element. The animation lasts 4 seconds. It will gradually change the background-color of the button element from "red" to "green".

__Example 1: How to create simple animation using CSS.__

``` CSS
@keyframes example {
    from { background-color: red; }
    to { background-color: green; }
}

.view {
    animation-name: example;
    animation-duration: 4s;
	animation-fill-mode: forwards;
}
```

To get an animation to work, you must bind the animation to an element:

``` JavaScript
view1.className = "example";
```
``` TypeScript
view1.className = "example";
```
``` XML
<Button id="myButton" text="{N}" class="example"/>
```

> If the **animation-duration** property is not specified, the animation will use a default value - 0.3 seconds.

## Animatable properties

CSS animations support the same animatable properties used in code-based animations: 

- **opacity**
- **background-color**: Corresponds with the backgroundColor.
- **transform: translate**: Corresponds with translateX and translateY properties. 
- **transform: scale**: Corresponds with scaleX and scaleY properties.
- **transform: rotate**: Corresponds with the rotate property.

> You cannot set a single x or y field in scale and translate. If you set only x in translate, y will be assumed 0; If you set only y in scale, x will be assumed 1.

## Animation properties

A CSS animation is defined by using the animation property and its sub-properties. Those include timing, duration, delay and other animation properties. The actual animation appearance is defined with the @keyframes rule.

The following list presents all animation properties:

- **animation-name**: Specifies the name of the @keyframes rule that should be used.
- **animation-delay**: Specifies the time between the style is applied and the beginning of the animation.
- **animation-duration**: The length of the animation in seconds.
- **animation-iteration-count**: Specifies how many times the animation should be played. Default is 1. To repeat an animation forever, use infinite.
- **animation-timing-function**: Defines how the animation transitions through keyframes by establishing acceleration curves.
- **animation-fill-mode**: Configures what values are applied by the animation after it is executing.
- **animation-direction**: Configures whether or not the animation should alternate direction on each run through the sequence or reset to the start point and repeat itself.
- **animation**: The shorthand property allows setting all animation properties in a single line.

## Animation keyframes

To set multiple points at which an element should undergo a transition, use the **@keyframes** rule, shown in __Example 2__. It includes the animation name, any animation breakpoints, and the properties intended to be animated. 

__Example 2: How to use **@keyframes** rule.__

``` CSS
@keyframes example {
    from { background-color: red; }
    to { background-color: green; }
}
```

__Example 2__ defines an animation with two keyframes. The "from" represents 0% (the start of the animation) and "to" represents 100% (the final value). You can add more keyframes by using percent.

__Example 3__ shows how to change the background color when the animation is 25% complete, 50% complete, and again when the animation is 100% complete.

__Example 3: Changing background color in different animation stages.__

``` CSS
@keyframes example {
    0%   { background-color: red; }
    25%  { background-color: yellow; }
    50%  { background-color: blue; }
    100% { background-color: green; }
}
```

You can set multiple properties in a keyframe, as shown in __Example 4__.

__Example 4: Changing multiple properties in different animation stages.__

``` CSS
@keyframes example {
    0%   { background-color: red; transform: translate(0, 0); }
    25%  { background-color: yellow; transform: translate(200, 0); }
    50%  { background-color: blue; transform: translate(200, 200);  }
    75%  { background-color: green; transform: translate(0, 200); }
    100% { background-color: red; transform: translate(0, 0); }
}
```

You can combine keyframes, as shown in __Example 5__.

__Example 5: Set up properties for several keyframes__

``` CSS
@keyframes example {
    0%, 50% { background-color: red; transform: translate(0, 0); }
    25%, 75% { background-color: yellow; transform: translate(200, 0); }
    100% { background-color: red; transform: translate(0, 0); }
}
```

## Delay an animation

The **animation-delay** property specifies a delay (in seconds) before the animation starts:

__Example 6: Set up a delay before the animation starts__

``` CSS
.view {
	background-color: red;
    animation-name: example;
    animation-duration: 4s;
    animation-delay: 2s;
}
```

## Set how many times an animation should run

The **animation-iteration-count** property defines the number of times an animation should run. The animation in __Example 7__ will play two times before it stops.

__Example 7: How to use `animation-iteration-count` property__

``` CSS
.view {
	background-color: red;
   animation-name: example;
   animation-duration: 4s;
   animation-iteration-count: 2;
}
```

If you want to play an animation forever, set this property to "infinite".

``` CSS
animation-iteration-count: infinite;
```

## Specify the speed curve of the animation

The **animation-timing-function** property specifies the speed curve of the animation. It can have one of the following values:

- **ease**: Specifies an animation with a slow start, then fast, then end slowly (this is the default).
- **linear**: Specifies an animation with the same speed from start to end.
- **ease-in**: Specifies an animation with a slow start.
- **ease-out**: Specifies an animation with a slow end.
- **ease-in-out**: Specifies an animation with a slow start and slow end.
- **spring**: Specifies a spring animation.
- **cubic-bezier(n,n,n,n)**: Lets you define your own values in a cubic-bezier function, as shown in __Example 8__.

__Example 8: How to specify the speed curve using cubic-bezier function.__

``` CSS
.view {
	animation-name: example;
   animation-timing-function: cubic-bezier(0.1, 0.1, 1.0, 1.0);
}
```

## Determine the result when the animation ends

The **animation-fill-mode** property determines the element style when the animation finishes. Its default value is "none". In this case, all animated values will be reset to the state before the animation started. You should choose "forwards" in order to preserve the property values set during the animation.

__Example 9: How to use **animation-fill-mode** property__

``` CSS
.view {
	background-color: red;
    animation-name: example;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
```

## Animation direction

You can use the **animation-direction** property to play a CSS animation in reverse direction, as shown in __Example 10__.

__Example 10: How to reverse animation direction.__

``` CSS
.view {
	background-color: red;
    animation-name: example;
    animation-duration: 4s;
    animation-direction: reverse;
}
```

## Animation shorthand

The **animation** property allows setting all seven animation properties with a single line:

__Example 11: How to use animation shorthand property__

``` CSS
.view {
    animation: example 4s ease-in-out 2s infinite reverse forwards;
}
```

The supported syntax is:

animation: name duration timing-function delay iteration-count direction fill-mode;

You can combine two animations in the **animation** property by using commas:

__Example 12: How to combine several animations in the **animation** property__

``` CSS
.view {
    animation: example 4s ease-in-out 2s infinite reverse, second-animation-example 5s ease-out;
}
```

## Pseudo selectors

A pseudo selector is used to define a special state of an element. For example, when a button is touched by the user. You can use pseudo selectors to trigger animations:

__Example 13: How to trigger animation on element special state__

``` CSS
.button {
    background-color: green;
}

.button:highlighted {
    animation-name: highlight;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}

@keyframes highlight {
    from { background-color: yellow; }
    to { background-color: red; }
}
```

> As of version 2.0, only the **Button** component has a built-in special state "highlighted" to indicate that it is touched by the user.

## Access CSS animations from code

The simplest way to trigger a CSS animation is by changing the element **className** property:

__Example 14: How to trigger CSS animation__

```JavaScript
var view = page.getViewById("view");
view.className = "transparent";
```
```TypeScript
let view = page.getViewById<viewModule.View>("view");
view.className = "transparent";
```

All keyframes defined in CSS can be accessed with code by using the **getKeyframeAnimationWithName** method. This allows further customization of animation properties:

__Example 15: Accessing CSS defined keyframe in the code via **getKeyframeAnimationWithName** method__

``` JavaScript
var keyframeAnimation = require("ui/animation/keyframe-animation");

var view = page.getViewById("view");
var animationInfo = page.getKeyframeAnimationWithName("bounce");
animationInfo.duration = 2000;
var animation = keyframeAnimation.KeyframeAnimation.keyframeAnimationFromInfo(animationInfo);
animation.play(view).then(() => {
    console.log("Played with code!");
});
```
``` TypeScript
import {KeyframeAnimation} from "ui/animation/keyframe-animation";

let view = page.getViewById<viewModule.View>("view");
let animationInfo = page.getKeyframeAnimationWithName("bounce");
animationInfo.duration = 2000;
let animation = KeyframeAnimation.keyframeAnimationFromInfo(animationInfo);
animation.play(view).then(() => {
    console.log("Played with code!");
});
```
