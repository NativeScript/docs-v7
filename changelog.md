---
nav-title: Changelog
title: "Changelog"
description: A list describing changed through the different versions
position: 19
---

# NativeScript Changelog

The document lists the major breaking changes in the NativeScript framework.

### 0.10.0 (2015, April 17)

The project directory structure in the CLI has changed. The previous structure looks like:

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
With the new version the inner `app` folder has been removed and the project structure now looks like:

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

>To migrate to the new structure you will need to manually move the files within the inner `app` folder one level up and then delete the already empty inner `app` folder.

# See Also

* [Cross-platform Modules Changelog](https://github.com/NativeScript/NativeScript/blob/master/CHANGELOG.md)
* [Android Runtime Changelog](https://github.com/NativeScript/android-runtime/blob/master/CHANGELOG.md)
* [iOS Runtime Changelog](https://github.com/NativeScript/ios-runtime/blob/master/CHANGELOG.md)