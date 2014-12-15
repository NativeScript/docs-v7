---
nav-title: "Class text/span.Span"
title: "Class text/span.Span"
description: "Class text/span.Span"
---
## Class: "text/span".Span  
_Inherits:_ [_Bindable_](../../ui/core/bindable/Bindable.md)  
A class used to create a single part of formatted string with a common text properties.

##### Instance Properties
 - **fontFamily** - _String_.    
  Gets or sets the font family of the span.
 - **fontSize** - _Number_.    
  Gets or sets the font size of the span.
 - **fontAttributes** - _Number_.    
  Gets or sets the font attributes of the span.
It could be set to more than one value e.g. (Bold | Italic).
 - **foregroundColor** - [_Color_](../../color/Color.md).    
  Gets or sets the font foreground color of the span.
 - **backgroundColor** - [_Color_](../../color/Color.md).    
  Gets or sets the font background color of the span.
 - **underline** - _Number_.    
  Gets or sets underline for the span.
 - **strikethrough** - _Number_.    
  Gets or sets strikethrough for the span.
 - **spanModifiers** - _Array_ of _Object_.    
  A collection of modifiers build upon all text related properties.
 - **text** - _String_.    
  Gets or sets the text for the span.

##### Instance Functions
 - **updateSpanModifiers()**  
     Updates all span modifiers according to current values of all text related properties.
 - **beginEdit()**  
     Initializes a process of updating a span (text related property(s)).
 - **endEdit()**  
     Ends the process previously initiated by beginEdit and updates the span modifiers collection.