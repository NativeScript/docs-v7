---
nav-title: "Location"
title: "Location"
description: "NativeScript Documentation: Location"
position: 8
---

# Location

Location module is designed to be a wrapper of all available platforms APIs (related to location), which simplifies the process of creating a location powered applications with NativeScript framework. NativeScript location module uses an accuracy criteria approach to deliver locations. Which means that getting a location (or monitoring locations) is powered by the best appropriate location provider (for example if you need a high accuracy GPS provider will be used). However under some circumstances (for example GPS does not work indoor), device will use all available providers (WI-FI network or cell towers) to determine location. In all cases device will return the best possible location with a given accuracy. This approach does not limit the location monitoring only to a specific location provider, but works with all of them.

More information about location module can be found in [API-Ref](../Content/ApiReference/location/location.md) and [How-to](../Content/ApiReference/location/HOW-TO.md) pages.