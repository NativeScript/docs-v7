---
title: Pull to Refresh
page_title: RadListView Pull to Refresh | Progress NativeScript UI Documentation
description: This article gives insight how the Pull-to-refresh feature is used.
slug: listview-features-pull-to-refresh
tags: listview, pull-to-refresh
position: 3
publish: true
previous_url: controls/listview/pull-to-refresh
---
# RadListView: Pull to Refresh
The **Pull-to-refresh** feature allows you to provide your users with the ability to request more data items once they reach the top end of the list. This is particularly useful in scenarios where a list of data items is regularly updated in the course of time. Consider a mail client which allows you to refresh the list of mail messages by pulling it down.

> This scenario works when using an `ObservableArray` instance as a data source for the RadListView. `ObservableArray` is part of the core NativeScript framework and when used with RadListView it ensures that source collection changes are effectively reflected by the RadListView module.

## Enabling Pull-to-Refresh
Consider the setup described by the [Getting Started]({% slug listview-getting-started %} "RadListView getting started") section for RadListView. The **Pull-to-Refresh** behavior is enabled by setting the {% typedoc_link classes:RadListView,member:pullToRefresh %} property as shown below:

#### __Example 1: Enabling pull-to-refresh on RadListView:__
<snippet id='listview-pull-to-refresh-xml'/>

Additionally, you will need to subscribe for the {% typedoc_link classes:RadListView,member:pullToRefreshInitiatedEvent %} event to be able to make a new data request. This event is fired when the user requests more data by pulling the list. Once you fetch the new items and append them at the beginning of the source collection, you will need to inform the list control that you have finished with the operation as follows:

#### __Example 2: Handling the pullToRefreshInitiatedEvent:__
<snippet id='listview-pull-to-refresh-handler'/>

As you can see, here we use the `timer` module part of the core NativeScript framework. The callback function is executed once 1 second elapses. Data is then fed into the source collection and the {% typedoc_link classes:RadListView,member:notifyPullToRefreshFinished() %} method is called to notify the list-view about that.

## Styling the Pull-to-Refresh Indicator
You can customize the foreground and background colors of the pull-to-refresh indicator. The customization is done via the {% typedoc_link classes:RadListView,member:PullToRefreshStyle %} property which accepts instances the {% typedoc_link classes:PullToRefreshStyle %} class. This class exposes the following properties:

- {% typedoc_link classes:PullToRefreshStyle,member:indicatorColor %} - used to style the foreground color of the pull-to-refresh indicator
- {% typedoc_link classes:PullToRefreshStyle,member:indicatorBackgroundColor %} - used to style the background color of the pull-to-refresh indicator

Here's a XML sample of how you can customize the indicator in your XML definition of {% typedoc_link classes:RadListView %}:

<snippet id='listview-pull-to-refresh-styling-xml'/>

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Pull To Refresh Example](https://github.com/telerik/nativescript-ui-samples/tree/master/listview/app/examples/pull-to-refresh)

Related articles you might find useful:

* [**Load on demand**]({% slug listview-features-load-on-demand %})