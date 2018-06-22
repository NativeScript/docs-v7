---
title: Chapter 2 - Build Your App
description: 
position: 12
publish: true
slug: gs-build
---

# Chapter 2 - Build Your App

In this chapter, you are going to learn about the cloud and local builds and what are the most important difference between the two. You will also see what are the requirements and steps needed to build your app for Android and iOS.  

## 2.1: Cloud builds or Local builds

You might ask yourself what are the differences between the Cloud and Local builds?

* **No preliminary setup is required to build in the cloud** <br/>
You do not need to install any additional SDKs or frameworks to build your app in the cloud. For example, you are not required to install the Android SDK or the Java Development Kit. In comparison, to build locally you need to set up your development machine as explained in the [Install iOS and Android Requirements for Local Builds]({% slug installation %}#step-4-optional-install-ios-and-android-requirements-for-local-builds) article.
* **Build for iOS in the cloud on all major operating systems**<br/>
The cloud builds negate the requirement to have a macOS system to build your app for iOS. You can use a Windows or Linux system to develop {{ site.ns }} apps for iOS.

> To build your apps in the cloud, you need a Telerik account. You can create one for free from [here](https://www.telerik.com/login/v2/telerik).

## 2.2: Build for Android

Let's see what are the requirements to build your app for Android. As mentioned above, to build Android apps locally, you need to have all the requirements installed on your machine. In this tutorial, we are going to build the app in **Debug** configuration. However, if you plan on building the app in **Release** configuration, you need to have a valid Google Play certificate. 

If you do not have {{ site.sk }} running, launch it now and open your app. To open the build view, select **Run** and then **Build**. Select **Android** for target platform, choose a **Build Type**, and leave the **Configuration** to **Debug**. Click on the **Build** button to start building the app.

The initial build might take longer to complete because the app is undergoing a complete build. However, most of the data is cached and then reused in consequential builds. This is what we call "incremental builds" and it will significantly reduce the time required to complete a build.

While you are waiting, you might want to inspect the log produced during build. To access it, click on the **Output** button located in the bottom right corner of the client.  Under the **All** tab, you will see unfiltered information about the build, including  the build steps, warnings and errors. The **Errors** tab will show only errors that have caused the build to fail.

When the build process is complete, you will be presented with a QR code and a local path to the produced application package (`APK`). You can install the `APK` manually or use an Android device with installed barcode scanner app to scan the QR code. This will download your app directly on the device. 

## 2.3: Build for iOS

It is time to see how you can build your app for iOS. As mentioned above, to build iOS apps locally, you need to have a properly configured macOS system. 

To build your app for iOS, you need to provide a valid certificate and mobile provision. For more information about iOS code signing, see [The iOS Developer Program]({% slug ios-developer-program %}). 

In this tutorial, instead of going through the cumbersome process of creating a certificate and mobile provision in the iOS Dev Center, we are going to use another feature of {{ site.ns-sk }} - the code signing assistance. Before you continue, open the [Code Signing Assistance article]({% slug code-signing-assistance %}) and follow the steps outlined there to generate a temporary development certificate and mobile provision. If you have your own certificate and mobile provision, feel free to skip this step.

The temporary code signing assets can be used to build your app only in **Debug** configuration. To build your app in **Release**, you have to manually create a valid [distribution certificate]({% slug create-distribution-certificate %}) and [distribution provisioning profile]({% slug create-distribution-provisioning %}). 

Now that you have a certificate and mobile provision, let's move on and actually build the app. If you do not have {{ site.sk }} running, launch it now and open your app. To open the build view, select **Run** and then **Build**. Select **iOS** for target platform, then keep hovering on the iOS platform box and click on the settings icon (the cogwheel). Provide the certificate and provision generated with the code signing assistance or your own and close the dialog. Choose a **Build Type** and leave the **Configuration** to **Debug**. Click on the **Build** button to start building the app.

When the build process is complete, you will be presented with a local path to the produced application package (`IPA`). You can install the `IPA` manually on a device through iTunes. If you have used the code signing assistance, you can install the app only on the devices connected to your machine while you were generating the temporary certificate and mobile provision.

<div class="next-chapter-link-container">
  <a href="run-on-device">Continue to Chapter 3 - Run Your App on a Device</a>
</div>