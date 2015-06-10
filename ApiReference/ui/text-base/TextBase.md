---
nav-title: "Class ui/text-base.TextBase"
title: "Class ui/text-base.TextBase"
description: "Class ui/text-base.TextBase"
---
## Class: "ui/text-base".TextBase  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents the base class for all text views.

##### Static Properties
 - **textProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Dependency property used to support binding operations for the text of the current text-base instance.
 - **formattedTextProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Dependency property used to support binding operations for the formatted text of the current text-base instance.

##### Instance Properties
 - **text** - _String_.    
  Gets or sets the text.
 - **textAlignment** - _String_.    
  Gets or sets text-alignment style property.
 - **fontSize** - _Number_.    
  Gets or sets font-size style property.
 - **formattedText** - [_FormattedString_](../../text/formatted-string/FormattedString.md).    
  Gets or sets a formatted string.

##### Instance Functions
 - **_onTextPropertyChanged(** data [_PropertyChangeData_](../../ui/core/dependency-observable/PropertyChangeData.md) **)**
   - **data** - [_PropertyChangeData_](../../ui/core/dependency-observable/PropertyChangeData.md)