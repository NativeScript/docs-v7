---
title: Scroll to Index
page_title: How to RadListView Scroll to index | Progress NativeScript UI Documentation
description: This article describes how to scroll to a specific Item of the RadListView by it's index.
slug: listview-howto-scroll-to-index-angular
tags: radlistview, scroll, index, angular, nativescript, professional, ui
position: 4
publish: true
---
# RadListView Scroll to Index
This tutorial describes how to scroll a specific item of the RadListView by it's index into the visible portion the UI.

## Implementation

1. All that you need to do is call the {% typedoc_link classes:RadListView,member:scrollToIndex()%} of the  {% typedoc_link classes:RadListView %} instance with an valid integer object as the 'index' parameter. The code snippet bellow shows the described approach, note that the snippet assumes there is an RadListView component with `#myRadListView` set in the HTML in order to retrive it via Angular's `@ViewChild`.

<snippet id='angular-listview-scroll-to-index'/>

## Changing the Position of the Scrolled to Item (iOS Only)

When scrolling the {% typedoc_link classes:RadListView %} to show a previously not visible item the default beahvior is that the item will be scrolled into the view either in the `Top` or `Left` position depending on the current `scrollDirection` of the layout. You can easily change that default value by assigning the {% typedoc_link classes:RadListView,member:scrollPosition%} to one of these values {% typedoc_link enums:ListViewScrollPosition %}.F