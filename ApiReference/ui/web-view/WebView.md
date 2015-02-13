---
nav-title: "Class ui/web-view.WebView"
title: "Class ui/web-view.WebView"
description: "Class ui/web-view.WebView"
---
## Class: "ui/web-view".WebView  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a standard WebView widget.

##### Instance Properties
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/webkit/WebView.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _UIWebView_.    
  Gets the native [UIWebView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/) that represents the user interface for this component. Valid only when running on iOS.
 - **url** - _String_.    
  Gets or sets the url displayed by this instance.
 - **canGoBack** - _Boolean_.    
  Gets a value indicating whether the WebView can navigate back.
 - **canGoForward** - _Boolean_.    
  Gets a value indicating whether the WebView can navigate forward.

##### Instance Functions
 - **goBack()**  
     Navigates back.
 - **goForward()**  
     Navigates forward.
 - **reload()**  
     Reload the current url.
 - **on(** event _String_, callback _Function_... **)**
   - **event** - _String_
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))
 - **on(** event , callback _Function_... **)**
   - **event**
   - **callback** - _Function_(args [_FinishedEventData_](../../ui/web-view/FinishedEventData.md))