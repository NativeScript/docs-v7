---
nav-title: "Class ui/gestures.GestureEventData"
title: "Class ui/gestures.GestureEventData"
description: "Class ui/gestures.GestureEventData"
---
## Object: "ui/gestures".GestureEventData  
Provides gesture event data.

##### Properties
 - **type** - [_GestureTypes_](../../ui/gestures/GestureTypes.md).    
  Gets the type of the gesture.
 - **view** - [_View_](../../ui/core/view/View.md).    
  Gets the view which originates the gesture.
 - **ios** - _UIGestureRecognizer_.    
  Gets the underlying native iOS specific [UIGestureRecognizer](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIGestureRecognizer_Class/).
 - **android** - _Object_.    
  Gets the underlying native android specific [gesture detector](http://developer.android.com/reference/android/view/GestureDetector.html).