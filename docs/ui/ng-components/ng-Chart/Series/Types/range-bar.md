---
title: Range Bar
page_title: Range Bar Series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Range Bar series and continues with a sample scenario of how Range Bar series are used.
slug: chart-series-range-bar-angular
tags: series, cartesian, range, bar, angular, nativescript, professional, ui
position: 2
publish: true
---

# Chart Range Bar Series

**RangeBarSeries** are a type of [CategoricalSeries]({% slug chart-series-overview-angular %} "Chart Series Overview") that present categorical data with rectangular bars with heights or lengths proportional to the values that they represent. They differ from **BarSeries** by the fact that they represent two values - low and high and each bar represent the difference between a point's low and high value. The range bar chart usually shows comparisons among discrete categories but can also be used to visualize a trend in data over intervals of time.

## Setup

To display a Range Bar Chart, you will need to:
- Add a **RadCartesianChart** to your component.
- Add a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**) with the **tkCartesianHorizontalAxis** directive.
- Add a value axis (**LinearAxis** or **LogarithmicAxis**) with the **tkCartesianVerticalAxis** directive.
- Add at least one instance of **RangeBarSeries** with the **tkCartesianSeries** directive and set its **items** property to a collection of data items, its **categoryProperty** set to the name of the property of the data items that will be used to determine their category and the **lowPropertyName** and **highPropertyName** to the names of the properties used to determine their low and high values.

 > The above setup will create a chart with vertical bars. If you need horizontal bars, you can swap the axes' position and add the tkCartesianVerticalAxis to the category axis and the tkCartesianHorizontalAxis to the value axis.
 
To illustrate this setup, let's create an example. Just like with all angular 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. We create a basic angular `Component` that contains a collection of objects provided by an custom service, which will be used by the chart to provide intuitive data visualization. The service is a simple 'mock' of an backend call that will return an array of objects:

 #### Example 1: Define a data service
 
<snippet id='chart-angular-data-service'/>

Inside that service we have a single function which returns an array:

#### Example 2: Define a source with data

<snippet id='chart-angular-range-bar-source'/>

<snippet id='chart-angular-product'/>

#### Example 3: Add chart to component's template

<snippet id='chart-angular-range-bar-series-component'/>
<snippet id='chart-angular-range-bar-series'/>

#### Figure 1: Chart with RangeBarSeries on Android (left) and iOS (right)

![Cartesian chart: Range bar series](../../../../img/ns_ui/range_bar_series_android.png "Range bar series on Android.") ![Cartesian chart: Range bar series](../../../../img/ns_ui/range_bar_series_ios.png "Range bar series on iOS.")

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Range Bar Series Example](https://github.com/NativeScript/nativescript-ui-samples-angular/tree/master/chart/app/examples/series/bar)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-angular %})
* [**Candlestick Series**]({% slug chart-series-candlestick-angular %})
* [**Ohlc Series**]({% slug chart-series-ohlc-angular %})
