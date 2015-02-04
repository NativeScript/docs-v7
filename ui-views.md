---
nav-title: "UI Views"
title: "UI Views"
description: "UI Views"
position: 8
---

NativeScript ships with set of UI Views which can be used for building the UI of a mobile application. Most of these views wrap the corresponding native view for each platform, while providing a common API for working with them. For example the `Button` view renders an `android.widget.Button` on Android and `UIButton` on iOS. 

In this topic we will to go trough the following views available in NativeScript platform:

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

Defining the layout of the application is also an important part of the application development. You can refer to the [ layouts article ](layouts.md) for more information about the different layout containers that are available in NativeScript.

**Note**: The underlying native widget for each view can be accessed runtime using the following properties:

* Andoird - `<view>.android`
* iOS -  `<view>.ios`

Accessing the native widgets can be useful when you want to use some platform specific functionalities of the widget. You can find information about the underlying native component for each view at the end of its section.

##Button
A standard Button widget that reacts to a 'tap' event.

![button android](img/gallery/android/buttonPage.png "button android")![button ios](img/gallery/ios/buttonPage.png "button ios")

Native component:

| Android               | iOS      |
|:----------------------|:---------|
| android.widget.Button | UIButton |

##Label
A text label used for displaying read-only text.

![label android](img/gallery/android/labelPage.png "label android")![label ios](img/gallery/ios/labelPage.png "label ios")

Native component:

| Android               | iOS      |
|:----------------------|:---------|
| android.widget.TextView | UILabel |

##TextField
An editable **single-line** text field.

![text-field android](img/gallery/android/textFieldPage.png "text-field android")![text-field ios](img/gallery/ios/textFieldPage.png "text-field ios")

Native component:

| Android               | iOS      |
|:----------------------|:---------|
| android.widget.EditText | UITextField |

##TextView
An editable **multi-line** text view. It is typically used multi-lines text content and also supports text editing.

![text-view android](img/gallery/android/textViewPage.png "text-view android")![text-view ios](img/gallery/ios/textViewPage.png "text-view ios")

Native component:

| Android               | iOS      |
|:----------------------|:---------|
| android.widget.EditText | UITextView |

##SearchBar
A view that provides a user interface for the user to enter a search query and submit a request to a search provider.

![search-bar android](img/gallery/android/searchBarPage.png "search-bar android")![search-bar ios](img/gallery/ios/searchBarPage.png "search-bar ios")

Native component:

| Android               | iOS      |
|:----------------------|:---------|
| android.widget.SearchView | UISearchBar |

##Switch
The Switch view is a two-state toggle switch widget that can select between two options. 

![switch android](img/gallery/android/switchPage.png "switch android")![switch ios](img/gallery/ios/switchPage.png "switch ios")

Native component:

| Android               | iOS      |
|:----------------------|:---------|
| android.widget.Switch | UISwitch |

##Slider
Represents as slider component the can be used to pick a numeric value between a configurable range.

![slider android](img/gallery/android/sliderPage.png "slider android")![slider ios](img/gallery/ios/sliderPage.png "slider ios")

Native component:

| Android                | iOS      |
|:-----------------------|:---------|
| android.widget.SeekBar | UISlider |

##Progress
A visual indicator of a progress in some operation. Displays a bar representing how far the operation has progressed and the amount of progress can be changed by the application logic.

![progress android](img/gallery/android/progressPage.png "progress android")![progress ios](img/gallery/ios/progressPage.png "progress ios")

Native component:

| Android                | iOS      |
|:-----------------------|:---------|
| android.widget.ProgressBar (indeterminate = false) | UIProgressView |

##ActivityIndicator
A visual indicator(a.k.a. spinner) showing that a task is in progress.

![activity-indicator android](img/gallery/android/activityIndicatorPage.png "activity-indicator android")![activity-indicator ios](img/gallery/ios/activityIndicatorPage.png "activity-indicator ios")

Native component:

| Android                | iOS      |
|:-----------------------|:---------|
| android.widget.ProgressBar (indeterminate = true) | UIActivityIndicatorView |

##Image
A view used for displaying an image. The image can be loaded either form [ImageSource]() or form url.

![image android](img/gallery/android/imagePage.png "image android")![image ios](img/gallery/ios/imagePage.png "image ios")

Native component:

| Android                | iOS      |
|:-----------------------|:---------|
| android.widget.ImageView | UIImageView |

##ListView
A view that shows items in a vertically scrolling list. An itemTemplate can be set on the ListView to specify how each item in the list should be displayed.

![list-view android](img/gallery/android/listViewPage.png "list-view android")![list-view ios](img/gallery/ios/listViewPage.png "list-view ios")

Native component:

| Android                | iOS      |
|:-----------------------|:---------|
| android.widget.ListView | UITableView |

##WebView
A View that displays web pages. It supports loading pages from URL and navigating back and forward.

![web-view android](img/gallery/android/webViewPage.png "web-view android")![web-view ios](img/gallery/ios/webViewPage.png "web-view ios")

Native component:

| Android                | iOS      |
|:-----------------------|:---------|
| android.webkit.WebView | UIWebView |

##TabView
The TabView control is used for implementing tab navigation.

![tab-view android](img/gallery/android/tabViewPage.png "tab-view android")![tab-view ios](img/gallery/ios/tabViewPage.png "tab-view ios")

Native component:

| Android                | iOS      |
|:-----------------------|:---------|
| android.support.v4.view.ViewPager | UITabBarController |

##Dialogs
The dialogs module contains function for displaying dialog windows. 

![dialog-confirm android](img/gallery/android/dialogsPage_confirm.png "dialog-confirm android")![dialog-confirm ios](img/gallery/ios/dialogsPage_confirm.png "dialog-confirm ios")

