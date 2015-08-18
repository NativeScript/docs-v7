---
nav-title: iOS Runtime Changelog
title: iOS Runtime
description: NativeScript iOS Runtime Changelog
position: 3
---

1.2.2
==

## Bug Fixes

- [Add lib/iOS folder to framework search paths #266](https://github.com/NativeScript/ios-runtime/pull/266)
- [Call Block_copy in ObjCBlockCall::finishCreation #264](https://github.com/NativeScript/ios-runtime/pull/264)


1.2.1
==

## Bug Fixes

 - [Timelines recording sends some long messages that hit the buffer limit of write method, so fallback to dispatch_io_write (#255)](https://github.com/NativeScript/ios-runtime/pull/255)
 - [Fix TypeScript inheritance of Objective-C classes (#252)](https://github.com/NativeScript/ios-runtime/pull/252)
 - [Work around crash when logging warnings (#248)](https://github.com/NativeScript/ios-runtime/pull/248)
 - [Do not register the instance structure (#247)](https://github.com/NativeScript/ios-runtime/pull/247)

1.2.0
==

## What's New

 - [Implement and consume NSFastEnumeration (#222)](https://github.com/NativeScript/ios-runtime/pull/222)
 - [Memory management of class clusters (#214)](https://github.com/NativeScript/ios-runtime/issues/214)
 - [Update to the latest JavaScriptCore (#211)](https://github.com/NativeScript/ios-runtime/pull/211)
 - [Add application that uses the updated webkit webview to show web inspector frontend (#201)](https://github.com/NativeScript/ios-runtime/pull/201)
 - [Transform (NSError **) parameters to JavaScript error throw (#186)](https://github.com/NativeScript/ios-runtime/issues/186)
 - [CMake the JSC: Performance and memory diffs (#185)](https://github.com/NativeScript/ios-runtime/issues/185)
 - [iOS 9 Support: Metadata for Objective-C Generics (#177)](https://github.com/NativeScript/ios-runtime/issues/177)
 - [WebInspector: Enable WebInspector Performance Profiler (#164)](https://github.com/NativeScript/ios-runtime/issues/164)
 - [Optimize require of JavaScript modules (#139)](https://github.com/NativeScript/ios-runtime/issues/139)

## Bug Fixes

 - [Recursive calls from Objective-C to a method returning JavaScript function as block (#210)](https://github.com/NativeScript/ios-runtime/pull/210)
 - [Enums which has no common prefix are not exposed correctly (#205)](https://github.com/NativeScript/ios-runtime/issues/205)
 - [Recursive calls from JavaScript to Objective-C method receiving a block argument (#199)](https://github.com/NativeScript/ios-runtime/issues/199)
 - [Fix TypeScript extends (#178)](https://github.com/NativeScript/ios-runtime/issues/178)

1.1.0
==
[Milestone 1.1.0](https://github.com/NativeScript/ios-runtime/issues?q=milestone%3A1.1.0), [Release v1.1.0](https://github.com/NativeScript/ios-runtime/releases/tag/v1.1.0).

## What's New

 - NativeScript for iOS is now built using CMake
 - The runtime is now distributed as a static library and a Cocoa Framework
 - API Metadata now includes information about Clang modules
 - NativeScript apps for iOS no longer ship with a WebSocket server for debugging, but rely on a plain TCP socket instead
 - Removed backwards compatibility for the pre-0.10 behavior when looking for *tns_modules*

## What's Fixed

 - The NativeScript CLI iOS template project now strips non-device architectures from embedded frameworks
 - You can now require paths with .js extension
 - Fixed issue where invoking an Objective-C class cluster as a JavaScript constructor with `new` would cause memory leaks
 - Fixed issue where an inspector frontend connecting to the same app multiple times in a single session would not display sources
 - Accessing JavaScript from multiple threads is properly synchronized
 - The `tns-ios` package is versioned

1.0.1
==
 - Escape header and framework search paths in metadata generator

1.0.0
==
[Milestone 1.0.0](https://github.com/NativeScript/ios-runtime/issues?q=milestone%3A1.0.0), [Release v1.0.0](https://github.com/NativeScript/ios-runtime/releases/tag/v1.0.0).
 - New metadata generator using Clang
 - Fix some threading issues
 - C enumeration syntax changed
 - Remove visibility warnings when linking

0.10.0 (2015, April 17)
==
[Milestone 0.10.0](https://github.com/NativeScript/ios-runtime/issues?q=milestone%3A0.10.0), [Release v0.10.0](https://github.com/NativeScript/ios-runtime/releases/tag/v0.10.0).

## What's New

 - JavaScript Date is implicitly converted to NSDate and vice versa.
 - JSON object and JS Map, when passed to native, are wrapped in NSDictionary. NSDictionaries do **not** behave as JSON objects when returned from native.

## What's Fixed

 - We will try to freeze the application on crash if there is a debugger attached so the debugger can be used to examine the errors.
 - When Objective-C exception is thrown from code called from JavaScript, it will be wrapped in JavaScript Error and reported to the debugger.
 - We have fixed the “tagged pointers“ bug on iPhone 5s with iOS7.0.
 - We have dramatically reduced the “tns-ios” package size by stripping the debug symbols from the NativeScript.framework.
 - We have fixed the project template to support properly the app-id provided from the CLI.
 - We’ve cleaned the package.tgz from some xcodebuild logs and the Chrome version of the inspector.
 - Made submodules public, fixed builds
 - *tns_modules* are now expected in the app folder. We are backward compatible but will remove the compatibility in future.
 - We have updated the project template to use larger resolution
 - Promise reactions have too low a priority on the runloop


