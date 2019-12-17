---
title: Transpilers
description: Learn how to enable TypeScript and other transpiler support in your NativeScript project.
position: 130
slug: transpilers
previous_url: /transpilers,/core-concepts/transpilers
---

# Using transpilers in NativeScript

Transpilers allow you to develop your application in languages other than JavaScript, CSS and XML. In the common case, an additional transpiler is not needed in NativeScript (version 6.x and above) because the framework is enabling Webpack builds by default. The Webpack build produces already transpiled `bundle.js` file. Use additional transpilers only if you have a specific case which requires it.

## Installing Babel

Run the following command to install Babel support into your project:

```Shell
tns install babel
```

The above command installs the Babel compiler and the `nativescript-dev-babel` npm module as a dev dependencies. The latter installs a `prepare` hook into your project, that transpiles your JavaScript files with Babel during build and when live-syncing.

If you want to change the version of the Babel compiler used in your project, simply install the version you want into your project through npm.

If you want to configure Babel, create a `.babelrc` file in the root of your project according to [spec](https://babeljs.io/docs/usage/babelrc/).
