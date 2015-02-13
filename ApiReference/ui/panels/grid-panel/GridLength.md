---
nav-title: "Class ui/panels/grid-panel.GridLength"
title: "Class ui/panels/grid-panel.GridLength"
description: "Class ui/panels/grid-panel.GridLength"
---
## Class: "ui/panels/grid-panel".GridLength  
GridLength is the type used for various length-like properties in the system, 
that explicitely support Star unit type. For example, "Width", "Height" 
properties of ColumnDefinition and RowDefinition used by GridPanel

##### Static Properties
 - **auto** - [_GridLength_](../../../ui/panels/grid-panel/GridLength.md).    
  Returns initialized auto GridLength value.

##### Instance Properties
 - **gridUnitType** - [_GridUnitType_](../../../ui/panels/grid-panel/GridUnitType.md).    
  Returns unit type of this GridLength instance.
 - **isAbsolute** - _Boolean_.    
  Returns true if this GridLength instance holds 
an absolute (pixel) value.
 - **isAuto** - _Boolean_.    
  Returns true if this GridLength instance is 
automatic (not specified).
 - **isStar** - _Boolean_.    
  Returns true if this GridLength instance holds weighted propertion 
of available space.
 - **value** - _Number_.    
  Returns value part of this GridLength instance.