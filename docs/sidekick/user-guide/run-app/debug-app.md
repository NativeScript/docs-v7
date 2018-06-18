---
title: Debugging Your App
description: 
position: 3
publish: true
slug: debug-app
---

# Debugging Your App

Debug an app deployed on a connected device, Android emulator, or the iOS simulator. You can start a debugging session by following the procedure outlined below or by enabling the **Start Debugger** option when you [Deploy Your App on  a Device]({% slug deploy-on-device %}).

## Prerequisites

* Verify that you have the latest official version of [iTunes](https://www.apple.com/itunes/download/).
* Verify that you have connected at least one physical device to your system or you have a running Android emulator or iOS simulator.
* For Android devices, verify that you have enabled USB debugging. For more information, see [Configure On-Device Developer Options](https://developer.android.com/studio/debug/dev-options.html) in the Android Studio User Guide.
* Verify that the app deployed on the device is built in Debug configuration.
* Verify that the app you want to debug is currently running on the device.

## Procedure

1. Launch {{ site.ns-sk }} and open your app.
1. From the left toolbar, select **Devices**.
1. Click on the **Start Debugger** button (bug icon) next to the respective device.
1. Use the newly opened Developer Tools dialog to debug your app.

> **NOTE**: For more detailed information about the debugging of NativeScript apps with the Chrome DevTools, see [Chrome DevTools Debugging](https://docs.nativescript.org/tooling/chrome-devtools).

## Next Steps

Learn how you can [LiveSync changes]({% slug livesync-changes %}) made to the code directly on the device, without the need to rebuild and redeploy your application.

## See Also

* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
* [Get Started with Debugging JavaScript in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript/)
