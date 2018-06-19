---
title: Application Lifecycle
description: Learn how to manage the life cycle of NativeScript applications from application start to storing user-defined settings.
position: 40
slug: lifecycle
previous_url: /application-management,/core-concepts/application-management
---
{% angular %}
# NativeScript application architecture and lifecycle

The main building blocks of NativeScript applications with Angular are:

* [Modules](#modules)
* [Components](#components)

The `application` module lets you manage the life cycle of your NativeScript apps from starting the application to storing user-defined settings.

* [Start Application](#start-application)
* [Use Application Events](#use-application-events)
* [Android Activity Events](#android-activity-events)
* [iOS UIApplicationDelegate](#ios-uiapplicationdelegate)
* [Persist and Restore Application Settings](#persist-and-restore-application-settings)

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
* **ngDoCheck** - Detect and act upon changes that Angular can or won't detect on its own. Called every change detection run.
* **ngOnDestroy** - Called just before Angular destroys the component.

For a full list, see the official [Angular Lifecycle Hooks docs](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html).

## Start application

The starting point of an Angular application is the `platformNativeScriptDynamic().bootstrapModule()` method. It takes the root module as an argument:

``` TypeScript
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
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

const application = require("tns-core-modules/application");
application.run({ moduleName: "app-root" });
```
``` TypeScript
/*
iOS calls UIApplication and triggers the application main event loop.
*/

import * as application from "tns-core-modules/application";
application.run({ moduleName: "app-root" });
```

> **Note:** Prior to version 4.0.0 all NativeScript application had single topmost `Frame` implicitly created by the `application.start()` method. With NativeScript 4.x.x and above the root `Frame` is no longer implicitly created. Instead you can specify any `View` to be the root of your application while using `application.run({ moduleName: "app-root"})` where `app-root` is the file containing your root `View`. More about the `Frame` API and navigation could be found in the [application lifecycle article](https://docs.nativescript.org/core-concepts/navigation)

{% endnativescript %}

## Use Application Events

NativeScript applications have the following life cycle events.

+ `launch`: This event is raised when application launch.
+ `suspend`: This event is raised when the application is suspended.
+ `resume`: This event is raised when the application is resumed after it has been suspended.
+ `displayed`: This event is raised when the UIelements are rendered.
+ `exit`: This event is raised when the application is about to exit.
+ `lowMemory`: This event is raised when the memory on the target device is low.
+ `uncaughtError`: This event is raised when an uncaught application error is present.

{% nativescript %}
``` JavaScript
const application = require("application");

application.on(application.launchEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

application.on(application.suspendEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

application.on(application.resumeEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

application.on(application.displayedEvent, (args) => {
    // args is of type ApplicaitonEventData
    console.log("displayedEvent");
});

application.on(application.orientationChangedEvent, (args) => {
    // args is of type OrientationChangedEventData
    console.log(args.newValue); // "portrait", "landscape", "unknown"
});


application.on(application.exitEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

application.on(application.lowMemoryEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

application.on(application.uncaughtErrorEvent, (args) => {
    console.log("Error: " + args.error);
});

application.run({ moduleName: "app-root" });
```
``` TypeScript
import { displayedEvent, exitEvent, launchEvent, lowMemoryEvent, 
        orientationChangedEvent, resumeEvent, suspendEvent, uncaughtErrorEvent, 
        ApplicationEventData, LaunchEventData, OrientationChangedEventData, UnhandledErrorEventData,
        on as applicationOn, run as applicationRun } from "application";

applicationOn(launchEvent, (args: LaunchEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

applicationOn(suspendEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(resumeEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(displayedEvent, (args: ApplicationEventData) => {
    console.log("displayedEvent");
});

applicationOn(orientationChangedEvent, (args: OrientationChangedEventData) => {
    // "portrait", "landscape", "unknown"
    console.log(args.newValue)
});

applicationOn(exitEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(lowMemoryEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(uncaughtErrorEvent, function (args: UnhandledErrorEventData) {
    console.log("Error: " + args.error);
});

applicationRun({ moduleName: "app-root" });
```
{% endnativescript %}
{% angular %}
```TypeScript
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { on as applicationOn, launchEvent, suspendEvent, resumeEvent, exitEvent, lowMemoryEvent, uncaughtErrorEvent, ApplicationEventData } from "application";

applicationOn(launchEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

applicationOn(suspendEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(resumeEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(exitEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(lowMemoryEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(uncaughtErrorEvent, (args: ApplicationEventData) => {
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
const application = require("application");

if (application.android) {
    application.android.on(application.AndroidApplication.activityCreatedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });
    
    application.android.on(application.AndroidApplication.activityDestroyedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });
    
    application.android.on(application.AndroidApplication.activityStartedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });
    
    application.android.on(application.AndroidApplication.activityPausedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });
    
    application.android.on(application.AndroidApplication.activityResumedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });
    
    application.android.on(application.AndroidApplication.activityStoppedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });
    
    application.android.on(application.AndroidApplication.saveActivityStateEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });
    
    application.android.on(application.AndroidApplication.activityResultEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity +
            ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
    });
    
    application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        // Set args.cancel = true to cancel back navigation and do something custom.
    });
}

application.run({ moduleName: "app-root" });
```
``` TypeScript
import { android, AndroidApplication, AndroidActivityBundleEventData } from "application";

// Android activity events
if (android) {
    android.on(AndroidApplication.activityCreatedEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    android.on(AndroidApplication.activityDestroyedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityStartedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityResumedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityStoppedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.saveActivityStateEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    android.on(AndroidApplication.activityResultEvent, function (args: AndroidActivityResultEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity +
            ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
    });

    android.on(AndroidApplication.activityBackPressedEvent, function (args: AndroidActivityBackPressedEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        // Set args.cancel = true to cancel back navigation and do something custom.
    });
}

application.run({ moduleName: "app-root" });
```
{% endnativescript %}
{% angular %}
```TypeScript
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { android, AndroidApplication, AndroidActivityBundleEventData, AndroidActivityEventData, AndroidActivityResultEventData, AndroidActivityBackPressedEventData } from "application";

// Android activity events
if (android) {
    android.on(AndroidApplication.activityCreatedEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    android.on(AndroidApplication.activityDestroyedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityStartedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityResumedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityStoppedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.saveActivityStateEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    android.on(AndroidApplication.activityResultEvent, function (args: AndroidActivityResultEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity +
            ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
    });

    android.on(AndroidApplication.activityBackPressedEvent, function (args: AndroidActivityBackPressedEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        // Set args.cancel = true to cancel back navigation and do something custom.
    });
}
platformNativeScriptDynamic().bootstrapModule(AppModule);

```
{% endangular %}
## iOS UIApplicationDelegate

In NativeScript, you can specify custom `UIApplicationDelegate` for the iOS application:

{% nativescript %}
``` JavaScript
const application = require("application");
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
application.ios.delegate = MyDelegate;
application.run({ moduleName: "app-root" });
```
``` TypeScript
import { ios, run as applicationRun } from "application";
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
ios.delegate = MyDelegate;
applicationRun({ moduleName: "main-page" });
```
{% endnativescript %}
{% angular %}
```TypeScript
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import { ios } from "application";
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
ios.delegate = MyDelegate;
platformNativeScriptDynamic().bootstrapModule(AppModule);

```
{% endangular %}
> **Note**: If you’re using TypeScript in your NativeScript apps, you need to install the [tns-platform-declarations plugin](https://www.npmjs.com/package/tns-platform-declarations) to add typings for native iOS APIs such as `UIApplicationDelegate`.

## Persist and Restore Application Settings

To persist user-defined settings, you need to use the `application-settings` module. The `application-settings` module is a static singleton hash table that stores key-value pairs for the application. 

The getter methods have two parameters: a key and an optional default value to return if the specified key does not exist.
The setter methods have two required parameters: a key and value. 

{% nativescript %}
``` JavaScript
const applicationSettings = require("application-settings");
// Event handler for Page "loaded" event attached in main-page.xml.
function pageLoaded(args) {
    applicationSettings.setString("Name", "John Doe");
    console.log(applicationSettings.getString("Name")); // Prints "John Doe".
    applicationSettings.setBoolean("Married", false);
    console.log(applicationSettings.getBoolean("Married")); // Prints false.
    applicationSettings.setNumber("Age", 42);
    console.log(applicationSettings.getNumber("Age")); // Prints 42.
    console.log(applicationSettings.hasKey("Name")); // Prints true.
    applicationSettings.remove("Name"); // Removes the Name entry.
    console.log(applicationSettings.hasKey("Name")); // Prints false.
}
exports.pageLoaded = pageLoaded;
```
{% endnativescript %}
``` TypeScript
import { EventData } from "data/observable";
import * as applicationSettings from "application-settings";
// Event handler for Page "loaded" event attached in main-page.xml.
export function pageLoaded(args: EventData) {
    applicationSettings.setString("Name", "John Doe");
    console.log(applicationSettings.getString("Name"));// Prints "John Doe".
    applicationSettings.setBoolean("Married", false);
    console.log(applicationSettings.getBoolean("Married"));// Prints false.
    applicationSettings.setNumber("Age", 42);
    console.log(applicationSettings.getNumber("Age"));// Prints 42.
    console.log(applicationSettings.hasKey("Name"));// Prints true.
    applicationSettings.remove("Name");// Removes the Name entry.
    console.log(applicationSettings.hasKey("Name"));// Prints false.
}
```
