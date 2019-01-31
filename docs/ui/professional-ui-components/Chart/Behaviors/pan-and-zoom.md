---
title: Pan & Zoom
page_title: Chart Pan & Zoom behavior | Progress NativeScript UI Documentation
description: A page describing the Pan & Zoom behavior in Telerik Chart for NativeScript
slug: chart-pan-and-zoom
tags: chart, behavior, pan, zoom, axes, axis, nativescript, professional, ui
position: 2
publish: true
---

# RadChart Pan & Zoom
If you need a [RadCartesianChart]({% slug chart-types-cartesian %} "Read more about RadCartesianChart") that allows you to zoom in/out to more granular values you should enable this feature setting the
corresponding property of the horizontal or vertical axis.

There are two boolean properties that enable this feature:
* {% typedoc_link classes:CartesianAxis,member:allowZoom %}: allows zooming by the axis.
* {% typedoc_link classes:CartesianAxis,member:allowPan %}: allows panning by the axis.

## Setting Zoom Factor Programmatically  
You can programmatically define a zoom factor by which the chart will zoom. This is done via two properties exposed by {% typedoc_link classes:RadCartesianChart %}:
- {% typedoc_link classes:RadCartesianChart,member:horizontalZoom %} - defines the zoom factor applied to the horizontal axis if zoom is enabled on it
- {% typedoc_link classes:RadCartesianChart,member:verticalZoom %} - defines the zoom factor applied to the vertical axis if zoom is enabled on it

For example, if you set one of these properties to `1.5` this will apply a 50% zoom relative to the original zoom factor of 1.

## Handling Pan&Zoom events
To notify you when the selection state of an item is changed, **RadChartView** exposes the following events:
- `chartZoomed` - fired multiple times when the chart is zooming. 
The event data argument provides information about the event name and the chart that is zoomed.
- `chartPanned` - fired multiple times when the chart is panning. 
The event data argument provides information about the event name and the chart that is panned.


## Example 
With the following example you can see that pan & zoom  properties could be used for any axis assigned to a series or to the chart along with events handling.

<snippet id='pan-and-zoom'/>

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Behaviors Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/behaviors)

Related articles you might find useful:

* [**Selection**]({% slug chart-features-behaviors-selection %})