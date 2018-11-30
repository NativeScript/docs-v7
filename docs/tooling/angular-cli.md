---
title: Angular CLI
description: Learn how to use the Angular CLI in your NativeScript app with @nativescript/schematics. The extension to Angular Schematisc allows you to use the Angular CLI in both NativeScript Angular projects and web+mobile code-sharing projects.
position: 80
environment: angular
---

# Angular CLI

The **Angular CLI** makes it easy to create an Angular application and generate core building blocks, like **components**, **modules**, **services**, etc.

With the help of the [NativeScript Schematics](https://www.npmjs.com/package/@nativescript/schematics), you can also reap the benefits of the [Angular CLI](https://www.npmjs.com/package/@angular/cli) in your **Angular NativeScript** projects.

The **NativeScript Schematics** extend the **Angular Schematics**, by providing NativeScript-specific functionality to the existing **Angular generators**.

## Installation

In order to use the Angular CLI in a NativeScript project, you need both the **Angular CLI** and the **NativeScript Schematics**.

> Note, you need to use **@angular/cli** version **6.1** or newer.

### Global Installation

You can either install them globally, which would allow you to create new projects:

```bash
npm i -g @angular/cli
npm i -g @nativescript/schematics
```

### Local Installation

Or you could install them as a part of each project:

```bash
npm i --save-dev @angular/cli
npm i --save-dev @nativescript/schematics
```

## Default configuration

All Angular projects created with the **NativeScript CLI 5.0** come preconfigured and ready to work with the **NativeScript Schematics** and the **Angular CLI**.

This is done by added:

-   the **@nativescript/schematics** node module to **package.json**
-   an **angular.json** file configured to work with **@nativescript/schematics**

However, you will still need to have the **Angular CLI** installed either [globally](./angular-cli#global-installation) or [locally](./angular-cli#local-installation).

### Extending existing NativeScript Projects with the Angular CLI

For projects created with the NativeScript CLI v4 or older, you will need to

To introduce the Angular CLI to an **existing** NativeScript Angular Project, you need to add an **angular.json** file (which is used by the Angular CLI to understand the structure of the project) to the root of the project. The **angular.json** file should have the following content:

```json
{
    "version": 1,
    "cli": {
        "defaultCollection": "@nativescript/schematics"
    },
    "projects": {
        "my-project-name": {
            "root": "",
            "sourceRoot": "src",
            "projectType": "application",
            "prefix": "ns"
        }
    },
    "defaultProject": "my-project-name"
}
```

The **defaultCollection** is where you specify that you want to use the **NativeScript Schematics** when generating building blocks with the Angular CLI.

You could update:

-   **my-project-name** to match the name of your project, but that is not absolutely necessary,
-   **prefix** to match the prefix for your component selectors (i.e. `"prefix": "app"` => `selector: 'app-home'`).

## New Project

To create a new NativeScript Angular project with the Angular CLI, you need to call the `ng new` command with the `--collection=@nativescript/schematics` parameter. Like this:

```bash
ng new --collection=@nativescript/schematics my-mobile-app
```

or with the `-c` shorthand:

```shorthand
ng new -c=@nativescript/schematics my-mobile-app
```

This notifies the Angular CLI that it should use the **ng-new** schematic from the **@nativescript/schematics** npm package. Which in turn creates a new NativeScript Angular project and performs an npm install.

> Note, the NativeScript projects created with the Angular CLI come with the Angular CLI and NativeScript Schematics **already configured**. There is no need to add the **angular.json** file manually.

### Additional Options

You can specify the following options when generating new applications:

| Option  | Description                                                           | Default |
| ------- | --------------------------------------------------------------------- | ------- |
| prefix  | The prefix to apply to generated selectors.                           | `app`   |
| theme   | Specifies whether the **NativeScript Core Theme** should be included. | `true`  |
| style   | Specifies whether to use `css` or `scss` files for styling.           | `css`   |
| webpack | Specifies whether the project should use webpack.                     | `true`  |

Here is an example on how you could provide a different value for each of the flags:

```bash
ng new -c=@nativescript/schematics my-app-name --prefix=my --no-theme --style=scss --no-webpack
```

### Code-Sharing Projects

You can create a new **code-sharing project**, which allows you to build for both web and mobile, by providing a `--shared` flag. Like this:

```bash
ng new -c=@nativescript/schematics my-app-name --prefix=my --no-theme --style=scss --no-webpack
```

You can learn more about code sharing in the [code-sharing section of the docs](../code-sharing/intro).

## Generators

One of the biggest benefits of the Angular CLI is the rapid scaffolding of the application.
It allows you to generate **components**, **routes**, **services** and **pipes** with a simple `ng generate` (or `ng g` for short) command.

> Feel free to check out the [official Angular CLI documentation for the generate command](https://github.com/angular/angular-cli/wiki/generate), as there is a lot of available options.

### Component

To generate a new component, you need to use the **component schematic**. Like this:

```long
ng generate component my-name
```

```short
ng g c my-name
```

#### NativeScript Only Project

In a NativeScript Only project (_not code-sharing_), this command:

-   creates component files:
    _ **my-name.component.ts** - a class file,
    _ **my-name.component.html** - a template file, \* and **my-name.component.css** or **my-name.component.scss** - a style file,
-   adds the component to the **AppModule Providers**,
-   adds `moduleId: module.id` to the `@Component` decorator - which is the **modification introduced** by the NativeScript Schematics.

The component files should be generated in the **app/my-name** folder, like this:

```
app
└── my-name
    ├── my-name.component.css
    ├── my-name.component.html
    └── my-name.component.ts
```

#### Code-Sharing Project

In a Code-Sharing Project, this command:

-   creates **shared** and **platform-specific** component files:
    _ **my-name.component.ts** - a **shared** class file,
    _ **my-name.component.html** - a **web-specific** template file,
    _ **my-name.component.html** - a **NativeScript-specific** template file,
    _ **my-name.component.css** - a **web-specific** style file, \* and **my-name.component.tns.css** - a **NativeScript-specific** style file,
-   adds the component to the **AppModule Providers** of both:
    _ **app.module.ts** - the **web-specific** AppModule file,
    _ and **app.module.tns.ts** - the **nativescript-specific** AppModule file.

The component files should be generated in the **src/app/my-name** folder, like this:

```
src
└── app
    └── my-name
        ├── my-name.component.css
        ├── my-name.component.tns.css
        ├── my-name.component.html
        ├── my-name.component.ts
        └── my-name.component.tns.ts
```

### Module

To generate a new module, you need to use the **module schematic**. Like this:

```long
ng generate module my-name
```

```short
ng g m my-name
```

#### NativeScript Only Project

In a NativeScript Only project, this command creates the module file: **my-name.module.ts** with the following contents:

```
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MyNameModule { }
```

The most notable changes introduced by the NativeScript Schematics, are:

-   the import of the **NativeScriptCommonModule**, as opposed to the **CommonModule** used by the Angular web projects,
-   and the inclusions of the **NO_ERRORS_SCHEMA** schema, which is required to allow using the NativeScript specific selectors (i.e. **StackLayout**).

The module file should be generated in the **src/app/my-name** folder, like this:

```
app
└── my-name
    └── my-name.module.ts
```

#### Code-Sharing Project

In a Code-Sharing Project, this command creates:

-   **my-name.module.ts** - a **web-specific** module file, which imports the **CommonModule**
-   **my-name.module.tns.ts** - a **NativeScript-specific** module file, which imports the **NativeScriptCommonModule** and includes the **NO_ERRORS_SCHEMA** schema,
-   and **my-name.common.ts** - a **shared** file with constants that allow you to easily share the declarations for the components, providers and routes used by both modules.

The module files should be generated in the **src/app/my-name** folder, like this:

```
src
└── app
    └── my-name
        ├── my-name.common.ts
        ├── my-name.module.ts
        └── my-name.module.tns.ts
```

### Bonus: Generate Components inside a Module

You can also generate components inside other modules. This works the same for the NativeScript Only and Code-Sharing projects.

To do that just provide the module name before the component name, like this:

```bash
ng g m pets
ng g c pets/cat
ng g c pets/dog
```

These three commands will:

1. Generate a **pets module**.
2. Generate a **cat component** inside the pets module and it will add it to the pets module declarations.
3. Generate a **dog component** inside the pets module and it will add it to the pets module declarations.

## Additional Template Generators

The **NativeScript Schematics** also come with additional templates that help you build your apps faster.

### Master Detail template

To generate a Master Detail template, you can use the following command:
`ng g master-detail --master=dogs --detail=dog`

This command generates the following file structure:

```
dogs
└── dog-detail
|   └── <dog-detail component files>
├── dogs
|   └── <dogs component files>
├── data.service.ts
└── dogs.module.ts
```

#### Options

| Option | Description                                                  |
| ------ | ------------------------------------------------------------ |
| master | The name of the master component and the name of the module. |
| detail | The name of the detail component                             |
