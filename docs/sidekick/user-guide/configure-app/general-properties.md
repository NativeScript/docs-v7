---
title: General Properties
description: In the General Properties tab you can quickly configure non-OS-specific options like app name, app identifier, app version and so on.
position: 2
publish: true
slug: general-properties
---

# General Properties

In the **General** tab, you can set or modify the app name, description, application identifier, application version, and author. 

* **App Name**<br /> The app name is the user-friendly title that appears on the device below the app icon. This setting applies to all device platforms. To set different display names for each platform, you need to modify the respective configuration files.
* **App Folder**<br /> The app folder field shows the storage location of your app.
* **Description**<br /> The description of the app.
* **Author**<br /> The name of the application author.
* **Application Identifier**<br /> The application identifier (App ID) is the unique identifier for your applications. To be able to build for both Android and iOS, your App ID must be unique and contain two or more strings, separated by a dot. Each string must start with a letter and should contain only letters and numbers. The app identifier must not start with an uppercase letter.
* **Application Version**<br /> The application version is used to create a uniform versioning for both iOS and Android. To enable this field, you need to ensure that the values for the iOS **Application Version** and **Application Build Version**, and the Android **Application Version** and **Application Version Code** meet the  following requirements:
```
// Assuming version = MAJOR.MINOR.PATCH (for example, 2.3.1)
iOS Application Version = MAJOR.MINOR.PATCH (2.3.1)
iOS Application Build Version = MAJOR.MINOR.PATCH (2.3.1)
Android Application Version = MAJOR.MINOR.PATCH (2.3.1)
Android Application Version Code = PATCH + MINOR * 100 + MAJOR * 10000 (20301)
```

