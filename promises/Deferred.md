---
nav-title: "Class promises.Deferred"
title: "Class promises.Deferred"
description: "Class promises.Deferred"
---
## Object: "promises".Deferred  
_Type parameters:_ _**Value**_  
_Extends:_ [_PromiseState_](../promises/PromiseState.md) of _Value_  
Deferred&lt;Value&gt; supports the explicit resolving and rejecting of the
promise and the registration of fulfillment handlers.
A Deferred&lt;Value&gt; should be only visible to the function that initially sets up
an asynchronous process. Callers of that function should only see the Promise&lt;Value&gt; that
is returned by promise().

##### Functions
 - **promise()** [_Promise_](../promises/Promise.md)...
   - _**return**_ - [_Promise_](../promises/Promise.md) of _Value_
 - **resolve(** result? _Value_ **)** [_Deferred_](../promises/Deferred.md)...
   - **result** - _(optional)_ - _Value_
   - _**return**_ - [_Deferred_](../promises/Deferred.md) of _Value_
 - **reject(** err [_Rejection_](../promises/Rejection.md) **)** [_Deferred_](../promises/Deferred.md)...
   - **err** - [_Rejection_](../promises/Rejection.md)
   - _**return**_ - [_Deferred_](../promises/Deferred.md) of _Value_
 - **done(** f _Function_... **)** [_Deferred_](../promises/Deferred.md)...
   - **f** - _Function_(v _Value_)
   - _**return**_ - [_Deferred_](../promises/Deferred.md) of _Value_
 - **fail(** f _Function_... **)** [_Deferred_](../promises/Deferred.md)...
   - **f** - _Function_(err [_Rejection_](../promises/Rejection.md))
   - _**return**_ - [_Deferred_](../promises/Deferred.md) of _Value_
 - **always(** f _Function_... **)** [_Deferred_](../promises/Deferred.md)...
   - **f** - _Function_(v _Value_, err [_Rejection_](../promises/Rejection.md))
   - _**return**_ - [_Deferred_](../promises/Deferred.md) of _Value_