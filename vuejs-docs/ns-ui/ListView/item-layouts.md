---
title: Item Layouts
page_title: 'RadListView Item layouts | Progress NativeScript UI Documentation'
description: This article gives insight how different item layouts are used with RadListView.
slug: listview-features-item-layouts-vue
tags: radlistview, layouts, vue, nativescript, professional, ui
position: 4
publish: true
---

# RadListView Item Layouts
Often there are cases when you need to display your list of items in non-linear layout. For examples, you may want to have a grid of items. For that purpose, RadListView defines three types of item layouts which are fully UI virtualized and optimized for mobile. The following layout types are available:
- **Linear layout** - this is the most common layout used with a RadListView component. Items are ordered horizontally or vertically one at a time.
- **Grid layout** - this is a layout in which items are ordered in columns and rows. Depending on the scrolling orientation (vertical or horizontal), the amount of columns or rows is predefined.
- **Staggered layout** - this is a fancier version of the Grid layout where items are also ordered in rows or columns depending on the scrolling direction whereas no free spaces are preserved between neighboring items in the direction of scrolling.

## Using the `layout` property
This is the way to change the list layout. The `layout` property can have `linear`, `grid` or `staggered` values.

## Other related properties

- `orientation` - this property can have `vertical` or `horizontal` values, affecting to the scrolling direction.
- `gridSpanCount` - the columns or rows number in the current layout, depending on the scrolling direction.
- `itemHeight` and `itemWidth` - properties here for size tuning.

## Examples

The following code snippet demonstrates how to define a grid `RadListView` instance:

<snippet id='listvue-gridlayout-vue'/>

Example of staggered layout:

<snippet id='listview-staggeredlayout-vue'/>
