---
title: Grid
page_title: Chart Grid | Progress NativeScript UI Documentation
description: This article is a short description and summary of Charts Grid's features.
slug: chart-grid-angular
tags: chart, grid, angular, nativescript, professional, ui
position: 5
publish: true
---

# Chart Grid

If you followed the [getting started]({% slug chart-getting-started-angular %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn how to control the grid lines and stripes that can be drawn behind the Chart Series.

* [Getting Started](#getting-started)
* [Properties](#properties)
* [References](#references)

## Getting Started

The grid lines and the stripes between them are controlled by the {% typedoc_link classes:RadCartesianChartGrid %} element. It represents a decoration over the plot area of **RadCartesianChart** drawn behind the series. The lines connect the ticks of each axis and the stripes are the area between them. You can set a new grid by declaring an `RadCartesianChartGrid` and setting the `tkCartesianGrid` directive on the instance.

## Properties

- {% typedoc_link classes:RadCartesianChartGrid,member:verticalLinesVisible %} - Determines whether the grid lines associated with the vertical axis will be visible.
- {% typedoc_link classes:RadCartesianChartGrid,member:horizontalLinesVisible %} - Determines whether the grid lines associated with the horizontal axis will be visible.

- {% typedoc_link classes:RadCartesianChartGrid,member:verticalStripLinesVisible %} - Determines whether the alternating fills between the vertical grid lines are visible or not.
- {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStripLinesVisible %} - Determines whether the alternating fills between the horizontal grid lines are visible or not.

- {% typedoc_link classes:RadCartesianChartGrid,member:verticalStrokeWidth %} - Determines the width of the stroke used to paint the vertical grid lines.
- {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStrokeWidth %} - Determines the width of the stroke used to paint the horizontal grid lines.

- {% typedoc_link classes:RadCartesianChartGrid,member:verticalStrokeColor %} - Determines the color used to draw the vertical lines of the grid.
- {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStrokeColor %} - Determines tthe color used to draw the horizontal lines of the grid.

- {% typedoc_link classes:RadCartesianChartGrid,member:verticalStripLineColor %} - Determines the color used to paint the fills between the vertical grid lines.
- {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStripLineColor %} - Determines the color used to paint the fills between the horizontal grid lines.

To better illustrate the Grid capabilities, let's add the following properties to the grid:

#### Example 1: Grid Styling

<snippet id='chart-angular-grid-styling'/>

#### Figure 1: Chart with a customized grid on Android (left) and iOS (right)

![Axis styling](../../img/ns_ui/grid_styling_android.png "Grid Styling on Android.") ![Cartesian chart: Bar series](../../img/ns_ui/grid_styling_ios.png "Grid Styling on iOS.")

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-angular) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Styling Grid Example](https://github.com/NativeScript/nativescript-ui-samples-angular/tree/master/chart/app/examples/styling)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-angular %})
* [**Series Overview**]({% slug chart-series-overview-angular %})
* [**Annotations**]({% slug chart-annotations-angular %})
