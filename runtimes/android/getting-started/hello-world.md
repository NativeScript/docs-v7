---
nav-title: "Hello World Application"
title: "Hello World Application"
description: "NativeScript Android Runtime Getting Started - Hello World"
position: 1
---

# Overview
The content in this document describes how to create a NativeScript Application in Android Studio.
> **Note:** The recommended way of creating truly cross-platform NativeScript projects is through its [Command-Line Interface](https://github.com/NativeScript/nativescript-cli).

# Prerequisites
* [Android Developer Tools](http://developer.android.com/sdk/index.html) with Android Studio.
* The NPM Android Runtime Project (`npm install tns-android`).

# Setup Project Directory Structure
> **Note:** The tns-android folder structure follows the ADT's plugin for Eclipse format, which differs from the Android Studio's one, hence some manual copy-paste steps are required.

* Create a new `Blank Activity` project in Android Studio.
* Add the `assets` folder within the project (in the Project window right-click `App`, New->Folder->Assets Folder).
* Add a `jniLibs` folder within the project (in the Project window right-click `main`, New->Directory->jniLibs).
* Locate the already installed `tns-android` package on the file system and:
	* Copy the content of the `./framework/assets` folder and paste it in the project's assets folder.
	* Within the `./libs` folder:
		* Copy all the JAR files (except the xxx.support.xxx one) and paste them to the project's `libs` folder.
		* Copy the `armeabi-v7a` and `x86` folders and paste them in the project's `jniLibs` folder.
* Within the project's `assets` folder create a new folder named `app`.
* Create a new `bootstrap.js` file within the `app` folder.
* Open the` AndroidManifest.xml` file and edit the name of the application like: 
```xml
<application
    android:name="com.tns.NativeScriptApplication"
    ...
```
* Open the` AndroidManifest.xml` file and edit the name of the activity like:
```xml
<activity
    android:name="com.tns.NativeScriptActivity"
    ...
```

# Setup Bootstrap.js
Now that the project is properly setup, we need to properly initialize the `bootstrap.js` file. It may be thought of as the **Main Entry Point** of a NativeScript application. The NativeScript Runtime will expose the `app` object within the global context and use it to initialize the application from JavaScript. Following is the minimum required code:

```javascript
// declare the extended NativeScriptActivity functionality
var extendsObject = {
	onCreate: function(savedState){
		// call the base NativeScriptActivity.onCreate method
		// the "this" variable points to a NativeScriptActivity instance
		this.super.onCreate(savedState);

		// create a button and set it as the main content
		var button = new android.widget.Button(this);
		button.setText("Hello World");

		this.setContentView(button);
	}
}

// pass the extends object to create a new NativeScriptActivity instance
var mainActivity = com.tns.NativeScriptActivity.extends(extendsObject);

var applicationInitObject = {
	getActivity: function(intent) {
		// this method is called whenever a new instance of NativeScriptActivity is about to be created
		return mainActivity;
	},
	onCreate: function() {
		// This is the first method called. Called from the android.app.Application.onCreate method.
	} 
}

// The NativeScriptRuntime exposes the app object within the global context
app.init(applicationInitObject);

```
Build and run the project. You should see a button named "Hello World", occupying the application's content space.

# See Also
* [Project Structure](./project-structure.md)
* [Command-Line Interface](https://github.com/NativeScript/nativescript-cli)
* [Cross-Platform Modules](https://github.com/NativeScript/docs)