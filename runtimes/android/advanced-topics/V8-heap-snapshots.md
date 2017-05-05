---
nav-title: "V8 Heap Snapshot"
title: "V8 Heap Snapshot"
description: "Using V8 heap snapshots with the Android Runtime"
position: 3
---

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
