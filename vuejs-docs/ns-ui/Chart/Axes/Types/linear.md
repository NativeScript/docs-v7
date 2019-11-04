---
title: Linear
page_title: Chart Linear Axis | Progress NativeScript UI Documentation
description: A page describing the LinearAxis in Telerik Chart for NativeScript. This article explains the most important things you need to know before using Linear axis.
slug: chart-axes-linear-vue
tags: chart, linear, axes, axis, vue, nativescript, professional, ui
position: 4
publish: true
---

# Chart LinearAxis

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn more about the linear axis and how to use it in your chart.

* [Getting Started](#getting-started)
* [Properties](#properties)
* [References](#references)

## Getting Started

{% typedoc_link classes:RadCartesianChart %} requires an axis that can represent the values of the data points. The {% typedoc_link classes:LinearAxis %} plots the associated data points using each point's actual value, provided for the axis. The axis works with categorical data and uses the Value property of each CategoricalDataPoint that needs to be plotted. It will build a numerical range (user-defined or automatically calculated) and will determine each data point X or Y coordinate (depending on whether the axis is specified as Horizontal or as Vertical).

#### Example 1: Linear Axis

<snippet id='chart-getting-started-vue'/>

## Properties

### Major Step

The major step represents the value difference between two visible ticks on the axis. The major step unit is used to determine what exactly the value of the major step represents. To get or set the major step use the **majorStep** property.

### Maximum

Defines the maximum available value. To get or set the maximum use the {% typedoc_link classes:LinearAxis,member:maximum%} property.

### Minimum

Defines the minimum available value. To get or set the maximum use the {% typedoc_link classes:LinearAxis,member:minimum%}  property.

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Axes Examples](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/axes)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-vue %})
* [**Series Overview**]({% slug chart-series-overview-vue %})
* [**Axes Overview**]({% slug chart-axes-overview-vue %})
