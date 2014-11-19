---
nav-title: "Class ui/frame"
title: "Class ui/frame"
description: "Class ui/frame"
---
# Module: "ui/frame"

``` JavaScript
// To import the "ui/frame" module:
var uiframe = require("ui/frame");
```

Class | Description
------|------------
[Frame](../../ui/frame/Frame.md) | Represents the logical View unit that is responsible for navigation withing an application.
Typically an application will have a Frame object at a root level.
Nested frames are supported, enabling hierarchical navigation scenarios.

Object | Description
------|------------
[NavigationEntry](../../ui/frame/NavigationEntry.md) | Represents an entry in the back stack of a Frame object.
[AndroidOptionEventData](../../ui/frame/AndroidOptionEventData.md) | Represents the data passed to the knownEvents.android.optionSelected event. 
This event is raised by the Android OS when an option in the Activity's action bar has been selected.
[AndroidFrame](../../ui/frame/AndroidFrame.md) | Represents the Android-specific Frame object, aggregated within the common Frame one.
In Android there are two types of navigation - using new Activity instances or using Fragments within the main Activity.
To start a new Activity, a new Frame instance should be created and navigated to the desired Page.
[iOSFrame](../../ui/frame/iOSFrame.md) | Represents the iOS-specific Frame object, aggregated within the common Frame one.
In iOS the native controller, associated with a Frame object is UINavigationController.
The navigation controller will automatically hide/show its navigation bar depending on the back stack of the Frame.

Namespace | Description
------|------------
[knownEvents](../../ui/frame/knownEvents/) | Encapsulates the events raised by the Frame object.

##### Functions
 - **topmost()** [_Frame_](../../ui/frame/Frame.md)  
     Gets the topmost frame in the frames stack. An application will typically has one frame instance. Multiple frames handle nested (hierarchical) navigation scenarios.
   - _**return**_ - [_Frame_](../../ui/frame/Frame.md)
 - **goBack()**  
     Navigates back using the navigation hierarchy (if any). Updates the Frame stack as needed.
This method will start from the topmost Frame and will recursively search for an instance that has the canGoBack operation available.
 - **stack()** _Array_...  
     Gets the frames stack.
   - _**return**_ - _Array_ of [_Frame_](../../ui/frame/Frame.md)