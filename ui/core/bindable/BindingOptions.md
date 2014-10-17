---
nav-title: "Class ui/core/bindable.BindingOptions"
title: "Class ui/core/bindable.BindingOptions"
description: "Class ui/core/bindable.BindingOptions"
---
## Object: "ui/core/bindable".BindingOptions  
The options object used in the Bindable.bind method.

##### Properties
 - **sourceProperty** - _String_.    
  The property name of the source object (typically the ViewModel) to bind to.
 - **targetProperty** - _String_.    
  The property name of the target object (that is the Bindable instance) to bind the source property to.
 - **twoWay** - _(optional)_ - _Boolean_.    
  True to establish a two-way binding, false otherwise. A two-way binding will synchronize both the source and the target property values regardless of which one initiated the change.