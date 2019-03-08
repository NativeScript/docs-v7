---
title: Item Selection
page_title: RadListView Item selection | Progress NativeScript UI Documentation
description: This article gives insight how RadListView item selection works in Angular context.
slug: listview-features-item-selection-angular
tags: listview, selection, multipleselection, angular, nativescript, professional, ui
position: 10
publish: true
---

# RadListView Item Selection
The Item Selection feature allows the end users to select items. A couple of selection modes are available, as well as events which are fired when the selection state of an item changes.

The value of the {% typedoc_link classes:RadListView,member:selectionBehavior %} property determines how the item selection works. It accepts the values from the {% typedoc_link enums:ListViewSelectionBehavior %} enumeration:
- {% typedoc_link enums:ListViewSelectionBehavior,member:None %} - items cannot be selected
- {% typedoc_link enums:ListViewSelectionBehavior,member:Press %} - items are selected by tapping on them
- {% typedoc_link enums:ListViewSelectionBehavior,member:LongPress %} - items are selected by holding them

Additionally, the value of the {% typedoc_link classes:RadListView,member:multipleSelection %} property determines which selection mode will be used. The available options are:
- _multiple selection mode_ - allows for selecting multiple items. `RadListView` keeps track of which items are selected and exposes them through a `getSelectedItems()` method. Multiple selection is enabled by setting the `multipleSelection` property to `true`.
- _single selection mode_ - only one item can be selected at a time. This mode is enabled by setting the `multipleSelection` property to `false`.

## Selection Events
To notify you when the selection state of an item is changed, `RadListView` exposes the following events:
- `itemSelecting` - fired before an item is selected. Can be used to cancel the operation
- `itemSelected` - fired after an item is successfully selected. At this point the item is already in the selected items array returned by the `getSelectedItems()` method
- `itemDeselecting` - fired before an item is deselected. Can be used to cancel the operation
- `itemDeselected` - fired after an item has been successfully deselected. At this point the item is not part of the selected items array returned by the `getSelectedItems()` method.

## Example
The following snippets demonstrate how item selection is used. 

<snippet id='angular-listview-selection'/>

<snippet id='angular-listview-selection-component'/>

