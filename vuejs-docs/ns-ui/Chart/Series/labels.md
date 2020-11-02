---
title: Series Labels
page_title: Chart Series Labels | Progress NativeScript UI Documentation
description: This article is a short description and summary of Charts labels features.
slug: chart-series-labels-vue
tags: radchart, label, labels, chart, vue, nativescript, professional, ui
position: 6
publish: true
---

# Chart Series Labels

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn how to control the series labels and customize their appearance. All series have their default labels. In order to display them, you simply need to set the showLabels property of the series to `true`.

* [Styling with Label Style](#styling-with-label-style)
* [Styling with CSS](#styling-with-css)
* [References](#references)

## Styling with Label Style

One option to style the labels that are shown for series values is to initialize the {% typedoc_link classes:ChartSeries,member:labelStyle %} property of the series with instance of {% typedoc_link classes:PointLabelStyle %}. The supported properties are: 
- {% typedoc_link classes:PointLabelStyle,member:fillColor %}: Used to specify the label background color.
- {% typedoc_link classes:PointLabelStyle,member:strokeColor %}: Used to specify the color of the label stroke.
- {% typedoc_link classes:PointLabelStyle,member:strokeWidth %}: Used to specify the width of the label stroke.
- {% typedoc_link classes:PointLabelStyle,member:margin %}: Used to specify the device independent pixels between the label and the related data point.
- {% typedoc_link classes:PointLabelStyle,member:textFormat %}: Used to specify the string used as a formating string for label value. For example to format values to one symbol after decimal point and append the text `seconds`, you can use the following format: `%.1f seconds`.
- {% typedoc_link classes:PointLabelStyle,member:textColor %}: Used to specify the color for the text of the labels.
- {% typedoc_link classes:PointLabelStyle,member:textSize %}: Used to specify the size of the text of the labels.
- {% typedoc_link classes:PointLabelStyle,member:fontName %}: Used to specify the font name. If it is missing from the OS the default font is used instead.
- {% typedoc_link classes:PointLabelStyle,member:fontStyle %}: Used to specify the style of font. {% typedoc_link enums:ChartFontStyle,member:Bold%}, {% typedoc_link enums:ChartFontStyle,member:Italic%}, {% typedoc_link enums:ChartFontStyle,member:BoldItalic%} and {% typedoc_link enums:ChartFontStyle,member:Normal%} values can be used. Defaults to {% typedoc_link enums:ChartFontStyle,member:Normal%}.

To better illustrate styling of point label let's look at the following example:

#### Example 1: Apply series label styles through component template

```
<PointLabelStyle v-tkLineLabelStyle margin="10" fontStyle="Bold" fillColor="#60B3FC" textSize="10" textColor="White"></PointLabelStyle>
```

This is how the chart looks like now:

#### Figure 1: Axis styles on Android (left) and iOS (right)

![Axis styling](../../../../ui/img/ns_ui//labels_styling_android.png "Labels Styling on Android") ![Axis styling](../../../../ui/img/ns_ui//labels_styling_ios.png "Labels Styling on iOS")

## Styling with CSS

Another option to style all of the labels for the series of a chart is to use the label's CSS type selector - **ChartSeriesLabel**. Here's the list of values that are supported: 
* **color** - The color used for the text of the labels.
* **background-color** - The color used for the background of the label.
* **border-color** - The color used for the background of the label. Note that the labels only support a single value that is applied for the border of its four sides.
* **border-width** - The width used for the background of the label. Note that the labels only support a single value that is applied for the border of its four sides.
* **margin** - A single numeric value representing the device independent pixels between the label and the related data point.
* **padding** - The space between the label's text and its border.
* **font**-related properties (font-size, font-family, etc.)
* **format** -  The format used to display the series' labels. For example to format values to one symbol after decimal point and append the text `seconds`, you can use the following format: `%.1f seconds`.

Here's how to apply the styles from the previous example through CSS:

#### Example 2: Apply series label styles through css

```CSS
ChartSeriesLabel {
    margin: 10;
    font-weight: bold;
    background-color: #60B3FC;
    font-size: 10;
    color: white;
}
```

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Bar CSS Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/css)

Related articles you might find useful:

* [**Series Styling**]({% slug chart-series-styling-vue %})
* [**Series Overview**]({% slug chart-series-overview-vue %})
* [**Axes Labels**]({% slug chart-axes-labels-vue %})
