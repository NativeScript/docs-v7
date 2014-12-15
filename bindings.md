---
nav-title: "NativeScript Bindings"
title: "NativeScript Bindings"
description: "NativeScript Documentation: Bindings"
---

# Binding
Within NativeScript we refer to term Binding as "Data Binding" (according to Wikipedia this is a technique to connect two data elements together). A connection between two elements means that when a property value of the first element changes then the bound property of the second object is changed accordingly. Later in this document we will refer to the first object as "source" and the second object as "target".
In order to have a real binding (which changes a property on the target everytime when source is changed) we need a way to understand when source object is changed. NativeScript provides such base class called Observable which emits "property changed event" everytime when a property value is changed. For creating an Observable class instance we need to require "observable" module:

``` JavaScript
var observableModule = require("data/observable");
var source = new observableModule.Observable();
```

Next step is to create the target element (which should be an inheritor of the Bindable class - all UI elements inherits Bindable class in order to support Binding out-of-the-box).

``` JavaScript
var bindableModule = require("ui/core/bindable");
var targetObject = new bindableModule.Bindable();
```

Now all we have to do is to bind source and the target (this snippet assumes that previous snippets exists in the source code):

``` JavaScript
var bindingOptions = {
	sourceProperty: "sourceProperty",
    targetProperty: "targetProperty",
    twoWay: true
};

targetObject.bind(bindingOptions, source);
```

After that any change to the "sourceProperty" of the source object will be reflected on target object.

``` JavaScript
source.set("sourceProperty", "ExpectedValue");

console.log("Value of the target property on target object is: " + target.get("targetProperty");
// prints -> Value of the target property on target object is: ExpectedValue

source.set("sourceProperty", "ChangedValue");

console.log("Value of the target property on target object is: " + target.get("targetProperty");
// prints -> Value of the target property on target object is: ChangedValue
```

The "twoWay" option within BindingOptions denotes that not only a change of the source is reflected on the target, but also any change on the target is reflected on the source.

Complete example (all snippets a copied for convinience):

``` JavaScript
var observableModule = require("data/observable");
var source = new observableModule.Observable();

var bindableModule = require("ui/core/bindable");
var targetObject = new bindableModule.Bindable();

var bindingOptions = {
	sourceProperty: "sourceProperty",
    targetProperty: "targetProperty",
    twoWay: true
};

targetObject.bind(bindingOptions, source);

source.set("sourceProperty", "ExpectedValue");

console.log("Value of the target property on target object is: " + target.get("targetProperty");
// prints -> Value of the target property on target object is: ExpectedValue

source.set("sourceProperty", "ChangedValue");

console.log("Value of the target property on target object is: " + target.get("targetProperty");
// prints -> Value of the target property on target object is: ChangedValue
```

Previous example shows how to bind any Bindable element to a specific Observable object instance. NativeScript supports one very essensial feature which unlocks most of the "MVVM" scenarios, binding with a special inherited (via VisualTree) property called bindingContext. "bindingContext" is a property of the View class (very basic class for all UI elements within NativeScript), so every UI element have it. The magic about this property is that this property is inheritable in other words an observable data model could be set as bindingContext for the page and every single nested control will have it (except in case when bindingContext (for the inner control) is set to something else). To create such binding call "Bindable.bind" method without a source.

``` JavaScript
targetObject.bind(bindingOptions);
```
This will create a binding to the nearest set (up through VisualTree) bindingContext.

Unbinding two data elements requires a call to "Bindable.unbind(targetProperty)" method:

``` JavaScript
target.unbind("targetProperty");
```
