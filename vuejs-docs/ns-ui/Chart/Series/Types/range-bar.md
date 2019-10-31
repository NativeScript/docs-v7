---
title: Range Bar
page_title: Range Bar series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Range Bar series and continues with a sample scenario of how Range Bar series are used.
slug: chart-series-range-bar-vue
tags: series, cartesian, range, bar, vue, nativescript, professional, ui
position: 2
publish: true
---

# Chart Range Bar Series

**RangeBarSeries** are a type of [CategoricalSeries]({% slug chart-series-overview-vue %} "Chart Series Overview") that present categorical data with rectangular bars with heights or lengths proportional to the values that they represent. They differ from **BarSeries** by the fact that they represent two values - low and high and each bar represent the difference between a point's low and high value. The range bar chart usually shows comparisons among discrete categories but can also be used to visualize a trend in data over intervals of time.

## Setup

To display a Range Bar Chart, you will need to:
- Add a **RadCartesianChart** to your component.
- Add a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**) with the **v-tkCartesianHorizontalAxis** directive.
- Add a value axis (**LinearAxis** or **LogarithmicAxis**) with the **v-tkCartesianVerticalAxis** directive.
- Add at least one instance of **RangeBarSeries** with the **v-tkCartesianSeries** directive and set its **items** property to a collection of data items, its **categoryProperty** set to the name of the property of the data items that will be used to determine their category and the **lowPropertyName** and **highPropertyName** to the names of the properties used to determine their low and high values.

 > The above setup will create a chart with vertical bars. If you need horizontal bars, you can swap the axes' position and add the v-tkCartesianVerticalAxis to the category axis and the v-tkCartesianHorizontalAxis to the value axis.
 
To illustrate this setup, let's create an example. Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

 #### Example 1: Define a collection of items

 <snippet id='chart-get-range-bar-data-vue'/>

 #### Example 2: Add chart to component's template

 <snippet id='chart-range-bar-vue'/>

#### Figure 1: Chart with RangeBarSeries on Android (left) and iOS (right)

![Cartesian chart: Range bar series](../../../../../ui/img/ns_ui/range_bar_series_android.png "Range bar series on Android.") ![Cartesian chart: Range bar series](../../../../../ui/img/ns_ui/range_bar_series_ios.png "Range bar series on iOS.")

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Range Bar Series Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/series/bar)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-vue %})
* [**Candlestick Series**]({% slug chart-series-candlestick-vue %})
* [**Ohlc Series**]({% slug chart-series-ohlc-vue %})
