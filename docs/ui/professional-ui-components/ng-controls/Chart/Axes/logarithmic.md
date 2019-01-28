---
title: Logarithmic
page_title: Chart logarithmic axis | Progress NativeScript UI Documentation
description: A page describing the LogarithmicAxis in Telerik Chart for NativeScript. This article explains the most important things you need to know before using Logarithmic axis.
slug: chart-axes-logarithmic-angular
tags: chart, logarithmic, axes, axis, angular
position: 6
publish: true
---

# Chart Axes: LogarithmicAxis

{% typedoc_link classes:RadCartesianChart %} needs an axis that can represent the values of the data points. The {% typedoc_link classes:LogarithmicAxis %} is used to display values that cover several orders of magnitude in a more manageable way. This is a special NumericalAxis that transforms the actual values of the data points using logarithm function with a specific base. For example if the base of the logarithm is 10, then the axis will be scaled to show equally spaced powers of 10. The Richter scale and the Decibel scale are examples of logarithmic scale.

### Customization

You can easily modify the base of the logarithmic function used to calculate the value by using the {% typedoc_link classes:LogarithmicAxis,member:logarithmBase%} property.  You can also specify the exponent step between the axis ticks with the {% typedoc_link classes:LogarithmicAxis,member:exponentStep%}  property.
