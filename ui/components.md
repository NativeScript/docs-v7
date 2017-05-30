---
title: Components
description: Get familiar with the default user interface elements (widgets) in NativeScript.
position: 20
slug: components
previous_url: /ui-views,/ui/ui-views
---

# User Interface Widgets

NativeScript ships with a set of user interface [`views`](http://docs.nativescript.org/api-reference/modules/_ui_core_view_.html) (also known as widgets) which you can use to build the user interface of a mobile application. Most of these views wrap the corresponding native view for each platform while providing a common API for working with it. For example, the `Button` view renders an [`android.widget.Button`](http://developer.android.com/reference/android/widget/Button.html) on Android and [`UIButton`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) on iOS.


* [Button](#button)
* [Label](#label)
* [TextField](#textfield)
* [TextView](#textview)
* [SearchBar](#searchbar)
* [Switch](#switch)
* [Slider](#slider)
* [Progress ](#progress)
* [ActivityIndicator](#activityindicator)
* [Image](#image)
* [ListView](#listview)
* [HtmlView](#htmlview)
* [WebView](#webview)
* [TabView](#tabview)
* [SegmentedBar](#segmentedbar)
* [DatePicker](#datepicker)
* [TimePicker](#timepicker)
* [ListPicker](#listpicker)
* [Dialogs](#dialogs)




Some of the components are provided by Telerik UI for NativeScript plugin, which is distributed in two versions:

* Telerik UI for NativeScript (free)
* Telerik UI for NativeScript Pro (paid)

Telerik UI for NativeScript is available for download on npmjs.com under the [nativescript-telerik-ui](https://www.npmjs.com/package/nativescript-telerik-ui) name. It contains two free components:

* [RadListView](#radlistview)
* [SideDrawer](#sidedrawer)


A fully functioning trial of Telerik UI for NativeScript Pro is available for download from the [Telerik website](https://www.telerik.com/download-trial-file/v2/nativescript-ui) or from npmjs.com under the [nativescript-telerik-ui-pro](https://www.npmjs.com/package/nativescript-telerik-ui-pro) name. Besides the two free components mentioned above, it also contains:

* [Calendar <sup>Premium</sup>](#calendar)
* [Chart <sup>Premium</sup>](#chart)
* [DataForm <sup>Premium</sup>](#dataform)
{% nativescript %}
* [Gauges <sup>Premium</sup>](#gauges)
* [AutoCompleteTextView <sup>Premium</sup>](#autocompletetextview)
{% endnativescript %}



Defining the layout of the application is also an important part of the application development. For more information about the different layout containers that are available in NativeScript, see [The NativeScript Layout System]({%slug layouts %}).

> **TIP:** You can access the underlying native widget for each view at runtime using the following properties:
>
> * Android: `<view>.android`
> * iOS: `<view>.ios`
>
> Accessing the native widgets might be useful when you want to use some platform-specific functionalities of the widget. You can find information about the underlying native component for each view below.

## Button

The [Button]({%slug button%}) widget provides a standard button widget that reacts to a `tap` event.

![button android](../img/gallery/android/buttonPage.png "button android")![button ios](../img/gallery/ios/buttonPage.png "button ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Button](http://developer.android.com/reference/android/widget/Button.html) | [UIButton](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) |

## Label

The [Label]({%slug label%}) widget provides a text label that shows read-only text.

![label android](../img/gallery/android/labelPage.png "label android")![label ios](../img/gallery/ios/labelPage.png "label ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.TextView](http://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UILabel_Class/) |

## TextField

The [TextField]({%slug text-field%}) widget provides an editable **single-line** text field.

![text-field android](../img/gallery/android/textFieldPage.png "text-field android")![text-field ios](../img/gallery/ios/textFieldPage.png "text-field ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextField](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextField_Class/) |

## TextView

The [TextView]({%slug text-view%}) widget provides an editable **multi-line** text view. 

You can use it to show multi-line text and implement text editing.

![text-view android](../img/gallery/android/textViewPage.png "text-view android")![text-view ios](../img/gallery/ios/textViewPage.png "text-view ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextView_Class/) |

## SearchBar

The [SearchBar]({%slug search-bar%}) widget provides a user interface for entering search queries and submitting requests to the search provider.

![search-bar android](../img/gallery/android/searchBarPage.png "search-bar android")![search-bar ios](../img/gallery/ios/searchBarPage.png "search-bar ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.SearchView](http://developer.android.com/reference/android/widget/SearchView.html) | [UISearchBar](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISearchBar_Class/) |

## Switch

The [Switch]({%slug switch%}) widget provides a two-state toggle switch from which you can choose between two options.

![switch android](../img/gallery/android/switchPage.png "switch android")![switch ios](../img/gallery/ios/switchPage.png "switch ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Switch](http://developer.android.com/reference/android/widget/Switch.html) | [UISwitch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISwitch_Class/) |

## Slider

The [Slider]({%slug slider%}) widget provides a slider that you can use to pick a numeric value within a configurable range.

![slider android](../img/gallery/android/sliderPage.png "slider android")![slider ios](../img/gallery/ios/sliderPage.png "slider ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.SeekBar](http://developer.android.com/reference/android/widget/SeekBar.html) | [UISlider](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISlider_Class/) |

## Progress

The [Progress]({%slug progress%}) widget is a visual bar indicator of a progress in a operation. It shows a bar representing the current progress of the operation.

![progress android](../img/gallery/android/progressPage.png "progress android")![progress ios](../img/gallery/ios/progressPage.png "progress ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = false) | [UIProgressView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIProgressView_Class/) |

## ActivityIndicator

The [ActivityIndicator]({%slug activity-indicator%}) widget is a visual spinner indicator which shows that a task is in progress.

![activity-indicator android](../img/gallery/android/activityIndicatorPage.png "activity-indicator android")![activity-indicator ios](../img/gallery/ios/activityIndicatorPage.png "activity-indicator ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = true) | [UIActivityIndicatorView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIActivityIndicatorView_Class/) |

## Image

The [Image]({%slug image%}) widget shows an image. You can load the image from an [`ImageSource`](http://docs.nativescript.org/api-reference/modules/_image_source_.html) or from a URL.

![image android](../img/gallery/android/imagePage.png "image android")![image ios](../img/gallery/ios/imagePage.png "image ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ImageView](http://developer.android.com/reference/android/widget/ImageView.html) | [UIImageView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImageView_Class/) |

## ListView

The [ListView]({%slug list-view%}) shows items in a vertically scrolling list. You can set an [`itemTemplate`](http://docs.nativescript.org/api-reference/modules/_ui_list_view_.knowntemplates.html) to specify how each item in the list should be displayed.

![list-view android](../img/gallery/android/listViewPage.png "list-view android")![list-view ios](../img/gallery/ios/listViewPage.png "list-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ListView](http://developer.android.com/reference/android/widget/ListView.html) | [UITableView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/) |

## HtmlView

The [HtmlView]({%slug html-view%}) represents a view with HTML content. Use this component instead of WebView when you want to show just static HTML content.

![html-view android](../img/gallery/android/htmlViewPage.png "html-view android")![html-view ios](../img/gallery/ios/htmlViewPage.png "html-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TextView](http://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UILabel_Class/) |

## WebView

The [WebView]({%slug web-view%}) shows web pages. You can load a page from a URL or by navigating back and forward.

![web-view android](../img/gallery/android/webViewPage.png "web-view android")![web-view ios](../img/gallery/ios/webViewPage.png "web-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.webkit.WebView](http://developer.android.com/reference/android/webkit/WebView.html) | [UIWebView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/) |

## TabView

With the [TabView]({%slug tab-view%}) control, you can implement tab navigation.

![tab-view android](../img/gallery/android/tabViewPage.png "tab-view android")![tab-view ios](../img/gallery/ios/tabViewPage.png "tab-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.support.v4.view.ViewPager](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [UITabBarController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITabBarController_Class/) |

## SegmentedBar

With the [SegmentedBar]({%slug segmented-bar%}) control, you can implement discrete selection.

![segmented-bar android](../img/gallery/android/segmentedBarPage.png "segmented-bar android")![segmented-bar ios](../img/gallery/ios/segmentedBarPage.png "segmented-bar ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TabHost](http://developer.android.com/reference/android/widget/TabHost.html) | [UISegmentedControl](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UISegmentedControl_Class/index.html) |

## DatePicker

With the [DatePicker]({%slug date-picker%}) control, you can pick a date.

![date-picker android](../img/gallery/android/datePickerPage.png "date-picker android")![date-picker ios](../img/gallery/ios/datePickerPage.png "date-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.DatePicker](http://developer.android.com/reference/android/widget/DatePicker.html) | [UIDatePicker](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) |

## TimePicker

With the [TimePicker]({%slug time-picker%}) widget, you can pick a time.

![time-picker android](../img/gallery/android/timePickerPage.png "time-picker android")![time-picker ios](../img/gallery/ios/timePickerPage.png "time-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TimePicker](http://developer.android.com/reference/android/widget/TimePicker.html) | [UIDatePicker](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) |

## ListPicker

With the [ListPicker]({%slug list-picker%}) widget, you can pick a value from a list.

![list-picker android](../img/gallery/android/listPickerPage.png "list-picker android")![list-picker ios](../img/gallery/ios/listPickerPage.png "list-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.NumberPicker](http://developer.android.com/reference/android/widget/NumberPicker.html) | [UIPickerView](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIPickerView_Class/index.html) |

## Dialogs

The [dialogs module]({%slug dialogs %}) lets you create and show dialog windows.

![dialog-confirm android](../img/gallery/android/dialogsPage_confirm.png "dialog-confirm android")![dialog-confirm ios](../img/gallery/ios/dialogsPage_confirm.png "dialog-confirm ios")

## RadListView

{% nativescript %}
The [RadListView component](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/ListView/overview) for NativeScript is a virtualizing list component that provides the most popular features associated with scenarios where a list of items is used.
{% endnativescript %}

{% angular %}
The [RadListView component](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/ListView/overview) for NativeScript is a virtualizing list component that provides the most popular features associated with scenarios where a list of items is used.
{% endangular %}

![rad-list-view android](../img/ui-for-nativescript/List_Android.png "rad-list-view android")![rad-list-view ios](../img/ui-for-nativescript/List_iOS.png "rad-list-view ios")

## SideDrawer

{% nativescript %}
The [SideDrawer](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/overview) is a component can show a hidden view that contains navigation UI or common settings.
{% endnativescript %}

{% angular %}
The [SideDrawer](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/overview) is a component can show a hidden view that contains navigation UI or common settings.
{% endangular %}


![side-drawer android](../img/ui-for-nativescript/Drawer_Android.png "side-drawer android")![side-drawer ios](../img/ui-for-nativescript/Drawer_iOS.png "side-drawer ios")


## Calendar

>This component is part of [Telerik UI for NativeScript Pro](http://docs.telerik.com/devtools/nativescript-ui/introduction).

{% nativescript %}
The [Calendar](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/Calendar/overview) for NativeScript is based on the corresponding native calendar components from the Telerik UI for iOS and Telerik UI for Android suites. It exposes a unified API covering all major features coming from the native components like:
{% endnativescript %}

{% angular %}
The [Calendar](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/Calendar/overview) for NativeScript is based on the corresponding native calendar components from the Telerik UI for iOS and Telerik UI for Android suites. It exposes a unified API covering all major features coming from the native components like:
{% endangular %}

* inline events
* different view modes
* cells customization
* selection



![calendar android](../img/ui-for-nativescript/Calendar_Android.png "calendar android")![calendar ios](../img/ui-for-nativescript/Calendar_iOS.png "calendar ios")

## Chart

>This component is part of [Telerik UI for NativeScript Pro](http://docs.telerik.com/devtools/nativescript-ui/introduction).


{% nativescript %}
The [Chart](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/Chart/overview) for NativeScript is a charting component that has been designed for the mobile environment.
{% endnativescript %}

{% angular %}
The [Chart](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/Chart/overview) for NativeScript is a charting component that has been designed for the mobile environment.
{% endangular %}

![chart android](../img/ui-for-nativescript/Chart_Android.png "chart android")![chart ios](../img/ui-for-nativescript/Chart_iOS.png "chart ios")

## DataForm

>This component is part of [Telerik UI for NativeScript Pro](http://docs.telerik.com/devtools/nativescript-ui/introduction).

{% nativescript %}
The [DataForm](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/DataForm/dataform-overview)  for NativeScript helps you edit the properties of a business object during runtime and build a mobile form fast and easy.
{% endnativescript %}

{% angular %}
The [DataForm](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/DataForm/dataform-overview)  for NativeScript helps you edit the properties of a business object during runtime and build a mobile form fast and easy.
{% endangular %}

![data-form android](../img/ui-for-nativescript/DataForm_Android.png "data-form android")![data-form ios](../img/ui-for-nativescript/DataForm_iOS.png "data-form ios")

{% nativescript %}
## Gauges

>This component is part of [Telerik UI for NativeScript Pro](http://docs.telerik.com/devtools/nativescript-ui/introduction).

The [Gauges](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/Gauges/overview)  is a highly customizable component that allows you to show the current status of a value within a range of upper and lower bounds, illustrate progress towards a goal or a summary of a fluctuating metric.

![gauges android](../img/ui-for-nativescript/Gauges_Android.png "gauges android")![gauges ios](../img/ui-for-nativescript/Gauges_iOS.png "gauges ios")

## AutoCompleteTextView

>This component is part of [Telerik UI for NativeScript Pro](http://docs.telerik.com/devtools/nativescript-ui/introduction).

The [AutoCompleteTextView](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/AutoCompleteTextView/overview) can automatically complete user input string by comparing the text being entered to all strings in the associated data source.

![auto-complete-text-view android](../img/ui-for-nativescript/AutoComplete_Android.png "auto-complete-text-view android")![auto-complete-text-view ios](../img/ui-for-nativescript/AutoComplete_iOS.png "auto-complete-text-view ios")

{% endnativescript %}