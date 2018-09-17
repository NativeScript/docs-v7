---
title: Migrating a Web project
description: Learn how to migrate an existing Angular Web Project to Angular and NativeScript code-sharing project
position: 30
environment: angular
---

# Migrating existing Angular Web projects

It is possible to migrate an existing Angular Web project to a code-sharing structure.
This can be done with Angular CLI's **ng add** command and NativeScript Schematics.


## Project Requirements

You need to use the latest version of **NativeScript CLI**

Your project’s node modules need to be using Angular v6 or newer.

### NativeScript CLI

Follow the [installation instructions](../start/quick-setup) to install **NativeScript CLI**.

### Angular CLI

Your **@angular/cli** install should be at **6.1.0** or newer.

To update the Angular CLI version your project uses, you can run:

```bash
npm i --save-dev @angular/cli
```

### Angular packages

All remaining Angular Packages should be at **6.0.0** or newer.

For easy update instructions, use the interactive [Angular Update Guide](https://update.angular.io/).

## Migrating Project Structure

The first step is to convert your web project to a code-sharing structure is to add NativeScript. You can do this with the following command:

```bash
ng add @nativescript/schematics
```

This command installs **@nativescript/schematics**, and then adds a NativeScript-specific copy of:

* The Main file - **main.ns.ts**, which bootstraps the NativeScript Entry Module,
* the Entry Module file - by default this is **app.module.tns.ts**, which is based on the name of the module provided to **bootstrapModule** in your **main.ts**,
* Entry Component file - by default this is **app.component.ts**, which is based on the name of the component provided to **bootstrap** in the web entry module,
* and the App Routing file - **app-routing.module.ts**, which brings in **NativeScriptRouterModule**. It also provides a path to a sample component (**HomeComponent**).

### Sample module

You can also run the **ng add** command with a **--sample** flag.

```bash
ng add @nativescript/schematics --sample
```


This command adds a **BarcelonaModule**, which is a sample module to show how a code-sharing module should be constructed. It can also be used for validation that the conversion of the project was successful.


### Validating the project migration

The easiest way to validate that the migration worked is to build and run your apps.

#### Validate the web project

Run **ng serve -o** from your terminal or command prompt, and you should get the same app as before running **ng add**.
 
#### Validate the web project with the sample module

If you migrated your project with the **--sample** flag, you could also test the sample module in your web app.

Assuming your app is configured with app navigation, add **BarcelonaModule** to your entry module (default: **app.module.ts**), run **ng serve**, and in your browser navigate to **/players** (i.e. **http://localhost:4200/players**). You should see a list of Barcelona players, and if you click on any name the app you should navigate to **/player/:id**.



#### Validate the NativeScript project

To validate the mobile setup you need to run a NativeScript build.

To build a NativeScript app, run one of the following commands, depending on which platform you want to run your app on.

```iOS
tns run ios --bundle
```

```Android
tns run android --bundle
```

## Migrating Project content

The **ng add @nativescript/schematics** command converts the project to a code-sharing structure, but it doesn't convert your app contents.

The next step from here is to migrate your:

* navigation
* components
* modules

### Migrate Navigation

Running **ng add @nativescript/schematics** automatically adds **app-routing.module.tns.ts**, which contains:

* **routes** - with a single path to the default NativeScript component
* **@NgModule** - with the configuration for NativeScripts version of the **RouterModule** -**NativeScriptRouterModule**

This has the same structure, as the default routing module configuration for the web when you run **ng new app-name --routing**.

#### Split Routes

At this stage you will work with two separate navigation configurations (**routes**):

* **app-routing.module.ts** - for web (this is the usual file name for it, but it might be different in your project),
* **app-routing.module.tns.ts** - for mobile

This is especially useful, while you migrate all web components into a code-sharing structure. Once this is complete, you could switch to a singe **routes** configuration for both web and mobile.

Also, if you expect your web app to have a different set of pages to your mobile app, then you could keep the **routes** separate. For example, your web app could have an admin screen, which might not be required in the mobile app. In this case it makes sense to have two sets of navigation configurations.

The process here is that you should add navigation paths to **routes** array in **app-routing.module.tns.ts**, as you migrate each of your **page** components.

#### Shared Routes

To convert your project to use a single (shared) navigation configuration, you need to move the **routes** configuration to a single shared file, and make the **app-routing** files for web and mobile, import and use the shared routes.

Here are the steps:

1. Add a shared file with the routes configuration: **app.routes.ts**
    ```TypeScript
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
];
```
    
1. Replace the routes configuration in **app-routing.module.ts** with the import of **ROUTES**
    ```TypeScript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

1. Replace the routes configuration in **app-routing.module.tns.ts** with the import of **ROUTES**
    ```TypeScript
import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(ROUTES)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
```

### Migrating Components

Your next task is to migrate your individual components into a code-sharing structure.

Often the migration step will consist of two steps:

* add the component to a **.tns** version of the parent module
* create a **name.component.tns.html** file, and provide NativeScript specific UI code

This task can be helped with the [component migration schematic](./migrating-a-web-project#schematic-migrate-component): 

```bash
ng g migrate-component --name=component-name
```

In the case where the component class contains web-specific code, you will need to extract the **platform-specific** code into a set of **helper files** of **services** and keep only the shared code. You can read more on handling [partial differences here]([read more here ](./code-splitting#partial-differences)).

### Schematic: migrate-component

The **migrate-component** schematic looks up the location of the **ComponentNameComponent** in **app.module.ts** and then performs the component migration steps, which involve:

* adding the component to **app.module.tns.ts** and
* creating a **component-name.component.tns.html** file.

You can execute it using the **Angular CLI**:

```bash
ng g migrate-component --name=component-name
```

For example, to migrate:

```
src
└── app
    ├── home
    |   ├── home.component.html
    |   └── home.component.ts
    ├── app.module.ts
    └── app.module.tns.ts
```

Run the following command:

```bash
ng g migrate-component --name=home
```

This will create **home.component.tns.html** and update **app.module.tns.ts**.

```
src
└── app
    ├── home
    |   ├── home.component.html
    |   ├── home.component.tns.html  <= create
    |   └── home.component.ts
    ├── app.module.tns.ts            <= update
    └── app.module.ts           
```

#### Components not belonging to **AppModule**:

It is important to understand that **migrate-component** uses the parent **NgModule** to locate the migrate component, so when you want to migrate a component that doesn't belong to **AppModule**, you need to provide the parent **NgModule**.

```bash
ng g migrate-component --name=component-name --module=module-name
```

This schematic will find the location of the **ComponentNameComponent** in **module-name/module-name.module.ts** and then perform the component migration steps, which involves:

* adding the component to **module-name/module-name.module.tns.ts** and
* creating a **module-name/component-name.component.tns.html ** file.

For example, to migrate:

```
src
└── app
    └── animals
        ├── dog
        |   ├── dog.component.html
        |   └── dog.component.ts
        ├── animals.module.tns.ts
        └── animals.module.ts
```

Run the following command:

```
ng g migrate-component --name=dog --module=animals
```

This will create **dog.component.tns.html** and update **animals/animals.module.tns.ts**.

```
src
└── app
    └── animals
        ├── dog
        |   ├── dog.component.html
        |   ├── dog.component.tns.html  <= create
        |   └── dog.component.ts
        ├── animals.module.tns.ts       <= update
        └── animals.module.ts       
```

#### Modules with non-standard file names

In the cases of modules with non-standard file names, you can provide a full path to the module by using the **--module-path** parameter.

For example, to migrate:

```
src
└── app
    └── animals
        ├── dog
        |   ├── dog.component.css
        |   ├── dog.component.html
        |   └── dog.component.ts
        ├── animals-md.tns.ts
        └── animals-md.ts
```

Run the following code to achieve the same result.

```bash
ng g migrate-component --name=dog --module-path=animals/animals-md.ts
```

#### Skip Module Updates

You can also tell the schematic to not update its parent module by using the **--skipModule** flag.

```bash
ng g migrate-component --name=component-name --skipModule
```

####  Skip Module Updates - with direct path

In the case where you want to use **--skipModule** for components that are not located at **src/app**, you need to provide the path to the component by using the **--component-path** parameter.

For example to migrate the dog component:

```
src
└── app
    └── animals
        └── dog
            ├── dog-cmp.html
            └── dog-cmp.ts
```

Run the following code to achieve the same result.

```bash
ng g migrate-component --name=dog --component-path=animals/dog/dog-cmp.ts --skip-module
```

### Migrating Modules

You should also migrate your **NgModules** into code sharing modules.

Often the migration step will consist of these steps:

* Add the NativeScript version of the **@NgModule**—**module-name.component.tns.ts**,
* copy the providers from your web **@NgModule**,
* copy the imports from your web **@NgModule** - use NativeScript versions for those that are web-specific (e.g. use **NativeScriptHttpClientModule** instead of **HttpClientModule**)
* convert all of modules' components, by using migrate-component schematic,
* and migrate declared components and add them to **declarations**

This task can be helped with the [module migration schematic](./migrating-a-web-project#schematic-migrate-module): 

```bash
ng g migrate-module --name=module-name
```

### Schematic: migrate-module

The **migrate-module** performs the module migration steps, which involve:

* add **module-name.component.tns.ts**,
* convert all of components provided by the module, by using **migrate-component** schematic for each,
* copy over all providers from the web module

For example, to migrate the animals module:

```
src
└── app
        └── animals
        |   ├── cat
        |   |   ├── cat.component.html
        |   |   └── cat.component.ts
        |   └── dog
        |       ├── dog.component.html
        |       └── dog.component.ts
        └── animals.module.ts
```

Run the following command:

```bash
ng g migrate-module --name=animals
```

This will result in the following changes.

```
src
└── app
    └── animals
        |   ├── cat
        |   |   ├── cat.component.html
        |   |   ├── cat.component.tns.html  <= create
        |   |   └── cat.component.ts
        |   └── dog
        |       ├── dog.component.html
        |       ├── dog.component.tns.html  <= create
        |       └── dog.component.ts
        ├── animals.module.tns.ts           <= create
        └── animals.module.ts
```