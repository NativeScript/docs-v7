---
title: Spline
page_title: Spline series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Spline series and continues with a sample scenario of how Spline series are used.
slug: chart-series-spline-angular
tags: series, cartesian, spline, angular, nativescript, professional, ui
position: 5
publish: true
---

# RadChart Spline Series
{% typedoc_link classes:SplineSeries %} are categorical type of series that visualize the data objects as a series of dots connected with a spline, i.e. a curved line segments. To use Spline series, you need to initialize a {% typedoc_link classes:RadCartesianChart %}, define a {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} and bind the series to a set of data objects.

#### Example
Just like with all angular 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. We create a basic angular `Component` that contains a collection of objects provided by an custom service, which will be used by the chart to provide intuitive data visualization.

The service is a simple 'mock' of an backend call that will return an array of objects:

<snippet id='chart-angular-data-service'/>

Inside that service we have a single function which returns an array:

<snippet id='chart-angular-categorical-source'/>

<snippet id='chart-angular-country'/>

All that is left is to declare the template of the angular component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare the {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the **`tkCartesianHorizontalAxis`** and **`tkCartesianVerticalAxis`** directive to the axes
- Finally declare a {% typedoc_link classes:SplineSeries %} instance to it, bind the {% typedoc_link classes:SplineSeries,member:items%} to the source of data and set the **`tkCartesianSeries`** directive

<snippet id='chart-angular-spline-series-component'/>
<snippet id='chart-angular-spline-series'/>

![Cartesian chart: Spline series](../../../img/ns_ui/spline_series_android.png "Spline series on Android.") ![Cartesian chart: Spline series](../../../img/ns_ui/spline_series_ios.png "Spline series on iOS.")
