---
title: Logarithmic Axis
page_title: Chart Logarithmic Axis | Progress NativeScript UI Documentation
description: A page describing the LogarithmicAxis in Telerik Chart for NativeScript. This article explains the most important things you need to know before using Logarithmic axis.
slug: chart-axes-logarithmic-vue
tags: chart, logarithmic, axes, axis, vue, nativescript, professional, ui
position: 5
publish: true
---

# Chart LogarithmicAxis

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn more about the logarithmic axis and how to use it in your chart.

## Getting Started

* [Getting Started](#getting-started)
* [Properties](#properties)
* [References](#references)

{% typedoc_link classes:RadCartesianChart %} needs an axis that can represent the values of the data points. The {% typedoc_link classes:LogarithmicAxis %} is used to display values that cover several orders of magnitude in a more manageable way. This is a special NumericalAxis that transforms the actual values of the data points using logarithm function with a specific base. For example if the base of the logarithm is 10, then the axis will be scaled to show equally spaced powers of 10. The Richter scale and the Decibel scale are examples of logarithmic scale.

## Properties

You can easily modify the base of the logarithmic function used to calculate the value by using the {% typedoc_link classes:LogarithmicAxis,member:logarithmBase%} property.  You can also specify the exponent step between the axis ticks with the {% typedoc_link classes:LogarithmicAxis,member:exponentStep%}  property.

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-vue %})
* [**Series Overview**]({% slug chart-series-overview-vue %})
* [**Axes Overview**]({% slug chart-axes-overview-vue %})
