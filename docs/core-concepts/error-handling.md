---
title: Error Handling
description: Learn how to handle errors in NativeScript core modules, how to define custom error handler and how to use development and production mode for error handling
position: 130
slug: error-handling
---
# Error Handling

## Handling errors in NativeScript core modules

A big difference between web and NativeScript applications is the way the Errors have been handled. Currently, when an unhandled exception is thrown in NativeScript (e.g. inside `tns-core-modules`, plugin, used in the app, or application code) the app will crash, and an Error with the corresponding stack trace will be shown.
In some cases, this seems to be the expected behaviour when the app is in `development` mode. You would want to have the stack trace of the exact location the unexpected error has occurred so that you can more easily understand what happened and allows you to fix the issue. However, when the app is in a `production` similar application crashes can seriously hurt your application credibility and drive away customers. In many cases, you might prefer anything else (e.g. app freeze, blank screen, failed navigation) to an actual crash with an error log.

Regarding that, new API is introduced in NativeScript, which provides functionality for handling errors in different ways while the app is in development and production. While creating the API, the following three scenarios have been taken in mind.

1. (development mode) Throw exceptions as soon as an error occurs.
2. (development mode) Show a scary console.log with ERROR: Something bad happened but continue execution of the app. You will see it in your terminal, but decide if it is critical based on what happens with the app after that.
3. (production mode) Send an error report to your analytics/error-report server but continue app execution. Maybe triggers some recover logic that will handle the app without a crash.


### Using Error method
With the API the `trace` module is extended with a new method called `error()`. The method can be used, for example, in the plugins and allows the JavaScript error to be passed up and to be handled in the application code.

Example:

```
function doSomething(arg) {
  // Instead of throwing the error
  // **if(!arg) throw new Error("Arg not provided in "doSomething");**
  // we can use the new **trace.error()**
  if(!arg) {
    trace.error("Arg not provided in "doSomething");
    return;
  }
  // ... implementation using arg
}
```
The example demonstrates, how we can use the `error` method inside of a plugin's code, instead of throwing the error, which can cause a crash.

### Defining custom error handler

This API also introduces a technique, which allows the developers to define custom error handler logic. In this case, the `ErrorHandler` will be called whenever `trace.error(...)` is called. The default error handler will just `throw` the errors as they come.

Example:

```javascript
import "./bundle-config";
import * as application from "tns-core-modules/application";
import * as traceModule from "tns-core-modules/trace";

const errorHandler: traceModule.ErrorHandler = {
    handlerError(err) {
        // Option 1 (development) - throw the error
        throw err;

        // Option 2 (development) - logging the error via write method provided from trace module
        traceModule.write(err, "unhandled-error", type.error);

        // (production) - custom functionality for error handling
        // reportToAnalytics(err)
    }
}

traceModule.setErrorHandler(errorHandler)
application.run({ moduleName: 'app-root' });
```

The example shows how to define a custom handler and three possible options for handling the error via [trace]({%slug trace%}) module or while using custom functionality.

Further info about the error handing in NativeScript can be found [here](https://github.com/NativeScript/NativeScript/blob/master/tools/notes/HandlingErrors.md).

## Disabling rethrowing of uncaught JS exceptions to native

A property called `discardUncaughtJsExceptions` was introduced with NativeScript 4.2. It allows you to configure whether unhandled exceptions coming from JavaScript code which has been called from native should be caught or not. This option is disabled by default and to enable it you have to set the `discardUncaughtJsExceptions` property to `true` inside the `app/package.json` file.

Switching it on will cause JS exceptions to be caught without being propagated to the native world, effectively protecting the app from crashing. All exceptions that have been discarded will be reported to the app via the `application.discardedErrorEvent`. For more information on this feature refer to `Discarding JavaScript exceptions when called from native section` [here]({% slug structure %}#apppackagejson).

> **Note:** Enabling this property can lead to the discarding a fatal exception, which can destabilize the application and result in unexpected behavior and hard to track and debug unrelated to the original issue crashes. For proper exception handling, it is recommended to keep the default setting and ensure that no uncaught JS exceptions escape to top-level native code.
