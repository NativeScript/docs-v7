---
nav-title: "Object ui/frame.NavigationTransition"
title: "Object ui/frame.NavigationTransition"
description: "Object ui/frame.NavigationTransition"
---
## Object: "ui/frame".NavigationTransition  
Represents an object specifying a page navigation transition.

##### Properties
 - **name** - _(optional)_ - _String_.    
  Can be one of the built-in transitions:
- curl (same as curlUp) (iOS only)
- curlUp (iOS only)
- curlDown (iOS only)
- explode (Android Lollipop an up only)
- fade
- flip (same as flipRight)
- flipRight
- flipLeft
- slide (same as slideLeft)
- slideLeft
- slideRight
- slideTop
- slideBottom
 - **instance** - _(optional)_ - [_Transition_](../../ui/transition/Transition.md).    
  An user-defined instance of the "ui/transition".Transition class.
 - **duration** - _(optional)_ - _Number_.    
  The length of the transition in milliseconds. If you do not specify this, the default platform transition duration will be used.
 - **curve** - _(optional)_ - _Object_.    
  An optional transition animation curve. Possible values are contained in the [AnimationCurve enumeration](../enums/AnimationCurve/README.md).
Alternatively, you can pass an instance of type UIViewAnimationCurve for iOS or android.animation.TimeInterpolator for Android.