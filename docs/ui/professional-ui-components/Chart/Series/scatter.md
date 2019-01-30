---
title: Scatter
page_title: Scatter series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Scatter series and continues with a sample scenario of how Scatter series are used.
slug: chart-series-scatter
tags: series, cartesian, scatter, chart, nativescript, professional, ui
position: 10
publish: true
---

# RadChart Scatter Series
Scatter series are used in the context of a {% typedoc_link classes:RadCartesianChart %} and two {% typedoc_link classes:LinearAxis %} instances. Besides the setup requirements that come from {% typedoc_link classes:CartesianSeries %}, {% typedoc_link classes:ScatterSeries %} require an additional {% typedoc_link classes:ScatterSeries,member:xProperty%} and {% typedoc_link classes:ScatterSeries,member:yProperty%} parameters instead of {% typedoc_link classes:ScatterSeries,member:valueProperty%} and {% typedoc_link classes:ScatterSeries,member:categoryProperty%}.

## Customization
Scatter series could be customized as a standard {% typedoc_link classes:CartesianSeries %} as it is described in [series styles article]({% slug series-styling %} "Read more about styling of series.") 

## Example
The following definition represents the data context that will be used to populate the Scatter series with data:

<snippet id='scatter-data-source'/>

We use an instance of this model to assign it as the `bindingContext` of the page we have put our Scatter series on:

<snippet id='binding-context-scatter'/>

And finally, in the XML definition of the page we put a {% typedoc_link classes:RadCartesianChart %}, add a {% typedoc_link classes:ScatterSeries %} instance to it and bind the series to the source of data:

<snippet id='scatter-series'/>

![Cartesian chart: Scatter series](../../../img/ns_ui/scatter_series_android.png " Scatter series on Android.") ![Cartesian chart: Scatter series](../../../img/ns_ui/scatter_series_ios.png "Scatter series on iOS.")

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
* [**Line Series**]({% slug chart-features-series-line %})
* [**Spline Series**]({% slug chart-features-series-spline %})
* [**Area Series**]({% slug chart-features-series-area %})
* [**Candlestick Series**]({% slug chart-features-series-financial-candlestick %})
* [**Ohlc Series**]({% slug chart-features-series-financial-ohlc %})