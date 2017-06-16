---
title: Adding Angular Support to UI Plugins
description: Adding Angular Support to UI Plugins
position: 10
slug: adding-angular-support-to-ui-plugins
publish: false
---

# Adding Angular support to UI plugins

In order to make your UI plugin Angular compatible you need to create a simple Angular wrapper. Before you continue, make sure you have covered the topic about [creating a NativeScript UI plugin]({% slug ui-plugin %}).


##  Angular Wrapper

Having your UI plugin developed successfully you could easily make it Angular compatible following the steps below:

1) Add the **nativescript-angular** and **@angular/core** NPM modules in your plugin **dev dependencies**.

2) **Create a new folder called angular** in the root folder of your plugin containing the following files:

  * **index.ts** - an entry file allowing the TypeScript imports.
  * **\<your-plugin-name\>-module.ts** - a sample Angular module with one directive defining the Angular selector - NativeScript component binding.
  * **\<your-plugin-name\>-directives.ts** - a sample Angular directive with your plugin selector.
  * **package.json** - the most basic package.json allowing us to require the angular wrapper.

3) **Edit the newly created files** following the templates below: 

---
> **package.json**

    {
        "name": "<your-plugin-name>",
        "main": "index.js"
    }
 ---
 > **\<your-plugin-name\>-module.ts**

    import { NgModule } from "@angular/core";
    import { registerElement } from "nativescript-angular/element-registry";
    
    import { DIRECTIVES } from "./<your-plugin-name>-directives";
    
    @NgModule({
        declarations: [DIRECTIVES],
        exports: [DIRECTIVES],
    })
    export class <YourPluginComponent>Module { }
    
    registerElement("<YourPluginAngularSelector>", () => require("<PathToYourPlugin>").<YourPluginComponent>);
---
> **\<your-plugin-name\>-directives.ts**

    import { Directive } from "@angular/core";
    
    @Directive({
        selector: "<YourPluginAngularSelector>"
    })
    export class <YourPluginComponent>Directive { }
    
    export const DIRECTIVES = <YourPluginComponent>Directive;

---
> **Index.ts**

    export * from "./<your-plugin-name>-module";

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

To get a closer look at angular wrappers implementation check the [nativescript-facebook plugin](https://github.com/NativeScript/nativescript-facebook/tree/master/src/angular).