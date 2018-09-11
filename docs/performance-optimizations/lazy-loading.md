---
title: Lazy Loading
description: Optimizing the application startup and modules loading time with Angular Lazy Loading. Improving bootstrap and in-app performance by using lazy loading of featured modules with their components, services, and routes.
position: 30
environment: angular
slug: lazy-loading
---

## What is Lazy Loading (and why you should use it)?

Lazy loading is an Angular technique that allows you to load featured components asynchronously when a specific route is activated. This can add some initial performance during application bootstrap, especially if you have many components with heavy UI and complex routing. 

Use lazy loading to decrease the startup time of your NativeScript application. Additionally, when users interact with a loaded module, the Angular router will preload the other components in the background making in-app navigation faster.

## How does Lazy Loading work?

With lazy loading, the application is split into multiple bundles. There is the main bundle which in the context of NativeScript application will hold the root module (usually called **_app.module.ts_** located in the **_app_** folder) and the featured modules which will be loaded "on demand" after user interaction. Each module can define multiple components, services, and routes.

![lazy loading example](../img/performance/lazy.png)


## Implementing Lazy Loading in NativeScript

In the following sections, we will create a simple Angular application using the [Hello World template](https://github.com/NativeScript/template-hello-world-ng) which by default has no lazy loaded modules. Then, we will add the featured lazy loaded **HomeModule**.

- Create the Hello World Angular template

    ```Shell
    tns create my-app --ng
    cd my-app
    ```

- Add folder to hold your `FeatureModule` along with all the components, services, routing tables of the module. 

    A good practice is to use for the name of the module as the name of the containing folder. For example, create a **`feature`** folder and add **`feature.module.ts`** and the needed components that will be part of the module (in our case **`feature.component.ts`**)
    ```JS
    my-app
    --app
    ----feature
    ------feature.module.ts
    ------feature.routes.ts
    ------feature.component.ts
    ------feature.service.ts
    ```

-  Create the routing table and the lazily loaded module

    _app/feature/feature.routes.ts_
    ```TypeScript
    // app/home/home.routes.ts
    import { FeatureComponent } from "./feature.component";

    // export the routing table for the lazily loaded module
    export const routes = [
        {
            path: "",
            component: FeatureComponent
        }
    ];
    ```

    _app/feature/feature.module.ts_
    ```TypeScript
    // app/home/home.module.ts
    import { NativeScriptCommonModule } from "nativescript-angular/common";
    import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
    import { NativeScriptRouterModule } from "nativescript-angular/router";

    import { FeatureComponent } from "./feature.component";
    import { FeatureService } from "./feature.service";
    import { routes } from "./feature.routes"; // import the routing table

    @NgModule({
        schemas: [NO_ERRORS_SCHEMA],
        imports: [
            NativeScriptRouterModule,
            NativeScriptRouterModule.forChild(routes), // set the lazy loaded routes
            NativeScriptCommonModule,
        ],
        declarations: [FeatureComponent], // declare all components that will be used within the module
        providers: [ FeatureService ] // provide all services that will be used within the module
    })
    export class FeatureModule { }
    ```

-  Add the lazily loaded module to the application routing table

    _app/app.routing.ts_
    ```TypeScript
    // app/app.routing.ts
    import { NgModule } from "@angular/core";
    import { NativeScriptRouterModule } from "nativescript-angular/router";
    import { Routes } from "@angular/router";

    import { ItemsComponent } from "./item/items.component";
    import { ItemDetailComponent } from "./item/item-detail.component";

    const routes: Routes = [
        { path: "", redirectTo: "/items", pathMatch: "full" },
        { path: "items", component: ItemsComponent },
        { path: "item/:id", component: ItemDetailComponent },
        { path: "feature", loadChildren: "./feature/feature.module#FeatureModule", }, // lazy loaded module
    ];

    @NgModule({
        imports: [NativeScriptRouterModule.forRoot(routes)],
        exports: [NativeScriptRouterModule]
    })
    export class AppRoutingModule { }
    ```


-  Navigating to lazily loaded module

    With all of the above steps implemented, you can start navigating to the default path of the lazily loaded module.

    _app/item/items.component.html_
    ```HTML
    <!-- app/item/items.component.html -->
    <StackLayout class="page">
        <!-- navigate to the default path in the lazy loaded module -->
        <Label text="Go to my Feature" [nsRouterLink]="['/feature']" class="h2 m-10"></Label>

        <ListView [items]="items" class="list-group">
            <ng-template let-item="item">
                <Label [nsRouterLink]="['/item', item.id]" [text]="item.name"
                    class="list-group-item"></Label>
            </ng-template>
        </ListView>
    </StackLayout>
    ```

## Benefits from using Lazy Loading

A real-life NativeScript application with (like the [Angular SDK Examples](https://github.com/NativeScript/nativescript-sdk-examples-ng)) can have more hundreds of different components. Each component may have its route, services, and multiple featured components. Using lazy loading modules improves the startup time dramatically (in the case of SDK Examples app with up-to 5x better startup timings). Instead of having to load the hundreds of components at the application bootstrap, you can load just the landing module and load all other submodules lazily.