---
title: Scatter
page_title: Scatter Series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Scatter series and continues with a sample scenario of how Scatter series are used.
slug: chart-series-scatter-angular
tags: series, cartesian, scatter, angular, nativescript, professional, ui
position: 10
publish: true
---

# Chart Scatter Series

**ScatterSeries** are a type of [CartesianSeries]({% slug chart-series-overview-angular %} "Chart Series Overview") that use Cartesian coordinates to display values for typically two variables for a set of data. The data are displayed as a collection of points, each having the value of one variable determining the position on the horizontal axis and the value of the other variable determining the position on the vertical axis.

* [Setup](#setup)
* [References](#references)

## Setup

To display a Scatter Chart, you will need to:
- Add a **RadCartesianChart** to your page.
- Add a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**) with the **tkCartesianHorizontalAxis** directive.
- Add a value axis (**LinearAxis** or **LogarithmicAxis**) with the **tkCartesianVerticalAxis** directive.
- Add at least one instance of **ScatterSeries** with the **tkCartesianSeries** directive and set its **items** property to a collection of data items and the **xProperty** and **yProperty** to the names of the properties used to determine where to plot the scatter points.

To illustrate this setup, let's create an example. Just like with all angular 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. We create a basic angular `Component` that contains a collection of objects provided by an custom service, which will be used by the chart to provide intuitive data visualization. The service is a simple 'mock' of an backend call that will return an array of objects:

#### Example 1: Define a data service

<snippet id='chart-angular-data-service'/>

Inside that service we have a single function which returns an array:

#### Example 2: Define a source with data

<snippet id='chart-angular-range-bar-source'/>

<snippet id='chart-angular-product'/>

#### Example 3: Add chart to component's template

<snippet id='chart-angular-scatter-series-component'/>
<snippet id='chart-angular-scatter-series'/>

#### Figure 1: Chart with ScatterSeries on Android (left) and iOS (right)

![Cartesian chart: Scatter series](../../../../img/ns_ui/scatter_series_android.png " Scatter series on Android.") ![Cartesian chart: Scatter series](../../../../img/ns_ui/scatter_series_ios.png "Scatter series on iOS.")

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Scatter Series Example](https://github.com/NativeScript/nativescript-ui-samples-angular/tree/master/chart/app/examples/series/scatter)

Related articles you might find useful:

* [**Area Series**]({% slug chart-series-area-angular %})
* [**Bubble Series**]({% slug chart-series-bubble-angular %})
* [**Scatter Bubble Series**]({% slug chart-series-scatter-bubble-angular %})
