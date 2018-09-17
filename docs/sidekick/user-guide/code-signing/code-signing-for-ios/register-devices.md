---
title: Register Devices for Development and Distribution
description: To run an app on a device during development, it needs to be signed with a matching certificate and provisioning profile that contain the device UDID. 
position: 6
publish: true
slug: register-devices
---

# Register Devices for Development and Distribution

To run your app on device during the development process, you need to build and code sign the app with a development provisioning profile or with an Ad Hoc distribution provisioning profile that includes the device. The provisioning profile must include the device that you wish to test on. To include a device in a provisioning profile, you first need to register it in the [iOS Dev Center](https://developer.apple.com/membercenter).

## Prerequisites

* Verify that you have obtained the **UDID** of your iOS device.
	* 1. Connect the iOS device to your Windows or {{site.osx}} system.
	* 2. In iTunes, open the device information.
	* 3. Click **Serial Number** to switch to **UDID**.
	* 4. Copy the **UDID**.

## Procedure

1. Open [iOS Dev Center](https://developer.apple.com/membercenter) in your favorite browser and log in.
1. Click **Certificates, Identifiers &amp; Profiles**.
1. In the drop-down menu in the top left corner, verify that **iOS, tvOS, watchOS** is selected.
1. In the left-hand sidebar, select **Devices** &#8594; **All**.
1. Click **+**.
1. Provide a name for the device.
1. Provide the **UDID** of the device.
1. Click **Continue**.
1. Review the details for your device and click **Register** to confirm the registration.

## Next Steps

Create a **[development provisioning profile]({% slug create-development-provisioning %})** or a **[distribution provisioning profile]({% slug create-distribution-provisioning %})** in the [iOS Dev Center](https://developer.apple.com/membercenter).