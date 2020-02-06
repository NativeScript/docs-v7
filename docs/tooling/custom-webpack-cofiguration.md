---
title: Custom webpack configuration
description: Learn how to use custom webpack configuration for your NativeScript application.
position: 70
slug: custom-webpack-config
---

## What is webpack configuration

The webpack configuration file `webpack.config.js` is the file that contains all the configuration, plugins, loaders, etc. to build the JavaScript part of the NativeScript application. The file is located at the root of the NativeScript application. For each flavor (Angular, Vue.js, React, TypeScript, JavaScript) the content of the file is different as the way to process the files in the application differs.
Currently the content is under user's control, but the default configuration file comes from `nativescript-dev-webpack` plugin during its postinstall step (or when you run the `update-ns-webpack --configs` script located in your `<project dir>/node_modules/.bin/` directory).
We are constantly trying to improve the content of the default `webpack.config.js` files, so during update of the `nativescript-dev-webpack`, we've added a check to see if the content of your application's `webpack.config.js` file differs from the new default one and show warning in such case.
However, in many cases you need to add some custom logic in your `webpack.config.js` file, for example in case you have some assets that you need to copy or you have a custom Android activity. In this case, whenever you update `nativescript-dev-webpack` you will see the mentioned warning. Also, in case you want to be sure you've got all of the required changes from the default `webpack.config.js` coming with the new version of `nativescript-dev-webpack`, you have to merge the two webpack configurations manually.

## How to use custom webpack configuration

From NativeScript v6.4.0 and nativescript-dev-webpack v1.5.0 you can use a custom path to webpack configuration. To achieve this you need to set `webpackConfigPath` property in your `nsconfig.json` file:

1. Set in `nsconfig.json`
```
{
	"webpackConfigPath": "./my-custom.webpack.config.js"
}
```

2. Create the actual file `my-custom.webpack.config.js` at the root of the application (as we've pointed in `nsconfig.json` that it is located there). In this file you can place your custom logic.

Example
```
const webpackConfig = require("./webpack.config");
module.exports = (env) => {
	// Here you can modify env before passing them to the default config
	const config = webpackConfig(env);

	// Here you can modify everything created by the default configuration
	return config;
}
```

> NOTE: You may not require and use the default webpack.config.js file, but we strongly recommend you to do so. It contains the default rules and logic for processing your application scripts to NativeScript application.

3. Run the build/run operation to verify everything works as expected:
```
$ tns run <platform>
```

4. [Optional] Remove the `webpack.config.js` from your application and add it to `.gitignore` - in case you do not want to see the warnings for different webpack configurations anymore, you can safely remove the `webpack.config.js` and add it to your `.gitignore` file, so noone will commit it. This way, during dependency installation, the postinstall script of `nativescript-dev-webpack` will always place the current default configuration file.
In case you prefer to check all the changes when you update the `webpack.config.js` file, you can still commit it in your repository with the default content and skip this step.

## Examples
Here are a few example that demonstrate how you can use custom webpack configuration files

### Add new assets to be copied
In case you want to copy additional assets to your application, you can use the following approach:
```
const webpackConfig = require("./webpack.config");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => {
	const config = webpackConfig(env);
	const customCopyInstance = new CopyWebpackPlugin([
		{ from: { glob: "my-custom-dir/**" } },
	]);

	config.plugins.unshift(customCopyInstance);

	return config;
};
```
In this case we add a new instance of the `CopyWebpackPlugin` that will copy all files from our `my-custom-dir` directory to the build folder.

### Custom application and activity (Android)

In case you have a custom application and activity for Android, you can do the following:
```
const webpackConfig = require("./webpack.config");
const path = require("path");

module.exports = env => {
	env = env || {};
	env.appComponents = env.appComponents || [];
	env.appComponents.push(path.resolve(__dirname, "app", "activity.android.ts"));

	env.entries = env.entries || {};
	env.entries.application = "./application.android";
	const config = webpackConfig(env);
	return config;
};
```
> NOTE: In this example, our activity code is in the `app` directory, in `activity.android.ts` file. The application is located in `app` directory in `application.android.ts` file. A full example can be found [here](https://github.com/NativeScript/nativescript-dev-webpack/tree/master/demo/)

### Add additional rules for specific files

In case you want to have additional processing of some files:
```
const webpackConfig = require("./webpack.config");
const path = require("path");

module.exports = env => {

	const config = webpackConfig(env);

	const babelOptions = {
		babelrc: false,
		presets: [
			"@babel/preset-react"
		],
		plugins: [ ]
	};

	config.module.rules.push(
		{
			test: /\.js(x?)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				options: babelOptions
			},
		}
	);

	config.resolve.extensions = [".js", ".jsx", ".scss", ".css"];

	return config;
};
```

### Remove default plugin
In some cases, you may want to remove some of the default plugins added by the default configuration:
```
const webpackConfig = require("./webpack.config");
const path = require("path");

module.exports = env => {
	env = env || {};
	const config = webpackConfig(env);
	if (env.ios) {
		config.plugins = config.plugins.filter(p => !(p && p.constructor && p.constructor.name === "HotModuleReplacementPlugin"));
	}

	return config;
};
```
In this example we demonstrate how you can remove the `HotModuleReplacementPlugin` plugin when building for iOS.
