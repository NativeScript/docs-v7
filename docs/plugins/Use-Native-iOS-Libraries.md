---
nav-title: "Using Native Libraries in iOS"
title: "How To Use Native Libraries in iOS"
description: "Learn how to use native iOS libraries in your NativeScript plugins, including how to use shared frameworks, static frameworks, and static libraries."
position: 110
---

# Using Native Libraries in iOS

NativeScript for iOS lets you include native libraries and consume their APIs from JavaScript.

For iOS, three types of library packages are available:

1. Shared framework (`MyFramework.framework`): An ordinary shared library wrapped in a framework. Typically, contains the required `module.modulemap` file.
2. Static framework (`MyFramework.framework`): An ordinary static library wrapped in a framework. Typically, doesn't contain the required `module.modulemap` file and you need to add it manually.
3. Static library (`libMyLib.a`): Contains a headers folder (usually called `include`) with `.h` files.

You can use any of the following approaches to add and use a native library in your project:

1. (Recommended) [Create a plugin containing a CocoaPod `Podfile`.](./cocoapods.md)
2. [Create a plugin containing the already built binary and headers.](./plugin-reference.md)
3. (Not recommended) Don't create a plugin and manually change the Xcode project located in `{your-app}/platforms/ios/`.

To consume a native library the iOS Runtime has to know about the following resources:
 1. Binary file (e.g `libMyLib.a`, `MyLib`).
 2. Header files and `module.modulemap` file  describing a clang module and specifying which headers are part of the module.

The only reason the runtime needs header files is to generate metadata. The metadata generator knows which headers have to be parsed because of the supplied `module.modulemap` file. Both the headers and `module.modulemap` file must reside in a folder which is part of the header search paths of the Xcode project (`{your-app}/platforms/ios/{your-app}.xcodeproj`). You can find a sample `module.modulemap` file [here](https://github.com/NativeScript/ios-runtime/blob/master/tests/TestFixtures/module.modulemap). You can find more information about CLANG modules, module maps and their synthax here: https://clang.llvm.org/docs/Modules.html

## Shared Frameworks

Shared frameworks are the best option because only they have a well-known structure and a `module.modulemap` file which eliminates the need for manual work. [NativeScript plugins](./plugin-reference.md) support shared frameworks and you can add them with CocoaPods.

With CocoaPods, you can remove the framework (with all the binary and header files in it) from your plugin repository and keep only a single `Podfile`. You also get all the benefits of using a package manager.

If there is no CocoaPod for the current library you can still use a plugin, but the framework must be dropped in the plugin folder (`{your-plugin}/platforms/ios/{MyFramework}.framework`) and you lose all the benefits of using a package manager.

- Pros

1. Can be included by NativeScript plugin.
2. Can be included in the plugin by a `Podfile` (if a `pod` for the library exists).
3. There is no need to manually edit the library before adding it.
4. There is no need to manually edit the app after adding the library.

- Cons

* Shared frameworks can be used only in iOS 8 and above. This limitation is valid for pure native applications, too. If you are targeting iOS versions lower than 8.0 you must use static frameworks.

## Static Frameworks

Most of the static frameworks don't contain `module.modulemap` file, so you have to add the file manually. To include a static framework in a plugin grab a prebuilt version of the framework, add a `module.modulemap` file in it and drop it in your `{plugin-path}/platforms/ios/` folder.

> In case you cannot modify the native framework (for example when it comes from a Pod) and must define its `module.modulemap` somewhere else in your plugin, take a look at the following sample for guidance: https://github.com/NativeScript/plugin-ios-modulemap-sample

### Pros

1. Can be included by NativeScript plugin.
2. There is no need to manually edit the app after adding the library (but you have to manually edit the framework in order to add `module.modulemap` file).

### Cons

1. Manual changes of the framework are required (add `module.modulemap` file).
2. Only Objective-C APIs are exposed (no C functions and C constants) from static frameworks. To work around this limitation, you can manually edit the Xcode project file. However, this workaround is not recommended.

## Static Libraries
The NativeScript CLI supports static libraries coming from plugins but the binary and headers must be ordered in a specific folder structure described in details [here](./plugin-reference.md). This is required because the NativeScript CLI generates a `module.modulemap` file for the library which works most of the time. However, in some cases you might need to wrap the library in a static framework with a `module.modulemap` file.

> If you cannot wrap your static library in a static framework with a `module.modulemap`, in cases such as when using Cocoapods, take a look at the following sample for guidance: https://github.com/NativeScript/plugin-ios-modulemap-sample

- Pros

1. Can be included by NativeScript plugin.
2. It works without manual changes but not in all cases.
3. It is trivial to wrap a static library in a static framework. Just put all the headers and binary files in the proper folder structure, add a `module.modulemap` and you have a static framework which works in all cases.

- Cons

1. Can't be included by a `Podfile`.
2. In some cases, you must add a `module.modulemap` file manually.
3. You must wrap the library in a static framework if the automatic `module.modulemap` file generation does not succeed.
4. Only Objective-C APIs are exposed (no C functions and C constants) from static libraries. To work around this limitation, you can manually edit the Xcode project file. However, this workaround is not recommended.

NativeScript plugins also support merging of `.plist` files. If a library requires changes in `Info.plist`, the plugin can handle that without you touching the `/platforms/ios/` folder. However, there are libraries which require more complex manipulations of the Xcode project file, which can't be achieved with plugins. In these cases, the only solution is to do it manually. Keep in mind that after updating the iOS platform, your manual changes might be lost.

## APIs written in Swift

CocoaPod libraries written in Swift can be called from NativeScript only if they are exposed to Objective-C. This means that the following conditions have to be met:
1. The methods and types must have `public` or `open` access. For more information on Access Control read [this article](https://docs.swift.org/swift-book/LanguageGuide/AccessControl.html)
2. Classes need to inherit from `NSObject` or some other Objective-C class in order to be exposed. Refs [Swift Migration Guide](https://developer.apple.com/documentation/swift/migrating_your_objective-c_code_to_swift)
3. Starting from Swift 4.0, types and methods have to be explicitly marked with `@objc` or `@objcMembers` attributes. You can read more about them [here](https://docs.swift.org/swift-book/ReferenceManual/Attributes.html).

> **NOTE:** To be able to override a Swift method in its JavaScript inheritor it _**MUST**_ use the message dispatch calling mechanism. This is enforced by marking the method with the [`dynamic` keyword](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID381).

> **NOTE:** You can avoid adding `@objc` attribute for every member you'd like to expose by setting `SWIFT_SWIFT3_OBJC_INFERENCE` to `On`. This has the drawback that it will cause deprecation warnings during build and deprecation logs at runtime. Sample `Podfile`:
```Ruby
....
post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['SWIFT_SWIFT3_OBJC_INFERENCE'] = 'On'
    end
  end
end
```


## Conclusion

As a rule of thumb, avoid manual changes to the Xcode project file in the `/platforms/ios` folder. Always try to use CocoaPods with NativeScript plugins and shared frameworks. The second best option is a prebuilt static framework with manually added `module.modulemap` file, wrapped in a NativeScript plugin. Use the other options only as a last resort after making sure there is no better solution.

## Troubleshooting

Starting with version 1.4 of NativeScript for iOS, you are able to generate [debug metadata](../core-concepts/ios-runtime/Overview#metadata) and [TypeScript declarations](https://typescript.codeplex.com/wikipage?title=Writing%20Definition%20%28.d.ts%29%20Files) for third-party libraries. This way you are able to see exactly what APIs are exposed to JavaScript.

Executing the following command from the root of your NativeScript app produces a `metadata` folder with a `.yaml` file for each Clang module:
```shell
$ TNS_DEBUG_METADATA_PATH="$(pwd)/metadata" tns build ios [--for-device] [--release]
```

Executing the following command from the root of your NativeScript app produces a `typings` folder with a `.d.ts` file for each Clang module:
```shell
$ TNS_TYPESCRIPT_DECLARATIONS_PATH="$(pwd)/typings" tns build ios [--for-device] [--release]
```

If you have downloaded the [documentation set for iOS](https://developer.apple.com/library/ios/recipes/xcode_help-documentation_preferences/DownloadingandInstallingXcodeComponents/DownloadingandInstallingXcodeComponents.html), the command above will also include brief description in the form of a comment above every symbol in the generated `typings` (currently not supported for Xcode 8). Most IDEs which support typescript IntelliSense will make use of these comments. Furthermore, you can generate structured documentation from these comments with tools like [TypeDoc](http://typedoc.io).
