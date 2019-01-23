---
title: Getting started
page_title: Getting Started with Progress NativeScript UI for Angular | Progress NativeScript UI Documentation
description: This is a getting started guide for using NativeScript UI with Angular
slug: getting-started-angular
tags: getting started, angular, ui, nativescript
position: 2
publish: true
---

# Getting started with Angular
To use a plugin which is part from Progress NativeScript UI with Angular you need to first install the corresponding plugin by executing `tns plugin add nativescript-ui-<plugin-name>`, for example `tns plugin add nativescript-ui-chart`

After installing a plugin, you have a couple of approaches to use the directives:

- Import the NgModule of the UI component you want to use and add it ot the bootstrapped module of your {N} + Angular application, this will enable the use of Ahead-of-time compilation (AoT)
- Bootstrap your application using the global NativeScript UI directives
- Import the needed directives in your Angular components and use them where needed

## Using the 'NgModule' of the plugins' UI components
When using NativeScript UI with Angular the best approach is to directly import the NgModule of each component rather than using the `DIRECTIVES` because when importing the modules you get the benefit of supporting AoT compilation for your project and [lazy loading](https://angular.io/guide/ngmodule#lazy-loading-modules-with-the-router).


### Making your project compatible with 'Ahead of Time' compilation & 'lazy loading' of modules
In order to make your project compatible with AoT all that you need is to add the plugin's built-in modules to either your bootstrapped Angular `NgModule` or to each lazy loaded one. You can find the module for each UI component in the **"nativescript-ui-'_component name_'/angular"** folder of each package, simply import those that are used in your project and add them to the `imports`. For more information on how to bundle your application please read the "[Using Webpack to Bundle Your Code](https://docs.nativescript.org/tooling/bundling-with-webpack)" article form the official NativeScript documentation.

To take advantage of [lazy loading](https://angular.io/guide/ngmodule#lazy-loading-modules-with-the-router), simply add the component's ng module to your `imports`. If your project does not take advantage of lazy loading, simply add the modules to the imports of your `AppModule`.