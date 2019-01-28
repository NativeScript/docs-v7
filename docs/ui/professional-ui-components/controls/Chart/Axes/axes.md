---
title: Overview
page_title: Chart axes Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of the axes supported by Telerik Chart for NativeScript.
slug: chart-axes-overview
tags: chart, overview, axes
position: 1
publish: true
previous_url: controls/chart/axes/axes
---

# Chart: Axes Overview

[RadCartesianChart]({% slug chart-types-cartesian %} "Read more about RadCartesianChart") plots data points in a coordinate system defined by its two axes. Usually, one data point has category and value, which define its Cartesian coordinates. This means that your chart will need one axis that can visualize the category and another which can visualize the value. CartesianAxis is the base class for all axes that Telerik RadCartesianChart can plot.

### Category axes

The axes that can be used to visualize the category of a data point are:

* [CategoricalAxis]({% slug chart-axes-categorical %} "Read more about CategoricalAxes"): The {% typedoc_link classes:CategoricalAxis %} is the base axis that can be used to display category of any kind.
* [DateTimeCategoricalAxis]({% slug chart-axes-datetimecategorical %} "Read more about DateTimeCategoricalAxis"): The {% typedoc_link classes:DateTimeCategoricalAxis %} extends the {% typedoc_link classes:CategoricalAxis %}. It can be used if the category of the data points is of type `Calendar`.
* [DateTimeContinuousAxis]({% slug chart-axes-datetimecontinuous %} "Read more about DateTimeContinuousAxis"): The {% typedoc_link classes:DateTimeContinuousAxis %} may be considered as a hybrid between a categorical and a numerical (linear) axis. **DateTimeContinuousAxis** works with categorical data but instead of categories, the axis builds time slots depending on its Minimum, Maximum and MajorStep values.

### Value axes

The axes that can be used to visualize the value of a data point extend the NumericalAxis class. They are:

* [LinearAxis]({% slug chart-axes-linear %} "Read more about LinearAxis"): The {% typedoc_link classes:LinearAxis %} plots the associated data points using each point's actual value, provided for the axis.
* [LogarithmicAxis]({% slug chart-axes-logarithmic %} "Read more about LogarithmicAxis"): The {% typedoc_link classes:LogarithmicAxis %} is used to display values that cover several orders of magnitude in a more manageable way. This is a special numerical axis that transforms the actual values of the data points using logarithm function with a specific base.

## References
Want to see more examples using **RadCartesianChart**?
Check our SDK examples repository on GitHub. You will find this and a lot more practical examples with NativeScript UI.

* [Axes Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/axes)
 
