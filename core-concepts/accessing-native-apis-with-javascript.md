---
title: Accessing Native APIs with JavaScript
description: Learn how to access native APIs in NativeScript
position: 100
slug: access-native-apis
---

# Overview

NativeScript lets you access all native APIs from the underlying platform. To achieve this behaviour, many things happen under the hood. One of them is marshalling - the conversion between JavaScript and Objective-C data types for iOS and Java data types for Android.

In this article, you will learn how to call native APIs from JavaScript with various data types parameters. For more information, see the platform-specific resources about data conversion in the [iOS Runtime](./../runtimes/ios/marshalling/Marshalling-Overview.md) and [Android Runtime](./../runtimes/android/marshalling/overview.md) sections.

# Numeric Types

All native numeric types (e.g., char, short, int, double, float on iOS and byte, short, int, long, double, float on Android) are implicitly converted to JavaScript number and vice versa. For example, when you run the following code on Android:

```javascript
// iOS
console.log('pow(2.5, 3) = ', pow(2.5, 3));
```

the iOS Runtime converts the JavaScript number literals to native doubles and passes them to the native `pow(double x, double y)` function. The returned native integer is automatically converted to a JavaScript number and passed to `console.log()`. The same is valid for Android:

```javascript
// Android
console.log('min(3, 4) = ', java.lang.Math.min(3, 4));
```

The native `java.lang.Math.min()` method expects two integers. The Android Runtime knows the signature of `java.lang.Math.min()` function and translates the literals `3` and `4` to their representation in a Java integer data type. The returned integer is also automatically translated to a JavaScript number and passed to `console.log()`.

# Classes and Objects

All native classes are represented in the JavaScript world by a constructor function. Each static method on a native class becomes a function on its JavaScript constructor function and each instance method becomes a function on the JavaScript prototype. When executing this code on iOS:

```javascript
// iOS
var array = new NSMutableArray();
array.addObject(new NSObject());
```

the iOS Runtime calls `[[NSMutableArray alloc] init]` and the returned native object is converted to a JavaScript object wrapper (proxy object) and assigned to `array1`. The wrapper has all instance methods of `NSMutableArray` (and its predecessor) in its prototype chain, so they can be called from JavaScript. Method names are slightly changed in order to be more convenient to use from JavaScript (e.g., `setObject:atIndexedSubscript:` is named `setObjectAtIndexedSubscript()` in JavaScript). The same is valid for Android:

```javascript
// Android
var context = ...;
var button = new android.widget.Button(context);
button.setText("My Button"); // "My Button" is converted to java.lang.String
```

# String

JavaScript strings are implicitly marshalled to `java.lang.String` on Android and `NSString` on iOS and vice versa.

```javascript
// iOS
var button = new UIButton();
button.setTitleForState('Button title', UIControlStateNormal); // 'Button title' is converted to NSString
console.log(button.titleLabel.text); // The returned NSString is converted to JavaScript string
```

```javascript
// Android
var file = new java.io.File('myfile.txt'); // 'myfile.txt' is converted to java.lang.String
```

The exception to this are the methods on `NSString` classes declared as returning `instancetype` - init methods and factory methods. This means that a call to `NSString.stringWithString` whose return type in Objective-C is `instancetype` will return a wrapper around a `NSString` instance, rather than a JavaScript string.

> Exception: Methods on `NSString` classes declared as returning `instancetype` (e.g., init methods and factory methods). For example, calls to `NSString.stringWithString` return `instancetype` results in Objective-C. In your NativeScript code, such calls will return a wrapper around a `NSString` instance instead of a JavaScript string.

# Boolean

JavaScript boolean values are implicitly marshalled to `boolean` on Android and `BOOL` on iOS and vice versa.

```javascript
// iOS
var str = NSString.stringWithString('YES');
var isTrue = str.boolValue();
```

```javascript
// Android
var str = new java.lang.String('Hello world!');
var result = str.endsWith('world!');
console.log(result); // true
```

# Array

JavaScript arrays map to specialized Java arrays on Android and `NSArray` on iOS.

```javascript
// iOS
// nsArray is not a JavaScript array but a JavaScript wrapper around a native NSArray
var nsArray = NSArray.arrayWithArray(['Four', 'Five', 'Two', 'Seven']);
var jsArray = ['One', 'Two', 'Three']; // pure JavaScript array
var firstCommon = nsArray.firstObjectCommonWithArray(jsArray);
console.log(firstCommon); // Two
```

The following code snippet shows how to call a `ns.example.Math.minElement(int[] array)` from JavaScript:

```javascript
// Android
var numbers = [3, 6, 19, -2, 7, 6];
var min = ns.example.Math.minElement(numbers); // -2
```

# Undefined & Null

JavaScript [Undefined](http://www.w3schools.com/jsref/jsref_undefined.asp) & [Null](http://www.w3schools.com/js/js_datatypes.asp) map to Java null pointer and Objective-C nil. Native null values map to JavaScript null.

```javascript
// iOS
console.log(NSStringFromClass(null)); // null
```

```javascript
// Android
var context = ...;
var button = new android.widget.Button(context);
button.setOnClickListener(undefined); // the Java call will be made using the null keyword
```

# See Also
* [Marshalling in Android Runtime](./../runtimes/android/marshalling/overview.md)
* [Marshalling in iOS Runtime](./../runtimes/ios/marshalling/Marshalling-Overview.md)

