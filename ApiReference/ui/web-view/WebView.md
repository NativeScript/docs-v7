---
nav-title: "Class ui/web-view.WebView"
title: "Class ui/web-view.WebView"
description: "Class ui/web-view.WebView"
---
## Class: "ui/web-view".WebView  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a standard WebView widget.

##### Static Properties
 - **loadStartedEvent** - _String_.    
  String value used when hooking to loadStarted event.
 - **loadFinishedEvent** - _String_.    
  String value used when hooking to loadFinished event.
 - **urlProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the Url property of each WebView instance.

##### Instance Properties
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/webkit/WebView.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _Object_.    
  Gets the native [UIWebView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/) that represents the user interface for this component. Valid only when running on iOS.
 - **url** - _String_.    
  [Obsolete. Please use src instead!] Gets or sets the url displayed by this instance.
 - **src** - _String_.    
  Gets or sets the url, local file path or HTML string.
 - **canGoBack** - _Boolean_.    
  Gets a value indicating whether the WebView can navigate back.
 - **canGoForward** - _Boolean_.    
  Gets a value indicating whether the WebView can navigate forward.

##### Instance Functions
 - **stopLoading()**  
     Stops loading the current content (if any).
 - **goBack()**  
     Navigates back.
 - **goForward()**  
     Navigates forward.
 - **reload()**  
     Reload the current url.
 - **on(** eventNames _String_, callback _Function_..., thisArg? _Object_ **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))  
     - Callback function which will be executed when event is raised.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when a loadFinished event occurs.
   - **event**
   - **callback** - _Function_(args [_LoadEventData_](../../ui/web-view/LoadEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when a loadStarted event occurs.
   - **event**
   - **callback** - _Function_(args [_LoadEventData_](../../ui/web-view/LoadEventData.md))
   - **thisArg** - _(optional)_ - _Object_