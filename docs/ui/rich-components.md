---
title: Professional UI Components
description: Get familiar with the premium user interface elements (widgets) in NativeScript UI.
position: 25
slug: rich-components
---

# Professional UI Components


NativeScript UI is a free suite of rich and customizable premium UI widgets for building NativeScript apps. It is available for download as a plugin on npmjs.com under [nativescript-pro-ui](https://www.npmjs.com/package/nativescript-pro-ui).

> Continue reading about each component below or take them for a spin with the {% nativescript %}[NativeScript UI sample app on GitHub](https://github.com/telerik/nativescript-ui-samples){% endnativescript %}{% angular %}[NativeScript UI sample app on GitHub](https://github.com/telerik/nativescript-ui-samples-angular){%  endangular %}.


* [AutoCompleteTextView](#autocompletetextview)
* [Calendar](#calendar)
* [Chart](#chart)
* [DataForm](#dataform)
* [Gauges](#gauges)
* [ListView](#listview)
* [SideDrawer](#sidedrawer)


## AutoCompleteTextView

[{% nativescript %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/AutoCompleteTextView/overview){% endnativescript %}{% angular %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/AutoCompleteTextView/overview){% endangular %}] [{% nativescript %}[Sample Code](https://github.com/telerik/nativescript-ui-samples/tree/release/sdk/app/autocomplete){% endnativescript %}{% angular %}[Sample Code](https://github.com/telerik/nativescript-ui-samples-angular/tree/release/sdkAngular/app/autocomplete){% endangular %}]

The AutoCompleteTextView component (known as RadAutoCompleteTextView in code) offers suggested options to your users based on characters they type. It provides multiple means for easy customization and data management, including:

*  Suggest modes - you can choose to show suggestions in a drop-down list, one suggestion at a time in the text input, or a combination of both;
*  `StartsWith` and `Contains` completion modes;
*  Two distinct display modes: `Plain` in which only one item can be selected, and `Tokens` allowing multiple selection of suggestions (each displayed as a token).

![autocompletetextview ios](../img/ui-for-nativescript/autocompletetextview-ios.png "autocompletetextview ios") ![autocompletetextview android](../img/ui-for-nativescript/autocompletetextview-android.png "autocompletetextview android")


## Calendar

[{% nativescript %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/Calendar/overview){% endnativescript %}{% angular %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/Calendar/overview){% endangular %}] [{% nativescript %}[Sample Code](https://github.com/telerik/nativescript-ui-samples/tree/release/sdk/app/calendar){% endnativescript %}{% angular %}[Sample Code](https://github.com/telerik/nativescript-ui-samples-angular/tree/release/sdkAngular/app/calendar){% endangular %}]

The Calendar component (known as RadCalendar in code) is a highly customizable native calendar abstraction that exposes a unified API, covering:

* Four different view modes - `Week`, `Month`, `MonthNames`, and `Year`;
* `Single`, `Multiple`, and `Range` date selection;
* Inline and popover events;
* Vast control over styling and cell customization options.

![calendar ios](../img/ui-for-nativescript/calendar-ios.png "calendar ios") ![calendar android](../img/ui-for-nativescript/calendar-android.png "calendar android")


## Chart

[{% nativescript %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/Chart/overview){% endnativescript %}{% angular %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/Chart/overview){% endangular %}] [{% nativescript %}[Sample Code](https://github.com/telerik/nativescript-ui-samples/tree/release/sdk/app/chart){% endnativescript %}{% angular %}[Sample Code](https://github.com/telerik/nativescript-ui-samples-angular/tree/release/sdkAngular/app/chart){% endangular %}]

The Chart component (known as RadChart in code) can be used to visualize data in a human-readable way through lines, areas, bars, pies, and more. Some features include:

* Wide array of accepted data types: numerical, string or `DateTime` data depending on the chart you want to visualize;
* Smooth interaction and zooming;
* Various chart series options:

	* Show trends with `Line`, `Area`, and `Spline Area` charts;
	* Compare sets of data with `Bar` charts;
	* Illustrate proportions with `Pie` and `Donut` charts - and use `Spline` and `Spline Area` charts to plot data that require the use of curve fittings;
	* Show relationships among values using `Scatter` and `Bubble` series, even use `Financial` series and indicators.
* Annotations, tooltips, and trackball;
* Support for multiple axes.

![chart ios](../img/ui-for-nativescript/chart-ios.png "chart ios") ![chart android](../img/ui-for-nativescript/chart-android.png "chart android")


## DataForm

[{% nativescript %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/DataForm/dataform-overview){% endnativescript %}{% angular %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/DataForm/dataform-overview){% endangular %}] [{% nativescript %}[Sample Code](https://github.com/telerik/nativescript-ui-samples/tree/release/sdk/app/dataform){% endnativescript %}{% angular %}[Sample Code](https://github.com/telerik/nativescript-ui-samples-angular/tree/release/sdkAngular/app/dataform){% endangular %}]

The DataForm component (known as RadDataForm in code) provides an easy and versatile approach for building mobile forms based on a provided data object's public members. Use DataForm to:

* Bind a form to a data object with a single line of code;
* Take advantage of more than **15** built-in editors (or provide your own custom editor);
* Create groups of editors, allow them to be collapsed and style them;
* Display a form in `ReadOnly` mode;
* Take control over collected data with built-in data validation - use a provided validator or create a custom one.

![dataform ios](../img/ui-for-nativescript/dataform-ios.png "dataform ios") ![dataform android](../img/ui-for-nativescript/dataform-android.png "dataform android")


## Gauges

[{% nativescript %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/Gauges/overview){% endnativescript %}{% angular %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/Gauges/overview){% endangular %}] [{% nativescript %}[Sample Code](https://github.com/telerik/nativescript-ui-samples/tree/release/sdk/app/gauges){% endnativescript %}{% angular %}[Sample Code](https://github.com/telerik/nativescript-ui-samples-angular/tree/release/sdkAngular/app/gauges){% endangular %}]

The Gauges component (known as RadRadialGauge in code) allows you to display the current status of a value within a range of upper and lower bounds, illustrate progress towards a goal, or a summary of a fluctuating metric. With the gauges component you may:

* Add one or more `RadialScale` instances to your gauge;
* Use `Bar` indicators to visualize a range of values or a `Needle` indicator to point to a specific value;
* Include ready-to-use animations for smooth transition effects.

![gauges ios](../img/ui-for-nativescript/gauges-ios.png "gauges ios") ![gauges android](../img/ui-for-nativescript/gauges-android.png "gauges android")


## ListView

[{% nativescript %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/ListView/overview){% endnativescript %}{% angular %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/ListView/overview){% endangular %}] [{% nativescript %}[Sample Code](https://github.com/telerik/nativescript-ui-samples/tree/release/sdk/app/listview){% endnativescript %}{% angular %}[Sample Code](https://github.com/telerik/nativescript-ui-samples-angular/tree/release/sdkAngular/app/listview){% endangular %}]

> **NOTE**: The professional ListView component is different from the ListView built in to the core NativeScript modules. Use the professional ListView if you need to take advantage of the advanced functionality listed below.

The ListView component (known as RadListView in code) is a virtualizing list component that provides the most needed features associated with scenarios where a list of items is used. Features include:

* Pull to refresh;
* Item animation when the user scrolls, and four out-of-the-box effects to choose from;
*  `Linear`, `Grid`, and `Staggered` layout modes, allowing horizontal and vertical scrolling direction;
* Single and multiple selection modes;
* Smart defaults for many gestures: select on long press, execution of special action on swipe, reorder of items on long press and drag, refreshing the list on swipe, and loading more items only when needed.

![listview ios](../img/ui-for-nativescript/listview-ios.png "listview ios") ![listview android](../img/ui-for-nativescript/listview-android.png "listview android")


## SideDrawer

[{% nativescript %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/overview){% endnativescript %}{% angular %}[Documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/overview){% endangular %}] [{% nativescript %}[Sample Code](https://github.com/telerik/nativescript-ui-samples/tree/release/sdk/app/sidedrawer){% endnativescript %}{% angular %}[Sample Code](https://github.com/telerik/nativescript-ui-samples-angular/tree/release/sdkAngular/app/sidedrawer){% endangular %}]

The SideDrawer component (known as RadSideDrawer in code) allows you to follow a popular application pattern and show a hidden view which contains navigation UI or common settings. With SideDrawer you may:

* Embed any content inside the sliding panel from text and icons, to sliders and filters;
* Set the control to slide in from any of the four sides of the screen;
* Pick from a large set of polished out-of-the-box transition modes;
* Achieve programmatic control over the state of the side drawer;
* Choose to cover the navigation or action bar.

![sidedrawer ios](../img/ui-for-nativescript/sidedrawer-ios.png "sidedrawer ios") ![sidedrawer android](../img/ui-for-nativescript/sidedrawer-android.png "sidedrawer android")

