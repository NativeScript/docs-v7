---
nav-title: "NativeScript Properties"
title: "Properties"
description: "NativeScript Documentation: Properties"
position: 77
---

#Properties

Being a TypeScript framework NativeScript uses TypeScript properties which after transpilation produces ES5 complient JavaScript (with **setter** and **getter** methods) to support working with class members which ensures more readable and manageable code. Check the following example for more details.

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

TypeScript code will generate the JavaScript counterpart.

#Dependency properties

##Overview
Dependency properties are special kind of properties that provides some more interesting and valuable, simplifying creation of a rich User Interface, features like:

* Memory optimization - Creation of a rich UI custom control is connected with creating a huge number of properties. A very significant part of these properties are used with their default values. However with the traditional approach we will end with a **private field** for every property. With the dependency property we store only modified properties for an instance, while default values are stored within the dependency property. Also dependency properties are declared outside the class (static), which is another point for optimizing memory footprint.

* Value validation - By value validation we refer to a business logic validation (type validation is not the best selling point of JavaScript). The validation is achieved via a special validation callback - a function that will be called with the **newValue** as parameter and should return true or false if a value is valid or not accordingly.

* Change notification - There is another callback which will be called when the value of the property is changed. It will be called with an [EventData](./ApiReference/data/observable/EventData.md) as parameter.

* Inheritance - One of the most important features of dependency properties is inheritance. By inheritance we refer to a special option for UI elements (such as Button) to get values for its properties from a parent (on the visual tree) element. For example button could inherit its style (or theme) property value from the parent Window, Panel or other container. This gives the end user an option to change a single setting (Window.theme) and entire application will look totally different.

##Working with dependency properties

* Declaring a dependency property

Only classes that derives from [DependencyObservable](./ApiReference/ui/core/dependency-observable/DependencyObservable.md) class could have a dependency property. This class have some built-in methods that support the entire infrastructure of dependency properties.

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

With the above code we just have almost (except the static part) a plain property with some different syntax. So following examples will show how to add some other features.

* Adding a changed callback

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

* Adding a validation callback

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

> Creating an inheritable property is relatively simple (as previous example show). However keep in mind that **inheritance** magic happens only through the **visual tree**. So setting such property to a non visual element will not work as expected.
