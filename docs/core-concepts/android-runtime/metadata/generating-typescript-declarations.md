---
nav-title: "Generating TypeScript Declaration Files"
title: "Generating TypeScript Declaration Files"
description: "Generating TypeScript declaration files (a.k.a. definitions) for Android SDK or third-party native Android libraries. Using the Andorid DTS Generator the declaration files are provding IntelliSense and easy access to marshalled APIs. The output TypeScript definitions are converted from Java to JavaScript"
position: 12
slug: generating-typescript-declarations
---

# Generating TypeScript Declarations

## Overview

One of the main advantages of TypeScript is the type checking. TypeScript uses declaration files (a.k.a definitions) to "recognize" the types and function signatures of a given module. In the context of NativeScript mobile development, a developer may need to access the native Android SDK via data conversion (a.k.a. [marshalling](../marshalling/overview.md)) which is converting Java to JavaScript (or vice-versa). When working with TypeScript (or with Angular where the first-class citizen language is also TypeScript), the developer would also need to explicitly declare all namespaces, classes, properties, etc. that are used from the native Java or Objective-C APIs.

### The Bad Practice

When you are using plain JavaScript, all you need is to know the conversion syntax rules, but when TypeScript is used, then each class, method, or property should have a static declaration. We might merely declare all namespaces and variables with the type `any`.

For example:
```TypeScript
// Bad Practice
declare let android: any;
let androidContext = android.content.Context;
```

The above is a bad practice for two reasons:
- As the namespace is cast to `any` you won't have any intelligence. No matter if working with the Android SDK or third-party Android library having easy access to all properties, methods and classes via IntelliSense is always a great advantage.
- Risk of runtime errors. Casting to `any` is simply adding the chance to use unexisting functionality (or typing wrong name) and crash the application runtime.

### The Good Practice

To resolve the above, in NativeScript, there is a developer dependency called [tns-platform-declarations].(https://preview.npmjs.com/package/tns-platform-declarations) After the intial instalation and setup, you could directly access the `android` namespace from the Android SDK.
```TypeScript
// npm i tns-platform-declarations --save-dev
// follow the setup instructions at https://preview.npmjs.com/package/tns-platform-declarations
let androidContext = android.content.Context;
```

The `tns-platform-declarations` plugin is providing access to the Android SDK. The plugin comes with pre-generated TypeScript declaration files for all API levels from 17 to 27 exclusive (detailed usage instructions in [this documentation section](../../accessing-native-apis-with-javascript#intellisense-and-access-to-the-native-apis-via-typescript)). In cases, where we need a declaration file for a third-party library or newer API (e.g. API 28) we can generate our own definitions using the **[Android DTS generator](#android-dts-generator)**.

## Android DTS Generator

In cases where you need to generate a TypeScript declaration file for a specific Android SDK or third-party Android library, you can use [Android DTS generator](https://github.com/NativeScript/android-dts-generator/). The Android DTS generator is a tool that generates TypeScript declaration files (with extension `*.d.ts`) from **JAR** or **AAR** libraries. 

### Prerequisites

To use the tool the following is needed:
- [Gradle](https://docs.gradle.org/current/userguide/gradle_wrapper.html) 
- [Built gradle wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html#sec:adding_wrapper)
- Set up `ANDROID_HOME` environment variable
- The Android DTS Generator repository
```Shell
git clone https://github.com/NativeScript/android-dts-generator.git
```

### Generate Definitons for Android SDK
```Shell
cd dts-generator
./gradlew jar
java -jar build/libs/dts-generator.jar -input %ANDROID_HOME%/platforms/android-<Platform Level (21/22/23/24)>/android.jar
```

### Generate Definitions for third-party JAR library
```Shell
cd dts-generator
./gradlew jar
java -jar build/libs/dts-generator.jar -input <Path to your Jar>
```

### Passing Multiple JARs
```Shell
cd dts-generator
./gradlew jar
java -jar build/libs/dts-generator.jar -input <jar1> <jar2> <jar3>
```

Another option is to pass the folder containing the jars you want to pass
 ```shell
 cd dts-generator
 ./gradlew jar
 java -jar build/libs/dts-generator.jar -input <jarFolder>
 ```

### Generate Definitions for AAR Library

- Open the `*.aar` archive
- Extract the `classes.jar` and any dependencies it may have inside `libs/` folder
- Rename `classes.jar` if necessary
- Execute te following command
```
java -jar build/libs/dts-generator.jar -input classes.jar dependency-of-classes-jar.jar
```

## Complex Definitions Generation

Generating the typings corresponding to the Android and android-support jar files is a bit tricky operation, so here's a detailed explanation how to do it. There are different Android support versions and they depend on main Android classes. The workflow is to generate a big `*.d.ts` file with all the libraries inside. The downside of this approach is that you have to generate a big file for every API level and if the Android support version is changed all those `*.d.ts` files need to be regenerated. To avoid this, there's some functionality in the tool for passing dependencies when generating typings. There are two type of dependencies that can be passed:

- **Super class jars**- this is needed when the current jar has classes which are extending classes from another jar file, but we don't want to have all that jar files' typings in a single output file. To achieve this, we can provide the super class jar with the super argument (which works the same way as input for multiple files). For instance, if we want to generate typings for `android.support.v4.view.ViewPager` and we don't pass the super classes jar the generated typings won't extend any class as there's no information in the jar that contains the `ViewPager`. However, this class extends `android.view.ViewGroup` class which is a part of the Android jar file (any of the API levels). So if we pass one of the android.jar files as a super class jar file the generated typing will contain `extends android.view.ViewGroup`.
- **Input generics** - When trying to get the type of a parameter which is a generic class we cannot really get the generic types of that class, so we cannot generate working typings. To fix this we are adding information about the generics of each package at the end of the file with comments starting with `//Generics information:`. So to fix this we need to provide a file with all the generic information for the packages the current jar relies on. You need to create a file and copy all the generic informations of the related packages and provide it in the **input-generics** argument. This will make all the generic classes referenced without passing types to pass any so that the ouput will be valid.

### Adding all implements for generic types

There is an option `all-generic-implements` which is disabled by default which controls whether to add implements for all interfaces (if they are more than one) to generic type declarations. The problem is that in most of the cases one of those interfaces is actually an extend, so it should be manual reviewed and fixed after generation.

### Finding package dependencies

If you want to generate typings of a package but you are not sure how you can get all the needed dependencies you can follow the steps bellow:

- Open `dts-generator/build.gradle` file and locate dependencies part.

- Add as a testCompileOnly dependency the one that you want to generate typings for:
```java
dependencies {
    compile 'org.apache.bcel:bcel:6.2'
    compile 'commons-io:commons-io:2.6'
    compile 'com.google.code.findbugs:findbugs:3.0.1'

    // add your dependency bellow
    testCompileOnly  "com.android.support:support-v4:27.0.1"
}
```

- Open the `dts-generator` folder in your terminal

- Run the following command:
```Shell
./gradlew extractAllJars
```

- The command above will get the needed jar files for your dependency and will output them in the `dts-generator/jar-files` folder (or you can optionaly pass another output folder `-PjarsOutput=another-folder`)

- You can run the following command to check what are the dependencies between the packages:
```Shell
./gradlew dependencies --configuration testCompileOnly
```

- Run the dts-generator tool passing as input arguments the path to the output `jars` folder

### Android Support Specifics

To get all the jar files for Android support library, follow the steps above. You can find the jar files for Android support 27.0.1 [in the current repository](https://github.com/NativeScript/android-dts-generator/tree/master/libs/android-support/27.0.1) As the android support needs the base Android jar file to create its typings you need to pass the android.jar file as a super parameter to the generator. To avoid having typings for every different API level you can reuse typings built with API level 17 for all API levels until 23. It's quite easy to test this:

1. Run the typings generator for Android support passing android-17/android.jar as a super jar
2. Add /// <reference path="android-17.d.ts"/> at the top of the generated typings file where android-17.d.ts is the typings file of the Android API level 17
3. Run tsc passing the generated typings file and there shouldn't be errors
4. Now start replacing the reference file with the files from other API level while the tsc execution completes with no error
5. If there's an error, this means that you need to generate the android support typings with the same Android API level super jar

By repeating the steps above, we've found that:

- Android support 17 typings(built with super jar from Android API 17) can be reused until Android API 22
- Android support 23 typings(built with super jar from Android API 23) can be reused until Android API 25
- Android support 26 typings(built with super jar from Android API 26) can be reused for API 26 and 27

The corresponding typings files can be found in the `tns-platform-declarations` package. The repo's [Makefile](https://github.com/NativeScript/android-dts-generator/blob/master/Makefile) can be used as a reference for creating these typings files.