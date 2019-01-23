---
title: Linear
page_title: Chart linear axis | Progress NativeScript UI Documentation
description: A page describing the LinearAxis in Telerik Chart for NativeScript. This article explains the most important things you need to know before using Linear axis.
slug: chart-axes-linear-angular
tags: chart, linear, axes, axis, angular
position: 5
publish: true
---


# Chart Axes: LinearAxis

{% typedoc_link classes:RadCartesianChart %} requires an axis that can represent the values of the data points. The {% typedoc_link classes:LinearAxis %} plots the associated data points using each point's actual value, provided for the axis. The axis works with categorical data and uses the Value property of each CategoricalDataPoint that needs to be plotted. It will build a numerical range (user-defined or automatically calculated) and will determine each data point X or Y coordinate (depending on whether the axis is specified as Horizontal or as Vertical).

<snippet id='chart-line-axis'/>

### Features

#### Major Step

The major step represents the value difference between two visible ticks on the axis. The major step unit is used to determine what exactly the value of the major step represents. To get or set the major step use the **majorStep** property.

#### Maximum

Defines the maximum available value. To get or set the maximum use the {% typedoc_link classes:LinearAxis,member:maximum%} property.

#### Minimum

Defines the minimum available value. To get or set the maximum use the {% typedoc_link classes:LinearAxis,member:minimum%}  property.

You can get and set the current value with the **plotMode** property.
