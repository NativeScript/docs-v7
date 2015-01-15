---
nav-title: "Modules"
title: "Modules"
description: "Moduels"
position: 11

---
# Overview
NativeScript uses a modular design pattern. All functionality that NativeScript offers resides in different modules. Modules divide code into clusters that, by a certain criterion, belong together. For example, UI views such as buttons and labels each reside in their own module separating them from the rest of the code. In order to use something that a module contains, one needs to **require** the module in his own code.

# Core Modules
+ application - contains the application abstraction with all related methods.
+ camera - allows you to take pictrues with the device's camera.
+ color - allows creating colors to be used when styling the UI.
+ console - allows printing messages to the device's console.
+ fps-meter - allows you to capture the frames-per-second metrics of your application.
+ http - allows you to send web requests and receive the responses.
+ image-source - contains the ImageSource class, which encapsulates the common abstraction behind a platform specific object (typically a Bitmap) that is used as a source for images.
+ local-settings - allows you to save and restore any kind of information related to your application.
+ location - allows you to use the geolocation of the device.
+ platform - contains all kinds of information about the device, its operating system and software.
+ timer - allows you to create, start, stop and react to timers.
+ trace - allows you to trace and print specific information based on categories.

# File System Modules
+ file-system - contains classes for file system entities such as files and folders.
+ file-system/file-system-access - contains the FileSystemAccess class, which is an utility class used to provide methods to access and work with the file system.

# Text Modules
+ text - contains text utilities, such as encoding.
+ text/formatted-string - contains the FormattedString class, which is used to create a formatted (rich text) strings.
+ text/span - contains the Span class, which is used to create a single part of formatted string with a common text properties.

# Data Modules
+ data/observable - contains the Observable class, which represents an observable object, or "data" in the model-view paradigm.
+ data/observable-array - contains the ObservableArray<T> class, which is capable of detecting and responding to changes of a collection of objects.
+ data/virtual-array - contains the VirtualArray<T> class, which is an advanced array like class that helps loading items on demand.

# Core UI Modules
+ ui/core/dependency-observable - contains the DependencyObservable class, which represents an extended Observable object that uses Property instances for value backing mechanism.
+ ui/core/bindable - contains the Bindable class, which represents an extended DependencyObservable object that supports data-binding.
+ ui/core/proxy - contains the Proxy class, which is an extended Bindable class that that serves as a proxy between a JavaScript object and a native object.
+ ui/core/view - contains the View class, which is the base class for all UI components. 

# Panel Modules
+ ui/panels/panel - contains the Panel class, which is the base class for all panels.
+ ui/panels/stack-panel - contains the StackPanel class, which is used to arrange children into single line.
+ ui/panels/grid-panel - contains the GridPanel class, which represents a flexible grid area that consists of columns and rows.
+ ui/panels/canvas-panel - contains the CanvasPanel class, which is used to place child elements at arbitrary positions or to draw children in multiple layers.
+ ui/panels/wrap-panel - contains the WrapPanel class, which is used to place child elements at sequential positions from left to the right and then "wrap" the lines of children from top to the bottom.

# Widget Modules
+ ui/content-view - represents a View that has a single child - content.
+ ui/page - contains the Page class, which represents a logical unit for navigation inside a Frame.
+ ui/frame - contains the Frame class, which represents the logical View unit that is responsible for navigation within an application.
+ ui/activity-indicator - contains the ActivityIndicator class, which represents a widget for showing that something is currently busy.
+ ui/button - contains the Button class, which represents a standard button widget.
+ ui/text-base - contains the TextBase class, which is the base class for all textual widgets.
+ ui/label - contains the Label class, which represents a standard label widget.
+ ui/editable-text-base - contains the EditableTextBase class, which is the base class for the TextField and TextView editable widgets.
+ ui/text-field - contains the TextField class, which represents an editable single-line box.
+ ui/text-view - contains the TextField class, which represents an editable multi-line line box.
+ ui/list-view - contains the ListView class, which represents a standard list view widget.
+ ui/image - contains the Image class, which represents an image widget.
+ ui/progress - contains the Progress class, which represents a component capable of showing progress.
+ ui/scroll-view - contains the ScrollView class, which represents a scrollable area that can have content that is larger than its bounds.
+ ui/search-bar - contains the SearchBar class, which represents a standard search bar component.
+ ui/slider - contains the Slider class, which represents a standard slider component.
+ ui/slider - contains the Slider class, which represents a standard slider component.
+ ui/switch - contains the Switch class, which represents a standard switch component.
+ ui/tab-view - contains the TabView class, which represents a standard content component with tabs.
+ ui/wev-view - contains the WebView class, which represents a standard browser widget.

# Other UI Modules
+ ui/enums - contains the possible values for all kinds of enumerations used throughout NativeScript.
+ ui/gestures - contains the GesturesObserver class, which lets you observe and respond to user gestures.
+ ui/image-cache - contains the Cache class, which handles image download requests and caches the already downloaded images.
+ ui/dialogs - allows you to show different dialogs such as alerts, prompts, etc.

# Utility Modules
+ utils/containers - holds different utilities for object comparisons.
+ utils/geometry - holds different structures such as Poinst, Size, etc.
+ utils/types - holds different utilites for working with types.
+ utils/utils - various other utilities.