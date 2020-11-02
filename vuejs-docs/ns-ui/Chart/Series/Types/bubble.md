---
title: Bubble
page_title: Bubble Series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Bubble series and continues with a sample scenario of how Bubble series are used.
slug: chart-series-bubble-vue
tags: series, cartesian, bubble, vue, nativescript, professional, ui
position: 3
publish: true
---

# Chart Bubble Series

**BubbleSeries** are a type of [CategoricalSeries]({% slug chart-series-overview-vue %} "Chart Series Overview") that present categorical data with bubble shapes plot on cartesian coordinates based on the values that they represent. The bubble chart usually shows comparisons among discrete categories but can also be used to visualize a trend in data over intervals of time. They differ from **BarSeries** not only by the shape used, but also that they can visualize a third value (on top of category and value) through the size of the bubbles. If you want to show bubbles for data which is not categorical, you can use [ScatterBubbleSeries]({% slug chart-series-scatter-bubble-vue %} "Scatter Bubble Series").

* [Setup](#setup)
* [Bubble Scale](#bubble-scale)
* [References](#references)

## Setup

To display a Bubble Chart, you will need to:
- Add a **RadCartesianChart** to your component.
- Add a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**) with the **v-tkCartesianHorizontalAxis** directive.
- Add a value axis (**BubbleSeries** or **LogarithmicAxis**) with the **v-tkCartesianVerticalAxis** directive.
- Add at least one instance of **BubbleSeries**  with the **v-tkCartesianSeries** directive and set its **items** property to a collection of data items, its **categoryProperty** to the name of the property of the data items that will be used to determine their category, its **valueProperty** to the name of the property used to determine their value and its **bubbleSizeProperty** to the name of the property used to determine the size of the bubble.

To illustrate this setup, let's create an example. Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.
 
 #### Example 1: Define a collection of items

<snippet id='chart-bubble-data-vue'/>

#### Example 2: Add chart to component's template

<snippet id='chart-bubble-vue'/>

#### Figure 1: Chart with BubbleSeries on Android (left) and iOS (right)

![Cartesian chart: Bubble series](../../../../../ui/img/ns_ui/bubble_series_android.png "Bubble series on Android.") ![Cartesian chart: Bubble series](../../../../../ui/img/ns_ui/bubble_series_ios.png "Bubble series on iOS.")

## Bubble Scale

Additionally, {% typedoc_link classes:BubbleSeries %} expose a {% typedoc_link classes:BubbleSeries,member:bubbleScale%} property which can be used to fine-tune the size of the bubbles according to specific application requirements. The way the {% typedoc_link classes:BubbleSeries,member:bubbleScale%} property works is by multiplying its value to the radius calculated for each data-point's bubble to determine the bubble's final size.

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Bubble Series Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-vue %})
* [**Line Series**]({% slug chart-series-line-vue %})
* [**Scatter Bubble Series**]({% slug chart-series-scatter-bubble-vue %})
