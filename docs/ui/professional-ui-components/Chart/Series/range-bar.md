---
title: Range Bar
page_title: Range Bar series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Range Bar series and continues with a sample scenario of how Range Bar series are used.
slug: chart-series-range-bar
tags: series, cartesian, range, bar, chart, nativescript, professional, ui
position: 3
publish: true
---

# RadChart RangeBar Series
Range bar series are a special case of bar series where the width of each bar denotes the difference between data point's low and high value. The bars can be displayed either horizontally, or vertically, depending on whether the {% typedoc_link classes:CategoricalAxis %} is the vertical axis or the horizontal one. When the horizontal axis is categorical, the rectangles are displayed vertically. This means that they have equal width while their height represents the difference between the numerical values of each of the data points. The low value is the rectangle's start point, while the high value is the end point. On the other hand, when the vertical axis is categorical, the rectangles have equal height, while their width represents the difference between the values of the data point.

## Example
Let's use the following model with low & high values:

<snippet id='range-bar-source'/>

We will use an instance of this model to assign it as the *bindingContext* of the page we have put our range bar series on:

<snippet id='binding-context-range-bar'/>

And finally, in the XML definition of the page we put a RadCartesianChart, add a BarSeries instance to it and bind the series to the source of data:

<snippet id='range-bar-series'/>

Depending on the required Bar orientation, you can swap the axes' position and assign the Categorical to the `horizontalAxis` property and the Linear to the `verticalAxis` property. This will change the orientation of the range bars to vertical.

![Cartesian chart: Range bar series](../../../img/ns_ui/range_bar_series_android.png "Range bar series on Android.") ![Cartesian chart: Range bar series](../../../img/ns_ui/range_bar_series_ios.png "Range bar series on iOS.")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Series Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Area Series**]({% slug chart-series-area %})
* [**Bubble Series**]({% slug chart-series-bubble %})
* [**Bar Series**]({% slug chart-series-bar %})
* [**Pie Series**]({% slug chart-series-pie %})
* [**Scatter-Bubble Series**]({% slug chart-series-scatter-bubble %})
* [**Scatter Series**]({% slug chart-series-scatter %})
* [**Spline Series**]({% slug chart-series-spline %})
* [**Line Series**]({% slug chart-series-line %})
* [**Area Series**]({% slug chart-series-spline-area %})
* [**Candlestick Series**]({% slug chart-series-candlestick %})
* [**Ohlc Series**]({% slug chart-ohlc-series %})