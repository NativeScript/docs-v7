---
title: iOS App Extensions
description: iOS App extensions give users access to the app’s functionality and content throughout iOS. The App extensions provide options for interacting with other applications and enabled the user to access the app’s features without having to open it!
position: 100
slug: ios-app-extensions
---

# iOS App Extensions

iOS App extensions give users access to the app’s functionality and content throughout iOS. The App extensions provide options for interacting with other applications and enabled the user to access the app’s features without having to open it! As of the current latest version of XCode there over 25 different App Extensions templates. They cover functionalities like sharing, photo editing, file system access, widgets, custom notifications, actions, custom keyboards and many more. Each extension is part of the app but also work independently of one another. For more details on the different types of iOS App Extensions refer to the official [Apple documentation](https://developer.apple.com/app-extensions/).

## App Extensions in NativeScript

NativeScript CLI 5.3.0 introduced built-in support for the iOS App Extensions. While the extension itself should be created and developed via Xcode (using Objective-C), the produced files can be integrated into existing NativeScript app by using a plugin (that contains the extension) or directly by introducing the extension file in folder particular folder `<project-name>/App_Resources/iOS/extensions`.  The following sections describe the steps needed to integrate the **created** App Extension into your existing NativeScript application.


### Adding App Extension in Existing Application

Prerequisites

- The created App Extensions (**add a link here**)
- Existing NativeScript application. For testing purposes, you can build a base application using the `create` command

```
tns create today-extension --tsc
```

Steps to include the App Extension

 1. Open `<project-name>/app/App_Resources/iOS/` and create folder named `extensions` (**add link here**)

 2. In the `extensions` folder paste the main folder that contains the extension files. For example, paste the `TestExtension` folder containing all the extension files. (**add link here**)

 3. In the `TestExtension` folder (where the extension files reside), create a file called `extension.json`. This configuration file describes the SDK frameworks used in the extension (via `frameworks` key) and the optional image resources used for extension icon (via `assetcatalogCompilerAppiconName` key).
 
 For example:
```JSON
{
    "frameworks": ["NotificationCenter.framework"],
    "assetcatalogCompilerAppiconName": "AppIconExtension"
}
```

Where:

        - `frameworks` key - the value is an array of framework names.
        - `assetcatalogCompilerAppiconName` key - the value is the icon file name located in `.xcassets` catalog with `AppIconExtension.appiconset` inside the extension folder. 

4. Create an application group.

 In typical cases, the App Extensions are used to pass/receive data and actions from and to your iOS application. In iOS to enable this functionality, both the application and the App Extension must be part of the same [**application group**](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_application-groups?language=objc). 

Example for creating the same group for both the extension and the application
     
     - Create `TestExtension.entitlments` file inside `TestExtension` folder and add the specific group.
 ```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>com.apple.security.application-groups</key>
    <array>
        <string>group.org.nativescript.extensionClient</string>
    </array>
</dict>
</plist>
 ```

     - Create the `app.entitlements` file in `<project-name>/app/App_Resources/iOS/` and make sure it contains the same group used by the extension
 ```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>com.apple.security.application-groups</key>
    <array>
        <string>group.org.nativescript.extensionClient</string>
    </array>
</dict>
</plist>
 ```

5. Create a clean build (remove `platforms` folder), and your extension is good to go.

A sample project demonstrating the above can be found here (**add a link here**).

### Adding App Extension in Plugin