---
nav-title: "Object ui/animation.AnimationDefinition"
title: "Object ui/animation.AnimationDefinition"
description: "Object ui/animation.AnimationDefinition"
---
## Object: "ui/animation".AnimationDefinition  
Defines animation options for the View.animate method.

##### Properties
 - **target** - _(optional)_ - [_View_](../../ui/core/view/View.md).    
  The view whose property is to be animated. 
 - **opacity** - _(optional)_ - _Number_.    
  Animates the opacity of the view. Value should be a number between 0.0 and 1.0
 - **backgroundColor** - _(optional)_ - [_Color_](../../color/Color.md).    
  Animates the backgroundColor of the view.
 - **translate** - _(optional)_ - [_Pair_](../../ui/animation/Pair.md).    
  Animates the translate affine transform of the view.
 - **scale** - _(optional)_ - [_Pair_](../../ui/animation/Pair.md).    
  Animates the scale affine transform of the view.
 - **rotate** - _(optional)_ - _Number_.    
  Animates the rotate affine transform of the view. Value should be a number specifying the rotation amount in degrees.
 - **duration** - _(optional)_ - _Number_.    
  The length of the animation in milliseconds. The default duration is 300 milliseconds.
 - **delay** - _(optional)_ - _Number_.    
  The amount of time, in milliseconds, to delay starting the animation. 
 - **iterations** - _(optional)_ - _Number_.    
  Specifies how many times the animation should be played. Default is 1.
iOS animations support fractional iterations, i.e. 1.5.
To repeat an animation infinitely, use Number.POSITIVE_INFINITY
 - **curve** - _(optional)_ - _Object_.    
  An optional animation curve. Possible values are contained in the [AnimationCurve enumeration](../enums/AnimationCurve/README.md).
Alternatively, you can pass an instance of type UIViewAnimationCurve for iOS or android.animation.TimeInterpolator for Android.