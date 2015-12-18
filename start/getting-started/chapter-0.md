## NativeScript Getting Started Guide

Welcome to the [NativeScript](https://www.nativescript.org/) getting started guide. In this tutorial you'll use NativeScript, a cross-platform JavaScript framework for building native mobile apps, to build an iOS and Android app from scratch.

> **TIP:** For a video introduction to NativeScript, see the [getting started guide on YouTube](https://www.youtube.com/watch?v=rsCT5fpES4Q).

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

This guide assumes you know the basics of the following:

* **JavaScript**: You understand how functions, if statements, and basic loops work.
* **CSS**: You know how to write simple selectors and apply CSS rules as name/value pairs.
* **The terminal**: You know how to open a terminal or command-line prompt on your development machine and how to execute commands.
