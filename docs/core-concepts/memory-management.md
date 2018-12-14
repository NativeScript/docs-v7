---
title: Memory Management
description:
position: 85
slug: memory-management
---

# Memory Management
NativeScript binds very small JavaScript instances to the native instances. These let developers access and consume the native APIs from JavaScript. Here is explained the life cycle of JavaScript and native instance.

 - [Terms](#terms)
 - [iOS](#ios)
 - [Android](#android)

## Terms
*Disclaimer: Please, lookup these in a proper source. I made them myself.*

**native instance** - Objective-C class instance or Java class instance based on the context.

**reference counting** - iOS's Objective-C runtime uses reference counting. The instances have internal counters that can be incremented and decremented. Each time a strong reference is set to point to an instance, the instance have its reference count incremented. Each time a strong reference change, the previous instance it pointed to, have its reference count decremented. When decremented to 0, the instance is deallocated.

**GC** - garbage collection in general. When GCs run, they first block the threads to find all strong instances from the stack. Then resume the execution until the GC mark all reachable objects in a separate thread. Then block again the threads to complete the marking. And at the end start finalizing and deallocating unreachable instances. While the actual GC implementation may be much more sophisticated, all implementations in virtual machines used for UI aim at minimizing the time the main thread is blocked. The Android VM, Android's V8 and iOS's JavaScriptCore are 3 state of the art virtual machines used in NativeScript, that have garbage collectors.

**weak/strong reference** - instances can reference each other. When there is a path of strong references from root instance (one hold by local variable on the stack, static field etc.) to another instance, the second can not be garbage collected. Weak references does not prevent their referent from being collected.

**splice** - let's introduce a new NativeScript term. We will call "splice" a bond, made between a native instance and its representation in JavaScript by a JavaScript instance. It is possible that the splice is instantiated first in native in the cases of the iOS AppDelegate class, Android's Application, Activity and Fragment classes.

The splice have reference to a JavaScript instance and a native instance.
 - If the splice have a strong reference to an instance, it will prevent it from being collected by a GC.
 - If the splice have a weak reference to an instance, that instance can be collected if it is otherwise unreachable.
 - The splice itself will be deallocated if both the JavaScript and native instances are collected.
 - The splice will be half-dead while one of its instances is alive and the other dead.

The splice is represented by the following API:
 - Get the native instance given the JavaScript instance
 - Get the JavaScript instance given the native instance
 - Synchronize the life-cycle of the two instances
 - Proxy method calls, to and fro, the JavaScript and native instances
 - Throw, when methods are called, while in half-dead state

When is a splice created?
 - When a native instance is returned from a constructor, method, property, block, anonymous interface, lambda etc. called from JavaScript.
 - When a native instance is passed as an argument to a constructor, method, property, block, anonymous interface, lambda etc. implemented in JavaScript.
 - When a native class extended in JavaScript is instantiated either in native or JavaScript.

## iOS
The Objective-C runtime has no GC but runs on ref-counting instead. The retain and release of each Objective-C instance can be intercepted and code can be injected on retain/release. The Objective-C has association API that allows native objects to be assigned dynamically key-value pairs. The JavaScriptCore has API to retain/release JavaScript instances that can be used to set them strong/weak (allow or deny them from being garbage collected). The splice will refer to linking an Objective-C instance of a class with a JavaScript instance.

### Splice Life-Cycle
When a splice is made, it increases the ref-count of the Objective-C instance by 1, and if the ref-count is >1 the splice sets strong the JavaScript instance. From that point on:
 - If the Objective-C instance ref-count is incremented from 1 to 2, the splice holds strong reference to the JavaScript instance.
 - If the Objective-C instance ref-count is decremented from 2 to 1, the splice holds weak reference to the JavaScript instance.
 - Only while the Objective-C instance ref-count = 1, the splice have weak reference to the JavaScript instance, and the JavaScript instance is eligible for garbage collection. When the GC fail to reach to the JavaScript instance from alive JavaScript object, it will mark it for collection. Then when the JavaScript instance is finalized by JSC, the splice schedules decrementation of the Objective-C instance ref-count, eventually deallocating it and disposing the splice.

### Properties of the Implementation
#### Native Instances can Easily Leak
You can make a reference cycle in Objective-C that will leak native and JavaScript instances, because the JavaScript GC does not traverse the native objects and fields to find cycles. Native tools can point to leaked instances.

#### Native Instances can be Prematurely Collected
You can let instances be prematurely collected. Using weak properties or API, that involve methods such as `setTarget:selector:...` that will add the Objective-C instance as native target, but holds weak Objective-C references, these does not increment the ref-count of the Objective-C instance. The target may remain with ref-count 1. If the JavaScript GC collects the JavaScript instances of the splice, it will then delete the Objective-C instance. The annoying part is the code will behave properly for a while - until the non deterministic completion of the GC.

#### Half-Dead Splice
When the JavaScript counterpart of a splice is collected, the native Objective-C instance is scheduled for deallocation, there is a very short time frame during which the native instance can be posted a message (as example - a method call on delegate that is normally held in a weakref property) and this may result in calling to an already collected JavaScript instance.

#### Very Objective-C Friendly
Overall the implementation is really Objective-C friendly and predictable. When working with native APIs it requires some additional care about memory management, but nothing more than general iOS knowledge. Is very UI friendly and does not introduce big pauses on the main UI thread.

## Android
In Android both the Java and the JavaScript VMs are GC based. The Android VM has limited public API to subscribe for GC events, while in the V8 there is an API to subscribe for GC prologue and epilogue. Also V8 allows us to subscribe for notifications when a JavaScript instance is marked for collection and can be optionally revived.

### Splice Life-Cycle
The Android splice has two flavors:
 - It is considered to "have implementation object" in cases when:
    - A splice is created for "anonymous interface", such as `new ClickListener({ ... })`.
    - A splice is creates for "extended native class", such as `var MyView = View.extends({ ... }); var myView = new MyView();`.
 - It is considered **not to** "have implementation object" in cases when:
    - A splice is created for `var button = new android.widget.Button(...)` where a native class is instantiated.
    - A splice is created for `var i = anAndroidObject.getValue()` when Java instance is returned by the getValue() method.

When a splice is created
 - The splice have strong reference to the Java instance, and the Java instance can not be collected by the Android VM GC

On V8 GC collection phase:
 - For each splice that has implementation object, from its JavaScript instance, all other reachable JavaScript instances are traversed. For these reachable JavaScript objects:
    - If the reached object is an implementation object - the splice will be marked as "implementation reachable"
    - Otherwise it is ignored.

Then all splices may fall in one of these cases:
 - If JavaScript instance is marked for collection and has no implementation object, then the JavaScript instance is let to be collected, and the reference to the Java instance is made weak.
 - If JavaScript instance is marked for collection and has implementation object and its Java instance is weakly referenced, then:
    - If the Java object is alive, the JavaScript instance is revived.
    - If the Java object is dead, the JavaScript instance is let to be collected.
 - If JavaScript instance is marked for collection and has implementation object:
    - The JavaScript instance of the splice is revived.
    - If the splice was not marked "implementation reachable" in the previous step, the reference to its Java instance is made weak.

### Properties of the Implementation
#### Premature Collection
Unlike iOS, both the Java and JavaScript in the Android runtime are managed. The native framework rarely relies on weak references, so premature collection can hardly be observed. Change in behavior after a GC for Android more frequently result in a half-dead splice.

#### Leaks
Memory leaks are rare. If there is a pool of unreachable splices from either Java or JavaScript, at some point the V8 GC will notify the JavaScript instances that they are marked for collection, then the reference to the Java counterpart will be made weak. Then after Android VM GC the Java instances will be collected. At the next V8 GC the JavaScript instances will be let for collection as the Java instances are dead.

#### Half-Dead Splice
Since collection is driven by the garbage collectors it is possible to hold weak reference to the JavaScript instance of a splice. After V8 GC, the splice can make the reference to the Java instance weak. Android VM GC can collect it. Then, before the next V8 GC, the JavaScript instance can be obtained from the weak reference and methods can be called, that result in accessing half-dead splice, since the Java counterpart is dead already. The errors reported points that we fail to find object for id. These problems are perceived as random and are quite hard to reproduce.

#### Splices Die Fast
Multiple splices and JavaScript instances can be created for a single Java object, properties may be lost.

Splices, with no implementation object, can have their JavaScript instances collected easily. Once a splice is created by getting existing Java instance in JavaScript, some work is performed and the reference to the JavaScript instance is destroyed V8 can collect the JavaScript instance on GC. The splice is deallocated. The second time the same Java instance is obtained, a new splice with new JavaScript instance is created. If the first time you set a JavaScript property on the JavaScript instance of the splice, this property would be lost the second time the splice was created.

#### Splices Die Hard
Working with short lived big objects can easily trigger out-of-memory crashes. Due to the life cycle of the Android splice, it requires a V8 GC with subsequent Android VM GC to dispose bit native instances (such as bitmaps).

#### Java Friendly
Overall the implementation is really Java friendly. It rarely requires additional knowledge about the inner workings of the runtime.

### Problems to Fix
Here are some problems however that we want to address in order of importance:
 - During GC the extra effort added to traverse the JavaScript heap adds relatively big pauses on the main thread. For Angular + {N} app with snapshot can take up to half a second on each V8 GC on a modern phone. We must introduce an implementation that involves no manual object graph traversing.
 - The cases of a half-dead splice, although rare, are very hard to reproduce, track, debug, and fix.
 - Big objects take several V8 and Android VM GC passes to release, we could provide API to explicitly state that such objects will no longer be used and the reference to the Java instance will be made weak.
 - Regular splice objects, with no implementation object, that we want to extend with simple properties, it would be useful if we can extend their JavaScript lifetime to match the lifetime of the Java object.
