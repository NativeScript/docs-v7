---
title: Scatter Bubble
page_title: Scatter Bubble series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Scatter Bubble series and continues with a sample scenario of how Scatter Bubble series are used.
slug: chart-series-scatter-bubble
tags: series, cartesian, scatter, bubble, chart, nativescript, professional, ui
position: 9
publish: true
---

# RadChart Scatter Bubble Series
Scatter Bubble series are {% typedoc_link classes:ScatterSeries %} and are used in the context of a {% typedoc_link classes:RadCartesianChart %}  and two {% typedoc_link classes:LinearAxis %} instances. Besides the setup requirements that come from {% typedoc_link classes:ScatterSeries %}, {% typedoc_link classes:BubbleSeries %} require an additional setup parameter which should come from the data source that defines the *bubble size*. The value for this parameter is supplied by defining the {% typedoc_link classes:ScatterBubbleSeries,member:bubbleSizeProperty%}.

## Customization
On top of the customization options that come from the {% typedoc_link classes:ScatterSeries %} context, {% typedoc_link classes:ScatterBubbleSeries %} expose the {% typedoc_link classes:ScatterBubbleSeries,member:bubbleScale%} property which can be used to fine-tune the size of the bubbles according to specific application requirements. The way the {% typedoc_link classes:ScatterBubbleSeries,member:bubbleScale%} property works is by multiplying its value to the radius of calculated for each data-point's bubble.

## Example
The following definition represents the data context that will be used to populate the Scatter Bubble series with data:

<snippet id='scatter-data-source'/>

We use an instance of this model to assign it as the `bindingContext` of the page we have put our Scatter Bubble series on:

<snippet id='binding-context-scatter-bubble'/>

And finally, in the XML definition of the page we put a {% typedoc_link classes:RadCartesianChart %}, add a {% typedoc_link classes:ScatterBubbleSeries %} instance to it and bind the series to the source of data:

<snippet id='scatter-bubble-series'/>

![Cartesian chart: Scatter Bubble series](../../../img/ns_ui/scatter_bubble_series_android.png " Scatter Bubble series on Android.") ![Cartesian chart: Scatter Bubble series](../../../img/ns_ui/scatter_bubble_series_ios.png "Scatter Bubble series on iOS.")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Series Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Area Series**]({% slug chart-series-area %})
* [**Bubble Series**]({% slug chart-series-bubble %})
* [**Bar Series**]({% slug chart-series-bar %})
* [**Pie Series**]({% slug chart-series-pie %})
* [**Range-Bar Series**]({% slug chart-series-range-bar %})
* [**Scatter Series**]({% slug chart-series-scatter %})
* [**Spline Series**]({% slug chart-series-spline %})
* [**Line Series**]({% slug chart-series-line %})
* [**Area Series**]({% slug chart-series-spline-area %})
* [**Candlestick Series**]({% slug chart-series-candlestick %})
* [**Ohlc Series**]({% slug chart-ohlc-series %})
