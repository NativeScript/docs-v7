---
title: Getting Started
page_title: RadGauge Getting Started  | Progress NativeScript UI Documentation
description: A getting started page of RadGauge for NativeScript. This article explains the steps to create RadRadialGauge from scratch.
slug: gauges-gettingstarted-vue
tags: radgauge, gauges, gettingstarted, Vue, nativescript, professional, ui
position: 1
publish: true
---

# RadGauge Getting Started

This article will guide you through the process of adding a {% typedoc_link classes:RadRadialGauge %} instance to a page in a {N} application and adding scales and indicators to it.

#### Figure 1. Radial gauge with needle and bar indicators
![NativeScriptUI-Getting-Started-iOS](../../../ui/img/ns_ui/gauges-gettingstarted-ios.png "RadRadialGauge in iOS") ![NativeScriptUI-Getting-Started-Android](../../../ui/img/ns_ui/gauges-gettingstarted-android.png "RadRadialGauge in Android") 

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-gauge
```

## Adding a RadRadialGauge to your Component
Before proceeding, make sure that the `nativescript-ui-gauge/vue` module is required inside your application. This module handles the registration of the custom directives and elements required by [nativescript-vue](https://nativescript-vue.org/).

To display data the {% typedoc_link classes:RadRadialGauge %} instance is not enough. We should add also add a scale with at least on indicator. In this example we are going to add a {% typedoc_link classes:RadialScale %} with several {% typedoc_link classes:RadialBarIndicator %} instances and one {% typedoc_link classes:RadialNeedle %}. To add a scale to the {% typedoc_link classes:RadRadialGauge %} we should use its {% typedoc_link classes:RadGauge,member:scales%} property. Adding indicators to the scale is similar - we are using {% typedoc_link classes:RadialScale %}'s {% typedoc_link classes:GaugeScale,member:indicators%} property.

In order to setup an `RadRadialGauge` in your application you will need to follow this steps:

- First start by declaring the `<RadRadialGauge></RadRadialGauge>` tags
- The main elements that are visualized by the gauge are its scales, in order to declare multiple scales simply declare the `<RadialScale v-tkRadialGaugeScales></RadialScale>` and set the `v-tkRadialGaugeScales` inline directive to it.

<snippet id='gauge-gettingstarted-vue'/>