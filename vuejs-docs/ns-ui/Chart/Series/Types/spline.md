---
title: Spline
page_title: Spline series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Spline series and continues with a sample scenario of how Spline series are used.
slug: chart-series-spline-vue
tags: series, cartesian, spline, vue
position: 5
publish: true
---

# Chart Spline Series

**SplineSeries** are a type of [CategoricalSeries]({% slug chart-series-overview-vue %} "Chart Series Overview") that present categorical data as points connected with a a spline, i.e. a curved line segments. The spline chart usually visualizes a trend in data over intervals of time, but can also be used to show comparisons among discrete categories.

* [Setup](#setup)
* [References](#references)

## Setup

To display a Spline Chart, you will need to:
- Add a **RadCartesianChart** to your page.
- Add a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**) with the **v-tkCartesianHorizontalAxis** directive.
- Add a value axis (**LinearAxis** or **LogarithmicAxis**) with the **v-tkCartesianVerticalAxis** directive.
- Add at least one instance of **SplineSeries** with the **v-tkCartesianSeries** directive and set its **items** property to a collection of data items, its **categoryProperty** set to the name of the property of the data items that will be used to determine their category and its **valueProperty** to the name of the property used to determine their value.

 To illustrate this setup, let's create an example. Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

 #### Example 1: Define a collection of items

 <snippet id='chart-get-countries-data-vue'/>

 #### Example 2: Add chart to component's template

 <snippet id='chart-spline-series-vue'/>

#### Figure 1: Chart with SplineSeries on Android (left) and iOS (right)

![Cartesian chart: Spline series](../../../../../ui/img/ns_ui/spline_series_android.png "Spline series on Android.") ![Cartesian chart: Spline series](../../../../../ui/img/ns_ui/spline_series_ios.png "Spline series on iOS.")

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Spline Series Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/series/line)

Related articles you might find useful:

* [**Line Series**]({% slug chart-series-line-vue %})
* [**Area Series**]({% slug chart-series-area-vue %})
* [**Spline Area Series**]({% slug chart-series-spline-area-vue %})
