---
nav-title: "Module utils/types"
title: "Module utils/types"
description: "Module utils/types"
---
# Module: "utils/types"

``` JavaScript
// To import the "utils/types" module:
var utilstypes = require("utils/types");
```

Class | Description
------|------------
[ClassInfo](../../utils/types/ClassInfo.md) | A Class holding information about a class

##### Functions
 - **isString(** value _Object_ **)** _Boolean_  
     A function that checks if something is a valid string.
   - **value** - _Object_  
     The value which will be checked.
Returns true if value is a string.
   - _**return**_ - _Boolean_
 - **isNumber(** value _Object_ **)** _Boolean_  
     A function that checks if something is a valid number.
   - **value** - _Object_  
     The value which will be checked.
Returns true if value is a number.
   - _**return**_ - _Boolean_
 - **isFunction(** value _Object_ **)** _Boolean_  
     A function that checks if something is a function.
   - **value** - _Object_  
     The value which will be checked.
Returns true if value is a function.
   - _**return**_ - _Boolean_
 - **isUndefined(** value _Object_ **)** _Boolean_  
     A function that checks if something is "undefined".
   - **value** - _Object_  
     The value which will be checked.
Returns true if value is "undefined".
   - _**return**_ - _Boolean_
 - **isDefined(** value _Object_ **)** _Boolean_  
     A function that checks if something is defined (not undefined).
   - **value** - _Object_  
     The value which will be checked.
Returns true if value is defined.
   - _**return**_ - _Boolean_
 - **isNullOrUndefined(** value _Object_ **)** _Boolean_  
     A function that checks if something is not defined (null or undefined).
   - **value** - _Object_  
     The value which will be checked.
Returns true if value is null or undefined.
   - _**return**_ - _Boolean_
 - **verifyCallback(** value _Object_ **)**  
     A function that checks if something is a valid function.
   - **value** - _Object_  
     The value which will be checked.
Throws exception if passed value is not a valid function.
 - **getClass(** object **)** _String_  
     A function that gets the class name of an object.
   - **object**  
     The object which class will be get.
Returns a string with the name of the class.
   - _**return**_ - _String_
 - **getBaseClasses(** object **)** _Array_...  
     A function that gets the entire class hierarchy of an object.
   - **object**  
     The object which class hierarchy will be get.
Return an array of strings with the name of all classes.
   - _**return**_ - _Array_ of _String_
 - **getClassInfo(** object _Object_ **)** [_ClassInfo_](../../utils/types/ClassInfo.md)  
     A function that gets the ClassInfo for an object.
   - **object** - _Object_  
     The object for which the ClassInfo will be get.
Returns a ClassInfo for the object.
   - _**return**_ - [_ClassInfo_](../../utils/types/ClassInfo.md)