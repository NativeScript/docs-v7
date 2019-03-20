---
title: Components
description: Get familiar with the default user interface elements (widgets) that are used as building blocks for the UI of a NativeScript mobile app.
position: 20
tags: user interface widgets, nativescript widgets, nativescript ui components
slug: components
publish: false
previous_url: /ui-views,/ui/ui-views
---

# User Interface Widget Components

NativeScript ships with a set of user interface [`views`](/api-reference/modules/_ui_core_view_.html) (also known as widgets) which you can use to build the user interface of a mobile application. Most of these views wrap the corresponding native view for each platform while providing a common API for working with it. For example, the `Button` view renders an [`android.widget.Button`](http://developer.android.com/reference/android/widget/Button.html) on Android and [`UIButton`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) on iOS.

Defining the layout of the application is also an important part of the application development. For more information about the different layout containers that are available in NativeScript, see [The NativeScript Layout System]({%slug layouts %}).

> **TIP:** You can access the underlying native widget for each view at runtime using the `nativeView` property:
>
>  `<view>.nativeView`
>
> Accessing the native widgets might be useful when you want to use some platform-specific functionalities of the widget. You can find information about the underlying native component for each view below.

Each component comes with a set of common methods available from the extended `View` class.
Dedicated documentation section covering the different measuring and position methods can be found [here]({%slug properties%}#view-class-common-methods).

## Button

The {% nativescript %}[Button]({%slug button%}){% endnativescript %} {% angular %}[Button]({%slug button-ng%}){% endangular %} widget provides a standard button widget that reacts to a `tap` event.

![button android](./img/gallery/android/buttonPage.png "button android")![button ios](./img/gallery/ios/buttonPage.png "button ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Button](http://developer.android.com/reference/android/widget/Button.html) | [UIButton](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) |

## Label

The {% nativescript %}[Label]({%slug label%}){% endnativescript %} {% angular %}[Label]({%slug label-ng%}){% endangular %} widget provides a text label that shows read-only text.

![label android](./img/gallery/android/labelPage.png "label android")![label ios](./img/gallery/ios/labelPage.png "label ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.TextView](http://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UILabel_Class/) |

## TextField

The {% nativescript %}[TextField]({%slug text-field%}){% endnativescript %} {% angular %}[TextField]({%slug text-field-ng%}){% endangular %} widget provides an editable **single-line** text field.

![text-field android](./img/gallery/android/textFieldPage.png "text-field android")![text-field ios](./img/gallery/ios/textFieldPage.png "text-field ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextField](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextField_Class/) |

## TextView

The {% nativescript %}[TextView]({%slug text-view%}){% endnativescript %} {% angular %}[TextView]({%slug text-view-ng%}){% endangular %} widget provides an editable **multi-line** text view.

You can use it to show multi-line text and implement text editing.

![text-view android](./img/gallery/android/textViewPage.png "text-view android")![text-view ios](./img/gallery/ios/textViewPage.png "text-view ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextView_Class/) |

## SearchBar

The {% nativescript %}[SearchBar]({%slug search-bar%}){% endnativescript %} {% angular %}[SearchBar]({%slug search-bar-ng%}){% endangular %} widget provides a user interface for entering search queries and submitting requests to the search provider.

![search-bar android](./img/gallery/android/searchBarPage.png "search-bar android")![search-bar ios](./img/gallery/ios/searchBarPage.png "search-bar ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.SearchView](http://developer.android.com/reference/android/widget/SearchView.html) | [UISearchBar](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISearchBar_Class/) |

## Switch

The {% nativescript %}[Switch]({%slug switch%}){% endnativescript %} {% angular %}[Switch]({%slug switch-ng%}){% endangular %} widget provides a two-state toggle switch from which you can choose between two options.

![switch android](./img/gallery/android/switchPage.png "switch android")![switch ios](./img/gallery/ios/switchPage.png "switch ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Switch](http://developer.android.com/reference/android/widget/Switch.html) | [UISwitch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISwitch_Class/) |

## Slider

The {% nativescript %}[Slider]({%slug slider%}){% endnativescript %} {% angular %}[Slider]({%slug slider-ng%}){% endangular %} widget provides a slider that you can use to pick a numeric value within a configurable range.

![slider android](./img/gallery/android/sliderPage.png "slider android")![slider ios](./img/gallery/ios/sliderPage.png "slider ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.SeekBar](http://developer.android.com/reference/android/widget/SeekBar.html) | [UISlider](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISlider_Class/) |

## Progress

The {% nativescript %}[Progress]({%slug progress%}){% endnativescript %} {% angular %}[Progress]({%slug progress-ng%}){% endangular %} widget is a visual bar indicator of a progress in a operation. It shows a bar representing the current progress of the operation.

![progress android](./img/gallery/android/progressPage.png "progress android")![progress ios](./img/gallery/ios/progressPage.png "progress ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = false) | [UIProgressView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIProgressView_Class/) |

## ActivityIndicator

The {% nativescript %}[ActivityIndicator]({%slug activity-indicator%}){% endnativescript %} {% angular %}[ActivityIndicator]({%slug activity-indicator-ng%}){% endangular %} widget is a visual spinner indicator which shows that a task is in progress.

![activity-indicator android](./img/gallery/android/activityIndicatorPage.png "activity-indicator android")![activity-indicator ios](./img/gallery/ios/activityIndicatorPage.png "activity-indicator ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = true) | [UIActivityIndicatorView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIActivityIndicatorView_Class/) |

## Image

The {% nativescript %}[Image]({%slug image%}){% endnativescript %} {% angular %}[Image]({%slug image-ng%}){% endangular %} widget shows an image. You can load the image from an [`ImageSource`](/api-reference/modules/_image_source_.html) or from a URL.

![image android](./img/gallery/android/imagePage.png "image android")![image ios](./img/gallery/ios/imagePage.png "image ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ImageView](http://developer.android.com/reference/android/widget/ImageView.html) | [UIImageView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImageView_Class/) |

## ListView

The {% nativescript %}[ListView]({%slug list-view%}){% endnativescript %} {% angular %}[ListView]({%slug list-view-ng%}){% endangular %} shows items in a vertically scrolling list. You can set an [`itemTemplate`](/api-reference/modules/_ui_list_view_.knowntemplates.html) to specify how each item in the list should be displayed.

![list-view android](./img/gallery/android/listViewPage.png "list-view android")![list-view ios](./img/gallery/ios/listViewPage.png "list-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ListView](http://developer.android.com/reference/android/widget/ListView.html) | [UITableView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/) |

## HtmlView

The {% nativescript %}[HtmlView]({%slug html-view%}){% endnativescript %} {% angular %}[HtmlView]({%slug html-view-ng%}){% endangular %} represents a view with HTML content. Use this component instead of WebView when you want to show just static HTML content.

![html-view android](./img/gallery/android/htmlViewPage.png "html-view android")![html-view ios](./img/gallery/ios/htmlViewPage.png "html-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TextView](http://developer.android.com/reference/android/widget/TextView.html) | [UITextView](https://developer.apple.com/documentation/uikit/uitextview) |

## WebView

The {% nativescript %}[WebView]({%slug web-view%}){% endnativescript %} {% angular %}[WebView]({%slug web-view-ng%}){% endangular %} shows web pages. You can load a page from a URL or by navigating back and forward.

![web-view android](./img/gallery/android/webViewPage.png "web-view android")![web-view ios](./img/gallery/ios/webViewPage.png "web-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.webkit.WebView](http://developer.android.com/reference/android/webkit/WebView.html) | [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) |

## TabView

With the {% nativescript %}[TabView]({%slug tab-view%}){% endnativescript %} {% angular %}[TabView]({%slug tab-view-ng%}){% endangular %} control, you can implement tab navigation.

![tab-view android](./img/gallery/android/tabViewPage.png "tab-view android")![tab-view ios](./img/gallery/ios/tabViewPage.png "tab-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.support.v4.view.ViewPager](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [UITabBarController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITabBarController_Class/) |

## SegmentedBar

With the {% nativescript %}[SegmentedBar]({%slug segmented-bar%}){% endnativescript %} {% angular %}[SegmentedBar]({%slug segmented-bar-ng%}){% endangular %} control, you can implement discrete selection.

![segmented-bar android](./img/gallery/android/segmentedBarPage.png "segmented-bar android")![segmented-bar ios](./img/gallery/ios/segmentedBarPage.png "segmented-bar ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TabHost](http://developer.android.com/reference/android/widget/TabHost.html) | [UISegmentedControl](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UISegmentedControl_Class/index.html) |

## DatePicker

With the {% nativescript %}[DatePicker]({%slug date-picker%}){% endnativescript %} {% angular %}[DatePicker]({%slug date-picker-ng%}){% endangular %} control, you can pick a date.

![date-picker android](./img/gallery/android/datePickerPage.png "date-picker android")![date-picker ios](./img/gallery/ios/datePickerPage.png "date-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.DatePicker](http://developer.android.com/reference/android/widget/DatePicker.html) | [UIDatePicker](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) |

## TimePicker

With the {% nativescript %}[TimePicker]({%slug time-picker%}){% endnativescript %} {% angular %}[TimePicker]({%slug time-picker-ng%}){% endangular %} widget, you can pick a time.

![time-picker android](./img/gallery/android/timePickerPage.png "time-picker android")![time-picker ios](./img/gallery/ios/timePickerPage.png "time-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TimePicker](http://developer.android.com/reference/android/widget/TimePicker.html) | [UIDatePicker](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) |

## ListPicker

With the {% nativescript %}[ListPicker]({%slug list-picker%}){% endnativescript %} {% angular %}[ListPicker]({%slug list-picker-ng%}){% endangular %} widget, you can pick a value from a list.

![list-picker android](./img/gallery/android/listPickerPage.png "list-picker android")![list-picker ios](./img/gallery/ios/listPickerPage.png "list-picker ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.NumberPicker](http://developer.android.com/reference/android/widget/NumberPicker.html) | [UIPickerView](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIPickerView_Class/index.html) |

## Dialogs

The {% nativescript %}[dialogs module]({%slug dialogs %}){% endnativescript %} {% angular %}[dialogs module]({%slug dialogs-ng%}){% endangular %} lets you create and show dialog windows.

![dialog-confirm android](./img/gallery/android/dialogsPage_confirm.png "dialog-confirm android")![dialog-confirm ios](./img/gallery/ios/dialogsPage_confirm.png "dialog-confirm ios")

