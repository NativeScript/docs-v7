---
title: Create a Development Provisioning Profile
description: Learn how to create a development provisioning profile in the iOS Dev Center.
position: 7
publish: true
slug: create-development-provisioning
---

# Create Development Provisioning Profile

The development provisioning profile is the only provisioning profile that enables debugging on device. With this type of provisioning profile, you can run your apps only on the devices included in the provisioning profile and you cannot publish apps in the App Store.

You can create a development provisioning profile in the [iOS Dev Center](https://developer.apple.com/membercenter).

> If you are using a Free Apple account, you can use the [code signing assistance]({% slug code-signing-assistance %}) feature of Sidekick to automatically generate temporary development certificate and provisioning profile.

## Prerequisites

* Verify that you have a valid certificate for development created for your Apple developer account. For more information, see [Create a Certificate for Development]({% slug create-development-certificate %}).
* Verify that you have registered an App ID for your app. For more information, see [Register an App ID]({% slug create-app-id %}).
* Verify that you have registered at least one device with your Apple developer account. For more information, see [Register Devices]({% slug register-devices %}).

## Procedure
1. Open [iOS Dev Center](https://developer.apple.com/membercenter) in your favorite browser and log in.
1. Click **Certificates, Identifiers &amp; Profiles**.
1. In the drop-down menu in the top left corner, verify that **iOS, tvOS, watchOS** is selected.
1. In the left-hand sidebar, select **Provisioning&nbsp;Profiles** &#8594; **Development**.
1. Click **+**.
1. Select **iOS&nbsp;App&nbsp;Development** and click **Continue**.
1. Select an App ID to associate with the provisioning profile and click **Continue**.<br/>To be able to use one development provisioning profile across multiple apps, select a wildcard App ID, if available.
1. Select one or more certificates for development to include in the provisioning profile and click **Continue**.<br/>Only certificates for development are listed.
1. Select one or more devices to include in the provisioning profile and click **Continue**.
1. Provide a name for the profile and click **Continue**.
1. (Optional) Click **Download** to download the provisioning profile.
1. Click **Done**.

## Next Steps

Now that you have created a development certificate and provisioning profile, you can [Deploy and Test Your App on a Connected Device]({% slug deploy-on-device %}).