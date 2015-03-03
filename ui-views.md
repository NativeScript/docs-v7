---
nav-title: User Interface Widgets
title: "UI: Widgets"
description: Get familiar with the default user interface elements (widgets) in NativeScript.
position: 14
---

# User Interface Widgets

NativeScript ships with a set of user interface [`Views`](./ApiReference/ui/core/view/README.md) (also known as widgets) which you can use to build the user interface of a mobile application. Most of these views wrap the corresponding native view for each platform while providing a common API for working with it. For example the `Button` view renders an [`android.widget.Button`](http://developer.android.com/reference/android/widget/Button.html) on Android and [`UIButton`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) on iOS.

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
* [WebView](#webview)
* [TabView](#tabview)
* [Dialogs](#dialogs)

Defining the layout of the application is also an important part of the application development. For more information about the different layout containers that are available in NativeScript, see [The NativeScript Layout System](layouts.md).

> **TIP:** You can access the underlying native widget for each view at runtime using the following properties.
>
> * Android: `<view>.android`
> * iOS: `<view>.ios`
>
> Accessing the native widgets might be useful when you want to use some platform-specific functionalities of the widget. You can find information about the underlying native component for each view below.

## Button

This widget provides a standard button widget that reacts to a `tap` event.

![button android](http://docs.nativescript.org/img/gallery/android/buttonPage.png "button android")![button ios](http://docs.nativescript.org/img/gallery/ios/buttonPage.png "button ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Button](http://developer.android.com/reference/android/widget/Button.html) | [UIButton](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) |

## Label

This widget provides a text label that shows read-only text.

![label android](http://docs.nativescript.org/img/gallery/android/labelPage.png "label android")![label ios](http://docs.nativescript.org/img/gallery/ios/labelPage.png "label ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.TextView](http://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UILabel_Class/) |

## TextField

This widget provides an editable **single-line** text field.

![text-field android](http://docs.nativescript.org/img/gallery/android/textFieldPage.png "text-field android")![text-field ios](http://docs.nativescript.org/img/gallery/ios/textFieldPage.png "text-field ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextField](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextField_Class/) |

## TextView

This widget provides an editable **multi-line** text view. 

You can use it to show multi-line text and implement text editing.

![text-view android](http://docs.nativescript.org/img/gallery/android/textViewPage.png "text-view android")![text-view ios](http://docs.nativescript.org/img/gallery/ios/textViewPage.png "text-view ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextView_Class/) |

## SearchBar

This view provides a user interface for entering search queries and submitting requests to search provider.

![search-bar android](http://docs.nativescript.org/img/gallery/android/searchBarPage.png "search-bar android")![search-bar ios](http://docs.nativescript.org/img/gallery/ios/searchBarPage.png "search-bar ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.SearchView](http://developer.android.com/reference/android/widget/SearchView.html) | [UISearchBar](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISearchBar_Class/) |

## Switch

This widget provides a two-state toggle switch with which you can choose between two options.

![switch android](http://docs.nativescript.org/img/gallery/android/switchPage.png "switch android")![switch ios](http://docs.nativescript.org/img/gallery/ios/switchPage.png "switch ios")

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Switch](http://developer.android.com/reference/android/widget/Switch.html) | [UISwitch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISwitch_Class/) |

## Slider

This widget provides a slider which you can use to pick a numeric value within a configurable range.

![slider android](http://docs.nativescript.org/img/gallery/android/sliderPage.png "slider android")![slider ios](http://docs.nativescript.org/img/gallery/ios/sliderPage.png "slider ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.SeekBar](http://developer.android.com/reference/android/widget/SeekBar.html) | [UISlider](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISlider_Class/) |

## Progress

This widget is a visual bar indicator of a progress in a operation. Shows a bar representing the current progress of the operation.

![progress android](http://docs.nativescript.org/img/gallery/android/progressPage.png "progress android")![progress ios](http://docs.nativescript.org/img/gallery/ios/progressPage.png "progress ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = false) | [UIProgressView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIProgressView_Class/) |

## ActivityIndicator

This widget is a visual spinner indicator which shows that a task is in progress.

![activity-indicator android](http://docs.nativescript.org/img/gallery/android/activityIndicatorPage.png "activity-indicator android")![activity-indicator ios](http://docs.nativescript.org/img/gallery/ios/activityIndicatorPage.png "activity-indicator ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = true) | [UIActivityIndicatorView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIActivityIndicatorView_Class/) |

## Image

This widget shows an image. You can load the image can be from [`ImageSource`](./ApiReference/image-source/ImageSource.md) or from URL.

![image android](http://docs.nativescript.org/img/gallery/android/imagePage.png "image android")![image ios](http://docs.nativescript.org/img/gallery/ios/imagePage.png "image ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ImageView](http://developer.android.com/reference/android/widget/ImageView.html) | [UIImageView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImageView_Class/) |

## ListView

This is a view that shows items in a vertically scrolling list. You can set an [`itemTemplate`](ApiReference/ui/list-view/knownTemplates/README.md) to specify how each item in the list should be displayed.

![list-view android](http://docs.nativescript.org/img/gallery/android/listViewPage.png "list-view android")![list-view ios](http://docs.nativescript.org/img/gallery/ios/listViewPage.png "list-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ListView](http://developer.android.com/reference/android/widget/ListView.html) | [UITableView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/) |

## WebView

This is a view that shows web pages. You can load a page from URL or by navigating back and forward.

![web-view android](http://docs.nativescript.org/img/gallery/android/webViewPage.png "web-view android")![web-view ios](http://docs.nativescript.org/img/gallery/ios/webViewPage.png "web-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.webkit.WebView](http://developer.android.com/reference/android/webkit/WebView.html) | [UIWebView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/) |

## TabView

With the `TabView` control, you can implement tab navigation.

![tab-view android](http://docs.nativescript.org/img/gallery/android/tabViewPage.png "tab-view android")![tab-view ios](http://docs.nativescript.org/img/gallery/ios/tabViewPage.png "tab-view ios")

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.support.v4.view.ViewPager](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [UITabBarController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITabBarController_Class/) |

## Dialogs

The dialogs module lets you create and show dialog windows.

![dialog-confirm android](http://docs.nativescript.org/img/gallery/android/dialogsPage_confirm.png "dialog-confirm android")![dialog-confirm ios](http://docs.nativescript.org/img/gallery/ios/dialogsPage_confirm.png "dialog-confirm ios")
