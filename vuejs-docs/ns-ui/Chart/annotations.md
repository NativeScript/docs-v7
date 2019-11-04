---
title: Annotations
page_title: Chart Annotations Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of Charts annotations features.
slug: chart-annotations-vue
tags: chart, annotations, vue, nativescript, professional, ui
position: 6
publish: true
---

# Chart Annotations

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn how to add and customize annotations.

* [Overview](#overview)
* [Common Features](#common-features)
* [Grid Line Annotations](#grid-line-annotations)
* [Plot Band Annotations](#plot-band-annotations)
* [References](#references)

## Overview

Annotations are visual elements used to highlight certain areas on the plot. They can be used as markers for specific values on the plot.

**RadCartesianChart** provides support for the following types of annotations:

- {% typedoc_link classes:ChartGridLineAnnotation %}: This annotation is visually represented by straight lines across the chart that marks a specific value on the associated {% typedoc_link classes:CartesianAxis %}.
- {% typedoc_link classes:ChartPlotBandAnnotation %}: This annotation is visually represented by a band across the chart that marks a specific range on the associated {% typedoc_link classes:CartesianAxis %}.

## Common Features

Adding annotations to chart can be done through the {% typedoc_link classes:RadCartesianChart,member:annotations %} property of the chart. Every chart can have any number of annotations.
{% typedoc_link classes:ChartGridLineAnnotation %} and {% typedoc_link classes:ChartPlotBandAnnotation %} have common properties that allows customization of their look.

- {% typedoc_link classes:CartesianChartAnnotation,member:axisID %} - This is the id of the axis that this annotation is bound to. This is mandatory property.
- {% typedoc_link classes:CartesianChartAnnotation,member:hidden %} -  Determines if the annotation will be shown or not. Accepts values `true` or `false`.
- {% typedoc_link classes:CartesianChartAnnotation,member:zPosition %} - Determines if the annotation should be rendered above or bellow the series.
- {% typedoc_link classes:CartesianChartAnnotation,member:strokeWidth %} - Determines the width of the stroked line.
- {% typedoc_link classes:CartesianChartAnnotation,member:strokeColor %} - Determines the color of the annotation.
- {% typedoc_link classes:CartesianChartAnnotation,member:strokeDashPattern %} - Defines the dash pattern of annotation line.

## Grid Line Annotations

The {% typedoc_link classes:ChartGridLineAnnotation %} represents a vertical or horizontal line that crosses the entire plot area at specific value of the assigned axis. There is a mandatory property **value** that have to be initialized with an appropriate axis value. Here is an example that demonstrates how to define three horizontal one vertical grid line annotations assigned to bar series of the chart.  Different set of options determines the visual state and position of annotations and one of the annotations is hidden.

#### Example 1: A Cartesian Chart with a Grid Line Annotations

<snippet id='chart-gridline-annotation-vue'/>

This will produce a page showing a Chart with annotations that will look like:

#### Figure 1: Grid Line Annotations on Android (left) and iOS (right)

![TelerikUI-Chart-Annotations](../../../ui/img/ns_ui/grid_line_annotations_android.png "Grid line annotations sample on Android") ![TelerikUI-Chart-Annotations](../../../ui/img/ns_ui/grid_line_annotations_ios.png "Grid line annotations sample on iOS")


## Plot Band Annotations

The {% typedoc_link classes:ChartPlotBandAnnotation %} represents a vertical or horizontal area that crosses the entire plot area. Here is an example that demonstrates how to define a horizontal {% typedoc_link classes:ChartPlotBandAnnotation %} in the chart that we have created above. 
There are two additional values that need to be provided along with {% typedoc_link classes:CartesianChartAnnotation,member:axisID %}, {% typedoc_link classes:ChartPlotBandAnnotation,member:minValue %} and {% typedoc_link classes:ChartPlotBandAnnotation,member:maxValue %} that will determine the range for the annotation. There is one additional property **fillColor** that determines the fill color of the band. Here is an example that demonstrates how to define three horizontal one vertical grid line annotations assigned to bar series of the chart:

#### Example 2: A Cartesian Chart with a Plot Band Annotations:

<snippet id='chart-plotband-annotation-vue'/>

This will produce a page showing a Chart with annotations that will look like:

#### Figure 2: Plot Band Annotations on Android (left) and iOS (right)

![TelerikUI-Chart-Annotations](../../../ui/img/ns_ui/plot-band-annotation-android.png "Plot band annotations sample on Android") ![TelerikUI-Chart-Annotations](../../../ui/img/ns_ui/plot-band-annotation-ios.png "Plot band annotations sample on iOS")

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Plot Band Annotations Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/annotations)
* [Grid Line Annotations Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/annotations)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-vue %})
* [**Scatter Series**]({% slug chart-series-scatter-vue %})
* [**Grid**]({% slug chart-grid-vue %})
