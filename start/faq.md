---
title: FAQ
description: A list of frequently asked NativeScript questions and answers
position: 8
slug: faq
previous_url: /faq
---

# NativeScript FAQ

### What does NativeScript do?

NativeScript framework enables developers to use pure JavaScript language to build native mobile applications running on the major mobile platforms - Apple iOS and Google Android. Windows Universal platform is also in the backlog. The applications UI stack is built using native UI components and because of that there are no compromises with the User Experience of the applications.

### How much does nativeScript cost?

NativeScript is open-source and FREE. 

However, if you would like to use rich-ui components, you can buy [Telerik UI for NativeScript](http://docs.telerik.com/devtools/nativescript-ui/introduction). For more paid support or tools please visit [http://www.telerik.com/platform](http://www.telerik.com/platform#overview).

### What makes NativeScript unique?

NativeScript provides more than 90% code sharing and reuse. All the native APIs are available out of the box, no need for Java or Objective-C knowledge.

NativeScript uses the native platform default rendering and layout engine to display the UI of the application. This means that the applications using NativeScript framework are exposing exactly the same UX as natively written applications. With NativeScript the native APIs are available out of the box.

### Where can I see all the features and capabilities of NativeScript?

There is a dedicated page to this. Please visit it on our website - [http://www.nativescript.org/allfeatures](https://www.nativescript.org/allfeatures).

### What NativeScript apps are already in the app stores?

Please see the [NativeScript showcase apps](https://www.nativescript.org/showcases). You can also see the repositories that start with "sample-" prefix in our [GitHub organization](https://github.com/nativescript/) and see the source code.

### Why should I spend time learning NativeScript?

NativeScript gives you the capability of building applications that run on iOS and Android only by using a single codebase. 
JavaScript is our choice for the application language. It is the most popular language out there and for many developers there will be no learning curve to start using and exploring the NativeScript APIs.

Moreover, when using NativeScript you can use any native 3rd party libraries out of the box. There is no need for wrappers or any other actions are required. The new additions to the native platform are available immediately. 

What is really great is that you can use shared UI cross-platform components, which will drastically increase your productivity.


### What skillset is required to get started with NativeScript?

To start implementing applications with NativeScript you should be familiar with the JavaScript language. Knowledge of the native mobile platforms is not required. You need to learn only the NativeScript framework APIs.

### What devices and OS versions does NativeScript apps run on?

For Android, the minimum supported version is API level 17 (Android Jelly Bean 4.2). For iOS, the minimum supported version is iOS 7.1.

### What OS do I need to build a NativeScript app?

For Android apps you can use Windows, OS X and Linux. However, due certain requirements for iOS development, iOS app could be developed only on OS X Maverics or later.

For more information, see [System Requirements]({% slug quick-start %}).

### What language is NativeScript written with?

NativeScript is written in TypeScript.

### How does NativeScript run my JavaScript code on Android?

NativeScript uses JavaScript virtual machines to execute JavaScript commands. On Android, it uses [V8](https://developers.google.com/v8/). For more detailed information check out the blogpost [How NativeScript works](http://developer.telerik.com/featured/nativescript-works/) and the [Overview](http://docs.nativescript.org/runtimes/android/overview) of the Android runtime in the documentation.

### How does NativeScript run my JavaScript code on iOS?

NativeScript uses JavaScript virtual machines to execute JavaScript commands. On iOS, it uses [JavaScriptCore](http://trac.webkit.org/wiki/JavaScriptCore). For more detailed information check out the blogpost [How NativeScript works](http://developer.telerik.com/featured/nativescript-works/) and the [Overview](http://docs.nativescript.org/runtimes/ios/Overview) of the iOS runtime in the documentation.

### How much time it takes to support new release from Apple and Google?

New native platform updates are available immediately in the JavaScript layer for the developer to consume. There is no need from additional wrappers, only NativeScript framework should be rebuild to include the new APIs from the native platform. This way you get access to the latest and greatest features of the native mobile OS, even when they are still in BETA/PREVIEW state.

### Can I use other languages to develop except from JavaScript?

Yes. More information about the supported languages could be found [here]({% slug transpilers %}).

### Can I use NativeScript with Telerik UI libraries?

Yes. Please see this [blog](https://www.nativescript.org/blog/welcome-to-telerik-ui-for-nativescript) post for more info.

### Can I use existing JavaScript libraries (Angular, jQuery, Backbone) with NativeScript?

Yes. For the moment you can use some JS libraries that do not have dependencies to the browser model. Please see [the work we are doing with the AngularJS team](https://www.nativescript.org/blog/details/angular-2.0-running-in-a-native-mobile-app-using-nativescript). We are thinking to provide deeper support for 3rd party JS libraries.

### Can I use JavaScript libraries distributed with npm?

Yes. For the moment you can only use only the npm modules, which don't have dependencies to NodeJS APIs. Please see this [GitHub issue](https://github.com/NativeScript/nativescript-cli/issues/362).

### Is NativeScript based on HTML?

No. In NativeScript you describe the business logic and the UI of the application using JavaScript language. If you want to declaratively describe your UI you will be able to use a XML-based layout language. For more info - see our technical overview of how NativeScript works [here](http://developer.telerik.com/featured/nativescript-a-technical-overview/).

### Is NativeScript based on browser?

No. See our [technical overview]http://developer.telerik.com/featured/nativescript-a-technical-overview/ of how NativeScript works.

### How is the UI being built?

Developers can use the NativeScript framework to build the UI - using declarative approach or plain JavaScript code. NativeScript is using the MVVM design pattern, which enables clean and easy way to create and reuse the UI. Please see the work we are doing together with the AngularJS team on supporting [Angular 2.0 in NativeScript](https://github.com/NativeScript/NativeScript/issues/103).

### Is it possible to consume the native platform UI components and other native UI libraries?

Yes, you can use native Android and iOS libraries as part of a NativeScript application. Please read our [help article]({% slug access-native-apis %}) to see how.


### How do I check whether my JavaScript runs in NativeScript?

NativeScript registers some objects on the global context. The simplest way to detect whether your code runs within a NativeScript context is the following check:

```javascript
if (typeof global !== 'undefined' && (global.android || global.NSObject)) {
    // This is NativeScript!
}
```

### How do I check which version of NativeScript does my project use?

Open your app’s `package.json` file and check the version of the `"tns-core-modules"` dependency.

### How do I upgrade to the latest version of NativeScript?

NativeScript is available as a [npm package](https://www.npmjs.com/package/nativescript). Provided you have a recent Node.js version installed, all you need is run `npm install -g nativescript`

The [NativeScript Upgrade Instructions]({% slug upgrade-instructions %}) will help you to upgrade your project to the latest version of NativeScript.

### Where can I get support?

NativeScript has an active community in its [forum](https://groups.google.com/forum/#!forum/nativescript) where you can find various discussions. For paid premium support options please go to [http://www.telerik.com/platform](http://www.telerik.com/platform).

For bug reporting or requesting new features, there are several GitHub repositories, which you can visit:
NativeScript modules: [https://github.com/NativeScript/NativeScript](https://github.com/NativeScript/NativeScript)
NativeScript CLI: [https://github.com/NativeScript/nativescript-cli](https://github.com/NativeScript/nativescript-cli)
NativeScript iOS runtime: [https://github.com/NativeScript/ios-runtime](https://github.com/NativeScript/ios-runtime)
NativeScript Android runtime: [https://github.com/NativeScript/android-runtime](https://github.com/NativeScript/android-runtime)

### How can I contribute?

Contributions are welcome!

Before all, check the CONTRIBUTING article: [https://github.com/NativeScript/NativeScript/blob/master/CONTRIBUTING.md](https://github.com/NativeScript/NativeScript/blob/master/CONTRIBUTING.md)

First, follow the code conventions: [https://github.com/NativeScript/NativeScript/blob/master/source-control.md](https://github.com/NativeScript/NativeScript/blob/master/source-control.md).
Second, check the Running Latest Code article: [http://docs.nativescript.org/releases/running-latest](http://docs.nativescript.org/releases/running-latest).
Finally, run the tests: [https://github.com/NativeScript/NativeScript/blob/master/running-tests.md](https://github.com/NativeScript/NativeScript/blob/master/running-tests.md).

### Who works on NativeScript?

A group of highly talented black-belt ninjas from Telerik, a Progress company.
