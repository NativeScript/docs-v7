# Intro

Since the beginning of Angular (even back in the days when we were calling it Angular 2), you could use NativeScript with Angular to build mobile apps.

However, when you needed to build both a web and a native mobile app, you had to create two separate projects. With the dawn of `Schematics` and `ng add` this has changed.

The Angular and NativeScript teams teamed up to create [nativescript-schematics](https://github.com/nativescript/nativescript-schematics), a schematic that enables you to build both web and mobile apps from a single project.

> Please note that `@nativescript/schematics` works with `@angular/cli 6.1.0` or newer.

## Code Sharing Project

![project-structure](./img/project-structure.png?raw=true)

The idea of the code sharing project is one where we keep the code for the web and mobile apps in one place. The objective is to share as much code as possible, and split the platform specific code into separate files.

This usually means that we can share the code for:

 * `Routes` for navigation,
 * `Services` for common business logic,
 *  and `Component Class definition` for common behaviour of a component

While, splitting the code for:

 * `UI Layer` (`css` and `html`) - as most of the time what you want to show in a browser is not quite the same to what an app with Native UI should display,
 * and `NgModules` - so that we can import platform specific modules, without creating conflicts (i.e. Angular Material Design - which is web only) between web and mobile.

