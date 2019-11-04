---
title: OHLC Series
page_title: OHLC Series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of OHLC series and continues with a sample scenario of how OHLC series are used.
slug: chart-series-ohlc
tags: series, OHLC, nativescript, professional, ui
position: 8
publish: true
---

# Chart OHLC Series

**OhlcSeries** are a type of [CategoricalSeries]({% slug chart-series-overview %} "Chart Series Overview") that are typically used to illustrate movements in the price of a financial instrument over time. That movement is represented by lines visualizing the open, high, low and close price (thus the name Ohlc) for a specific period. Each line on the chart shows the price range (the highest and lowest prices) over one unit of time, e.g., one day or one hour. Tick marks project from each side of the line indicating the opening (starting) price on the left, and the closing (ending) price for that time period on the right. The lines are shown in different colors depending on whether prices rose or fell in that period.

* [Setup](#setup)
* [References](#references)

## Setup

To display an Ohlc Chart, you will need to:
- Add a **RadCartesianChart** to your page.
- Set the chart's **horizontalAxis** to a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**).
- Set the chart's **verticalAxis** to a value axis (**LinearAxis** or **LogarithmicAxis**).
- Add at least one instance of **OhlcSeries**  to the chart's **series** property and set its **items** property to a collection of data items, its **categoryProperty** set to the name of the property of the data items that will be used to determine their category and the **openPropertyName**, **highPropertyName**, **lowPropertyName** and **closePropertyName** set to the names of the properties used to determine the open, high, low and close values.

To illustrate this setup, let's create an example. First we will create a source with items:
 
#### Example 1: Define a source with data

<snippet id='ohlc-data-model'/>

We use an instance of this model to assign it as the *bindingContext* of the page we have put our Scatter Bubble series on:

#### Example 2: Update bindingContext

<snippet id='binding-context-ohlc-series'/>

And finally, in the XML definition of the page we put a RadCartesianChart, add a ScatterBubbleSeries instance to it and bind the series to the source of data:

#### Example 3: Add chart to page's markup

<snippet id='ohlc-series'/>

#### Figure 1: Chart with OhlcSeries on Android (left) and iOS (right)

![Cartesian chart: OHLC series](../../../../img/ns_ui/ohlc_series_android.png " Ohlc series on Android.") ![Cartesian chart: OHLC series](../../../../img/ns_ui/ohlc_series_ios.png "Ohlc series on iOS.")

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Ohlc Series Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/series/financial)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar %})
* [**Area Series**]({% slug chart-series-spline-area %})
* [**Candlestick Series**]({% slug chart-series-candlestick %})
