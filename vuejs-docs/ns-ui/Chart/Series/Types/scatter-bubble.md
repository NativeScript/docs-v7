---
title: Scatter Bubble
page_title: Scatter Bubble series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Scatter Bubble series and continues with a sample scenario of how Scatter Bubble series are used.
slug: chart-series-scatter-bubble-vue
tags: series, cartesian, scatter, bubble, vue, nativescript, professional, ui
position: 11
publish: true
---

# Chart Scatter Bubble Series

**ScatterBubbleSeries** are a type of [CartesianSeries]({% slug chart-series-overview-vue %} "Chart Series Overview") that use Cartesian coordinates to display values for typically two variables for a set of data. The data are displayed as a collection of bubble, each having the value of one variable determining the position on the horizontal axis and the value of the other variable determining the position on the vertical axis. Unlike **ScatterSeries** they can visualize a third value (on top of the two value properties) through the size of the bubbles. If you want to show bubbles for categorical data, you can use [BubbleSeries]({% slug chart-series-bubble-vue %} "Bubble Series").

* [Setup](#setup)
* [Bubble Scale](#bubble-scale)
* [References](#references)

## Setup

To display a Scatter Bubble Chart, you will need to:
- Add a **RadCartesianChart** to your component.
- Add a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**) with the **v-tkCartesianHorizontalAxis** directive.
- Add a value axis (**LinearAxis** or **LogarithmicAxis**) with the **v-tkCartesianVerticalAxis** directive.
- Add at least one instance of **ScatterSeries** with the **v-tkCartesianSeries** directive and set its **items** property to a collection of data items, the **xProperty** and **yProperty** to the names of the properties used to determine where to plot the scatter points and the **bubbleSizeProperty** to the name of the property used to determine the size of the bubble.

To illustrate this setup, let's create an example. Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.
 
 #### Example 1: Define a collection of items
 
 <snippet id='chart-get-scatter-data-vue'/>
 
 #### Example 2: Add chart to component's template
 
 <snippet id='chart-scatter-bubble-series-vue'/>

#### Figure 1: Chart with ScatterBubbleSeries on Android (left) and iOS (right)

![Cartesian chart: Scatter Bubble series](../../../../../docs/ui/img/ns_ui/scatter_bubble_series_android.png " Scatter Bubble series on Android.") ![Cartesian chart: Scatter Bubble series](../../../../../docs/ui/img/ns_ui/scatter_bubble_series_ios.png "Scatter Bubble series on iOS.")

## Bubble Scale

Additionally, {% typedoc_link classes:ScatterBubbleSeries %} expose a {% typedoc_link classes:ScatterBubbleSeries,member:bubbleScale%} property which can be used to fine-tune the size of the bubbles according to specific application requirements. The way the {% typedoc_link classes:ScatterBubbleSeries,member:bubbleScale%} property works is by multiplying its value to the radius calculated for each data-point's bubble to determine the bubble's final size.

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Scatter Bubble Series Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Bubble Series**]({% slug chart-series-bubble-vue %})
* [**Range Bar Series**]({% slug chart-series-range-bar-vue %})
* [**Scatter Series**]({% slug chart-series-scatter-vue %})
