---
nav-title: "Objective-C Classes"
title: "Objective-C Classes"
description: "Describes how Objective-C classes are exposed."
position: 0
---

# Objective-C Classes
Objective-C classes are exposed as JavaScript classes. Each Objective-C class is presented by a pair of corresponding JavaScript constructor function and a prototype object.

The methods declared in the Objective-C classes are exposed:
  * If static - on the JavaScript constructor function
  * If instance - on the JavaScript prototype object

For Objective-C properties, JavaScript property descriptors are declared on the prototype object.

## Prototype Chain
The prototype chain of the JavaScript objects matches the inheritance chain of the represented Objective-C classes. For example:

```objective-c
@interface NSObject
+ (instancetype)alloc;
- (instancetype)init;
@end

@interface BaseClass : NSObject
+ (void)baseStaticMethod;
- (void)baseInstanceMethod;
@end

@interface DerivedClass : BaseClass
+ (void)derivedStaticMethod;
- (void)derivedInstanceMethod;
@end
```

Will generate the following JavaScript inheritance chain:

```javascript
function NSObject() { /* native call */ };
// Object.getPrototypeOf(NSObject) === Function.prototype
NSObject.alloc = function () { /* native call */ };

// Object.getPrototypeOf(NSObject.prototype) === Object.prototype
NSObject.prototype.init = function () { /* native call */ };

function BaseClass() { /* native call */ };
Object.setPrototypeOf(BaseClass, NSObject);
BaseClass.baseStaticMethod = function () { /* native call */ };

BaseClass.prototype = Object.create(NSObject.prototype, { constructor: BaseClass });
BaseClass.prototype.baseInstanceMethod = function () { /* native call */ };

function DerivedClass() { /* native call */ };
Object.setPrototypeOf(DerivedClass, BaseClass);
DerivedClass.derivedStaticMethod = function () { /* native call */ };

DerivedClass.prototype = Object.create(NSObject.prototype, { constructor: DerivedClass });
DerivedClass.prototype.derivedInstanceMethod = function () { /* native call */ };
```

### JavaScript `instanceof` Opereator
You can use the JavaScript [`instanceof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) to see if an object inherits from a given class:
```javascript
var object = DerivedClass.alloc().init();
console.log(object instanceof DerivedClass); // true
console.log(object instanceof BaseClass); // true
console.log(object instanceof NSObject); // true
console.log(object instanceof Object); // true
```

## Instantiating Objects

### `alloc`, `init` or `new`
Objective-C instances are created using:
```objective-c
UIView *view1 = [[UIView alloc] init];
// Or with the short-cut
UIView *view2 = [UIView new];
```

Which is exposed as:
```javascript
var view1 = UIView.alloc().init();
// Or with the short-cut
var view2 = UIView.new();
```

### JavaScript `new` Operator
The [`new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) used with JavaScript constructor function for Objective-C class will try to match an appropriate initializer based on the number and types of the arguments. However when a class has more complex initializers, it is impossible to unambiguously select one at runtime. So we would like to discourage you from using `new`, but still in some simple cases it is more convenient:

```javascript
// Will call UIView.alloc().init();
var view1 = new UIView();

// Will call UIView.alloc().initWithFrame(...)
var view2 = new UIView(CGRectMake(10, 10, 200, 100));
```

## Methods
When Objective-C methods are exposed in JavaScript, we remove the colons from their names (selector), and then upper-case the letters following the removed colons.

For example:
```objective-c
@interface UIAlertView : UIView
- (void)dismissWithClickedButtonIndex:(NSInteger)buttonIndex animated:(BOOL)animated;
@end
```
Will form the following JavaScript instance method:
```javascript
var instance = UIAlertView.alloc().init();
instance.dismissWithClickedButtonIndexAnimated(0, true);
```

### Static Methods
Static methods are exposed in JavaScript as functions that call the underlying native methods. They are defined as properties on the constructor function. Since the constructor functions of derived classes have for prototype their base class constructor function, static methods are inherited.

For example:
```objective-c
@interface BaseClass : NSObject
+ (void)baseStaticMethod;
@end

@interface DerivedClass : BaseClass
+ (void)derivedStaticMethod;
@end
```

You can call them in JavaScript:
```javascript
BaseClass.baseStaticMethod();

DerivedClass.baseStaticMethod();
DerivedClass.derivedStaticMethod();
```

If `DerivedClass` overrides `baseStaticMethod` the correct override will be called, even if it is not declared in the header.

### Instance Methods
Instance methods are exposed in JavaScript as functions that call the underlying native methods. They are defined as properties on the prototype object. Since the prototype objects of derived classes have for prototype their base class' prototype, instance methods are inherited.

For example:
```objective-c
@interface BaseClass : NSObject
- (void)baseInstanceMethod;
@end

@interface DerivedClass : BaseClass
- (void)derivedInstanceMethod;
@end
```

You can call them in JavaScript:
```javascript
var baseInstance = BaseClass.alloc().init();
baseInstance.baseInstanceMethod();

var derivedInstance = DerivedClass.alloc().init();
derivedInstance.baseInstanceMethod();
derivedInstance.derivedInstanceMethod();
```

If `DerivedClass` overrides `baseInstanceMethod` the correct override will be called, even if it is not declared in the header.

## Properties
Objective-C properties are exposed as JavaScript property descriptors. For example consider the JavaScript objects generated for the following Objective-C interface:
```objective-c
@interface UIAlertView
@property (class) NSString *layerClass;
@property (nonatomic, copy) NSString *title;
@end
```

The `UIAlertView` constructor function will have a property `layerClass` that when get or assigned will call the native Objective-C getter and setter methods. Similarly the `UIAlertView` prototype will have a `title` property:

```javascript
Object.defineProperty(UIAlertView, "layerClass", {
    get: function () { /* native call */ },
    set: function (newLayerClass) { /* native call  */ }
});

Object.defineProperty(UIAlertView.prototype, "title", {
    get: function () { /* native call */ },
    set: function (newTitle) { /* native call  */ }
});
```

You can use it in JavaScript:
```javascript
console.log(UIAlertView.layerClass); // The layer class of UIAlertView

var instance = UIAlertView.alloc.init();
instance.title = "The title";
console.log(instance.title); // "The title"
```

In Objective-C the getter methods by default have the name of the property and the setter methods have for name, the property name prefixed with "set". Because of the collisions the getter and setter methods for properties are not exposed as JavaScript functions.

```objective-c
@interface UIAlertView
- (NSString *)title;
- (void)setTitle:(NSString *)newTitle;
@end
```

In Objective-C you can specify custom getter/setter method names. In this case the specified getter/setter methods will be called by the property descriptor and are not exposed in JavaScript.

## Inheriting Native Classes in JavaScript
[You can subclass Objective-C classes in JavaScript.](../how-to/ObjC-Subclassing.md)
