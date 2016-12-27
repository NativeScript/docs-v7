---
title: Extend existing Android app
description: Learn how to extend your existing Android app with Angular 2 and NativeScript
position: 11
slug: extend-existing-android-app
environment: angular
---

# Extend your existing Android app with Angular 2 and NativeScript

## This article provides step-by-step instructions how to extend existing Android app with Angular 2 and NativeScript

1.Build your NativeScript app for Android:
`tns build android`

2.Copy your NativeScript app `\platforms\android\src\main\assets` folder to your Android app:

![Copy your NativeScript](../img/extend-existing-android-app-with-ns-angular2/copy-your-nativeScript.png)

3.Copy your NativeScript app `\platforms\android\src\main\java\com\tns` folder to your Android app java classes folder:

![Copy your NativeScript](../img/extend-existing-android-app-with-ns-angular2/copy-your-nativeScript-app2.png)

4.Add reference to **nativescript.aar** and **widgets-release.aar**:

![Copy your NativeScript](../img/extend-existing-android-app-with-ns-angular2/add-reference.png)

> Note: Both can be found in your NativeScript app `\platforms\android\` folder.


5.Add both [Java classes](https://github.com/enchev/android-ng2-tns/tree/master/app/src/main/java/com/example/myexistingapplication) and [JavaScript implementations](https://github.com/enchev/android-ng2-tns/tree/master/app/src/main/assets/app) of **MyCustomNativeScriptActivity** and **MyCustomNativeScriptFragment** to your Android app:

![Copy your NativeScript](../img/extend-existing-android-app-with-ns-angular2/add-java-classes-java-implementations.png)

6.Start MyCustomNativeScriptActivity using NativeScript RuntimeHelper:

![Copy your NativeScript](../img/extend-existing-android-app-with-ns-angular2/start-myCustomNativeScriptActivity.png)

7.Run your Android app and enjoy the result:

![Copy your NativeScript](../img/extend-existing-android-app-with-ns-angular2/result.gif)


Get the app from here: [https://github.com/enchev/android-ng2-tns](https://github.com/enchev/android-ng2-tns)
