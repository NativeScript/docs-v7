---
title: Trackball
page_title: Vue Chart Trackball | Progress NativeScript UI Documentation
description: A page describing the usage of the Trackball functionality with Vue
slug: chart-trackball-vue
tags: vue, chart, behavior, trackball
position: 7
publish: true
---

# Chart Trackball

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn how to add a trackball that can be used to display additional information about a highlighted point. For example, in a Financial chart the {% typedoc_link classes:Trackball %} can display the Open, High, Low and Close value of a stock for a single day. The Trackball is displayed when the user holds a finger on the plot area of the chart and drags it through the set of data points a given series represents. {% typedoc_link classes:RadCartesianChart %} supports displaying a trackball via its {% typedoc_link classes:RadCartesianChart,member:trackball %} property.

* [Getting Started](#getting-started)
* [Features](#features)
* [Custom Content](#custom-content)
* [References](#references)

## Getting Started

To define a trackball on your {% typedoc_link classes:RadCartesianChart %} you need to use the {% typedoc_link classes:TKCartesianTrackballDirective %} directive in your chart as shown below:

#### Example 1: A Cartesian Chart with a Trackball

<snippet id='chart-trackball-vue'/>

Depending on your current setup, the trackball will display information about the data points within the chart in a different manner. For example, in a {% typedoc_link classes:RangeBarSeries %} the trackball will display the range values alongside with the current category value. In a {% typedoc_link classes:OhlcSeries %} or {% typedoc_link classes:CandlestickSeries %} the trackball will display the Open, High, Low and Close values alongside with the current category value. Here's an example:

#### Figure 1: Trackball shown in action on Android (left) and iOS (right)

![TelerikUI-Chart-Behaviors-Trackball](../../../ui/img/ns_ui/trackball_candlestick_android.png "Trackball with Candlestick Series on Android") ![TelerikUI-Chart-Behaviors-Trackball](../../../ui/img/ns_ui/trackball_candlestick_ios.png "Trackball with Candlestick Series on iOS")

## Features

### SnapMode
By using the {% typedoc_link classes:Trackball,member:snapMode %} property you can control how the trackball is positioned relative to the series and the data points within. Possible values are defined by the {% typedoc_link enums:ChartTrackballSnapMode %} enum.

### Intersection Points
By using the {% typedoc_link classes:Trackball,member:showIntersectionPoints %} property you can determine whether information about all of the relevant data points will be shown in the trackball. This behavior is dependent on the {% typedoc_link classes:Trackball,member:snapMode %} property setting.

## Custom Content

You can customize the content within the trackball by using the {% typedoc_link classes:Trackball,member:trackBallContentRequestedEvent %} event. This event is fired each time information about a given data point is needed for the trackball. The event exposes an instance of the {% typedoc_link classes:TrackballCustomContentData %}. This class extends the {% typedoc_link classes:ChartEventData %} class and adds two new properties:
- {% typedoc_link classes:TrackballCustomContentData,member:seriesIndex %} - the index of the active series with which the user has started interacting
- {% typedoc_link classes:TrackballCustomContentData,member:content %} - used to override the default data point content. By setting this property you can customize the content within the trackball for the provided data point. You can use the base event data properties to obtain the data point index and the business object for which the data point has been generated for

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Trackball Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/interaction)
* [Trackball Content Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/interaction)

Related articles you might find useful:

* [**Candlestick Series**]({% slug chart-series-candlestick-vue %})
* [**RangeBar Series**]({% slug chart-series-range-bar-vue %})
* [**Grid**]({% slug chart-grid-vue %})
