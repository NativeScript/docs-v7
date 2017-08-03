---
nav-title: "Accessing APIs"
title: "Accessing APIs"
description: "NativeScript Android Runtime Metadata API Access"
position: 1
---

# Packages

The [Android packages](https://developer.android.com/reference/packages.html) are available in the JavaScript's global context and are the entry point for accessing Android APIs. For example:

* [java.lang](http://developer.android.com/reference/java/lang/package-summary.html)
* [android](http://developer.android.com/reference/android/package-summary.html)
* [android.view](http://developer.android.com/reference/android/view/package-summary.html)
* etc.

The above is accessed in JavaScript like:

```javascript
var javaLangPkg = java.lang;
var androidPkg = android;
var androidViewPkg = android.view;
```

> **Note:** You may not use APIs that are not present in the metadata. By default, if `--compileSdk` argument isn't provided while building, metadata will be built for the latest Android [Platform SDK](https://developer.android.com/about/versions/nougat/index.html) installed on the workstation.

# Proxies
The JavaScript objects that lie behind the Android APIs are called *Proxies*. There are two types of proxies:

### Package Proxy
Provides access to the classes, interfaces, constants and enumerations within each package.

### Class Proxy
Represents a thin wrapper over a class or an interface and provides access to its methods and fields. From a JavaScript perspective this type of proxy may be considered as a constructor function. For example `android.view.View` is a class proxy.

# Instance Methods/Fields
Class proxies may be instantiated much like in Android:

```javascript
var file = new java.io.File("/path/to/myfile.txt");
```

The result of the call will create a native java.io.File instance on the Android side and a special hollow Object on the JavaScript side. This special object knows how to invoke methods and access fields on the corresponding native instance. For example we may retrieve the path value of the above created `File` using the corresponding `File` class API like:

```javascript
var path = file.getPath();
```
# Static Methods/Fields
Using a Class Proxy you may access the static methods/fields exposed by a type:

```javascript
var filePathDelimiter = java.io.File.separator;
var pathSeparator = java.io.File.pathSeparator;
```

# See Also
* [Execution Flow](../advanced-topics/execution-flow.md)
