---
nav-title: "Custom Flags"
title: "Custom Flags"
description: "Tuning with custom flags"
position: 5
---

# Tuning V8

V8 comes with a set of controlling flags that may be useful for a fine-grained tuning. Currently, we use `--expose_gc` flag to expose global `gc()` function which comes handy in advanced memory management scenarios. You can set these flags in `package.json` configuration file.

```
{
	...
	"android": {
		"v8Flags": "--expose_gc"
	}
	...
}
```

For example, here are all the flags in V8 `6.6.346` [https://github.com/v8/v8/blob/6.6.346/src/flag-definitions.h](https://github.com/v8/v8/blob/6.6.346/src/flag-definitions.h)

# Timezone Changes

For improved performance V8 keeps a cache of various values used for date / time computation. This may lead to a negative side effect for the application because changes made to the current timezone will not be reflected until the application is restarted.

While this is not a requirement for most applications, under some circumstances this could be a requirement. To enable this scenario, you can set the `handleTimeZoneChanges` flag:

```
{
        ...
        "android": {
                "handleTimeZoneChanges": true
        }
        ...
}
```

As a result, the application will register a [BroadcastReceiver](https://developer.android.com/guide/components/broadcasts) which will be responsible for the [ACTION_TIMEZONE_CHANGED](https://developer.android.com/reference/android/content/Intent.html#ACTION_TIMEZONE_CHANGED) event and automatically invalidate the corresponding cache. Subsequent calls to `new Date()` will then take into account the new timezone.

# Maximum Log Message Size

By default all messages sent to Logcat are limited to 1024 characters and larger messages are automatically truncated. This value can be controlled with the `maxLogcatObjectSize` field:

```
{
        ...
        "android": {
                "maxLogcatObjectSize": 2048
        }
        ...
}
```

