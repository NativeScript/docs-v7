---
title: Animations
description: Learn how to animate view properties.
position: 100
slug: animations
previous_url: /animation
---

# Animations

One of the ways to improve the attractiveness of your application is by adding animations. NativeScript exposes a simple and easy, but powerful enough API to allow animating almost every native element in your application.

For your convenience, we expose two ways of creating animations:

- [Declarative](./animation-css.md) - you will use the easy and familiar CSS3 animations API
- [Imperative](./animation-code.md) - take full control of any animation by calling animation methods directly with code

[Here](./animation-examples.md) you wlll find a detailed set of examples demonstating the different animations that can be achieved with NativeScript.

##Hello world example

In __Example 1__ we will change the background color of a button from "red" to "green". You can use JavaScript or TypeScript code to do the following:

__Example 1: Changing background color animation with code.__

![hello-world](../img/modules/animation/hello-world.gif "Hello world")

``` JavaScript
view.backgroundColor = new colorModule.Color("red");
view.animate({ backgroundColor: new colorModule.Color("green"), duration: 2000 });
```
``` TypeScript
view.backgroundColor = new colorModule.Color("red");
view.animate({ backgroundColor: new colorModule.Color("green"), duration: 2000 });
```

As _Example 2_ shows, you can express the same animation in CSS with the following definition:

__Example2: Changing background color animation with CSS.__

``` CSS
@keyframes example {
    from { background-color: red; }
    to { background-color: green; }
}
.view {
    animation-name: example;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
```

> CSS animations apply with lower precedence, like any other CSS settings, so any local values set in your element will cancel the animation.

NativeScript lets you animate the following properties:

- **opacity**
- **backgroundColor**
- **translateX** and **translateY**
- **scaleX** and **scaleY**
- **rotate**

In every animation, you can control the following properties:

- **duration**: The length of the animation.
- **delay**: The amount of time to delay starting the animation.
- **iterations**: Specifies how many times the animation should be played. 
- **timing function**: The speed curve of the animation. Available options are defined below.

##Animation curves

By default, an animation moves with a linear speed without acceleration or deceleration. This might look unnatural and different from the real world where objects need time to reach their top speed and can't stop immediately. The animation curve (sometimes called an easing function) is used to give animations an illusion of inertia. It controls the animation speed by modifying the fraction of the duration. NativeScript comes with a number of predefined animation curves.

- **linear**: The simplest animation curve is linear. It maintains a constant speed while the animation is running:
![linear](../img/modules/animation/linear.gif "Linear")

- **Ease-in**: The ease-in curve causes the animation to begin slowly, and then speed up as it progresses.
![easein](../img/modules/animation/easein.gif "EaseIn")

- **Ease-out**: An ease-out curve causes the animation to begin quickly, and then slow down as it completes.
![easeout](../img/modules/animation/easeout.gif "EaseOut")

- **Ease-in-out**: An ease-in ease-out curve causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
![easeinout](../img/modules/animation/easeinout.gif "EaseInOut")

- **Spring**: A spring animation curve causes an animation to produce a spring (bounce) effect.
![spring](../img/modules/animation/spring.gif "Spring")

In NativeScript, the animation curve is represented by the AnimationCurve enumeration and can be specified with the curve property of the animation. In CSS, the animation curve is defined by using the animation-timing-function property (see __Example 3__):

__Example 3: How to customize the animation timing function__

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
``` CSS
.view {
	animation-name: example;
	animation-duration: 1;
	animation-timing-function: ease-in;
   animation-fill-mode: forwards;
}
@keyframes example {
	from { transform: translate(0, 0); }
	to { transform: translate(0, 100); }
}
```

It is easy to create your own animation curve by passing in the x and y components of two control points of a cubic Bezier curve (as shown in __Example 4__). Using Bezier curves is a common technique to create smooth curves in computer graphics and they are widely used in vector-based drawing tools. The values passed to the cubicBezier method control the curve shape. The animation speed will be adjusted based on the resulting path.

__Example 4: How to create own animation curve via cubic Bezier__

![beziergraph](../img/modules/animation/bezier-graph.png "BezierGraph")

``` JavaScript
view.animate({
    translate: { x: 0, y: 100 },
    duration: 1000,
    curve: enums.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
});
```
``` TypeScript
view.animate({
    translate: { x: 0, y: 100 },
    duration: 1000,
    curve: enums.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
});
```
``` CSS
.view {
	animation-name: example;
	animation-duration: 1;
	animation-timing-function: cubicBezier(0.1, 0.1, 0.1, 1);
	animation-fill-mode: forwards;
}
```

![bezier](../img/modules/animation/bezier.gif "Bezier")

 
More detailed examples are available on the [Animation Examples](./animation-examples.md) page.

