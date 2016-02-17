---
nav-title: "Class text/formatted-string.FormattedString"
title: "Class text/formatted-string.FormattedString"
description: "Class text/formatted-string.FormattedString"
---
## Class: "text/formatted-string".FormattedString  
_Inherits:_ [_Observable_](../../data/observable/Observable.md)  
_Conform to:_
 - [_AddArrayFromBuilder_](../../ui/core/view/AddArrayFromBuilder.md)
 - [_AddChildFromBuilder_](../../ui/core/view/AddChildFromBuilder.md)  
A class used to create a formatted (rich text) string.

##### Static Functions
 - **addFormattedStringToView(** view [_FormattedStringView_](../../text/formatted-string/FormattedStringView.md), name _String_, value _Object_ **)**  
     A static method used to add child elements of the FormattedString class to a View declared in xml.
   - **view** - [_FormattedStringView_](../../text/formatted-string/FormattedStringView.md)
   - **name** - _String_
   - **value** - _Object_

##### Instance Properties
 - **spans** - [_ObservableArray_](../../data/observable-array/ObservableArray.md) of [_Span_](../../text/span/Span.md).    
  An observable collection of Span objects used to define common text properties.
 - **fontFamily** - _String_.    
  Gets or sets the font family which will be used for all spans that not have a specific value for font family.
 - **fontSize** - _Number_.    
  Gets or sets the font size which will be used for all spans that not have a specific value for font size.
 - **fontAttributes** - _Number_.    
  Gets or sets the font attributes which will be used for all spans that not have a specific value for font attributes.
 - **foregroundColor** - [_Color_](../../color/Color.md).    
  Gets or sets the font foreground color which will be used for all spans that not have a specific value for font foreground color.
 - **backgroundColor** - [_Color_](../../color/Color.md).    
  Gets or sets the font background color which will be used for all spans that not have a specific value for font background color.
 - **underline** - _Number_.    
  Gets or sets underline which will be used for all spans that not have a specific value for underline.
 - **strikethrough** - _Number_.    
  Gets or sets strikethrough which will be used for all spans that not have a specific value for strikethrough.
 - **parent** - [_View_](../../ui/core/view/View.md).    
  Gets the parent view of the formatted string.

##### Instance Functions
 - **toString()** _String_  
     A human readable representation of the formatted string.
   - _**return**_ - _String_
 - **updateSpansBindingContext(** newBindingContext _Object_ **)**  
     Propogates binding context through the spans collection.
   - **newBindingContext** - _Object_  
     The value of the newly set binding context.
 - **_addArrayFromBuilder(** name _String_, value __... **)**  
     A function that is called when an array declaration is found in xml.
   - **name** - _String_  
     - Name of the array.
   - **value** - __ of _Object_  
     - The actual value of the array.
 - **_addChildFromBuilder(** name _String_, value _Object_ **)**  
     Called for every child element declared in xml.
   - **name** - _String_  
     - Name of the element.
   - **value** - _Object_  
     - Value of the element.