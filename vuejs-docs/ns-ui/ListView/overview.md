---
title: Overview
page_title: RadListView Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadListView's features.
slug: listview-overview-vue
tags: radlistview, overview, listview, vue, nativescript, professional, ui
position: 1
publish: true
---
# RadListView Overview
{% typedoc_link classes:RadListView %} for NativeScript is a virtualizing list component that provides the most popular features associated with scenarios where a list of items is used. All these features are embedded in one control with the idea to save developer time and provide better experience. The control's main features include:
- item animations
- different layouts and orientations
- smart defaults for many gestures - select on long press, execution of special action on swipe, reorder of items on long press and drag, refreshing the list on swipe or loading more items only when needed.

![RadListView: Overview](/controls/NativeScript/ListView/Images/list-view-overview_2.png "iOS") ![RadListView: Overview](/controls/NativeScript/ListView/Images/list-view-overview_3.png "iOS")

## Features

### Different layouts

{% typedoc_link classes:RadListView %} supports three different item layout strategies that are commonly used on mobile apps:

- **list** - items are stacked - either horizontally or vertically, depending on the scrolling orientation
- **grid** - items are arranged in columns or rows - depending on the scrolling orientation
- **staggered grid** - items are ordered in a staggered grid formation - either in rows or columns, depending on the scrolling orientation

All layouts are virtualized and optimized for the mobile environment.

![RadListView: Overview](/controls/NativeScript/ListView/Images/list-view-overview_1.png "Android")

### Load on demand
**Load on demand** is a behavior in which items from the source are loaded on demand depending on the scrolling position of the RadListView. This feature is particularly useful in situations where data is downloaded and visualized from a service in portions upon request from your end users. Consider a list of apps in a mobile app store where new items are continuously added when scrolling down the list. Read more about load-on-demand here: [**ListView: Item Load on Demand**]({% slug listview-features-load-on-demand-vue %})

### Pull to refresh
**Pull to refresh** allows the end users to request more data by pulling the list once they reach the end. By default, a progress indicator is shown and an event is fired which you can use to make a new data request. Read more about pull-to-refresh here: [**ListView: Pull to refresh**]({% slug listview-features-pull-to-refresh-vue %})

### Swipe to execute
**Swipe to execute** is a popular UX pattern that allows you to perform an arbitrary action on a RadListView item when the end user swipes it to the right or to the left. For example, popular Mail client mobile applications implement this pattern allowing the user to mark messages as read or to delete them. Read more about swipe-to-execute here: [**ListView: Swipe to execute**]({% slug listview-features-swipe-to-execute-vue %})

## Vue directives

When using the {% typedoc_link classes:RadListView %} with Vue you are going to work with multiple custom Vue RadListView specific directives. In short these directives are used by the Vue framework to enable 'linking' between separate HTML tags into one 'complex' element.

Here is a full list of the available custom Vue {% typedoc_link classes:RadListView %} directives and components:

### Components
Represent the major elements:

| Selector             | Class (more details)                                     |
|----------------------|----------------------------------------------------------|
| RadListView          | {% typedoc_link classes:RadListViewComponent %}          |
| ListViewLinearLayout | {% typedoc_link classes:ListViewLinearLayoutDirective %} |
| ListViewGridLayout   | {% typedoc_link classes:ListViewGridLayoutDirective %}   |

### Inline Directives
Represent the 'link' mechanism of the smaller with the major elements

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| v-tkListViewLayout | {% typedoc_link classes:TKListViewLayoutDirective %} |
