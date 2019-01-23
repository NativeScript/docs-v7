---
title: Getting Started
page_title: RadGauge Getting Started  | Progress NativeScript UI Documentation
description: A getting started page of RadGauge for NativeScript. This article explains the steps to create RadRadialGauge from scratch.
slug: gauges-gettingstarted-vue
tags: radgauge, gauges, gettingstarted, Vue
position: 1
publish: true
---

# RadGauge: Getting Started

This article will guide you through the process of adding a {% typedoc_link classes:RadRadialGauge %} instance to a page in a {N} application and adding scales and indicators to it.

#### Figure 1. Radial gauge with needle and bar indicators
![NativeScriptUI-Getting-Started-iOS](/controls/NativeScript/Gauge/images/gauges-gettingstarted-ios.png "RadRadialGauge in iOS") ![NativeScriptUI-Getting-Started-Android](/controls/NativeScript/Gauge/images/gauges-gettingstarted-android.png "RadRadialGauge in Android") 

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

```
const MyComponent = {
    template: `
        <Page>
            <RadRadialGauge>
                <RadialScale v-tkRadialGaugeScales minimum="0" maximum="6" radius="0.90">
                <ScaleStyle v-tkRadialScaleStyle majorTicksCount="7" minorTicksCount="9" lineThickness="0" labelsCount="7" ticksOffset="0" />
                <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="1.2" location="0.97">
                    <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="#dddddd" />
                </RadialBarIndicator>
                <RadialBarIndicator v-tkRadialScaleIndicators minimum="1.2" maximum="2.4" location="0.97">
                    <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="#9DCA56" />
                </RadialBarIndicator>
                <RadialBarIndicator v-tkRadialScaleIndicators minimum="2.4" maximum="3.6" location="0.97">
                    <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="#F0C44D" />
                </RadialBarIndicator>
                <RadialBarIndicator v-tkRadialScaleIndicators minimum="3.6" maximum="4.8" location="0.97">
                    <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="#E27633" />
                </RadialBarIndicator>
                <RadialBarIndicator v-tkRadialScaleIndicators minimum="4.8" maximum="6" location="0.97">
                    <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="#A7010E" />
                </RadialBarIndicator>
                <RadialNeedle v-tkRadialScaleIndicators :value="gaugeValue" />
                </RadialScale>
            </RadRadialGauge>
        </Page>
    `,
    data() {
        return {
            gaugeValue: 2
        }
    }
}
```