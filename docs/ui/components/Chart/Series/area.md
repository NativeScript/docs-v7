---
title: Area
page_title: Area series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Area series and continues with a sample scenario of how Area series are used.
slug: chart-series-area
tags: series, cartesian, area, nativescript, professional, ui
position: 7
publish: true
---

# RadChart Area Series
Area series work pretty much the same way as Line series with the only difference that the area between the categorical axis and the data points is filled with the corresponding color of the line. To use Area series, you need to initialize a {% typedoc_link classes:RadCartesianChart %}, define a {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} and bind the series to a set of data objects.

## Example
The following definition represents the data context that will be used to populate the Area series with data:

<snippet id='categorical-source'/>

We use an instance of this model to assign it as the `bindingContext` of the page we have put our Area series on:

<snippet id='binding-context-area-series'/>

And finally, in the XML definition of the page we put a `RadCartesianChart`, add a AreaSeries instance to it and bind the series to the source of data:

<snippet id='area-series'/>

![Cartesian chart: Area series](../../../img/ns_ui/area_series_android.png "Area series on Android.") ![Cartesian chart: Area series](../../../img/ns_ui/area_series_ios.png "Area series on iOS.")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Series Examples](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Bubble Series**]({% slug chart-series-bubble %})
* [**Bar Series**]({% slug chart-series-bar %})
* [**Pie Series**]({% slug chart-series-pie %})
* [**Range-Bar Series**]({% slug chart-series-range-bar %})
* [**Scatter-Bubble Series**]({% slug chart-series-scatter-bubble %})
* [**Scatter Series**]({% slug chart-series-scatter %})
* [**Spline Series**]({% slug chart-series-spline %})
* [**Line Series**]({% slug chart-series-line %})
* [**Area Series**]({% slug chart-series-spline-area %})
* [**Candlestick Series**]({% slug chart-series-candlestick %})
* [**Ohlc Series**]({% slug chart-ohlc-series %})