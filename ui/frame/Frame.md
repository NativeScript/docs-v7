---
nav-title: "Class ui/frame.Frame"
title: "Class ui/frame.Frame"
description: "Class ui/frame.Frame"
---
## Class: "ui/frame".Frame  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents the logical View unit that is responsible for navigation withing an application.
Typically an application will have a Frame object at a root level.
Nested frames are supported, enabling hierarchical navigation scenarios.

##### Static Properties
 - **defaultAnimatedNavigation** - _Boolean_.    
  Gets or sets if navigation transitions should be animated globally.

##### Instance Properties
 - **backStack** - _Array_ of [_NavigationEntry_](../../ui/frame/NavigationEntry.md).    
  Gets the back stack of this instance.
 - **currentPage** - [_Page_](../../ui/page/Page.md).    
  Gets the Page instance the Frame is currently navigated to.
 - **currentEntry** - [_NavigationEntry_](../../ui/frame/NavigationEntry.md).    
  Gets the NavigationEntry instance the Frame is currently navigated to.
 - **animated** - _Boolean_.    
  Gets or sets if navigation transitions should be animated.
 - **android** - [_AndroidFrame_](../../ui/frame/AndroidFrame.md).    
  Gets the AndroidFrame object that represents the Android-specific APIs for this Frame. Valid when running on Android OS.
 - **ios** - [_iOSFrame_](../../ui/frame/iOSFrame.md).    
  Gets the iOSFrame object that represents the iOS-specific APIs for this Frame. Valid when running on iOS.

##### Instance Functions
 - **goBack()**  
     Navigates to the previous entry (if any) in the back stack.
 - **canGoBack()** _Boolean_  
     Checks whether the goBack operation is available.
   - _**return**_ - _Boolean_
 - **navigate(** pageModuleName _String_ **)**  
     Navigates to a Page instance as described by the module name. 
This method will require the module and will check for a Page property in the exports of the module.
   - **pageModuleName** - _String_  
     The name of the module to require.
 - **navigate(** page [_Page_](../../ui/page/Page.md) **)**  
     Navigates to the specified Page instance.
   - **page** - [_Page_](../../ui/page/Page.md)  
     The Page to navigate to.
 - **navigate(** create _Function_... **)**  
     Creates a new Page instance using the provided callback and navigates to that Page.
   - **create** - _Function_() [_Page_](../../ui/page/Page.md)  
     The function to be used to create the new Page instance.
 - **navigate(** entry [_NavigationEntry_](../../ui/frame/NavigationEntry.md) **)**  
     Navigates to a Page resolved by the provided NavigationEntry object.
Since there are several ways to specify a Page instance through an entry, there is a resolution priority:
    1. entry.page
    2. entry.moduleName
    3. entry.create()
   - **entry** - [_NavigationEntry_](../../ui/frame/NavigationEntry.md)  
     The NavigationEntry instance.
 - **_processNavigationStack(** page [_Page_](../../ui/page/Page.md) **)**
   - **page** - [_Page_](../../ui/page/Page.md)