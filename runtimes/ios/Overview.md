---
nav-title: "Overview"
title: "Overview"
description: "NativeScript iOS Runtime Overview"
position: 0
---

# What is iOS Runtime for NativeScript?
NativeScript is a framework which enables developers to write truly native mobile applications for Android and iOS using JavaScript and CSS. Each mobile platform has its own ecosystem and offers completely different development tools and language(s) - Java for Android and Objective C (Swift) for iOS. In order to translate JavaScript code to the corresponding native APIs some kind of proxy mechanism is needed. This is exactly what the "Runtime" parts of NativeScript are responsible for. The iOS Runtime may be thought of as "The Bridge" between the JavaScript and the iOS world. A NativeScript application for iOS is a standard native package (ipa) which besides the JavaScript files embed the runtime as well.

## Building Blocks
The iOS Runtime is built on top of the following major modules:

### Apple's JavaScriptCore (JSC) Virtual Machine
It is responsible for the JavaScript code processing. A good analogy may be made with the way Node.js processes JavaScript and translates it to the underlying system APIs. We are handling each getter/setter on JavaScript objects and dynamically call iOS APIs when needed. The virtual machine is loaded in the application's process and operates on the main UI thread. Apple does not allow JIT in AppStore Apps so the JIT is disabled in our build.

### Metadata
This is our own custom data format for listing the iOS APIs we are aware of (may process). It stores the minimal required information and provides small size and highly efficient read access. The iOS supports type introspection to some extent but along with the C APIs embedded all the way in the native APIs we had to store a lot of extra information. The Metadata is pre-generated at compile time from the SDK header files and embedded in the application package (ipa).

### Prototype Chain
For all Objective-C types we expose JavaScript objects that allow you to inherit, instantiate and interact with native objects from JavaScript.

So instantiation of UIView looks like:

```objective-c
UIView *view1 = [[UIView alloc] init];
// Or with the short-cut
UIView *view2 = [UIView new];
```

```javascript
var view1 = UIView.alloc().init();
// Or with the short-cut
var view2 = UIView.new();
```

### Marshalling Service
Being two different worlds, JavaScript and iOS use different types of data. For example, the NSString differs from the JavaScript String object; same goes for the different numeric types in iOS and the Number primitive in JavaScript. The Marshalling service takes care of data conversion to and from Objective-C/JavaScript calls.

## See also
* [Objective-C Classes](./types/ObjC-Classes.md)
* [Data Marshalling](./marshalling/Marshalling-Overview.md)
