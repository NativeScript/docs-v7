---
title: Series Styling
page_title: Chart Series Styling | Progress NativeScript UI Documentation
description: This article describes how to customize the way chart series look.
slug: chart-series-styling
tags: radchart, chart, nativescript, professional, ui, series, styling, customization
position: 5
publish: true
---

# Chart Series Styling

If you followed the [series overview]({% slug chart-series-overview %} "Chart Series Overview") section, you know what type of series is most suitable for the chart you need to create. This article will show you how to change the style of these series including their stroke, fill and labels. 

* [Styling Series Labels](#styling-series-labels)
* [Styling with Palettes](#styling-with-palettes)
* [Styling Selected State](#styling-selected-state)
* [Changing Palette Mode](#chaning-palette-mode)
* [References](#references)


## Styling Series Labels

Information about styling the labels of the series in NativeScript UI Chart is available [here]({% slug chart-series-labels %} "Chart Series Labels").

## Styling with Palettes

You can style the chart series is to use Palettes. Depending on the count of series you have defined in your chart, you can add as many palettes as needed and change several visual parameters of the series. A single palette defines an *entries* property which contains {% typedoc_link classes:PaletteEntry %} instances. A **`PaletteEntry`** is essentially a property bag which holds the values that are used to style the associated series. The following properties are exposed by a `PaletteEntry` object:

- {% typedoc_link classes:PaletteEntry,member:fillColor%}
- {% typedoc_link classes:PaletteEntry,member:strokeColor%}
- {% typedoc_link classes:PaletteEntry,member:strokeWidth%}

To better illustrate the usage of Palettes, we will use a scenario with three series of different kind which are customized. Consider the following series:

#### Example 3: Define a list of series

<snippet id='creating-series'/>

We want to customize all of the series. We will use their `seriesName` to specify which palette is for which series. We want to change the stroke, as well as their fill color. Let's define a new palette for each series in the *palettes* collection of the chart:

#### Example 4: Define a list of palettes

<snippet id='creating-palettes'/>

Our palette consists of a single entry that defines values for {% typedoc_link classes:PaletteEntry,member:fillColor%}, {% typedoc_link classes:PaletteEntry,member:strokeColor%} and {% typedoc_link classes:PaletteEntry,member:strokeWidth%}. What remains to be done is mapping the palette to the series it is meant to style. This is done by setting the **`seriesName`** property on the series and the palette to the same key. As you can see, the `seriesName` property is set to the Palette and the series to the same value - in that case *Bar*, *Area* and *Line*. You can use any string token here assuming it is the same on the corresponding series and the palette, as it serves as a mapping key between both.

The images below demonstrates the result of applying this palette to the Bar series:

#### Figure 3: Bar Series styles on Android (left) and iOS (right)
![Chart styling: Bar series](../../../img/ns_ui/series_styling_android.png "Android") ![Chart styling: Bar series](../../../img/ns_ui/series_styling_ios.png "iOS")

## Styling Selected State

If you want to specify additional style for selected state of the series you need to define a new Palette with the corresponding `seriesName` and `seriesState` property set to *Selected* value as it is shown in the following example: 

#### Example 5: Selected State Palette
<snippet id='styling-series-selection'/>

In this example the second palette values will be used when the series or data point is selected. If palette for selected state is not explicitly defined the default colors will be used.

## Changing Palette Mode

By default, the provided palettes (or the default colors) are applied per series, i.e. the first PaletteEntry from a palette will be applied to each of the items in the series. The {% typedoc_link classes:CartesianSeries,member:paletteMode%} property can be used to change the way the palette is applied, i.e. the first PaletteEntry from the palette to be applied to the first item in the series, the second PaletteEntry to the second item, etc. You can choose from the following `paletteMode` values: {% typedoc_link enums:ChartSeriesPaletteMode,member:Series%} or {% typedoc_link enums:ChartSeriesPaletteMode,member:Item%} depending on how you want the palette to be applied. Here's how to change the `paletteMode` for `BarSeries`:

#### Example 6: Styling different bars

<snippet id='chart-styling-bars'/>

#### Figure 4: Bar Series styles on Android (left) and iOS (right)

![Chart styling: PaletteMode](../../../img/ns_ui/series_styling_bar_android.png "Android") ![Chart styling: PaletteMode](../../../img/ns_ui/series_styling_bar_ios.png "iOS")

> Note that the paletteMode is applicable only for series where it visually makes sense. LineSeries, SplineSeries, AreaSeries and SplineAreaSeries (where there are no separate items but only connections between them), the paletteMode is not supported.

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Styling Examples](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/styling)

Related articles you might find useful:

* [**Axes Overview**]({% slug chart-axes-overview %})
* [**Series Labels**]({% slug chart-series-labels %})
* [**Series Overview**]({% slug chart-series-overview %})
