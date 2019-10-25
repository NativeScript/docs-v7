---
title: Axes Pan & Zoom
page_title: Axes Chart Pan & Zoom | Progress NativeScript UI Documentation
description: A page describing the Pan & Zoom behavior in Telerik Chart for NativeScript
slug: chart-axes-pan-and-zoom-vue
tags: chart, behavior, pan, zoom, axes, axis, vue, nativescript, professional, ui
position: 3
publish: true
---

# Chart Axes Pan & Zoom

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn how to enable the pan and zoom feature that allows users to zoom in and out of the chart through pinch gesture and pan through swipe.

* [Getting Started](#getting-started)
* [Zoom Factor](#zoom-factor)
* [Events](#events)
* [References](#references)

## Getting Started  

There are two boolean properties that enable this feature:
* {% typedoc_link classes:CartesianAxis,member:allowZoom %} - Used to enable zooming by the axis.
* {% typedoc_link classes:CartesianAxis,member:allowPan %} - Used to enable panning by the axis.

## Zoom Factor 

You can programmatically define a zoom factor by which the chart will zoom. This is done via two properties exposed by {% typedoc_link classes:RadCartesianChart %}:
- {% typedoc_link classes:RadCartesianChart,member:horizontalZoom %} - Defines the zoom factor applied to the horizontal axis if zoom is enabled on it.
- {% typedoc_link classes:RadCartesianChart,member:verticalZoom %} - Defines the zoom factor applied to the vertical axis if zoom is enabled on it.

For example, if you set one of these properties to `1.5` this will apply a 50% zoom relative to the original zoom factor of 1.

## Events

To notify you when the selection state of an item is changed, the chart exposes the following events:
- `chartZoomed` - Fired multiple times when the chart is zooming. 
The event data argument provides information about the event name and the chart that is zoomed.
- `chartPanned` - Fired multiple times when the chart is panning. 
The event data argument provides information about the event name and the chart that is panned.

With the following example you can see that pan & zoom properties could be used for any axis assigned to a series or to the chart along with events handling.

#### Example 1: Pan and Zoom Enabled

<snippet id='chart-pan-zoom-vue'/>

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Pan and Zoom Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/interaction)

Related articles you might find useful:

* [**Series Overview**]({% slug chart-series-overview-vue %})
* [**Axes Overview**]({% slug chart-axes-overview-vue %})
* [**Selection**]({% slug chart-features-behaviors-selection-vue %})
