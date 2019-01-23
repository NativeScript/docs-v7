---
title: Item Layouts
page_title: 'RadListView Item layouts | Progress NativeScript UI Documentation'
description: This article gives insight how different item layouts are used with RadListView.
slug: listview-features-item-layouts-angular
tags: radlistview, layouts, angular
position: 5
publish: true
---

# RadListView: Item layouts
Often there are cases when you need to display your list of items in non-linear layout. For examples, you may want to have a grid of items. For that purpose, RadListView defines three types of item layouts which are fully UI virtualized and optimized for mobile. The following layout types are available:
- **Linear layout** - this is the most common layout used with a RadListView component. Items are ordered horizontally or vertically one at a time.
- **Grid layout** - this is a layout in which items are ordered in columns and rows. Depending on the scrolling orientation (vertical or horizontal), the amount of columns or rows is predefined.
- **Staggered layout** - this is a fancier version of the Grid layout where items are also ordered in rows or columns depending on the scrolling direction whereas no free spaces are preserved between neighboring items in the direction of scrolling.

## Defining a specific item layout
RadListView exposes the `listViewLayout` property which accepts objects inheriting from {% typedoc_link classes:ListViewLayoutBase %}. Currently the following classes are available:
- {% typedoc_link classes:ListViewLinearLayout %}
- {% typedoc_link classes:ListViewGridLayout %}
- {% typedoc_link classes:ListViewStaggeredLayout %}

Each layout object exposes {% typedoc_link classes:ListViewLayoutBase,member:itemHeight %} and {% typedoc_link classes:ListViewLayoutBase,member:itemWidth %} properties which can be used to explicitly define the size of the items. Note that these properties do not always work depending on the layout type currently used, as well as on the platform (Android or iOS).

### Using ListViewLinearLayout
Setting a {% typedoc_link classes:ListViewLinearLayout %} is done by declaring the **`ListViewLinearLayout`** and setting the **`tkListViewLayout`**:

<snippet id='angular-listview-item-animations-html'/>

> The {% typedoc_link classes:ListViewLayoutBase,member:itemHeight %} and {% typedoc_link classes:ListViewLayoutBase,member:itemWidth %} properties are iOS specific. If not used, items are sized dynamically depending on the data coming from the source.

> {% typedoc_link classes:ListViewLinearLayout %} exposes the {% typedoc_link classes:ListViewLinearLayout,member:dynamicItemSize %} property which, when set to `false`, makes the layout use the {% typedoc_link classes:ListViewLayoutBase,member:itemHeight %} and {% typedoc_link classes:ListViewLayoutBase,member:itemWidth %} properties thus making all items have fixed height. This improves the scrolling performance on iOS.

### Using 'ListViewGridLayout'
Setting a {% typedoc_link classes:ListViewGridLayout %} is done by declaring the **`ListViewGridLayout`** and setting the **`tkListViewLayout`**:

<snippet id='angular-listview-item-layouts-grid'/>

Setting the {% typedoc_link classes:ListViewGridLayout,member:spanCount %} property to a number will make the {% typedoc_link classes:ListViewGridLayout %} order the items in three columns or rows depending on the scrolling direction. You can also use the {% typedoc_link classes:ListViewLayoutBase,member:itemHeight %} and {% typedoc_link classes:ListViewLayoutBase,member:itemWidth %} properties here for size tuning.

### Using 'ListViewStaggeredLayout'
Setting a {% typedoc_link classes:ListViewStaggeredLayout %} is done by declaring the **`ListViewStaggeredLayout`** and setting the **`tkListViewLayout`**:

<snippet id='angular-listview-item-layouts-staggered'/>

Defining an explicit item size here is not needed since the essence of a staggered layout is that items are freely measured and positioned according to their desired size as shown on the pictures below. Also note the second Label in the {% typedoc_link classes:RadListView,member:itemTemplate %} which enables text-wrapping for its content to allow for arbitrary item size depending on the length of the text. The result is visible on the pictures below:

![RadListView: Staggered layout on iOS](/controls/NativeScript/ListView/Images/list-view-item-layouts_1.png "iOS") ![RadListView: Staggered layout on Android](/controls/NativeScript/ListView/Images/list-view-item-layouts_2.png "Android")
