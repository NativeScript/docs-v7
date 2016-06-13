---
title: Components
description: Get familiar with the default user interface elements (widgets) in NativeScript.
position: 2
slug: components
previous_url: /ui-views
---

# User Interface Widgets

NativeScript ships with a set of user interface [`views`](/ApiReference/ui/core/view/README.md) (also known as widgets) which you can use to build the user interface of a mobile application. Most of these views wrap the corresponding native view for each platform while providing a common API for working with it. For example, the `Button` view renders an [`android.widget.Button`](http://developer.android.com/reference/android/widget/Button.html) on Android and [`UIButton`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) on iOS.

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

Defining the layout of the application is also an important part of the application development. For more information about the different layout containers that are available in NativeScript, see [The NativeScript Layout System]({%slug layouts %}).

> **TIP:** You can access the underlying native widget for each view at runtime using the following properties:
>
> * Android: `<view>.android`
> * iOS: `<view>.ios`
>
> Accessing the native widgets might be useful when you want to use some platform-specific functionalities of the widget. You can find information about the underlying native component for each view below.

## Button

The [Button](/cookbook/ui/button) widget provides a standard button widget that reacts to a `tap` event.

![button android](../img/gallery/android/buttonPage.png "button android")![button ios](../img/gallery/ios/buttonPage.png "button ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Button](http://developer.android.com/reference/android/widget/Button.html) | [UIButton](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) |

## Label

The [Label](/cookbook/ui/label) widget provides a text label that shows read-only text.

![label android](../img/gallery/android/labelPage.png "label android")![label ios](../img/gallery/ios/labelPage.png "label ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.TextView](http://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UILabel_Class/) |

## TextField

The [TextField](/cookbook/ui/text-field) widget provides an editable **single-line** text field.

![text-field android](../img/gallery/android/textFieldPage.png "text-field android")![text-field ios](../img/gallery/ios/textFieldPage.png "text-field ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextField](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextField_Class/) |

## TextView

The [TextView](/cookbook/ui/text-view) widget provides an editable **multi-line** text view. 

You can use it to show multi-line text and implement text editing.

![text-view android](../img/gallery/android/textViewPage.png "text-view android")![text-view ios](../img/gallery/ios/textViewPage.png "text-view ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextView_Class/) |

## SearchBar

The [SearchBar](/cookbook/ui/search-bar) widget provides a user interface for entering search queries and submitting requests to the search provider.

![search-bar android](../img/gallery/android/searchBarPage.png "search-bar android")![search-bar ios](../img/gallery/ios/searchBarPage.png "search-bar ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.SearchView](http://developer.android.com/reference/android/widget/SearchView.html) | [UISearchBar](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISearchBar_Class/) |

## Switch

The [Switch](/cookbook/ui/switch) widget provides a two-state toggle switch from which you can choose between two options.

![switch android](../img/gallery/android/switchPage.png "switch android")![switch ios](../img/gallery/ios/switchPage.png "switch ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Switch](http://developer.android.com/reference/android/widget/Switch.html) | [UISwitch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISwitch_Class/) |

## Slider

The [Slider](/cookbook/ui/slider) widget provides a slider that you can use to pick a numeric value within a configurable range.

![slider android](../img/gallery/android/sliderPage.png "slider android")![slider ios](../img/gallery/ios/sliderPage.png "slider ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.SeekBar](http://developer.android.com/reference/android/widget/SeekBar.html) | [UISlider](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISlider_Class/) |

## Progress

The [Progress](/cookbook/ui/progress) widget is a visual bar indicator of a progress in a operation. It shows a bar representing the current progress of the operation.

![progress android](../img/gallery/android/progressPage.png "progress android")![progress ios](../img/gallery/ios/progressPage.png "progress ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = false) | [UIProgressView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIProgressView_Class/) |

## ActivityIndicator

The [ActivityIndicator](/cookbook/ui/activity-indicator) widget is a visual spinner indicator which shows that a task is in progress.

![activity-indicator android](../img/gallery/android/activityIndicatorPage.png "activity-indicator android")![activity-indicator ios](../img/gallery/ios/activityIndicatorPage.png "activity-indicator ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = true) | [UIActivityIndicatorView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIActivityIndicatorView_Class/) |

## Image

The [Image](/cookbook/ui/image) widget shows an image. You can load the image from an [`ImageSource`](/ApiReference/image-source/ImageSource.md) or from a URL.

![image android](../img/gallery/android/imagePage.png "image android")![image ios](../img/gallery/ios/imagePage.png "image ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ImageView](http://developer.android.com/reference/android/widget/ImageView.html) | [UIImageView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImageView_Class/) |

## ListView

The [ListView](/cookbook/ui/list-view) shows items in a vertically scrolling list. You can set an [`itemTemplate`]/(ApiReference/ui/list-view/knownTemplates/README.md) to specify how each item in the list should be displayed.

![list-view android](../img/gallery/android/listViewPage.png "list-view android")![list-view ios](../img/gallery/ios/listViewPage.png "list-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ListView](http://developer.android.com/reference/android/widget/ListView.html) | [UITableView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/) |

## HtmlView

The [HtmlView](/cookbook/ui/html-view) represents a view with HTML content. Use this component instead of WebView when you want to show just static HTML content.

![html-view android](../img/gallery/android/htmlViewPage.png "html-view android")![html-view ios](../img/gallery/ios/htmlViewPage.png "html-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TextView](http://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UILabel_Class/) |

## WebView

The [WebView](/cookbook/ui/web-view) shows web pages. You can load a page from a URL or by navigating back and forward.

![web-view android](../img/gallery/android/webViewPage.png "web-view android")![web-view ios](../img/gallery/ios/webViewPage.png "web-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.webkit.WebView](http://developer.android.com/reference/android/webkit/WebView.html) | [UIWebView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/) |

## TabView

With the [TabView](/cookbook/ui/tab-view) control, you can implement tab navigation.

![tab-view android](../img/gallery/android/tabViewPage.png "tab-view android")![tab-view ios](../img/gallery/ios/tabViewPage.png "tab-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.support.v4.view.ViewPager](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [UITabBarController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITabBarController_Class/) |

## SegmentedBar

With the [SegmentedBar](/cookbook/ui/segmented-bar) control, you can implement discrete selection.

![segmented-bar android](../img/gallery/android/segmentedBarPage.png "segmented-bar android")![segmented-bar ios](../img/gallery/ios/segmentedBarPage.png "segmented-bar ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TabHost](http://developer.android.com/reference/android/widget/TabHost.html) | [UISegmentedControl](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UISegmentedControl_Class/index.html) |

## DatePicker

With the [DatePicker](/cookbook/ui/date-picker) control, you can pick a date.

![date-picker android](../img/gallery/android/datePickerPage.png "date-picker android")![date-picker ios](../img/gallery/ios/datePickerPage.png "date-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.DatePicker](http://developer.android.com/reference/android/widget/DatePicker.html) | [UIDatePicker](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) |

## TimePicker

With the [TimePicker](/cookbook/ui/time-picker) widget, you can pick a time.

![time-picker android](../img/gallery/android/timePickerPage.png "time-picker android")![time-picker ios](../img/gallery/ios/timePickerPage.png "time-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TimePicker](http://developer.android.com/reference/android/widget/TimePicker.html) | [UIDatePicker](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) |

## ListPicker

With the [ListPicker](/cookbook/ui/list-picker) widget, you can pick a value from a list.

![list-picker android](../img/gallery/android/listPickerPage.png "list-picker android")![list-picker ios](../img/gallery/ios/listPickerPage.png "list-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.NumberPicker](http://developer.android.com/reference/android/widget/NumberPicker.html) | [UIPickerView](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIPickerView_Class/index.html) |

## Dialogs

The [dialogs module]({%slug dialogs %}) lets you create and show dialog windows.

![dialog-confirm android](../img/gallery/android/dialogsPage_confirm.png "dialog-confirm android")![dialog-confirm ios](../img/gallery/ios/dialogsPage_confirm.png "dialog-confirm ios")
