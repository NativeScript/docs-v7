---
title: Metadata
description:
position: 83
slug: metadata
---

# Metadata

To allow JavaScript code to call into native iOS or Android code both NativeScript runtimes need the so called ***metadata***. It contains all the necessary information about each of the supported native classes, interfaces, protocols, structures, enumerations, functions, variables, etc. and is generated at build time by examining the native libraries from the iOS/Android operating systems' SDKs and any third-party libraries and frameworks that are used by the {N} application. More detailed descriptions about the iOS and Android metadata format and features can be found in these two articles:
 * [Android Runtime | Metadata | Metadata Overview]({% slug android-metadata-overview %})
 * [iOS Runtime | Overview]({% slug ios-runtime-overview %}#metadata)

# Metadata Filtering

By default NativeScript includes all supported entities in the metadata. This allows app and plugin authors to freely call any native API from JavaScript. While it is benefitial during development, in some cases having metadata for all the APIs is undesirable. There could be security implications involved (mentioning names of entities that shouldn't be known in the metadata binary files for example); performance could be degraded at runtime (due to larger metabase which has to be consulted when an unknown entry is encountered or at startup); or app size could increase due to unnecessary metadata which is never used.

To give developers control over what to be included or not in the generated metadata there's support for black and whitelisting symbols by their native name.

## Metadata filtering rules in plugins

Plugins can declare their list of APIs that are called from JavaScript using a file named `native-api-usage.json`, located in each of the platform directories (`platforms/android` or `platforms/ios`). Its format is similar to:
```JavaScript
{
    "uses": [
      "java.util:List"
    ]
}
```

## Metadata filtering rules in apps

Applications have the final word of what filtering will be applied to metadata. They provide similar `native-api-usage.json` files, located in `App_Resources/Android` and `App_Resources/iOS`, having the following format:
```JavaScript
{
    "whitelist-plugins-usages": true,
    "whitelist": [
        "java.util:Base64*"
    ],
    "blacklist": [
        "java.util:Locale*"
    ]
}
```

## Rules syntax

Each list comprises of pattern entries with the following characteristics:

* Entries are of the form `<pattern1>[:pattern2]`
* On Android, ***pattern1*** is matched against Java package names, while the optional ***pattern2*** -- against classes, interfaces, enums.
* On iOS, ***pattern1*** is matched against Clang module/submodule names, while the optional ***pattern2*** -- against structs, global functions, enums, Objective-C interfaces, protocols, categories, constants, etc.
* Patterns support wildcards (**"*"** - any number of characters and **"?"** - any single character).
* An unspecified or empty pattern is equivalent to being set to **"*"** (matching everything)

## Rules semantics

After analyzing the filtering rules for a platform, {N} CLI builds final whitelist and blacklist files and outputs them in the native project to be used by the corresponding metadata generator. The blacklist is always equal to the one specified by the app. While the whitelist depends on the `whitelist-plugins-usages` flag:
* If it is `true`, the final whitelist is a concatenation of all plugins' usage lists with the app's whitelist
* Otherwise, it is equal to the app's whitelist

These two lists unambigously determine how filtering is performed:

1. If the whitelist is empty, then everything is considered whitelisted by default
2. If it contains at least one rule, only entities matching a rule are considered whitelisted
3. All entities which are not whitelisted or match a rule in the blacklist are stripped from metadata
4. All other entities are included in the metadata

## Examples

Sample filtering specifications can be found in `@nativescript/core` plugin's repository:
* [Plugin's Android API usage list](https://github.com/NativeScript/NativeScript/blob/master/nativescript-core/platforms/android/native-api-usage.json)
* [Plugin's iOS API usage list](https://github.com/NativeScript/NativeScript/blob/master/nativescript-core/platforms/ios/native-api-usage.json)
* [App's Andoroid API usage lists](https://github.com/NativeScript/NativeScript/blob/master/tests/app/App_Resources/Android/native-api-usage.json)
* [App's iOS API usage lists](https://github.com/NativeScript/NativeScript/blob/master/tests/app/App_Resources/iOS/native-api-usage.json)

## Troubleshooting

Missing metadata entities could result in bugs at runtime. For example, if a native class has been accidentally filtered out, its constructor function will be `undefined` and this will lead to an exception when its attempted to be called. Figuring out what is the reason for something being `undefined` could be quite difficult because the reasons can vary. To check whether metadata filtering is to blame or not you should examine metadata generator's verbose logs after a successful build:
* On iOS they are located in `platforms/ios/build/<configuration>-<platform>/metadata-generation-stderr-<arch>.txt` (e.g. `platforms/ios/build/Debug-iphonesimulator/metadata-generation-stderr-x86_64.txt`);
* On Android they are located in `platforms/android/build-tools/buildMetadata.log`

For each global symbol that is discovered by the generator, there should be a line providing information whether it was included in metadata or not, and which rules or what exception caused this. Examples:

* `verbose: Blacklisted kCFBuddhistCalendar from CoreFoundation.CFLocale (disabled by 'CoreFoundation*:*')` - when there are no whitelist rules a blacklisted symbol will show only the rule which disabled it
* `verbose: Blacklisted NSString from Foundation.NSString` - when there is at least one whitelist rule, some blacklisted symbols will not specify a rule. This means that the symbol didn't match any of the whitelist rules.
* `verbose: Blacklisted PHImageContentModeDefault from Photos.PhotosTypes (enabled by 'Photos.PhotosTypes:*', disabled by 'Photos.PhotosTypes:PHImageContentMode*')`, `verbose: Blacklisted String from java.lang (enabled by java.lang:*, disabled by java.lang:String)` - a blacklisted entry which matches both a whitelist rule and a blacklist rule will specify both.
* `verbose: Included NSObject from ObjectiveC.NSObject` - when there are no whitelist rules an included symbol won't specify a rule which caused it to be included
* `verbose: Included PHCollectionListType from Photos.PhotosTypes (enabled by 'Photos.PhotosTypes:*')`, `verbose: Included StrictMath from java.lang (enabled by java.lang:*)` - when a symbol is included because it matched a rule from the whitelist (and didn't match any from the blacklist) it will print that rule
* `verbose: Exception [Name: 'vfwprintf', JsName: 'vfwprintf', Module: 'Darwin.C.wchar', File: '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator13.2.sdk/usr/include/wchar.h'] : Can't create type dependency. --> [Type Decayed] : Can't create type dependency. --> [Type Typedef] : VaList type is not supported.` - if a symbol is not included because it isn't supported for some reason it will be stated in the logged exception. In this case the symbol cannot be used from JavaScript because {N} doesn't support calling functions with variable argument lists.
* `verbose: Exception [Name: 'GLKVector3Make', JsName: 'GLKVector3Make', Module: 'GLKit.GLKVector3', File: '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator13.2.sdk/System/Library/Frameworks/GLKit.framework/Headers/GLKVector3.h'] : Can't create type dependency. --> [Type Typedef] : Can't create type dependency. --> [Type Elaborated] : Can't create type dependency. --> [Type Record] : The record is an union.` - Another example of an unsupported symbol, this time the reason is that `union`s are unsupported

