---
title: Candlestick series
page_title: Candlestick series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Candlestick series and continues with a sample scenario of how Candlestick series are used.
slug: chart-series-candlestick
tags: series, cartesian, candlestick, nativescript, professional, ui
position: 9
publish: true
---

# Chart Candlestick Series

**CandlestickSeries** are a type of [CategoricalSeries]({% slug chart-series-overview %} "Chart Series Overview") that are typically used to illustrate movements in the price of a financial instrument over time. That movement is represented by candles visualizing the open, high, low and close price for a specific period. Candlesticks are composed of a body, and an upper and a lower shadow (wick). The body displays the range between the opening (starting) price and the closing (ending) price over one unit of time, e.g., one day or one hour. The wick illustrates the highest and lowest traded prices of an asset during the time interval represented. The candles are shown in different colors depending on whether prices rose or fell in that period.

* [Setup](#setup)
* [References](#references)

## Setup

To display a Candlestick Chart, you will need to:
- Add **RadCartesianChart** to your page.
- Set the chart's **horizontalAxis** to a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**).
- Set the chart's **verticalAxis** to a value axis (**LinearAxis** or **LogarithmicAxis**).
- Add at least one instance of **CandlestickSeries** to the chart's **series** property and set its **items** property to a collection of data items, its **categoryProperty** to the name of the property of the data items that will be used to determine their category, and the **openPropertyName**, **highPropertyName**, **lowPropertyName** and **closePropertyName** to the names of the properties used to determine the open, high, low and close values.

To illustrate this setup, let's create an example. First we will create a source with items:
 
#### Example 1: Define a source with data
 
<snippet id='candlestick-data-model'/>

We use an instance of this model to assign it as the *bindingContext* of the page we have put our Scatter Bubble series on:

#### Example 2: Update bindingContext

<snippet id='binding-context-candlestick-series'/>

And finally, in the XML definition of the page we put a RadCartesianChart, add a ScatterBubbleSeries instance to it and bind the series to the source of data:

#### Example 3: Add chart to page's markup

<snippet id='candlestick-series'/>

#### Figure 1: Chart with CandlestickSeries on Android (left) and iOS (right)

![Cartesian chart: Candlestick series](../../../../img/ns_ui/candlestick_series_android.png " Candlestick Series on Android.") ![Cartesian chart: Candlestick series](../../../../img/ns_ui/candlestick_series_ios.png "Candlestick Series on iOS.")

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Candlestick Series Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/series/financial)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar %})
* [**Range Bar Series**]({% slug chart-series-range-bar %})
* [**Ohlc Series**]({% slug chart-series-ohlc %})
