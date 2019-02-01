---
title: "markingMode:none"
description: "Things to consider when using markingMode:none in your NativeScript mobile app"
position: 4
slug: marking-mode-none
---

> **WARNING**:  Use caution when enabling this option and make sure to thoroughly test your apps with different memory constrains and devices! In this mode NativeScript does not take care of the lifetime of Java instances and unexpected and unpredictable crashes can occur due to Java instances being prematurely collected. The errors generated in such cases look like this:
`Error: com.tns.NativeScriptException: Attempt to use cleared object reference id=<some-object-id-number>`

# Introduction

Starting with NativeScript 3.2, a new (experimental at the time) feature was added to the Android runtime called `markingMode`. Its purpose is to speed up garbage collection in the V8 engine. In some cases, a GC pass could take from 0.5 to 1 second and since it runs on the main UI thread, the user would experience a frozen app until GC is done. Setting “markingMode” to “none” will speed up the garbage collection greatly, so it would be less noticeable (if at all) to the app user. The downside of this is that some JavaScript objects would be garbage collected while still in use, because they are referenced only from native code and the eyes of the V8 GC, no JS object holds reference to them. In other words – the objects are no longer “marked” as used and the V8 GC might collect them too early.

The code inside `tns-core-modules` and all plugins published by the NativeScript Team (since version 5.1.0) are written in such a way, that it does not depend on the scope to keep those Java instances alive. This makes apps using these plugins fully compatible with the much more performant `markingMode: "none"` option.


## Benefits and drawbacks of setting markingMode to none

The biggest benefit of setting `markingMode` to `none` is a more responsive app – an app that does not slow down if you use it for an extended amount of time. 
The main drawbacks are:
- It is up to the plugin developer to manage the plugin-related memory correctly. Not all plugins support the feature and might crash the app with an "cleared reference" exception.
- It is up to the app developer to manage the app memory correctly. The app code itself might also need to be updated in order to keep JS object references and prevent unwanted collection.

## Updating an app or a plugin to support `markingMode: none`

First, to instruct any app to use this feature we need to add the following in the [Android-specific custom flags(app/package.json)](./custom-flags):

```json
"android": {
  "markingMode": "none",
}
```
If the app behaves correctly after this change - great. If, however, some sporadic errors occur, especially related to memory management ("Attempt to use cleared object reference" etc), additional work has to be done. Have in mind the problem could be either in the app code, or in some plugin(s) used by the app. In both cases the resolution is identical.

### Let’s start with an example

```javascript
var implementor = new android.native.Implementor();     // native class
  var callback = new android.native.NCallback({         // native interface
    getMessage: function () {
        implementor.getMessage();
    }
});
android.native.Executor.printWithDelay(callback, 3s);
```

The implementor is enclosed by the callback implementation, but with `markingMode: none` enabled we no longer take care of finding that connection out. So, when GC happens in V8 the `implementor` instance is GC'ed. This can cause its Java counterpart instance to be collected too early and upon calling of the `callback` an "Attempt to use cleared object reference" error is very likely to occur. 

### Solution

To fix the previous example you must keep implementor from being GC'ed, by attaching it to the global object (or some other long-lasting object, exported module or wherever you see fit) which is not being GC'ed ever. Below, the `implementor` is attached to `global` for the sake of the example:

```javascript
var implementor = new native.Implementor();
global.implementor = implementor;
var callback = new native.NCallback({
    getMessage: function () {
        global.implementor.getMessage();
    }
})
native.Executor.printWithDelay(callback, 3s);
```

Naturally, you must manage the lifecycle of the implementor and release it when it is no longer needed:

```javascript
global.implementor = null;
```

## Testing an app for `markingMode: none` related issues

`markingMode: none` applies to Android only, so testing for issues implies testing your app in Android Emulator or real Android device. Because bugs of this kind occur pretty randomly, there is not a single and universal way to find them. Below are some general tips on how to test/maintain an app:
- look for code fragments where native Java instances are created and ones in which these instances are used from inside event handlers, callbacks, functions of extended classes. Have in mind that in such cases if the JS instance reference becomes weak (i.e. garbage collectable), this can be a source of a problem. In such case make sure you make it strong, i.e. not collectable. Also make sure to dispose it when no longer needed.
Below are 2 possible solutions for some common cases:
    - {N} View classes - any native views or listeners should be kept in private properties on your View class so the lifetime of its native objects will be tied to the JavaScript View instance.
    - listeners - like the example above - store any native instances in the global scope if you need it to be accessed from callbacks, closures, etc.
- [monkey testing](https://developer.android.com/studio/test/monkey) - this is a CLI-based way of testing your apps by generating random events like clicks, gestures, etc. It is best to pin your app before starting the monkey test. Thus "the monkey" will interact only with the app and not with the whole OS.
Example command to start testing:
```sh
adb shell monkey --throttle 200 40000
```
To stop the monkey:
```sh
adb shell ps | awk '/com\.android\.commands\.monkey/ { system("adb shell kill " $2) }'
```
In order to unpin a pinned app:
```sh
adb shell am task lock stop
```

## Summary

Every native object instantiated in JS/TS, like:

```javascript
var implementor = new android.native.Implementor();
```

... and which is also enclosed by a function of an extended class, event handler, etc:

```javascript
...
getMessage: function() {
    implementor.getMessage();
}
...
```

... needs to be managed by the developer. You should decide when it is not needed any more and can be let go for GC.