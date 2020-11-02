---
title: Spline
page_title: Spline Series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Spline series and continues with a sample scenario of how Spline series are used.
slug: chart-series-spline
tags: series, cartesian, spline, chart, nativescript, professional, ui
position: 5
publish: true
---

# Chart Spline Series

**SplineSeries** are a type of [CategoricalSeries]({% slug chart-series-overview %} "Chart Series Overview") that present categorical data as points connected with a a spline, i.e. a curved line segments. The spline chart usually visualizes a trend in data over intervals of time, but can also be used to show comparisons among discrete categories.

* [Setup](#setup)
* [References](#references)

## Setup

To display a Spline Chart, you will need to:
- Add a **RadCartesianChart** to your page.
- Set the chart's **horizontalAxis** to a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**).
- Set the chart's **verticalAxis** to a value axis (**LinearAxis** or **LogarithmicAxis**).
- Add at least one instance of **SplineSeries**  to the chart's **series** property and set its **items** property to a collection of data items, its **categoryProperty** set to the name of the property of the data items that will be used to determine their category and its **valueProperty** to the name of the property used to determine their value.

To illustrate this setup, let's create an example. First we will create a source with items:
 
#### Example 1: Define a source with data

<snippet id='categorical-source-ts'/>

We use an instance of this model to assign it as the `bindingContext` of the page we have put our Spline series on:

#### Example 2: Update bindingContext

<snippet id='spline-series-binding-context'/>

And finally, in the XML definition of the page we put a {% typedoc_link classes:RadCartesianChart %}, add a {% typedoc_link classes:SplineSeries %} instance to it and bind the series to the source of data:

#### Example 3: Add chart to page's markup

<snippet id='spline-series-xml'/>

#### Figure 1: Chart with SplineSeries on Android (left) and iOS (right)

![Cartesian chart: Spline series](../../../../img/ns_ui/spline_series_android.png "Spline series on Android.") ![Cartesian chart: Spline series](../../../../img/ns_ui/spline_series_ios.png "Spline series on iOS.")

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Spline Series Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/series/line)

Related articles you might find useful:

* [**Line Series**]({% slug chart-series-line %})
* [**Area Series**]({% slug chart-series-area %})
* [**Spline Area Series**]({% slug chart-series-spline-area %})
