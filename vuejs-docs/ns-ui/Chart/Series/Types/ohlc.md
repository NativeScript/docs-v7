---
title: OHLC Series
page_title: OHLC series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of OHLC series and continues with a sample scenario of how OHLC series are used.
slug: chart-series-ohlc-vue
tags: series, OHLC, vue, nativescript, professional, ui
position: 8
publish: true
---

# Chart OHLC Series

**OhlcSeries** are a type of [CategoricalSeries]({% slug chart-series-overview-vue %} "Chart Series Overview") that are typically used to illustrate movements in the price of a financial instrument over time. That movement is represented by lines visualizing the open, high, low and close price (thus the name Ohlc) for a specific period. Each line on the chart shows the price range (the highest and lowest prices) over one unit of time, e.g., one day or one hour. Tick marks project from each side of the line indicating the opening (starting) price on the left, and the closing (ending) price for that time period on the right. The lines are shown in different colors depending on whether prices rose or fell in that period.

* [Setup](#setup)
* [References](#references)

## Setup

To display an Ohlc Chart, you will need to:
- Add a **RadCartesianChart** to your component.
- Add a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**) with the **v-tkCartesianHorizontalAxis** directive.
- Add a value axis (**LinearAxis** or **LogarithmicAxis**) with the **v-tkCartesianVerticalAxis** directive.
- Add at least one instance of **OhlcSeries** with the **v-tkCartesianSeries** directive and set its **items** property to a collection of data items, its **categoryProperty** set to the name of the property of the data items that will be used to determine their category and the **openPropertyName**, **highPropertyName**, **lowPropertyName** and **closePropertyName** set to the names of the properties used to determine the open, high, low and close values.

To illustrate this setup, let's create an example. Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.
 
 #### Example 1: Define a collection of items
 
 <snippet id='chart-get-financial-data'/>
 
 #### Example 2: Add chart to component's template
 
 <snippet id='chart-ohlc-series-vue'/>

#### Figure 1: Chart with OhlcSeries on Android (left) and iOS (right)

![Cartesian chart: OHLC series](../../../../../docs/ui/img/ns_ui/ohlc_series_android.png " Ohlc series on Android.") ![Cartesian chart: OHLC series](../../../../../docs/ui/img/ns_ui/ohlc_series_ios.png "Ohlc series on iOS.")

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Ohlc Series Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-vue %})
* [**Area Series**]({% slug chart-series-spline-area-vue %})
* [**Candlestick Series**]({% slug chart-series-candlestick-vue %})
