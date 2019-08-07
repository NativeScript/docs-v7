---
title: Build Process
description: Learn how to build the web and mobile parts of an Angular and NativeScript code-sharing project and how the build process works
position: 40
environment: angular
---

# Build Process

The code-sharing project comes with a build process that is capable of using the shared files together with the platform-specific ones, and providing a web or mobile app as a result. Here’s what that looks like at a high level.

![build-process](./img/build-process.png?raw=true)

## Web Build

To build a web app, it is business as usual — just use the Angular CLI to do the job.
When you call **ng serve** or **ng build**, the Angular CLI will ignore all NativeScript-specific files, as none of the web files directly reference any **.tns** files.

 > **ng serve -o** -> builds a web app from the code-sharing project and opens it in default browser

## Mobile Build

In order to build an iOS or an Android app with NativeScript, you need to use the [NativeScript CLI](https://www.npmjs.com/package/nativescript).

To build a mobile app from a code-sharing project run:

```
tns preview
```

