---
title: Scatter Bubble
page_title: Scatter Bubble series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Scatter Bubble series and continues with a sample scenario of how Scatter Bubble series are used.
slug: chart-series-scatter-bubble-angular
tags: series, cartesian, scatter, bubble, angular
position: 8
publish: true
---

# Scatter Bubble series: Overview
Scatter Bubble series are {% typedoc_link classes:ScatterSeries %} and are used in the context of a {% typedoc_link classes:RadCartesianChart %}  and two {% typedoc_link classes:LinearAxis %} instances. Besides the setup requirements that come from {% typedoc_link classes:ScatterSeries %}, {% typedoc_link classes:BubbleSeries %} require an additional setup parameter which should come from the data source that defines the *bubble size*. The value for this parameter is supplied by defining the {% typedoc_link classes:ScatterBubbleSeries,member:bubbleSizeProperty%}.

## Customization
Ontop of the customization options that come from the {% typedoc_link classes:ScatterSeries %} context, {% typedoc_link classes:ScatterBubbleSeries %} expose the {% typedoc_link classes:ScatterBubbleSeries,member:bubbleScale%} property which can be used to fine-tune the size of the bubbles according to specific application requirements. The way the {% typedoc_link classes:ScatterBubbleSeries,member:bubbleScale%} property works is by multiplying its value to the radius of calculated for each data-point's bubble.

## Example
Just like with all angular 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. We create a basic angular `Component` that contains a collection of objects provided by an custom service, which will be used by the chart to provide intuitive data visualization.

The service is a simple 'mock' of an backend call that will return an array of objects:

<snippet id='chart-angular-data-service'/>

Inside that service we have a single function which returns an array:

<snippet id='chart-angular-scatter-data-source'/>

<snippet id='chart-angular-person'/>

All that is left is to declare the template of the angular component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare two {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the **`tkCartesianHorizontalAxis`** and **`tkCartesianVerticalAxis`** directive to the axes
- Finally declare a {% typedoc_link classes:ScatterBubbleSeries %} instance to it, bind the {% typedoc_link classes:ScatterBubbleSeries,member:items%} to the source of data and set the **`tkCartesianSeries`** directive

<snippet id='chart-angular-scatter-bubble-series-component'/>
<snippet id='chart-angular-scatter-bubble-series'/>

![Cartesian chart: Scatter Bubble series](../../../img/ns_ui/scatter_bubble_series_android.png " Scatter Bubble series on Android.") ![Cartesian chart: Scatter Bubble series](../../../img/ns_ui/scatter_bubble_series_ios.png "Scatter Bubble series on iOS.")
