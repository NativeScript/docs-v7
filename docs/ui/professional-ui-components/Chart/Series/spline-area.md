---
title: Spline Area
page_title: Spline Area series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Spline Area series and continues with a sample scenario of how Spline Area series are used.
slug: chart-series-spline-area
tags: series, cartesian, spline, area, chart, nativescript, professional, ui
position: 6
publish: true
---

# RadChart Spline Area Series
{% typedoc_link classes:SplineAreaSeries %} are categorical type of series that visualize the data objects as a series of dots connected with a spline, i.e. a curved line segments. Additionally, the area between the X-axis and the spline is filled with a specific color - hence the Spline Area name. To use Spline Area series, you need to initialize a {% typedoc_link classes:RadCartesianChart %}, define a {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} and bind the series to a set of data objects.

## Example
The following definition represents the data context that will be used to populate the Spline Area series with data:

<snippet id='categorical-source-ts'/>

We use an instance of this model to assign it as the `bindingContext` of the page we have put our Spline Area series on:

<snippet id='spline-area-series-binding-context'/>

And finally, in the XML definition of the page we put a {% typedoc_link classes:RadCartesianChart %}, add a {% typedoc_link classes:SplineAreaSeries %} instance to it and bind the series to the source of data:

<snippet id='spline-area-series-xml'/>

![Cartesian chart: Spline Area series](../../../img/ns_ui/chart_series_spline_area_android.png "Spline Area series on Android.") ![Cartesian chart: Spline Area series](../../../img/ns_ui/chart_series_spline_area_ios.png "Spline Area series on iOS.")

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
* [**Line Series**]({% slug chart-features-series-line %})
* [**Area Series**]({% slug chart-features-series-area %})
* [**Candlestick Series**]({% slug chart-features-series-financial-candlestick %})
* [**Ohlc Series**]({% slug chart-features-series-financial-ohlc %})