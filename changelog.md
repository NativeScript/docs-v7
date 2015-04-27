---
nav-title: Changelog
title: "Changelog"
description: A list of breaking changes across the releases of the NativeScript framework and its tools.
position: 19
---

# NativeScript Changelog

The document lists the major breaking changes in the NativeScript framework.

### 0.10.0 (2015, April 17)

This release introduces a new project directory structure. Projects from earlier releases have the following structure:

```
.
└── hello-world
    ├── app
    │   ├── app
    │   │   ├── app.css
    │   │   ├── app.js
    │   │   ├── bootstrap.js
    │   │   ├── main-page.js
    │   │   └── main-page.xml
    │   ├── App_Resources
    │   │   └── ...
    │   └── tns_modules
    │       └── ...
    └── platforms
        └── ...
```
Starting with version 0.10, the inner app folder has been removed. Newly created projects have the following structure:

```
.
└── hello-world
    ├── app
    │   ├── app.css
    │   ├── app.js
    │   ├── bootstrap.js
    │   ├── main-page.js
    │   ├── main-page.xml
    │   ├── App_Resources
    │   │   └── ...
    │   └── tns_modules
    │       └── ...
    └── platforms
        └── ...
```

>To migrate to the new structure, complete the following steps:

>1. Manually move all files and folders from the inner app folder one level up inside the outer app folder.
>2. Remove the now empty inner app folder.

# See Also

* [Cross-platform Modules Changelog](https://github.com/NativeScript/NativeScript/blob/master/CHANGELOG.md)
* [Android Runtime Changelog](https://github.com/NativeScript/android-runtime/blob/master/CHANGELOG.md)
* [iOS Runtime Changelog](https://github.com/NativeScript/ios-runtime/blob/master/CHANGELOG.md)