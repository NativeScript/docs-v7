---
nav-title: Properties in NativeScript 
title: Properties
description: What is a property in NativeScript, what types of properties are available, and how to use them.
position: 10
---

# Properties


This article contents:

* [Introduction](#introduction)
* [Dependency Properties](#dependency-properties)
* [Style properties](#style-properties)


## Introduction

Being a TypeScript framework, NativeScript uses TypeScript properties. After transpilation, these result in ECMAScript v.5 compliant JavaScript with setter and getter methods to support working with class members, thus ensuring readable and manageable code. The following code example demonstrates how the TypeScript is transformed to JavaScript:

``` JavaScript
var MyClass = (function () {
  function MyClass() {
  }
  Object.defineProperty(MyClass.prototype, "myProperty", {
    get: function () {
      return this._myProperty;
    },
    set: function (value) {2/25/2015 9:53:17 AM 
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

The TypeScript transpiler is run by a grunt script.

NativeScript features two types of properties: **dependency properties** and **style properties**. Each type is described in the next sections.


## Dependency Properties

This sections includes these topics:

* [Introduction](#introduction)
* [Declaring a Dependency Property](#declaring-a-dependency-property)
* [Adding a Changed Callback](#adding-a-changed-callback)
* [Adding a Validation Callback](#adding-a-validation-callback)
* [Adding a Validation Callback](#adding-a-validation-callback)
* [Creating an Inheritable Dependency Property](#creating-an-inheritable-dependency-property)

### Introduction

Dependency properties provide valuable features that simplify the creation of a rich User Interface (UI), including: 

* Memory optimization&mdash;The creation of a rich custom UI control is bound to creating a huge number of properties most of which are used with default values. With the traditional approach you end up with a **private field** for every property. With dependency properties, you only store the instance properties that you modified. The default values are stored within the dependency property. Additionally, dependency properties are declared statically outside the class, which further helps optimize the memory footprint.
* Value validation&mdash;Dependency properties offer business logic validation. It is implemented as a dedicated validation callback function that takes `newValue` as parameter and returns true or false if the value is valid or not respectively.
* Change notification&mdash;Another callback function is called when the property value changes. It is called with an [EventData](./ApiReference/data/observable/EventData.md) as parameter.
* Inheritance&mdash;One of the most important features of dependency properties is inheritance. It is implemented through a dedicated UI element (such as Button) option that allows it to get its property from a parent element in the visual tree. For example a button can inherit its style (or theme) property value from the parent Window, Layout, or another container. This gives you the option to dramatically change the look of your entire application by only changing a single setting (Window.theme).

### Declaring a Dependency Property

Only classes that derive from [DependencyObservable](./ApiReference/ui/core/dependency-observable/DependencyObservable.md) can have a dependency property. This class has built-in methods that support the entire infrastructure of dependency properties.

The code that follows creates a bare-bones property which adds a static part compared to a standard property implementation.

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



### Adding a Changed Callback

The following code example demonstrates how to implement change notification. It adds a callback function `onMyPropertyChanged` that prints a message about a change in a property.

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

### Adding a Validation Callback

The following code example demonstrates how to implement Value validation. It adds a callback function `validateMyProperty` that takes the new property value and validates it using a simple rule.



``` JavaScript
var dependencyObservable = require("ui/core/dependency-observable");
function validateMyProperty(value) {
  if (value > 0) {
    return true;
  }
  return false;
}
exports.myPropertyProperty = new dependencyObservable.Property("myProperty", "MyClass",
    new dependencyObservable.PropertyMetadata("",
        dependencyObservable.PropertyMetadataOptions.None, null, validateMyProperty));
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

### Creating an Inheritable Dependency Property

The following code example demonstrates how to create an inheritable dependency property:

``` JavaScript
var dependencyObservable = require("ui/core/dependency-observable");
exports.myPropertyProperty = new dependencyObservable.Property("myProperty", "MyClass",
    new dependencyObservable.PropertyMetadata("",
      dependencyObservable.PropertyMetadataOptions.Inheritable));
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

> Creating an inheritable property is relatively simple (as seen in the example). However keep in mind that inheritance only occurs down the visual tree. Setting a property to a non-visual element does not allow for inheritance.

## Style Properties

This sections includes these topics:

* [Setting a Style Property](#setting-a-style-property)
* [Creating a custom style property](#creating-a-custom-style-property)

### Introduction

Probably the best use case for inheritable properties is applying different styles and themes to UI components. You only need to set a property (theme or style) to the base-most container and every single UI component inherits it through the visual tree.

### Setting a Style Property

Setting a style property is similar to setting a regular property but you use the nested `style` object (that is a property of the View class which means that every UI component has style).

#### Setting in Code

To set a style property in your code:

``` JavaScript
var color = require("color");
someButton.style.backgroundColor = new color.Color("red");
```
``` TypeScript
import color = require("color");
someButton.style.backgroundColor = new color.Color("red");
```

#### Setting in CSS

To set a style property in your CSS:

``` JavaScript
someButton.id = "someButton";
someButton.css = "#someButtton {background-color: red}";
```
``` TypeScript
someButton.id = "someButton";
someButton.css = "#someButtton {background-color: red}";
```

### Creating a Custom Style Property

If you ever need to create a custom style property you can do so by taking these steps:

#### Declare the Custom Style Property

``` JavaScript
var styleProperty = require("ui/styling/style-property");
var depObservable = require("ui/core/dependency-observable");

exports.fontFamilyProperty = new styleProperty.Property("fontFamily", "font-family",
    new depObservable.PropertyMetadata(undefined, depObservable.PropertyMetadataOptions.AffectsMeasure),
    null);
```
``` TypeScript
import styleProperty = require("ui/styling/style-property");
import depObservable = require("ui/core/dependency-observable");

export var fontFamilyProperty = new styleProperty.Property("fontFamily", "font-family",
    new depObservable.PropertyMetadata(undefined, depObservable.PropertyMetadataOptions.AffectsMeasure),
    null);
```

Notice that style properties differ from normal properties. In fact the `styleProperty.Property` class inherits from `depObservable.Property` and adds the option for setting the property using CSS (the constructor's second parameter).


#### Register a Handler for the Custom Property

The second step is to register a handler object (`StylePropertyChangedHandler`) that synchronizes the property value and the underlying native object. To create the handler you provide methods for **setting**, **resetting**, and **getting the native object**. The set method sets a value to the native object. The reset method restores the default value of the native object. The final method takes the default value.

For convenience, the code can be wrapped in a class called `Styler` that inherits an interface (currently solely for better readability) also called `Styler`. It has a single method that implements `registerHandlers`, where you register handlers for all properties defined in Styler.

``` JavaScript
var styles = require("ui/styling");

var MyTextViewStyler = (function () {
    function MyTextViewStyler() {
    }
    MyTextViewStyler.setFontFamilyProperty = function (view, newValue) {
        if (view.android) {
            view.android.setTypeface(android.graphics.Typeface.create(newValue,
              android.graphics.Typeface.NORMAL));
        }
        else if (view.ios) {
            var fontSize = view._nativeView.titleLabel.font.pointSize;
            view._nativeView.titleLabel.font = UIFont.fontWithNameSize(newValue, fontSize);
        }
    };
    MyTextViewStyler.resetFontFamilyProperty = function (view, nativeValue) {
        if (view.android) {
            view.android.setTypeface(android.graphics.Typeface.create(nativeValue,
              android.graphics.Typeface.NORMAL));
        }
        else if (view.ios) {
            var fontSize = view._nativeView.titleLabel.font.pointSize;
            view._nativeView.titleLabel.font = UIFont.fontWithNameSize(nativeValue, fontSize);
            ;
        }
    };
    MyTextViewStyler.registerHandlers = function () {
        styles.stylers.registerHandler(exports.fontFamilyProperty,
          new styles.stylers.StylePropertyChangedHandler(MyTextViewStyler.setFontFamilyProperty,
          MyTextViewStyler.resetFontFamilyProperty, MyTextViewStyler.getNativeFontFamilyValue), "MyButton");
    };
    MyTextViewStyler.getNativeFontFamilyValue = function (view) {
        if (view.android) {
            return view.android.getTypeface();
        }
        else if (view.ios) {
            return view._nativeView.titleLabel.font.fontName;
        }
        return null;
    };
    return MyTextViewStyler;
})();
exports.MyTextViewStyler = MyTextViewStyler;
```
``` TypeScript
import styles = require("ui/styling");

export class MyTextViewStyler implements styles.stylers.Styler {
    public static setFontFamilyProperty(view: view.View, newValue: any) {
        if (view.android) {
            (<android.widget.TextView>view.android).setTypeface(android.graphics.Typeface.create(newValue,
              android.graphics.Typeface.NORMAL));
        }
        else if (view.ios) {
            var fontSize = (<UIButton>view._nativeView).titleLabel.font.pointSize;
            (<UIButton>view._nativeView).titleLabel.font = UIFont.fontWithNameSize(newValue, fontSize);
        }
    }

    public static resetFontFamilyProperty(view: view.View, nativeValue: any) {
        if (view.android) {
            (<android.widget.TextView>view.android).setTypeface(android.graphics.Typeface.create(nativeValue,
              android.graphics.Typeface.NORMAL));
        }
        else if (view.ios) {
            var fontSize = (<UIButton>view._nativeView).titleLabel.font.pointSize;
            (<UIButton>view._nativeView).titleLabel.font = UIFont.fontWithNameSize(nativeValue, fontSize);;
        }
    }

    public static getNativeFontFamilyValue = function (view: view.View): any {
        if (view.android) {
            return (<android.widget.TextView>view.android).getTypeface();
        }
        else if (view.ios) {
            return (<UIButton>view._nativeView).titleLabel.font.fontName;
        }
        return null;
    }

    public static registerHandlers() {
        styles.stylers.registerHandler(fontFamilyProperty, new styles.stylers.StylePropertyChangedHandler(
            MyTextViewStyler.setFontFamilyProperty,
            MyTextViewStyler.resetFontFamilyProperty,
            MyTextViewStyler.getNativeFontFamilyValue), "MyButton");
    }
}
```

Important part of this class is the call to the static method `styles.stylers.registerHandler` which registers `styles.stylers.StylePropertyChangedHandler` with a property. The third optional parameter indicates objects of what class is to react to a change in the property value. Derived classes also receive the same behaviour.

#### Use the New Custom Property

``` JavaScript
var stackLayoutDef = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var pages = require("ui/page");

var MyButton = (function (_super) {
    __extends(MyButton, _super);
    function MyButton() {
        _super.apply(this, arguments);
    }
    return MyButton;
})(buttonModule.Button);
exports.MyButton = MyButton;
MyTextViewStyler.registerHandlers();
function createPage() {
    var layout = new stackLayoutDef.StackLayout();
    var btn = new MyButton();
    btn.text = "The quick brown fox jumps over the lazy dog.";
    btn.id = "btn";
    var btn1 = new MyButton();
    btn1.text = "The quick brown fox jumps over the lazy dog.";
    btn1.id = "btn1";
    var btn2 = new buttonModule.Button();
    btn2.text = "The quick brown fox jumps over the lazy dog.";
    layout.addChild(btn);
    layout.addChild(btn1);
    layout.addChild(btn2);
    var page = new pages.Page();
    page.css = "#btn {font-family: Courier New} #btn1 {font-family: Times New Roman} #btn2 {color: yellow}";
    page.content = layout;
    return page;
}
exports.createPage = createPage;
```
``` TypeScript
import stackLayoutDef = require("ui/layouts/stack-layout");
import buttonModule = require("ui/button");
import pages = require("ui/page");

export class MyButton extends buttonModule.Button {

}

MyTextViewStyler.registerHandlers();

export function createPage() {
    var layout = new stackLayoutDef.StackLayout();

    var btn = new MyButton();
    btn.text = "The quick brown fox jumps over the lazy dog.";
    btn.id = "btn";

    var btn1 = new MyButton();
    btn1.text = "The quick brown fox jumps over the lazy dog.";
    btn1.id = "btn1";

    var btn2 = new buttonModule.Button();
    btn2.text = "The quick brown fox jumps over the lazy dog.";

    layout.addChild(btn);
    layout.addChild(btn1);
    layout.addChild(btn2);

    var page = new pages.Page();
    page.css = "#btn {font-family: Courier New} #btn1 {font-family: Times New Roman} #btn2 {color: yellow}";
    page.content = layout;
    return page;
}
```
