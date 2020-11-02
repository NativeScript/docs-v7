---
title: Negative Values
page_title: Negative Values | Progress NativeScript UI Documentation
description: A page describing the LogarithmicAxis in Telerik Chart for NativeScript. This article explains the usage of negative values in an axis.
slug: chart-axes-negative-values-angular
tags: chart, negative, values, axes, axis, angular, nativescript, professional, ui
position: 4
publish: true
---

# Chart Negative Values

If you followed the [getting started]({% slug chart-getting-started-angular %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will see an example of using negative values and see how the chart will render them. 

* [Getting Started](#getting-started)
* [References](#references)

## Getting Started

By default the {% typedoc_link classes:LinearAxis %} supports the use of negative values. You can set the {% typedoc_link classes:LinearAxis,member:minimum%} minimum and/or the {% typedoc_link classes:LinearAxis,member:maximum%} to negative values.


#### Example 1: Using Negative Values

<snippet id='chart-angular-axes-negative-values'/>

This is how the chart will look like with negative values on the Y axis:

#### Figure 1: Chart with negative values on Android (left) and iOS (right)

![Cartesian chart: Negative Values](../../../img/ns_ui//negative_values_android.png "Negative values in Android.") ![Cartesian chart: Negative Values](../../../img/ns_ui//negative_values_ios.png "Negative values in iOS.")

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-angular) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Negative Values Example](https://github.com/NativeScript/nativescript-ui-samples-angular/tree/master/chart/app/examples/axes/negative-values)

Related articles you might find useful:

* [**Axes Overview**]({% slug chart-axes-overview-angular %})
* [**Series Overview**]({% slug chart-series-overview-angular %})
* [**Spline Series**]({% slug chart-series-spline-angular %})
