---
title: Scatter
page_title: Scatter series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Scatter series and continues with a sample scenario of how Scatter series are used.
slug: chart-series-scatter-vue
tags: series, cartesian, scatter, vue, nativescript, professional, ui
position: 10
publish: true
---

# Chart Scatter Series

**ScatterSeries** are a type of [CartesianSeries]({% slug chart-series-overview-vue %} "Chart Series Overview") that use Cartesian coordinates to display values for typically two variables for a set of data. The data are displayed as a collection of points, each having the value of one variable determining the position on the horizontal axis and the value of the other variable determining the position on the vertical axis.

* [Setup](#setup)
* [References](#references)

## Setup

To display a Scatter Chart, you will need to:
- Add a **RadCartesianChart** to your page.
- Add a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**) with the **v-tkCartesianHorizontalAxis** directive.
- Add a value axis (**LinearAxis** or **LogarithmicAxis**) with the **v-tkCartesianVerticalAxis** directive.
- Add at least one instance of **ScatterSeries** with the **v-tkCartesianSeries** directive and set its **items** property to a collection of data items and the **xProperty** and **yProperty** to the names of the properties used to determine where to plot the scatter points.

To illustrate this setup, let's create an example. Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.
 
 #### Example 1: Define a collection of items
 
 <snippet id='chart-get-scatter-data-vue'/>
 
 #### Example 2: Add chart to component's template
 
 <snippet id='chart-scatter-vue'/>

#### Figure 1: Chart with ScatterSeries on Android (left) and iOS (right)

![Cartesian chart: Scatter series](../../../../../docs/ui/img/ns_ui/scatter_series_android.png " Scatter series on Android.") ![Cartesian chart: Scatter series](../../../../../docs/ui/img/ns_ui/scatter_series_ios.png "Scatter series on iOS.")

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Scatter Series Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Area Series**]({% slug chart-series-area-vue %})
* [**Bubble Series**]({% slug chart-series-bubble-vue %})
* [**Scatter Bubble Series**]({% slug chart-series-scatter-bubble-vue %})
