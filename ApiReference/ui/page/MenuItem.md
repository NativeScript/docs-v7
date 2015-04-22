---
nav-title: "Class ui/page.MenuItem"
title: "Class ui/page.MenuItem"
description: "Class ui/page.MenuItem"
---
## Class: "ui/page".MenuItem  
_Inherits:_ [_Bindable_](../../ui/core/bindable/Bindable.md)

##### Static Properties
 - **textProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the text property.
 - **iconProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the icon property.

##### Instance Properties
 - **text** - _String_.
 - **icon** - _String_.
 - **android** - [_AndroidMenuItemOptions_](../../ui/page/AndroidMenuItemOptions.md).

##### Instance Functions
 - **on(** event _String_, callback _Function_... **)**
   - **event** - _String_
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))
 - **on(** event , callback _Function_... **)**
   - **event**
   - **callback** - _Function_(args [_EventData_](../../data/observable/EventData.md))
 - **_raiseTap()**