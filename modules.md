---
nav-title: Modules in NativeScript
title: Modules
description: You can access the native device and platform capabilities of your target platform with the help of the NativeScript modules.
position: 5
---

# Modules

To let you access the native device and platform capabilities of your target platform, NativeScript uses a modular design pattern. All device, platform or user interface functionalities reside in separate modules. To access the functionality provided by a module, you need to **require** the module.

In your project, the files for each module reside in a dedicated subdirectory in the `tns_modules` directory. Each default module comes along with a `package.json` file which declares how the module should be called within your call and which file contains its respective code.

```JSON
{ "name" : "button",
  "main" : "button.js" }
``` 

* [Core Modules](#core-modules)
* [Device Functionality Modules](#device-functionality-modules)
* [Data Modules](#data-modules)
* [User Interface Modules](#user-interface-modules)
	* [Layouts](#layouts)
	* [Widgets](#widgets)

### Core Modules

+ [application](./ApiReference/application/HOW-TO.md): Provides the application abstraction with all related methods.
+ [console](./ApiReference/console/HOW-TO.md): Lets you print messages to the device console.
+ [local-settings](./ApiReference/local-settings/HOW-TO.md): Lets you save and restore any information related to your application.
+ [http](./ApiReference/http/HOW-TO.md): Lets you send web requests and receive the responses.
+ [image-source](./ApiReference/image-source/HOW-TO.md): Provides the `ImageSource` class which encapsulates the common abstraction behind a platform-specific object that is used as a source for images (typically a Bitmap).
+ [timer](./ApiReference/timer/HOW-TO.md): Lets you to create, start, stop and react to timers.
+ [trace](./ApiReference/trace/HOW-TO.md): Lets you trace and print specific information based on categories.
+ [ui/image-cache](./ApiReference/ui/image-cache/HOW-TO.md): Provides the `Cache` class which handles image download requests and caches the already downloaded images.

### Device Functionality Modules

+ [camera](./ApiReference/camera/HOW-TO.md): Lets you take pictures with the device camera.
+ [location](./ApiReference/location/HOW-TO.md): Lets you use the geolocation sensors of the device.
+ [platform](./ApiReference/platform/HOW-TO.md): Provides information about the device, its operating system and software.
+ [fps-meter](./ApiReference/fps-meter/HOW-TO.md): Lets you capture the frames-per-second metrics of your application.
+ [file-system](./ApiReference/file-system/HOW-TO.md): Lets you work with the device file system. Provides high-level abstractions for file system entities such as files, folders, known folders, paths, separators, etc.
+ [ui/gestures](./ApiReference/ui/gestures/HOW-TO.md): Provides the `GesturesObserver` class which lets you observe and respond to user gestures.

### Data Modules

+ [data/observable](./ApiReference/data/observable/HOW-TO.md): Provides the `Observable` class which represents an observable object or data in the MVVM paradigm.
+ [data/observable-array](./ApiReference/data/observable-array/HOW-TO.md): Provides the `ObservableArray` class which detects and responds to changes in a collection of objects.
+ [data/virtual-array](./ApiReference/data/virtual-array/HOW-TO.md): Provides the `VirtualArray` class which is an advanced array-like class that helps loading items on demand.

### User Interface Modules

+ [ui/core/dependency-observable](./ApiReference/ui/core/dependency-observable/HOW-TO.md): Provides the `DependencyObservable` class which represents an extended `Observable` object that uses Property instances for value backing mechanism.
+ [ui/frame](./ApiReference/ui/frame/HOW-TO.md): Provides the `Frame` class which represents the logical `View` unit that is responsible for navigation within an application.
+ [ui/page](./ApiReference/ui/page/HOW-TO.md): Provides the `Page` class which represents a logical unit for navigation inside a `Frame`. NativeScript apps consist of pages.
+ [color](./ApiReference/color/HOW-TO.md): Lets you create colors which you can use when you style the UI.
+ [text/formatted-string](./ApiReference/text/formatted-string/HOW-TO.md): Provides the `FormattedString` and `Span` classes which you can use to create rich text formatted strings.
+ [xml](./ApiReference/xml/HOW-TO.md): Provides the `XmlParser` class which is a SAX parser using the easysax implementation.
+ [ui/styling](./ApiReference/ui/styling/HOW-TO.md): Provides the `Style` class which is responsible for the visual appearance of elements.
+ [ui/border](./ApiReference/ui/border/HOW-TO.md): Provides the `Border` class which lets you draw borders around other elements.

#### Layouts

+ [ui/layouts/stack-layout](./ApiReference/ui/stack-layout/HOW-TO.md): Provides the `StackLayout` class which lets you arrange the children of the layout in single line.
+ [ui/layouts/grid-layout](./ApiReference/ui/grid-layout/HOW-TO.md): Provides the `GridLayout` class which lets you arrange the children of the layout in a flexible grid area with columns and rows.
+ [ui/layouts/absolute-layout](./ApiReference/ui/absolute-layout/HOW-TO.md): Provides the `AbsoluteLayout` class which lets you arrange the children of the layout at arbitrary positions or draw them in multiple layers.
+ [ui/layouts/wrap-layout](./ApiReference/ui/wrap-layout/HOW-TO.md): Provides the `WrapLayout` class which lets you arrange the children of the layout at sequential positions from left to right and then wrap the lines of children from top to bottom.

#### Widgets

+ [ui/activity-indicator](./ApiReference/ui/activity-indicator/HOW-TO.md): Provides the `ActivityIndicator` class which represents a widget for showing that a service is currently busy.
+ [ui/button](./ApiReference/ui/button/HOW-TO.md): Provides the `Button` class which is a standard button widget.
+ [ui/label](./ApiReference/ui/label/HOW-TO.md): Provides the `Label` class which is a standard label widget.
+ [ui/text-field](./ApiReference/ui/text-field/HOW-TO.md): Provides the `TextField` class which represents an editable single-line box.
+ [ui/text-view](./ApiReference/ui/text-view/HOW-TO.md): Provides the `TextView` class which represents an editable multi-line line box.
+ [ui/list-view](./ApiReference/ui/list-view/HOW-TO.md): Provides the `ListView` class which represents a standard list view widget.
+ [ui/image](./ApiReference/ui/image/HOW-TO.md): Provides the `Image` class, which represents an image widget.
+ [ui/progress](./ApiReference/ui/progress/HOW-TO.md): Provides the `Progress` class which represents a progress or loading indicator.
+ [ui/scroll-view](./ApiReference/ui/scroll-view/HOW-TO.md): Provides the `ScrollView` class which represents a scrollable area that can show content which is larger than the visible area.
+ [ui/search-bar](./ApiReference/ui/search-bar/HOW-TO.md): Provides the `SearchBar` class which represents a standard search bar component.
+ [ui/slider](./ApiReference/ui/slider/HOW-TO.md): Provides the `Slider` class which represents a standard slider component.
+ [ui/switch](./ApiReference/ui/switch/HOW-TO.md): Provides the `Switch` class which represents a standard switch component.
+ [ui/tab-view](./ApiReference/ui/tab-view/HOW-TO.md): Provides the `TabView` class which represents a standard content component with tabs.
+ [ui/web-view](./ApiReference/ui/web-view/HOW-TO.md): Provides the `WebView` class which represents a standard browser widget.
+ [ui/dialogs](./ApiReference/ui/dialogs/HOW-TO.md): Lets you show various dialogs such as alerts, prompts, confirmations and others.