---
nav-title: "NativeScript Properties"
title: "Properties"
description: "NativeScript Documentation: Properties"
position: 13
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

* Creating an inheritable dependency property

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

> Creating an inheritable property is relatively simple (as seen in the previous example). However keep in mind that the **inheritance** magic only happens through the **visual tree**. Thus, setting such a property to a non visual element will not work as expected.

#Style properties

Maybe the best use case of inheritable properties is applying different styles and themes. The task is limited to setting a property (theme or style) of the most base container and every single UI component will inherit it via visual tree.

##Setting a style property

Setting style properties is no different than setting a regular property, just use the nested **style** object (within View class which means that every UI component has style).

* Via code

``` JavaScript
var color = require("color");
someButton.style.backgroundColor = new color.Color("red");
```
``` TypeScript
import color = require("color");
someButton.style.backgroundColor = new color.Color("red");
```

* Via css

``` JavaScript
someButton.id = "someButton";
someButton.css = "#someButtton {background-color: red}";
```
``` TypeScript
someButton.id = "someButton";
someButton.css = "#someButtton {background-color: red}";
```

##Creating a custom style property

Even that setting a custom value to a style property is not a big deal, creating a custom style property is a little bit more complicated. The process of creation of a custom style property contains several easy steps.

* Declaring a custom style property

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

Careful reader will notice that style properties are special kind of properties. In fact **styleProperty.Property** class inherits from **depObservable.Property** class and adds the option for setting this property via css (second parameter in constructor). Second step is to register hadler (StylePropertyChangedHandler) object which will take care about synchronization of the property value with the underlying native object. In order to create such handler we should provide methods for **setting**, **resetting** and **getting the native**. First method will be used to set a value to the native object, reset method will be used to restore the default value of the native object and this default value is taken by the third method. For convinience this code could be wrapped in a class called **Styler**. NativeScript provides interface (for now only for better readability) called **Styler**. This interface has only one method to implement **registerHandlers** - here handlers for all properties defined in this Styler should be registered.

* Register a handler for the custom property

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

The important part of this class is the call to the static method **styles.stylers.registerHandler** which registeres **styles.stylers.StylePropertyChangedHandler** with a property. The third optional parameter indicates which class should react on a change of the new property value (in fact every inheritor class will react on changes).

* Using the new custom property

``` JavaScript
var stackPanelDef = require("ui/panels/stack-panel");
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
    var panel = new stackPanelDef.StackPanel();
    var btn = new MyButton();
    btn.text = "The quick brown fox jumps over the lazy dog.";
    btn.id = "btn";
    var btn1 = new MyButton();
    btn1.text = "The quick brown fox jumps over the lazy dog.";
    btn1.id = "btn1";
    var btn2 = new buttonModule.Button();
    btn2.text = "The quick brown fox jumps over the lazy dog.";
    panel.addChild(btn);
    panel.addChild(btn1);
    panel.addChild(btn2);
    var page = new pages.Page();
    page.css = "#btn {font-family: Courier New} #btn1 {font-family: Times New Roman} #btn2 {color: yellow}";
    page.content = panel;
    return page;
}
exports.createPage = createPage;
```
``` TypeScript
import stackPanelDef = require("ui/panels/stack-panel");
import buttonModule = require("ui/button");
import pages = require("ui/page");

export class MyButton extends buttonModule.Button {

}

MyTextViewStyler.registerHandlers();

export function createPage() {
    var panel = new stackPanelDef.StackPanel();

    var btn = new MyButton();
    btn.text = "The quick brown fox jumps over the lazy dog.";
    btn.id = "btn";

    var btn1 = new MyButton();
    btn1.text = "The quick brown fox jumps over the lazy dog.";
    btn1.id = "btn1";

    var btn2 = new buttonModule.Button();
    btn2.text = "The quick brown fox jumps over the lazy dog.";

    panel.addChild(btn);
    panel.addChild(btn1);
    panel.addChild(btn2);

    var page = new pages.Page();
    page.css = "#btn {font-family: Courier New} #btn1 {font-family: Times New Roman} #btn2 {color: yellow}";
    page.content = panel;
    return page;
}
```
