---
title: Memory Management
description:
position: 85
slug: memory-management
---

# Memory Management
NativeScript allows JavaScript code to be called from native and vice versa. It does so by creating bridging counterparts for each instance which must be exposed to the "other world" (native or JavaScript). These let developers access and consume the native APIs from JavaScript by:
	* implementing native interfaces or deriving from native classes in JavaScript
	* creating/accessing native instances and calling into their methods from JavaScript.

In this article, we are explaining the life cycle of JavaScript and native instances and show some troublesome conditions which may arise out of the complications of having two garbage collected runtimes (Android) or a garbage collected runtime and reference counting (iOS)

 - [Terms](#terms)
 - [iOS](#ios)
 - [Android](#android)
 - [Common tips](#common-tips)

## Terms
*Disclaimer: These terms are not necessarily well established in the literature but we are introducing them for convenience in the following sections.*

**native instance** - Objective-C class instance (iOS) or Java class instance (Android).

**reference counting** - the Objective-C runtime in iOS uses reference counting for lifetime management. Instances keep an internal counter which can be incremented and decremented. Each time a strong reference is set to point to an instance, the instance's reference count is incremented. Each time a strong reference is changed, the previous instance it pointed to has its reference count decremented. When the count reaches 0, the instance is deallocated.

**GC** - garbage collection in general. When GC runs, it first block the threads to find all strong instances from the stack. Then resumes execution until the GC marks all reachable objects in a separate thread. Then blocks again the threads to complete the marking. And in the end finalizes and deallocates the detected unreachable instances. While the actual GC implementation may be much more sophisticated, all implementations in virtual machines used for UI aim at minimizing the time the main thread is blocked. The Android Java VM, Android's V8 and iOS's JavaScriptCore are the three state of the art virtual machines used by NativeScript, which have garbage collectors.

**weak/strong reference** - instances can reference each other. When there is a path in the graph of strong references from a root instance (one held by local variable on the stack, static field etc.) to another instance, the second one can not be garbage collected. Weak references on the other hand do not prevent their referent from being collected.

**splice** - let's introduce a new NativeScript term. We will call a `splice` the bond, made between a native instance and its representation in JavaScript by a JavaScript instance. In some cases it is possible that the splice is instantiated first in native (e.g. the iOS AppDelegate class, Android's Application, Activity and Fragment classes).

The splices have a reference to a JavaScript instance and a native instance.
 - If the splice has a strong reference to an instance, it will prevent it from being collected by the GC.
 - If the splice has a weak reference to an instance, that instance can be collected if it is otherwise unreachable.
 - The splice itself will be deallocated if both the JavaScript and the native instances are collected.
 - The splice will be half-dead while one of its instances is alive and the other dead.

The splices exhibit the following behavior:
 - Retrieve the native instance from a given JavaScript instance
 - Retrieve the JavaScript instance from a given native instance
 - Synchronize the life-cycle of the two instances
 - Proxy method calls, to and from, the JavaScript and native instances
 - Throw exceptions, when methods are called, while in half-dead state

A splice is created:
 - When a native instance is returned from a constructor, method, property, block, anonymous interface, lambda etc. called from JavaScript.
 - When a native instance is passed as an argument to a constructor, method, property, block, anonymous interface, lambda etc. implemented in JavaScript.
 - When a native class extended in JavaScript is instantiated either in native or JavaScript.

## iOS
The Objective-C runtime has no GC and relies on reference counting instead. The `retain` and `release` calls of each Objective-C instance are intercepted by the iOS runtime. The Objective-C has association API that allows native objects to be assigned dynamically key-value pairs. JavaScriptCore has API to protect JavaScript instances that can be used to make them strong/weak (i.e. allow or deny them from being garbage collected). The `splice` term here will refer to linking an Objective-C instance of a class with a JavaScript instance.

### Splice Life-Cycle
When a splice is made, it increases the ref-count of the Objective-C instance by 1, and if the ref-count is >1 the splice makes the JavaScript instance strong. From that point on:
 - If the Objective-C instance ref-count is incremented from 1 to 2, the splice makes its weak reference to the JavaScript instance strong.
 - If the Objective-C instance ref-count is decremented from 2 to 1, the splice makes its strong reference to the JavaScript instance to weak.
 - Only when the Objective-C instance's ref-count is 1, will the splice have weak reference to the JavaScript instance, thus rendering the JavaScript instance eligible for garbage collection. Then the GC will mark this JavaScript instance for collection if it fails to reach it from an alive JavaScript object. Afterwards, when the JavaScript instance is finalized by JSC, the splice will schedule a decrementation of the Objective-C instance's ref-count, eventually deallocating it and disposing the splice.

### Properties of the Implementation
#### Native Instances can Easily Leak
You can make a reference cycle in Objective-C that will leak native and JavaScript instances, because the JavaScript GC does not traverse the native objects and fails to detect cycles. Native tools (Xcode, Instruments) can be used to detect and point to the leaking instances.

#### Native Instances can be Prematurely Deallocated
You can let instances be prematurely collected when using weak properties or APIs that involve methods such as `setTarget:selector:...`. They add the Objective-C instance as a native target, but through a weak Objective-C reference which doesn't increment the ref-count of the Objective-C instance. When the target ref-count remains 1 and the JavaScript GC collects the JavaScript instance of the splice, it will also deallocate the Objective-C instance. The annoying part is the code will work properly most of the time, but sometimes, due to the non-deterministic completion of the GC, it will cause the said deallocation and make the program throw an exception or crash.

#### Half-Dead Splice
When the JavaScript counterpart of a splice is collected, the native Objective-C instance is scheduled for deallocation. There is a very short time frame during which the native instance could be posted a message (as example - a method call on a delegate that is normally held in a weakref property). This will result in calling to an already collected JavaScript instance.

#### Very Objective-C Friendly
Overall the implementation is really Objective-C friendly and predictable. When working with native APIs it requires some additional care about memory management, but nothing more than general iOS knowledge. It is very UI friendly and does not introduce pauses on the main UI thread.

#### Deep Hierarchies Die Hard
The number of GC cycles needed to collect a linked list exposed from Obj-C to JavaScript is linear based on the numbers of nodes in the list.

Take the following scenario (which is actually a real problem that has been solved in tns-core-modules):
```
Page       ->       StackPanel -> Button
|.ios               |.ios         |.ios
UIViewController    UIView        UIButton
```

When it is "Visible", the `UIViewController` has its root view property pointing to the `UIView`, the `UIView` has a collection holding a reference to the `UIButton`. Each of them has a JavaScript wrapper. While the visual tree is being presented, the Objective-C `UIViewController`, `UIView` and `UIButton` have reference counts of 2 and the JavaScript references are "protected" (meaning that the JavaScript GC will consider these objects to be roots and won't collect them).

When "Navigated Away" from the page, the parent `UINavigationController` will remove the `UIViewController` and drop its reference count to 1, thus "unprotecting" its JavaScript wrapper, making it eligible for garbage collection.

Then the next GC collects the `Page`, but the `UIView` will still have a reference count of 2 and its JavaScript wrapper will be protected.

Here is what it takes to collect that whole tree:

|                            | UIViewController               | UIView                               | UIButton                           |
|-------------------|------------------------------|-----------------------------|-----------------------------|
| Visible                 | RC: 2, Protected                | RC: 2, Protected                 | RC: 2, Protected               |
| Navigated Away | RC: 1, Unprotected            | RC: 2, Protected                 | RC: 2, Protected               |
| GC Pass 1           | Collected                           | RC: 1, Unprotected             | RC: 2, Protected                |
| GC Pass 2           | Collected                           | Collected                            | RC: 1, Unprotected           |
| GC Pass 3           | Collected                           | Collected                            | Collected                          |

To prevent this multiple GCs requirement in order to free all objects, there's some additional logic implemented that separates the native views. When you remove the `Page` from the visual tree it will remove the `UIButton` from the `UIView` and the `UIView` from the `UIViewController` achieving this:

|                            | UIViewController               | UIView                               | UIButton                           |
|-------------------|------------------------------|-----------------------------|-----------------------------|
| Visible                 | RC: 2, Protected                | RC: 2, Protected                 | RC: 2, Protected               |
| Navigated Away | RC: 1, Unprotected            | RC: 1, Unprotected            | RC: 1, Unprotected           |
| GC Pass 1           | Collected                           | Collected                            | Collected                          |

## Android
In Android both the Java and the JavaScript VMs are GC based. The Android Java VM has a limited public API to subscribe for GC events, while in the V8 there is a richer API to subscribe for GC prologue and epilogue, and also allows us to subscribe for notifications when a JavaScript instance is marked for collection, letting us optionally revive it if we discover that it's still being referenced from outside.

### Splice Life-Cycle
The Android splice has two flavors:
 - It is considered to "have implementation object" in cases when:
    - A splice is created for an "anonymous interface", such as `new ClickListener({ ... })`.
    - A splice is created for an "extended native class", such as `var MyView = View.extends({ ... }); var myView = new MyView();`.
 - It is considered **not to** "have implementation object" in cases when:
    - A splice is created for `var button = new android.widget.Button(...)` where a native class is instantiated.
    - A splice is created for `var i = anAndroidObject.getValue()` when Java instance is returned by the getValue() method.

When a splice is created
 - The splice has a strong reference to the Java instance, and the Java instance can not be collected by the Android Java VM GC

On V8 GC collection phase:
 - From the JavaScript instances of each splice that **has** an implementation object will be traversed all other reachable JavaScript instances. For each of these reachable JavaScript objects:
    - The splice will be marked as "implementation reachable" if the reached object is an implementation object
    - Otherwise it is ignored.

After that all splices are processed according to these cases:
 - If the JavaScript instance is marked for collection and has no implementation object, then the JavaScript instance is left to be collected and the reference to the Java instance is made weak.
 - If the JavaScript instance is marked for collection, has an implementation object and the Java instance is weakly referenced, then:
    - If the Java object is alive, the JavaScript instance is revived.
    - If the Java object is dead, the JavaScript instance is left to be collected.
 - If JavaScript instance is marked for collection and has an implementation object and the Java instance is strongly referenced, then:
    - The JavaScript instance of the splice is revived.
    - If the splice was not marked "implementation reachable" in the previous step, the reference to its Java instance is made weak.

### Properties of the Implementation
#### Premature Collection
Unlike iOS, both the Java and JavaScript in the Android runtime are managed. The native framework rarely uses weak references, so premature collection can hardly ever be observed. The most common issues with GC for Android are half-dead splices.

#### Leaks
Memory leaks are rare. If there is a pool of unreachable splices from either Java or JavaScript, at some point the V8 GC will notify the JavaScript instances that they are marked for collection, then the reference to the Java counterpart will be made weak. Then the next Android VM GC will collect the Java instances and the V8 GC after that will collect the JavaScript instances (because the Java counterparts will be dead).

#### Half-Dead Splice
Since collection is driven by the garbage collectors it is possible to hold a weak reference to the JavaScript instance of a splice. After a V8 GC, the splice can make the reference to the Java instance weak allowing the Android VM GC to collect it. Then, if before the next V8 GC the JavaScript instance is obtained from the weak reference and its methods are called, it will result in accessinga a half-dead splice (since the Java counterpart is dead already). The error reported by the runtime points out that we've failed to find an object for a given id. These problems are perceived as random and are quite hard to reproduce.

#### Splices Die Fast
Multiple splices and JavaScript instances can be created for a single Java object, properties may be lost.

Splices with no implementation object, can have their JavaScript instances collected easily. Consider the following sequence of executions:
 - A splice is created by getting an existing Java instance in JavaScript
 - Some work is performed with it and new JavaScript properties are assigned to it
 - The reference to the JavaScript instance is destroyed
 - V8 collects the JavaScript instance during GC and the splice is deallocated
 - For the second time the same Java instance is obtained and a new splice with a new JavaScript instance is created and returned

As a result, the property assigned to the first JavaScript object is lost, because the new instance can retrieve only the Java properties of its corresponding native object.

#### Splices Die Hard
Working with short lived big objects can easily trigger out-of-memory crashes. Due to the life cycle of the Android splice, it requires a V8 GC with subsequent Android VM GC to dispose big native instances (such as bitmaps).

#### Java Friendly
Overall the implementation is really Java friendly. It rarely requires additional knowledge about the inner workings of the runtime.

### Outstanding Problems
Here are some of the problems that still need to be addressed in the order of importance:
 - During a GC, the extra work required to traverse the JavaScript heap causes relatively big pauses on the main thread. E.g. for an Angular + {N} app with snapshot, each V8 GC can take up to half a second on a modern phone. We have introduced the `markingMode: "none"` option that involves no object graph traversing but has its pitfalls. For details see [the documentation article](./android-runtime/advanced-topics/memory-management.md#markingMode-none).
 - The cases of half-dead splices, although rare, are very hard to reproduce, track, debug, and fix.
 - Big objects take several V8 and Android VM GC passes to release, we could provide API to explicitly state that such objects will no longer be used and the reference to the Java instance will be made weak.
 - Regular splice objects, with no implementation object, cannot be extended with simple JavaScript properties. It would be useful if we could extend their lifetime to match the lifetime of the Java object.


## Common tips

Due to the internal memory management of objects in the runtimes, there are cases where big native objects might live longer than necessary. This might happen if the JS garbage collector does not run for a long time after the object has become eligible for GC. As a result a strong reference for this object will remain on the native side. 

One way to solve this issue is to trigger multiple garbage collections - in JS/TS and in the native side (in case of running on Android). This however is not a cheap operation. Triggering garbage collections by hand is not only slow but can disrupt normal garbage management. 

Another way to solve the issue is by using the `releaseNativeCounterpart` function which takes as an argument an instance of a native class and removes its strong reference in the runtimes. By doing this, the native garbage collector in Android can remove the possibly heavy native object on its next run if it considers it dead. In iOS, as there is no garbage collector, using this function, the reference count of the native object would be decreased by one and if there are no other usages of this object - it would be deleted. 

If after using the releaseNativeCounterpart function you try to use the native object in JS/TS, the behaviour is undefined, so use this function if you are sure the object would not be used again.

Example usage of the releaseNativeCounterpart function in JS/TS:
```
const heavyNativeObject = new com.native.HeavyObject();
releaseNativeCounterpart(heavyNativeObject); // all usages of heavyNativeObject after this line would have undefined behaviour
```
