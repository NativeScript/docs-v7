---
title: Line
page_title: Line series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Line series and continues with a sample scenario of how Line series are used.
slug: chart-series-line
tags: series, cartesian, line
position: 4
publish: true
previous_url: controls/chart/series/line
---
# Line series: overview
{% typedoc_link classes:LineSeries %} are categorical type of series that represent the objects from the data source as dots connected with a line. To use Line series, you need to initialize a {% typedoc_link classes:RadCartesianChart %}, define a {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} and bind the series to a set of data objects.

## Example
The following definition represents the data context that will be used to populate the Line series with data:

<snippet id='categorical-source'/>

We use an instance of this model to assign it as the `bindingContext` of the page we have put our Line series on:

<snippet id='line-series-binding-context'/>

And finally, in the XML definition of the page we put a {% typedoc_link classes:RadCartesianChart %}, add a {% typedoc_link classes:LineSeries %} instance to it and bind the series to the source of data:

<snippet id='line-series'/>

Here's how your Line chart should look like:

![Cartesian chart: Line series](images/line_series_android.png "Bar series on Android.") ![Cartesian chart: Line series](images/line_series_ios.png "Bar series on iOS.")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Series Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Area Series**]({% slug chart-features-series-area %})
* [**Bubble Series**]({% slug chart-features-series-bubble %})
* [**Bar Series**]({% slug chart-features-series-bar %})
* [**Pie Series**]({% slug chart-features-series-pie %})
* [**Range-Bar Series**]({% slug chart-features-series-range-bar %})
* [**Scatter-Bubble Series**]({% slug chart-features-series-scatter-bubble %})
* [**Scatter Series**]({% slug chart-features-series-scatter %})
* [**Spline Series**]({% slug chart-features-series-spline %})
* [**Area Series**]({% slug chart-features-series-area %})
* [**Candlestick Series**]({% slug chart-features-series-financial-candlestick %})
* [**Ohlc Series**]({% slug chart-features-series-financial-ohlc %})