---
title: Transpilers
description: Learn how to enable TypeScript and other transpiler support in your NativeScript project.
position: 30
slug: transpilers
previous_url: /transpilers,/core-concepts/transpilers
---

# Using transpilers in NativeScript

Transpilers allow you to develop your application in languages other than JavaScript, CSS and XML. NativeScript applications can be developed more comfortably when transpilers are used in the project. NativeScript projects support the Babel transpiler out of the box, although any other transpiler can be integrated through the necessary hooks.

## Installing Babel

Run the following command to install Babel support into your project:

```Shell
tns install babel
```

The above command installs the Babel compiler and the `nativescript-dev-babel` npm module as a dev dependencies. The latter installs a `prepare` hook into your project, that transpiles your JavaScript files with Babel during build and when live-syncing.

If you want to change the version of the Babel compiler used in your project, simply install the version you want into your project through npm.

If you want to configure Babel, create a `.babelrc` file in the root of your project according to [spec](https://babeljs.io/docs/usage/babelrc/).

## Installing other transpilers

Transpiler support can be extended through the use of hooks. The easiest way to distribute transpiler hooks is by means of npm modules. You can use the implementation of the TypeScript and Babel hooks as reference and grok the [nativescript-hook module](https://github.com/NativeScript/nativescript-hook) that provides common hook installation support to transpiler authors.
