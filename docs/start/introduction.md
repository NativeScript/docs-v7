---
title: Welcome
description: Meet NativeScript - an open-source framework for the cross-platform development of truly native apps.
position: 10
publish: true
slug: introduction
previous_url: /index
---

{% nativescript %}
# Welcome to NativeScript
# 认识 NativeScript
NativeScript is how you build cross-platform, native iOS and Android apps without web views. Use Angular, TypeScript or modern JavaScript to get truly native UI and performance while sharing skills and code with the web. Get 100% access to native APIs via JavaScript and reuse of packages from npm, CocoaPods and Gradle. Open source and backed by Progress.
{% endnativescript %}

NativeScript 是一种用来开发ios和Android应用程序的跨平台技术，它不使用 web views。在共享和利用网络技能和代码的同时，NactiveScript通过Angular、TypeScript或者现代JavaScript来获取真正的原生UI和高性能。NativeScript可以获得原生APIs 100%的访问权限，重复使用网络上有大量的npm包，CocoaPods包和 Gradle包。NativeScript是开源项目，由Progress维护。

{% angular %}
# NativeScript with Angular
# 使用Angular
NativeScript doesn’t require Angular, but it’s even better when you use it. You can fully reuse skills and code from the web to build beautiful, high performance native mobile apps without web views. NativeScript features deep integration with Angular, the latest and greatest (and fastest) Angular framework. Open source and backed by Progress.

NativeScript 不强制要求使用Angular，但不可否认Angular是更好的选择，使用Angular可以复制web开发上的经验、技能，从而创作漂亮、高性能的原生应用。NativeScript深度整合了Angular（最新，最强，最快的框架），开源并会持续的更新维护。

{% endangular %}

New to NativeScript? [Try out NativeScript on your phone](https://www.nativescript.org/nativescript-example-application?utm_medium=referral&utm_source=documentation&utm_campaign=getting-started) to see what a truly native app feels like.

如果是NativeScript的新手 [可以安装NativeScript的样例App](https://www.nativescript.org/nativescript-example-application?utm_medium=referral&utm_source=documentation&utm_campaign=getting-started) 来体验NativeScript的效果
## Get Started
## 如何快速开始
Ready to get started developing with NativeScript? We offer a set of comprehensive tutorials that walk you through installing NativeScript, and building a real-world iOS and Android app from scratch.

如果想用NativeScript开发，官方提供了一系列的教程，包括如何安装NativeScript，如何从头开始开发一个完整的ios或者Android app。

<div id="start-button-container">
  <a href="http://docs.nativescript.org/angular/tutorial/ng-chapter-0" class="Btn" id="ng-start-button">快速开始 TypeScript & Angular版</a>
  <a href="http://docs.nativescript.org/tutorial/chapter-0" class="Btn" id="js-start-button">快速开始 JavaScript版</a>
</div>

<script>
  // Quick script to randomize the tutorial button order
  var container = document.getElementById("start-button-container");
  var ngButton = document.getElementById("ng-start-button");
  var jsButton = document.getElementById("js-start-button");

  if (Math.floor(Math.random() * 2) == 0) {
    container.insertBefore(jsButton, ngButton);
    ngButton.style.marginTop = "1em";
    ngButton.style.marginBottom = "1em";
  } else {
    jsButton.style.marginTop = "1em";
    jsButton.style.marginBottom = "1em";
  }
</script>

> **NOTE**: NativeScript also lets you use TypeScript _without_ Angular. If you’re interested in this approach, start with [our JavaScript tutorial](http://docs.nativescript.org/tutorial/chapter-0) to familiarize yourself with the basic NativeScript concepts, and then refer to [our TypeScript documentation](https://www.nativescript.org/using-typescript-with-nativescript-when-developing-mobile-apps) for your next steps.

开发NativeScript 程序也可以单独使用TypeScript 而不使用Angular。如果对这种方式感兴趣，可以从[JavaScript教程](http://docs.nativescript.org/tutorial/chapter-0) 开始熟悉NativeScript的基本概念，然后在读一下 [关于TypeScript](https://www.nativescript.org/using-typescript-with-nativescript-when-developing-mobile-apps) 章节的内容，相信就可以下一步的程序开发了。

## Join the NativeScript Community
## 加入 NativeScript 社区

We have a vibrant, engaged community and are here to help. You can find us on [Twitter](https://twitter.com/nativescript) and our [community forum](http://forum.nativescript.org/).

NativeScript的社区非常活跃，从这里可以获得各种帮助。关注我们
[Twitter](https://twitter.com/nativescript) 官方 [论坛](http://forum.nativescript.org/).

