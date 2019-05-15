---
title: iOS App Extensions
description: iOS App extensions give users access to the app’s functionality and content throughout iOS. The App extensions provide options for interacting with other applications and enabled the user to access the app’s features without having to open it!
position: 80
slug: ios-app-extensions
---

# iOS App Extensions

iOS App extensions give users access to the app’s functionality and content throughout iOS. The App extensions provide options for interacting with other applications and enabled the user to access the app’s features without having to open it! As of the current latest version of XCode there over 25 different App Extensions templates. They cover functionalities like sharing, photo editing, file system access, widgets, custom notifications, actions, custom keyboards and many more. Each extension is part of the app but also work independently of one another. For more details on the different types of iOS App Extensions refer to the official [Apple documentation](https://developer.apple.com/app-extensions/).

## App Extensions in NativeScript

NativeScript CLI 5.3.0 introduced Beta support for the iOS App Extensions. While the extension itself should be created and developed via Xcode (using Objective-C), the produced files can be integrated into existing NativeScript app by using a plugin (that contains the extension) or directly by introducing the extension files in separate folder named as the extension inside **_<project-name>/App_Resources/iOS/extensions/_**.  

For example, assuming we have an extension called [**TestExtension**](https://github.com/NativeScript/nativescript-today-extension-app/blob/master/app/App_Resources/iOS/extensions/TestExtension/Info.plist#L8) then the extension files should be placed in **_[<project-name>/App_Resources/iOS/extensions/TestExtension](https://github.com/NativeScript/nativescript-today-extension-app/tree/master/app/App_Resources/iOS/extensions/TestExtension)_**.

The following sections describe the steps needed to integrate the **created** App Extension into your existing NativeScript application.

### Adding App Extension in Existing Application

Prerequisites

- The created App Extension.
- Existing NativeScript application. For testing purposes, you can build a base application using the `create` command

```
tns create today-extension --tsc
```

Steps to include the App Extension

 **1.** Open **_<project-name>/app/App_Resources/iOS/_** and create folder named **_[extensions](https://github.com/NativeScript/nativescript-today-extension-app/tree/master/app/App_Resources/iOS/extensions)_**

 **2.** In the **_extensions_** folder create the main folder that contains the extension files. For example, create the [**_TestExtension_** folder](https://github.com/NativeScript/nativescript-today-extension-app/tree/master/app/App_Resources/iOS/extensions/TestExtension) containing all the extension files.

 **3.** In the **_TestExtension_** folder (where the extension files resides), create a [file called **_extension.json_**](https://github.com/NativeScript/nativescript-today-extension-app/blob/master/app/App_Resources/iOS/extensions/TestExtension/extension.json). This configuration file describes the SDK frameworks used in the extension (via `frameworks` key) and the optional image resources used for extension icon (via `assetcatalogCompilerAppiconName` key).
 
    For example:
    ```JSON
    {
        "frameworks": ["NotificationCenter.framework"],
        "assetcatalogCompilerAppiconName": "AppIconExtension"
    }
    ```
    **_`frameworks`_** key - the value is an array of framework names.

    **_`assetcatalogCompilerAppiconName`_** key - the value is the icon file name located in `.xcassets` catalog with `AppIconExtension.appiconset` inside the extension folder.


 **4.** Rebuild the application and your extension is good to go.

A sample project demonstrating the above can be found [here](https://github.com/NativeScript/nativescript-today-extension-app).

### Adding App Extension in Plugin

The workflow to adding an App Extension to a plugin is the same as the one described above with the difference of where the extension is placed. Create the **_extensions_** folder (along with all included files) inside **_platforms/ios_** folder of your plugin. Then follow steps 2-4 from [the previous section](#adding-app-extension-in-existing-application)

A sample plugin demonstrating the above can be found [here](https://github.com/NativeScript/nativescript-today-extension-plugin). More information for creating NativeScript plugins can be found [here](../plugins/building-plugins.md).
