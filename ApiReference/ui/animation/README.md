---
nav-title: "Module ui/animation"
title: "Module ui/animation"
description: "Module ui/animation"
---
# Module: "ui/animation"

``` JavaScript
// To import the "ui/animation" module:
var uianimation = require("ui/animation");
```

Class | Description
------|------------
[CubicBezierAnimationCurve](../../ui/animation/CubicBezierAnimationCurve.md) | Defines a custom animation timing curve by using the cubic-bezier function.
Possible values are numeric values from 0 to 1
[Animation](../../ui/animation/Animation.md) | Defines a animation set.

Object | Description
------|------------
[AnimationDefinition](../../ui/animation/AnimationDefinition.md) | Defines animation options for the View.animate method.
[Pair](../../ui/animation/Pair.md) | Defines a pair of values (horizontal and vertical) for translate and scale animations.

##### Functions
 - **_resolveAnimationCurve(** curve _Object_ **)** _Object_
   - **curve** - _Object_
   - _**return**_ - _Object_