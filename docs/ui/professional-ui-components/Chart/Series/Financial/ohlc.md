---
title: OHLC Series
page_title: OHLC series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of OHLC series and continues with a sample scenario of how OHLC series are used.
slug: chart-ohlc-series
tags: series, OHLC
position: 3
publish: true
previous_url: controls/chart/series/financial/ohlc
---

## Ohlc series: overview
This series operates with a special kind of data in the form of four parameters defining the stock market - open, high, low, and close. The high and low values show the price range (the highest and lowest prices) over one unit of time. The open and close values indicate the opening and closing price of the stock for the corresponding period. The width of the ohlc bar is determined by the period between 2 bars and the range of the axis

### Customization

To present a better view over OHLC series we will take a look at the following example:

### Example
The following definition represents the data context that will be used to populate the OHLC series with data:

<snippet id='ohlc-data-model'/>

We use an instance of this model to assign it as the *bindingContext* of the page we have put our Scatter Bubble series on:

<snippet id='binding-context-ohlc-series'/>

And finally, in the XML definition of the page we put a RadCartesianChart, add a ScatterBubbleSeries instance to it and bind the series to the source of data:

<snippet id='ohlc-series'/>

![Cartesian chart: OHLC series](../../../../img/ns_ui/ohlc_series_anroid.png " Scatter Bubble series on Android.") ![Cartesian chart: OHLC series](../../../../img/ns_ui/ohlc_series_ios.png "Scatter Bubble series on iOS.")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Financial Series Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/series/financial)

Related articles you might find useful:

* [**Area Series**]({% slug chart-features-series-area %})
* [**Bubble Series**]({% slug chart-features-series-bubble %})
* [**Bar Series**]({% slug chart-features-series-bar %})
* [**Pie Series**]({% slug chart-features-series-pie %})
* [**Range-Bar Series**]({% slug chart-features-series-range-bar %})
* [**Scatter-Bubble Series**]({% slug chart-features-series-scatter-bubble %})
* [**Line Series**]({% slug chart-features-series-line %})
* [**Spline Series**]({% slug chart-features-series-spline %})
* [**Area Series**]({% slug chart-features-series-area %})