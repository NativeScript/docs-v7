---
标题：欢迎
描述：迎接NativeScript- 一个真正的为本地应用程序的跨平台开发的开源框架。
位置：10
发布: true
slug: 介绍
前面的_url: /index
---

{% nativescript %}
# 欢迎来到NativeScript

NativeScript是你在无Web视图情况下构建跨平台，原生iOS和Android应用的解决方案。使用Angular，TypeScript或现代的JavaScript来获得真正的原生的用户界面和性能，同时与网络共享技巧和代码。通过JavaScript获得100％原生API和重用包从 npm, CocoaPods和Gradle。开源和来自Telerik的支持。
{% endnativescript %}

{% angular %}
# NativeScript 与 Angular

NativeScript不需要Angular，但是当你使用它时会更好。你可以完全重用来自web技能和代码来打造无Web视图的优雅的，高性能的原生的移动应用。 NativeScript与Angular 2的功能的深度整合，最新和最伟大的（和最快）Angular 2框架。开源和来自Telerik的支持。
{% endangular %}

不熟悉 NativeScript？ [您的手机上试用NativeScript]（https://www.nativescript.org/nativescript-example-application），来感受下什么是真正的原生应用程序。

## 入门起步

准备好开始使用NativeScript开发了吗？我们提供了一系列全面的教程指导来帮助你从如何安装NativeScript，到从头开始构建一个真实世界的iOS和Android应用。

<div id="start-button-container">
  <a href="http://docs.nativescript.org/angular/tutorial/ng-chapter-0" class="Btn" id="ng-start-button">Get Started with TypeScript & Angular</a>
  <a href="http://docs.nativescript.org/tutorial/chapter-0" class="Btn" id="js-start-button">Get Started with JavaScript</a>
</div>

<script>
  //快速脚本，随机排布教程按钮的顺序
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

## 加入NativeScript社区

我们有一个充满活力的，维护的社区并且在这里获得帮助。你可以找到我们[推特]（https://twitter.com/nativescript）和[漫聊]（http://developer.telerik.com/wp-login.php?action=slack-invitation）。
