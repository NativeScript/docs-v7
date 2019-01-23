---
title: Pan & Zoom
page_title: Chart Pan & Zoom behavior | Progress NativeScript UI Documentation
description: A page describing the Pan & Zoom behavior in Telerik Chart for NativeScript
slug: chart-pan-and-zoom-angular
tags: chart, behavior, pan, zoom, axes, axis, angular
position: 2
publish: true
---

# Pan & Zoom

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
With the following example you can see that pan & zoom properties could be used for any axis assigned to a series or to the chart along with events handling.

Just like with all angular 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. We create a basic angular `Component` that contains a collection of objects provided by an custom service, which will be used by the chart to provide intuitive data visualization.

The service is a simple 'mock' of an backend call that will return an array of objects:

<snippet id='chart-angular-data-service'/>

Inside that service we have a single function which returns an array:

<snippet id='chart-angular-categorical-source'/>

<snippet id='chart-angular-country'/>

All that is left is to declare the template of the angular component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare the {% typedoc_link classes:CategoricalAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags.
- After that set the **`tkCartesianHorizontalAxis`** directive to the CategoricalAxis and set its {% typedoc_link classes:CategoricalAxis,member:allowZoom%} to **`true`**. The **`verticalAxis`** will be series sepcific and is set on both BarSeries and LineSeries via binding.

<snippet id='chart-angular-pan-and-zoom-component'/>
<snippet id='chart-angular-pan-and-zoom'/>