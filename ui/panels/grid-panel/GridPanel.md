---
nav-title: "Class ui/panels/grid-panel.GridPanel"
title: "Class ui/panels/grid-panel.GridPanel"
description: "Class ui/panels/grid-panel.GridPanel"
---
## Class: "ui/panels/grid-panel".GridPanel  
_Inherits:_ [_Panel_](../../../ui/panels/panel/Panel.md)  
Defines a flexible grid area that consists of columns and rows.

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
 - **addColumnDefinition(** definition [_ColumnDefinition_](../../../ui/panels/grid-panel/ColumnDefinition.md) **)**  
     Adds a ColumnDefinition element to a GridPanel.
   - **definition** - [_ColumnDefinition_](../../../ui/panels/grid-panel/ColumnDefinition.md)
 - **addRowDefinition(** definition [_RowDefinition_](../../../ui/panels/grid-panel/RowDefinition.md) **)**  
     Adds a RowDefinition element to a GridPanel.
   - **definition** - [_RowDefinition_](../../../ui/panels/grid-panel/RowDefinition.md)
 - **removeColumnDefinition(** definition [_ColumnDefinition_](../../../ui/panels/grid-panel/ColumnDefinition.md) **)** _Boolean_  
     Removes a ColumnDefinition element from a GridPanel.
   - **definition** - [_ColumnDefinition_](../../../ui/panels/grid-panel/ColumnDefinition.md)
   - _**return**_ - _Boolean_
 - **removeRowDefinition(** definition [_RowDefinition_](../../../ui/panels/grid-panel/RowDefinition.md) **)** _Boolean_  
     Removes a RowDefinition element from a GridPanel.
   - **definition** - [_RowDefinition_](../../../ui/panels/grid-panel/RowDefinition.md)
   - _**return**_ - _Boolean_
 - **getColumnDefinitions()** _Array_...  
     Gets array of ColumnDefinitions defined on this instance of GridPanel. 
   - _**return**_ - _Array_ of [_ColumnDefinition_](../../../ui/panels/grid-panel/ColumnDefinition.md)
 - **getRowDefinitions()** _Array_...  
     Gets array of RowDefinitions defined on this instance of GridPanel.
   - _**return**_ - _Array_ of [_RowDefinition_](../../../ui/panels/grid-panel/RowDefinition.md)