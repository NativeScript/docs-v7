---
nav-title: "Class ui/layouts/grid-layout.GridLayout"
title: "Class ui/layouts/grid-layout.GridLayout"
description: "Class ui/layouts/grid-layout.GridLayout"
---
## Class: "ui/layouts/grid-layout".GridLayout  
_Inherits:_ [_Layout_](../../../ui/layouts/layout/Layout.md)  
Defines a rectangular layout area that consists of columns and rows.

##### Static Functions
 - **getColumn(** view [_View_](../../../ui/core/view/View.md) **)** _Number_  
     Gets the value of the Column attached property from a given View.
   - **view** - [_View_](../../../ui/core/view/View.md)
   - _**return**_ - _Number_
 - **setColumn(** view [_View_](../../../ui/core/view/View.md), value _Number_ **)**  
     Sets the value of the Column attached property to a given View. 
   - **view** - [_View_](../../../ui/core/view/View.md)
   - **value** - _Number_
 - **getColumnSpan(** view [_View_](../../../ui/core/view/View.md) **)** _Number_  
     Gets the value of the ColumnSpan attached property from a given View.
   - **view** - [_View_](../../../ui/core/view/View.md)
   - _**return**_ - _Number_
 - **setColumnSpan(** view [_View_](../../../ui/core/view/View.md), value _Number_ **)**  
     Sets the value of the ColumnSpan attached property to a given View. 
   - **view** - [_View_](../../../ui/core/view/View.md)
   - **value** - _Number_
 - **getRow(** view [_View_](../../../ui/core/view/View.md) **)** _Number_  
     Gets the value of the Row attached property from a given View.
   - **view** - [_View_](../../../ui/core/view/View.md)
   - _**return**_ - _Number_
 - **setRow(** view [_View_](../../../ui/core/view/View.md), value _Number_ **)**  
     Sets the value of the Row attached property to a given View. 
   - **view** - [_View_](../../../ui/core/view/View.md)
   - **value** - _Number_
 - **getRowSpan(** view [_View_](../../../ui/core/view/View.md) **)** _Number_  
     Gets the value of the RowSpan attached property from a given View.
   - **view** - [_View_](../../../ui/core/view/View.md)
   - _**return**_ - _Number_
 - **setRowSpan(** view [_View_](../../../ui/core/view/View.md), value _Number_ **)**  
     Sets the value of the RowSpan attached property to a given View. 
   - **view** - [_View_](../../../ui/core/view/View.md)
   - **value** - _Number_

##### Instance Functions
 - **addColumn(** itemSpec [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md) **)**  
     Adds a column specification to a GridLayout.
   - **itemSpec** - [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md)
 - **addRow(** itemSpec [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md) **)**  
     Adds a row specification to a GridLayout.
   - **itemSpec** - [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md)
 - **removeColumn(** itemSpec [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md) **)**  
     Removes a column specification from a GridLayout.
   - **itemSpec** - [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md)
 - **removeRow(** itemSpec [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md) **)**  
     Removes a row specification from a GridLayout.
   - **itemSpec** - [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md)
 - **getColumns()** _Array_...  
     Gets array of column specifications defined on this instance of GridLayout. 
   - _**return**_ - _Array_ of [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md)
 - **getRows()** _Array_...  
     Gets array of row specifications defined on this instance of GridLayout.
   - _**return**_ - _Array_ of [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md)