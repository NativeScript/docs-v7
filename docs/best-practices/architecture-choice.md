---
title: Picking an Architecture for Your NativeScript App
description: Choosing the best framework to use when developing your next NativeScript app
position: 80
slug: architecture-choice
---

# Picking an Architecture for Your NativeScript App

The open nature of NativeScript makes it possible to use popular JavaScript frameworks such as Angular and Vue. Sometimes with these options, though, comes a "paradox of choice". This brief article provides  high level guidance as to which route you may want to take for your next NativeScript app.

<table>
<tr>
<td align="center"><img style="vertical-align:middle" src="core.png" alt="nativescript core logo" /></td>
<td>NativeScript Core (a.k.a. vanilla JavaScript/TypeScript)</td>
</tr>
<tr>
<td align="center"><img style="vertical-align:middle" src="angular.png" alt="nativescript angular logo" /></td>
<td>NativeScript + Angular</td>
</tr>
<tr>
<td align="center"><img style="vertical-align:middle" src="vue.png" alt="nativescript vue logo" /></td>
<td>NativeScript + Vue</td>
</tr>
</table>

<br />

**1)** Do you already know Angular? Use ![angular](angular-small.png).

**2)** Do you already know Vue? Use ![vue](vue-small.png).

**3)** Is start up time and performance your top concern? Use ![nativescript core](core-small.png). (But you can make ![angular](angular-small.png) nearly as fast with some [optimizations](https://docs.nativescript.org/best-practices/startup-times).)

**4)** Is this app targeted for production soon? Consider ![nativescript core](core-small.png) or ![angular](angular-small.png) right now. ![vue](vue-small.png) has reached 1.0 and can be used for building apps, but has not yet been extensively battle-tested in production.

**5)** Will your app have a lot of components and/or complex views (i.e. showing/hiding items, different templates)? Use ![angular](angular-small.png) or ![vue](vue-small.png). You may find the structure provided by those frameworks makes it a lot easier to build and maintain complex apps.
