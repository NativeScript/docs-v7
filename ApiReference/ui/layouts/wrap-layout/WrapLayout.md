---
nav-title: "Class ui/layouts/wrap-layout.WrapLayout"
title: "Class ui/layouts/wrap-layout.WrapLayout"
description: "Class ui/layouts/wrap-layout.WrapLayout"
---
## Class: "ui/layouts/wrap-layout".WrapLayout  
_Inherits:_ _Object_  
WrapLayout position children in rows or columns depending on orientation property
until space is filled and then wraps them on new row or column.

##### Static Properties
 - **orientationProperty** - _Object_.    
  Represents the observable property backing the orientation property of each WrapLayout instance.
 - **itemWidthProperty** - _Object_.    
  Represents the observable property backing the itemWidth property of each WrapLayout instance.
 - **itemHeightProperty** - _Object_.    
  Represents the observable property backing the itemHeight property of each WrapLayout instance.

##### Instance Properties
 - **orientation** - _String_.    
  Gets or sets the flow direction. Default value is horizontal.
If orientation is horizontal items are arranged in rows, else items are arranged in columns.
 - **itemWidth** - _Number_.    
  Gets or sets the width used to measure and layout each child.
Default value is Number.NaN which does not restrict children.
 - **itemHeight** - _Number_.    
  Gets or sets the height used to measure and layout each child.
Default value is Number.NaN which does not restrict children.