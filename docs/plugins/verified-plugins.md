---
title: Verified Plugins Criteria
description: Verified vs. not verified plugins. Want to know the difference?
position: 29
slug: verified-plugins
---

# Verified Plugins

We are on a mission to increase the reliability of the NativeScript plugins ecosystem.

One of the problems today is that there are several plugins that solve the same problem (e.g. social login) and it is hard to determine the quality of any of these plugins.

There is a list of requirements that should assure the high quality of the NativeScript plugins. We call this list the Verified Plugins Criteria. We want these verified plugins to become the best choice for developers. We are committed to promote high quality work and propose to promote verified plugins as a mark of high quality.

## Your Benefits

- The time for building of NativeScript applications will be decreased. The more quality are the plugins, the faster mobile apps will be build.

- Since the high quality plugins will be more discoverable in the [Marketplace](http://market.nativescript.org) - the plugin authors of these plugin will be also more discoverable


## Criteria

The Verified Plugins Criteria outlines the mandatory requirements that each NativeScript plugin should meet in order to be marked as verified.

Each criterion has 3 attributes:

 - **Motivation** - why it is important to satisfy the criterion
 - **Documentation** - link to the documentation that provide more details regarding the criterion
 - **Implementation Time** - rough estimate how long it will take to implement the criterion. This is applicable for existing NativeScript plugins.

<br>

### 1. The plugin has been transpiled successfully (tsc) (For TypeScript plugins).

#### Motivation
NativeScript plugin is installed in application as JavaScript package. It is critical to have the TypeScript successfully transpiled to JavaScript.

#### [Documentation](http://docs.nativescript.org/plugins/ensure-plugins-quality#checking-for-readability-maintainability-and-functionality-errors)

#### Implementation Time: 30 min

<br>

### 2. The plugin has a demo app 
> Note: By convention we recommend to have folder "demo" and/or `demo-angular`/`demo-ng`. If there is a demo app, but it is in a folder named other way, we will return a recommendation to rename it. This will not be a showstopper for the plugin to become verified.

#### Motivation
Demo application will ease the testing of your plugin. It will enable the NativeScript developers that plan to use it to test the plugin in real application prior to install it. Demo application will be an example how to use the plugin in NativeScript app. Demo application is required in order to run tests. Having a demo app in place will enable you to record a short video (GIF) and embed it in README.md as a showcase.

#### [Documentation](http://docs.nativescript.org/plugins/ensure-plugins-quality#prerequisites)

#### Implementation Time: 2h

<br>

### 3. The plugin should be eligible to be used in both Angular and non-Angular app.
>Note: UI Plugins should have Angular wrappers (e.g. [nativescript-facebook](https://github.com/NativeScript/nativescript-facebook/tree/master/src/angular)) or the README file that explains how to use it in the Angular app ([nativescript-cardview](https://github.com/bradmartin/nativescript-cardview#angular-nativescript)).

#### Motivation

NativeScript plugins should support all the technologies that NativeScript officially support. It is very unpleasant when you install a plugin in your NativeScript Angular application and it breaks your app or just doesn’t work. The verified plugin should imply Angular support.

#### [Documentation](http://docs.nativescript.org/angular/plugins/angular-plugin.html)

#### Implementation Time: 30min

<br>

### 4. The demo app has been built successfully (with latest official {N} version) for iOS version 10.x.

#### Motivation

The successful building of your demo application is clear sign that your plugin do not break the application build. It is really a small step that will assure quality of your plugin.

#### [Documentation](http://docs.nativescript.org/plugins/ensure-plugins-quality#checking-in-application-built-for-android-and-ios)

#### Implementation Time: 30min

<br>

### 5. The demo app has been built successfully (with latest official {N} version) for Android API Level 25.

#### [Documentation](http://docs.nativescript.org/plugins/ensure-plugins-quality#checking-in-application-built-for-android-and-ios)

<br>

### 6. The demo app has been bundled (webpack) and built successfully (with latest official {N} version) for iOS version 10.x. 
>Note: Uglify option is required `npm run ns-bundle --ios --build-app --uglify`

#### Motivation

webpack (AOT) is the key tool that makes the NativeScript Angular application fast. It is critical to have all plugins compatible with webpack requirements.

#### [Documentation](http://docs.nativescript.org/plugins/ensure-plugins-quality#checking-in-bundled-nativescript-applications)

#### Implementation Time: 2h

<br>

### 7. The demo app has been bundled (webpack) and built successfully (with latest official {N} version) for Android API Level 25. 
>Note: Uglify option is required `npm run ns-bundle --android --build-app --uglify`

#### [Documentation](http://docs.nativescript.org/plugins/ensure-plugins-quality#checking-in-bundled-nativescript-applications)

<br>

### 8. Weekly builds in Travis CI with the previous checks have been set up.

#### Motivation

Executing these simple checks on every change of your plugin will make you more confident in its quality and will help you to keep that quality through the time.

#### [Documentation](http://docs.nativescript.org/plugins/ensure-plugins-quality#automate-all-checks-with-travis-ci)

#### Implementation Time: 30min

<br>

### 9. README file explains clearly what are the features and limitations of the plugin 
>Note: See [nativescript-plugin-seed](https://github.com/NativeScript/nativescript-plugin-seed).  

Following sections are required:

- Installation
- Configuration
- API
- Usage - code snippets for all supported platforms (iOS, Android) and technologies (Angular, Vue)

#### Motivation

Common documentation style will increase the readability of plugin’s documentation. Also it is critical when you have to evaluate whether the particular plugin satisfy all the requirements you have. This will ease the decision which plugin to use as well.

#### Implementation Time: 30min

<br>

### 10. There is a `LICENSE` file and same license is defined in `package.json` file.

#### Motivation

GitHub display license based on the content of LICENSE file. Npm display license based on the package.json. This is required in order to be visible what is the license that your plugin is distributed under.

#### Implementation Time: 30min

<br>

### 11. NativeScript team review.
>IMPORTANT: All existing NativeScript plugins will be listed in the NativeScript Marketplace. Verified ones will be on top. NativeScript team needs to perform an initial review of every verified plugin with the idea to provide guidance and help the plugin authors.

#### Motivation

In order to provide guidance and help you with the development of your NativeScript plugin, we need to review it. This process will be a great indicator how the NativeScript community actually use the technology to build plugins and applications. We need to work more closely with you! 

<br>

### Total Estimated Implementation Time: 7h

<br>

## Recommendations

The Verified Plugins Recommendations outline best practices that is going to be observed during NativeScript team review. These are not mandatory for a plugin to become verified.

#### 1. UI Plugins implement NS core theme (NS core theme for Angular). [Read more](http://docs.nativescript.org/plugins/implementing-core-theme)
#### 2. There are tests and all tests pass. [Read more](http://docs.nativescript.org/plugins/unit-tests)
#### 3. Comply with [nativescript-plugin-seed](https://github.com/NativeScript/nativescript-plugin-seed) structure.
#### 4. No `*.ts` files in the plugin (define exclude rule in `.npmignore` file).
#### 5. Publish the `*.d.ts` files (typescript plugins only) and have a `index.d.ts` file or typings key in the `package.json` pointing to definitions.
#### 6. Dev dependencies are not added as dependencies.
#### 7. For dev plugins (such as [nativescript-dev-webpack](https://github.com/NativeScript/nativescript-dev-webpack)) - make sure demo runs when it is started with --path.
#### 8. Make sure you have "nativescript" property in plugin's package.json that correctly specifies the platforms the plugin supports. [Read more](http://docs.nativescript.org/plugins/plugin-reference#packagejson-specification)
#### 9. Test whether the demo application can be snapshotted `npm run ns-bundle --android --build-app --uglify --snapshot`

Your plugin passes all these requirements? Apply by sending an email with link to your plugin's repository to [nativescriptplugins@progress.com](mailto:nativescriptplugins@progress.com)!

## See Also

* [Ensure Plugins Quality]({% slug ensure-plugins-quality %})
