---
title: Supporting Angular in UI Plugins
description: Supporting Angular in UI Plugins
position: 50
slug: supporting-angular-in-ui-plugins
environment: angular
---

# Supporting Angular in UI Plugins

In order to make your UI plugin Angular compatible you need to create a simple Angular wrapper. Before you continue, make sure you have covered the topic about [Building UI Plugins using Custom Components]({% slug building-ui-plugins-custom-components %}) or the one for [Building UI Plugins using Composite Components]({% slug building-ui-plugins-composite-components %}).


##  Angular Wrapper

Once your UI plugin is ready, you can easily make it Angular compatible following the steps below:

1) Add the **nativescript-angular** and **@angular/core** NPM modules in your plugin **dev dependencies**.

2) **Create a new folder called angular** in the root folder of your plugin containing the following files:

  * **index.ts** - an entry file allowing the TypeScript imports.
  * **\<your-plugin-name\>.module.ts** - a sample Angular module with one directive defining the Angular selector - NativeScript component binding.
  * **\<your-plugin-name\>.directives.ts** - a sample Angular directive with your plugin selector.
  * **package.json** - the most basic package.json allowing us to require the angular wrapper.

3) **Edit the newly created files** following the templates below: 

---
> **package.json**

    {
        "name": "<your-plugin-name>",
        "main": "index.js"
    }
 ---
 > **\<your-plugin-name\>.module.ts**

    import { NgModule } from "@angular/core";
    import { registerElement } from "nativescript-angular/element-registry";
    
    import { DIRECTIVES } from "./<your-plugin-name>.directives";
    
    @NgModule({
        declarations: [DIRECTIVES],
        exports: [DIRECTIVES],
    })
    export class <YourPluginComponent>Module { }
    
    registerElement("<YourPluginAngularSelector>", () => require("<PathToYourPlugin>").<YourPluginComponent>);
---
> **\<your-plugin-name\>.directives.ts**

    import { Directive } from "@angular/core";
    
    @Directive({
        selector: "<YourPluginAngularSelector>"
    })
    export class <YourPluginComponent>Directive { }
    
    export const DIRECTIVES = <YourPluginComponent>Directive;

---
> **Index.ts**

    export * from "./<your-plugin-name>.module";

4) **Register the Angular wrapper** in the main module of your demo app.
> **the app.module.ts of your demo app**

    ...
    import { <YourPluginComponent>Module } from "<your-plugin-name>/angular";
    ...
    @NgModule({
        imports: [
            ...
            <YourPluginComponent>Module,
            ...
        ]
        ...
    })
    export class AppModule { }

Take a closer look at Angular wrappers implementation in the [nativescript-facebook plugin](https://github.com/NativeScript/nativescript-facebook/tree/master/src/angular) or get a detailed explanation what stays behind the code and why it is needed in the [Supporting Angular Explained]({% slug supporting-angular-explained %}) article.
