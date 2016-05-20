---
title: Breaking Changes
description: A list of breaking changes across the releases of the NativeScript framework and its tools.
position: 1
slug: breaking-changes
previous_url: /breaking-changes
---

# NativeScript Framework Breaking Changes

This help article describes the critical breaking changes and suggested workarounds, if any, in the NativeScript framework. You can find the complete list with all the changes in the respective [Github repositories](#see-also).

### 1.6.0 (2016, February 17)
- Up to v 1.6.0, the background drawable attribute of the buttons in Android was always replaced. To keep the consistency with the default platform-specific background, the attribute is not changed now and the button is only styled.

### 1.5.0 (2015, November 24)
- The XML namespace (xmlns) of the validator XSD schema changed from
    `xmlns="http://www.nativescript.org/tns.xsd"` to
    `xmlns="http://schemas.nativescript.org/tns.xsd"`.
    For convenience, the file can now be downloaded via the [same URL](http://schemas.nativescript.org/tns.xsd).
- [Automatic memory management of CoreFoundation functions marked with `CF_IMPLICIT_BRIDGING_ENABLED`](https://github.com/NativeScript/ios-runtime/pull/351). You should delete any `CFRelease()` calls on the result of `Create`/`Copy` functions.
- [Manual memory management of CoreFoundation functions not-marked with `CF_IMPLICIT_BRIDGING_ENABLED`](https://github.com/NativeScript/ios-runtime/pull/386). You should call `takeRetainedValue()`/`takeUnretainedValue()` on the result object of such functions. See the [docs](/runtimes/ios/marshalling/Marshalling-Overview#corefoundation-objects) for more info.

### 1.4.0 (2015, October 12)
-  [(#774)](https://github.com/NativeScript/NativeScript/issues/774) The Animation class no longer has a **finished** property because an animation can be played multiple times. The **play** method now returns a new Promise each time it is invoked. Use this to listen for the animation finishing or being cancelled. When upgrading to version 1.4.0 or above, simply remove **.finished** from your code.

**Old Code (JavaScript)**:
```JavaScript
animation1.play().finished.then(function () { console.log("Finished"); });
```
**New Code (JavaScript)**:
```JavaScript
animation1.play().then(function () { console.log("Finished"); });
```
**Old Code (TypeScript)**:
```JavaScript
animation1.play().finished.then(()=>console.log("Finished"));
```
**New Code (JavaScript)**:
```JavaScript
animation1.play().then(()=>console.log("Finished"));
```

### 1.3.0 (2015, September 16)

There are multiple breaking changes in this release.

- NativeScript modules use and depend on the app-compatibility library (android-support-v7-appcompat) for Android. To work properly, the theme of the application should be based on **Theme.AppCompat.Light.NoActionBar**. If you have defined custom Android `style.xml` files in the `App_Resources\Android\values[-v21]` folders, you will have to change the parent theme of the `AppTheme` (or `AppThemeBase` if you have such) to **Theme.AppCompat.Light.NoActionBar** (in both `values` and `values-v21` folders). For reference, the default content of those files can be found in the [default project template for Android](https://github.com/NativeScript/android-runtime/tree/master/build/project-template-gradle/src/main/res).

- Core NativeScript modules are published as a separate [package](https://www.npmjs.com/package/tns-core-modules) in [npmjs.com](https://www.npmjs.com).

- `library add` command is deprecated and will be removed completely in one of our next releases (currently scheduled for 1.5).

You cannot create NativeScript plugins with Android native code using Eclipse projects. You need to import your Eclipse project into Android Studio, convert it to Gradle build and consume the produced AAR file.

- You cannot use Apache Ant to create new projects for Android, but you can continue build your existing Ant-based projects. Starting with NativeScript 1.3, Android builds require Gradle. Run `tns doctor` on the command line to learn more.

- Building NativeScript projects for Android requires Android SDK 22, Android SDK Build-tools 22, Android Support Repository and the ANDROID_HOME environment variable set.

- NSDecimalNumber is marshalled as an Objective-C object wrapper instead of JavaScript number.

### 1.2.0 (2015, July 24)

There are changes in how the **Android ActionBar/IOS NavigationBar** is configured. UI is now defined with `page.actionBar` instead of `page.optionsMenu`. [See an example...](http://docs.nativescript.org/cookbook/ui/action-bar)

### 0.10.0 (2015, April 17)

This release introduces a new project directory structure. Projects from earlier releases have the following structure:

```
.
└── hello-world
    ├── app
    │   ├── app
    │   │   ├── app.css
    │   │   ├── app.js
    │   │   ├── bootstrap.js
    │   │   ├── main-page.js
    │   │   └── main-page.xml
    │   ├── App_Resources
    │   │   └── ...
    │   └── tns_modules
    │       └── ...
    └── platforms
        └── ...
```
Starting with version 0.10, the inner app folder has been removed. Newly created projects have the following structure:

```
.
└── hello-world
    ├── app
    │   ├── app.css
    │   ├── app.js
    │   ├── bootstrap.js
    │   ├── main-page.js
    │   ├── main-page.xml
    │   ├── App_Resources
    │   │   └── ...
    │   └── tns_modules
    │       └── ...
    └── platforms
        └── ...
```

>To migrate to the new structure, complete the following steps:

>1. Manually move all files and folders from the inner app folder one level up inside the outer app folder.
>2. Remove the now empty inner app folder.

#See Also

* [Cross-platform Modules Changelog]({%slug modules-changelog %})
* [Command-line Interface Changelog]({% slug cli-changelog %})
* [iOS Runtime Changelog]({% slug ios-changelog %})
* [Android Runtime Changelog]({% slug android-changelog %})
