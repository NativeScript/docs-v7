---
title: Register an App ID
description: Before you can create a provisioning profile, you need to have a registered App ID. Follow the steps to register an App ID in the iOS Dev Center.
position: 5
publish: true
slug: create-app-id
---

# Register an App ID

Before you can create a provisioning profile, you need to have a registered App ID. The iOS App ID uniquely identifies an application with the Apple application services and lets you incorporate them in your app. The Apple application services include Push Notifications, In-App Purchase, Game Center, to name a few.

You can register an App ID in the [iOS Dev Center](https://developer.apple.com/membercenter).

## Procedure
1. Open [iOS Dev Center](https://developer.apple.com/membercenter) in your favorite browser and log in.
1. Click **Certificates, Identifiers &amp; Profiles**.
1. In the drop-down menu in the top left corner, verify that **iOS, tvOS, watchOS** is selected.
1. In the left-hand sidebar, select **Identifiers** &#8594; **App IDs**.
1. Click **+**.
1. Type a description for your app in the **App ID Description** text box. The description is visible only in the [iOS Dev Center](https://developer.apple.com/membercenter) and will help you identify your App ID in the list of identifiers that are available to your Apple developer account.
1. Select the type of App ID that you want to create and provide a bundle identifier.<br>Switching between the two types of ID might automatically change any selected app services.
	* To use one App ID with multiple provisioning profiles, register a *wildcard App ID*. 
	* If you want to build and publish an app with a unique App ID identifier and provisioning profile, register an *explicit App ID*.
1. Select the app services that you want to incorporate in your application.
1. Click **Continue**.
1. Review the details for your App ID and click **Register** to confirm the registration.

## Next Steps

Create a **[development provisioning profile]({% slug create-development-provisioning %})** or a **[distribution provisioning profile]({% slug create-distribution-provisioning %})** in the [iOS Dev Center](https://developer.apple.com/membercenter).