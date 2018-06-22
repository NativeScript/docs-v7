---
title: Chapter 3 - Run Your App on a Device
description: 
position: 13
publish: true
slug: gs-run
---

# Chapter 3 - Run Your App on a Device

In this final chapter, you are going to learn how to deploy your app on connected Android and iOS devices. You can use the same process to run your app in an Android emulator or the iOS simulator. We will also explain the LiveSync feature and how you can use it to sync changes made to your app across all connected devices without the need to rebuild it. Finally, you are going to see how to begin a debug session in {{ site.sk }}.

## 3.1: Prerequisite to run your app on a device

There are a lot of similarities between **Build** and **Run on Device**. For example, you still need to provide a valid certificate and mobile provision to deploy your app on an iOS device. To avoid repetition with the previous chapter, we will focus only on the specific requirements needed to run your app on a device.

The only prerequisite to run your app on a device is to have one connected to your machine. You also need to verify that the device is detected in {{ site.sk }}. The **Devices** pane provides information about all connected devices and their current state - reachable or not. To open the **Devices** pane, click on the **Devices** button in the bottom right corner of the client.

## 3.2: Run your app on an Android device

Let's run the app on the connected Android device. 

Launch {{ site.sk }} and open your app. To open the run on device view, select **Run** and then **Run on Device**. Select the Android device/s on which you want to deploy your app, choose a **Build Type**, and leave the **Configuration** to **Debug**. 

Enabling the **Start Debugger** option will automatically begin a debugging session when the app is started on the device.

Click on the **Run on Device** button to start building the app. If the app is already installed on the device, any changes will be synced and the app will not undergo a complete rebuild. Once the app is deployed on the device, it will be launched automatically.

While the app is running on the device, you can inspect the device logs to obtain verbose information or identify issues. The device logs are accessible from the **Devices** pane. Choose the device you are interested in and select the **Console** tab.

## 3.3: Run your app on an iOS device

To build and deploy your app on a connected iOS device, select **Run** and then **Run on Device**. In the run on device view, select the iOS device/s on which you want to deploy your app. You need to specify certificate and mobile provision for every iOS device. To do this, hover on the device and click on the settings icon (the cogwheel). Provide a certificate and provision. If you are using certificate and mobile provision generated with the code signing assistance, ensure that you are deploying on the same device/s used during their creation. Choose a **Build Type** and leave the **Configuration** to **Debug**. Click on the **Build** button to start building the app.

Enabling the **Start Debugger** option will automatically begin a debugging session when the app is started on the device.

Click on the **Run on Device** button to start building the app. If the app is already installed on the device, any changes will be synced and the app will not undergo a complete rebuild. Once the app is deployed on the device, you need to launch it manually. 

You can inspect the iOS device logs the same way you would the Android ones.

## 3.4: LiveSync your changes

LiveSync lets you see changes made to your app applied in real time across all connected devices and emulators. For example, when you make changes to the user interface of your app by editing an XML or HTML file, you will see these changes applied instantly on the device. You will not need to rebuild and redeploy the app on the device. More extensive changes, like adding new plugins to your app, will trigger a rebuild.

LiveSync is enabled automatically when you **Run on Device** in **Debug** configuration. 

## 3.5: Debug your app

In {{ site.sk }}, you can debug apps built in **Debug** configuration and deployed on a connected device, Android emulator or the iOS simulator.

You can launch a debug session by enabling the **Start Debugger**  option before you click the **Run on Device** button. Alternatively, if the app is already running on your device, you can use the **Start Debugger** button placed next to the respective device in the **Devices** pane.

Use the newly opened Developer Tools window to debug your app. You can set breakpoints, inspect network requests, check the console for errors, and much more.

## Conclusion

And here it is where our tutorial must come to an end. Our hope is that we were able to show you everything you need to know about mobile app development with {{ site.ns-sk }}. It is time to grab your faithful sidekick and begin a journey of your own.