---
title: Getting started
page_title: Getting started | Progress NativeScript UI Documentation
description: Getting started with Progress NativeScript UI
slug: ns-ui-getting-started
tags: getting, started, ui, nativescript
position: 20
publish: true
---

# Getting Started
The following article assumes that you already have the latest version of NativeScript and have [created a NativeScript application]({% slug introduction %}).

## Installation

- Open a console window and go to the root directory of your NativeScript application.
- Install the package that contains the component that you want to use by typing nativescript command that adds a plugin. For example, if you want to use the chart, type  
````
$ tns plugin add nativescript-ui-chart
````
- Then import/require the installed component in your app

```TypeScript
import * as chartModule from "nativescript-ui-chart";
```
```JavaScript
var chartModule = require("nativescript-ui-chart");
```
{% angular %}

## Usage in Angular

The Angular directives for NativeScript UI are part of the plugins. For each plugin you can find the directives in the `angular` folder within the plugin's main folder. From that point, you have a couple of approaches to use the components:

- Import the NgModule of the UI component you want to use and add it to the bootstrapped module of your {N} + Angular application, this will enable the use of Ahead-of-time compilation (AoT)
- Bootstrap your application using the global NativeScript UI directives
- Import the needed directives in your Angular components and use them where needed

### Using the 'NgModule' of the plugins' UI components
When using NativeScript UI with Angular the best approach is to directly import the NgModule of each component rather than using the `DIRECTIVES` because when importing the modules you get the benefit of supporting AoT compilation for your project and [lazy loading](https://angular.io/guide/ngmodule#lazy-loading-modules-with-the-router).


### Making your project compatible with 'Ahead of Time' compilation & 'lazy loading' of modules
In order to make your project compatible with AoT all that you need is to add the plugin's built-in modules to either your bootstrapped Angular `NgModule` or to each lazy loaded one. You can find the module for each UI component in the **"nativescript-ui-'_component name_'/angular"** folder of each package, simply import those that are used in your project and add them to the `imports`. For more information on how to bundle your application please read the "[Using Webpack to Bundle Your Code](https://docs.nativescript.org/tooling/bundling-with-webpack)" article form the official NativeScript documentation.

To take advantage of [lazy loading](https://angular.io/guide/ngmodule#lazy-loading-modules-with-the-router), simply add the component's ng module to your `imports`. If your project does not take advantage of lazy loading, simply add the modules to the imports of your `AppModule`.

{% endangular %}

