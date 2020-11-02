---
title: Picking an Architecture for Your NativeScript App
description: Choosing the best JavaScript framework to use when developing your next NativeScript app
position: 80
slug: architecture-choice
---

# Picking an Architecture for Your NativeScript App

The open nature of NativeScript makes it possible to use popular JavaScript frameworks such as [Angular](https://angular.io/) and [Vue.js](https://vuejs.org/). Sometimes with these options, though, comes a "paradox of choice". This brief article provides high level guidance as to which route you may want to take for your next NativeScript app.

<table>
<tr>
<td align="center"><img style="vertical-align:middle" src="core-small.png" alt="nativescript core logo" /></td>
<td>NativeScript Core (a.k.a. vanilla JavaScript/TypeScript)</td>
</tr>
<tr>
<td align="center"><img style="vertical-align:middle" src="angular-small.png" alt="nativescript angular logo" /></td>
<td><a href="https://www.nativescript.org/nativescript-is-how-you-build-native-mobile-apps-with-angular">NativeScript + Angular</a></td>
</tr>
<tr>
<td align="center"><img style="vertical-align:middle" src="vue-small.png" alt="nativescript vue logo" /></td>
<td><a href="https://www.nativescript.org/vue">NativeScript + Vue.js</a></td>
</tr>
</table>

<br />

**1)** Do you already know Angular? Use ![angular](angular-small.png). Using Vue.js, and like it? You'll love ![vue](vue-small.png).

**2)** Is start up time and performance your top concern? Use ![nativescript core](core-small.png). (But you can make ![angular](angular-small.png) and ![vue](vue-small.png) nearly as fast with some [optimizations](https://docs.nativescript.org/performance-optimizations/startup-times).)

**3)** Will your app have a lot of components and/or complex views (i.e. showing/hiding items, different templates)? Use ![angular](angular-small.png) or ![vue](vue-small.png). You may find the structure provided by those frameworks makes it a lot easier to build and maintain complex apps.
