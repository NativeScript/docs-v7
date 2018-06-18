---
title: Code Signing Assistance
description: With the help of the code signing assistance functionality and a Free Apple account, you can create a temporary development certificate and mobile provision.
position: 9
publish: true
slug: code-signing-assistance
---

# Code Signing Assistance

To build and deploy your apps on an iOS device, you need to have them code signed with a valid certificate and mobile provision. The code signing assistance will help you to automatically generate temporary certificates and mobile provisions which can be used to deploy and test your app on a device. The automatically generated code signing assets cannot be used to publish your app to the App Store.

> Currently, only users with **Free Apple Developer** accounts can benefit from the automatic code signing assets generation. We are working on extending this functionality and make it available for all types of accounts. You can create a Free Apple Developer account from [here](https://appleid.apple.com/account).

> The iOS devices connected to your machine during the generation will be included in the mobile provision. Apps signed with this mobile provision can be deployed only on those devices.

> To generate a temporary certificate and mobile provision, your application must have a unique App ID.

## Prerequisites

* Verify that you are using a Free Apple Developer account.
* Verify that you have connected at least one iOS device to your machine.
* Verify that the App ID of your application is unique.

## Procedure

1. Launch Sidekick and open your app.
1. Select **Run** &#8594; **Run on Device**.
1. Hover over the iOS device box and click on the settings icon (cogwheel) in the top right corner.
1. In the **Manage iOS Provisioning and Certificates** dialog, select **Auto Generate**.
1. Enter your Apple credentials and select **Generate**.
1. When prompted, provide a password for the newly created certificate. Click on **Set Password**.
1. Close the **Manage iOS Provisioning and Certificates** dialog. 
1. Select **Run on Device** to build and deploy your app on the device. 

## Next Steps

Now that you have created a temporary development certificate and provisioning profile, you can [Deploy and Test Your App on a Connected Device]({% slug deploy-on-device %}).
