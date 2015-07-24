---
nav-title: "Class ui/html-view.HtmlView"
title: "Class ui/html-view.HtmlView"
description: "Class ui/html-view.HtmlView"
---
## Class: "ui/html-view".HtmlView  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a view with html content. Use this component instead WebView when you want to show just static HTML content.
[iOS support](https://developer.apple.com/library/ios/documentation/UIKit/Reference/NSAttributedString_UIKit_Additions/#//apple_ref/occ/instm/NSAttributedString/initWithData:options:documentAttributes:error:)
[android support](http://developer.android.com/reference/android/text/Html.html)

##### Static Properties
 - **htmlProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Dependency property used to support binding operations for the html of the current HtmlView instance.

##### Instance Properties
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/widget/TextView.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _UILabel_.    
  Gets the native [UILabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UILabel_Class/) that represents the user interface for this component. Valid only when running on iOS.
 - **html** - _String_.    
  Gets or sets html string for the HtmlView.