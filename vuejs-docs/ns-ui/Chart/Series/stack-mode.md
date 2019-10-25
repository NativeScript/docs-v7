---
title: Series Stack Mode
page_title: Chart Series Stack Mode | Progress NativeScript UI Documentation
description: This article describes how to stack series in chart.
slug: chart-series-stack-mode-vue
tags: radchart, chart, nativescript, professional, ui, series, stack, vue
position: 4
publish: true
---

# Chart Series Stack Mode

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn how the chart will visualize its series if they are more than one.

* [Getting Started](#getting-started)
* [References](#references)

## Getting Started

There are scenarios in which a single Categorical chart can host multiple series. The {% typedoc_link classes:CategoricalSeries,member:stackMode%} property allows you to define how these series will interact with each other. The following options are available for the `stackMode` property:

- {% typedoc_link enums:ChartSeriesStackMode,member:None%} - The data points for all series start drawing from the axis.
- {% typedoc_link enums:ChartSeriesStackMode,member:Stack%} - The data points for each series start drawing from the end of the data points of the previous series.
- {% typedoc_link enums:ChartSeriesStackMode,member:Stack100%} - The data points for each series start drawing from the end of the data points of the previous series but their size is adjusted proportionally so that the whole plot-area of the chart is filled.

Here's how your chart will look like with {% typedoc_link classes:CategoricalSeries,member:stackMode%} set to `Stack`:

#### Figure 1: Chart with stacked AreaSeries on Android (left) and iOS (right)

![Chart series overview](../../../../docs/ui/img/ns_ui/stacked_area_series_android.png "Bar series on Android.") ![Chart series overview](../../../../docs/ui/img/ns_ui/stacked_area_series_ios.png "Bar series on iOS.")


## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Stacked Area Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Are Series**]({% slug chart-series-area-vue %})
* [**Linear Axis**]({% slug chart-axes-linear-vue %})
* [**Series Overview**]({% slug chart-series-overview-vue %})
