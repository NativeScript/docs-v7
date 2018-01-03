---
nav-title: "Overview"
title: "Overview"
description: "NativeScript Android Runtime Overview"
position: 1
previous_url: /getting-started/hello-world
---

# What is Android Runtime for NativeScript?
NativeScript is a framework which enables developers to write truly native mobile applications for Android and iOS using JavaScript and CSS. Each mobile platform has its own ecosystem and offers completely different development tools and language(s) - Java for Android and Objective C (Swift) for iOS. In order to translate JavaScript code to the corresponding native APIs some kind of proxy mechanism is needed. This is exactly what the "Runtime" parts of NativeScript are responsible for. The Android Runtime may be thought of as "The Bridge" between the JavaScript and Android worlds. A NativeScript application for Android is a standard native package (apk) which besides the JavaScript files embed the runtime as well.

## Building Blocks
![Android Runtime Diagram](../../img/ns-runtime-android.png)

The Android Runtime is built on top of the following major modules:

### Google's V8 JavaScript Virtual Machine
It is responsible for the JavaScript code processing. A good analogy may be made with the way Node.js processes JavaScript and translates it to the underlying system APIs. We are handling each getter/setter on JavaScript objects and dynamically call Android APIs when needed. The virtual machine is loaded in the application's process and operates on the main UI thread. V8 uses the JIT (Just-In-Time) compilation technique to process JavaScript code.

### Metadata
This is our own custom data format for listing the Android APIs we are aware of (may process). It stores the minimal required information and provides small size and highly efficient read access. Some may wonder why we are not using the Java Reflection mechanism to lookup API signature at runtime. The answer is simple: reflection is slow as hell and simply may not be used, slowing down a simple application many times. The Metadata is pre-generated and embedded in the application package (apk). The generation process itself uses reflection to list all the available Android APIs hence it is slow and may not be dynamically executed.

### Dynamic Class Generator
It is one thing to call Android APIs and another to allow type inheritance and interface implementation. Imagine the following scenarios:

* ***Extend (Method Override)***
```javascript
var myObject = java.lang.Object.extend({
    hashCode: function(){
        // Generate unique hash
        return 0;
    }
});
```
* ***Interface Implementation***
```javascript
var clickListener = android.view.View.OnClickListener({
    onClick: function (view) {
        // Do something on click
    }
});
```

In these cases the Generator will dynamically create a Java class with the desired implementation, enabling method override and interface implementation. The generation process is highly optimized and adds insignificant overhead on top of application execution.

### Marshalling Service
Being two different worlds, JavaScript and Android use different types of data. For example, the java.lang.String differs from the JavaScript String object; same goes for the different numeric types in Java and the Number primitive in JavaScript. The Marshalling service takes care of data conversion to and from Java/JavaScript calls. Imagine the following code:

```javascript
// JavaScript string
var path = "/path/to/my/file";
// JavaScript string is converted to java.lang.String
var javaFile = new java.io.File(path);
// Name is converted from java.lang.String to JavaScript string
var name = javaFile.getName();
```

## See also
* [Google's V8](https://developers.google.com/v8/)
* [Metadata](./metadata/overview.md)
* [Class Generator](./generator/overview.md)
* [Data Marshalling](./marshalling/overview.md)
