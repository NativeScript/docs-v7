---
title: Bar
page_title: Bar Series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Bar series and continues with a sample scenario of how Bar series are used.
slug: chart-series-bar-vue
tags: series, cartesian, bar, vue, nativescript, professional, ui
position: 1
publish: true
---

# Chart Bar Series

**BarSeries** are a type of [CategoricalSeries]({% slug chart-series-overview-vue %} "Chart Series Overview") that present categorical data with rectangular bars with heights or lengths proportional to the values that they represent. The bar chart usually shows comparisons among discrete categories but can also be used to visualize a trend in data over intervals of time.

* [Setup](#setup)
* [Bar Size](#bar-size)
* [References](#references)

## Setup

To display a Bar Chart, you will need to:
- Add a **RadCartesianChart** to your component.
- Add a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**) with the **v-tkCartesianHorizontalAxis** directive.
- Add a value axis (**LinearAxis** or **LogarithmicAxis**) with the **v-tkCartesianVerticalAxis** directive.
- Add at least one instance of **BarSeries**  with the **v-tkCartesianSeries** directive and set its **items** property to a collection of data items, its **categoryProperty** to the name of the property of the data items that will be used to determine their category and its **valueProperty** to the name of the property used to determine their value.
 
 > The above setup will create a chart with vertical bars. If you need horizontal bars, you can swap the axes' position and add the tkCartesianVerticalAxis to the category axis and the tkCartesianHorizontalAxis to the value axis.
 
To illustrate this setup, let's create an example. Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.
  
#### Example 1: Define a collection of items

<snippet id='chart-get-countries-data-vue'/>

#### Example 2: Add chart to component's template

<snippet id='chart-bar-series-vue'/>

#### Figure 1: Chart with BarSeries on Android (left) and iOS (right)

![Cartesian chart: Bar series](../../../../../docs/ui/img/ns_ui/bar_series_android.png "Bar series on Android.") ![Cartesian chart: Bar series](../../../../../docs/ui/img/ns_ui/bar_series_ios.png "Bar series on iOS.")

## Bar Size

By default, the size of a bar is calculated based on the axis plot mode and the count of the categories from the data source. There are cases in which the automatically calculated size does not meet the specific application scenarios. By using the {% typedoc_link classes:BarSeries,member:minBarSize %} and {% typedoc_link classes:BarSeries,member:maxBarSize %} properties you can adjust the size of a single bar within the series. The properties accept values in device independent pixels. These properties define boundaries for the size of a bar.

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Bar Series Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Bubble Series**]({% slug chart-series-bubble-vue %})
* [**Range Bar Series**]({% slug chart-series-range-bar-vue %})
* [**Line Series**]({% slug chart-series-line-vue %})
