---
nav-title: "Modules"
title: "Modules"
description: "NativeScript Android Runtime Modules & Require"
position: 3
---

# Modules
The Module Design Pattern is an integral piece of any robust application and is used to keep units of code cleanly separated and organized. NativeScript has a simple module loading mechanism which strictly follows the [CommonJS Specification](http://www.commonjs.org/specs/modules/1.0/). Most of the functionality is similar with the [Node.js](http://nodejs.org/api/modules.html) implementation with some minor differences. A typical NativeScript application will use the [set of modules](https://github.com/NativeScript/docs) which add cross-platform abstraction layer on top of OS-specific APIs.

# NativeScript Modules vs. Node Modules
Following are the differences between Node modules and NativeScript modules:

### Core Modules
NativeScript Runtime **does not** have built-in JavaScript modules, which enables developers to have complete control over module implementation.

### Loading From tns_modules
If the module identifier passed to `require(moduleName)` does not begin with '/', '../', or './', then NativeScript will lookup the module within the tns_modules folder. Since there is only one such folder within an application, **the lookup will happen only once, unlike in Node which recursively traverses the parent directories as well**.

### Global Folders
Unlike in Node, NativeScript **does not** have the notation for *Global Modules*. Modules are private for the application package. The `require` implementation will throw an exception in case a module from the external storage is attempted to be loaded.

# See Also
* [Project Structure](./project-structure.md)
* [Cross-platform Modules](https://github.com/NativeScript/docs)
* [Node Modules](http://nodejs.org/api/modules.html)
