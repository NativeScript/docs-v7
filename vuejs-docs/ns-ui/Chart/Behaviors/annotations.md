---
title: Annotations
page_title: Chart Annotations Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of Charts annotations features.
slug: chart-annotations-vue
tags: chart, annotations, vue
position: 3
publish: true
---

# Chart: Annotations

In this article, you will learn how to use and customize the annotations in **Telerik Chart for NativeScript**.

## Overview

Annotations are visual elements used to highlight certain areas on the plot. They can be used as markers for specific values on the plot.

**RadChartView** provides support for the following types of annotations:

- {% typedoc_link classes:ChartGridLineAnnotation %}: this annotation is visually represented by straight lines across the chart that marks a specific value on the associated {% typedoc_link classes:CartesianAxis %}.
- {% typedoc_link classes:ChartPlotBandAnnotation %}: this annotation is visually represented by a band across the chart that marks a specific range on the associated {% typedoc_link classes:CartesianAxis %}.

You can read from the [Bar Series page]({% slug chart-series-bar-vue %} "Read more about Bar series in chart") how to create a simple chart with BarSeries which we will now extend to include annotations.

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

```
  <ChartGridLineAnnotation v-tkCartesianAnnotations axisId="hAxis"
                           hidden="false" value="50" zPosition="AboveSeries"
                           strokeWidth="1" strokeColor="#EB916580"></ChartGridLineAnnotation>
  <ChartGridLineAnnotation v-tkCartesianAnnotations axisId="vAxis"
                           hidden="false" value="10000" zPosition="AboveSeries"
                           strokeWidth="1" strokeColor="#65BFEB80"></ChartGridLineAnnotation>
  <ChartPlotBandAnnotation v-tkCartesianAnnotations axisId="hAxis"
                           hidden="false" value="20" zPosition="AboveSeries"
                           minValue="60" maxValue="70" fillColor="#A1FAC980"
                           strokeColor="#A1FAC980"></ChartPlotBandAnnotation>
  <ChartPlotBandAnnotation v-tkCartesianAnnotations axisId="vAxis"
                           hidden="false" value="20000" zPosition="AboveSeries"
                           minValue="2500" maxValue="5000" fillColor="#AC74E880"
                           strokeColor="#AC74E880"></ChartPlotBandAnnotation>
```

This will produce a page showing a Chart with annotations that will look like:

iOS:

![TelerikUI-Chart-Annotations](/controls/Angular/Chart/Images/grid_line_annotations_ios.png "Grid line annotations sample.")

Android:

![TelerikUI-Chart-Annotations](/controls/Angular/Chart/Images/grid_line_annotations_android.png "Grid line annotations sample.")


## Plot Band Annotations

The {% typedoc_link classes:ChartPlotBandAnnotation %} represents a vertical or horizontal area that crosses the entire plot area. Here is an example that demonstrates how to define a horizontal {% typedoc_link classes:ChartPlotBandAnnotation %} in the chart that we have created above.
There are two additional values that need to be provided along with {% typedoc_link classes:CartesianChartAnnotation,member:axisID %}, {% typedoc_link classes:ChartPlotBandAnnotation,member:minValue %} and {% typedoc_link classes:ChartPlotBandAnnotation,member:maxValue %} that will determine the range for the annotation. There is one additional property **fillColor** that determines the fill color of the band.


### Example
Here is an example that demonstrates how to define three horizontal one vertical grid line annotations assigned to bar series of the chart.  Different set of options determines the visual state and position of annotations and one of the annotations is hidden.

```
    <ChartPlotBandAnnotation v-tkCartesianAnnotations axisId="verBarAxis"
                             minValue="2" maxValue="4" zPosition="AboveSeries"
                             strokeWidth="2" fillColor="#DDFFFF00" strokeColor="Red"
                             strokeDashPattern="3,3,5,5"></ChartPlotBandAnnotation>
```

This will produce a page showing a Chart with annotations that will look like:

iOS:

![TelerikUI-Chart-Annotations](/controls/Angular/Chart/Images/plot-band-annotation-ios.png "Plot band annotations sample.")

Android:

![TelerikUI-Chart-Annotations](/controls/Angular/Chart/Images/plot-band-annotation-android.png "Plot band annotations sample.")
