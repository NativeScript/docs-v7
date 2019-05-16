---
title: iOS WatchOS Applications
description: Use NativeScript to build your WatchOS apps that will bring users timely information and provide them with a way to interact on the go.
position: 90
slug: ios-watch-apps
---

# iOS WatchOS Applications

With version 5.4 the NativeScript CLI introduces a Beta support for integrating a [WatchOS](https://developer.apple.com/watchos/) application in your iOS mobile app created with NativeScript.

## Prerequisites

- **NativeScript CLI version 5.4** and above.
- NativeScript project.
- **Xcode 10** and above.
- Paired devices or simulators (**iPhone** and **iWatch** with **WatchOS 4.x/5.x** and above).
> **Note:** WatchOS 4.x won't work with the default Watch App created with Xcode. The user will have to manually set **_`WATCHOS_DEPLOYMENT_TARGET`_** in the configuration json (see below for details).

- WatchOS app created with **Objective-C** (Swift code [is **not** supported yet](https://github.com/NativeScript/nativescript-cli/issues/4541#issuecomment-491202270)).


## WatchOS application in NativeScript.

To integrate your existing WatchOS application into your NativeScript project, execute the following steps:

1. Create **_Single View App_** from Xcode.

2. Add watch app target through **_File > New > Target > WatchKit App_**.

3. Add a name to your watch app, for example, **_MyFirstWatchApp_**. In the same screen verify that **Objective-C** is selected as your language.

> **Note** You can skip steps 1-3 if your Watch app is already created.

4. Copy the generated **_MyFirstWatchApp_** and **_MyFirstWatchAppExtension_** to **_.../apps/MyApp/app/App_Resources/iOS/watchapp/MyFirstWatchApp_** and **_.../apps/MyApp/app/App_Resources/iOS/watchextension/MyFirstWatchAppExtension_** respectively.

5. Inside the **_Info.plist_** of the Watch App replace the value of **_`WKCompanionAppBundleIdentifier`_** with **_`$(WK_APP_BUNDLE_IDENTIFIER)`_**.

6. Inside the **_Info.plist_** of the Watch Extension replace the 
 of **_`WKAppBundleIdentifier`_** with **_`$(WK_APP_BUNDLE_IDENTIFIER)`_**.

7. You can populate the **_Assets.xcassets_** of the Watch App and add the name of the **_`appiconset`_** to the **_.../apps/MyApp/app/App_Resources/iOS/watchapp/MyFirstWatchApp/watchapp.json_**:

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

    ```Shell
    tns run ios
    ```

10. The application will be deployed and started on your iOS device/simulator. Make sure that the test iPhone is already paired with the testing iWatch. Once the iOS app starts, the Watch app will be automatically deployed on the testing iWatch device.

> **Note:** As of May 2019 the feature is still in _BETA_. Please report all issues, bugs and features related to the WatchOS functionality in [the tracking issue](https://github.com/NativeScript/nativescript-cli/issues/4541#issue-433686622).
