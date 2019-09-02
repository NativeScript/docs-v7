---
title: Indicators
page_title: RadGauge Indicators | Progress NativeScript UI Documentation
description: An indicators page of RadGauge for NativeScript. This article explains how to use indicators in RadGauge.
slug: gauges-indicators-angular
tags: radgauge, gauges, indicators, angular, nativescript, professional, ui
position: 3
publish: true
---

# RadGauge Indicators

Indicators in {% typedoc_link classes:RadGauge %} are visual elements that point to value or visualize a range of values on a {% typedoc_link classes:GaugeScale %}. They should be added to a scale and their values are aligned to the scale the indicators belong to. Currently `RadGauge` supports bar and needle indicators.

## Bar Indicators

Bar indicators are used to visualize a range of values on a scale. Customization of the bars is trivial. Changing their range, color, position and width is achieved by just setting a property. Bar indicators in {% typedoc_link classes:RadGauge %} have a default animation that animates their maximum value. Below is an example how to create several {% typedoc_link classes:RadialBarIndicator %} objects and add them to {% typedoc_link classes:RadialScale %}. The example shows how to create and add the indicators in xml and then animate them when we navigate to the page. Note that the indicator's width and location are normalized values. They are calculated based on the size of the gauge.

#### Example 1. Add bar indicators to a scale
First you will need to setup the RadRadialGauge as described in the [**Indicators**]({% slug gauges-gettingstarted-angular %}) after that in order to add the {% typedoc_link classes:RadialBarIndicator %} objects you will need to:

- Declare the `<RadialBarIndicator></RadialBarIndicator>` and set the custom `tkRadialScaleIndicators` inline directive to it. That inline directive is making the 'link' between the {% typedoc_link classes:RadialBarIndicator %} object and the {% typedoc_link classes:RadialScale %}

<snippet id='gauges-customization-angular-html' />
<snippet id='gauges-customization-angular' />
<snippet id='gauges-customization-angular-css' />

This is what you should see if you run the example now:
#### Figure 1. Radial gauge with bar indicators
![NativeScriptUI-Indicators-iOS](../../img/ns_ui/gauges-indicators1-ios.png "Bar indicators in iOS") ![NativeScriptUI-Indicators-Android](../../img/ns_ui/gauges-indicators1-android.png "Bar indicators in Android")

#### Example 2. Animating the bar indicators
In order to animate the opaque indicators we have set the {% typedoc_link classes:GaugeIndicator,member:isAnimated %} property to `true`. The last thing to do is is to set their {% typedoc_link classes:BarIndicator,member:maximum %} value in the `ngAfterViewInit` handler and the indicators will animate to their new maximum value.

#### Figure 2. Bar indicators after animation
![NativeScriptUI-Indicators-iOS](../../img/ns_ui/gauges-indicators2-ios.png "Bar indicators in iOS") ![NativeScriptUI-Indicators-Android](../../img/ns_ui/gauges-indicators2-android.png "Bar indicators in Android")

## Needle Indicator

The needle indicator is used to point to a specific value. You can easily customize its length, top and bottom width. It is also possible to change the radius of the needle's circle or to offset the needle by just setting the corresponding properties. The length of the needle is again value between 0 and 1. The needle also supports animations when its value is changed. Adding a needle indicator to a scale is the same like adding a bar indicator.

#### Example 3. Add needle to a scale
<snippet id='gauges-animations-angular-html' />
<snippet id='gauges-animations-angular' />
<snippet id='gauges-animations-angular-css' />

#### Example 4. Animated the needle on button tap

After the needle is added to a scale and we have set its {% typedoc_link classes:RadialNeedle,member:isAnimated %} property to `true` we can animate it changing its value when a button is tapped.

The example looks like this:
#### Figure 3. Needle indicator
![NativeScriptUI-Indicators-iOS](../../img/ns_ui/gauges-indicators3-ios.png "RadialNeedle in iOS") ![NativeScriptUI-Indicators-Android](../../img/ns_ui/gauges-indicators3-android.png "RadialNeedle in Android")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Indicators Example](https://github.com/NativeScript/nativescript-ui-samples-angular/tree/master/gauge/app/examples/scales)

Related articles you might find useful:

* [**Scales**]({% slug gauges-scales-angular %})


