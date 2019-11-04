---
title: Getting Started
page_title: Chart Getting Started | Progress NativeScript UI Documentation
description: A getting started page of Chart for NativeScript. This article explains what are the steps to create a chart instance from scratch and use with Angular
slug: chart-getting-started-angular
tags: radchart, getting started, chart, angular, nativescript, professional, ui
position: 2
publish: true
---

# Chart Getting Started

In this article, you will learn to start using NativeScript UI Chart: how to initialize the chart, how to create the data series and how to use the different axes.

* [Plugin Installation](#plugin-installation)
* [Add Chart to Component Template](#add-chart-to-component-template)
* [Initialization](#initialization)
* [References](#references)

## Plugin Installation

Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-chart
```

## Add Chart to Component Template

Before proceeding, make sure that the {% typedoc_link classes:NativeScriptUIChartModule %} from the *nativescript-ui-chart* plugin has been imported in an `ngModule` in your app. For example:

```TypeScript
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        ....
        NativeScriptUIChartModule,
        ....
    ],
    declarations: [
        ....
    ]
})
export class ChartExamplesModule { }
```

Let's start with the `Component` in which we will place our RadChart instance. We create a basic angular `Component` that contains a collection of objects provided by an custom service, which has two properties that will be used by the chart to provide intuitive data visualization.

The service is a simple 'mock' of an backend call that will return an array of objects. Inside that service we have a single function which returns an array:

#### Example 1: Define a source with data

<snippet id='chart-angular-data-service'/>

<snippet id='chart-angular-categorical-source'/>

<snippet id='chart-angular-country'/>

## Initialization

The next step is to add the chart to the template of your `Component`. In this case we will use the **RadCartesianChart** type. For an example with **RadPieChart** you can refer to the PieSeries [article]({% slug chart-series-pie-angular %} "Read more about PieSeries")

> Charts must be put in a parent layout panel that does not require from its children to have their own desired size. You should not therefore put your chart in a `StackLayout` or an auto-sized row within a `GridLayout`.

After adding the chart to the page we need to add the series we will use in order to show the chart. In this case we will use the [BarSeries]({% slug chart-series-bar-angular %} "Read more about BarSeries") in combination with a [Categorical axis]({% slug chart-axes-categorical-angular %} "Read more about Categorical axis.") and a [Linear axis]({% slug chart-axes-linear-angular %} "Read more about Linear axis."). We set the `categoryProperty` of the series to the `Country` property in the objects from our data model and the `valueProperty` to the `Amount` property.
Then we set the **`tkCartesianHorizontalAxis`** directive to an instance of a `CategoricalAxis` and the **`tkCartesianVerticalAxis`** directive to an instance of a `LinearAxis`.

After the axes are set we need to add the series which we will show in the chart. In this case we will use the [BarSeries]({% slug chart-series-bar-angular %} "Read more about BarSeries"). We need to declare the `BarSeries` between the RadCartesianChart open and close tags and set the **`tkCartesianSeries`** directive.

The `DataService` and `Country` are custom modules used for example purposes so make sure you import them accordingly from your project's folder structure.

#### Example 2: Code of component

<snippet id='chart-angular-line-series-component'/>
<snippet id='chart-angular-line-series'/>

This will produce a page showing a Chart that will look like this:

#### Figure 1: Chart with BarSeries on Android (left) and iOS (right)

![Cartesian chart: Bar series](../../img/ns_ui/bar_series_android.png "Bar series on Android.") ![Cartesian chart: Bar series](../../img/ns_ui/bar_series_ios.png "Bar series on iOS.")

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-angular) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Chart Bar Series Example](https://github.com/NativeScript/nativescript-ui-samples-angular/tree/master/chart/app/examples/series/bar)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-angular %})
* [**Line Series**]({% slug chart-series-line-angular %})
* [**Axes Overview**]({% slug chart-axes-overview-angular %})
