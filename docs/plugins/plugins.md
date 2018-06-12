---
title: Plugins Overview
description: When the NativeScript modules do not provide the native device or platform capability that you need, you can use NativeScript plugins.
position: 10
slug: plugins-infrastructure
previous_url: /plugins
---

# Using Plugins

NativeScript plugins are [npm packages](https://docs.npmjs.com/getting-started/packages) with added functionality. Finding, installing, and removing NativeScript plugins works the same way as eg: a Node.js server or front-end web development.

* [Existing Community Plugins](#existing-community-plugins)
* [Installing Plugins](#installing-plugins)
* [Removing Plugins](#removing-plugins)

> **Top Tip:** Use [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick) to search, install, and remove plugins with. Sidekick also has starter kits, single page templates, cloud-based builds for iOS and Android, and app store publishing with more in development.

## Existing Community Plugins

The [market.nativescript.org](https://market.nativescript.org/) site lists NativeScript specific plugins; a filtered list of npm packages from the upstream (npmjs.com)[https://www.npmjs.com] site. 

- NativeScript targeted plugins generally (not mandatory) use the `nativescript-*` format 
- eg [nativescript-accelerometer](https://www.npmjs.com/package/nativescript-accelerometer)

Also check or ask for help on the [NativeScript plugins forum](https://discourse.nativescript.org/c/plugins) as NativeScript team and community may be able to help find what is required.

## Installing Plugins

To install a plugin dependancy into an app use the `tns plugin add` command.

Eg: the following command installs the [NativeScript camera plugin](http://market.nativescript.org/plugins/nativescript-camera) plugin with a few. Note it also ammends the package.json file and a few other `tns` tricks.

```bash
tns plugin add nativescript-camera
```

Installation of a NativeScript plugin mimics the installation of an npm package.
- downloads the plugin from npm unless 404, 500 or even a 418
- extracts the plugin into the `node_modules/` folder at the root of project
- adds the plugin to the project root `package.json` file
- resolves the plugin’s dependencies, if any

## Removing Plugins

To remove a plugin from a project, run the following command

```bash
tns plugin remove nativescript-camera
```
As with installation, the removal of a NativeScript plugin mimics the removal of an npm package
- removes any plugin files from the app’s `node_modules/` folder in at root of project
- removes any of the plugin’s dependencies
- removes the plugin from the project’s root `package.json` file

