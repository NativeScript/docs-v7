---
nav-title: "Location"
title: "App: Location"
description: "NativeScript Documentation: Location"
position: 11
---

# Location

NativeScript location module uses an accuracy criteria approach to deliver locations. Which means that getting a location (or monitoring locations) is powered by the best appropriate location provider (for example if GPS signal is available and GPS provider is enabled then it will be used). However under some circumstances (for example GPS does not work indoor), device will use all available providers (Wi-Fi network or cell towers) to determine location. In all cases device will return the best possible location with a given accuracy. This approach does not limit the location monitoring only to a specific location provider, but works with all of them.

More information about location module can be found in [API-Ref](./ApiReference/location/location.md) and [How-to](./ApiReference/location/HOW-TO.md) pages.
