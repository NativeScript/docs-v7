---
title: Item Reorder
page_title: RadListView Item reorder | Progress NativeScript UI Documentation
description: This article discusses the item reorder feature of RadListView and it is used with Vue.
slug: listview-features-item-reorder-vue
tags: radlistview, reorder, vue, nativescript, professional, ui
position: 9
publish: true
---

# RadListView Item Reorder
The item reorder feature allows the end users to change the position of an item by dragging it. This is particularly useful in scenarios where lists of items with priorities are created. Reordering an item is used to change the item's priority. The Item Reorder feature is enabled by setting the `itemReorder` property to `true`.

# Example
The following simple scenario demonstrates how the item-reorder feature is used. A handler for the `itemReordered` event is provided which prints out the indices of the item being reordered.

<snippet id='listview-itemreorder-vue'/>