---
title: Modules
description: You can access the native device and platform capabilities of your target platform with the help of the NativeScript modules.
position: 50
slug: modules
previous_url: /modules
---

# Modules

![NativeScript Core Modules diagram](../img/ns-modules.png)

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

+ [application]({%ns_cookbook application%}): Provides the application abstraction with all related methods.
+ [console]({%ns_cookbook console%}): Lets you print messages to the device console.
+ [application-settings]({%ns_cookbook application-settings%}): Lets you save and restore any information related to your application.
+ [http]({%ns_cookbook http%}): Lets you send web requests and receive the responses.
+ [image-source]({%ns_cookbook image-source%}): Provides the `ImageSource` class which encapsulates the common abstraction behind a platform-specific object that is used as a source for images (typically a Bitmap).
+ [timer]({%ns_cookbook timer%}): Lets you create, start, stop and react to timers.
+ [trace]({%ns_cookbook trace%}): Lets you trace and print specific information based on categories.
+ [ui/image-cache]({%ns_cookbook ui/image-cache%}): Provides the `Cache` class which handles image download requests and caches the already downloaded images.
+ [connectivity]({%ns_cookbook connectivity%}): Lets you check the type of Internet connection and monitor its state changes.

### Device functionality modules

+ [platform]({%ns_cookbook platform%}): Provides information about the device, its operating system and software.
+ [fps-meter]({%ns_cookbook fps-meter%}): Lets you capture the frames-per-second metrics of your application.
+ [file-system]({%ns_cookbook file-system%}): Lets you work with the device file system. Provides high-level abstractions for file system entities such as files, folders, known folders, paths, separators, etc.
+ [ui/gestures]({%ns_cookbook ui/gestures%}): Provides the `GesturesObserver` class which lets you observe and respond to user gestures.

### Data modules

+ [data/observable]({%ns_cookbook data/observable%}): Provides the `Observable` class which represents an observable object or data in the MVVM paradigm.
+ [data/observable-array]({%ns_cookbook data/observable-array%}): Provides the `ObservableArray` class which detects and responds to changes in a collection of objects.
+ [data/virtual-array]({%ns_cookbook data/virtual-array%}): Provides the `VirtualArray` class which is an advanced array-like class that helps loading items on demand.

### User interface modules

+ [ui/frame]({%ns_cookbook ui/frame%}): Provides the `Frame` class which represents the logical `View` unit that is responsible for navigation within an application.
+ [ui/page]({%ns_cookbook ui/page%}): Provides the `Page` class which represents a logical unit for navigation inside a `Frame`. NativeScript apps consist of pages.
+ [color]({%ns_cookbook color%}): Lets you create colors which you can use when you style the UI.
+ [text/formatted-string]({%ns_cookbook formatted-string%}): Provides the `FormattedString` and `Span` classes which you can use to create rich text formatted strings.
+ [xml]({%ns_cookbook xml-parser%}): Provides the `XmlParser` class which is a SAX parser using the easysax implementation.
+ [ui/styling]({%ns_cookbook ui/styling%}): Provides the `Style` class which is responsible for the visual appearance of elements.
+ [ui/animation]({%ns_cookbook ui/animation%}): Provides the `Animation` class which lets you animate view properties.


#### Layouts

+ [ui/layouts/stack-layout]({%ns_cookbook ui/layouts/stack-layout%}): Provides the `StackLayout` class which lets you arrange the children of the layout in a single line.
+ [ui/layouts/grid-layout]({%ns_cookbook ui/layouts/grid-layout%}): Provides the `GridLayout` class which lets you arrange the children of the layout in a flexible grid area with columns and rows.
+ [ui/layouts/absolute-layout]({%ns_cookbook ui/layouts/absolute-layout%}): Provides the `AbsoluteLayout` class which lets you arrange the children of the layout at arbitrary positions or draw them in multiple layers.
+ [ui/layouts/wrap-layout]({%ns_cookbook ui/layouts/wrap-layout%}): Provides the `WrapLayout` class which lets you arrange the children of the layout at sequential positions from left to right and then wrap the lines of children from top to bottom.

#### Widgets

+ [ui/activity-indicator]({%ns_cookbook ui/activity-indicator%}): Provides the `ActivityIndicator` class which represents a widget for showing that a service is currently busy.
+ [ui/button]({%ns_cookbook ui/button%}): Provides the `Button` class which is a standard button widget.
+ [ui/label]({%ns_cookbook ui/label%}): Provides the `Label` class which is a standard label widget.
+ [ui/text-field]({%ns_cookbook ui/text-field%}): Provides the `TextField` class which represents an editable single-line box.
+ [ui/text-view]({%ns_cookbook ui/text-view%}): Provides the `TextView` class which represents an editable multi-line line box.
+ [ui/list-view]({%ns_cookbook ui/list-view%}): Provides the `ListView` class which represents a standard list view widget.
+ [ui/image]({%ns_cookbook ui/image%}): Provides the `Image` class which represents an image widget.
+ [ui/progress]({%ns_cookbook ui/progress%}): Provides the `Progress` class which represents a progress or loading indicator.
+ [ui/scroll-view]({%ns_cookbook ui/scroll-view%}): Provides the `ScrollView` class which represents a scrollable area that can show content which is larger than the visible area.
+ [ui/search-bar]({%ns_cookbook ui/search-bar%}): Provides the `SearchBar` class which represents a standard search bar component.
+ [ui/slider]({%ns_cookbook ui/slider%}): Provides the `Slider` class which represents a standard slider component.
+ [ui/switch]({%ns_cookbook ui/switch%}): Provides the `Switch` class which represents a standard switch component.
+ [ui/tab-view]({%ns_cookbook ui/tab-view%}): Provides the `TabView` class which represents a standard content component with tabs.
+ [ui/web-view]({%ns_cookbook ui/web-view%}): Provides the `WebView` class which represents a standard browser widget.
+ [ui/html-view]({%ns_cookbook ui/html-view%}): Provides the `HtmlView` class which represents a standard html view widget.
+ [ui/dialogs]({%ns_cookbook ui/dialogs%}): Lets you show various dialogs such as alerts, prompts, confirmations and others.
+ [ui/list-picker]({%ns_cookbook ui/list-picker%}): Provides the `ListPicker` class which represents a standard list picker component.
+ [ui/date-picker]({%ns_cookbook ui/date-picker%}): Provides the `DatePicker` class which represents a standard date picker component.
+ [ui/time-picker]({%ns_cookbook ui/time-picker%}): Provides the `TimePicker` class which represents a standard time picker component.
+ [ui/placeholder]({%slug placeholder %}): Provides the `Placeholder` class which lets you add a native widget to the visual tree.

### WHATWG Polyfills

+ [fetch]({%ns_cookbook fetch%}): The `Fetch` polyfill that provides requests, responses, and the process that binds them: fetching. https://fetch.spec.whatwg.org/
