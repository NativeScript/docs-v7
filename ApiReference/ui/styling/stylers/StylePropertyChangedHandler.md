---
nav-title: "Class ui/stylingstylers.StylePropertyChangedHandler"
title: "Class ui/stylingstylers.StylePropertyChangedHandler"
description: "Class ui/stylingstylers.StylePropertyChangedHandler"
---
## Class: "ui/styling"stylers.StylePropertyChangedHandler  
Represents an object that defines how style property should be applied on a native view/widget.
It holds 3 callbacks:
  1. applyCallback - called when a property value should be applied onto the native view/widget.
  2. resetCallback - called when the property value is cleared to restore the native view/widget in its original state. The callback
also receives as a parameter the value stored by the getNativeValue callback.
  3. getNativeValue - called when a style property is set for the first time to get the default native value for this property
in the native view/widget. This value will be passed to resetCallback in case the property value is cleared. Optional.