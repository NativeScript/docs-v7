---
title: FAQ
description: A list of frequently asked NativeScript questions and answers
position: 8
slug: faq
previous_url: /faq
---

# NativeScript FAQ

### How do I upgrade to the latest version of NativeScript?

The [NativeScript Upgrade Instructions]({% slug upgrade-instructions %}) will help you to upgrade your project to the latest version of NativeScript.

### How do I check which version of NativeScript does my project use?

Open your app’s `package.json` file and check the version of the `"tns-core-modules"` dependency.

### How do I check whether my JavaScript runs in NativeScript?

NativeScript registers some objects on the global context. The simplest way to detect whether your code runs within a NativeScript context is the following check:

```javascript
if (typeof global !== 'undefined' && (global.android || global.NSObject)) {
    // This is NativeScript!
}
```

### What Android API level does NativeScript target?

The NativeScript Android runtime is built against Android API level 21; therefore, APIs from higher API levels are not supported through JavaScript.

### How do I add a navigation bar to my iOS app?

You can use the [`<ActionBar>` UI widget](http://docs.nativescript.org/ApiReference/ui/action-bar/HOW-TO).
