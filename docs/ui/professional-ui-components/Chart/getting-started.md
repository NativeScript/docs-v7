---
title: Getting Started
page_title: Chart Getting Started | Progress NativeScript UI Documentation
description: A getting started page of Chart for NativeScript. This article explains what are the steps to create a chart instance from scratch.
slug: chart-getting-started
tags: radchart, getting started, chart, nativescript, professional, ui
position: 2
publish: true
---

# RadChart Getting Started
In this article, you will learn to get started with Telerik Chart for NativeScript: how to initialize the chart, how to create the data series and how to use the different axes.

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-chart
```

## DataModel
Let's start with the DataModel that we will use for our RadChart instance. We will create a basic Data Model that will contain a collection of objects, which will have two properties that will be used by the chart to provide intuitive data visualization.

<snippet id='categorical-source'/>

## Initialization
We will start by creating a new page where we will put the RadChart instance. First we will need to ensure that the Chart will be able to show any data, so we will create a page loaded event handler that will set the page's binding context.  

Then, in order to add a {% typedoc_link classes:RadCartesianChart %} instance in a page of your application, you need to define the following XML namespace:

- `xmlns:chart="nativescript-ui-chart"`.

The next step is to add the chart to the page. In this case we will use the [RadCartesianChart]({% slug chart-types-cartesian %} "Read more about RadCartesianChart.") type.

> Charts must be put in a parent layout panel that does not require from its children to have their own desired size. You should not therefore put your chart in a `StackLayout` or an auto-sized row within a `GridLayout`.

After adding the chart to the page we need to add the series we will use in order to show the chart. In this case we will use the [LineSeries]({% slug chart-series-line %} "Read more about LineSeries") in combination with a [Categorical]({% slug chart-axes-categorical %} "Read more about Categorical axis.") and a [Linear axes]({% slug chart-axes-linear %} "Read more about Linear axis."). We set the `categoryProperty` of the series to the `Country` property in the objects from our data model and the `valueProperty` to the `Amount` property.
Then we set the `horizontalAxis` to an instance of a `CategoricalAxis` and the `verticalAxis` to an instance of a `LinearAxis`.

<snippet id='line-series'/>

This will produce a page showing a Chart that will look like:

![TelerikUI-Chart-Getting-Started](../../img/ns_ui/chart-getting-started-android.png "Android")  ![TelerikUI-Chart-Getting-Started](../../img/ns_ui/chart-getting-started-ios.png "iOS")

## References
Want to see more examples using **RadCartesianChart**?
Check our SDK examples repository on GitHub. You will find this and a lot more practical examples with NativeScript UI.

* [Chart Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples)
