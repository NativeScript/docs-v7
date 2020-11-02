---
title: Axes Overview
page_title: Chart Axes Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of the axes supported by Telerik Chart for NativeScript.
slug: chart-axes-overview-vue
tags: chart, overview, axes, vue, nativescript, professional, ui
position: 1
publish: true
---

# Chart Axes Overview

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn which are the available axes and how to choose the most appropriate depending on the series that are used. **RadCartesianChart** plots data points in a coordinate system defined by its two axes. Usually, one data point has category and value, which define its Cartesian coordinates. The different series have different requirements for the axes that they can work with. For more information about these requirements refer to the specific series' article. For the categorical series your chart will need one axis that can visualize the category and another which can visualize the value, while the scatter series require two axes to visualize values. CartesianAxis is the base class for all axes that RadCartesianChart can plot.

* [Axes Types](#axes-types)
* [Pan and Zoom](#pan-and-zoom)
* [Negative Values](#negative-values)
* [Styling](#styling)
* [Axes Labels](#axes-labels)
* [References](#references)

## Axes Types

### Category axes

The axes that can be used to visualize the category of a data point are:

* [CategoricalAxis]({% slug chart-axes-categorical-vue %} "Read more about CategoricalAxes"): The {% typedoc_link classes:CategoricalAxis %} is the base axis that can be used to display category of any kind.
* [DateTimeCategoricalAxis]({% slug chart-axes-datetimecategorical-vue %} "Read more about DateTimeCategoricalAxis"): The {% typedoc_link classes:DateTimeCategoricalAxis %} extends the {% typedoc_link classes:CategoricalAxis %}. It can be used if the category of the data points is of type `Calendar`.
* [DateTimeContinuousAxis]({% slug chart-axes-datetimecontinuous-vue %} "Read more about DateTimeContinuousAxis"): The {% typedoc_link classes:DateTimeContinuousAxis %} is also a category axis but represents the time in a more continuous way. To illustrate the difference between the two Data Time axes consider the following scenario. If the data contains 3 data points whose categories are January 1st, January 11th, January 16th, using **DateTimeCategoricalAxis** will plot these points with equal space between each two (ignoring the actual time difference between them), while using **DateTimeContinuousAxis** will place them in a way that the space between January 1st and January 11th will be two times bigger than the space between the points for January 11th and January 16th (due to the actual time difference between them).

### Value axes

The axes that can be used to visualize the value of a data point extend the NumericalAxis class. They are:

* [LinearAxis]({% slug chart-axes-linear-vue %} "Read more about LinearAxis"): The {% typedoc_link classes:LinearAxis %} plots the associated data points using each point's actual value, provided for the axis.
* [LogarithmicAxis]({% slug chart-axes-logarithmic-vue %} "Read more about LogarithmicAxis"): The {% typedoc_link classes:LogarithmicAxis %} is used to display values that cover several orders of magnitude in a more manageable way. This is a special numerical axis that transforms the actual values of the data points using logarithm function with a specific base.

## Pan and Zoom

The axes support panning and zooming. [This article]({% slug chart-axes-pan-and-zoom-vue %} "Chart Axes Pan and Zoom") contains more information about this feature.

## Negative Values

[This article]({% slug chart-axes-negative-values-vue %} "Chart Axes Negative Values") about negative values contains more information about the way chart handles negative values in the provided data.

## Styling

[This article]({% slug chart-axes-styling-vue %} "Chart Axes Styling") contains more information about how to use CSS or the axis' properties to customize their appearance.

## Axes Labels

The drawing of labels can be controlled through axis' `showLabels` property. More information about the labels is available in their dedicated [article]({% slug chart-axes-labels-vue %} "Chart Axes Labels").

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Related articles you might find useful:

* [**Categorical Axis**]({% slug chart-axes-categorical-vue %})
* [**Linear Axis**]({% slug chart-axes-linear-vue %})
* [**Series Overview**]({% slug chart-series-overview-vue %})
