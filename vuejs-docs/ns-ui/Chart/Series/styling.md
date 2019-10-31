---
title: Series Styling
page_title: Series Styling | Progress NativeScript UI Documentation
description: This article explains how the visual appearance of Telerik Chart's series for NativeScript can be customized.
slug: chart-series-styling-vue
tags: chart, overview, styling, vue, palettes, nativescript, professional, ui
position: 5
publish: true
---

# Chart Series Styling

If you followed the [series overview]({% slug chart-series-overview-vue %} "Chart Series Overview") section, you know what type of series is most suitable for the chart you need to create. This article will show you how to change the style of these series including their stroke, fill and labels. 

* [Using Series Properties](#using-series-properties)
* [Styling with CSS](#styling-with-css)
* [Styling Series Labels](#styling-series-labels)
* [Styling with Palettes](#styling-with-palettes)
* [Styling Selected State](#styling-selected-state)
* [Changing Palette Mode](#chaning-palette-mode)
* [References](#references)

## Using Series Properties

The chart has its predefined palettes that provide an automatic selection of colors for the different series that are used. When you need to change these colors you can set the corresponding properties of each series:

- **fillColor** - Determines the color used to fill the series. Applicable for series which use only one color for fill: BarSeries, RangeBarSeries, BubbleSeries, AreaSeries, SplineAreaSeries, ScatterSeries, ScatterBubbleSeries
- **strokeColor** - Determines the color used to fill the series. Applicable for series which use only one color for stroke:  BarSeries, RangeBarSeries, BubbleSeries, LineSeries, SplineSeries, AreaSeries, SplineAreaSeries, ScatterSeries, ScatterBubbleSeries
- **strokeWidth** - Determines the color used to fill the series. Applicable for all series
- **fillColors** - Determines the color used to fill the series. Applicable for series which use more than one color for fill: CandlestickSeries, PieSeries, DonutSeries
- **strokeColors** - Determines the color used to fill the series. Applicable for series which use more than one color for fill: OhlcSeries, CandlestickSeries, PieSeries, DonutSeries

> Note that the PieSeries and DonutSeries will draw their slices by using consecutive colors from the provided list, while the OhlcSeries and CandlestickSeries will only use the first two colors from the provided list. The first to draw the bullish points (whose close value is higher than their open value) and the second to draw the bearish points (whose close value is lower than their open value).

## Styling with CSS

All of the above properties can also be applied through [css](https://docs.nativescript.org/ui/styling). Here's an example to style a chart with BarSeries:

#### Example 1: Apply BarSeries styles through CSS

```CSS
BarSeries {
    fill-color: #C8A1FF;
    stroke-color: white;
    stroke-width: 4;
}

BarSeries[index=1] {
    fill-color: #6215EE;
}
```

Here's how the chart from this example looks:

#### Figure 1: Bar Series styles on Android (left) and iOS (right)

![Chart styling: Candlestick series](../../../../ui/img/ns_ui/chart-css-bar-01-android.png "Android") ![Chart styling: Candlestick series](../../../../ui/img/ns_ui/chart-css-bar-01-ios.png "iOS")

Here's another example that demonstrate how to apply a list of colors to a chart with CandlestickSeries:

#### Example 2: Apply CandlestickSeries styles through CSS

```CSS
CandlestickSeries {
    stroke-width: 1;
    stroke-colors: #464D57,#464D57;
    fill-colors: #00B061,#FF3030;
}
```

Here's how the chart from this example looks:

#### Figure 2: Candlestick Series styles on Android (left) and iOS (right)

![Chart styling: Candlestick series](../../../../ui/img/ns_ui/chart-css-candlestick-01-android.png "Android") ![Chart styling: Candlestick series](../../../../ui/img/ns_ui/chart-css-candlestick-01-ios.png "iOS")

## Styling Series Labels

Information about styling the labels of the series in NativeScript UI Chart is available [here]({% slug chart-series-labels-vue %} "Chart Series Labels").

## Styling with Palettes

Another option for styling of the chart series is to use Palettes. Depending on the count of series you have defined in your chart, you can add as many palettes as needed and change several visual parameters of the series. A single palette can contain multiple {% typedoc_link classes:PaletteEntry %} instances. When declaring the {% typedoc_link classes:Palette %} instances, set their {% typedoc_link classes:Palette,member:seriesName%} and set the **`tkCartesianPalette`** directive when used with {% typedoc_link classes:RadCartesianChart %} (or **`tkPiePalette`** for {% typedoc_link classes:RadPieChart %}). Also for each {% typedoc_link classes:PaletteEntry %} instance set the **`tkCartesianPaletteEntry`** directive when used with {% typedoc_link classes:RadCartesianChart %} (or **`tkPiePaletteEntry`** for {% typedoc_link classes:RadPieChart %}). Each **`PaletteEntry`** is essentially a property bag which holds the values that are used to style the associated series. The following properties are exposed by a `PaletteEntry` object:

- {% typedoc_link classes:PaletteEntry,member:fillColor%}
- {% typedoc_link classes:PaletteEntry,member:strokeColor%}
- {% typedoc_link classes:PaletteEntry,member:strokeWidth%}

To better illustrate the usage of Palettes, we will use a scenario with three series of different kind which are customized:

#### Example 3: Chart with Palettes

<snippet id='chart-styling-vue'/>

Our palette consists of a single entry that defines values for {% typedoc_link classes:PaletteEntry,member:fillColor%}, {% typedoc_link classes:PaletteEntry,member:strokeColor%} and {% typedoc_link classes:PaletteEntry,member:strokeWidth%}. What remains to be done is mapping the palette to the series it is meant to style. This is done by setting the **`seriesName`** property on the series and the palette to the same key. As you can see, the `seriesName` property is set to the Palette and the series to the same value - in that case *Bar*, *Area* and *Line*. You can use any string token here assuming it is the same on the corresponding series and the palette, as it serves as a mapping key between both.

The images below demonstrates the result of applying this palette to the Bar series:

#### Figure 3: Bar Series styles on Android (left) and iOS (right)

![Chart styling: Bar series](../../../../ui/img/ns_ui/series_styling_android.png "Android") ![Chart styling: Bar series](../../../../ui/img/ns_ui/series_styling_ios.png "iOS")

## Styling Selected State

If you want to specify additional style for selected state of the series you need to define a new Palette with the corresponding `seriesName` and `seriesState` property set to *Selected* value.

## Changing Palette Mode

By default, the provided palettes (or the default colors) are applied per series, i.e. the first PaletteEntry from a palette will be applied to each of the items in the series. The {% typedoc_link classes:CartesianSeries,member:paletteMode%} property can be used to change the way the palette is applied, i.e. the first PaletteEntry from the palette to be applied to the first item in the series, the second PaletteEntry to the second item, etc. You can choose from the following `paletteMode` values: {% typedoc_link enums:ChartSeriesPaletteMode,member:Series%} or {% typedoc_link enums:ChartSeriesPaletteMode,member:Item%} depending on how you want the palette to be applied.

#### Figure 4: Bar Series styles on Android (left) and iOS (right)

![Chart styling: PaletteMode](../../../../ui/img/ns_ui/series_styling_bar_android.png "Android") ![Chart styling: PaletteMode](../../../../ui/img/ns_ui/series_styling_bar_ios.png "iOS")

> Note that the paletteMode is applicable only for series where it visually makes sense. LineSeries, SplineSeries, AreaSeries and SplineAreaSeries (where there are no separate items but only connections between them), the paletteMode is not supported.

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Styling Examples](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/styling)
* [Bar CSS Examples](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/css)
* [Candlestick CSS Examples](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/css)

Related articles you might find useful:

* [**Axes Overview**]({% slug chart-axes-overview-vue %})
* [**Series Labels**]({% slug chart-series-labels-vue %})
* [**Series Overview**]({% slug chart-series-overview-vue %})









