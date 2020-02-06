---
title: Package managers
description: Learn how to use different package managers when working with NativeScript application.
position: 100
slug: package-managers
---

## What is Package Manager

A package manager is a piece of software that lets you manage the external code, written by you or someone else, that your project needs to work correctly. By default, NativeScript CLI uses Node Package Manager (`npm`) for managing the dependencies of the application. When new application is created, CLI automatically calls `npm install` to install all of its dependencies.

## Supported package managers
NativeScript CLI allows you to configure the package manager used when working with dependencies. When you change the defaultly used `npm` package manager, CLI will use the newly set package manager for all operations it executes related to project dependencies, for example, project creation, managing dependencies, etc.

NativeScript CLI supports three package managers:
- `npm` - this is the default option
- `yarn` - you can set it by calling `tns package-manager set yarn`. More information about `yarn` is available [here](https://yarnpkg.com/)
- `pnpm` - from version 6.4, you can use `pnpm` to manage the dependencies of your application. You can use `pnpm` by calling `tns package-manager set pnpm`. NOTE: You will have to use `--shamefully-hoist` flag if you call `pnpm` on your own. CLI passes this flag when installing dependencies with `pnpm` and probably your application will not work if you omit it. More information about `pnpm` is available [here](https://pnpm.js.org/).

In case you want to check what is the currently used package manager, you can use:
```
$ tns package-manager get
```
