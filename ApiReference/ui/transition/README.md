---
nav-title: "Module ui/transition"
title: "Module ui/transition"
description: "Module ui/transition"
---
# Module: "ui/transition"

``` JavaScript
// To import the "ui/transition" module:
var uitransition = require("ui/transition");
```

Class | Description
------|------------
[Transition](../../ui/transition/Transition.md) | 

Namespace | Description
------|------------
[AndroidTransitionType](../../ui/transition/AndroidTransitionType/) | 

##### Functions
 - **_clearForwardTransitions(** fragment _Object_ **)**
   - **fragment** - _Object_
 - **_setAndroidFragmentTransitions(** navigationTransition [_NavigationTransition_](../../ui/frame/NavigationTransition.md), currentFragment _Object_, newFragment _Object_, fragmentTransaction _Object_ **)**
   - **navigationTransition** - [_NavigationTransition_](../../ui/frame/NavigationTransition.md)
   - **currentFragment** - _Object_
   - **newFragment** - _Object_
   - **fragmentTransaction** - _Object_
 - **_onFragmentCreateAnimator(** fragment _Object_, nextAnim _Number_ **)** _Object_
   - **fragment** - _Object_
   - **nextAnim** - _Number_
   - _**return**_ - _Object_
 - **_onFragmentShown(** fragment _Object_, isBack _Boolean_ **)**
   - **fragment** - _Object_
   - **isBack** - _Boolean_
 - **_onFragmentHidden(** fragment _Object_, isBack _Boolean_ **)**
   - **fragment** - _Object_
   - **isBack** - _Boolean_
 - **_createIOSAnimatedTransitioning(** navigationTransition [_NavigationTransition_](../../ui/frame/NavigationTransition.md), operation _Number_, fromVC _Object_, toVC _Object_ **)** _Object_
   - **navigationTransition** - [_NavigationTransition_](../../ui/frame/NavigationTransition.md)
   - **operation** - _Number_
   - **fromVC** - _Object_
   - **toVC** - _Object_
   - _**return**_ - _Object_