---
title: Item Reorder
page_title: RadListView Item Reorder | Progress NativeScript UI Documentation
description: This article discusses the item reorder feature of RadListView.
slug: listview-features-item-reorder
tags: radlistview, reorder
position: 7
publish: true
previous_url: controls/listview/item-reorder
---
# RadListView: Item Reorder
Reordering items in a list is a common scenario in mobile apps. For example, a list view visualizing tasks can allow reordering the tasks to specify their priority. RadListView allows you to enable this functionality by setting a single property.

## Enabling Item Reorder
To enable the item-reorder function in your RadListView, simply set the {% typedoc_link classes:RadListView,member:itemReorder %} property as shown below. Additionally, you can subscribe for the {% typedoc_link classes:RadListView,member:itemReorderedEvent %} event to listen for reorder events:

#### __Example 1: Enabling Item Reorder on RadListView:__
<snippet id='listview-item-reorder-xml'/>

### Defining Reorder Mode
{% typedoc_link classes:RadListView %} supports two reorder modes:

- {% typedoc_link enums:ListViewReorderMode,member:HoldAndDrag %} - items are reordered by holding and dragging them
- {% typedoc_link enums:ListViewReorderMode,member:Drag %} - items are reordered by simply dragging them

The default reorder mode is {% typedoc_link enums:ListViewReorderMode,member:HoldAndDrag %}. To activate one of the available reorder modes set the {% typedoc_link classes:RadListView,member:reorderMode %} property to the corresponding value.

### Defining a Reorder Handle
When the {% typedoc_link enums:ListViewReorderMode,member:Drag %} reorder mode is activated {% typedoc_link classes:RadListView %} behaves as follows:

- **iOS**: a reorder handle is displayed at the right side of the item. Dragging the item by the handle will reorder it.
- **Android**: now handle is displayed. Dragging the item at any place will reorder it.

You can easily customize the reorder handle by explicitly designating which part of your {% typedoc_link classes:RadListView,member:itemTemplate %} will serve as a reorder handle. Take a look at the following XML snippet:

#### __Example 2: Defining a Reorder Handle in your template:__
<snippet id='listview-item-reorder-handle-xml'/>

As you can see a special {% typedoc_link classes:ReorderHandle %} element is used which instructs {% typedoc_link classes:RadListView %} which part of the template should be used as a reorder handle. The {% typedoc_link classes:ReorderHandle %} element is a regular {N} view so you can use all familiar properties to adjust its layout and appearance. Here, an `Image` element is put inside the {% typedoc_link classes:ReorderHandle %}.
The following pictures demonstrate how {% typedoc_link classes:RadListView %} looks like in this case:

#### __Figure 1: Item Reorder with a custom reorder handle in action:__
![RadListView: Reorder with a handle](../../img/ns_ui/list-view-item-reorder_2.png "Android")  ![RadListView: Reorder with a handle](../../img/ns_ui/list-view-item-reorder_3.png "iOS")

## Handling the Item Reorder Events
{% typedoc_link classes:RadListView %} exposes two events related to the item reorder functionality:

- {% typedoc_link classes:RadListView,member:itemReorderStartingEvent %} - fired before an item is reordered. Exposes an instance of the {% typedoc_link classes:ListViewEventData %} class which contains the index of the item being reordered. Setting the {% typedoc_link classes:ListViewEventData,member:returnValue %} property of this instance to `false` can be used to cancel the reordering procedure
- {% typedoc_link classes:RadListView,member:itemReorderStartedEvent %} - fired when the reordering is about to start. No indices are changed at this point
- {% typedoc_link classes:RadListView,member:itemReorderedEvent %} - fired after an item has been reordered. Indices are now updated.

The {% typedoc_link classes:RadListView,member:itemReorderStartedEvent %} event exposes an instance of the {% typedoc_link classes:ListViewEventData %} class which you can use to obtain the index of the item about to be reordered.

RadListView fires the {% typedoc_link classes:RadListView,member:itemReorderedEvent %} event once an item has been reordered. The event supplies you with a {% typedoc_link classes:ListViewEventData %} instance which `data` property points to a `ListViewItemReorderData` {% typedoc_link classes:ListViewItemReorderData %} object. It exposes two properties giving you specific information about the reorder operation:

- {% typedoc_link classes:ListViewItemReorderData,member:targetIndex %} - indicates the destination of the reordered item
- {% typedoc_link classes:ListViewItemReorderData,member:targetGroupIndex %} - indicates the target data group of the reordered item if present

The following code snippet demonstrates and example of a {% typedoc_link classes:RadListView,member:itemReorderedEvent %} handler:

#### __Example 3: Handling item reorder events:__
<snippet id='listview-item-reorder-handler'/>

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Item Reorder Example](https://github.com/telerik/nativescript-ui-samples/tree/master/listview/app/examples/item-reorder)

