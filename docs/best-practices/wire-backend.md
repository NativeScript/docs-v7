---
title: Connecting to a Backend Service
description: Best practices for connecting NativeScript apps to backend services
position: 20
slug: wire-backend
---


# Connecting to a Backend Service

Most mobile applications need to communicate with data in one form or another. Depending on the exact scenario, this may be local storage but if you need to share data or sync it across devices, you need to use some kind of backend.


This article goes through some of the popular ways to connect your NativeScript mobile app with a backend.


## Kinvey NativeScript SDK

[Kinvey](https://www.kinvey.com/) makes it easy for developers to set up, use and operate a cloud backend for their mobile apps. They don't have to worry about connecting to various cloud services, setting up servers for their backend, or maintaining and scaling them.

__[Get Started with the Kinvey NativeScript SDK](https://devcenter.kinvey.com/nativescript/guides/getting-started) or take a look at the [SDK repository](https://github.com/Kinvey/nativescript-sdk).__

## Firebase  

[Firebase](https://firebase.google.com/) is a BAAS solution, providing an easy, quick way to create a backend database and start sending data to a collection. Firebase also supports not only data storage but user authentication and static hosting.

You can integrate your NativeScript app with Firebase through the community plugin.

Find the nativescript-plugin-firebase repository and documentation at [https://github.com/EddyVerbruggen/nativescript-plugin-firebase](https://github.com/EddyVerbruggen/nativescript-plugin-firebase) or clone the [demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase-demo) for a quick start.


## See Also
* [HTTP module]({%ns_cookbook http%})