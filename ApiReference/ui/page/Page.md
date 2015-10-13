---
nav-title: "Class ui/page.Page"
title: "Class ui/page.Page"
description: "Class ui/page.Page"
---
## Class: "ui/page".Page  
_Inherits:_ [_ContentView_](../../ui/content-view/ContentView.md)  
Represents a logical unit for navigation (inside Frame).

##### Static Properties
 - **backgroundSpanUnderStatusBarProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Dependency property that specify if page background should span under status bar.
 - **actionBarHiddenProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Dependency property used to hide the Navigation Bar in iOS and the Action Bar in Android.
 - **shownModallyEvent** - _String_.    
  String value used when hooking to shownModally event.
 - **navigatingToEvent** - _String_.    
  String value used when hooking to navigatingTo event.
 - **navigatedToEvent** - _String_.    
  String value used when hooking to navigatedTo event.
 - **navigatingFromEvent** - _String_.    
  String value used when hooking to navigatingFrom event.
 - **navigatedFromEvent** - _String_.    
  String value used when hooking to navigatedFrom event.

##### Instance Properties
 - **backgroundSpanUnderStatusBar** - _Boolean_.    
  Gets or sets whether page background spans under status bar.
 - **actionBarHidden** - _Boolean_.    
  Used to hide the Navigation Bar in iOS and the Action Bar in Android.
 - **css** - _String_.    
  A valid css string which will be applied for all nested UI components (based on css rules).
 - **navigationContext** - _Object_.    
  A property that is used to pass a data from another page (while navigate to).
 - **frame** - [_Frame_](../../ui/frame/Frame.md).    
  Gets the Frame object controlling this instance.
 - **actionBar** - [_ActionBar_](../../ui/action-bar/ActionBar.md).    
  Gets the ActionBar for this page.

##### Instance Functions
 - **addCss(** cssString _String_ **)**  
     Adds a new values to current css.
   - **cssString** - _String_  
     - A valid css which will be added to current css. 
 - **addCssFile(** cssFileName _String_ **)**  
     Adds the content of the file to the current css.
   - **cssFileName** - _String_  
     - A valid file name (from the application root) which contains a valid css.
 - **on(** eventNames _String_, callback _Function_..., thisArg? _Object_ **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))  
     - Callback function which will be executed when event is raised.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when navigation to the page has started.
   - **event**
   - **callback** - _Function_(args [_NavigatedData_](../../ui/page/NavigatedData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when navigation to the page has finished.
   - **event**
   - **callback** - _Function_(args [_NavigatedData_](../../ui/page/NavigatedData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when navigation from the page has started.
   - **event**
   - **callback** - _Function_(args [_NavigatedData_](../../ui/page/NavigatedData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when navigation from the page has finished.
   - **event**
   - **callback** - _Function_(args [_NavigatedData_](../../ui/page/NavigatedData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when the page is shown as a modal dialog.
   - **event**
   - **callback** - _Function_(args [_ShownModallyData_](../../ui/page/ShownModallyData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **showModal(** moduleName _String_, context _Object_, closeCallback _Object_, fullscreen? _Boolean_ **)**  
     Shows the page contained in moduleName as a modal view.
   - **moduleName** - _String_  
     - The name of the page module to load starting from the application root.
   - **context** - _Object_  
     - Any context you want to pass to the modally shown page. This same context will be available in the arguments of the Page.shownModally event handler.
   - **closeCallback** - _Object_  
     - A function that will be called when the page is closed. Any arguments provided when calling ShownModallyData.closeCallback will be available here.
   - **fullscreen** - _(optional)_ - _Boolean_  
     - An optional parameter specifying whether to show the modal page in full-screen mode.
 - **closeModal()**  
     Closes the current modal dialog that this page is showing.
 - **onNavigatingTo(** context _Object_ **)**  
     A method called before navigating to the page.
   - **context** - _Object_  
     - The data passed to the page through the NavigationEntry.context property.
 - **onNavigatedTo()**  
     A method called after navigated to the page.
 - **onNavigatingFrom()**  
     A method called before navigating from the page.
 - **onNavigatedFrom(** isBackNavigation _Boolean_ **)**  
     A method called after navigated from the page.
   - **isBackNavigation** - _Boolean_  
     - True if the Page is being navigated from using the Frame.goBack() method, false otherwise.
 - **_getStyleScope()** _Object_
   - _**return**_ - _Object_