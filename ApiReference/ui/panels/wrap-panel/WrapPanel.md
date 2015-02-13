---
nav-title: "Class ui/panels/wrap-panel.WrapPanel"
title: "Class ui/panels/wrap-panel.WrapPanel"
description: "Class ui/panels/wrap-panel.WrapPanel"
---
## Class: "ui/panels/wrap-panel".WrapPanel  
_Inherits:_ [_Panel_](../../../ui/panels/panel/Panel.md)  
WrapPanel is used to place child elements at sequential positions from left to the right 
and then "wrap" the lines of children from top to the bottom. 
All children get the layout partition of size ItemWidth x ItemHeight.

##### Instance Properties
 - **orientation** - _String_.    
  Specifies dimension of children positioning in absence of wrapping.
Wrapping occurs in orthogonal direction. For example, if Orientation is Horizontal, 
the items try to form horizontal rows first and if needed are wrapped and form vertical stack of rows.
If Orientation is Vertical, items first positioned in a vertical column, and if there is
not enough space - wrapping creates additional columns in horizontal dimension.
 - **itemWidth** - _Number_.    
  The itemWidth and itemHeight properties specify the size of all items in the WrapPanel. 
Note that children of WrapPanel may have their own width/height properties set - the itemWidth/itemHeight 
specifies the size of "layout partition" reserved by WrapPanel for the child.
If this property is not set (or set to undefined in code) - the size of layout
partition is equal to desiredSize of the child element.
 - **itemHeight** - _Number_.    
  The itemWidth and itemHeight properties specify the size of all items in the WrapPanel. 
Note that children of WrapPanel may have their own width/height properties set - the itemWidth/itemHeight 
specifies the size of "layout partition" reserved by WrapPanel for the child.
If this property is not set (or set to undefined in code) - the size of layout
partition is equal to desiredSize of the child element.