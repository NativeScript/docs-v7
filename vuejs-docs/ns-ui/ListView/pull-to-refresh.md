---
title: Pull to Refresh
page_title: RadListView Pull to refresh with Vue | Progress NativeScript UI Documentation
description: This article gives insight how the Pull-to-refresh feature is used in RadListView for Vue.
slug: listview-features-pull-to-refresh-vue
tags: listview, pull-to-refresh, vue, nativescript, professional, ui
position: 3
publish: true
---

# RadListView Pull to Refresh
Pull-to-refresh allows you to implement a mechanism for refreshing ListView's content upon user's request. The request is done by swiping (pulling) down the list and releasing it. This experience is common in many mobile apps and is used in scenarios where a list needs to be updated with the most recent changes.

## Using Pull-to-Refresh with RadListView for Vue
To enable the pull-to-refresh feature you need to follow the steps outlined below:

1. Set the `pullToRefresh` property on `RadListView` to `true`.
2. Provide a handler for the `pullToRefreshInitiated` event which is fired when the end user requests a data refresh.
3. Call the `notifyPullToRefreshFinished()` method on `RadListView` when the data request has been finished and the list has been updated.

The following template demonstrates a simple scenario in which the pull-to-refresh feature is used:

<snippet id='listview-pulltorefresh-vue'/>
