---
title: Spline
page_title: Spline series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Spline series and continues with a sample scenario of how Spline series are used.
slug: chart-series-spline
tags: series, cartesian, spline, chart, nativescript, professional, ui
position: 5
publish: true
---

# RadChart Spline Series
{% typedoc_link classes:SplineSeries %} are categorical type of series that visualize the data objects as a series of dots connected with a spline, i.e. a curved line segments. To use Spline series, you need to initialize a {% typedoc_link classes:RadCartesianChart %}, define a {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} and bind the series to a set of data objects.

## Example
The following definition represents the data context that will be used to populate the Spline series with data:

<snippet id='categorical-source-ts'/>

We use an instance of this model to assign it as the `bindingContext` of the page we have put our Spline series on:

<snippet id='spline-series-binding-context'/>

And finally, in the XML definition of the page we put a {% typedoc_link classes:RadCartesianChart %}, add a {% typedoc_link classes:SplineSeries %} instance to it and bind the series to the source of data:

<snippet id='spline-series-xml'/>

![Cartesian chart: Spline series](../../../img/ns_ui/spline_series_android.png "Spline series on Android.") ![Cartesian chart: Spline series](../../../img/ns_ui/spline_series_ios.png "Spline series on iOS.")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Series Examples](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Area Series**]({% slug chart-series-area %})
* [**Bubble Series**]({% slug chart-series-bubble %})
* [**Bar Series**]({% slug chart-series-bar %})
* [**Pie Series**]({% slug chart-series-pie %})
* [**Range-Bar Series**]({% slug chart-series-range-bar %})
* [**Scatter-Bubble Series**]({% slug chart-series-scatter-bubble %})
* [**Scatter Series**]({% slug chart-series-scatter %})
* [**Line Series**]({% slug chart-series-line %})
* [**Area Series**]({% slug chart-series-spline-area %})
* [**Candlestick Series**]({% slug chart-series-candlestick %})
* [**Ohlc Series**]({% slug chart-ohlc-series %})