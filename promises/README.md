# Module: "promises"

``` JavaScript
// To import the "promises" module:
var promises = require("promises");
```

Enum | Description
------|------------
[Status](../promises/Status.md) | The status of a Promise. Initially a Promise is Unfulfilled and may
change to Rejected or Resolved.
Once a promise is either Rejected or Resolved, it can not change its
status anymore.

Object | Description
------|------------
[Rejection](../promises/Rejection.md) | If a promise gets rejected, at least a message that indicates the error or
reason for the rejection must be provided.
[PromiseState](../promises/PromiseState.md) | Both Promise&lt;T&gt; and Deferred&lt;T&gt; share these properties.
[Promise](../promises/Promise.md) | A Promise&lt;Value&gt; supports basic composition and registration of handlers that are called when the
promise is fulfilled.
When multiple handlers are registered with done(), fail(), or always(), they are called in the
same order.
[Deferred](../promises/Deferred.md) | Deferred&lt;Value&gt; supports the explicit resolving and rejecting of the
promise and the registration of fulfillment handlers.
A Deferred&lt;Value&gt; should be only visible to the function that initially sets up
an asynchronous process. Callers of that function should only see the Promise&lt;Value&gt; that
is returned by promise().
[Generator](../promises/Generator.md) | Promise Generators and Iterators.
[Iterator](../promises/Iterator.md) | 

##### Functions
 - **defer()** [_Deferred_](../promises/Deferred.md)...    
     _Types Parameters:_ _**Value**_  
     Module P: Generic Promises for TypeScript
Project, documentation, and license: https://github.com/pragmatrix/Promise
Returns a new "Deferred" value that may be resolved or rejected.
   - _**return**_ - [_Deferred_](../promises/Deferred.md) of _Value_
 - **resolve(** v _Value_ **)** [_Promise_](../promises/Promise.md)...    
     _Types Parameters:_ _**Value**_  
     Converts a value to a resolved promise.
   - **v** - _Value_
   - _**return**_ - [_Promise_](../promises/Promise.md) of _Value_
 - **reject(** err [_Rejection_](../promises/Rejection.md) **)** [_Promise_](../promises/Promise.md)...    
     _Types Parameters:_ _**Value**_  
     Returns a rejected promise.
   - **err** - [_Rejection_](../promises/Rejection.md)
   - _**return**_ - [_Promise_](../promises/Promise.md) of _Value_
 - **unfold(** unspool _Function_..., seed _Seed_ **)** [_Promise_](../promises/Promise.md)...    
     _Types Parameters:_ _**Seed**_, _**Element**_  
     http://en.wikipedia.org/wiki/Anamorphism
Given a seed value, unfold calls the unspool function, waits for the returned promise to be resolved, and then
calls it again if a next seed value was returned.
All the values of all promise results are collected into the resulting promise which is resolved as soon
the last generated element value is resolved.
   - **unspool** - _Function_(current _Seed_) { promise: [_Promise_](../promises/Promise.md) of _Element_, next: _Seed_ }
   - **seed** - _Seed_
   - _**return**_ - [_Promise_](../promises/Promise.md) of Array of _Element_
 - **when(** ...promises Array of [_Promise_](../promises/Promise.md)... **)** [_Promise_](../promises/Promise.md)...  
     Creates a promise that gets resolved when all the promises in the argument list get resolved.
As soon one of the arguments gets rejected, the resulting promise gets rejected.
If no promises were provided, the resulting promise is immediately resolved.
   - **...promises** - Array of [_Promise_](../promises/Promise.md) of _Object_
   - _**return**_ - [_Promise_](../promises/Promise.md) of Array of _Object_
 - **generator(** g _Function_... **)** [_Generator_](../promises/Generator.md)...    
     _Types Parameters:_ _**E**_
   - **g** - _Function_() _Function_() [_Promise_](../promises/Promise.md) of _E_
   - _**return**_ - [_Generator_](../promises/Generator.md) of _E_
 - **iterator(** f _Function_... **)** [_Iterator_](../promises/Iterator.md)...    
     _Types Parameters:_ _**E**_
   - **f** - _Function_() [_Promise_](../promises/Promise.md) of _E_
   - _**return**_ - [_Iterator_](../promises/Iterator.md) of _E_
 - **each(** gen [_Generator_](../promises/Generator.md)..., f _Function_... **)** [_Promise_](../promises/Promise.md)...    
     _Types Parameters:_ _**E**_  
     Iterator functions.
   - **gen** - [_Generator_](../promises/Generator.md) of _E_
   - **f** - _Function_(e _E_)
   - _**return**_ - [_Promise_](../promises/Promise.md) of {}
 - **isUndefined(** v _Object_ **)** _Boolean_  
     std
   - **v** - _Object_
   - _**return**_ - _Boolean_