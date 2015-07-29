---
nav-title: Breaking Changes
title: "Breaking Changes"
description: A list of breaking changes across the releases of the NativeScript framework and its tools.
position: 21
---

# NativeScript Framework Breaking Changes

This document describes the critical breaking changes and suggested workarounds, if any, in the NativeScript framework. The complete list with all the changes may be found on the respective [Github repositories](#see-also).

### 1.2.0 (2015, July 24)

There are changes in how the **Android ActionBar/IOS NavigationBar** is configured. Ut is now defined with `page.actionBar` instead of `page.optionsMenu`. [See an example...](./ApiReference/ui/action-bar/HOW-TO.md) 

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

#See Also

* [Cross-platform Modules Changelog](./Changelogs/Cross-Platform Modules.md)
* [Command-line Interface Changelog](./Changelogs/CLI.md)
* [iOS Runtime Changelog](./Changelogs/iOS Runtime.md)
* [Android Runtime Changelog](./Changelogs/Android Runtime.md)
