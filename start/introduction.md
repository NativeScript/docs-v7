---
title: Welcome
description: Meet NativeScript - an open-source framework for the cross-platform development of truly native apps.
position: 30
publish: true
slug: introduction
previous_url: /index
---

{% nativescript %}
# Welcome to NativeScript

NativeScript is how you build cross-platform, native iOS and Android apps without web views. Use Angular, TypeScript or modern JavaScript to get truly native UI and performance while sharing skills and code with the web. Get 100% access to native APIs via JavaScript and reuse of packages from npm, CocoaPods and Gradle. Open source and backed by Telerik.
{% endnativescript %}

{% angular %}
# NativeScript with Angular

NativeScript doesn’t require Angular, but it’s even better when you use it. You can fully reuse skills and code from the web to build beautiful, high performance native mobile apps without web views. NativeScript features deep integration with Angular 2, the latest and greatest (and fastest) Angular framework. Open source and backed by Telerik.
{% endangular %}

## Get Started

Ready to get started developing with NativeScript? We offer a set of comprehensive tutorials that walk you through installing NativeScript, and building a real-world iOS and Android app from scratch.

<div id="start-button-container">
  <a href="http://docs.nativescript.org/angular/tutorial/ng-chapter-0" class="Btn" id="ng-start-button">Get Started with TypeScript & Angular</a>
  <a href="http://docs.nativescript.org/tutorial/chapter-0" class="Btn" id="js-start-button">Get Started with JavaScript</a>
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

## Join the NativeScript Community

We have a vibrant, engaged community and are here to help. You can find us on [Twitter](https://twitter.com/nativescript) and [Slack](http://developer.telerik.com/wp-login.php?action=slack-invitation).
