---
title: Range Bar
page_title: Range Bar series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Range Bar series and continues with a sample scenario of how Range Bar series are used.
slug: chart-series-range-bar-angular
tags: series, cartesian, range, bar, angular
position: 3
publish: true
---

# RangeBar series: Overview
Range bar series are a special case of bar series where the width of each bar denotes the difference between data point's low and high value. The bars can be displayed either horizontally, or vertically, depending on whether the {% typedoc_link classes:CategoricalAxis %} is the vertical axis or the horizontal one. When the horizontal axis is categorical, the rectangles are displayed vertically. This means that they have equal width while their height represents the difference between the numerical values of each of the data points. The low value is the rectangle's start point, while the high value is the end point. On the other hand, when the vertical axis is categorical, the rectangles have equal height, while their width represents the difference between the values of the data point.

## Example
Just like with all angular 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. We create a basic angular `Component` that contains a collection of objects provided by an custom service, which will be used by the chart to provide intuitive data visualization.

The service is a simple 'mock' of an backend call that will return an array of objects:

<snippet id='chart-angular-data-service'/>

Inside that service we have a single function which returns an array:

<snippet id='chart-angular-range-bar-source'/>

<snippet id='chart-angular-product'/>

All that is left is to declare the template of the angular component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare the {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the **`tkCartesianHorizontalAxis`** and **`tkCartesianVerticalAxis`** directive to the axes
- Finally declare a {% typedoc_link classes:RangeBarSeries %} instance to it, bind the {% typedoc_link classes:RangeBarSeries,member:items%} to the source of data and set the **`tkCartesianSeries`** directive

<snippet id='chart-angular-range-bar-series-component'/>
<snippet id='chart-angular-range-bar-series'/>

Depending on the required Bar orientation, you can swap the axes' position and assign the {% typedoc_link classes:CategoricalAxis %} to the {% typedoc_link classes:RadCartesianChart,member:horizontalAxis%} property and the Linear to the {% typedoc_link classes:RadCartesianChart,member:verticalAxis%} property. This will change the orientation of the bars to vertical.

![Cartesian chart: Range bar series](../../../img/ns_ui/range_bar_series_android.png "Range bar series on Android.") ![Cartesian chart: Range bar series](../../../img/ns_ui/range_bar_series_ios.png "Range bar series on iOS.")
