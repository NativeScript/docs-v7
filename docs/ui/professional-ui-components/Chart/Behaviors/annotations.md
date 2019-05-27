---
title: Annotations
page_title: Chart Annotations Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of Charts annotations features.
slug: chart-annotations
tags: chart, annotations, nativescript, professional, ui
position: 3
publish: true
---

# RadChart Annotations

In this article, you will learn how to use and customize the annotations in **Telerik Chart for NativeScript**.

## Overview

Annotations are visual elements used to highlight certain areas on the plot. They can be used as markers for specific values on the plot. 

**RadChartView** provides support for the following types of annotations:

- {% typedoc_link classes:ChartGridLineAnnotation %}: this annotation is visually represented by straight lines across the chart that marks a specific value on the associated {% typedoc_link classes:CartesianAxis %}.
- {% typedoc_link classes:ChartPlotBandAnnotation %}: this annotation is visually represented by a band across the chart that marks a specific range on the associated {% typedoc_link classes:CartesianAxis %}.

You can read from the [Bar Series page]({% slug chart-series-bar %} "Read more about Bar series in chart") how to create a simple chart with BarSeries which we will now extend to include annotations.

## Common Features

Adding annotations to chart can be done through the {% typedoc_link classes:RadCartesianChart,member:annotations %} property of the chart. Every chart can have any number of annotations. 
{% typedoc_link classes:ChartGridLineAnnotation %} and {% typedoc_link classes:ChartPlotBandAnnotation %} have common properties that allows customization of their look.

- {% typedoc_link classes:CartesianChartAnnotation,member:axisID %} - the id of the axis that this annotation is bound to. This is mandatory property.
- {% typedoc_link classes:CartesianChartAnnotation,member:hidden %} -  determines if the annotation will be shown or not. Accepts values "true" or "false"
- {% typedoc_link classes:CartesianChartAnnotation,member:zPosition %} - determines if the annotation should be rendered above or bellow the series.
- {% typedoc_link classes:CartesianChartAnnotation,member:strokeWidth %} - determines the width of the stroked line
- {% typedoc_link classes:CartesianChartAnnotation,member:strokeColor %} - determines the color of the annotation
- {% typedoc_link classes:CartesianChartAnnotation,member:strokeDashPattern %} - the dash pattern of annotation line.

## Grid Line Annotations

The {% typedoc_link classes:ChartGridLineAnnotation %} represents a vertical or horizontal line that crosses the entire plot area at specific value of the assigned axis. There is a mandatory property **value** that have to be initialized with an appropriate axis value.



### Example
Here is an example that demonstrates how to define three horizontal one vertical grid line annotations assigned to bar series of the chart.  Different set of options determines the visual state and position of annotations and one of the annotations is hidden.


<snippet id='grid-line-annotations'/>

This will produce a page showing a Chart with annotations that will look like:

iOS:

![TelerikUI-Chart-Annotations](../../../img/ns_ui/grid_line_annotations_ios.png "Grid line annotations sample.") 

Android:

![TelerikUI-Chart-Annotations](../../../img/ns_ui/grid_line_annotations_android.png "Grid line annotations sample.")


## Plot Band Annotations

The {% typedoc_link classes:ChartPlotBandAnnotation %} represents a vertical or horizontal area that crosses the entire plot area. Here is an example that demonstrates how to define a horizontal {% typedoc_link classes:ChartPlotBandAnnotation %} in the chart that we have created above. 
There are two additional values that need to be provided along with {% typedoc_link classes:CartesianChartAnnotation,member:axisID %}, {% typedoc_link classes:ChartPlotBandAnnotation,member:minValue %} and {% typedoc_link classes:ChartPlotBandAnnotation,member:maxValue %} that will determine the range for the annotation. There is one additional property **fillColor** that determines the fill color of the band.


### Example
Here is an example that demonstrates how to define three horizontal one vertical grid line annotations assigned to bar series of the chart.  Different set of options determines the visual state and position of annotations and one of the annotations is hidden.


<snippet id='plot-band-annotations'/>

This will produce a page showing a Chart with annotations that will look like:

iOS:

![TelerikUI-Chart-Annotations](../../../img/ns_ui/plot-band-annotation-ios.png "Plot band annotations sample.") 

Android:

![TelerikUI-Chart-Annotations](../../../img/ns_ui/plot-band-annotation-android.png "Plot band annotations sample.")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Annotations Examples](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/annotations)

