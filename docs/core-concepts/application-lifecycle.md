---
title: Application Lifecycle
description: Learn how to manage the life cycle of NativeScript applications from launching or closing the mobile app to storing user-defined settings.
position: 40
tags: application management, nativescript app management, nativescript life cycles
slug: lifecycle
previous_url: /application-management,/core-concepts/application-management
---
{% angular %}
# NativeScript application architecture and lifecycle

The main building blocks of NativeScript applications with Angular are modules and components. The `application` module lets you manage the life cycle of your NativeScript apps from starting the application to storing user-defined settings.

## Modules 

Angular applications are modular. A module is a file containing a block of code dedicated to a single purpose. It exports a value that can be used by other parts of the application. For example:

``` TypeScript
export class AppComponent {}
```

The `export` statement is important as it makes the `AppComponent` accessible to other modules. The import clause is used to reference the `AppComponent` class from other modules:

``` TypeScript
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
```

Some of the modules can depend on one or more separate modules. Modules installed as npm packages (like `@angular/core` in the above example) should be referenced without a path prefix. When we import from one of our own files, we prefix the module name with the file path. In this example, we specify a relative file path (./). That means the source module is in the same folder (./) as the module importing it. 

## Components

Components are the fundamental building blocks of NativeScript applications built with Angular. Every NativeScript application contains a set of components that define every UI element, screen or route. The application has a root component that contains all other components. The following constitutes a component:

* A component knows how to interact with its host element.
* A component knows how to render itself.
* A component configures dependency injection.
* A component has a well-defined public API of input and output properties.
* A component has a well-defined lifecycle.

``` TypeScript
import { Component } from "@angular/core";

@Component({
    selector: "main-component",
    template: `
        <StackLayout>
            <Label text="Hello {{ name }}"></Label>
        </StackLayout>
    `
})
export class MainComponent {
    name: string;

    constructor() {
        this.name = "Angular!";
    }
}
```

## Component metadata

The `@Component` decorator contains metadata describing how to create and present the component. Here are some of the configuration options:

* **selector** - a CSS selector that tells Angular to create and insert an instance of this component where it finds the selector in parent component's template. For example:

```HTML
<main-component></main-component>
```

* **template** - A visual tree that represents the component view. Here you can use all NativeScript UI elements and custom defined UI components.
* **templateUrl** - The address of a file where the component template is located.
* **styles** - CSS directives that define the component style.
* **styleUrls** - An array containing URLs of CSS files that define the component style.
* **animations** - The animations associated with this component.
* **providers** - an array of dependency injection providers for services that the component requires.

## Component lifecycle

The component lifecycle is controlled by the Angular application. It creates, updates and destroys components. Lifecycle hooks are used to handle different events from the component lifecycle. Each hook method starts with the **ng** prefix. The following are some the component lifecycle methods:

* **ngOnInit** - Called after all data-bound input methods are initialized.
* **ngOnChanges** - Called after a data-bound property has been changed.
* **ngDoCheck** - Detect and act upon changes that Angular can't or won't detect on its own. Called every change detection run.
* **ngOnDestroy** - Called just before Angular destroys the component.

For a full list, see the official [Angular Lifecycle Hooks docs](https://angular.io/guide/lifecycle-hooks).

## Start application

The starting point of an Angular application is the `platformNativeScriptDynamic().bootstrapModule()` method. It takes the root module as an argument:

``` TypeScript
import { platformNativeScriptDynamic } from "@nativescript/angular";
import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule).then(() => {
    console.log("The application is now running!");
}).catch((e) => {
    console.log("The application bootstrapping failed with error: " + e);
});
```

{% endangular%} 

{% nativescript %}
# Application Management

The `application` module lets you manage the life cycle of your NativeScript apps from starting the application to storing user-defined settings.

* [Application Run](#application-run)
* [Use Application Events](#use-application-events)
* [Android Activity Events](#android-activity-events)
* [iOS UIApplicationDelegate](#ios-uiapplicationdelegate)
* [Persist and Restore Application Settings](#persist-and-restore-application-settings)

## Application Run

The method `run` from the `application` module is required to start the application and accepts the path to the root XML file.

> **Note:** You must call the `run` method of the application module **after** the module initialization. Any code after the `run` call will not be executed.

``` JavaScript
/*
iOS calls UIApplication and triggers the application main event loop.
*/

import { Application } from "@nativescript/core";
Application.run({ moduleName: "app-root" });
```
``` TypeScript
/*
iOS calls UIApplication and triggers the application main event loop.
*/

import { Application } from "@nativescript/core";
Application.run({ moduleName: "app-root" });
```

> **Note:** Prior to version 4.0.0 all NativeScript application had single topmost `Frame` implicitly created by the `application.start()` method. With NativeScript 4.x.x and above the root `Frame` is no longer implicitly created. Instead you can specify any `View` to be the root of your application while using `Application.run({ moduleName: "app-root"})` where `app-root` is the file containing your root `View`. More about the `Frame` API and navigation could be found in the [navigation article](https://docs.nativescript.org/core-concepts/navigation)

{% endnativescript %}

## Use Application Events

NativeScript applications have the following life cycle events.

+ `launch`: This event is raised when application launch.
+ `suspend`: This event is raised when the application is suspended.
+ `resume`: This event is raised when the application is resumed after it has been suspended.
+ `displayed`: This event is raised when the UIelements are rendered.
+ `orientationChanged`: This event is raised when the device changes orientation.
+ `exit`: This event is raised when the application is about to exit.
+ `lowMemory`: This event is raised when the memory on the target device is low.
+ `uncaughtError`: This event is raised when an uncaught application error is present.

{% nativescript %}
``` JavaScript
import { Application } from "@nativescript/core";

Application.on(Application.launchEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

Application.on(Application.suspendEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.resumeEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.displayedEvent, (args) => {
    // args is of type ApplicationEventData
    console.log("displayedEvent");
});

Application.on(Application.orientationChangedEvent, (args) => {
    // args is of type OrientationChangedEventData
    console.log(args.newValue); // "portrait", "landscape", "unknown"
});


Application.on(Application.exitEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
        if (args.android.isFinishing()) {
            console.log("Activity: " + args.android + " is exiting");
        } else {
            console.log("Activity: " + args.android + " is restarting");
        }
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.lowMemoryEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.uncaughtErrorEvent, (args) => {
    console.log("Error: " + args.error);
});

Application.run({ moduleName: "app-root" });
```
``` TypeScript
import { Application, ApplicationEventData, LaunchEventData, OrientationChangedEventData, UnhandledErrorEventData } from "@nativescript/core";

Application.on(Application.launchEvent, (args: LaunchEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

Application.on(Application.suspendEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.resumeEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.displayedEvent, (args: ApplicationEventData) => {
    console.log("displayedEvent");
});

Application.on(Application.orientationChangedEvent, (args: OrientationChangedEventData) => {
    // "portrait", "landscape", "unknown"
    console.log(args.newValue)
});

Application.on(Application.exitEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.lowMemoryEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.uncaughtErrorEvent, function (args: UnhandledErrorEventData) {
    console.log("Error: " + args.error);
});

Application.run({ moduleName: "app-root" });
```
{% endnativescript %}
{% angular %}
```TypeScript
import { platformNativeScriptDynamic } from "@nativescript/angular";
import { AppModule } from "./app.module";
import { Application, ApplicationEventData } from "@nativescript/core";

Application.on(Application.launchEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

Application.on(Application.suspendEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.resumeEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.exitEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
        if (args.android.isFinishing()) {
            console.log("Activity: " + args.android + " is exiting");
        } else {
            console.log("Activity: " + args.android + " is restarting");
        }
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.lowMemoryEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.uncaughtErrorEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an NativeScriptError.
        console.log("NativeScriptError: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is NativeScriptError.
        console.log("NativeScriptError: " + args.ios);
    }
});
platformNativeScriptDynamic().bootstrapModule(AppModule);
```
{% endangular %}
## Android Activity Events

NativeScript applications have the following Android specific activity events:

+ `activityCreated`: This event is raised when activity is created.
+ `activityDestroyed`: This event is raised when activity is destroyed.
+ `activityStarted`: This event is raised when activity is started.
+ `activityPaused`: This event is raised when activity is paused.
+ `activityResumed`: This event is raised when activity is resumed.
+ `activityStopped`: This event is raised when activity is stopped.
+ `saveActivityState`: This event is raised to retrieve per-instance state from an activity before being killed so that the state can be restored.
+ `activityResult`: This event is raised when an activity you launched exits, giving you the requestCode you started it with, the resultCode it returned, and any additional data from it.
+ `activityBackPressed`: This event is raised when the activity has detected the user's press of the back key.

{% nativescript %}
``` JavaScript
import { Application, AndroidApplication, isAndroid } from "@nativescript/core";

if (isAndroid) {
    Application.android.on(AndroidApplication.activityCreatedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });
    
    Application.android.on(AndroidApplication.activityDestroyedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });
    
    Application.android.on(AndroidApplication.activityStartedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });
    
    Application.android.on(AndroidApplication.activityPausedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });
    
    Application.android.on(AndroidApplication.activityResumedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });
    
    Application.android.on(AndroidApplication.activityStoppedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });
    
    Application.android.on(AndroidApplication.saveActivityStateEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });
    
    Application.android.on(AndroidApplication.activityResultEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity +
            ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
    });
    
    Application.android.on(AndroidApplication.activityBackPressedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        // Set args.cancel = true to cancel back navigation and do something custom.
    });
}

Application.run({ moduleName: "app-root" });
```
``` TypeScript
import { isAndroid, Application, AndroidApplication, AndroidActivityBundleEventData } from "@nativescript/core";

// Android activity events
if (isAndroid) {
    Application.android.on(AndroidApplication.activityCreatedEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    Application.android.on(AndroidApplication.activityDestroyedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityStartedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityResumedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityStoppedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.saveActivityStateEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    Application.android.on(AndroidApplication.activityResultEvent, function (args: AndroidActivityResultEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity +
            ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
    });

    Application.android.on(AndroidApplication.activityBackPressedEvent, function (args: AndroidActivityBackPressedEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        // Set args.cancel = true to cancel back navigation and do something custom.
    });
}

Application.run({ moduleName: "app-root" });
```
{% endnativescript %}
{% angular %}
```TypeScript
import { platformNativeScriptDynamic } from "@nativescript/angular";
import { AppModule } from "./app.module";
import { isAndroid, Application, AndroidApplication, AndroidActivityBundleEventData, AndroidActivityBackPressedEventData, AndroidActivityResultEventData, AndroidActivityEventData, AndroidActivityBundleEventData } from "@nativescript/core";

// Android activity events
if (isAndroid) {
    Application.android.on(AndroidApplication.activityCreatedEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    Application.android.on(AndroidApplication.activityDestroyedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityStartedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityResumedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityStoppedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.saveActivityStateEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    Application.android.on(AndroidApplication.activityResultEvent, function (args: AndroidActivityResultEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity +
            ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
    });

    Application.android.on(AndroidApplication.activityBackPressedEvent, function (args: AndroidActivityBackPressedEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        // Set args.cancel = true to cancel back navigation and do something custom.
    });
}
platformNativeScriptDynamic().bootstrapModule(AppModule);
```

> **Note:** The native callbacks (Android or iOS) are executed outside the [Angular zone](https://angular.io/api/core/NgZone). That means that if, for example, the application UI is depending on changes in a native callback, then an explicit wrapping in the `NgZone` would be needed (to trigger the Angular change detection). An example of using the `NgZone` with a native callback can be found [here](https://github.com/NativeScript/nativescript-sdk-examples-ng/blob/24df6d31cf488b0dda8772e6ba1de76141727f01/app/ng-framework-modules-category/fps-meter/usage/usage.component.ts#L13-L23).


{% endangular %}
## iOS UIApplicationDelegate

In NativeScript, you can specify custom `UIApplicationDelegate` for the iOS application:

{% nativescript %}
``` JavaScript
import { Application } from "@nativescript/core";
const MyDelegate = (function (_super) {
    __extends(MyDelegate, _super);
    function MyDelegate() {
        _super.apply(this, arguments);
    }
    MyDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (application, launchOptions) {
        console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions);
        return true;
    };
    MyDelegate.prototype.applicationDidBecomeActive = function (application) {
        console.log("applicationDidBecomeActive: " + application);
    };
    MyDelegate.ObjCProtocols = [UIApplicationDelegate];
    return MyDelegate;
})(UIResponder);
Application.ios.delegate = MyDelegate;
Application.run({ moduleName: "app-root" });
```
``` TypeScript
import { Application } from "@nativescript/core";

@NativeClass()
class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
        console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions)

        return true;
    }

    applicationDidBecomeActive(application: UIApplication): void {
        console.log("applicationDidBecomeActive: " + application)
    }
}
Application.ios.delegate = MyDelegate;
Application.run({ moduleName: "main-page" });
```
{% endnativescript %}
{% angular %}
```TypeScript
import { platformNativeScriptDynamic } from "@nativescript/angular";
import { Application } from "@nativescript/core";
import { AppModule } from "./app.module";

@NativeClass()
class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
        console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions)

        return true;
    }

    applicationDidBecomeActive(application: UIApplication): void {
        console.log("applicationDidBecomeActive: " + application)
    }
}
Application.ios.delegate = MyDelegate;
platformNativeScriptDynamic().bootstrapModule(AppModule);

```
{% endangular %}
> **Note**: If you’re using TypeScript in your NativeScript apps, you need to install the [@nativescript/types plugin](https://www.npmjs.com/package/@nativescript/types) to add typings for native iOS APIs such as `UIApplicationDelegate`.

## Persist and Restore Application Settings

To persist user-defined settings, you need to use the `application-settings` module. The `application-settings` module is a static singleton hash table that stores key-value pairs for the application. 

The getter methods have two parameters: a key and an optional default value to return if the specified key does not exist.
The setter methods have two required parameters: a key and value. 

{% nativescript %}
``` JavaScript
import { ApplicationSettings } from "@nativescript/core";
// Event handler for Page "loaded" event attached in main-page.xml.
export function pageLoaded(args) {
    ApplicationSettings.setString("Name", "John Doe");
    console.log(ApplicationSettings.getString("Name")); // Prints "John Doe".
    ApplicationSettings.setBoolean("Married", false);
    console.log(ApplicationSettings.getBoolean("Married")); // Prints false.
    ApplicationSettings.setNumber("Age", 42);
    console.log(ApplicationSettings.getNumber("Age")); // Prints 42.
    console.log(ApplicationSettings.hasKey("Name")); // Prints true.
    ApplicationSettings.remove("Name"); // Removes the Name entry.
    console.log(ApplicationSettings.hasKey("Name")); // Prints false.
}
```
{% endnativescript %}
``` TypeScript
import { EventData, ApplicationSettings } from "@nativescript/core";
// Event handler for Page "loaded" event attached in main-page.xml.
export function pageLoaded(args: EventData) {
    ApplicationSettings.setString("Name", "John Doe");
    console.log(ApplicationSettings.getString("Name"));// Prints "John Doe".
    ApplicationSettings.setBoolean("Married", false);
    console.log(ApplicationSettings.getBoolean("Married"));// Prints false.
    ApplicationSettings.setNumber("Age", 42);
    console.log(ApplicationSettings.getNumber("Age"));// Prints 42.
    console.log(ApplicationSettings.hasKey("Name"));// Prints true.
    ApplicationSettings.remove("Name");// Removes the Name entry.
    console.log(ApplicationSettings.hasKey("Name"));// Prints false.
}
```
