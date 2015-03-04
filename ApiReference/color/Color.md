---
nav-title: "Class color.Color"
title: "Class color.Color"
description: "Class color.Color"
---
## Class: "color".Color  
Represents a color object. Stores all color components (alpha (opacity), red, green, blue) in a [0..255] range.

##### Static Functions
 - **equals(** value1 [_Color_](../color/Color.md), value2 [_Color_](../color/Color.md) **)** _Boolean_  
     Compares two Color instances.
   - **value1** - [_Color_](../color/Color.md)  
     A Color to compare.
   - **value2** - [_Color_](../color/Color.md)  
     A Color to compare.
   - _**return**_ - _Boolean_

##### Instance Properties
 - **a** - _Number_.    
  Gets the Alpha component (in the [0, 255] range) of this color. This is a read-only property.
 - **r** - _Number_.    
  Gets the Red component (in the [0, 255] range) of this color. This is a read-only property.
 - **g** - _Number_.    
  Gets the Green component (in the [0, 255] range) of this color. This is a read-only property.
 - **b** - _Number_.    
  Gets the Blue component (in the [0, 255] range) of this color. This is a read-only property.
 - **hex** - _String_.    
  Gets the Hexadecimal string representation of this color. This is a read-only property.
 - **argb** - _Number_.    
  Gets the Argb Number representation of this color where each 8 bits represent a single color component. This is a read-only property.
 - **name** - _String_.    
  Gets the known name of this instance. Defined only if it has been constructed from a known color name - e.g. "red". This is a read-only property.
 - **android** - _Number_.    
  Gets the android-specific integer value representation. Same as the Argb one. This is a read-only property.
 - **ios** - _UIColor_.    
  Gets the iOS-specific UIColor value representation. This is a read-only property.

##### Instance Functions
 - **equals(** value [_Color_](../color/Color.md) **)** _Boolean_  
     Specifies whether this Color is equal to the Color parameter.
   - **value** - [_Color_](../color/Color.md)  
     The Color to test.
   - _**return**_ - _Boolean_