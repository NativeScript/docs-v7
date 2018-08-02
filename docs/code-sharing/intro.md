---
title: Code Sharing Introduction
description: An introduction to code sharing in Angular and NativeScript apps
position: 10
environment: angular
---

# Introduction

Since the beginning of Angular (even back in the days when we were calling it Angular 2), you could use NativeScript with Angular to build mobile apps.

However, when you needed to build both a web and a native mobile app, you had to create two separate projects. However this has changed with the dawn of **Schematics** and **ng add**.

The Angular and NativeScript teams teamed up to create [nativescript-schematics](https://github.com/nativescript/nativescript-schematics), a schematic collection that enables you to build both web and mobile apps from a single project.

> **NOTE**: The **@nativescript/schematics** package only works with **@angular/cli: 6.1.0** or newer.

## Code-Sharing Projects

A code-sharing project is one where we keep the code for the web and mobile apps in one place. Here’s a quick diagram to show you what that looks like at a high level.

![project-structure](./img/project-structure.png?raw=true)

 The objective is to share as much code as possible, and split the platform-specific code into separate files.

This usually means that we can share the code for:

 * **Routes** for navigation,
 * **Services** for common business logic,
 *  and **Component Class definition** for common behaviour of a component

While, splitting the code for:

 * **UI Layer** (**CSS** and **HTML**) - as you need to use different user interface components in web and NativeScript-built native apps,
 * and **NgModules** - so that you can import platform-specific modules, without creating conflicts (e.g. Angular Material Design - which is web only) between web and mobile.

## What’s next?

Read about [Creating a New Project](./creating-a-new-project) to get started.
