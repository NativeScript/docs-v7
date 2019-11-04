---
title: Line
page_title: Line Series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Line series and continues with a sample scenario of how Line series are used.
slug: chart-series-line
tags: series, cartesian, line, nativescript, professional, ui
position: 4
publish: true
---

# Chart Line Series

**LineSeries** are a type of [CategoricalSeries]({% slug chart-series-overview %} "Chart Series Overview") that present categorical data as points connected with a line. The line chart usually visualizes a trend in data over intervals of time, but can also be used to show comparisons among discrete categories.

* [Setup](#setup)
* [References](#references)

## Setup

To display a Line Chart, you will need to:
- Add a **RadCartesianChart** to your page.
- Set the chart's **horizontalAxis** to a category axis (**CategoricalAxis**, **DateTimeCategoricalAxis** or **DateTimeContinuousAxis**).
- Set the chart's **verticalAxis** to a value axis (**LinearAxis** or **LogarithmicAxis**).
- Add at least one instance of **LineSeries**  to the chart's **series** property and set its **items** property to a collection of data items, its **categoryProperty** set to the name of the property of the data items that will be used to determine their category and its **valueProperty** to the name of the property used to determine their value.

To illustrate this setup, let's create an example. First we will create a source with items:
 
#### Example 1: Define a source with data
 
<snippet id='categorical-source'/>

We use an instance of this model to assign it as the `bindingContext` of the page we have put our Line series on:

#### Example 2: Update bindingContext

<snippet id='line-series-binding-context'/>

And finally, in the XML definition of the page we put a {% typedoc_link classes:RadCartesianChart %}, add a {% typedoc_link classes:LineSeries %} instance to it and bind the series to the source of data:

#### Example 3: Add chart to page's markup

<snippet id='line-series'/>

Here's how your Line chart should look like:

#### Figure 1: Chart with LineSeries on Android (left) and iOS (right)

![Cartesian chart: Line series](../../../../img/ns_ui/line_series_android.png "Line series on Android.") ![Cartesian chart: Line series](../../../../img/ns_ui/line_series_ios.png "Line series on iOS.")

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Line Series Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/series/line)

Related articles you might find useful:

* [**Area Series**]({% slug chart-series-area %})
* [**Bar Series**]({% slug chart-series-bar %})
* [**Spline Series**]({% slug chart-series-spline %})
