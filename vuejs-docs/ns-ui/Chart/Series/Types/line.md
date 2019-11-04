---
title: Line
page_title: Line series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Line series and continues with a sample scenario of how Line series are used.
slug: chart-series-line-vue
tags: series, cartesian, line, vue, nativescript, professional, ui
position: 4
publish: true
---

# Chart Line Series

**LineSeries** are a type of [CategoricalSeries]({% slug chart-series-overview-vue %} "Chart Series Overview") that present categorical data as points connected with a line. The line chart usually visualizes a trend in data over intervals of time, but can also be used to show comparisons among discrete categories.

* [Setup](#setup)
* [References](#references)

## Setup

To display a Line Chart, you will need to:
- Add a **RadCartesianChart** to your component.
- Add a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**) with the **v-tkCartesianHorizontalAxis** directive.
- Add a value axis (**LinearAxis** or **LogarithmicAxis**) with the **v-tkCartesianVerticalAxis** directive.
- Add at least one instance of **LineSeries** with the **v-tkCartesianSeries** directive and set its **items** property to a collection of data items, its **categoryProperty** to the name of the property of the data items that will be used to determine their category and its **valueProperty** to the name of the property used to determine their value.

To illustrate this setup, let's create an example. Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

 #### Example 1: Define a collection of items

 <snippet id='chart-get-countries-data-vue'/>

 #### Example 2: Add chart to component's template

 <snippet id='chart-getting-started-vue'/>

#### Figure 1: Chart with LineSeries on Android (left) and iOS (right)

![Cartesian chart: Line series](../../../../../ui/img/ns_ui/line_series_android.png "Line series on Android.") ![Cartesian chart: Line series](../../../../../ui/img/ns_ui/line_series_ios.png "Line series on iOS.")

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Line Series Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/series/line)

Related articles you might find useful:

* [**Area Series**]({% slug chart-series-area-vue %})
* [**Bar Series**]({% slug chart-series-bar-vue %})
* [**Spline Series**]({% slug chart-series-spline-vue %})
