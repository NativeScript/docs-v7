## Object: "promises".Promise  
_Type parameters:_ _**Value**_  
_Extends:_ [_PromiseState_](../promises/PromiseState.md) of _Value_  
A Promise&lt;Value&gt; supports basic composition and registration of handlers that are called when the
promise is fulfilled.
When multiple handlers are registered with done(), fail(), or always(), they are called in the
same order.

##### Functions
 - **then(** f _Function_... **)** [_Promise_](../promises/Promise.md)...    
     _Types Parameters:_ _**T2**_  
     Returns a promise that represents a promise chain that consists of this
promise and the promise that is returned by the function provided.
The function receives the value of this promise as soon it is resolved.
If this promise fails, the function is never called and the returned promise
will also fail.
   - **f** - _Function_(v _Value_) [_Promise_](../promises/Promise.md) of _T2_
   - _**return**_ - [_Promise_](../promises/Promise.md) of _T2_
 - **then(** f _Function_... **)** [_Promise_](../promises/Promise.md)...    
     _Types Parameters:_ _**T2**_  
     Returns a promise that represents a promise chain that consists of this
promise and the promise that is returned by the function provided.
The function receives the value of this promise as soon it is resolved.
If this promise fails, the function is never called and the returned promise
will also fail.
   - **f** - _Function_(v _Value_) _T2_
   - _**return**_ - [_Promise_](../promises/Promise.md) of _T2_
 - **done(** f _Function_... **)** [_Promise_](../promises/Promise.md)...
   - **f** - _Function_(v _Value_)
   - _**return**_ - [_Promise_](../promises/Promise.md) of _Value_
 - **fail(** f _Function_... **)** [_Promise_](../promises/Promise.md)...
   - **f** - _Function_(err [_Rejection_](../promises/Rejection.md))
   - _**return**_ - [_Promise_](../promises/Promise.md) of _Value_
 - **always(** f _Function_... **)** [_Promise_](../promises/Promise.md)...
   - **f** - _Function_(v _Value_, err [_Rejection_](../promises/Rejection.md))
   - _**return**_ - [_Promise_](../promises/Promise.md) of _Value_