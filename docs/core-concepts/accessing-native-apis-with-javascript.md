---
title: Accessing Native APIs through JavaScript
description: Learn how to access native iOS and Android APIs through JavaScript in a NativeScript App without writing any Objective-C/Swift or Java/Kotlin code
position: 80
slug: access-native-apis
---

# Accessing native iOS and Android APIs through JavaScript

In this article we are going through the basic concepts of how native APIs are accessed through JavaScript. Our focus is on how primitive types are mapped between JavaScript and the corresponding native platform. We then continue with explaining how complex objects are represented and accessed. At the end, we talk about TypeScript and the `tns-platform-declarations` add-on which gives you TypeScript definitions for the Android and iOS development platforms.

NativeScript lets you access all native APIs from the underlying platform. To achieve this behaviour, many things happen under the hood. One of them is marshalling - the conversion between JavaScript and Objective-C data types for iOS and Java data types for Android.

In this article, you will learn how to call native APIs from JavaScript with various data types parameters. For more information, see the platform-specific resources about data conversion in the [iOS Runtime](./ios-runtime/Marshalling-Overview.md) and [Android Runtime](./android-runtime/marshalling/overview.md) sections.

## Numeric Types

All native numeric types (e.g., char, short, int, double, float on iOS and byte, short, int, long, double, float on Android) are implicitly converted to JavaScript number and vice versa. For example, when you run the following code on iOS:

- iOS

```JavaScript
console.log(`pow(2.5, 3) = ${pow(2.5, 3)}`);
```
```TypeScript
console.log(`pow(2.5, 3) = ${pow(2.5, 3)}`);
```

the iOS Runtime converts the JavaScript number literals to native doubles and passes them to the native `pow(double x, double y)` function. The returned native integer is automatically converted to a JavaScript number and passed to `console.log()`. The same is valid for Android:

- Android

```JavaScript
console.log(`min(3, 4) = ${java.lang.Math.min(3, 4)}`);
```
```TypeScript
console.log(`min(3, 4) = ${java.lang.Math.min(3, 4)}`);
```

The native `java.lang.Math.min()` method expects two integers. The Android Runtime knows the signature of the function `java.lang.Math.min()` and translates the literals `3` and `4` to their representation in a Java integer data type. The returned integer is also automatically translated to a JavaScript number and passed to `console.log()`.

## String

JavaScript strings are implicitly marshalled to `java.lang.String` on Android and `NSString` on iOS and vice versa.

- iOS

```JavaScript
let button = new UIButton();
button.setTitleForState('Button title', UIControlStateNormal); // 'Button title' is converted to NSString
console.log(button.titleLabel.text); // The returned NSString is converted to JavaScript string
```
```TypeScript
let button = new UIButton();
button.setTitleForState('Button title', UIControlStateNormal); // 'Button title' is converted to NSString
console.log(button.titleLabel.text); // The returned NSString is converted to JavaScript string
```

- Android

```JavaScript
const file = new java.io.File('myfile.txt'); // 'myfile.txt' is converted to java.lang.String
```
```TypeScript
const file = new java.io.File('myfile.txt'); // 'myfile.txt' is converted to java.lang.String
```

The exception to this are the methods on `NSString` classes declared as returning `instancetype` - init methods and factory methods. This means that a call to `NSString.stringWithString` whose return type in Objective-C is `instancetype` will return a wrapper around a `NSString` instance rather than a JavaScript string.

> Exception: Methods on `NSString` classes declared as returning `instancetype` (e.g., init methods and factory methods). For example, calls to `NSString.stringWithString` return `instancetype` results in Objective-C. In your NativeScript code, such calls will return a wrapper around a `NSString` instance instead of a JavaScript string.

## Boolean

JavaScript boolean values are implicitly marshalled to `boolean` on Android and `BOOL` on iOS and vice versa.

- iOS

```JavaScript
let str = NSString.stringWithString('YES');
let isTrue = str.boolValue();
```
```TypeScript
let str = NSString.stringWithString('YES');
let isTrue = str.boolValue();
```

- Android

```JavaScript
let str = new java.lang.String('Hello world!');
let result = str.endsWith('world!');
console.log(result); // true
```
```TypeScript
let str = new java.lang.String('Hello world!');
let result = str.endsWith('world!');
console.log(result); // true
```

## Array

JavaScript arrays map to specialized Java arrays on Android and `NSArray` on iOS.

- iOS

```JavaScript
// nsArray is not a JavaScript array but a JavaScript wrapper around a native NSArray
let nsArray = NSArray.arrayWithArray(['Four', 'Five', 'Two', 'Seven']);
let jsArray = ['One', 'Two', 'Three']; // pure JavaScript array
let firstCommon = nsArray.firstObjectCommonWithArray(jsArray);
console.log(firstCommon); // Two
```
```TypeScript
// nsArray is not a JavaScript array but a JavaScript wrapper around a native NSArray
let nsArray = NSArray.arrayWithArray(['Four', 'Five', 'Two', 'Seven']);
let jsArray = ['One', 'Two', 'Three']; // pure JavaScript array
let firstCommon = nsArray.firstObjectCommonWithArray(jsArray);
console.log(firstCommon); // Two
```

- Android

The following code snippet shows how to call a `ns.example.Math.minElement(int[] array)` from JavaScript:

```JavaScript
let numbers = [3, 6, 19, -2, 7, 6];
let min = ns.example.Math.minElement(numbers); // -2
```
```TypeScript
let numbers = [3, 6, 19, -2, 7, 6];
let min = ns.example.Math.minElement(numbers); // -2
```

## Classes and Objects

All native classes are represented in the JavaScript world by a constructor function. Each static method on a native class becomes a function on its JavaScript constructor function and each instance method becomes a function on the JavaScript prototype. Although quite intuitive, instantiating objects and calling methods via JavaScript has some specifics (particularly on iOS) which are explained below.

### Working With Classes and Objects on iOS

Here is an example of how an instance of the `NSMutableArray` class is made and consumed in JavaScript:

```JavaScript
let array = new NSMutableArray();
array.addObject(new NSObject());
```
```TypeScript
let array = new NSMutableArray();
array.addObject(new NSObject());
```

This snippet creates an instance of `NSMutableArray` and adds an object to it using the `addObject(object)` method. Here is what happens behind the curtains: the `new NSMutableArray()` call is translated to a `[[NSMutableArray alloc] init]` call by the iOS Runtime. This instance is then wrapped in a JavaScript object and stored in the `array` variable. It contains all public properties and methods exposed by `NSMutableArray` (and its base classes) in its prototype chain. While the `addObject(object)` call is straightforward, calling Objective-C methods with more arguments follows several simple rules that define how Objective-C selectors are mapped to JavaScript functions. Let's consider the following `NSMutableArray` selector: `replaceObjectsInRange:withObjectsFromArray:range:`. In JavaScript it is represented by the following function: `replaceObjectsInRangeWithObjectsFromArrayRange(objectsToRange, souceArray, sourceRange)` (argument names are arbitraty). Note that the function name is generated by appending the names of the arguments as defined by the Objective-C selector by starting with a small letter for the first argument and appending each subsequent with a capital letter.

#### NSDictionary

You will most probably encounter methods accepting NSDictionary instances as parameters. There are few ways of creating an NSDictionary instance:

- Using `NSDictionary` and passing arrays for keys and values.

```JavaScript
let dict = new NSDictionary([".example.com", "cookieName", "/", "cookieValue"], [NSHTTPCookieDomain, NSHTTPCookieName, NSHTTPCookiePath,NSHTTPCookieValue]);
let cookie = NSHTTPCookie.cookieWithProperties(dict);
```
```TypeScript
let dict = new NSDictionary([".example.com", "cookieName", "/", "cookieValue"], [NSHTTPCookieDomain, NSHTTPCookieName, NSHTTPCookiePath,NSHTTPCookieValue]);
let cookie = NSHTTPCookie.cookieWithProperties(dict);
```

- Using JSON literals

```JavaScript
let cookie = NSHTTPCookie.cookieWithProperties({[NSHTTPCookieDomain]:".example.com", [NSHTTPCookieName]:"cookieName", [NSHTTPCookiePath]:"/", [NSHTTPCookieValue]:"cookieValue"});
```
```TypeScript
let cookie = NSHTTPCookie.cookieWithProperties({[NSHTTPCookieDomain]:".example.com", [NSHTTPCookieName]:"cookieName", [NSHTTPCookiePath]:"/", [NSHTTPCookieValue]:"cookieValue"});
```


In the second example we are passing a JSON literal to the method.**NSHTTPCookieDomain** is a variable and we need to use a [computed property name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) in order to have its value (otherwise we are getting *"NSHTTPCookieDomain"* as key).

### Working With Classes And Objects on Android

The following code snippet demonstrates how an instance of the `android.widget.Button` is created in JavaScript:

```JavaScript
let context = ...;
let button = new android.widget.Button(context);
button.setText("My Button"); // "My Button" is converted to java.lang.String
```
```TypeScript
let context = ...;
let button = new android.widget.Button(context);
button.setText("My Button"); // "My Button" is converted to java.lang.String
```

As you can see, the native Java types are exposed through their corresponding packages. In other words, to access a native Java type, you simply need to know the package it is contained in and explicitly state it. Native Java methods are accessed in the same way as regular JavaScript methods: by using the method identifier and supplying the required arguments. You can read more about Java packages on Android [here](https://docs.nativescript.org/runtimes/android/metadata/accessing-packages).

## Undefined and Null

JavaScript [Undefined](http://www.w3schools.com/jsref/jsref_undefined.asp) & [Null](http://www.w3schools.com/js/js_datatypes.asp) map to Java null pointer and Objective-C nil. Native null values map to JavaScript null.

- iOS

```JavaScript
console.log(NSStringFromClass(null)); // null
```
```TypeScript
console.log(NSStringFromClass(null)); // null
```

- Android

```JavaScript
let context = ...;
const button = new android.widget.Button(context);
button.setOnClickListener(undefined); // the Java call will be made using the null keyword
```
```TypeScript
let context = ...;
const button = new android.widget.Button(context);
button.setOnClickListener(undefined); // the Java call will be made using the null keyword
```

## IntelliSense and Access to the Native APIs via TypeScript

To have access and Intellisense for the native APIs, you have to add a developer dependency to `tns-platform-declarations`.

Steps to install and enable 

- `npm install tns-platform-declarations --save-dev`

 > **Note:** Always install the plugin as a `devDependency` (`npm i tns-platform-declarations --save-dev` flag) to avoid bringing the enormously big declaration files in the output built file.

- As of version 3.0.0 of NativeScript the newly created projects are shipped without `reference.d.ts` file.

Create `reference.d.ts` in the root project directory and add the following:
```
/// <reference path="node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="node_modules/tns-platform-declarations/ios.d.ts" />
```

 By default, the file `android.d.ts` comes with typings generated for API level 17. As an Android developer, you might need access to a specific class, method, or property introduced in a newer API level. The `tns-platform-declarations` plugin comes with generated typings for all API levels from 17 to 27 including the related typings from the respective support library. To use typings for a specific Android level replace the reference to the default declaration file with the preferred one. The files for each API level comes postfixed with a dash followed by the number of the API level (e.g. for API 21 the file is named `android-21.d.ts`).

For example, let's assume you are developing an application for API 21+ and you need typings generated for that API level:
 ```
 /// <reference path="node_modules/tns-platform-declarations/android-21.d.ts" />
 ```

 > **Note:** Proceed with caution when using functionalities introduced in newer API level. If you attemp
  to use a class, method, or property from a newer API level on a device with a lower API, the application will crash.

- Modify `tsconfig.json` to contain the following settings:
```
{
  "compilerOptions": {
    ...
    "lib": ["es6", "dom"],
    "baseUrl": ".",
    "paths": {
        "*": [
            "./node_modules/tns-core-modules/*",
            "./node_modules/*"
        ]
  }
}
```
Note that `d.ts` files require a lot of memory and CPU. Consider adding **skipLibCheck** option to `tsconfig.json`.
For more information visit the GitHub repository of [tns-platform-declarations](https://github.com/NativeScript/NativeScript/tree/master/tns-platform-declarations)


# See Also
* [Marshalling in Android Runtime](./../runtimes/android/marshalling/overview.md)
* [Marshalling in iOS Runtime](./../runtimes/ios/marshalling/Marshalling-Overview.md)
* [Accessing Java packages in Android Runtime](./../runtimes/android/metadata/accessing-packages.md)

