---
title: Angular Bootstrap
description: Learn how a NativeScript Angular application bootstraps and how you can customize the process.
position: 2
slug: angular-bootstrap
environment: angular
---

# Overview

This article will cover in detail the process of bootstrapping an Angular application.

* [The Bootstrap Process](#the-bootstrap-process)
* [NativeScript Application Options](#nativescript-application-options)
* [Customizing DI Providers](#customizing-di-providers)
* [Objects Injected by the Platform](#objects-injected-by-the-platform)
* [Advanced Bootstrap](#advanced-bootstrap)

# The Bootstrap Process

A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. Angular does not care about any of that -- all it needs is a place in the DOM to attach to. To make both paradigms work together, we provide a wrapper function, `nativeScriptBootstrap`, that sets up a NativeScript application and bootstraps the Angular framework in a default location on the main UI page.

```typescript
nativeScriptBootstrap(AppMainComponent);
```

One of our major design goals here is to provide virtually the same interface as the default Angular `bootstrap` routine, so that people familiar with the web version of Angular get productive with as little friction as possible.

# NativeScript Application Options

Application options in NativeScript are configured at the time the application boots. That could be problematic for Angular apps since the usual application start up process is hidden inside the `nativeScriptBootstrap` black box. To allow for customizations, we introduced an additional `AppOptions` parameter that lets you preconfigure certain aspects of your application behavior. At the moment those are:

* `cssFile`: overrides the path to the file containing global CSS rules that are applied to all visual objects in the application. The default path is `app.css`.
* `startPageActionBarHidden`: a boolean setting controlling whether your app will display the action bar on startup. The default setting is platform-specific: it displays the action bar on Android and hides it on iOS.

```typescript
nativeScriptBootstrap(AppMainComponent, [], {startPageActionBarHidden: true});
```

# Customizing DI Providers

Many aspects of Angular applications are configured through the dependency injection (DI) system. The bootstrap function is the tool that configures the DI providers and exposes them to all application objects. Multiple Angular libraries, such as the router and the http client use it to configure providers and associated directives:

```typescript
import {NS_ROUTER_PROVIDERS} from "nativescript-angular/router";

nativeScriptBootstrap(AppMainComponent, [NS_ROUTER_PROVIDERS]);
```

For an in-depth guide to dependency injection in Angular 2, please review the [Dependency Injection in Angular 2](http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html) blog post.

# Objects Injected by the Platform

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

## Autoinjected objects:

* `"ui/page".Page`: the native page the component renders on. The router implementation takes care to inject the correct instance when loading components on different pages.
* `"platform".Device`: contains information about the device the application is running on.

# Advanced Bootstrap

Certain application scenarios may require bootstrapping an Angular app in a preexisting NativeScript application. The need to do that usually arises in automated tests that need to create and destroy applications in different setups. Advanced bootstraps could also be useful when migrating vanilla NativeScript applications to Angular -- you can start the migration by integrating Angular and implementing new features with it, then start migrating old features one at a time.

The advanced bootstrap API entry point is called just `bootstrap`. All it does is set up DI providers needed by the NativeScript renderer and start the Angular application. To use it, you need to specify a location in the visual tree that will be the application root. Angular web applications use the main component selector for that purpose, but due to a limitation in the NativeScript CSS selector implementation you need to configure a DI provider with a special key: `APP_ROOT_VIEW`.

```typescript
import {bootstrap} from "nativescript-angular/application";
import {APP_ROOT_VIEW} from "nativescript-angular/platform-providers";

const viewRoot = new GridLayout();
rootLayout.addChild(viewRoot);

const rootViewProvider = provide(APP_ROOT_VIEW, { useValue: viewRoot });
return bootstrap(appComponentType, providers.concat(rootViewProvider)).then((componentRef) => {
    //...
});
```

# Conclusion

Bootstrapping a mobile Angular application should look almost identical to web application bootstraps. Most projects will never need to go beyond customizing providers for the DI subsystem, yet the customization mechanisms are there for the complex use cases.
