---
title: "Custom Flags"
description: "Configure various iOS Runtime flags in order to alter behavior, improve performance, or obtain more comprehensive debug information of your app"
position: 60
slug: ios-custom-flags
---

# Custom JavaScriptCore Flags

The JavaScriptCore engine has a set of controlling flags that may be useful for fine-grained application tuning. You can set these flags in the [secondary package.json configuration file]({% slug structure %}#apppackagejson).

Example:
```JSON
{
    ...
    "ios": {
        "jscFlags": "--dumpOptions=3 --validateOptions=1"
    }
    ...
}
```

Another way of enabling JSC options without persisting them in your project during a debug session is to set `JSC_` prefixed environment variables for each of the options that you want to set. For example:

```
JSC_dumpOptions=3
JSC_validateOptions=1
```

For detailed information on how to pass environment variables during a debug run from Xcode see the ***Debugging Options in the Scheme Editor*** section of the [Debugging Tools article from the Xcode documentation](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/debugging_with_xcode/chapters/debugging_tools.html)

## Log garbage collection statistics

`logGC` - debugging option to log GC activity (0 = None, 1 = Basic, 2 = Verbose)

## Log module loading internals

* `dumpModuleRecord` - dump the ModuleRecord after a new module is `import`-ed or `require`-ed
* `dumpModuleLoadingState` - log the different phases of module loading (resolving, fetching, parsing, evaluating)
* `exposeInternalModuleLoader` - expose the internal module loader object to the global space for debugging as `global.Loader`

## JSC Options diagnostics
* `validateOptions` - crash if mis-typed JSC options were passed to the VM
* `dumpOptions` - dump JSC options (0 = None, 1 = Overridden only, 2 = All, 3 = Verbose)

> **NOTE:** This section contains only a small portion of the available flags. For a complete list of all JSC flags, see [JSC_OPTIONS macro definition in Options.h in GitHub](https://github.com/NativeScript/webkit/blob/ios/Source/JavaScriptCore/runtime/Options.h#L115). Have in mind that flags marked with `Restricted` cannot be configured in NativeScript because the supplied **JavaScriptCore** is built in **Release** configuration.

# Discarding JavaScript exceptions when called from native

By default, the application will crash if an exception is thrown when executing JavaScript code which is called from some native API. If you want to suppress the crash you can enable the `discardUncaughtJsExceptions` flag:

```JSON
{
    ...
    "discardUncaughtJsExceptions": true
    ...
}
```

The discarded exceptions can be processed in the app by subscribing to `application.discardedErrorEvent` or by assigning a one-argument function to `global.__onDiscardedError`.

> **NOTE:** The `discardUncaughtJsExceptions` works on Android as well. This is why in the example above the flag is not assigned to the `ios` object.

# Explicitly Triggering GC

The iOS Runtime exposes a `__collect()` function which you may call whenever you consider there is effective garbage in the JavaScript heap which could pottentially hold references to large native objects.

## Using `gcThrottleTime` parameter

You can use `gcThrottleTime` parameter to configure the runtime to trigger GC in the JavaScript heap periodically. The value of this parameter is measured in milliseconds. The value of `0` is default and disables the periodic automatic GC triggering.

```JSON
{
  "ios": {
    "gcThrottleTime": 5000
  }
}
```

On each native function call from JS, the runtime checks whether the specified throttle time has elapsed from the last automatic GC and schedules an async full GC if it has. It is recommended to tune this parameter depending on the memory allocation pattern of your application.

### Using `memoryCheckInterval` and `freeMemoryRatio` parameters

The previous strategy (using `gcThrottleTime` parameter) may not work for all scenarios. For example, if your app allocates large native objects in a loop your app may be terminated due to a memory issue regardless of setting the previous parameter. For such scenarios we provide the pair `memoryCheckInterval` and `freeMemoryRatio` which may help. You can use it to increase the frequency of automatic GCs when memory usage on the device is high. The value of `memoryCheckInterval` parameter is measured in milliseconds and the value of `0` (zero) (which is the default) disables this approach. The value of `freeMemoryRatio` is measured in percentage (from `0.0` to `1.0`) where the value of `0.0` disables this approach.

```JSON
{
  "ios": {
    "memoryCheckInterval": 500,
    "freeMemoryRatio": 0.50
  }
}
```

Again, on each native function call from JS the runtime checks whether the `memoryCheckInterval` has elapsed since the previous automatically triggered GC. If it has, the ratio of `free/total` memory on the device is calculated. When it is lower than `freeMemoryRatio`, the runtime schedules an async full GC. It is recommended to tune this parameter depending on the memory allocation pattern of your application.
