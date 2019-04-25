---
title: Deploying Your App on a Device
description: Use NativeScript Sidekick to deploy your app to a physical iOS or Android device.
position: 3
publish: true
slug: deploy-on-device
---

# Deploying Your App on a Device

To test your app during development, you can build and deploy them on connected devices. After you have launched a native iOS or Android device emulator, while the emulator is running, {{ site.sk }} recognizes and treats it as a connected device. When you run your app on a connected device, you can inspect the device log to troubleshoot your app.

With {{ site.ns-sk }}, you can deploy your app on multiple connected devices simultaneously.

## Prerequisites

* Verify that you have the latest official version of [iTunes](https://www.apple.com/itunes/download/).
* Verify that you have connected at least one physical device to your system or you have a running Android emulator or iOS simulator.
* To build and deploy an app on an iOS device, you need a valid certificate and mobile provision. For more information about iOS code signing, see the [iOS Developer Program article]({% slug ios-developer-program %}). If you have a Free Apple Developer account, you can use the [Code Signing Assistance]({% slug code-signing-assistance %}) to automatically generate temporary certificate and mobile provision. 
* To build an app in Release configuration and deploy it on an Android device, you need a valid Google Play self-signed code signing identity.

## Procedure

1. Launch {{ site.ns-sk }} and open your app.
1. From the left toolbar, select **Devices** and then **Connected**.
1. Under **Connected Devices**, select one or more devices.
1. Click on the settings button (cogwheel icon) of each selected device and choose a valid certificate. For iOS devices, you need to provide a valid mobile provision as well.  
1. Select a **Build Type**.
1. Select a **Configuration**.
1. (Optional) Enable **Clean Build**. Available only for **Cloud** builds. When you enable this option, any previously cached data will be ignored and your app will undergo a complete rebuild. Initiating a clean build might help you resolve sporadic build failures or other unexpected behavior.
1. (Optional) Enable **Webpack**. For more information, see [Bundle Your Code with Webpack]({% slug webpack %}). 
1. (Optional) Enable **Start Debugger**. When you enable this option, a to begin a debug session as soon as the app is deployed on the device. Start Debugger is available only in Debug Configuration.
1. (Optional) If any issues are present, resolve them before you continue.
1. Click **Run on Device** and wait for the app to be deployed on the device.

## Next Steps

Learn how you can [LiveSync changes]({% slug livesync-changes %}) made to the code directly on the device, without the need to rebuild and redeploy your application.