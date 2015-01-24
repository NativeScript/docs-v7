---
nav-title: "NativeScript Properties"
title: "Properties"
description: "NativeScript Documentation: Properties"
position: 77
---

#Properties

Being a TypeScript framework NativeScript uses TypeScript properties. After transpilation these result in ES5 compliant JavaScript (with **setter** and **getter** methods) to support working with class members, thus ensuring readable and manageable code. Check the following example for more details:

``` JavaScript
var MyClass = (function () {
  function MyClass() {
  }
  Object.defineProperty(MyClass.prototype, "myProperty", {
    get: function () {
      return this._myProperty;
    },
    set: function (value) {
      this._myProperty = value;
    },
    enumerable: true,
    configurable: true
  });
  return MyClass;
})();
exports.MyClass = MyClass;
```
``` TypeScript
export class MyClass {
  private _myProperty: number;
  public get myProperty(): number {
    return this._myProperty;
  }

  public set myProperty(value: number) {
    this._myProperty = value;
  }
}
```

Running the TypeScript compiler through the grunt script, that code will generate the JavaScript counterpart.

#Dependency properties

##Overview
Dependency properties are special kind of properties that provides some more interesting and valuable, simplifying creation of a rich User Interface, features like:

* Memory optimization - The creation of a rich UI custom control is connected to creating a huge number of properties. A very significant part of these properties are used with their default values. With the traditional approach we would end with a **private field** for every property. With the dependency property we only store the modified properties of an instance, while the default values are stored within the dependency property. Additionally, dependency properties are declared outside the class (static), which is another point of optimizing the memory footprint.

* Value validation - By value validation we refer to a business logic validation (type validation is not the best selling point of JavaScript anyways). The validation is achieved via a special validation callback - a function that will be called with the **newValue** as parameter and should return true or false if a value is valid or not respectively.

* Change notification - There is another callback which will be called when the value of the property is changed. It will be called with an [EventData](./ApiReference/data/observable/EventData.md) as a parameter.

* Inheritance - One of the most important features of dependency properties is inheritance. By inheritance we refer to a special option for UI elements (such as Button) to get its property from a parent (on the visual tree) element. For example button could inherit its style (or theme) property value from the parent Window, Panel or other container. This gives the end user the option to dramatically change the look of the entire application by only changing a single setting (Window.theme).

##Working with dependency properties

* Declaring a dependency property

Only classes that derives from the [DependencyObservable](./ApiReference/ui/core/dependency-observable/DependencyObservable.md) class can have a dependency property. This class has some built-in methods that support the entire infrastructure of dependency properties.

``` JavaScript
var dependencyObservable = require("ui/core/dependency-observable");
exports.myPropertyProperty = new dependencyObservable.Property("myProperty",
          "MyClass",
          new dependencyObservable.PropertyMetadata("", dependencyObservable.PropertyMetadataOptions.None));
var MyClass = (function (_super) {
  __extends(MyClass, _super);
  function MyClass() {
    _super.apply(this, arguments);
  }
  Object.defineProperty(MyClass.prototype, "myProperty", {
    get: function () {
      return this._getValue(exports.myPropertyProperty);
    },
    set: function (value) {
      this._setValue(exports.myPropertyProperty, value);
    },
    enumerable: true,
    configurable: true
  });
  return MyClass;
})(dependencyObservable.DependencyObservable);
exports.MyClass = MyClass;
```
``` TypeScript
import dependencyObservable = require("ui/core/dependency-observable");

export var myPropertyProperty = new dependencyObservable.Property(
  "myProperty",
  "MyClass",
  new dependencyObservable.PropertyMetadata("", dependencyObservable.PropertyMetadataOptions.None)
);

export class MyClass extends dependencyObservable.DependencyObservable {
  public get myProperty(): number {
    return this._getValue(myPropertyProperty);
  }

  public set myProperty(value: number) {
    this._setValue(myPropertyProperty, value);
  }
}
```

With the above code we almost created a plain property with a different syntax (we only need to add the static part). With that, the following examples will demonstrate the addition of other features.

* Adding a changed callback:

``` JavaScript
var dependencyObservable = require("ui/core/dependency-observable");
function onMyPropertyChanged(eventData) {
  var myClassInstance = eventData.object;
  var value = eventData.newValue;
  console.log("myProperty of the object " + myClassInstance.toString() + " changed with " + value);
}
exports.myPropertyProperty = new dependencyObservable.Property("myProperty",
      "MyClass",
      new dependencyObservable.PropertyMetadata("",
                  dependencyObservable.PropertyMetadataOptions.None,
                  onMyPropertyChanged));
var MyClass = (function (_super) {
  __extends(MyClass, _super);
  function MyClass() {
    _super.apply(this, arguments);
  }
  Object.defineProperty(MyClass.prototype, "myProperty", {
    get: function () {
      return this._getValue(exports.myPropertyProperty);
    },
    set: function (value) {
      this._setValue(exports.myPropertyProperty, value);
    },
    enumerable: true,
    configurable: true
  });
  return MyClass;
})(dependencyObservable.DependencyObservable);
exports.MyClass = MyClass;
```
``` TypeScript
import dependencyObservable = require("ui/core/dependency-observable");

function onMyPropertyChanged(eventData: dependencyObservable.PropertyChangeData) {
  var myClassInstance = <MyClass>eventData.object;
  var value = eventData.newValue;

  console.log("myProperty of the object " + myClassInstance.toString() + " changed with " + value);
}

export var myPropertyProperty = new dependencyObservable.Property(
  "myProperty",
  "MyClass",
  new dependencyObservable.PropertyMetadata("",
  dependencyObservable.PropertyMetadataOptions.None,
  onMyPropertyChanged)
);

export class MyClass extends dependencyObservable.DependencyObservable {
  public get myProperty(): number {
    return this._getValue(myPropertyProperty);
  }

  public set myProperty(value: number) {
    this._setValue(myPropertyProperty, value);
  }
}
```

* Adding a validation callback:

``` JavaScript
var dependencyObservable = require("ui/core/dependency-observable");
function validateMyProperty(value) {
  if (value > 0) {
    return true;
  }
  return false;
}
exports.myPropertyProperty = new dependencyObservable.Property("myProperty", "MyClass", new dependencyObservable.PropertyMetadata("", dependencyObservable.PropertyMetadataOptions.None, null, validateMyProperty));
var MyClass = (function (_super) {
...
```
``` TypeScript
import dependencyObservable = require("ui/core/dependency-observable");

function validateMyProperty(value) {
  if (value > 0) {
    return true;
  }
  return false;
}

export var myPropertyProperty = new dependencyObservable.Property(
  "myProperty",
  "MyClass",
  new dependencyObservable.PropertyMetadata("",
  dependencyObservable.PropertyMetadataOptions.None,
  null,
  validateMyProperty)
  );

  export class MyClass extends dependencyObservable.DependencyObservable {
...
```

* Creating an inheritable dependency property

``` JavaScript
var dependencyObservable = require("ui/core/dependency-observable");
exports.myPropertyProperty = new dependencyObservable.Property("myProperty", "MyClass", new dependencyObservable.PropertyMetadata("", dependencyObservable.PropertyMetadataOptions.Inheritable));
var MyClass = (function (_super) {
  __extends(MyClass, _super);
  function MyClass() {
    _super.apply(this, arguments);
  }
  Object.defineProperty(MyClass.prototype, "myProperty", {
    get: function () {
      return this._getValue(exports.myPropertyProperty);
    },
    set: function (value) {
      this._setValue(exports.myPropertyProperty, value);
    },
    enumerable: true,
    configurable: true
  });
  return MyClass;
})(dependencyObservable.DependencyObservable);
exports.MyClass = MyClass;
```
``` TypeScript
import dependencyObservable = require("ui/core/dependency-observable");

export var myPropertyProperty = new dependencyObservable.Property(
    "myProperty",
    "MyClass",
    new dependencyObservable.PropertyMetadata("",
        dependencyObservable.PropertyMetadataOptions.Inheritable)
);

export class MyClass extends dependencyObservable.DependencyObservable {
  public get myProperty(): number {
    return this._getValue(myPropertyProperty);
  }

  public set myProperty(value: number) {
    this._setValue(myPropertyProperty, value);
  }
}
```

> Creating an inheritable property is relatively simple (as seen in the previous example). However keep in mind that the **inheritance** magic only happens through the **visual tree**. Thus, setting such a property to a non visual element will not work as expected.
