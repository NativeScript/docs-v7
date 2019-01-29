---
title: Overview
page_title: Chart axes Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of the axes supported by Telerik Chart for NativeScript.
slug: chart-axes-overview-vue
tags: chart, overview, axes, vue
position: 1
publish: true
---

# Chart: Axes Overview

[RadCartesianChart]({% slug chart-types-cartesian-vue %} "Read more about RadCartesianChart") plots data points in a coordinate system defined by its two axes. Usually, one data point has category and value, which define its Cartesian coordinates. This means that your chart will need one axis that can visualize the category and another which can visualize the value. CartesianAxis is the base class for all axes that Telerik RadCartesianChart can plot.

### Category axes

The axes that can be used to visualize the category of a data point are:

* [CategoricalAxis]({% slug chart-axes-categorical-vue %} "Read more about CategoricalAxes"): The {% typedoc_link classes:CategoricalAxis %} is the base axis that can be used to display category of any kind.
* [DateTimeCategoricalAxis]({% slug chart-axes-datetimecategorical-vue %} "Read more about DateTimeCategoricalAxis"): The {% typedoc_link classes:DateTimeCategoricalAxis %} extends the {% typedoc_link classes:CategoricalAxis %}. It can be used if the category of the data points is of type `Calendar`.

### Value axes

The axes that can be used to visualize the value of a data point extend the NumericalAxis class. They are:

* [LinearAxis]({% slug chart-axes-linear-vue %} "Read more about LinearAxis"): The {% typedoc_link classes:LinearAxis %} plots the associated data points using each point's actual value, provided for the axis.
