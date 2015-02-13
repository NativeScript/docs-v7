---
nav-title: "Class ui/core/dependency-observable.PropertyEntry"
title: "Class ui/core/dependency-observable.PropertyEntry"
description: "Class ui/core/dependency-observable.PropertyEntry"
---
## Class: "ui/core/dependency-observable".PropertyEntry  
Represents an Object that is used to back a value for a Property in a DependencyObservable Object instance.

##### Instance Properties
 - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Gets the Property instance this entry is associated with. This is a read-only property.
 - **effectiveValue** - _Object_.    
  Gets the effective value of this entry.
The value is composed depending on the current valueSource value, using the following priority:
    1. VisualState
    2. Local
    3. Css
    4. Inherited
    5. Default
 - **valueSource** - _Number_.    
  Gets the source of the current effective value for this entry. The available options for this property are defined in the ValueSource namespace.
 - **localValue** - _Object_.    
  Gets or sets the local value for this entry. This will trigger re-evaluation of the current effective value.
 - **inheritedValue** - _Object_.    
  Gets or sets the inherited value for this entry. This will trigger re-evaluation of the current effective value.
 - **cssValue** - _Object_.    
  Gets or sets the css value for this entry. This will trigger re-evaluation of the current effective value.
 - **visualStateValue** - _Object_.    
  Gets or sets the visual-state value for this entry. This will trigger re-evaluation of the current effective value.

##### Instance Functions
 - **resetValue()**  
     Resets effective value and all the modifiers available for this entry.