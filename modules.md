---
nav-title: "Modules"
title: "Modules"
description: "Moduels"
position: 11

---
# Overview
NativeScript uses a modular design pattern. All functionality that NativeScript offers resides in different modules. Modules divide code into clusters that, by a certain criterion, belong together. For example, UI views such as buttons and labels each reside in their own module separating them from the rest of the code. In order to use something that a module contains, one needs to **require** the module in his own code.

# Core Modules
+ [application](./ApiReference/application/HOW-TO.md) - contains the application abstraction with all related methods.
+ [console](./ApiReference/console/HOW-TO.md) - allows printing messages to the device's console.
+ [local-settings](./ApiReference/local-settings/HOW-TO.md) - allows you to save and restore any kind of information related to your application.
+ [color](./ApiReference/color/HOW-TO.md) - allows creating colors to be used when styling the UI.
+ [http](./ApiReference/http/HOW-TO.md) - allows you to send web requests and receive the responses.
+ [image-source](./ApiReference/image-source/HOW-TO.md) - contains the ImageSource class, which encapsulates the common abstraction behind a platform specific object (typically a Bitmap) that is used as a source for images.
+ [timer](./ApiReference/timer/HOW-TO.md) - allows you to create, start, stop and react to timers.
+ [trace](./ApiReference/trace/HOW-TO.md) - allows you to trace and print specific information based on categories.

# Device Modules
+ [camera](./ApiReference/camera/HOW-TO.md) - allows you to take pictrues with the device's camera.
+ [location](./ApiReference/location/HOW-TO.md) - allows you to use the geolocation of the device.
+ [platform](./ApiReference/platform/HOW-TO.md) - contains all kinds of information about the device, its operating system and software.
+ [fps-meter](./ApiReference/fps-meter/HOW-TO.md) - allows you to capture the frames-per-second metrics of your application.
+ [file-system](./ApiReference/file-system/HOW-TO.md) - provides high-level abstractions for file system entities such as files, folders, known folders, paths, separators, etc.

# Data Modules
+ [data/observable](./ApiReference/data/observable/HOW-TO.md) - contains the Observable class, which represents an observable object, or "data" in the model-view paradigm.
+ [data/observable-array](./ApiReference/data/observable-array/HOW-TO.md) - contains the ObservableArray<T> class, which is capable of detecting and responding to changes of a collection of objects.
+ [data/virtual-array](./ApiReference/data/virtual-array/HOW-TO.md) - contains the VirtualArray<T> class, which is an advanced array like class that helps loading items on demand.

# Core UI Modules
+ [ui/core/dependency-observable](./ApiReference/ui/core/dependency-observable/HOW-TO.md) - contains the DependencyObservable class, which represents an extended Observable object that uses Property instances for value backing mechanism.
+ [text/formatted-string](./ApiReference/text/formatted-string/HOW-TO.md) - contains the FormattedString and Span classes, which are used to create a formatted (rich text) strings.

# Panels
+ [ui/panels/stack-panel](./ApiReference/ui/stack-panel/HOW-TO.md) - contains the StackPanel class, which is used to arrange children into single line.
+ [ui/panels/grid-panel](./ApiReference/ui/grid-panel/HOW-TO.md) - contains the GridPanel class, which represents a flexible grid area that consists of columns and rows.
+ [ui/panels/canvas-panel](./ApiReference/ui/canvas-panel/HOW-TO.md) - contains the CanvasPanel class, which is used to place child elements at arbitrary positions or to draw children in multiple layers.
+ [ui/panels/wrap-panel](./ApiReference/ui/wrap-panel/HOW-TO.md) - contains the WrapPanel class, which is used to place child elements at sequential positions from left to the right and then "wrap" the lines of children from top to the bottom.

# Widgets
+ [ui/page](./ApiReference/ui/page/HOW-TO.md) - contains the Page class, which represents a logical unit for navigation inside a Frame.
+ [ui/frame](./ApiReference/ui/frame/HOW-TO.md) - contains the Frame class, which represents the logical View unit that is responsible for navigation within an application.
+ [ui/activity-indicator](./ApiReference/ui/activity-indicator/HOW-TO.md) - contains the ActivityIndicator class, which represents a widget for showing that something is currently busy.
+ [ui/button](./ApiReference/ui/button/HOW-TO.md) - contains the Button class, which represents a standard button widget.
+ [ui/label](./ApiReference/ui/label/HOW-TO.md) - contains the Label class, which represents a standard label widget.
+ [ui/text-field](./ApiReference/ui/text-field/HOW-TO.md) - contains the TextField class, which represents an editable single-line box.
+ [ui/text-view](./ApiReference/ui/text-view/HOW-TO.md) - contains the TextField class, which represents an editable multi-line line box.
+ [ui/list-view](./ApiReference/ui/list-view/HOW-TO.md) - contains the ListView class, which represents a standard list view widget.
+ [ui/image](./ApiReference/ui/image/HOW-TO.md) - contains the Image class, which represents an image widget.
+ [ui/progress](./ApiReference/ui/progress/HOW-TO.md) - contains the Progress class, which represents a component capable of showing progress.
+ [ui/scroll-view](./ApiReference/ui/scroll-view/HOW-TO.md) - contains the ScrollView class, which represents a scrollable area that can have content that is larger than its bounds.
+ [ui/search-bar](./ApiReference/ui/search-bar/HOW-TO.md) - contains the SearchBar class, which represents a standard search bar component.
+ [ui/slider](./ApiReference/ui/slider/HOW-TO.md) - contains the Slider class, which represents a standard slider component.
+ [ui/switch](./ApiReference/ui/switch/HOW-TO.md) - contains the Switch class, which represents a standard switch component.
+ [ui/tab-view](./ApiReference/ui/tab-view/HOW-TO.md) - contains the TabView class, which represents a standard content component with tabs.
+ [ui/web-view](./ApiReference/ui/web-view/HOW-TO.md) - contains the WebView class, which represents a standard browser widget.

# Other Modules
+ [ui/styling](./ApiReference/ui/styling/HOW-TO.md) - contains the Style class, which is resposndible for the visual appearance of elements.
+ [ui/gestures](./ApiReference/ui/gestures/HOW-TO.md) - contains the GesturesObserver class, which lets you observe and respond to user gestures
+ ui/image-cache - contains the Cache class, which handles image download requests and caches the already downloaded images.
+ ui/dialogs - allows you to show different dialogs such as alerts, prompts, etc.
+ [xml](./ApiReference/xml/HOW-TO.md) - contains the XmlParser class, which is a SAX parser using the easysax implementation