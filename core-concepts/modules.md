---
title: Modules
description: You can access the native device and platform capabilities of your target platform with the help of the NativeScript modules.
position: 3
slug: modules
previous_url: /modules
---

# Modules

To let you access the native device and platform capabilities of your target platform, NativeScript uses a modular design pattern. All device, platform or user interface functionalities reside in separate modules. To access the functionality provided by a module, you need to **require** the module.

In your project, the files for each module reside in a dedicated subdirectory in the `tns_modules` directory. Each default module comes along with a `package.json` file that declares how the module should be called within your call and which file contains its respective code.

```JSON
{ "name" : "button",
  "main" : "button.js" }
``` 

* [Core modules](#core-modules)
* [Device functionality modules](#device-functionality-modules)
* [Data modules](#data-modules)
* [User interface modules](#user-interface-modules)
	* [Layouts](#layouts)
	* [Widgets](#widgets)
* [WHATWG polyfills](#whatwg-polyfills)
* 
### Core modules

+ [application]({{site.baseurl}}/cookbook/application): Provides the application abstraction with all related methods.
+ [console]({{site.baseurl}}/cookbook/console): Lets you print messages to the device console.
+ [application-settings]({{site.baseurl}}/cookbook/application-settings): Lets you save and restore any information related to your application.
+ [http]({{site.baseurl}}/cookbook/http): Lets you send web requests and receive the responses.
+ [image-source]({{site.baseurl}}/cookbook/image-source): Provides the `ImageSource` class which encapsulates the common abstraction behind a platform-specific object that is used as a source for images (typically a Bitmap).
+ [timer]({{site.baseurl}}/cookbook/timer): Lets you to create, start, stop and react to timers.
+ [trace]({{site.baseurl}}/cookbook/trace): Lets you trace and print specific information based on categories.
+ [ui/image-cache]({{site.baseurl}}/cookbook/ui/image-cache): Provides the `Cache` class which handles image download requests and caches the already downloaded images.
+ [connectivity]({{site.baseurl}}/cookbook/connectivity): Lets you check the type of Internet connection and monitor its state changes.

### Device functionality modules

+ [camera]({{site.baseurl}}/cookbook/camera): Lets you take pictures with the device camera.
+ [location]({{site.baseurl}}/cookbook/location): Lets you use the geolocation sensors of the device.
+ [platform]({{site.baseurl}}/cookbook/platform): Provides information about the device, its operating system and software.
+ [fps-meter]({{site.baseurl}}/cookbook/fps-meter): Lets you capture the frames-per-second metrics of your application.
+ [file-system]({{site.baseurl}}/cookbook/file-system): Lets you work with the device file system. Provides high-level abstractions for file system entities such as files, folders, known folders, paths, separators, etc.
+ [ui/gestures]({{site.baseurl}}/cookbook/ui/gestures): Provides the `GesturesObserver` class which lets you observe and respond to user gestures.

### Data modules

+ [data/observable]({{site.baseurl}}/cookbook/data/observable): Provides the `Observable` class which represents an observable object or data in the MVVM paradigm.
+ [data/observable-array]({{site.baseurl}}/cookbook/data/observable-array): Provides the `ObservableArray` class which detects and responds to changes in a collection of objects.
+ [data/virtual-array]({{site.baseurl}}/cookbook/data/virtual-array): Provides the `VirtualArray` class which is an advanced array-like class that helps loading items on demand.

### User interface modules

+ [ui/frame]({{site.baseurl}}/cookbook/ui/frame): Provides the `Frame` class which represents the logical `View` unit that is responsible for navigation within an application.
+ [ui/page]({{site.baseurl}}/cookbook/ui/page): Provides the `Page` class which represents a logical unit for navigation inside a `Frame`. NativeScript apps consist of pages.
+ [color]({{site.baseurl}}/cookbook/color): Lets you create colors which you can use when you style the UI.
+ [text/formatted-string]({{site.baseurl}}/cookbook/formatted-string): Provides the `FormattedString` and `Span` classes which you can use to create rich text formatted strings.
+ [xml]({{site.baseurl}}/cookbook/xml): Provides the `XmlParser` class which is a SAX parser using the easysax implementation.
+ [ui/styling]({{site.baseurl}}/cookbook/ui/styling): Provides the `Style` class which is responsible for the visual appearance of elements.
+ [ui/animation]({{site.baseurl}}/cookbook/ui/animation): Provides the `Animation` class which lets you animate view properties.


#### Layouts

+ [ui/layouts/stack-layout]({{site.baseurl}}/cookbook/ui/layouts/stack-layout): Provides the `StackLayout` class which lets you arrange the children of the layout in a single line.
+ [ui/layouts/grid-layout]({{site.baseurl}}/cookbook/ui/layouts/grid-layout): Provides the `GridLayout` class which lets you arrange the children of the layout in a flexible grid area with columns and rows.
+ [ui/layouts/absolute-layout]({{site.baseurl}}/cookbook/ui/layouts/absolute-layout): Provides the `AbsoluteLayout` class which lets you arrange the children of the layout at arbitrary positions or draw them in multiple layers.
+ [ui/layouts/wrap-layout]({{site.baseurl}}/cookbook/ui/layouts/wrap-layout): Provides the `WrapLayout` class which lets you arrange the children of the layout at sequential positions from left to right and then wrap the lines of children from top to bottom.

#### Widgets

+ [ui/activity-indicator]({{site.baseurl}}/cookbook/ui/activity-indicator): Provides the `ActivityIndicator` class which represents a widget for showing that a service is currently busy.
+ [ui/button]({{site.baseurl}}/cookbook/ui/button): Provides the `Button` class which is a standard button widget.
+ [ui/label]({{site.baseurl}}/cookbook/ui/label): Provides the `Label` class which is a standard label widget.
+ [ui/text-field]({{site.baseurl}}/cookbook/ui/text-field): Provides the `TextField` class which represents an editable single-line box.
+ [ui/text-view]({{site.baseurl}}/cookbook/ui/text-view): Provides the `TextView` class which represents an editable multi-line line box.
+ [ui/list-view]({{site.baseurl}}/cookbook/ui/list-view): Provides the `ListView` class which represents a standard list view widget.
+ [ui/image]({{site.baseurl}}/cookbook/ui/image): Provides the `Image` class which represents an image widget.
+ [ui/progress]({{site.baseurl}}/cookbook/ui/progress): Provides the `Progress` class which represents a progress or loading indicator.
+ [ui/scroll-view]({{site.baseurl}}/cookbook/ui/scroll-view): Provides the `ScrollView` class which represents a scrollable area that can show content which is larger than the visible area.
+ [ui/search-bar]({{site.baseurl}}/cookbook/ui/search-bar): Provides the `SearchBar` class which represents a standard search bar component.
+ [ui/slider]({{site.baseurl}}/cookbook/ui/slider): Provides the `Slider` class which represents a standard slider component.
+ [ui/switch]({{site.baseurl}}/cookbook/ui/switch): Provides the `Switch` class which represents a standard switch component.
+ [ui/tab-view]({{site.baseurl}}/cookbook/ui/tab-view): Provides the `TabView` class which represents a standard content component with tabs.
+ [ui/web-view]({{site.baseurl}}/cookbook/ui/web-view): Provides the `WebView` class which represents a standard browser widget.
+ [ui/html-view]({{site.baseurl}}/cookbook/ui/html-view): Provides the `HtmlView` class which represents a standard html view widget.
+ [ui/dialogs]({{site.baseurl}}/cookbook/ui/dialogs): Lets you show various dialogs such as alerts, prompts, confirmations and others.
+ [ui/list-picker]({{site.baseurl}}/cookbook/ui/list-picker): Provides the `ListPicker` class which represents a standard list picker component.
+ [ui/date-picker]({{site.baseurl}}/cookbook/ui/date-picker): Provides the `DatePicker` class which represents a standard date picker component.
+ [ui/time-picker]({{site.baseurl}}/cookbook/ui/time-picker): Provides the `TimePicker` class which represents a standard time picker component.
+ [ui/placeholder]({%slug placeholder %}): Provides the `Placeholder` class which lets you add a native widget to the visual tree.

### WHATWG Polyfills

+ [fetch]({{site.baseurl}}/cookbook/fetch): The `Fetch` polyfill that provides requests, responses, and the process that binds them: fetching. https://fetch.spec.whatwg.org/
