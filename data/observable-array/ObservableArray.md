---
nav-title: "Class data/observable-array.ObservableArray"
title: "Class data/observable-array.ObservableArray"
description: "Class data/observable-array.ObservableArray"
---
## Class: "data/observable-array".ObservableArray  
_Type parameters:_ _**T**_  
_Inherits:_ [_Observable_](../../data/observable/Observable.md)  
Advanced array like class used when you want to be notified when a change occurs.

##### Instance Properties
 - **length** - _Number_.    
  Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

##### Instance Functions
 - **on(** event _String_, callback _Function_... **)**
   - **event** - _String_
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))
 - **on(** event , callback _Function_... **)**  
     Raised when a change occurs.
   - **event**
   - **callback** - _Function_(args [_ChangedData_](../../data/observable-array/ChangedData.md) of _T_)
 - **getItem(** index _Number_ **)** _T_  
     Returns item at specified index.
   - **index** - _Number_
   - _**return**_ - _T_
 - **setItem(** index _Number_, value _T_ **)**  
     Sets item at specified index.
   - **index** - _Number_
   - **value** - _T_
 - **toString()** _String_  
     Returns a string representation of an array.
   - _**return**_ - _String_
 - **toLocaleString()** _String_
   - _**return**_ - _String_
 - **concat(** ...items Array of _U_ **)** Array of _T_    
     _Types Parameters:_ _**U**_  
     Combines two or more arrays.
   - **...items** - Array of _U_  
     Additional items to add to the end of array1.
   - _**return**_ - Array of _T_
 - **concat(** ...items Array of _T_ **)** Array of _T_  
     Combines two or more arrays.
   - **...items** - Array of _T_  
     Additional items to add to the end of array1.
   - _**return**_ - Array of _T_
 - **join(** separator? _String_ **)** _String_  
     Adds all the elements of an array separated by the specified separator string.
   - **separator** - _(optional)_ - _String_  
     A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   - _**return**_ - _String_
 - **pop()** _T_  
     Removes the last element from an array and returns it.
   - _**return**_ - _T_
 - **push(** items Array of _T_ **)** _Number_  
     Appends new elements to an array, and returns the new length of the array.
   - **items** - Array of _T_  
     New elements of the Array.
   - _**return**_ - _Number_
 - **push(** ...items Array of _T_ **)** _Number_  
     Appends new elements to an array, and returns the new length of the array.
   - **...items** - Array of _T_  
     New elements of the Array.
   - _**return**_ - _Number_
 - **reverse()** Array of _T_  
     Reverses the elements in an Array. 
   - _**return**_ - Array of _T_
 - **shift()** _T_  
     Removes the first element from an array and returns it.
   - _**return**_ - _T_
 - **slice(** start? _Number_, end? _Number_ **)** Array of _T_  
     Returns a section of an array.
   - **start** - _(optional)_ - _Number_  
     The beginning of the specified portion of the array.
   - **end** - _(optional)_ - _Number_  
     The end of the specified portion of the array.
   - _**return**_ - Array of _T_
 - **sort(** compareFn? _Function_... **)** Array of _T_  
     Sorts an array.
   - **compareFn** - _(optional)_ - _Function_(a _T_, b _T_) _Number_  
     The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
   - _**return**_ - Array of _T_
 - **splice(** start _Number_ **)** Array of _T_  
     Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   - **start** - _Number_  
     The zero-based location in the array from which to start removing elements.
   - _**return**_ - Array of _T_
 - **splice(** start _Number_, deleteCount _Number_, ...items Array of _T_ **)** Array of _T_  
     Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   - **start** - _Number_  
     The zero-based location in the array from which to start removing elements.
   - **deleteCount** - _Number_  
     The number of elements to remove.
   - **...items** - Array of _T_  
     Elements to insert into the array in place of the deleted elements.
   - _**return**_ - Array of _T_
 - **unshift(** ...items Array of _T_ **)** _Number_  
     Inserts new elements at the start of an array.
   - **...items** - Array of _T_  
     Elements to insert at the start of the Array.
   - _**return**_ - _Number_
 - **indexOf(** searchElement _T_, fromIndex? _Number_ **)** _Number_  
     Returns the index of the first occurrence of a value in an array.
   - **searchElement** - _T_  
     The value to locate in the array.
   - **fromIndex** - _(optional)_ - _Number_  
     The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   - _**return**_ - _Number_
 - **lastIndexOf(** searchElement _T_, fromIndex? _Number_ **)** _Number_  
     Returns the index of the last occurrence of a specified value in an array.
   - **searchElement** - _T_  
     The value to locate in the array.
   - **fromIndex** - _(optional)_ - _Number_  
     The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
   - _**return**_ - _Number_
 - **every(** callbackfn _Function_..., thisArg? _Object_ **)** _Boolean_  
     Determines whether all the members of an array satisfy the specified test.
   - **callbackfn** - _Function_(value _T_, index _Number_, array Array of _T_) _Boolean_  
     A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
   - **thisArg** - _(optional)_ - _Object_  
     An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   - _**return**_ - _Boolean_
 - **some(** callbackfn _Function_..., thisArg? _Object_ **)** _Boolean_  
     Determines whether the specified callback function returns true for any element of an array.
   - **callbackfn** - _Function_(value _T_, index _Number_, array Array of _T_) _Boolean_  
     A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
   - **thisArg** - _(optional)_ - _Object_  
     An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   - _**return**_ - _Boolean_
 - **forEach(** callbackfn _Function_..., thisArg? _Object_ **)**  
     Performs the specified action for each element in an array.
   - **callbackfn** - _Function_(value _T_, index _Number_, array Array of _T_)  
     A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. 
   - **thisArg** - _(optional)_ - _Object_  
     An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 - **map(** callbackfn _Function_..., thisArg? _Object_ **)** Array of _U_    
     _Types Parameters:_ _**U**_  
     Calls a defined callback function on each element of an array, and returns an array that contains the results.
   - **callbackfn** - _Function_(value _T_, index _Number_, array Array of _T_) _U_  
     A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. 
   - **thisArg** - _(optional)_ - _Object_  
     An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   - _**return**_ - Array of _U_
 - **filter(** callbackfn _Function_..., thisArg? _Object_ **)** Array of _T_  
     Returns the elements of an array that meet the condition specified in a callback function. 
   - **callbackfn** - _Function_(value _T_, index _Number_, array Array of _T_) _Boolean_  
     A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. 
   - **thisArg** - _(optional)_ - _Object_  
     An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   - _**return**_ - Array of _T_
 - **reduce(** callbackfn _Function_..., initialValue? _T_ **)** _T_  
     Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   - **callbackfn** - _Function_(previousValue _T_, currentValue _T_, currentIndex _Number_, array Array of _T_) _T_  
     A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   - **initialValue** - _(optional)_ - _T_  
     If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   - _**return**_ - _T_
 - **reduce(** callbackfn _Function_..., initialValue _U_ **)** _U_    
     _Types Parameters:_ _**U**_  
     Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   - **callbackfn** - _Function_(previousValue _U_, currentValue _T_, currentIndex _Number_, array Array of _T_) _U_  
     A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   - **initialValue** - _U_  
     If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   - _**return**_ - _U_
 - **reduceRight(** callbackfn _Function_..., initialValue? _T_ **)** _T_  
     Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   - **callbackfn** - _Function_(previousValue _T_, currentValue _T_, currentIndex _Number_, array Array of _T_) _T_  
     A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. 
   - **initialValue** - _(optional)_ - _T_  
     If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   - _**return**_ - _T_
 - **reduceRight(** callbackfn _Function_..., initialValue _U_ **)** _U_    
     _Types Parameters:_ _**U**_  
     Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   - **callbackfn** - _Function_(previousValue _U_, currentValue _T_, currentIndex _Number_, array Array of _T_) _U_  
     A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. 
   - **initialValue** - _U_  
     If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   - _**return**_ - _U_