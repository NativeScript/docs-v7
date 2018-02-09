---
title: Debugging Plugins
description: Debugging Plugins
position: 25
slug: debugging-plugins
publish: true
---

# Debugging Plugins

Live sync debugging updates your demo/test app automatically in the simulator/device whenever you make a change in the plugin source code. Debugging a plugin is not much different than debugging a NativeScript app but needs some preparation to ease the plugin development. Before you continue, make sure you have covered the topics about [Debugging]({% slug debugging %}) and [NativeScript extension for Visual Studo Code]({% slug nativescript-extension-for-visual-studio-code %}). 

What this article covers:

* [Setup](#Setup)
* [Enabling](#Enabling)
* [Debugging](#Debugging)
* [Disabling](#Disabling)
* [Limitations](#Limitations)

## <a name='Setup'></a>Setup

Live sync debugging requires your plugin's source code to not be in the root of its home folder.

Bad:
```
nativescript-my-plugin/
├── index.js
└── package.json
```
Good:
```
nativescript-my-plugin/
├── demo
└── src
    ├── index.js
    └── package.json
```

>For the technically curious, this is because the build process will copy your plugin's source code folder, including **all** of its files, to their respective android/ios platform folder(s) prior to transpiling. If that process copied your project's root folder then it would also be copying your hidden/system (ex: .git) folders their respective android/ios platform folder(s); that would be bad.

If you created your plugin using the [NativeScript plugin seed](https://github.com/NativeScript/nativescript-plugin-seed) then you are already set up!

If you did not create your plugin using the [NativeScript plugin seed](https://github.com/NativeScript/nativescript-plugin-seed) then just make sure that, per the example above, your plugin's source code is not in your project's root folder.

>If you are debugging an existing or third party plugin, many of them may not be updated and properly structured to support live sync debugging. If a plugin's source code is in the project's root folder and not in a subfolder then you will need to move its source code out of the root folder and in to a subfolder. We encourage you to fork the plugin's original repo and create a Pull Request of your changes back to the plugin's original repo.

## <a name='Enabling'></a>Enabling

To enable local live sync debugging of your plugin in a demo/test app:

1. `cd /your-demo-or-test-folder`
2. `tns plugin add ../relative-path-to/your-plugin/src`

If you are using npm 5 then this will automatically `npm link` your demo/test app's node_modules folder to point to your plugin's source code.

If you are using npm 4 then this will have copied your plugin's files instead of linking directly to them. You will need to manually perform the following additional step(s):

3. `npm link ../relative-path-to/your-plugin/src`

Now the files under `/your-demo-or-test-folder/node_modules/your-plugin` are physically the same files that are located under `your-plugin/src`. This means that you can edit either `/your-demo-or-test-folder/node_modules/your-plugin` or `your-plugin/src` and the changes will automatically update in the demo/test app. 

## <a name='Debugging'></a>Debugging

Having the `npm link` set up, you can start debugging your demo project along with your plugin code in `node_modules` folder. Read more about [Debugging using `tns debug`]({% slug debugging %}) and [debugging using NativeScript extension for Visual Studo Code]({% slug nativescript-extension-for-visual-studio-code %}).

## <a name='Disabling'></a>Disabling

You may want to disable debugging your local code if you are done developing or have published your plugin and want to test what the rest of the world will experience when they install your public plugin.

To disable local live sync debugging of your plugin and install your public plugin in a demo/test app:

1. `cd /your-demo-or-test-folder`
2. `tns plugin remove your-plugin`

If you are using npm 5 then this will automatically call `npm unlink`.

If you are using npm 4 then you will need to perform the following additional step(s):

3. `npm unlink your-plugin`

Now, add back the dependency to your public plugin:

4. `tns plugin add you-plugin`

## <a name='Limitations'></a>Limitations

Using `npm link` eases the development of your plugin when you do any kind of code changes to your page templates, typescript/javascript, css files. What it won't do for you is to apply plugin changes to your demo related to:

* plugin's platform specific files (i.e Info.plist, AndroidManifest.xml)
* plugin's native libraries

This means that if during development you need to change Info.plist or add a native library to your plugin, then you need to run "tns plugin remove/add <your-plugin-name>". This will apply the plugin platform specifics to your demo. After that you can continue debugging and developing using `npm link`.
