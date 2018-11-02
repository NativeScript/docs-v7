---
nav-title: "Extending Application and Activity"
title: "Extending Application and Activity"
description: "Extending Application and Activity for Android"
position: 2
---

# Extending Application and Activity
This article describes how to create custom `android.app.Application` and `android.support.v7.app.AppCompatActivity` implementations in a NativeScript application. Demo code below is taken from the [Android Extend Sample](https://github.com/NativeScript/sample-android-extend).

## Philosophy
Because NativeScript is a JavaScript-to-Native framework, our main goal is to make as much as possible from the underlying native platforms easy to implement in JavaScript. Initially we discussed the option where developers would write Java code to achieve some more special cases like custom `android.support.v7.app.AppCompatActivity` implementations but then we agreed that we should explore a JavaScript approach first and only if it is not possible to fallback to native code. It turned to be pretty easy, especially with the new [Static Binding Generator (SBG)](https://www.nativescript.org/blog/details/static-binding-generator---what-is-it-good-for) tool.

## Overview
The SBG analyzes static JavaScript files and generates the corresponding Java files (or what we call bindings). Prior to the 2.1 release, the core modules provided custom `Activity` and `Application` implementations but these were tightly coupled with the other logic within the modules, making custom implementations close to impossible to achieve. For 2.1 we made some refactoring, with the solely purpose to shape the modules more as a library rather than a framework. In other words - to decouple the `Activity` implementation from the [frame.android.ts](https://github.com/NativeScript/NativeScript/blob/master/tns-core-modules/ui/frame/frame.android.ts) file and to completely remove the need for a custom `Application` class. With these changes, the modules can now work with custom `Activity` implementations.

>The modules will still need to get notified for some `Activity` events in order to work properly. These events are described in the [AndroidActivityCallbacks interface](https://github.com/NativeScript/NativeScript/blob/master/tns-core-modules/ui/frame/frame.d.ts#L310).

## Extending Application
The following steps are needed to create custom native `android.app.Application` object and use it, instead of the default `com.tns.NativeScriptApplication` one, provided in the empty project template of the Android Runtime.

1. Create a new JavaScript file in your `app` folder - name it `application.android.js`

    >Note the `*.android` suffix - we want this file packaged for Android only.

2. Declare the extend:

    ```javascript
    const superProto = android.app.Application.prototype;

    // the first parameter of the `extend` call defines the package and the name for the native *.JAVA file generated. 
    android.app.Application.extend("org.myApp.Application", {
        onCreate: function() {
            superProto.onCreate.call(this);
            
            // At this point modules have already been initialized

            // Enter custom initialization code here
        },
        attachBaseContext: function(base) {
            superProto.attachBaseContext.call(this, base);
            // This code enables MultiDex support for the application (if needed)
            // android.support.multidex.MultiDex.install(this);
        }
    });
    ```
    ```typescript
    // the `JavaProxy` decorator specifies the package and the name for the native *.JAVA file generated. 
    @JavaProxy("org.myApp.Application")
    class Application extends android.app.Application {
        public onCreate(): void {
            super.onCreate();
            
            // At this point modules have already been initialized

            // Enter custom initialization code here
        }

        public attachBaseContext(baseContext: android.content.Context) {
            super.attachBaseContext(baseContext);

            // This code enables MultiDex support for the application (if needed)
            // android.support.multidex.MultiDex.install(this);
        }
    }
    ```

3. Modify the `application` entry within the `AndroidManifest.xml` file found in the `<application-name>app/App_Resources/Android/` folder:

    ```xml
        <application
            android:name="org.myApp.Application"
            android:allowBackup="true"
            android:icon="@drawable/icon"
            android:label="@string/app_name"
            android:theme="@style/AppTheme" >
    ```

    >This modification is required by the native platform; it basically tells Android that your custom `Application` class will be used as the main entry point of the application.

4. In order to build the app with [webpack](../../../performance-optimizations/bundling-with-webpack.md), the extended Android application should be added as an [entry](https://github.com/NativeScript/nativescript-dev-webpack/blob/master/demo/AngularApp/webpack.config.js#L71) to the `webpack.config.js` file.

    ```javascript
        entry: {
            bundle: entryPath,
            application: "./application.android",
        },
    ```

    In this way, the source code of [`application.android.ts`](https://github.com/NativeScript/nativescript-dev-webpack/blob/master/demo/AngularApp/app/application.android.ts) is bundled separately as `application.js` file which is loaded from the native `Application.java` class on launch.

    The `bundle.js` and `vendor.js` files are not loaded early enough in the application launch. That's why the logic in `application.android.ts` is needed to be bundled separately in order to be loaded as early as needed in the application lifecycle.

    > Note: This approach won't work if `aplication.android.ts` requires external modules.

## Extending Activity
The core modules ship with a default `android.support.v7.app.AppCompatActivity` implementation, which ensures they alone are sufficient to bootstrap an empty NativeScript application, without forcing users to declare their custom `Activity` in every project. When needed, however, users may still specify custom `Activity` implementation and use it to bootstrap the application. The following code demonstrates how this can be done:

1. Create a new JavaScript file in your `app` folder - name it `activity.android.js`

    >Note the `*.android` suffix - we want this file packaged for Android only.

2. Declare the extend:

    ```javascript
    const frame = require("tns-core-modules/ui/frame");

    const superProto = android.support.v7.app.AppCompatActivity.prototype;
    android.support.v7.app.AppCompatActivity.extend("org.myApp.MainActivity", {
        onCreate: function(savedInstanceState) {
            if(!this._callbacks) {
                frame.setActivityCallbacks(this);
            }
            // Modules will take care of calling super.onCreate, do not call it here
            this._callbacks.onCreate(this, savedInstanceState, superProto.onCreate);

            // Add custom initialization logic here
        },
        onSaveInstanceState: function(outState) {
            this._callbacks.onSaveInstanceState(this, outState, superProto.onSaveInstanceState);
        },
        onStart: function() {
            this._callbacks.onStart(this, superProto.onStart);
        },
        onStop: function() {
            this._callbacks.onStop(this, superProto.onStop);
        },
        onDestroy: function() {
            this._callbacks.onDestroy(this, superProto.onDestroy);
        },
        onBackPressed: function() {
            this._callbacks.onBackPressed(this, superProto.onBackPressed);
        },
        onRequestPermissionsResult: function (requestCode, permissions, grantResults) {
            this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined);
        },
        onActivityResult: function (requestCode, resultCode, data) {
            this._callbacks.onActivityResult(this, requestCode, resultCode, data, _super.prototype.onActivityResult);
        }
    });
    ```
    ```typescript
    import {setActivityCallbacks, AndroidActivityCallbacks} from "tns-core-modules/ui/frame";

    @JavaProxy("org.myApp.MainActivity")
    class Activity extends android.support.v7.app.AppCompatActivity {
        private _callbacks: AndroidActivityCallbacks;
        
        public onCreate(savedInstanceState: android.os.Bundle): void {
            if (!this._callbacks) {
                setActivityCallbacks(this);
            }

            this._callbacks.onCreate(this, savedInstanceState, super.onCreate);
        }

        public onSaveInstanceState(outState: android.os.Bundle): void {
            this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
        }

        public onStart(): void {
            this._callbacks.onStart(this, super.onStart);
        }

        public onStop(): void {
            this._callbacks.onStop(this, super.onStop);
        }

        public onDestroy(): void {
            this._callbacks.onDestroy(this, super.onDestroy);
        }

        public onBackPressed(): void {
            this._callbacks.onBackPressed(this, super.onBackPressed);
        }

        public onRequestPermissionsResult(requestCode: number, permissions: Array<string>, grantResults: Array<number>): void {
            this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
        }

        public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void {
            this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult);
        }
    }
    ```

    >Note the `this._callbacks` property. It is automatically assigned to your extended class by the `frame.setActivityCallbacks` method. It implements the [AndroidActivityCallbacks](https://github.com/NativeScript/NativeScript/blob/master/tns-core-modules/ui/frame/frame.d.ts#L310) interface and allows the core modules to get notified for important `Activity` events. It is mandatory to call back to the modules through this interface, to ensure their proper initialization.

3. Modify the `activity` entry within the `AndroidManifest.xml` file found in the `<application-name>app/App_Resources/Android/` folder:

    ```xml
        <activity
            android:name="org.myApp.MainActivity"
            android:label="@string/title_activity_kimera"
            android:configChanges="keyboardHidden|orientation|screenSize">
    ```

4. In order to build the app with [webpack](../../../performance-optimizations/bundling-with-webpack.md), the absolute path to the file where the Android activity is extended should be added to the [`appComponents`](https://github.com/NativeScript/nativescript-dev-webpack/blob/master/demo/AngularApp/webpack.config.js#L19) array.

    ```javascript
        const appComponents = [
            "tns-core-modules/ui/frame",
            "tns-core-modules/ui/frame/activity",
            resolve(__dirname, "app/activity.android.ts"),
        ];
    ```

    In this way and with the default config, these components [get](https://github.com/NativeScript/nativescript-dev-webpack/blob/master/demo/AngularApp/webpack.config.js#L109-L116) in the common *vendor.js* chunk and are required by the [`android-app-components-loader`](https://github.com/NativeScript/nativescript-dev-webpack/blob/master/demo/AngularApp/webpack.config.js#L146-L149).

## See Also
* [How Extend Works](../generator/extend-class-interface.md)
