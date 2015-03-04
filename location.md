---
nav-title: Location in NativeScript 
title: "App: Location"
description: How to work with geographical location data in NativeScript.
position: 11
---

# Location

The NativeScript location module uses an accuracy criteria approach to deliver geolocation. This means that getting (or monitoring) a location is powered by the most accurate location provider that is available (for example if GPS signal is available and the GPS provider is enabled, then it will be used; if GPS is not connected, the device falls back to other available providers such as Wi-Fi networks or cell towers). 

This approach does not limit location monitoring only to a specific location provider; it can still work with all of them.

More information about the NativeScript location module can be found in the [API Reference](./ApiReference/location/location.md). You are advised to start with the [How-to](./ApiReference/location/HOW-TO.md) article.
