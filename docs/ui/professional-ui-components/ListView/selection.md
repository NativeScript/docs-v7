---
title: Item Selection
page_title: RadListView Item Selection | Progress NativeScript UI Documentation
description: This article gives insight how RadListView item selection works.
slug: listview-features-item-selection
tags: listview, selection, multiselect
position: 10
publish: true
previous_url: controls/listview/selection
---
# RadListView: Item Selection
{% typedoc_link classes:RadListView %} implements a mechanism for selecting or deselecting items. When using the selection mechanism, two selection modes are available:
- Single selection
- Multiple selection

{% typedoc_link classes:RadListView %} also exposes convenient API for programmatically selecting or deselecting items and acquiring the currently selected items. The following methods are exposed by {% typedoc_link classes:RadListView %} to manage selection:
- {% typedoc_link classes:RadListView,member:selectAll() %} - selects all available items in the data source
- {% typedoc_link classes:RadListView,member:deselectAll() %} - deselects all currently selected items from the data source
- {% typedoc_link classes:RadListView,member:selectItemAt(index) %} - selects the item at the specified index
- {% typedoc_link classes:RadListView,member:deselectItemAt(index) %} - deselects the item at the specified index if selected
- {% typedoc_link classes:RadListView,member:isItemSelected(item) %} - determines whether the provided item is selected
- {% typedoc_link classes:RadListView,member:getSelectedItems() %} - returns an array of the items currently selected

## Enabling Selection in RadListView
To enable the selection mechanism for {% typedoc_link classes:RadListView %} you need to use the {% typedoc_link classes:RadListView,member:selectionBehavior %} property and set it to one of the following values:
- {% typedoc_link enums:ListViewSelectionBehavior,member:None %} - items cannot be selected
- {% typedoc_link enums:ListViewSelectionBehavior,member:Press %} - items are selected on simple press/tap
- {% typedoc_link enums:ListViewSelectionBehavior,member:LongPress %} - items are selected by pressing and holding them

Additionally, to enable **multiple selection** you need to use the {% typedoc_link classes:RadListView,member:multipleSelection %} property:

#### __Example 1: Enabling multiple selection on RadListView in XML:__
<snippet id='listview-multiple-selection-xml'/>

## Handling Selection Events
To notify you when the selection state of an item is changed, {% typedoc_link classes:RadListView %} exposes the following events:
- {% typedoc_link classes:RadListView,member:itemSelecting %} - fired before an item is selected. Can be used to cancel the operation
- {% typedoc_link classes:RadListView,member:itemSelected %} - fired after an item is successfully selected. At this point the item is already in the selected items array returned by the {% typedoc_link classes:RadListView,member:getSelectedItems() %} method
- {% typedoc_link classes:RadListView,member:itemDeselecting %} - fired before an item is deselected. Can be used to cancel the operation
- {% typedoc_link classes:RadListView,member:itemDeselected %} - fired after an item has been successfully deselected. At this point the item is not part of the selected items array returned by the {% typedoc_link classes:RadListView,member:getSelectedItems() %} method.

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Selection Example](https://github.com/telerik/nativescript-ui-samples/tree/master/listview/app/examples/listview-selection)
