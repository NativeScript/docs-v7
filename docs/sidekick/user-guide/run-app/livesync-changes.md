---
title: LiveSyncing Your Changes
description: 
position: 2
publish: true
slug: livesync-changes
---

# LiveSyncing Your Changes

The LiveSync functionality lets you make changes to your app and see those changes applied in real time across all connected devices and emulators. LiveSync is enabled automatically when you initiate a **Run on Device** in **Debug** configuration. 

Based on the type of the modified files, the LiveSync will behave differently:

* When you LiveSync modifications made to an XML, HTML or CSS file, in order for the changes to take effect, the app will refresh automatically.
* When you LiveSync modifications made to a JavaScript or TypeScript file, in order for the changes to take effect, the app will restart automatically.
* When you LiveSync modifications made to the app resources or plugins, in order for the changes to take effect, the app will be rebuilt, redeployed and launched again automatically.

## Prerequisites

* Verify that you have connected at least one physical device to your system or you have a running Android emulator or iOS simulator.
* To build and deploy an app on an iOS device, you need a valid certificate and mobile provision. If you have a Free Apple Developer account, you can use the [Code Signing Assistance]({% slug code-signing-assistance %}) to automatically generate temporary certificate and mobile provision. For more information about iOS code signing, see the [iOS Developer Program article]({% slug ios-developer-program %}).
* To build an app in Release configuration and deploy it on an Android device, you need a valid Google Play self-signed code signing identity.

## Procedure

1. Launch {{ site.ns-sk }} and open your app.
1. From the left toolbar, select **Devices**.
1. Under **Connected Devices**, select one or more devices.
1. Click on the settings button (cogwheel icon) of each selected device and choose a valid certificate. For iOS devices, you need to provide a valid mobile provision as well. 
1. Select a **Build Type**.
1. Under **Configuration**, select **Debug**. LiveSync is enabled only for apps built in debug configuration.
1. (Optional) Enable **Clean Build**. Available only for **Cloud** builds. When you enable this option, any previously cached data will be ignored and your app will undergo a complete rebuild. Initiating a clean build may help you to resolve sporadic build failures.
1. (Optional) Enable **Webpack**. For more information, see [Bundle Your Code with Webpack]({% slug webpack %}). 
1. (Optional) Enable **Start Debugger** to begin a debug session as soon as the app is deployed on the device. Start Debugger is available only in Debug Configuration.
1. Click **Run on Device** and wait for the app to be deployed on the device.

## Next Steps

Learn how you can [start a debugging session](debug-app) that will help you to identify and correct various issues.