---
title: Indicators
page_title: RadGauge Indicators | Progress NativeScript UI Documentation
description: An indicators page of RadGauge for NativeScript. This article explains how to use indicators in RadGauge.
slug: gauges-indicators-vue
tags: radgauge, gauges, indicators, vue
position: 3
publish: true
---

# RadGauge: Indicators

Indicators in {% typedoc_link classes:RadGauge %} are visual elements that point to value or visualize a range of values on a {% typedoc_link classes:GaugeScale %}. They should be added to a scale and their values are aligned to the scale the indicators belong to. Currently `RadGauge` supports bar and needle indicators.

## Bar Indicators

Bar indicators are used to visualize a range of values on a scale. Customization of the bars is trivial. Changing their range, color, position and width is achieved by just setting a property. Bar indicators in {% typedoc_link classes:RadGauge %} have a default animation that animates their maximum value. Below is an example how to create several {% typedoc_link classes:RadialBarIndicator %} objects and add them to {% typedoc_link classes:RadialScale %}. The example shows how to create and add the indicators in xml and then animate them when we navigate to the page. Note that the indicator's width and location are normalized values. They are calculated based on the size of the gauge.

#### Example 1. Add bar indicators to a scale
First you will need to setup the RadRadialGauge as described in the [**Indicators**]({% slug gauges-gettingstarted-vue %}) after that in order to add the {% typedoc_link classes:RadialBarIndicator %} objects you will need to:

- Declare the `<RadialBarIndicator></RadialBarIndicator>` and set the custom `tkRadialScaleIndicators` inline directive to it. That inline directive is making the 'link' between the {% typedoc_link classes:RadialBarIndicator %} object and the {% typedoc_link classes:RadialScale %}

```
import { RadialScale, RadialBarIndicator } from "nativescript-ui-gauge";

export default {
  template: `
  <Page>
    <GridLayout>
      <RadRadialGauge class="gauge">
        <RadialScale ref="myScale" v-tkRadialGaugeScales startAngle="0"
                     sweepAngle="360" minimum="0" maximum="100" radius="0.9">
          <ScaleStyle v-tkRadialScaleStyle ticksVisible="false"
                      labelsVisible="false" lineThickness="0"></ScaleStyle>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="0"
                              maximum="100" location="0.5">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                               fillColor="rgba(224,151,36,0.5)"
                               barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators
                              minimum="0" maximum="0"
                              location="0.5" isAnimated="true">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle cap="Round"
                               fillColor="rgba(224,151,36,1)"
                               barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators
                              minimum="0" maximum="100"
                              location="0.75">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                               fillColor="rgba(196,241,57,0.5)"
                               barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators
                              minimum="0" maximum="0"
                              location="0.75" isAnimated="true">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                               cap="Round" fillColor="rgba(196,241,57,1)"
                               barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators
                              minimum="0" maximum="100" location="1">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                               fillColor="rgba(132,235,247,0.5)"
                               barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators
                              minimum="0" maximum="0"
                              location="1" isAnimated="true">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                               cap="Round" fillColor="rgba(132,235,247,1)"
                               barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>
        </RadialScale>
      </RadRadialGauge>.
    </GridLayout>
  </Page>
  `,
  data () {
    return {
    };
  },
  mounted () {
    let scale = this.$refs.myScale.nativeView as RadialScale;
    for (let i = 0; i < scale.indicators.length; i++) {
        let barIndicator = scale.indicators.getItem(i) as RadialBarIndicator;
        if (barIndicator.maximum === 0) {
            barIndicator.maximum = i * 15;
        }
    }
  },
};
```

This is what you should see if you run the example now:
#### Figure 1. Radial gauge with bar indicators
![NativeScriptUI-Indicators-iOS](../../../ui/img/ns_ui/gauges-indicators1-ios.png "Bar indicators in iOS") ![NativeScriptUI-Indicators-Android](../../../ui/img/ns_ui/gauges-indicators1-android.png "Bar indicators in Android")

#### Example 2. Animating the bar indicators
In order to animate the opaque indicators we have set the {% typedoc_link classes:GaugeIndicator,member:isAnimated %} property to `true`. The last thing to do is is to set their {% typedoc_link classes:BarIndicator,member:maximum %} value in the `mounted` handler and the indicators will animate to their new maximum value.

#### Figure 2. Bar indicators after animation
![NativeScriptUI-Indicators-iOS](../../../ui/img/ns_ui/gauges-indicators2-ios.png "Bar indicators in iOS") ![NativeScriptUI-Indicators-Android](../../../ui/img/ns_ui/gauges-indicators2-android.png "Bar indicators in Android")

## Needle Indicator

The needle indicator is used to point to a specific value. You can easily customize its length, top and bottom width. It is also possible to change the radius of the needle's circle or to offset the needle by just setting the corresponding properties. The length of the needle is again value between 0 and 1. The needle also supports animations when its value is changed. Adding a needle indicator to a scale is the same like adding a bar indicator.

#### Example 3. Add needle to a scale

```
export default {
  template: `
  <Page>
    <GridLayout rows="*, auto">
      <RadRadialGauge id="gaugeView" title="km/h" row="0" margin="10">
        <TitleStyle v-tkRadialGaugeTitleStyle textColor="black"
                    ios:verticalOffset="20"
                    android:verticalOffset="50"></TitleStyle>

        <RadialScale v-tkRadialGaugeScales
                     minimum="0" maximum="180"
                     radius="0.98">
          <ScaleStyle v-tkRadialScaleStyle
                      lineThickness="0" labelsCount="10"
                      majorTicksCount="19" minorTicksCount="1"
                      ticksOffset="0.1"
                      majorTicksStrokeWidth="2"
                      majorTicksStrokeColor="rgb(132, 132, 132)"></ScaleStyle>
          <RadialBarIndicator v-tkRadialScaleIndicators
                              minimum="0" maximum="60">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                               fillColor="rgb(132, 132, 132)"
                               barWidth="0.02"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators
                              minimum="61" maximum="120">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                               fillColor="rgb(54, 54, 54)"
                               barWidth="0.02"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators
                              minimum="121" maximum="180">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                               fillColor="rgb(198, 85, 90)"
                               barWidth="0.02"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialNeedle ref="needle" v-tkRadialScaleIndicators
                        isAnimated="true" animationDuration="500">
            <NeedleStyle v-tkRadialNeedleStyle
                         length="0.8"
                         android:topWidth="8" android:bottomWidth="8"
                         ios:topWidth="2" ios:bottomWidth="2"></NeedleStyle>
          </RadialNeedle>
        </RadialScale>
      </RadRadialGauge>

      <StackLayout row="1" orientation="horizontal" horizontalAlignment="center">
          <Button v-for="value of values"
                  verticalAlignment="center"
                  :text="value"
                  @tap="onValueChange(value)"></Button>
      </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      values: [60, 80, 120, 160],
    };
  },
  methods: {
    onValueChange(value: number) {
      this.$refs.needle.nativeView.value = value;
    }
  },
};
```

#### Example 4. Animated the needle on button tap

After the needle is added to a scale and we have set its {% typedoc_link classes:RadialNeedle,member:isAnimated %} property to `true` we can animate it changing its value when a button is tapped.

The example looks like this:

#### Figure 3. Needle indicator
![NativeScriptUI-Indicators-iOS](../../../ui/img/ns_ui/gauges-indicators3-ios.png "RadialNeedle in iOS") ![NativeScriptUI-Indicators-Android](../../../ui/img/ns_ui/gauges-indicators3-android.png "RadialNeedle in Android")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Indicators Example](https://github.com/telerik/nativescript-ui-samples-vue/tree/master/gauge/app/examples/scales)

Related articles you might find useful:

* [**Scales**]({% slug gauges-scales-vue %})
