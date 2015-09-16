---
nav-title: "Object application.iOSApplication"
title: "Object application.iOSApplication"
description: "Object application.iOSApplication"
---
## Object: "application".iOSApplication  
The abstraction of an iOS-specific application object.

##### Properties
 - **rootController** - _UIViewController_.    
  The root view controller for the application.
 - **nativeApp** - _UIApplication_.    
  The [UIApplication](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplication_Class/index.html).
 - **delegate** - .    
  The [UIApplicationDelegate](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplicationDelegate_Protocol/index.html) class.

##### Functions
 - **addNotificationObserver(** notificationName _String_, onReceiveCallback _Function_... **)** _Object_  
     Adds an observer to the default notification center for the specified notification.
For more information, please visit 'https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSNotificationCenter_Class/#//apple_ref/occ/instm/NSNotificationCenter/addObserver:selector:name:object:'
   - **notificationName** - _String_  
     A string containing the name of the notification.
   - **onReceiveCallback** - _Function_(notification _NSNotification_)  
     A callback function that will be called each time the observer receives a notification.
   - _**return**_ - _Object_
 - **removeNotificationObserver(** observer _Object_, notificationName _String_ **)**  
     Removes the observer for the specified notification from the default notification center.
For more information, please visit 'https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSNotificationCenter_Class/#//apple_ref/occ/instm/NSNotificationCenter/addObserver:selector:name:object:'
   - **observer** - _Object_  
     The observer that was returned from the addNotificationObserver method.
   - **notificationName** - _String_  
     A string containing the name of the notification.