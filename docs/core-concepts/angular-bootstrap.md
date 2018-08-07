---
title: Angular Bootstrap
description: Learn how a NativeScript Angular application bootstraps and how you can customize the process.
position: 41
slug: angular-bootstrap
environment: angular
previous_url: /core-concepts/customizing-bootstrap
---

# Overview

This article will cover in detail the process of bootstrapping an Angular application.


## The Bootstrap Process

A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. Angular does not care about any of that -- all it needs is a place in the DOM to attach to. Of course, Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, `nativeScriptPlatformDynamic`, that sets up a NativeScript application and can bootstrap the Angular framework in a default location on the main UI page.

```typescript
platformNativeScriptDynamic().bootstrapModule(AppModule);
```

One of our major design goals here is to provide virtually the same interface as the default Angular `bootstrap` routine, so that people familiar with the web version of Angular get productive with as little friction as possible.

## NativeScript Application Options

Application options in NativeScript are configured at the time the application boots. That could be problematic for Angular apps since the usual application start up process is hidden inside the `platformNativeScriptDynamic` black box. To allow for customizations, we introduced an additional `AppOptions` parameter to the platform initialization function that lets you preconfigure certain aspects of your application behavior. At the moment those are:

* `cssFile`: overrides the path to the file containing global CSS rules that are applied to all visual objects in the application. The default path is `app.css`.
* `createFrameOnBootstrap`: In cases where your application **don't use `page-router-outlet`** , you will not get the default `Page` and `Frame`, which means you will not be able to inject them in you components or show the `ActionBar`. There is special `createFrameOnBootstrap` boolean option you can pass on bootstrap to make things as before 4.0.0:

```TS
platformNativeScriptDynamic({ createFrameOnBootstrap: true });
```

## Customizing DI Providers

Many aspects of Angular applications are configured through the dependency injection (DI) system. NgModule's are usually the tool that lets you configure DI providers and exposes them to all application objects. Multiple Angular libraries, such as the router and the http client come with their own modules that register providers. NativeScript provides wrappers for the built-in modules (router, forms, HTTP) that should be used in mobile apps:

```typescript
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core"; 
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
    ],
})
class AppModule {}

platformNativeScriptDynamic().bootstrapModule(AppModule);
```

For an in-depth guide to dependency injection in Angular, please review the [Dependency Injection in Angular](http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html) blog post.

## Objects Injected by the Platform

The DI system plays a central part in Angular apps, and it makes sense to use it to expose certain platform objects to client code. That makes accessing them as simple as declaring a constructor parameter of the specified type. For example, here is how the component below gets an instance of the native `Page` object:

```typescript
@Component({
    selector: "user-details",
    template: "..."
})
export class UserDetailsView {
    constructor(private page: Page) {
    }
}
```

## Autoinjected objects

* `"ui/page".Page`: the native page the component renders on. The router implementation takes care to inject the correct instance when loading components on different pages.
* `"platform".Device`: contains information about the device the application is running on.

## Advanced Bootstrap

Certain application scenarios may require bootstrapping an Angular app in a preexisting NativeScript application. The need to do that usually arises in automated tests that need to create and destroy applications in different setups. Advanced bootstraps could also be useful when migrating vanilla NativeScript applications to Angular -- you can start the migration by integrating Angular and implementing new features with it, then start migrating old features one at a time.

The advanced bootstrap API entry point is again our friend the `platformNativeScriptDynamic` factory function, but this time you need to pass the `bootInExistingPage` application option. You will also need a DI provider that will return the visual element that will serve as the application root view. Here is how a typical bootstrap looks like:

```typescript
const root = new StackLayout();
const rootViewProvider = {provide: APP_ROOT_VIEW, useValue: root};

@NgModule({
    //...
    providers: [
        rootViewProvider,
    ]
})
class AdvancedBootstrapModule {}

platformNativeScriptDynamic({bootInExistingPage: true}).bootstrapModule(AdvancedBootstrapModule);
```

## Conclusion

Bootstrapping a mobile Angular application should look almost identical to web application bootstraps. Most projects will never need to go beyond customizing DI providers or importing NgModule's, yet the customization mechanisms are there for the advanced use cases.
