---
title: Overview
page_title: RadGauge Overview  | Progress NativeScript UI Documentation
description: An overview page of RadGauge for NativeScript. This article explains the most important things you need to know before using RadGauge.
slug: gauges-overview-angular
tags: radgauge, gauges, overview, angular
position: 0
publish: true
---

# RadGauge: Overview

{% typedoc_link classes:RadGauge %} is a highly customizable component that allows you to show the current status of a value within a range of upper and lower bounds, illustrate progress towards a goal or a summary of a fluctuating metric.
#### Figure 1: Radial gauge with indicators

![NativeScriptUI-Overview-iOS](../../img/ns_ui/gauges-gettingstarted-ios.png "RadRadialGauge in iOS") ![NativeScriptUI-Overview-Android](../../img/ns_ui/gauges-gettingstarted-android.png "RadRadialGauge in Android") 

## Scales
{% typedoc_link classes:RadGauge %} supports multiple {% typedoc_link classes:GaugeScale %} objects. The scale has range and a set of indicators that are rendered according to the scale's range.

## Indicators
{% typedoc_link classes:GaugeIndicator %} is a visual element that points to or visualizes a range of values on a scale. Multiple indicators can be added to a scale. Indicators can be animated when their value is changed.

# Angular directives

When using the {% typedoc_link classes:RadGauge %} with Angular you are going to work with multiple custom angular RadGauge specific directives. In short these directives are used by the angular framework to enable 'linking' between separate HTML tags into one 'complex' element.

Here is a full list of the available custom Angular {% typedoc_link classes:RadGauge %} directives and components:

## Components
Represent the major elements:

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| RadRadialGauge | {% typedoc_link classes:RadRadialGaugeComponent %} |


## Directives
Represent the smaller elements that are visualized in {% typedoc_link classes:RadListView %}:

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| RadialScale | {% typedoc_link classes:TKRadialScaleDirective %} |
| RadialBarIndicator | {% typedoc_link classes:TKRadialBarIndicatorDirective %} |
| RadialNeedle | {% typedoc_link classes:TKRadialNeedleDirective %} |

## Inline Directives
Represent the 'link' mechanism of the smaller with the major elements

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| tkRadialGaugeScales | {% typedoc_link classes:TKRadialGaugeScalesDirective %} |
| tkRadialScaleIndicators | {% typedoc_link classes:TKRadialScaleIndicatorsDirective %} |
| tkRadialBarIndicatorStyle | {% typedoc_link classes:TKRadialBarIndicatorStyleDirective %} |
| tkRadialGaugeTitleStyle | {% typedoc_link classes:TKRadialGaugeTitleStyleDirective %} |
| tkRadialGaugeSubtitleStyle | {% typedoc_link classes:TKRadialGaugeSubtitleStyleDirective %} |
| tkRadialNeedleStyle | {% typedoc_link classes:TKRadialNeedleStyleDirective %} |



