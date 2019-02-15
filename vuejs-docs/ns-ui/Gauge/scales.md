---
title: Scales
page_title: RadGauge Scales | Progress NativeScript UI Documentation
description: A scales page of RadGauge for NativeScript. This article explains how to use GaugeScale objects in RadGauge.
slug: gauges-scales-vue
tags: radgauge, gauges, scales, vue
position: 2
publish: true
---

# RadGauge: Scales

{% typedoc_link classes:GaugeScale %} is a base class for all scales in {% typedoc_link classes:RadGauge %}. It has range and a set of indicators that are rendered according to the range of the scale they belong to. The scale manages the count and appearance of its ticks and labels. {% typedoc_link classes:RadialScale %} instances also allow setting a start and sweep angle. It is possible to add more than one scale to a gauge as this example demonstrates.

## Setup scales

In this example we are going to create a gauge that shows temperature in celsius and fahrenheit scale. To achieve this goal we will need 2 scales that show celsius and fahrenheit degrees and few indicators that display the current temperature and temperature ranges. The end result should look like this:

#### Figure 1. RadRadialGauge with multiple scales and indicators
![NativeScriptUI-Scales-iOS](../../../ui/img/ns_ui/gauges-scales1-ios.png "RadRadialGauge with two scales and indicators in iOS") ![NativeScriptUI-Scales-Android](../../../ui/img/ns_ui/gauges-scales1-android.png "RadRadialGauge with two scales and indicators in Android")

The first thing to do is to add the 2 scales to the gauge. We should also customize their radius, start and sweep angle, ticks and labels count and offsets. Note that the radius should be in absolute value - values near to 1 will draw the scale near the edge of the gauge while values near to 0 will draw it near the center. As we can see from the screenshot the labels in the inner scale should be drawn inside the scale and the labels of the outer scale should be outside. This is easy to do in HTML.

- First we need to declare the `RadRadialGauge` and its `RadialScale` as described in the [**Getting Started**]({% slug gauges-gettingstarted-vue %})
- After that we should set the {% typedoc_link classes:TitleStyle %} and {% typedoc_link classes:SubtitleStyle %} of the {% typedoc_link classes:RadRadialGauge %}. This is easily achieved by declaring the `<TitleStyle v-tkRadialGaugeTitleStyle><\TitleStyle>` and `<SubtitleStyle v-tkRadialGaugeSubtitleStyle></SubtitleStyle>`. Notice the `tkRadialGaugeTitleStyle` and `tkRadialGaugeSubtitleStyle` those are custom inline directives that 'link' those styles to the {% typedoc_link classes:RadRadialGauge %}.
- Next we should customize the {% typedoc_link classes:RadialScale %} bu declaring an  `<ScaleStyle v-tkRadialScaleStyle></ScaleStyle>`, again notice the `tkRadialScaleStyle` inline directive.
- Finally we can also customize the way the indicators of the {% typedoc_link classes:RadialScale %} by creating an {% typedoc_link classes:BarIndicatorStyle %} instance by adding the following tag to the HTML `<BarIndicatorStyle v-tkRadialBarIndicatorStyle></BarIndicatorStyle>` and setting it properties.

The next code snippet shows the described approach:

```
export default {
  template: `
  <Page>
    <RadRadialGauge title="celsius" subtitle="fahrenheit">
      <TitleStyle v-tkRadialGaugeTitleStyle textColor="gray"
                  ios:textSize="12" ios:verticalOffset="30"
                  android:verticalOffset="90"></TitleStyle>
      <SubtitleStyle v-tkRadialGaugeSubtitleStyle
                     textColor="gray"></SubtitleStyle>
        <RadialScale v-tkRadialGaugeScales
                     startAngle="135" sweepAngle="270"
                     minimum="34" maximum="40" radius="0.6">
          <ScaleStyle v-tkRadialScaleStyle
                      majorTicksCount="7" minorTicksCount="9"
                      lineThickness="2" labelsOffset="0.1" lineColor="gray"
                      labelsCount="7" ticksOffset="0"></ScaleStyle>
          <RadialBarIndicator v-tkRadialScaleIndicators
                              minimum="34" maximum="36" location="0.69">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                               fillColor="blue" barWidth="0.08"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators
                              minimum="36.05" maximum="40" location="0.69">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                               fillColor="red" barWidth="0.08"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialNeedle v-tkRadialScaleIndicators
                        value="36.5">
            <NeedleStyle v-tkRadialNeedleStyle
                         length="0.5"
                         android:topWidth="8" ios:topWidth="3"
                         android:bottomWidth="8" ios:bottomWidth="3"></NeedleStyle>
          </RadialNeedle>
        </RadialScale>

        <RadialScale v-tkRadialGaugeScales
                     minimum="93.2" maximum="104" radius="0.7">
          <ScaleStyle v-tkRadialScaleStyle
                      majorTicksCount="7" minorTicksCount="20"
                      lineThickness="2" labelsOffset="0.1" lineColor="gray"
                      labelsCount="7" ticksOffset="0" labelsLayoutMode="Outer"
                      ticksLayoutMode="Outer"></ScaleStyle>
        </RadialScale>
    </RadRadialGauge>
  </Page>
  `
};
```

This is what you should see when you run the app:

#### Figure 2. RadRadialGauge with two scales
![NativeScriptUI-Scales-iOS](../../../ui/img/ns_ui/gauges-scales2-ios.png "RadRadialGauge with two scales in iOS") ![NativeScriptUI-Scales-Android](../../../ui/img/ns_ui/gauges-scales2-android.png "RadRadialGauge with two scales in Android")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Scales Example](https://github.com/telerik/nativescript-ui-samples/tree/master/gauge/app/examples/scales)

Related articles you might find useful:

* [**Indicators**]({% slug gauges-indicators-vue %})
