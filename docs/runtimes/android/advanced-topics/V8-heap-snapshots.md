---
nav-title: "V8 Heap Snapshot"
title: "V8 Heap Snapshot"
description: "Using V8 heap snapshots with the Android Runtime"
position: 3
---

> **NOTE**: `nativescript-dev-android-snapshot` plugin is deprecated. The recommended approach for using V8 Heap Snpashot feature in the context of NativeScript is via [`nativescript-dev-webpack` plugin](https://docs.nativescript.org/tooling/bundling-with-webpack#v8-heap-snapshot) in combination with `--snapshot` flag.

Benefits of using `nativescript-dev-webpack` plugin in combination with `--snapshot` flag:

 1. No limitation for using only a few pre-generated snapshot packages (`tns-core-modules-snapshot` and `nativescript-angular-snapshot`).
 2. Fine-grained control over what is included in the snapshot. By changing the webpack configuration you can include any module in the snapshotted bundle.
 3. An Angular app can take advantage of both ahead of time compilation and heap snapshotting.
 4. No need to choose between Webapck and heap snapshot. You can have both.
 5. It is easier to troubleshoot errors because the whole process of heap snapshot generation is happening on the developer machine.
 6. It is more scalable and effective.

# Introduction

The Android Runtime currently uses the V8 engine to execute JavaScript and interact with native APIs. Starting with version 2.1 of the Android Runtime, you can hint the runtime to use custom [V8 heap snapshots](https://v8project.blogspot.bg/2015/09/custom-startup-snapshots.html) for reduced startup time.

To do so you have to add the `heapSnapshotBlob` key in the `android` section of the root `package.json` file in the `app` folder. This key should point to a folder that has a subfolder for each CPU ABI. Each of these subfolders should contain a file named `snapshot.blob` which contains the precompiled V8 heap snapshot for the correct architecture.

## Example

Create a NativeScript application with the CLI and add the following key in the `<your_app>/app/package.json` (not to be confused with the `<your_app>/package.json` file):
```javascript
{
  "main": "index.js",
  // ...
  "android": {
      "heapSnapshotBlob": "snapshots"
  }
}
```

The runtime will look for the heap snapshots located at `<your_app>/app/snapshots`. It should have the following structure:
```
app/snapshots
├── arm64-v8a
│   └── snapshot.blob
├── armeabi-v7a
│   └── snapshot.blob
├── x86
│   └── snapshot.blob
└── ...
    └── snapshot.blob
```

These files can be as much as 10MB of size each but are nicely compressed in the APK package. If they are placed in the `platform/assets/snapshots` folder, only the heap snapshot file for the currently running CPU architecture would be extracted at startup. Heap snapshots are created with the [mksnapshot tool](https://github.com/v8/v8/blob/4.7.80/src/snapshot/mksnapshot.cc) included in the V8 repository.

## NativeScript Android Snapshot Plugin

For easier use of heap snapshots we have provided a plugin that can automatically download precompiled snapshots of the Core NativeScript and NativeScript+Angular packages. You can install it with the following command:

```shell
tns install android-snapshot
```

For more information about the plugin and the distributed snapshot packages follow the related repository: https://github.com/NativeScript/android-snapshot
