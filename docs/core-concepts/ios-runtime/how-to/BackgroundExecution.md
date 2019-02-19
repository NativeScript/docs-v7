---
nav-title: "Background Execution"
title: "Background Execution"
description: "Describing how to execute code while your application is in background mode."
position: 50
---

# Background Execution

This article will walk you through how to execute code, while your application is not active. This can be useful in many cases like: building an audio player, tracking location of the user constantly and so on.

## General Purpose Tasks

For general purpose tasks the operating system restricts you to a limited amount of time right after the application is put on background. This is needed in cases when you need additional time to finish a currently running task or cleanup the state of the application or the data.

If you need this kind of background execution in your application there is a [Sample Application](https://github.com/NativeScript/sample-ios-background-execution) that illustrates how this can be implemented.

## Long-Running Tasks

In some specific cases your application might need to execute tasks long after the application is closed or for a long period of time. For this cases, the technical realization is very similar to the one described in the sample application, but you need to ask for explicit permissions.

Let's take the following use case as an example: you have a mobile app and you want to check for new content while the application is not active and if new content is available - initiate a local notification.

The first things you need to do is to modify your Info.plist file that is located in ./app/App_Resources/iOS/Info.plist. To specify that your app requires to be woken up in background regularly in order to check for new content you need to add the following snippet:

``` XML
<key>UIBackgroundModes</key>
<array>
    <string>fetch</string>
</array>
```

After that you need to create a custom application delegate, similar to the one in the sample application, but instead of using ```applicationDidEnterBackground```, you need the ```applicationPerformFetchWithCompletionHandler```, which can look like this:

``` TypeScript
import * as LocalNotifications from "nativescript-local-notifications";

export class CustomAppDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    private bgTask;
    private timer;
    private timerCounter;

    public applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: any) {
        console.log("App is running in background");

        // Check for new data
        const newData = this.getNewData();

        // If new data exists, initiate a local notification
        if (newData) {
            LocalNotification.schedule([{
            title: 'Title of the notification'
          }]).then(
              function() {
                console.log("Notification scheduled");
              },
              function(error) {
                console.log("scheduling error: " + error);
              }
          );

            // Let the OS know that there were new data and complete the task
            completionHandler(UIBackgroundFetchResult.newData)
        } else {
            // Otherwise, let the OS know there is no new data and complete the task
            completionHandler(UIBackgroundFetchResult.NoData);
        }

    }
}
```

Finally, in your main.ts set your custom app delegate:

``` TypeScript
import { CustomAppDelegate } from "./custom-app-delegate";

application.ios.delegate = CustomAppDelegate;
```

In order to test and debug this functionality, you will need to open your project in Xcode, as currently this is the only way to simulate the "fetch" operation in a simulator. To do this, run the project and from the 'Debug' menu choose the 'Simulate Background Fetch' option.

There are several other type of tasks that might need to perform on background. The complete list can be check in the [Background Execution Article](https://developer.apple.com/library/content/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.html#//apple_ref/doc/uid/TP40007072-CH4-SW4), which is part of the App Programming Guide for iOS.
