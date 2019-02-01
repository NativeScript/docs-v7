---
title: Overview
page_title: Chart Labels Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of Charts labels features.
slug: chart-labels
tags: radchart, label, labels, chart, nativescript, professional, ui
position: 1
publish: true
---

# RadChart Labels

In this article, you will learn to use the labels in **Telerik Chart for NativeScript**: how to use the labels for the series and for the axes and how to customize them.

## Series Labels

All series have their default labels. In order to display them, you simply need to set the {% typedoc_link classes:ChartSeries,member:showLabels %} property of the series to true.

## Axes Labels

All axes have their default labels. They are visible by default. In order to display or hide them, you simply need to use the {% typedoc_link classes:ChartSeries,member:showLabels %} property of the axis.

## Customization

All axes have properties which provide various customization options for the labels:

* {% typedoc_link classes:CartesianAxis,member:labelTextColor %}: used to change the color of the text in the label.
* {% typedoc_link classes:CartesianAxis,member:labelSize %}: used to change the size of the text in the label.
* {% typedoc_link classes:CartesianAxis,member:labelMargin %}: used to change the margins of the label.
* {% typedoc_link classes:CartesianAxis,member:labelFormat %}: used to change the format string of the text in the label.

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Styling Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/styling)