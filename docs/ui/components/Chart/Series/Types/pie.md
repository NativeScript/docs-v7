---
title: Pie
page_title: Pie Series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Pie series and continues with a sample scenario of how Pie series are used.
slug: chart-series-pie
tags: series, cartesian, pie, chart, nativescript, professional, ui
position: 12
publish: true
---

# Chart Pie Series

**PieSeries** are a type of [ChartSeries]({% slug chart-series-overview %} "Chart Series Overview") that use a circular statistical graphic, which is divided into slices to illustrate numerical proportion. In a pie chart, the arc length of each slice (and consequently its central angle and area), is proportional to the quantity it represents. The names comes from the chart's resemblance to a pie which has been sliced.

* [Setup](#setup)
* [Properties](#properties)
* [References](#references)

## Setup

To display a Pie Chart, you will need to:
 - Add **RadPieChart** to your page.
 - Add an instance of **PieSeries** to the chart's **series** property and set its **items** property to a collection of data items and its **valueProperty** to the name of the property used to determine where to determine the proportion between the splices.

To illustrate this setup, let's create an example. First we will create a source with items:
 
#### Example 1: Define a source with data

<snippet id='categorical-source'/>

We use an instance of this model to assign it as the `bindingContext` of the page we have put our Pie series on:

#### Example 2: Update bindingContext

<snippet id='binding-context-pie-series'/>

And finally, in the XML definition of the page we put two RadCartesianCharts, add a PieSeries instance to one of them and DonutSeries to the other and bind the series to the source of data.

#### Example 3: Add chart to page's markup

<snippet id='pie-series'/>

#### Figure 1: Chart with PieSeries on Android (left) and iOS (right)

![Cartesian chart: Pie series](../../../../img/ns_ui/pie_series_android.png "Pie series on Android.") ![Cartesian chart: Pie series](../../../../img/ns_ui/pie_series_ios.png "Pie series on iOS.")

## Properties

-  {% typedoc_link classes:PieSeries,member:outerRadiusFactor %} - This property can increase and decrease the diameter of the series. By default, it occupies the whole plot area and is equal to 1. Setting the outerRadius to 0.9 will decrease the radius of the series by 10 percent. Similarly, the value 1.1 will increase it. Leaving the property with value 1 will make the donut fill the available space.
- {% typedoc_link classes:PieSeries,member:expandRadius %} - This property defines the extent to which the selected pie segment is shifted. Again, this property is measured in percents. A value of 1.1 defines that the selected segment will expand by 10% of the pie radius.
- {% typedoc_link classes:PieSeries,member:startAngle %} and {% typedoc_link classes:PieSeries,member:endAngle %} - These properties are used to define the pie range. The `startAngle` sets the angle in degrees from which the drawing of the pie segments will begin.
Its default value is 0. The `endAngle` determines whether the chart will appear as a full circle or a partial circle. Its default value is 360 degrees.

## References

Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Pie Series Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/series/pie)

Related articles you might find useful:

* [**Donut Series**]({% slug chart-series-donut %})
* [**Bubble Series**]({% slug chart-series-bubble %})
* [**Bar Series**]({% slug chart-series-bar %})
