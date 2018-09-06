---
title: Local Builds
description: 
position: 2
publish: true
slug: local-build
---

# Local Builds

Build your apps locally on your machine with the help of previously installed development tools and SDKs.

> To build iOS apps locally, you need to run {{ site.ns-sk }} on a macOS system. The certificate and mobile provision used to code sign your app should be selected from Xcode.

## Prerequisites

* Verify that you have configured your machine for local development. For more information, see [Install iOS and Android Requirements for Local Builds]({% slug installation %}#step-3-install-ios-and-android-requirements-for-local-builds).
* To build for iOS, you need a valid certificate and mobile provision. If you have a Free Apple Developer account, you can use the [Code Signing Assistance]({% slug code-signing-assistance %}) to automatically generate temporary certificate and mobile provision. For more information about iOS code signing, see the [iOS Developer Program article]({% slug ios-developer-program %}).
* To build for Android in Release configuration, you need a valid Google Play self-signed code signing identity. For more information on how to generate a release certificate for Android, see the following [article](https://docs.nativescript.org/publishing/publishing-android-apps#certificates).

## Procedure for Android

1. Launch {{ site.ns-sk }} and open your app.
1. From the top toolbar, select **Build**.
1. Select **Android**.
1. Hover on the **Android** box and click on the cogwheel icon to open the **Manage Android Certificates** dialog. 
1. Next to **Certificate**, click **Browse** to choose a certificate stored on the file system or expand the **drop-down** to select a certificate stored in the Certificate Manager (Windows) or the Keychain (macOS).
1. Close the **Manage Android Certificates** dialog.
1. Under **Build Type**, select **Local Build**.
1. Select a **Configuration**.
1. (Optional) Enable **Webpack**. For more information, see [Bundle Your Code with Webpack]({% slug webpack %}). 
1. (Optional) If any issues are present, resolve them before you continue.
1. Click on **Build**.
1. If you have provided a certificate stored on the file system (step 5), you will be prompted to enter its password on every build. Certificates stored in the Certificate Manager or Keychain do not require password validation. 
1. When the build process is complete, you will be presented with a path to the produced `APK` file and a **QR code**. You can use a barcode scanner app to scan the QR code and install the application directly on a device. 

## Procedure for iOS

> Currently, you cannot select certificates and mobile provisions stored on the file system.

1. Launch {{ site.ns-sk }} and open your app.
1. From the top toolbar, select **Build**.
1. Select **iOS**.
1. Hover on the **iOS** box and click on the cogwheel icon to open the **Manage iOS Provisioning and Certificates** dialog. 
1. Next to **Certificate**, expand the **drop-down** to select a certificate stored in the Keychain. 
1. The **Provision** will be taken automatically from the Keychain. However, you need to ensure that the Keychain contains a mobile provision tied to the selected certificate and the respective `App ID`.
1. Close the **Manage Android Certificates** dialog.
1. Under **Build Type**, select **Local Build**.
1. Select a **Configuration**.
1. (Optional) Enable **Webpack**. For more information, see [Bundle Your Code with Webpack]({% slug webpack %}). 
1. (Optional) If any issues are present, resolve them before you continue.
1. Click on **Build**.
1. When the build process is complete, you will be presented with a path to the produced `IPA` file.

## Next Steps

[Deploy your app]({% slug deploy-on-device %}) on a connected device.

## See Also

* [Cloud Builds]({% slug cloud-build %})