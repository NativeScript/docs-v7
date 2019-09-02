---
title: "Gradle Hooks"
description: "Extensibility hooks for the gradle build"
position: 2
slug: gradle-hooks
---

# Gradle Hooks

NativeScript uses gradle to build android applications. The gradle build files are part of the application template that comes from the android runtime package. Sometimes, if you want to use any external plugins or libraries you need to add some code to the gradle files. There are several locations for gradle files that can be used for adding your code or gradle properties. They are applied in the build process in the following order:

1. `App_Resources/Android/gradle.properties`
2. `App_Resources/Android/buildscript.gradle`
3. plugins' `buildscript.gradle`
4. `App_Resources/Android/before-plugins.gradle`
5. plugins' `include.gradle`
6. `App_Resources/Android/app.gradle`

## gradle.properties

In this file you can set various properties which could be used at a later point in the gradle script files. For example, if you want to define the variable `myCustomVariable` with a value `myCustomValue`, you would need to add the following in your `gradle.properties` file:

```Groovy
myCustomVariable=myCustomValue
```
Then, in your gradle script file, you can access the property by accessing it on the `project` object as `project.myCustomVariable`

## app.gradle

In this file you can set the default Android configurations like `minSdkVersion` and `targetSdkVersion`. You can also add your native dependencies here. In most of the cases, this is the file which you should use when you need to add some gradle code in your application. The reason for applying `app.gradle` last is that it should be able to override any properties or settings that any plugin might have set.

```Groovy
android {
  defaultConfig {
    minSdkVersion 21
    generatedDensities = []
    targetSdkVersion 28
  }
  aaptOptions {
    additionalParameters "--no-version-vectors"
  }
}
dependencies {
  implementation 'androidx.recyclerview:recyclerview:1.1.0-alpha06'
}
```

## Plugins' include.gradle

Every NativeScript plugin, which contains native Android dependencies, should also provide a valid `include.gradle` file located in the root of its `platforms/android` directory. This `include.gradle` file must meet the following requirements:

* It must contain its own [configuration](http://developer.android.com/tools/building/configuring-gradle.html).
* It may contain native dependencies required to build the plugin properly.
* Any native dependencies should be available in [jcenter](https://bintray.com/bintray/jcenter) or in the Android SDK installed on your machine, if you want it to work out of the box. You can see an example of an implementation dependency [here](https://github.com/NativeScript/nativescript-facebook/blob/master/src/platforms/android/include.gradle).

This file can be used for many kinds of native project configuration, depending on the purpose of the plugin. You can find more information [here](http://developer.android.com/tools/building/configuring-gradle.html)

```Groovy
// optional elements
dependencies {
    implementation "groupName:pluginName:ver"
}
```

## before-plugins.gradle

Sometimes you need to change something right before the execution of all the `include.gradle` files of your project's plugins. An example is setting `googlePlayServicesVersion` when you use **nativescript-google-maps-sdk** plugin. If you set the value with the following code in the `app.gradle` file:

```Groovy
ext {
  googlePlayServicesVersion = "10.0.1"
}
```
it will be too late for the plugin to receive it, as all plugins' `include.gradle`s will have been applied beforehand. So, the correct place to set this property will be in `before-plugins.gradle` instead.

## buildscript.gradle

When using a plugin like [this one](https://docs.embrace.io/docs/android-integration-guide) there are some **buildscript** configurations which need to be added in the application's **build.gradle** file. Unfortunately this cannot be achieved through the `app.gradle` file nor through plugin's `include.gradle` files. They are being applied too late in the build process and the changes in the **buildscript** do not have any effect.
In this case a `buildscript.gradle` file needs to be used. These files can be placed either in `App_Resources/Android` folder in the NativeScript application, or in the `platforms/android` folder of a plugin. All such files will be applied to the **buildscript** of the application's `build.gradle`.

```Gradle
repositories {
    google()
    jcenter()
}
dependencies {
    classpath 'embrace-io:embrace-swazzler:3.1.6'
}
```
