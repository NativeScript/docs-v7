---
title: Debugging Plugins
description: Debugging Plugins
position: 10
slug: debugging-plugins
publish: false
---

# Debugging Plugins

Debugging a plugin is not much different than debugging a NativeScript app but needs some preparation to ease the plugin development. Before you continue, make sure you have covered the topics about [Debugging]({% slug debugging %}) and [NativeScript extension for Visual Studo Code]({% slug nativescript-extension-for-visual-studio-code %}). 

What this article covers:

* [The Problem](#Theproblem)
* [Linking Your Plugin in the Demo App](#Linkingyourplugininthedemo)
* [Debugging](#Debugging)
* [Limitations](#Limitations)

##  <a name='Theproblem'></a>The Problem

Having your plugin developed separately from your plugin demo app makes debugging and development a tedious task. Relying only on the `tns plugin add\remove` commands slows down the development since on every change the commands need to be run to preview your changes in the demo app.

What would be the ultimate goal is to be able to debug your plugin as part of the demo application with the option to make ad hoc changes in the plugin source code and preview them immediately. In addition it would be also convenient to get advantage of the live sync and have your demo automatically updated in the simulator/device when you make a change in the plugin source code.

##  <a name='Linkingyourplugininthedemoapp'></a>Linking Your Plugin in the Demo App

Achieving the goal descibed above is possible by using `npm link` during plugin development. 

Boostrapping your plugin by using the [NativeScript plugin seed](https://github.com/NativeScript/nativescript-plugin-seed) links your plugin in the demo app out of the box on the `postclone` step. 

If you have your custom plugin structure you can still enable `npm link` by following the steps below:
1. Make sure your plugin code parent folder is different than the parent folder of your demo. See  [NativeScript plugin seed](https://github.com/NativeScript/nativescript-plugin-seed) for example where the plugin code is located in the `src` folder and demo is located in the `demo` folder, both on the root level. In terminal run:
2. `cd <your-plugin-folder>`
3. `npm link` to link your plugin in the global `node_modules` folder. [Read more about `npm link`](https://docs.npmjs.com/cli/link)
4. `cd <your-demo-folder>` to navigate to your demo folder
5. `npm link <your-plugin-name>`

Now the files under `<your-demo-folder>/node_modules/<your-plugin-name>` are physically the same files that are located under `src`. This means that making changes in `<your-demo-folder>/node_modules/<your-plugin-name>` will actually change the plugin source files. 

If at some point you're ready with the development and want to test how your plugin behaves on running `tns plugin add/remove` you can easily unlink your plugin by running Terminal:
1. `cd <your-demo-folder>`
2. `npm unlink <your-plugin-name>`
3. `cd <your-plugin-folder>`
4. `npm unlink`

[Read more about `npm unlink` command](https://www.npmjs.com/browse/keyword/unlink)

##  <a name='Debugging'></a>Debugging

Having the `npm link` set up, you can start debugging your demo project along with your plugin code in `node_modules` folder. Read more about [Debugging using `tns debug`]({% slug debugging %}) and [debugging using NativeScript extension for Visual Studo Code]({% slug nativescript-extension-for-visual-studio-code %}).

##  <a name='Limitations'></a>Limitations

Using `npm link` eases the development of your plugin when you do any kind of code changes to your page templates, typescript/javascript, css files. What it won't do for you is to apply plugin changes to your demo related to:

* plugin's platform specific files (i.e Info.plist, AndroidManifest.xml)
* plugin's native libraries

This means that if during development you need to change Info.plist or add a native library to your plugin, then you need to run "tns plugin remove/add <your-plugin-name>". This will apply the plugin platform specifics to your demo. After that you can continue debugging and developing using `npm link`.