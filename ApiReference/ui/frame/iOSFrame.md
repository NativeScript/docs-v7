---
nav-title: "Class ui/frame.iOSFrame"
title: "Class ui/frame.iOSFrame"
description: "Class ui/frame.iOSFrame"
---
## Object: "ui/frame".iOSFrame  
Represents the iOS-specific Frame object, aggregated within the common Frame one.
In iOS the native controller, associated with a Frame object is UINavigationController.
The navigation controller will automatically hide/show its navigation bar depending on the back stack of the Frame.

##### Properties
 - **controller** - _UINavigationController_.    
  Gets the native [UINavigationController](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UINavigationController_Class/index.html) instance associated with this Frame.