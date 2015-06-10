---
nav-title: "Class ui/repeater.Repeater"
title: "Class ui/repeater.Repeater"
description: "Class ui/repeater.Repeater"
---
## Class: "ui/repeater".Repeater  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a UI Repeater component.

##### Static Properties
 - **itemsProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the items property of each Repeater instance.
 - **itemTemplateProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the item template property of each Repeater instance.
 - **itemsLayoutProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the items layout property of each Repeater instance.

##### Instance Properties
 - **items** - _Object_.    
  Gets or set the items collection of the Repeater. 
The items property can be set to an array or an object defining length and getItem(index) method.
 - **itemTemplate** - _String_.    
  Gets or set the item template of the Repeater. 
 - **itemsLayout** - [_Layout_](../../ui/layouts/layout/Layout.md).    
  Gets or set the items layout of the Repeater. Default value is StackLayout with orientation="vertical".

##### Instance Functions
 - **refresh()**  
     Forces the Repeater to reload all its items.