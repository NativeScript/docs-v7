---
title: Load on Demand
page_title: RadListView Load on Demand | Progress NativeScript UI Documentation
description: This article gives insight into how the load-on-demand feature is used.
slug: listview-features-load-on-demand
tags: listview, load, demand, nativescript, professional, ui
position: 8
publish: true
---
# RadListView Load on Demand
The load-on-demand feature is particularly useful in cases when data needs to be loaded in chunks (pages) to optimize bandwidth usage and improve the UX. The value of the {% typedoc_link classes:RadListView,member:loadOnDemandMode %} property determines the mode that will be used for loading on demand. It accepts the values from the {% typedoc_link enums:ListViewLoadOnDemandMode %} enumeration:

- {% typedoc_link enums:ListViewLoadOnDemandMode,member:Manual %} - in this mode the user needs to manually request the next data page
- {% typedoc_link enums:ListViewLoadOnDemandMode,member:Auto %} - in this mode the next data page is automatically requested as the user approaches the end of the scrollable list
- {% typedoc_link enums:ListViewLoadOnDemandMode,member:None %} - in this mode load on demand is disabled

When more items need to be loaded, **RadListView** fires the `loadMoreDataRequested` event. That event will continue to be fired until you set the `returnValue` of the arguments to `false` and call the {% typedoc_link classes:RadListView,member:notifyLoadOnDemandFinished(disableLoadOnDemand) %} with a `true` parameter, you can use this when you have reached the end of your data stream and there will no longer be any data to be loaded.

In addition, {% typedoc_link classes:RadListView %} exposes the {% typedoc_link classes:RadListView,member:loadOnDemandBufferSize %} property which determines the count of items left to scroll which when reached triggers a `loadMoreDataRequested` event. This property is used when the load-on-demand mode is set to be {% typedoc_link enums:ListViewLoadOnDemandMode,member:Auto %}.

## Handling the `loadMoreDataRequested` Event
The following code snippet demonstrates how the {% typedoc_link classes:RadListView,member:loadMoreDataRequestedEvent %} event is handled. We first need to subscribe for the event as the following XML snippet shows:

#### __Example 1: Subscribing for loadMoreDataRequested in XML:__
<snippet id='listview-load-on-demand-xml'/>

in our event handler we make a data request and when the data chunk is ready we feed the list:

#### __Example 2: Handling the loadMoreDataRequested in XML:__
<snippet id='listview-load-on-demand-handler'/>

> Here, the usage of a timer is for the purpose of simulating a call to a remote service. The {% typedoc_link classes:RadListView,member:notifyLoadOnDemandFinished(disableLoadOnDemand) %} call is made to inform the list view that the requested data chunk has been delivered.

## Customizing the Load-on-Demand View
To customize the load-on-demand view displayed at the end of the list you need to use the {% typedoc_link classes:RadListView,member:loadOnDemandItemTemplate %} property. Here's a simple example:

#### __Example 3: Providing a custom loadOnDemandItemTemplate:__
<snippet id='listview-load-on-demand-custom-view'/>

The {% typedoc_link classes:RadListView,member:loadOnDemandItemTemplate %} property is used just like the {% typedoc_link classes:RadListView,member:itemTemplate %} property. Note that the binding context of the view generated from this template is the one assigned to the page.


## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Load On Demand Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/listview/app/examples/load-on-demand)

Related articles you might find useful:

* [**Pull to refresh**]({% slug listview-features-pull-to-refresh %})
