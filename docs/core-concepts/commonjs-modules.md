---
nav-title: Using CommonJS Modules in NativeScript Apps
title: "CommonJS Modules in NativeScript Apps"
description: Learn how to use CommonJS Modules in NativeScript Apps
position: 110
---

# Using CommonJS Modules in NativeScript Apps

NativeScript modules and the code for your NativeScript app need to comply with the [CommonJS specification](http://wiki.commonjs.org/wiki/Modules/1.1.1). In NativeScript, files and modules are in one-to-one correspondence. To be able to call the functionality of a custom or built-in NativeScript module, you need to reference it in a `require` statement. When declaring your `require` statements, keep in mind that the NativeScript runtimes search and evaluate JavaScript files in a platform-dependent way for performance reasons.

This is the typical architecture of a built and packaged NativeScript app. All example `require` statements in this article refer to this sample architecture:
```
/private/var/.../Applications/HelloWorldApp.app
└── app
    ├── app.js
    ├── main-page.js
    ├── package.json
    ├── user-module
    │   ├── helper.js
    │   └── index.js
    └── tns_modules
        └── camera
            ├── camera.js
            └── package.json
```

## Location Rules
There are several ways you can load CommonJS modules:
- [Loading Absolute Files](#loading-absolute-files)
- [Loading Files from the App Bundle](#loading-files-from-the-app-bundle)
- [Loading NativeScript Modules](#loading-nativescript-modules)
- [Loading Modules Relatively](#loading-modules-relatively)

### Loading Absolute Files
Paths starting with `/` are treated as absolute paths relative to the device file system:

```javascript
require('/private/.../HelloWorldApp.app/app/app.js');
```
Resolves to `/private/.../HelloWorldApp.app/app/app.js`.

### Loading Files from the App Bundle
Paths starting with `~` are resolved relative to the app bundle:

```javascript
require('~/user-module/index.js')
```
Resolves to `/private/.../HelloWorldApp.app/app/user-module/index.js`.

### Loading NativeScript Modules
Paths starting with no special symbol are resolved relative to the `tns_modules` folder:

```javascript
require('camera/camera.js');
```
Resolves to `/private/.../HelloWorldApp.app/app/tns_modules/camera/camera.js`.

For more information about using NativeScript and Node plugins see [Plugins.md](../plugins/plugins.md).

### Loading Modules Relatively
Paths starting with `.` or `..` are resolved relative to the calling module:

```javascript
// In `app/user-module/index.js`:
require('./helper.js');
```
Resolves to `/private/.../HelloWorldApp.app/app/user-module/helper.js`.

## Requiring JSON Files
Starting with NativeScript 1.5.1, you are able to require `.json` files, the same way as `.js` files. Objects are cached and live indefinitely, so consider using the file system module to read JSON files instead. This might be useful for static configuration files, which are parsed only once but used from many modules.

## Available Module Variables
In each module, the `module` variable is a reference to the object representing the current module. The `module` object has some properties useful for inspecting it. The following examples are for the `/private/.../HelloWorldApp.app/app/main.js` module.

* `module.require(id)` - The `module.require` method provides a way to load a module as if `require()` was called from the original module.
* `module.id` - The fully resolved filename to the module, e.g. `/private/.../HelloWorldApp.app/app/main.js`.
* `module.filename` - The fully resolved filename to the module, e.g. `/private/.../HelloWorldApp.app/app/main.js`.
* `__dirname` - The name of the directory that the currently executing script resides in, e.g. `/private/.../HelloWorldApp.app/app/`.
* `__filename` - The full filename that the currently executing script is located at, e.g. `/private/.../HelloWorldApp.app/app/main.js`.

## Global Require Function
A `global.require` function is available and useful in the context of the App Inspector because it can be called outside the context of an evaluating module. It resolves relative to the `app` folder:

```javascript
global.require('./user-module');
```
Resolves to `/private/.../HelloWorldApp.app/app/user-module/index.js`.

## Android and iOS-Specific Modules
Modules can have Android `*.android.js` or iOS-specific `*.ios.js` file extensions. This way a module can expose a common interface with different platform-specific implementations. During the project preparation, the module which corresponds to the platform is renamed to `*.js` and used at runtime.

## Caching
Modules are cached, so requiring a file multiple times will still evaluate it once. This also helps to avoid infinite recursion while resolving circular dependencies.
