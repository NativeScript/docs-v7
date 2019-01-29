---
title: Load on Demand
page_title: RadListView Load on demand | Progress NativeScript UI Documentation
description: This article gives insight into how the load-on-demand feature is used in RadListView with Angular
slug: listview-features-load-on-demand-angular
tags: listview, load, demand, angular
position: 8
publish: true
---

# Overview
The load-on-demand feature is particularly useful in cases when data needs to be loaded in chunks (pages) to optimize bandwidth usage and improve the UX. There are two load-on-demand modes available:

- {% typedoc_link enums:ListViewLoadOnDemandMode,member:Manual %} - in this mode the user needs to manually request the next data page
- {% typedoc_link enums:ListViewLoadOnDemandMode,member:Auto %} - in this mode the next data page is automatically requested as the user approaches the end of the scrollable list

When more items need to be loaded, **RadListView** fires the `loadMoreDataRequested` event. That event will continue to be fired until you set the `returnValue` of the arguments to `false` and call the {% typedoc_link classes:RadListView,member:notifyLoadOnDemandFinished(disableLoadOnDemand) %} with a `true` parameter, you can use this when you have reached the end of your data stream and there will no longer be any data to be loaded.

In addition, {% typedoc_link classes:RadListView %} exposes the {% typedoc_link classes:RadListView,member:loadOnDemandBufferSize %} property which determines the count of items left to scroll which when reached triggers a `loadMoreDataRequested` event. This property is used when the load-on-demand mode is set to be {% typedoc_link enums:ListViewLoadOnDemandMode,member:Auto %}.

# Example
The following scenario demonstrates how the `loadMoreDataRequested` event is handled. In addition, an example of a custom load-on-demand view is also given. A custom load-on-demand view is provided via the {% typedoc_link classes:TKListViewLoadOnDemandDirective %} which is used with the `tkListLoadOnDemandTemplate` selector. To feed `RadListView` with data we use an `ObservableArray` which provides smart data change notifications to `RadListView`. When the `loadMoreDataRequested` event is fired we push new items into the array which notifies the list that a change has occurred.

## Example: The template
The following snippet shows the template used to create the UI for the scenario. It shows how a handler for the `loadMoreDataRequested` event is provided, as well as how a custom load-on-demand view is applied:


## Example: The component
The following code snippet demonstrates the code behind the template. Here you see how the `loadMoreDataRequested` event is handled and how data is fed back to `RadListView`:

<snippet id='angular-listview-load-on-demand'/>
<snippet id='angular-listview-load-on-demand-code'/>
