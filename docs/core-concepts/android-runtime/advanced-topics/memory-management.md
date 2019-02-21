---
title: "Memory Management"
description: "Best practices and recommendations on how to improve the performance of your NativeScript mobile app by tuning the memory management"
position: 4
slug: android-memory-management
---

# Memory Management

The current implementaion of NativeScript for Android utilizes both V8 and Dalvik/ART garbage collectors. Having two garbage collectors may provide challenges for memory management in some scenarios. This articles describes an experimental feature that allows you better fine control for memory management.

## Runtime Internal Workings

Every NativeScript for Android app is comprised of two managed heaps - one for Java (Dalvik/ART VM) and another for JavaScript (V8). Every time when an app executes JavaScript code as follows

```javascript
var file = new java.io.File("somefile");
```

it creates two objects - one in the JavaScript heap and another in the Java heap. The JavaScript object serves only as a proxy to the actual Java object. Thus the size of the JavaScript object is very small. Suppose the app has to execute the following line

```javascript
let success = file.delete();
```

The only information we need is some sort of `id` in order to find the corresponding Java object and call `delete()` on it. Currently we use `int32` for the `id`. So practically, we can think of `file` as

```JavaScript
let file = { javaObjectId: 123 };
```

if the actual `id` has value `123`. In other worlds, creating JavaScript objects is very cheap.

Having said that, this could lead to some scenarios where there are unreachable JavaScript objects (e.g. effective garbage) for which the corresponding Java objects hold a lot of memory (think of `Bitmap`, `String`, `StringBuilder`, I/O buffers, etc.). But because there is little or no memory pressure in the JavaScript heap there is no reason for V8 GC to kick off. Therefore NativeScript for Android runtime doesn't have the chance to release the Java object handles (if any). This could cause `OutOfMemoryError`.

## markingMode: "none"

By default during a V8 GC pass the Android runtime performs an automatic traversal of alive JavaScript instances (a routing called `MarkReachableObjects`). In apps which create huge JavaScript instances graphs however this can cause significant delays in garbage collections, leading to unpleasant blocks of the UI thread.

Basically, this algorithm makes sure that no Java instances will be prematurely collected by the Android Java GC, while they are still being used by the JavaScript side. JavaScript code, however, can be structured in such a way that this additional step becomes unneeded. The only case when it is required is when there are no other references to the Java instance than the scope and the scope is the only thing that takes care to keep it alive.

There's a `app/package.json` option which apps can set in order to disable `MarkReachableObjects`:
```JSON
{
  "android": {
    "markingMode": "none"
  }
}
```

The code inside `tns-core-modules` and all plugins published by the NativeScript Team (since version 5.1.0) are written in such a way, that it does not depend on the scope to keep those Java instances alive. This makes apps using these plugins fully compatible with the much more performant `markingMode: "none"` option. [More information on `markingMode:none`](./marking-mode-none).

> **WARNING**: Enabling this option if the JavaScript code dealing with native objects (either in the application or any plugins you are using) does not correctly take care of the lifetime of Java instances may cause unexpected and unpredictable crashes of the application due to Java instances being prematurely collected. Use caution when enabling it and make sure to thoroughly test your apps with different memory constrains and devices! The errors generated in such cases look like this:
`Error: com.tns.NativeScriptException: Attempt to use cleared object reference id=<some-object-id-number>`

## Syncronizing Garabage Collectors

In order to mitigate such issues we provide an experimental feature which tries to synchronize both garbage collectors. One option is to trigger GC for the JavaScript heap so it collect all unreachable JavaScript objects which can hold reference to potentially large Java objects. There are three possible approaches.

### Explicitly Triggering GC

The default Android project template is configured to [expose global `gc()` function](https://github.com/NativeScript/template-hello-world/blob/6d3f04e4577b28bff32dde119d65935f0b8f4ef9/package.json#L26). You can call `gc()` whenever you consider there is effective garbage in the JavaScript heap that pottentially hold reference to large Java objects. For example, calling `gc()` in Activity's `onDestroy()` might be a good option if the activity in question a root of a large object hierarchy.

### Using `gcThrottleTime` parameter

You can use `gcThrottleTime` parameter to notify NativeScript runtime to trigger GC in the JavaScript heap during GC in the Java heap. The value of this parameter is measured in milliseconds. The value of `0` (zero) disables this parameter.

```JSON
{
  "android": {
    "v8Flags": "--expose_gc",
    "gcThrottleTime": 500
  }
}
```

Here is how it works. When a GC happens for the Java heap NativeScript runtime will check if it has to notify the V8 engine that it has to perform full garbage collection. The check is throttled using the time defined by `gcThrottleTime` parameter. For the example above, if the runtime has not notified the V8 engine in the last `500` milliseconds it will send a notification to the V8 engine to it can perform full GC. It is not guaranteed that the GC will be performed on the next JavaScript statement. The current implementation triggers GC the every second Java method invocation or on every Java object allocation. It is recommended to tune this parameter depending on the memory allocation pattern of your application.

### Using `memoryCheckInterval` and `freeMemoryRatio` parameters

The previous strategy (using `gcThrottleTime` parameter) may not work for all scenarios. For example, if your app allocates large Java objects in a loop then using `gcThrottleTime` parameter may not be enough to prevent your app from `OutOfMemoryError`. For such scenario we provide the pair `memoryCheckInterval` and `freeMemoryRatio` which may help.  The value of `memoryCheckInterval` parameter is measured in milliseconds and the value of `0` (zero) disables this approach. The value of `freeMemoryRatio` is measured in percentage (from `0.0` to `1.0`) where the value of `0.0` disables this approach.

```JSON
{
  "android": {
    "v8Flags": "--expose_gc",
    "memoryCheckInterval": 500,
    "freeMemoryRatio": 0.50
  }
}
```

Here is how it works. NativeScript runtime starts a new thread which monitors the avaivble memory. It calculates the ratio of `free/total` memory on a regular basis using the value specified with `memoryCheckInterval`. If the calculated ratio is less than `freeMemoryRatio` it notifies the V8 engine that it has to perform full GC. It is not guaranteed that the GC will be performed on the next JavaScript statement. The current implementation triggers GC the every second Java method invocation or on every Java object allocation. It is recommended to tune this parameter depending on the memory allocation pattern of your application.

## Best Practices

The described approaches are not mutually exclusive. You can combine them as it may fit. Here are a few guidelines that you may find useful:

* Reuse object whenever possible
* Use object pools
* Avoid using large I/O buffers. In many cases 64KB is optimal size
* Avoid loading large images
* Avoid allocating many large objects at once
* Avoid allocating objects in loops

Be cautious when you write closures as it often hard to observe object retentions along all the reference chain.
