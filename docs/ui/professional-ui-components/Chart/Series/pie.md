---
title: Pie
page_title: Pie series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Pie series and continues with a sample scenario of how Pie series are used.
slug: chart-series-pie
tags: series, cartesian, pie, chart, nativescript, professional, ui
position: 11
publish: true
---

# RadChart Pie series
Unlike all other series, {% typedoc_link classes:PieSeries %} do not require axes. They visualize each data point as pie slices with arc size directly proportional to the magnitude of the raw data point's value. Pie slices represent data in one direction contrasting with the other series which represent data in two dimensions.

## Example
The following definition represents the data context that will be used to populate our Pie series with data:

<snippet id='categorical-source'/>

We use an instance of this model to assign it as the `bindingContext` of the page we have put our Pie series on:

<snippet id='binding-context-pie-series'/>

And finally, in the XML definition of the page we put two RadCartesianCharts, add a PieSeries instance to one of them and DonutSeries to the other and bind the series to the source of data.

<snippet id='pie-series'/>

This is how the example looks like:
![Cartesian chart: Pie series](../../../img/ns_ui/pie_series_android.png "Pie series on Android.") ![Cartesian chart: Pie series](../../../img/ns_ui/pie_series_ios.png "Pie series on iOS.")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Series Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Area Series**]({% slug chart-features-series-area %})
* [**Bubble Series**]({% slug chart-features-series-bubble %})
* [**Bar Series**]({% slug chart-features-series-bar %})
* [**Line Series**]({% slug chart-features-series-line %})
* [**Range-Bar Series**]({% slug chart-features-series-range-bar %})
* [**Scatter-Bubble Series**]({% slug chart-features-series-scatter-bubble %})
* [**Scatter Series**]({% slug chart-features-series-scatter %})
* [**Spline Series**]({% slug chart-features-series-spline %})
* [**Area Series**]({% slug chart-features-series-area %})
* [**Candlestick Series**]({% slug chart-features-series-financial-candlestick %})
* [**Ohlc Series**]({% slug chart-features-series-financial-ohlc %})