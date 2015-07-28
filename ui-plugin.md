---
nav-title: User Interface Layouts in NativeScript
title: "UI: Layouts"
description: Learn the basic principles of designing and positioning the UI elements inside your apps.
position: 12
---

# Overview
In this article we will cover the basics of creating a NativeScript User Interface plugin that integrates with the existing [cross-platform](https://github.com/NativeScript/NativeScript) modules. Although the cross-platform part of the {N} modules is entirely written in [TypeScript](http://www.typescriptlang.org/), I will be using plain JavaScript and Sublime Text 2 as the preferred IDE. The same can be achieved with any transpiler tool that produces valid ES5 JavaScript and an IDE of your choice. As a widget to enable I chose [NumberPicker](http://developer.android.com/reference/android/widget/NumberPicker.html) / [UIStepper](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIStepper_Class/index.html#//apple_ref/occ/cl/UIStepper) as this component is currently not available in the {N} UI modules and (a very important note) - semantically similar widgets are available in both Android and iOS. The suggested way for building the plugin will follow the guidelines we use in creating {N} modules and will emphasize on major concepts like observables, bindable properties, abstract View hierarchy (or Visual Tree) and CSS styling.

> The article assumes that you are already familiar with developing [applications with NativeScript](http://docs.nativescript.org/getting-started).

# Class Hierarchy
Following is a brief overview of the class hierarchy in the Visual Tree:

> Across the article you will often see the "Visual Tree" expression - it refers to the JavaScript abstraction available in the cross-platform modules.

```
Observable
├── DependencyObservable
│   ├── Bindable
│   │   ├── ProxyObject
│   │   │   ├── View
```

### [Observable](http://docs.nativescript.org/ApiReference/data/observable/Observable)
In its essence, this is the class that implements the [Observer](https://en.wikipedia.org/wiki/Observer_pattern) design-pattern. Every node within the Visual Tree should support the addEventListener/removeEventListener routine, hence the base class.

### [DependencyObservable](http://docs.nativescript.org/ApiReference/ui/core/dependency-observable/DependencyObservable)
This class enables cascading property values - e.g. an effective property value may be the default one, inherited from some ancestor, coming from a style or set locally directly. It may be thought of as an `Observable` with extended property backing mechanism.

### [Bindable](http://docs.nativescript.org/ApiReference/ui/core/bindable/Bindable)
The name of the class is self-explanatory - it enables data-binding, using the extended property backing mechanism of the `DependencyObservable` base class. 

### [ProxyObject](http://docs.nativescript.org/ApiReference/ui/core/proxy/ProxyObject)
Each concrete UI module within {N} internally creates and maintains a corresponding native UI instance. This class serves as a proxy between the JavaScript object and the wrapped native object.  For example, when a property changes on the JavaScript side, the implementation will take care for delegating the change to the native representation and vice-versa.

### [View](http://docs.nativescript.org/ApiReference/ui/core/view/View)
At an abstract level, _View_ describes an object that has visual representation on the screen. It participates in the life-cycle and layout passes and may be styled - either through CSS or by using the _[View.style](http://docs.nativescript.org/ApiReference/ui/styling/Style.html)_ property.

### See Also
The NativeScript documentation portal has some great content to walk you through each of the above classes in greater details:

* [Events](http://docs.nativescript.org/events.html)
* [Properties](http://docs.nativescript.org/properties.html)
* [Data-binding](http://docs.nativescript.org/bindings.html)
  
# File Structure
Having in mind the class hierarchy, the obvious choice for the base class of our widget will be the `View` one. So far so good, let's get to work and create some real stuff. Here is how a typical {N} [UI module](https://github.com/NativeScript/NativeScript/tree/master/ui/button) is structured:

### Definition File (number-picker.d.ts)
This is the TypeScript way to describe all the publicly available APIs within a module. It is our practice to start with the API first (or defining what a widget should do) and then move to the actual implementation. Taking a close look at [NumberPicker](http://developer.android.com/reference/android/widget/NumberPicker.html) and [UIStepper](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIStepper_Class/index.html#//apple_ref/occ/cl/UIStepper) we can easily come up with the API definition (we are looking for an API that is cross-platform and each method/property is available for each native platform). For the sake of simplicity I will cover only one property, you can examine the attached [TODO: Link]package for the complete implementation:

> This file is not mandatory and if you do not use TypeScript you may simply skip this step. Still, defining the public API one way or another will be useful for the users of the plugin.

```javascript
declare module "number-picker" {
    import view = require("ui/core/view");
    import dependencyObservable = require("ui/core/dependency-observable");

    export class NumberPicker extends view.View {
    	// static (prototype) properties
        public static valueProperty: dependencyObservable.Property;

        // instance properties
        value: number;
        
        android: android.widget.NumberPicker;
        ios: UIStepper;
    }
} 
```

> In the {N} modules we are using TypeScript's [ambient modules](http://www.typescriptlang.org/Handbook#modules-working-with-other-javascript-libraries), which tell the language service that this module will be available at runtime and it is our responsibility to load it.

Since we do want features like data-binding enabled for our widget, we will use dependency properties to back the instance properties (as described [here](http://docs.nativescript.org/bindings.html)).

### Common File (number-picker-common.ts)
Looking at the [Button](https://github.com/NativeScript/NativeScript/tree/master/ui/button) folder you will notice the `*-common` file. This is the file that holds the functionality which is the same regardless of the target platform. Such functionality for example is instance properties implementation. Here is how our common file looks like:

```javascript
var view = require("ui/core/view");
var dObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");

var NumberPicker = (function (_super) {
    global.__extends(NumberPicker, _super);
    function NumberPicker() {
        _super.call(this);
    }
    Object.defineProperty(NumberPicker.prototype, "value", {
        get: function () {
            return this._getValue(NumberPicker.valueProperty);
        },
        set: function (value) {
            this._setValue(NumberPicker.valueProperty, value);
        }
    });
    NumberPicker.valueProperty = new dObservable.Property("value", "NumberPicker", new proxy.PropertyMetadata(0, dObservable.PropertyMetadataSettings.AffectsLayout));
    return NumberPicker;
})(view.View);

exports.NumberPicker = NumberPicker;
```

>The global __extends function is provided by the {N} Runtime and it basically adds some functionality on top of the TypeScript's __extends function.

We define a new `NumberPicker` class, create the backing dependency property and define the getter and setter for the instance property. An important note is how we implement the `value` property `getter` and `setter` functions. Using the `DependencyObservable` `_getValue` and `_setValue` methods, respectively, enables cascading values as well as change notifications and data-bindings. Now comes the other interesting part - creating the concrete native widgets and plugging them into the {N} framework.

### Android-specific File (number-picker.android.ts)
The {N} CLI follows the well known Cordova convention of marking platform-specific files with the platform name. This tells the CLI that these files will be only available for the package targeting the specified platform. With that said, we will need the `number-picker.android.ts` file to specify the Android-specific part of our widget:

```javascript
var common = require("./number-picker-common");

function onValuePropertyChanged(data) {
    var picker = data.object;
    if (!picker.android) {
        return;
    }
    picker.android.setValue(data.newValue);
}

common.NumberPicker.valueProperty.metadata.onSetNativeValue = onValuePropertyChanged;
require("utils/module-merge").merge(common, module.exports);

var NumberPicker = (function (_super) {
    global.__extends(NumberPicker, _super);
    function NumberPicker() {
        _super.apply(this, arguments);
    }
    NumberPicker.prototype._createUI = function () {
        this._android = new android.widget.NumberPicker(this._context);
    };
    Object.defineProperty(NumberPicker.prototype, "android", {
        get: function () {
            return this._android;
        }
    });
    return NumberPicker;
})(common.NumberPicker);

exports.NumberPicker = NumberPicker;
```

What the above code does is:

1. Require the common module.
2. Define a PropertyChangedCallback that will update the value of the native `NumberPicker`. Since we are sure this code is valid for Android only, we can safely go through the {N} Bridge and change the property of the native widget directly.
3. Register the callback with the metadata of the `value` property so that the base implementation can call it. Remember the `Proxy` level of the class hierarchy? It provides the implementation that will execute this callback whenever the JavaScript `value` property changes. 
4. Merge the exports of the common file with the exports of this file. This is very important since at runtime the loaded file is the `number-picker.android` and we do want publicly exposed API from the common module to be available on the specific one. The 
4. Create a new `NumberPicker` class that inherits the common one and its functionality.
5. Override the `_createUI` method and instantiate the `_android` field.
6. Define a public getter property for the native Android instance.

> The `iOS` property, as declared in the definition (API) file, remains `undefined` when running on Android.

The `_createUI` method is part of the Visual Tree instantiation pass for Android. Since every native Android UI widget requires a valid [Context](http://developer.android.com/reference/android/content/Context.html) as a constructor parameter, the UI is lazy initialized when we have such `Context` available. This happens when the main [Activity](http://developer.android.com/reference/android/app/Activity.html) is created. The following scheme briefly summarizes the steps during the UI initialization pass within the Visual Tree:

```
Android Runtime raises the getActivity callback
				 |
Application Module handles the callback
				 |
Frame Module onActivityRequested is called
				 |
Native Activity overrides are provided
				 |
Native onCreate method is called on the main Activity
				 |
Application is navigated to the main module
				 |
The XML is parsed and the Visual Tree is created
				 |
The Visual Tree is traversed and _onAttached(context) is called on each View
				 |
_onAttached(context) will update the _context property and will call _createUI

```

So, overriding the `_createUI` method is what we needed to plug our new widget within the Visual Tree.

### iOS-specific File (number-picker.ios.ts)
I guess you are eager (so am I) to see the result of our effort so far but let us first implement the minimalistic iOS functionality as well:

```javascript
var common = require("./number-picker-common");

function onValuePropertyChanged(data) {
    var picker = data.object;
    picker.ios.value = data.newValue;
}

common.NumberPicker.valueProperty.metadata.onSetNativeValue = onValuePropertyChanged;
require("utils/module-merge").merge(common, module.exports);

var NumberPicker = (function (_super) {
    global.__extends(NumberPicker, _super);
    function NumberPicker() {
        _super.apply(this, arguments);
        this._ios = new UIStepper();
    }

    Object.defineProperty(NumberPicker.prototype, "ios", {
        get: function () {
            return this._ios;
        }
    });
    return NumberPicker;
})(common.NumberPicker);

exports.NumberPicker = NumberPicker;
```

To some extent the code looks similar to the Android-specific one and uses the same concepts. But when you look into the details you will see the differences. For example the `onValuePropertyChanged` function uses the iOS [UIStepper](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIStepper_Class/index.html#//apple_ref/occ/cl/UIStepper) API to update the native `value`. Or the absence of a `_createUI` method. In iOS the instantiation pass happens in the constructor of each UI widget since each native widget may be constructed at any time, without the need of additional parameter like Android's `Context`. Here are the steps of the iOS instantiation pass:


```
AppDelegate's applicationDidFinishLaunchingWithOptions notification comes
                 |
Application Module handles the notification
                 |
Application is navigated to the main module
                 |
The XML is parsed and the Visual Tree, including native widgets, is created
```

# First Breath
The minimalistic implementation is ready and its now time for our widget to take its first breath. Let us package our files as a valid plugin, as described in the [documentation](http://docs.nativescript.org/plugins). Here are the steps I did:

1. Create a new sample project named _myApp_ - `tns create myApp`
2. Navigate to the new folder - `cd myApp`.
3. Create a new folder, named `number-picker`.
4. Add the above described JavaScript files in `number-picker`.
5. Add a new `package.json` file in `number-picker` with the following content:
```json
{
    "name": "number-picker",
    "version": "0.0.1",
    "main": "number-picker.js",
    "nativescript": {
        "platforms": {
            "ios": "1.0.0",
            "android": "1.1.0"
        }
    }
}
```
6. Run the `tns plugin add number-picker` command.
7. Modify the `app/main-page.js` file to create our new widget:
```javascript
var vmModule = require("./main-view-model");
var pickerModule = require("number-picker");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;

    var layout = page.content;
    var picker = new pickerModule.NumberPicker();
    layout.addChild(picker);
}

exports.pageLoaded = pageLoaded;
```
8. Run the application with `tns run android` (or `tns emulate ios`).

And there we go - we have our new widget displayed on the page!

# Handling User Interaction
Our new widget is successfully visualized but it is in a very basic stage - for example it does not synchronize changes in its `value` property on the JavaScript side, coming from the Native world when the user interacts with the widget.

### Android
The Android's general way of handle change notifications is via *Listeners* - in our concrete scenario this is the [OnValueChangeListener](http://developer.android.com/reference/android/widget/NumberPicker.OnValueChangeListener.html). What we need to do is to create a new interface implementation and register it on our native picker instance to receive updates coming from the Android world. Since this implementation is instance-related, we want to put it in the `_createUI` method:

```javascript
NumberPicker.prototype._createUI = function () {
    this._android = new android.widget.NumberPicker(this._context);

    var that = new WeakRef(this);
    var changeListener = new android.widget.NumberPicker.OnValueChangeListener({
        onValueChange: function(picker, oldVal, newVal){
            var instance = that.get();
            if(instance) {
                instance._onPropertyChangedFromNative(NumberPicker.valueProperty, newVal);
            }
        }
    });

    this._android.setOnValueChangedListener(changeListener);
};
```

>Note the `WeakRef` wrapper of the `this` argument. This is an important part of the listener implementation as it prevents circular references (resulting in a memory leak) between the JavaScript implementation Object literal, which is statically cached per `extend` call and the outer JavaScript instance.

Here we use the Android Bridge to create a new [interface implementation in JavaScript](http://docs.nativescript.org/runtimes/android/generator/extend-class-interface) and to handle the `onValueChange` method. When we receive a notification from the native Picker, we get the JavaScript object, associated with the event and call the special method `_onPropertyChangedFromNative` on it. This is a method on the `Proxy` class and what it does is to synchronize properties from both JavaScript and Native in a way that prevents circular updates, which result in a 

### iOS
On iOS we will use the generic event [UIControlEventValueChanged](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIControl_Class/index.html#//apple_ref/c/econst/UIControlEventValueChanged) raised by the `UIStepper` widget. So, our approach will be to extend the base `NSObject` class, to expose a handler method and register a new instance of our extended object using the [addTargetActionForControlEvents](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIControl_Class/#//apple_ref/occ/instm/UIControl/addTarget:action:forControlEvents:) method. Looking into the [documentation article](http://docs.nativescript.org/runtimes/ios/how-to/ObjC-Subclassing#calling-base-methods-Exposed) on extending classes in {N} for iOS, we come up with the following:

```javascript
// put this somewhere in the module implementation
var ListenerClass = NSObject.extend({
    valueChanged: function(sender) {
        if(this._owner) {
            this._owner._onPropertyChangedFromNative(common.NumberPicker.valueProperty, sender.value);
        }
    }
}, {
    name: "ListenerClass",
    exposedMethods: {
        "valueChanged": { returns: interop.types.void, params: [ UIStepper ] }
    }
});

////////////////////////////////////////

// inside the NumberPicker's constructor
function NumberPicker() {
    _super.apply(this, arguments);

    this._ios = new UIStepper();
    this._listener = new ListenerClass();
    this._listener._owner = this;
    this._ios.addTargetActionForControlEvents(this._listener, "valueChanged", UIControlEvents.UIControlEventValueChanged);
}
```

>Note the assignment of the `listener` object to the `this` argument (`this._listener = new ListenerClass()`) in the constructor. This is needed to prevent the native class deallocation since the `addTargetActionForControlEvents` method uses `Weak` references when adding listeners.

### Data-binding Ready
With gluing the Native-to-JavaScript and JavaScript-to-Native flow of changes we are completely data-binding ready regarding the `value` property and we can use something like (we will cover making the plugin XML-ready later in the article):

```xml
<NumberPicker value="{{ modelValue }}"/>
```


Once we do this, we can add the plugin to the project with the `tns plugin add `


