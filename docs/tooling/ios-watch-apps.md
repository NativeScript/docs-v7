---
title: iOS WatchOS Applications
description: Use NativeScript to build your WatchOS apps that will bring users timely information and provide them with way to interact on the go.
position: 90
slug: ios-watch-apps
---

# iOS WatchOS Applications

From version 5.4 of the NativeScript CLI, an integration of [WatchOS](https://developer.apple.com/watchos/) applicaiton is now supported for your iOS mobile application created with NativeScript.

## Prerequisites

- NativeScript CLI version 5.4 and above.
- NativeScript project.
- Xcode 10 and above.
- Paired devices or simulators (iPhone with iWatch 4.x/5.x and above).
- WatchOS app created with Objective-C (Swift code [is **not** supported yet](https://github.com/NativeScript/nativescript-cli/issues/4541#issuecomment-491202270)).

## Integrating WatchOS application in NativeScript.

To integrate your existing WatchOS application into your NativeScript project execute the following steps:

1. Create **_Single View App_** from Xcode.

2. Add watch app target through **_File > New > Target > WatchKit App_**.

3. Add a name to your watch app, for example **_MyFirstWatchApp_**.

4. Copy the generated **_MyFirstWatchApp_** and **_MyFirstWatchAppExtension_** to **_.../apps/MyApp/app/App_Resources/iOS/watchapp/MyFirstWatchApp_** and **_.../apps/MyApp/app/App_Resources/iOS/watchextension/MyFirstWatchAppExtension_** respectively.

5. Inside the **_Info.plist_** of the Watch App replace the value of **_`WKCompanionAppBundleIdentifier`_** with **_`$(WK_APP_BUNDLE_IDENTIFIER)`_**.

6. Inside the **_Info.plist_** of the Watch Extension replace the value of **_`WKAppBundleIdentifier`_** with **_`$(WK_APP_BUNDLE_IDENTIFIER)`_**.

7. You can populate the **_Assets.xcassets_** of the Watch App and the Watch Extension and add the name of the **_`appiconset`_** to the **_.../apps/MyApp/app/App_Resources/iOS/watchapp/MyFirstWatchApp/watchapp.json_** and **_.../apps/MyApp/app/App_Resources/iOS/watchextension/MyFirstWatchApp Extension/extension.json_** respectively:
```JSON
{
    "assetcatalogCompilerAppiconName": "AppIcon"
}
```

8. You can modify the **_`WATCHOS_DEPLOYMENT_TARGET`_** of the Watch App by adding the value inside the **_watchapp.json _** file like this:
```JSON
{
    "assetcatalogCompilerAppiconName": "AppIcon",
    "targetBuildConfigurationProperties": {
        "WATCHOS_DEPLOYMENT_TARGET": 4.1
    }
}
```
9. Build & Run the NativeScript application.
```
tns run ios
```

10. The application will be deployed and started on your iOS device/simulator. Make sure that the test iPhone is already paired with the testing iWatch. Once the app is deployed its Watch app will be automatically deployed on the testing iWatch device.

