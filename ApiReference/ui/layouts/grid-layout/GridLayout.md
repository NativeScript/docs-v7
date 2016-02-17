---
nav-title: "Class ui/layouts/grid-layout.GridLayout"
title: "Class ui/layouts/grid-layout.GridLayout"
description: "Class ui/layouts/grid-layout.GridLayout"
---
## Class: "ui/layouts/grid-layout".GridLayout  
_Inherits:_ _Object_  
Defines a rectangular layout area that consists of columns and rows.

##### Static Properties
 - **columnProperty** - _Object_.    
  Represents the observable property backing the column property.
 - **columnSpanProperty** - _Object_.    
  Represents the observable property backing the columnSpan property.
 - **rowProperty** - _Object_.    
  Represents the observable property backing the row property.
 - **rowSpanProperty** - _Object_.    
  Represents the observable property backing the rowSpan property.

##### Static Functions
 - **getColumn(** view _Object_ **)** _Number_  
     Gets the value of the Column attached property from a given View.
   - **view** - _Object_
   - _**return**_ - _Number_
 - **setColumn(** view _Object_, value _Number_ **)**  
     Sets the value of the Column attached property to a given View. 
   - **view** - _Object_
   - **value** - _Number_
 - **getColumnSpan(** view _Object_ **)** _Number_  
     Gets the value of the ColumnSpan attached property from a given View.
   - **view** - _Object_
   - _**return**_ - _Number_
 - **setColumnSpan(** view _Object_, value _Number_ **)**  
     Sets the value of the ColumnSpan attached property to a given View. 
   - **view** - _Object_
   - **value** - _Number_
 - **getRow(** view _Object_ **)** _Number_  
     Gets the value of the Row attached property from a given View.
   - **view** - _Object_
   - _**return**_ - _Number_
 - **setRow(** view _Object_, value _Number_ **)**  
     Sets the value of the Row attached property to a given View. 
   - **view** - _Object_
   - **value** - _Number_
 - **getRowSpan(** view _Object_ **)** _Number_  
     Gets the value of the RowSpan attached property from a given View.
   - **view** - _Object_
   - _**return**_ - _Number_
 - **setRowSpan(** view _Object_, value _Number_ **)**  
     Sets the value of the RowSpan attached property to a given View. 
   - **view** - _Object_
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
 - **removeColumns()**  
     Removes all columns specification from a GridLayout.
 - **removeRow(** itemSpec [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md) **)**  
     Removes a row specification from a GridLayout.
   - **itemSpec** - [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md)
 - **removeRows()**  
     Removes all rows specification from a GridLayout.
 - **getColumns()** __...  
     Gets array of column specifications defined on this instance of GridLayout. 
   - _**return**_ - __ of [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md)
 - **getRows()** __...  
     Gets array of row specifications defined on this instance of GridLayout.
   - _**return**_ - __ of [_ItemSpec_](../../../ui/layouts/grid-layout/ItemSpec.md)