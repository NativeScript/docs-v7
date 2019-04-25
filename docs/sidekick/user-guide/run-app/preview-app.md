---
title: Preview Your App
description: Use Sidekick and the NativeScript Preview app to quickly test your app on a physical iOS or Android device.
position: 2
publish: true
slug: preview-on-device
---

# Preview Your App

Use Sidekick in combination with the NativeScript Playground and Preview apps to quickly run and test your own apps on a device without the need to build them.

## Prerequisites

* Verify that you have installed the Playground app [for iOS from the App Store](https://itunes.apple.com/us/app/nativescript-playground/id1263543946?mt=8&ls=1) or [for Android from Google Play](https://play.google.com/store/apps/details?id=org.nativescript.play).

## Limitations

The Preview app has several limitations, which you can overcome by [building and deploying your app on a connected device]({% slug deploy-on-device %}).

* **Plugins**<br /> The Preview app comes with a predefined set of [NativeScript plugins](https://market.nativescript.org/). If your app needs to utilize a plugin that is not present in the Preview app, you will see a warning message and your app might not work as expected.
* **Resources**<br /> The Preview app comes with predefined set of resources, such as app icons, splash screens, and image files. If you need to work with additional files in your application’s `App_Resources` folder, you need to switch to the full setup workflow.
* **Debugging**<br /> The Preview app does not allow you to use many of NativeScript’s [debugging tools]({% slug cli-basics %}) - for example, the [integration with the Chrome DevTools]({% slug chrome-devtools %}).
* **Unit Tests**<br /> The Preview app does not allow you to use [NativeScript’s unit testing workflows]({% slug unit-testing %}).
* **Lazy Loading**<br /> The Preview app cannot run NativeScript apps that use [Angular’s lazy loading technique]({% slug lazy-loading %}) for loading modules.

## Procedure

1. Launch {{ site.ns-sk }} and open your app.
1. From the left toolbar, select **Devices** and then **Preview App**.
1. (Optional) Enable **Webpack**. For more information, see [Bundle Your Code with Webpack]({% slug webpack %}).
1. (Optional) Enable **Hot module replacement** (Beta). For more information, see [A Deep Dive into Hot Module Replacement with Webpack](https://www.nativescript.org/blog/deep-dive-into-hot-module-replacement-with-webpack-part-one-the-basics).
1. Click **Start Preview** to generate a QR code.
1. Scan the produced QR code with the NativeScript Playground app to run your app on the device.

## Next Steps

Learn how you can [Build and Deploy Your App on a Connected Device]({% slug deploy-on-device %}).