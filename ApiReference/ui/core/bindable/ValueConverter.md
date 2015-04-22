---
nav-title: "Object ui/core/bindable.ValueConverter"
title: "Object ui/core/bindable.ValueConverter"
description: "Object ui/core/bindable.ValueConverter"
---
## Object: "ui/core/bindable".ValueConverter  
An interface which defines methods need to create binding value converter.

##### Properties
 - **toModel** - _Function_(params Array of _Object_) _Object_.    
  A method that will be executed when a value (of the binding property) should be converted to the observable model.
For example: user types in a text field, but our business logic requires to store data in a different manner (e.g. in lower case).
 - **toView** - _Function_(params Array of _Object_) _Object_.    
  A method that will be executed when a value should be converted to the UI view. For example we have a date object which should be displayed to the end user in a specific date format.