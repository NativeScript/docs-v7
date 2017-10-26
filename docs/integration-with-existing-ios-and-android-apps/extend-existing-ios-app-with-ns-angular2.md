---
title: Extend existing iOS app
description: Learn how to your existing iOS app with Angular and NativeScript
position: 12
slug: extend-existing-ios-app
environment: angular
---

# Extend your existing iOS app with Angular and NativeScript

> **WARNING**: Embedding NativeScript into an existing iOS application is an experimental feature. If you’re interested in seeing this scenario being officially supported, please [let us know on GitHub](https://github.com/NativeScript/ios-runtime/issues/459).

## This article provides step-by-step instructions how to extend existing iOS app with Angular and NativeScript

1.Build your NativeScript app for iOS:
`tns build ios`

2.Copy your NativeScript app `\platforms\ios\YourAppName\app` folder to your iOS app:

![Copy your NativeScript](../img/extend-existing-ios-app-with-ns-angular2/copy-your-nativeScript.png)

3.Copy your NativeScript app `\platforms\ios\internal` folder next to your iOS app:

![Copy your NativeScript](../img/extend-existing-ios-app-with-ns-angular2/copy-your-nativeScript-app2.png)

> Note: Both can be found in your NativeScript app `\platforms\ios\`and `\lib\ios\` folders.

4.Add reference to **NativeScript.framework** and **TNSWidgets.framework** (the former should be in the **internal** folder)

![Copy your NativeScript](../img/extend-existing-ios-app-with-ns-angular2/add-reference.png)

> Note: Both can be found in your NativeScript app `\platforms\ios\` and `\lib\ios\` folders.


5.Add **Run Script** and **Linker Flags** to build and use the metadata:

![Copy your NativeScript](../img/extend-existing-ios-app-with-ns-angular2/add-run-script-and-linker-flags.png)

`cd "$PROJECT_DIR/internal/metadata-generator/bin" && ./build-step-metadata-generator.py`

![Copy your NativeScript](../img/extend-existing-ios-app-with-ns-angular2/add-run-script-and-linker-flags2.png)

`-sectcreate __DATA __TNSMetadata "$(CONFIGURATION_BUILD_DIR)/metadata-$(CURRENT_ARCH).bin"`

> Note: Run Script should be the first build phase.

6.Present NativeScript view controller from your app:

![Copy your NativeScript](../img/extend-existing-ios-app-with-ns-angular2/present-nativescript-view-controller.png)

![Copy your NativeScript](../img/extend-existing-ios-app-with-ns-angular2/result.gif)

Get the app from here: [https://github.com/tdermendjiev/ios-ng2-tns](https://github.com/tdermendjiev/ios-ng2-tns)

# Credits
[Extend your existing iOS app with Angular 2 and NativeScript](https://medium.com/@enchev/extend-your-existing-ios-app-with-angular-2-and-nativescript-c2225c9bf616)
