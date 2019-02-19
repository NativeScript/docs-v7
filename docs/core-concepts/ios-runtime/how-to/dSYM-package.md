---
title: Obtaining and using iOS Runtime's dSYM package
description: Add the iOS Runtime .xcodeproj to an existing app
position: 20
---

# Obtaining and using iOS Runtime's dSYM package

The debug symbols of NativeScript framework are useful when debugging or analyzing crash reports of {N} applications. They are required by the debugger and different analytics services in order to display meaningful call stacks for stack frames coming from the framework.

## Downloading the dSYM package

Since version 5.1.0, with each new release of NativeScript we upload the dSYM package as an asset in the corresponding release tag in GitHub. To find the one that you need open the [releases](https://github.com/NativeScript/ios-runtime/releases) page and download the `NativeScript.framework.dSYM.zip` asset under the particular version that your application uses.

## Using dSYMs in Xcode

For Xcode to locate and use the debugging symbols you simply have to extract the ZIP archive somewhere on your machine. Once you have the dSYM package locally, Xcode should be able to find it. It does so by querying Spotlight with a command similar to `mdfind "com_apple_xcode_dsym_uuids == *"`, providing the correct build UUID. For more detailed info on analyzing crash reports you can refer to [TN 2151 of Apple Documentation](https://developer.apple.com/library/archive/technotes/tn2151/_index.html)

After locating the dSYM package, Xcode will be able to provide desymbolicated call stacks when debugging and when opening crash reports.

## Using dSYMs with crash analytics

Depending on the analytics service there might be different approaches for uploading 3rd party frameworks' dSYMs. You can refer to the documentation of the one that you are using for more information.
