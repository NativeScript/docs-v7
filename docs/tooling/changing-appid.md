---
title: Change App ID
description: Learn how change the application identifier(App ID) in the NativeScript application for both platforms(iOS/Android).
position: 60
slug: changing-appid
---

# What is App identifier

The App ID is a unique string, which contain two or more strings, separated by a dot. It is used to identify your app on the device and in the store(iTunes Store / Google Play Store), where it is published. The application identifier refers to the Bundle ID for iOS and application ID - Android based on the mobile OS the app is built for. Each string must start with a letter and should contain only letters and numbers. The app identifier must not begin with an uppercase letter or number. In NativeScript we will use the project name, which is set, while executing the create command (`tns create <project_name>`), for the initial App ID(e.g. `org.nativescript.{appName}`).  


## How to change the App ID

From NativeScript(v5.0.0) we can change the App ID using the project's `package.json` file while specifying a unique string for iOS and Android. Follow the below-attached steps to change the identifier:

1. Set in `package.json`
```
"nativescript": {
    "id": {
        "ios": "{appID1}" ,
        "android": "{appID2}"
    }
  }
```

Example:
```
{
    "nativescript": {
        "id": {
            "ios": "org.nativescript.appidios",
            "android": "org.nativescript.appidandroid"
        },
        "tns-android": {
            "version": "*"
        },
        "tns-ios": {
            "version": "*"
        }
    },
    .........
}
```

> Note: The new structure is needed only if you need different app id for the platforms. If you use the same app id for both, you can change it as follows: 
```
"nativescript": {
    "id": "{appID}"
}
```
Example:
```
"nativescript": {
    "id": "org.nativescript.myappid"
}
```

2.  If you are using project, created before NativeScript(v5.0.0), open `<project_name>/App_Resources/Android/app.gradle` file and remove the `applicationId` key.

3. If you have opened the project in NS Sidekick remove the `<project_name>/App_Resources/Android/settings.json` file

4. Run the build
