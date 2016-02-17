---
nav-title: "Class ui/editable-text-base.EditableTextBase"
title: "Class ui/editable-text-base.EditableTextBase"
description: "Class ui/editable-text-base.EditableTextBase"
---
## Class: "ui/editable-text-base".EditableTextBase  
_Inherits:_ [_TextBase_](../../ui/text-base/TextBase.md)  
Represents the base class for all editable text views.

##### Static Properties
 - **keyboardTypeProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **returnKeyTypeProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **editableProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **updateTextTriggerProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **autocapitalizationTypeProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **autocorrectProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).

##### Instance Properties
 - **keyboardType** - _String_.    
  Gets or sets the soft keyboard type. Possible values are contained in the [KeyboardType enumeration](../enums/KeyboardType/README.md).
 - **returnKeyType** - _String_.    
  Gets or sets the soft keyboard return key flavor. Possible values are contained in the [ReturnKeyType enumeration](../enums/ReturnKeyType/README.md).
 - **editable** - _Boolean_.    
  Gets or sets whether the instance is editable.
 - **updateTextTrigger** - _String_.    
  Gets or sets a value indicating when the text property will be updated. 
Possible values are contained in the [UpdateTextTrigger enumeration](../enums/UpdateTextTrigger/README.md).
 - **autocapitalizationType** - _String_.    
  Gets or sets the autocapitalization type. Possible values are contained in the [AutocapitalizationType enumeration](../enums/AutocapitalizationType/README.md).
 - **autocorrect** - _Boolean_.    
  Enables or disables autocorrection.
 - **hint** - _String_.    
  Gets or sets the placeholder text.

##### Instance Functions
 - **dismissSoftInput()**  
     Hides the soft input method, ususally a soft keyboard.