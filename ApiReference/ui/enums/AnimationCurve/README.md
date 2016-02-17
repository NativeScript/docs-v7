---
nav-title: "Module ui/enums.AnimationCurve"
title: "Module ui/enums.AnimationCurve"
description: "Module ui/enums.AnimationCurve"
---
## Namespace: "ui/enums".AnimationCurve
Represents an animation curve type.

##### Variables
 - **easeIn** - _String_.    
  An ease-in curve causes the animation to begin slowly, and then speed up as it progresses.
 - **easeOut** - _String_.    
  An ease-out curve causes the animation to begin quickly, and then slow down as it completes.
 - **easeInOut** - _String_.    
  An ease-in ease-out curve causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
 - **linear** - _String_.    
  A linear animation curve causes an animation to occur evenly over its duration.
 - **spring** - _String_.    
  A spring animation curve causes an animation to produce a spring (bounce) effect.

##### Functions
 - **cubicBezier(** x1 _Number_, y1 _Number_, x2 _Number_, y2 _Number_ **)** [_CubicBezierAnimationCurve_](../../../ui/animation/CubicBezierAnimationCurve.md)  
     A custom cubic bezier function defined by its two control points. Possible values are numeric values from 0 to 1
   - **x1** - _Number_
   - **y1** - _Number_
   - **x2** - _Number_
   - **y2** - _Number_
   - _**return**_ - [_CubicBezierAnimationCurve_](../../../ui/animation/CubicBezierAnimationCurve.md)