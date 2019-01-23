---
title: Item Reorder
page_title: RadListView Item reorder | Progress NativeScript UI Documentation
description: This article discusses the item reorder feature of RadListView and it is used with Angular.
slug: listview-features-item-reorder-angular
tags: radlistview, reorder, angular
position: 7
publish: true
---

# Overview
The item reorder feature allows the end users to change the position of an item by dragging it. This is particularly useful in scenarios where lists of items with priorities are created. Reordering an item is used to change the item's priority. The Item Reorder feature is enabled by setting the `itemReorder` property to `true`.

You can take a look at the following article about the Item Reorder functionality: [**Item Reorder**]({% slug listview-features-item-reorder %})

# Example
The following simple scenario demonstrates how the item-reorder feature is used. A handler for the `itemReordered` event is provided which prints out the indices of the item being reordered.

<snippet id='angular-listview-reorder'/>

<snippet id='angular-listview-reorder-component'/>
