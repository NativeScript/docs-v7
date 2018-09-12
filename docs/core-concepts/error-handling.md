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
The example demostrates, how we can use the `error` method inside of a plugin's code, inseed of throwing the error, which can cause a crash.

### Defining custom error handler

This API also introduces a technic, which allows the developers to define custom error handler logic. In this case, the `ErrorHandler` will be called whenever `trace.error(...)` is called. The default error handler, which will just `throw` the error as they come.

Example:

```
import "./bundle-config";
import * as application from 'application';
import * as traceModule from "tns-core-modules/trace"
const errorHandler: traceModule.ErrorHandler = {
    handlerError(err){
        //option 1 (development) - throw the error
        throw err;

        //option 2 (development) - logging the error via write method provided from trace module 
        traceModule.write(err, "unhandlede-error", type.error);

        //(production) - custom functionality for error handling
        //reportToAnalytics(err)
    }
}

traceModule.setErrorHandler(errorHandler)
application.run({ moduleName: 'app-root' });
```
The example shows how to define custom handler and three possible options for handling the error via [trace]({%slug trace%}) module or while using custom functionality.

Further info about the error handing in NativeScript can be found [here](https://github.com/NativeScript/NativeScript/blob/master/HandlingErrors.md).

## Disabling exception's auto catching

Since NativeScirpt 4.2,  a new property has been introduced called `discardUncaughtJsExceptions` and allows to config, whether the exceptions from `callJSMethodNative` will be caught or not. The flag is disabled by default, and we can enable it while setting up the `discardUncaughtJsExceptions` property to `true` inside the `app/package.json` file. If the property is enabled, the exceptions will be caught and logged without propagating them.

Example:

```
{
  "android": {
    "v8Flags": "--expose_gc"
  },
  "main": "app.js",
  "name": "tns-template-hello-world-ts",
  "version": "4.1.0",
  "discardUncaughtJsExceptions":true
}
```
> Note: Enabling this property can lead to discarding an exception, which can lead to unexpected application behaviours. For the proper exception handling, it is recommended to keep auto cathing enabled.