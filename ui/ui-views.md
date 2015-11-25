---
title: Components
description: Get familiar with the default user interface elements (widgets) in NativeScript.
position: 2
slug: components
previous_url: /ui-views
---

# User Interface Widgets

NativeScript ships with a set of user interface [`Views`](http://docs.nativescript.org/ApiReference/ui/core/view/README.md) (also known as widgets) which you can use to build the user interface of a mobile application. Most of these views wrap the corresponding native view for each platform while providing a common API for working with it. For example the `Button` view renders an [`android.widget.Button`](http://developer.android.com/reference/android/widget/Button.html) on Android and [`UIButton`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) on iOS.

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

> **TIP:** You can access the underlying native widget for each view at runtime using the following properties.
>
> * Android: `<view>.android`
> * iOS: `<view>.ios`
>
> Accessing the native widgets might be useful when you want to use some platform-specific functionalities of the widget. You can find information about the underlying native component for each view below.

## Button

The [Button](http://docs.nativescript.org/ApiReference/ui/button/how-to.md) widget provides a standard button widget that reacts to a `tap` event.

![button android](http://docs.nativescript.org/img/gallery/android/buttonPage.png "button android")![button ios](http://docs.nativescript.org/img/gallery/ios/buttonPage.png "button ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Button](http://developer.android.com/reference/android/widget/Button.html) | [UIButton](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) |

## Label

The [Label](http://docs.nativescript.org/ApiReference/ui/label/how-to.md) widget provides a text label that shows read-only text.

![label android](http://docs.nativescript.org/img/gallery/android/labelPage.png "label android")![label ios](http://docs.nativescript.org/img/gallery/ios/labelPage.png "label ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.TextView](http://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UILabel_Class/) |

## TextField

The [TextField](http://docs.nativescript.org/ApiReference/ui/text-field/how-to.md) widget provides an editable **single-line** text field.

![text-field android](http://docs.nativescript.org/img/gallery/android/textFieldPage.png "text-field android")![text-field ios](http://docs.nativescript.org/img/gallery/ios/textFieldPage.png "text-field ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextField](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextField_Class/) |

## TextView

The [TextView](http://docs.nativescript.org/ApiReference/ui/text-view/how-to.md) widget provides an editable **multi-line** text view. 

You can use it to show multi-line text and implement text editing.

![text-view android](http://docs.nativescript.org/img/gallery/android/textViewPage.png "text-view android")![text-view ios](http://docs.nativescript.org/img/gallery/ios/textViewPage.png "text-view ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextView_Class/) |

## SearchBar

The [SearchBar](http://docs.nativescript.org/ApiReference/ui/search-bar/how-to.md) widget provides a user interface for entering search queries and submitting requests to search provider.

![search-bar android](http://docs.nativescript.org/img/gallery/android/searchBarPage.png "search-bar android")![search-bar ios](http://docs.nativescript.org/img/gallery/ios/searchBarPage.png "search-bar ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.SearchView](http://developer.android.com/reference/android/widget/SearchView.html) | [UISearchBar](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISearchBar_Class/) |

## Switch

The [Switch](http://docs.nativescript.org/ApiReference/ui/switch/how-to.md) widget provides a two-state toggle switch with which you can choose between two options.

![switch android](http://docs.nativescript.org/img/gallery/android/switchPage.png "switch android")![switch ios](http://docs.nativescript.org/img/gallery/ios/switchPage.png "switch ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Switch](http://developer.android.com/reference/android/widget/Switch.html) | [UISwitch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISwitch_Class/) |

## Slider

The [Slider](http://docs.nativescript.org/ApiReference/ui/slider/how-to.md) widget provides a slider which you can use to pick a numeric value within a configurable range.

![slider android](http://docs.nativescript.org/img/gallery/android/sliderPage.png "slider android")![slider ios](http://docs.nativescript.org/img/gallery/ios/sliderPage.png "slider ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.SeekBar](http://developer.android.com/reference/android/widget/SeekBar.html) | [UISlider](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISlider_Class/) |

## Progress

The [Progress](http://docs.nativescript.org/ApiReference/ui/progress/how-to.md) widget is a visual bar indicator of a progress in a operation. Shows a bar representing the current progress of the operation.

![progress android](http://docs.nativescript.org/img/gallery/android/progressPage.png "progress android")![progress ios](http://docs.nativescript.org/img/gallery/ios/progressPage.png "progress ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = false) | [UIProgressView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIProgressView_Class/) |

## ActivityIndicator

The [ActivityIndicator](http://docs.nativescript.org/ApiReference/ui/activity-indicator/how-to.md) widget is a visual spinner indicator which shows that a task is in progress.

![activity-indicator android](http://docs.nativescript.org/img/gallery/android/activityIndicatorPage.png "activity-indicator android")![activity-indicator ios](http://docs.nativescript.org/img/gallery/ios/activityIndicatorPage.png "activity-indicator ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = true) | [UIActivityIndicatorView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIActivityIndicatorView_Class/) |

## Image

The [Image](http://docs.nativescript.org/ApiReference/ui/image/how-to.md) widget shows an image. You can load the image can be from [`ImageSource`](http://docs.nativescript.org/ApiReference/image-source/ImageSource.md) or from URL.

![image android](http://docs.nativescript.org/img/gallery/android/imagePage.png "image android")![image ios](http://docs.nativescript.org/img/gallery/ios/imagePage.png "image ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ImageView](http://developer.android.com/reference/android/widget/ImageView.html) | [UIImageView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImageView_Class/) |

## ListView

The [ListView](http://docs.nativescript.org/ApiReference/ui/list-view/how-to.md) shows items in a vertically scrolling list. You can set an [`itemTemplate`]http://docs.nativescript.org/(ApiReference/ui/list-view/knownTemplates/README.md) to specify how each item in the list should be displayed.

![list-view android](http://docs.nativescript.org/img/gallery/android/listViewPage.png "list-view android")![list-view ios](http://docs.nativescript.org/img/gallery/ios/listViewPage.png "list-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ListView](http://developer.android.com/reference/android/widget/ListView.html) | [UITableView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/) |

## HtmlView

The [HtmlView](http://docs.nativescript.org/ApiReference/ui/html-view/how-to.md) represents a view with html content. Use this component instead WebView when you want to show just static HTML content.

![html-view android](https://docs.nativescript.org/img/gallery/android/htmlViewPage.png "html-view android")![html-view ios](http://docs.nativescript.org/img/gallery/ios/htmlViewPage.png "html-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TextView](http://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UILabel_Class/) |

## WebView

The [WebView](http://docs.nativescript.org/ApiReference/ui/web-view/how-to.md) shows web pages. You can load a page from URL or by navigating back and forward.

![web-view android](http://docs.nativescript.org/img/gallery/android/webViewPage.png "web-view android")![web-view ios](http://docs.nativescript.org/img/gallery/ios/webViewPage.png "web-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.webkit.WebView](http://developer.android.com/reference/android/webkit/WebView.html) | [UIWebView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/) |

## TabView

With the [TabView](http://docs.nativescript.org/ApiReference/ui/tab-view/how-to.md) control, you can implement tab navigation.

![tab-view android](http://docs.nativescript.org/img/gallery/android/tabViewPage.png "tab-view android")![tab-view ios](http://docs.nativescript.org/img/gallery/ios/tabViewPage.png "tab-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.support.v4.view.ViewPager](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [UITabBarController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITabBarController_Class/) |

## SegmentedBar

With the [SegmentedBar](http://docs.nativescript.org/ApiReference/ui/segmented-bar/how-to.md) control, you can implement discrete selection.

![segmented-bar android](http://docs.nativescript.org/img/gallery/android/segmentedBarPage.png "segmented-bar android")![segmented-bar ios](http://docs.nativescript.org/img/gallery/ios/segmentedBarPage.png "segmented-bar ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TabHost](http://developer.android.com/reference/android/widget/TabHost.html) | [UISegmentedControl](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UISegmentedControl_Class/index.html) |

## DatePicker

With the [DatePicker](http://docs.nativescript.org/ApiReference/ui/date-picker/how-to.md) control, you can pick date.

![date-picker android](http://docs.nativescript.org/img/gallery/android/datePickerPage.png "date-picker android")![date-picker ios](http://docs.nativescript.org/img/gallery/ios/datePickerPage.png "date-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.DatePicker](http://developer.android.com/reference/android/widget/DatePicker.html) | [UIDatePicker](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) |

## TimePicker

With the [TimePicker](http://docs.nativescript.org/ApiReference/ui/time-picker/how-to.md) widget, you can pick time.

![time-picker android](http://docs.nativescript.org/img/gallery/android/timePickerPage.png "time-picker android")![time-picker ios](http://docs.nativescript.org/img/gallery/ios/timePickerPage.png "time-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TimePicker](http://developer.android.com/reference/android/widget/TimePicker.html) | [UIDatePicker](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) |

## ListPicker

With the [ListPicker](http://docs.nativescript.org/ApiReference/ui/list-picker/how-to.md) widget, you can pick value from a list.

![list-picker android](http://docs.nativescript.org/img/gallery/android/listPickerPage.png "list-picker android")![list-picker ios](http://docs.nativescript.org/img/gallery/ios/listPickerPage.png "list-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.NumberPicker](http://developer.android.com/reference/android/widget/NumberPicker.html) | [UIPickerView](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIPickerView_Class/index.html) |

## Dialogs

The [dialogs module]({%slug dialogs %}) lets you create and show dialog windows.

![dialog-confirm android](http://docs.nativescript.org/img/gallery/android/dialogsPage_confirm.png "dialog-confirm android")![dialog-confirm ios](http://docs.nativescript.org/img/gallery/ios/dialogsPage_confirm.png "dialog-confirm ios")
