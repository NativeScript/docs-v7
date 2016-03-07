## NativeScript Getting Started Guide

Welcome to the [NativeScript](http://www.nativescript.org/) Getting Started Guide. In this tutorial you'll use NativeScript, a cross-platform JavaScript framework for building native mobile apps, to build an iOS and Android app from scratch. You can start by watching the video walkthrough below, or by [jumping straight into the hands-on tutorial](#what-is-nativescript).

<iframe width="560" height="315" src="https://www.youtube.com/embed/N8zsFIVdLwY" frameborder="0" allowfullscreen></iframe>

### What is NativeScript?

NativeScript is a free and open source framework for building native iOS and Android apps using JavaScript and CSS. NativeScript renders UIs with the native platform’s rendering engine—no [WebViews](http://developer.telerik.com/featured/what-is-a-webview/)—resulting in native-like performance and UX.

NativeScript provides a best-of-both-worlds development experience. Our cross-platform JavaScript modules give you the convenience of writing iOS and Android apps from a single JavaScript codebase, while our runtimes give you the power of accessing native APIs, SDKs, and frameworks when you need them—all without needing to open Xcode or Android Studio. NativeScript was created and is supported by [Telerik](http://www.telerik.com/).

### What you're building

This guide will walk you through building [Groceries](https://github.com/NativeScript/sample-Groceries), a groceries management app that does the following things:

- Connects to an existing RESTful service.
- Provides user registration and login.
- Lets authenticated users add and delete groceries from a list.
- Runs cross-platform (iOS and Android).

If you follow along to the end, here's what the finished app will look like on iOS:

![login]({{site.baseurl}}/img/cli-getting-started/chapter0/ios/1.png)
![register]({{site.baseurl}}/img/cli-getting-started/chapter0/ios/2.png)
![list]({{site.baseurl}}/img/cli-getting-started/chapter0/ios/3.png)

And here's what the app will look like on Android:

![]({{site.baseurl}}/img/cli-getting-started/chapter0/android/1.png)
![]({{site.baseurl}}/img/cli-getting-started/chapter0/android/2.png)
![]({{site.baseurl}}/img/cli-getting-started/chapter0/android/3.png)

### Prerequisites

This guide assumes that you have some basic knowledge of JavaScript, CSS, and your development machine’s terminal. More specifically:

* **JavaScript**: You should know basic JavaScript concepts, such as how functions, if statements, and loops work.
* **CSS**: You should know how to write simple CSS selectors, and know how to apply CSS rules as name/value pairs.
* **The terminal**: You should know how to open a terminal or command-line prompt on your development machine, how to change directories, and how to execute commands.

With that out of the way, let’s get started!
