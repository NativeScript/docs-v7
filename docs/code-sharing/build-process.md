---
title: Build Process
description: NativeScript Documentation - Code Sharing - Build Process
position: 40
environment: angular
---

# Build Process

The code-sharing project comes with a build process that is capable of using the shared files together with the platform-specific ones, and providing a web or mobile app as a result. Here’s what that looks like at a high level.

![build-process](./img/build-process.png?raw=true)

## Web Build

To build a web app, it is business as usual — just use the Angular CLI to do the job.
When you call **ng serve** or **ng build**, the Angular CLI will ignore all NativeScript-specific files, as none of the web files directly reference any **.tns** files.

 > **ng serve** -> builds a web app from the code-sharing project

<!--
For AOT builds, you may need to give TypeScript a helping hand, by adding NativeScript extensions to **tsconfig.json** exclude list.

```ts
"exclude": [
  "**/*.ns.ts",
  "**/*.tns.ts",
  "**/*.android.ts",
  "**/*.ios.ts"
]
```
-->

## Mobile Build

In order to build an iOS or an Android app with NativeScript, you need to use the [NativeScript CLI](https://www.npmjs.com/package/nativescript) with the [nativescript-dev-webpack plugin](https://www.npmjs.com/package/nativescript-dev-webpack).

To build a mobile app from a code-sharing project run:

```ios
tns run ios --bundle
```

```Android
tns run android --bundle
```

> **NOTE**: The `--bundle` flag notifies the NativeScript CLI to use **Webpack** to build a mobile app from the code-sharing project. Webpack is a hard dependency for code-sharing projects, and you must use this flag for your project to run successfully.

### Behind the scenes

The build process consists of two major steps: bundling and building the native app.

For bundling, the **nativescript-dev-webpack** plugin prepares the project in a **Virtual File System**. The **VFS** is used to provide **NativeScript-specific** files.

Every time a file is requested from the **File System**, like this import statement:

```TypeScript
import { MyComponent } from './my/my.component';
```

Webpack checks the **VFS** for the **.tns** file first (in this case **my.component.tns.ts**), and serves the **NativeScript-specific** file. If the VFS does not find a NativeScript-specific file, it provides the shared file instead.

> This **virtually** replaces web files with NativeScript files.

Finally, the NativeScript build process takes the bundled image of the project and completes the build with Native Build Tools (Xcode for iOS and Gradle for Android), and as a result produces a native mobile app.
