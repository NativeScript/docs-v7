---
nav-title: "Class text/formatted-string.FormattedString"
title: "Class text/formatted-string.FormattedString"
description: "Class text/formatted-string.FormattedString"
---
## Class: "text/formatted-string".FormattedString  
_Inherits:_ [_Observable_](../../data/observable/Observable.md)  
A class used to create a formatted (rich text) string.

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

##### Instance Functions
 - **toString()** _String_  
     A human readable representation of the formatted string.
   - _**return**_ - _String_
 - **updateSpansBindingContext(** newBindingContext _Object_ **)**  
     Propogates binding context through the spans collection.
   - **newBindingContext** - _Object_  
     The value of the newly set binding context.