---
title: Trackball
page_title: Angular Chart Trackball | Progress NativeScript UI Documentation
description: A page describing the usage of the Trackball functionality with Angular
slug: chart-trackball-angular
tags: angular, chart, behavior, trackball, nativescript, professional, ui
position: 4
publish: true
---

# RadChart Trackball Overview
A {% typedoc_link classes:Trackball %} is used to display information of a given point within the Chart. For example, in a Financial chart the {% typedoc_link classes:Trackball %} can display the Open, High, Low and Close value of a stock for a single day. Normally, a Trackball is displayed when the user holds a finger on the plot area of the chart and drags it through the set of datapoints a given series represents. {% typedoc_link classes:RadCartesianChart %} supports displaying a trackball via its {% typedoc_link classes:RadCartesianChart,member:trackball %} property.

## Getting Started with Trackball
To define a trackball on your {% typedoc_link classes:RadCartesianChart %} you need to use the {% typedoc_link classes:TKCartesianTrackballDirective %} directive in your chart as shown below:

#### Example 1: Using the Trackball directive
<snippet id='chart-trackball-directive-angular-html'/>

#### Example 2: A Cartesian Chart with a Trackball defined on it:
<snippet id='chart-trackball-angular-html'/>

Depending on your current setup, the trackball will display information about the datapoints within the chart in a different manner. For example, in a {% typedoc_link classes:RangeBarSeries %} the trackball will display the range values alongside with the current category value. In a {% typedoc_link classes:OhlcSeries %} or {% typedoc_link classes:CandlestickSeries %} the trackball will display the Open, High, Low and Close values alongside with the current category value. Here's an example:

#### Figure 1: Trackball shown in action on iOS and Android
![TelerikUI-Chart-Behaviors-Trackball](../../../img/ns_ui/trackball_candlestick_ios.png "Trackball with Candlestick Series on iOS")![TelerikUI-Chart-Behaviors-Trackball](../../../img/ns_ui/trackball_candlestick_android.png "Trackball with Candlestick Series on Android")

## Features

### SnapMode
By using the {% typedoc_link classes:Trackball,member:snapMode %} property you can control how the trackball is positioned relative to the series and the datapoints within. Possible values are defined by the {% typedoc_link enums:ChartTrackballSnapMode %} enum.

### Intersection Points
By using the {% typedoc_link classes:Trackball,member:showIntersectionPoints %} property you can determine whether information about all of the relevant datapoints will be shown in the trackball. This behavior is dependent on the {% typedoc_link classes:Trackball,member:snapMode %} property setting.

## Custom Content
You can customize the content within the trackball by using the {% typedoc_link classes:Trackball,member:trackBallContentRequestedEvent %} event. This event is fired each time information about a given datapoint is needed for the trackball. The event exposes an instance of the {% typedoc_link classes:TrackballCustomContentData %}. This class extends the {% typedoc_link classes:ChartEventData %} class and adds two new properties:
- {% typedoc_link classes:TrackballCustomContentData,member:seriesIndex %} - the index of the active series with which the user has started interacting
- {% typedoc_link classes:TrackballCustomContentData,member:content %} - used to override the default datapoint content. By setting this property you can customize the content within the trackball for the provided data point. You can use the base event data properties to obtain the datapoint index and the business object for which the datapoint has been generated for

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Trackball Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/chart/app/examples/behaviors)
