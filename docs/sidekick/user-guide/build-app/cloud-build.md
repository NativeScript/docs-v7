---
title: Cloud Builds
description: 
position: 1
publish: true
slug: cloud-build
---

# Cloud Builds

With {{ site.ns-sk }}, you can build your apps in the cloud and utilize its power and flexibility to achieve a truly cross-platform mobile development on all major desktop operating systems. This includes iOS development on operating systems other than macOS. You do not require any preliminary setup to build your mobile apps in the cloud.

The cloud builds are incremental, which ensures that every build after the first one will take significantly less time to complete. This is possible because some of the app data is cached during the first build and then reused in later builds. 

## Prerequisites

* To build for iOS, you need a valid certificate and mobile provision. If you have a Free Apple Developer account, you can use the [Code Signing Assistance]({% slug code-signing-assistance %}) to automatically generate temporary certificate and mobile provision. For more information about iOS code signing, see the [iOS Developer Program article]({% slug ios-developer-program %}).
* To build for Android in Release configuration, you need a valid Google Play self-signed code signing identity. For more information on how to generate a release certificate for Android, see the following [article](https://docs.nativescript.org/publishing/publishing-android-apps#certificates).

## Procedure for Android

1. Launch {{ site.ns-sk }} and open your app.
1. From the top toolbar, select **Build**.
1. Select **Android**.
1. Hover on the **Android** box and click on the cogwheel icon to open the **Manage Android Certificates** dialog. 
1. Next to **Certificate**, click **Browse** to choose a certificate stored on the file system or expand the **drop-down** to select a certificate stored in the Certificate Manager (Windows) or the Keychain (macOS).
1. Close the **Manage Android Certificates** dialog.
1. Under **Build Type**, select **Cloud Build**.
1. Select a **Configuration**.
1. (Optional) Enable **Clean Build**. When you enable this option, any previously cached data will be ignored and your app will undergo a complete rebuild. Initiating a clean build may help you to resolve sporadic build failures.
1. (Optional) Enable **Webpack**. For more information, see [Bundle Your Code with Webpack]({% slug webpack %}). 
1. (Optional) If any issues are present, resolve them before you continue.
1. Click on **Build**.
1. If you have provided a certificate stored on the file system (step 5), you will be prompted to enter its password on every build. Certificates stored in the Certificate Manager or Keychain do not require password validation. 
1. When the build process is complete, you will be presented with a path to the produced `APK` file and a **QR code**. You can use a barcode scanner app to scan the QR code and install the application directly on a device. 

## Procedure for iOS

1. Launch {{ site.ns-sk }} and open your app.
1. From the top toolbar, select **Build**.
1. Select **iOS**.
1. Hover on the **iOS** box and click on the cogwheel icon to open the **Manage iOS Provisions and Certificates** dialog. 
1. Next to **Certificate**, click **Browse** to choose a certificate stored on the file system or expand the **drop-down** to select a certificate stored in the Certificate Manager (Windows) or the Keychain (macOS).
1. Next to **Provision**, click **Browse** to choose a mobile provision stored on the file system.
1. Close the **Manage iOS Provisions and Certificates** dialog.
1. Under **Build Type**, select **Cloud Build**.
1. Select a **Configuration**.
1. (Optional) Enable **Clean Build**. When you enable this option, any previously cached data will be ignored and your app will undergo a complete rebuild. Initiating a clean build may help you to resolve sporadic build failures.
1. (Optional) Enable **Webpack**. For more information, see [Bundle Your Code with Webpack]({% slug webpack %}). 
1. (Optional) If any issues are present, resolve them before you continue.
1. Click on **Build**.
1. If you have provided a certificate stored on the file system (step 5), you will be prompted to enter its password on every build. Certificates stored in the Certificate Manager or Keychain do not require password validation. 
1. When the build process is complete, you will be presented with a path to the produced `IPA` file.

## Next Steps

[Deploy your app]({% slug deploy-on-device %}) on a connected device.

## See Also

* [Local Builds]({% slug local-build %})