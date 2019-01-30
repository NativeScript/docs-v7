---
title: Scales
page_title: RadGauge Scales | Progress NativeScript UI Documentation
description: A scales page of RadGauge for NativeScript. This article explains how to use GaugeScale objects in RadGauge.
slug: gauges-scales-angular
tags: radgauge, gauges, scales, angular
position: 2
publish: true
---

# RadGauge: Scales

{% typedoc_link classes:GaugeScale %} is a base class for all scales in {% typedoc_link classes:RadGauge %}. It has range and a set of indicators that are rendered according to the range of the scale they belong to. The scale manages the count and appearance of its ticks and labels. {% typedoc_link classes:RadialScale %} instances also allow setting a start and sweep angle. It is possible to add more than one scale to a gauge as this example demonstrates.

## Setup scales

In this example we are going to create a gauge that shows temperature in celsius and fahrenheit scale. To achieve this goal we will need 2 scales that show celsius and fahrenheit degrees and few indicators that display the current temperature and temperature ranges. The end result should look like this:

#### Figure 1. RadRadialGauge with multiple scales and indicators
![NativeScriptUI-Scales-iOS](../../img/ns_ui/gauges-scales1-ios.png "RadRadialGauge with two scales and indicators in iOS") ![NativeScriptUI-Scales-Android](../../img/ns_ui/gauges-scales1-android.png "RadRadialGauge with two scales and indicators in Android")

The first thing to do is to add the 2 scales to the gauge. We should also customize their radius, start and sweep angle, ticks and labels count and offsets. Note that the radius should be in absolute value - values near to 1 will draw the scale near the edge of the gauge while values near to 0 will draw it near the center. As we can see from the screenshot the labels in the inner scale should be drawn inside the scale and the labels of the outer scale should be outside. This is easy to do in HTML.

- First we need to declare the `RadRadialGauge` and its `RadialScale` as described in the [**Getting Started**]({% slug gauges-gettingstarted-angular %})
- After that we should set the {% typedoc_link classes:TitleStyle %} and {% typedoc_link classes:SubtitleStyle %} of the {% typedoc_link classes:RadRadialGauge %}. This is easily achieved by declaring the `<TitleStyle tkRadialGaugeTitleStyle><\TitleStyle>` and `<SubtitleStyle tkRadialGaugeSubtitleStyle></SubtitleStyle>`. Notice the `tkRadialGaugeTitleStyle` and `tkRadialGaugeSubtitleStyle` those are custom inline directives that 'link' those styles to the {% typedoc_link classes:RadRadialGauge %}.
- Next we should customize the {% typedoc_link classes:RadialScale %} bu declaring an  `<ScaleStyle tkRadialScaleStyle></ScaleStyle>`, again notice the `tkRadialScaleStyle` inline directive.
- Finally we can also customize the way the indicators of the {% typedoc_link classes:RadialScale %} by creating an {% typedoc_link classes:BarIndicatorStyle %} instance by adding the following tag to the HTML `<BarIndicatorStyle tkRadialBarIndicatorStyle></BarIndicatorStyle>` and setting it properties.

The next code snippet shows the described approach:

<snippet id='gauges-scales-add-scales-angular-html' />
<snippet id='gauges-scales-add-scales-angular' />

This is what you should see when you run the app:

#### Figure 2. RadRadialGauge with two scales
![NativeScriptUI-Scales-iOS](../../img/ns_ui/gauges-scales2-ios.png "RadRadialGauge with two scales in iOS") ![NativeScriptUI-Scales-Android](../../img/ns_ui/gauges-scales2-android.png "RadRadialGauge with two scales in Android") 

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Scales Example](https://github.com/telerik/nativescript-ui-samples/tree/master/gauge/app/examples/scales)

Related articles you might find useful:

* [**Indicators**]({% slug gauges-indicators-angular %})

