---
title: Scrolling
page_title: RadListView Scrolling | Progress NativeScript UI Documentation
description: This article explains the Scrolling API of RadListView.
slug: listview-features-scrolling
tags: listview, scrolling, events, nativescript, professional, ui
position: 12
publish: true
---
# RadListView Scrolling
{% typedoc_link classes:RadListView %} provides API that allows developers to manually scroll to a particular item or with particular offset. It also exposes several events that can be used to detect changes in the scroll offset triggered by the end user. The following methods related to Scrolling are available:
- {% typedoc_link classes:RadListView,member:scrollWithAmount() %} - scrolls the list with a given amount of pixels. If the `animate` parameter is `true` - the scrolling will be animated
- {% typedoc_link classes:RadListView,member:scrollToIndex() %} - scrolls the list so that the data item at the particular index is brought to visibility. If the `animate` argument is `true` - the scrolling will be animated. The value of the `snapMode` argument determines the position of the target item when it is brought into view. The possible values for this argument are enlisted by the {% typedoc_link enums:ListViewItemSnapMode %} enum.
- {% typedoc_link classes:RadListView,member:getScrollOffset() %} - returns the current scroll offset of the list

## Scroll Events
You can use the following events to detect changes in the scrolling behavior of {% typedoc_link classes:RadListView %}:
- {% typedoc_link classes:RadListView,member:scrollStartedEvent %} - fired when the list starts scrolling
- {% typedoc_link classes:RadListView,member:scrolledEvent %} - fired each time the scroll offset of the list is changed
- {% typedoc_link classes:RadListView,member:scrollDragEndedEvent %} - fired each time the user raises their finger from the device's screen as a result of a scrolling gesture
- {% typedoc_link classes:RadListView,member:scrollEndedEvent %} - fired when the list stops scrolling

All scrolling events provide an instance of the {% typedoc_link classes:ListViewScrollEventData %} class to their handlers which provides the current scroll offset of the list through its {% typedoc_link classes:ListViewScrollEventData,member:scrollOffset %} property.

> Note that to work `scrollToIndex` method in iOS properly, make sure you use the correct layout for the `RadListView` component: `ListViewLinearLayout` with fixed `itemHeight` or to set `ListViewStaggeredLayout` 

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Scrolling Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/listview/app/examples/scroll-events)
