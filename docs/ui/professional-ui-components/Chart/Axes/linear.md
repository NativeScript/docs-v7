---
title: Linear
page_title: Chart linear axis | Progress NativeScript UI Documentation
description: A page describing the LinearAxis in Telerik Chart for NativeScript. This article explains the most important things you need to know before using Linear axis.
slug: chart-axes-linear
tags: chart, linear, axes, axis, nativescript, professional, ui
position: 5
publish: true
---


# RadChart LinearAxis

{% typedoc_link classes:RadCartesianChart %} requires an axis that can represent the values of the data points. The {% typedoc_link classes:LinearAxis %} plots the associated data points using each point's actual value, provided for the axis. The axis works with categorical data and uses the Value property of each CategoricalDataPoint that needs to be plotted. It will build a numerical range (user-defined or automatically calculated) and will determine each data point X or Y coordinate (depending on whether the axis is specified as Horizontal or as Vertical).

<snippet id='ohlc-series'/>

## Features

### Major Step

The major step represents the value difference between two visible ticks on the axis. The major step unit is used to determine what exactly the value of the major step represents. To get or set the major step use the **majorStep** property.

### Maximum

Defines the maximum available value. To get or set the maximum use the {% typedoc_link classes:LinearAxis,member:maximum%} property.

### Minimum

Defines the minimum available value. To get or set the maximum use the {% typedoc_link classes:LinearAxis,member:minimum%}  property.

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Axes Examples](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/axes)

Related articles you might find useful:

* [**Logarithmic Axis**]({% slug chart-axes-logarithmic %})
* [**Negative Values Axis**]({% slug negative-values-axis %})
* [**DateTime Continuous Axis**]({% slug chart-axes-datetimecontinuous %})
* [**Categorical Axis**]({% slug chart-axes-categorical %})
* [**DateTime Categorical Axis**]({% slug chart-axes-datetimecategorical %})
