---
nav-title: "Class utils/containers.Dictionary"
title: "Class utils/containers.Dictionary"
description: "Class utils/containers.Dictionary"
---
## Class: "utils/containers".Dictionary  
_Type parameters:_ _**TKey**_, _**TValue**_  
Represents a collection of keys and values.

##### Instance Properties
 - **count** - _Number_.    
  The size of the dictionary.

##### Instance Functions
 - **forEach(** callbackfn _Function_... **)**  
     Iterates through all items and executes a callback function.
   - **callbackfn** - _Function_(key _TKey_, value _TValue_)  
     - A function that will be executed for each item.
 - **clear()**  
     Clears the entire Dictionary.
 - **remove(** key _TKey_ **)** _Boolean_  
     Removes the item associated with a given key.
   - **key** - _TKey_  
     - A key to remove.
   - _**return**_ - _Boolean_
 - **get(** key _TKey_ **)** _TValue_  
     Returns the item associated with a given key.
   - **key** - _TKey_  
     - A lookup key.
   - _**return**_ - _TValue_
 - **has(** key _TKey_ **)** _Boolean_  
     Returns if an item associated with a given key exist in the Dictionary.
   - **key** - _TKey_  
     - A lookup key.
   - _**return**_ - _Boolean_
 - **set(** key _TKey_, value _TValue_ **)**  
     Associates a value with a key.
   - **key** - _TKey_  
     - A key for the value.
   - **value** - _TValue_  
     - The real value.