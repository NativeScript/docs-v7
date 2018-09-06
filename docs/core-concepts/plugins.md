---
title: Using Plugins
description: When the NativeScript modules do not provide the native device or platform capability that you need, you can use NativeScript plugins.
position: 70
slug: plugins-infrastructure
previous_url: /plugins
---

# Using Plugins

NativeScript plugins are npm packages with some added native functionality. Therefore, finding, installing, and removing NativeScript plugins works a lot like working with npm packages you might use in your Node.js or front-end web development.

> **Tip:** Alternatively, you can search, install, and remove plugins with [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick). Sidekick also offers starter kits, single page templates, cloud-based builds for iOS and Android, and app store publishing.

## Finding plugins

Because NativeScript plugins are npm packages, you can find NativeScript plugins on npm’s site by searching for “nativescript-plugin-name”. For example, a search of “nativescript accelerometer” would point you right at the [NativeScript accelerometer plugin](https://www.npmjs.com/package/nativescript-accelerometer).

The NativeScript team also maintains an [official marketplace](http://market.nativescript.org/), which displays a filtered list of NativeScript-related plugins from npm. A search for “accelerometer” on the plugins marketplace will point you at the plugin you need.

If you can't find a plugin, try asking for help on [Stack Overflow](https://stackoverflow.com/questions/tagged/nativescript). The NativeScript team and community may be able to help find what you’re looking for.

Also, make sure to look through the [NativeScript core modules](https://docs.nativescript.org/core-concepts/modules), which ship as a dependency of every NativeScript app. There’s a chance that the functionality you need is built in. If you’re still not finding what you need, you can request the plugin as an idea on the [NativeScript community forum](https://discourse.nativescript.org/c/plugins), or you can take a stab at [building the plugin yourself](/plugins/building-plugins/).

## Installing Plugins

Once you’ve found the plugin you need, install the plugin into your app using the `tns plugin add` command.

```Node
tns plugin add <plugin-name>

```

For example, the following command installs the [NativeScript camera plugin](http://market.nativescript.org/plugins/nativescript-camera).

```Node
tns plugin add nativescript-camera
```

If you prefer, you could use the NPM command `npm install` instead of the NativeScript CLI command `plugin add`.

```Node
npm i nativescript-camera --save
```

The installation of a NativeScript plugin mimics the installation of an npm package. The NativeScript CLI downloads the plugin from npm and adds the plugin to the `node_modules` folder in the root of your project. During this process, the NativeScript CLI adds the plugin to your project’s root `package.json` file and also resolves the plugin’s dependencies (if any).


## Installing Plugins as Developer Dependencies

As shown above the command **tns plugin add <plugin-name>** is actually doing **npm i <plugin-name> --save** behind the scenes. If you need to install a **developer dependency** in your project (e.g., like **tns-platform-declarations** or **nativescript-dev-webpack**) then you will need to explicitly save it as a **devDependency**. To achieve that, use the **npm install** command with **--save-dev** flag. For example:
```Shell
npm i tns-platform-declarations --save-dev
```

> **Note:** The difference between dependencies and developer dependencies is that **dependencies** are required to run, while **devDependencies** are needed only during development. Example for dependency is the **nativescript-camera** plugin which is required runtime so you could use the hardware camera. On the other hand, the **tns-platform-declarations** is a developer dependency required only for intelliSense during the development process. The `devDependncies` should not be installed as `dependencies` to avoid large output build files (large application size). Example `package.json` file using both `dependencies` and `devDependencies` can be found [here](https://github.com/NativeScript/nativescript-sdk-examples-js/blob/master/package.json#L31-L44).

## Importing and Using Plugins 

Once the plugin you need is installed, you can start using it in your project. Note that each plugin might have its configuration that needs to be satisfied so always check carefully the plugin's documentation and the README file. The below code snippet demonstrated the basic usage of **nativescript-camera** plugin.

```JavaScript
const cameraModule = require("nativescript-camera"); // Requiring the plugin module 
camera.requestPermissions();

// Or import only a specific class/method/property  of the plugin
const requestPermissions = require("nativescript-camera").requestPermissions; // Requiring the needed code
requestPermissions();
```
```TypeScript
import * as camera from "nativescript-camera"; // Requiring the plugin module 
camera.requestPermissions();

// or import only a specific class/method/property of the plugin
import { requestPermissions } from "nativescript-camera"; // Requiring only the needed code
requestPermissions();
```

## Removing Plugins

To remove a NativeScript plugin from your project, run the following command from your command line.

```
tns plugin remove <plugin-name>
```

For example, the following command removes the NativeScript camera plugin.

```
tns plugin remove nativescript-camera
```

As with installation, the removal of a NativeScript plugin mimics the removal of an npm package.

The NativeScript CLI removes any plugin files from your app’s `node_modules` folder in the root of your project. The CLI also removes any of the plugin’s dependencies and also removes the plugin from your project’s root `package.json` file.
