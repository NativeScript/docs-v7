---
title: Axes Labels
page_title: Chart Axes Labels | Progress NativeScript UI Documentation
description: This article describes how to use charts axes labels.
slug: chart-axes-labels-angular
tags: radchart, chart, nativescript, professional, ui, axes, labels, angular
position: 6
publish: true
---

# Chart Axes Labels

If you followed the [getting started]({% slug chart-getting-started-angular %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn how to control the axes labels and customize their appearance.

* [Styling with Axes Properties](#styling-with-axes-properties)
* [Styling with CSS](#styling-with-css)
* [References](#references)

## Styling with Axes Properties

All axes have properties which provide various customization options for the labels:

- {% typedoc_link classes:CartesianAxis,member:labelTextColor%} - Determines the color of the axis' labels.
- {% typedoc_link classes:CartesianAxis,member:labelSize%} - Determines the text size of the axis' labels.
- {% typedoc_link classes:CartesianAxis,member:labelFormat%} - Determines the format used to display the axis' labels. For example to format values to one symbol after decimal point and append the text `seconds`, you can use the following format: `%.1f seconds`.
- {% typedoc_link classes:CartesianAxis,member:labelMargin%} - Determines the margin for the labels. The margin is a single number value and determines the number of device independent pixels between a label and its corresponding axis tick. 
- {% typedoc_link classes:CartesianAxis,member:labelRotationAngle%} - Determines the angle of rotation for labels. Used only when *labelFitMode* property has a value of {% typedoc_link enums:ChartAxisLabelFitMode,member:Rotate%}.
- {% typedoc_link classes:CartesianAxis,member:labelFitMode%} - Determines the strategy used in attempt to fit the labels. The default value is {% typedoc_link enums:ChartAxisLabelFitMode,member:None%} which means the labels are positioned on single line but there are {% typedoc_link enums:ChartAxisLabelFitMode,member:Multiline%} and {% typedoc_link enums:ChartAxisLabelFitMode,member:Rotate%} options too.
- {% typedoc_link classes:CartesianAxis,member:labelLayoutMode%} - Determines the layout mode for axis labels. With this property you can position labels in the {% typedoc_link enums:ChartAxisLabelLayoutMode,member:Inner%} or {% typedoc_link enums:ChartAxisLabelLayoutMode,member:Outer%} side of chart.

## Styling with CSS

The easiest option to style all of the labels for the series of a chart is to use the label's CSS type selector - **ChartAxisLabel**. Here's the list of values that are supported: 
* **color** - The color used for the text of the labels.
* **background-color** - The color used for the background of the label.
* **border-color** - The color used for the background of the label. Note that the labels only support a single value that is applied for the border of its four sides.
* **border-width** - The width used for the background of the label. Note that the labels only support a single value that is applied for the border of its four sides.
* **margin** - A single numeric value representing the device independent pixels between the label and the related axis tick.
* **padding** - The space between the label's text and its border.
* **font**-related properties (font-size, font-family, etc.)
* **format** -  The format used to display the axes' labels. For example to format values to one symbol after decimal point and append the text `seconds`, you can use the following format: `%.1f seconds`.
* **rotation-angle** - Used just line CartesianAxis's {% typedoc_link classes:CartesianAxis,member:labelRotationAngle%} property.
* **fit-mode** - Used just line CartesianAxis's {% typedoc_link classes:CartesianAxis,member:labelFitMode%} property.
* **layout-mode** - Used just line CartesianAxis's {% typedoc_link classes:CartesianAxis,member:labelLayoutMode%} property.

#### Example 1: Apply axes label styles through css

```CSS
ChartAxisLabel {
    color: #3C4044;
    format: "%.0f";
    margin: 12;
    layout-mode: outer;
}
```

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-angular) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Scatter CSS Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/css)

Related articles you might find useful:

* [**Axes Styling**]({% slug chart-axes-styling-angular %})
* [**Axes Overview**]({% slug chart-axes-overview-angular %})
* [**Series Labels**]({% slug chart-series-labels-angular %})
