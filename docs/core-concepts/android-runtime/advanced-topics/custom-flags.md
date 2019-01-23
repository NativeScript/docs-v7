---
title: "Custom Flags"
description: "Configure various V8 engine flags in order to improve the performance of your app, or to obtain more comprehensive information during debugging"
position: 5
previous_url: /core-concepts/android-runtime/advanced-topics/v8-flags
slug: android-custom-flags
---

# Custom Flags

The V8 engine comes with a set of controlling flags that may be useful for fine-grained tuning. You can set these flags in the [secondary package.json configuration file]({% slug structure %}#apppackagejson). This article contains some of the available flags and short explanation on how you can use them. For a complete list of all V8 flags, see the [Flag Definitions header file](https://github.com/v8/v8/blob/6.9.247/src/flag-definitions.h) in GitHub.

## Expose Garbage Collector

The `--expose_gc` flag exposes a global `gc()` function which can be helpful in [advanced memory management scenarios]({% slug memory-management %}).

```JSON
{
    ...
    "android": {
        "v8Flags": "--expose_gc"
    }
    ...
}
```

## Timezone Changes

For improved performance, V8 keeps a cache of various values used for date and time computation. This may lead to a negative side effect for the application because changes made to the current timezone will not be reflected until the application is restarted. While this is not a common requirement for most applications, there are some circumstances where this behavior might be needed. To enable this scenario, you can set the `handleTimeZoneChanges` flag:

```JSON
{
    ...
    "android": {
        "handleTimeZoneChanges": true
    }
    ...
}
```

As a result, the application will register a [BroadcastReceiver](https://developer.android.com/guide/components/broadcasts) which will be responsible for the [ACTION_TIMEZONE_CHANGED](https://developer.android.com/reference/android/content/Intent.html#ACTION_TIMEZONE_CHANGED) event and automatically invalidate the corresponding cache. Subsequent calls to `new Date()` will then take into account the new timezone.

## Maximum Log Message Size

By default, all messages sent to Logcat are limited to 1024 characters and larger messages are automatically truncated. This value can be controlled with the `maxLogcatObjectSize` field:

```JSON
{
    ...
    "android": {
        "maxLogcatObjectSize": 2048
    }
    ...
}
```

## Force Log

When you are using a release build there will be no logs to the console, so if you still want to have your console logs you need to enable the `forceLog` flag:

```JSON
{
    ...
    "android": {
        "forceLog": true
    }
    ...
}
```

## Discarding JavaScript exceptions when called from native

By default, if an exception is thrown when executing JavaScript code which is called from native API it will crash the application showing the stack trace. If you want the exception stack trace to be logged, but application not to crash you can enable the `discardUncaughtJsExceptions` flag:

```JSON
{
    ...
    "discardUncaughtJsExceptions": true
    ...
}
```

The discarded exceptions can be processed in the app by subscribing to `application.discardedErrorEvent` or by assigning a one-argument function to `global.__onDiscardedError`.

> **NOTE:** The `discardUncaughtJsExceptions` works on iOS as well. This is why in the example above the flag is not assigned to the `android` object.
