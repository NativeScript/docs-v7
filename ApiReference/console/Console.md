---
nav-title: "Class console.Console"
title: "Class console.Console"
description: "Class console.Console"
---
## Class: "console".Console  
Encapsulates methods used to print some information in the console.
Instance of this class is declared in the global JavaScript context and is accessible by directly calling console.[xxx] methods.

##### Instance Functions
 - **time(** reportName _String_ **)**  
     Begins counting a time span for a given name (key).
   - **reportName** - _String_  
     The key for the operation.
 - **timeEnd(** reportName _String_ **)**  
     Ends a previously started time span through the time method.
   - **reportName** - _String_  
     The key for the operation. Must have an already started time(reportName) operation with the same key.
 - **assert(** test _Boolean_, message _String_, ...formatParams Array of _Object_ **)**  
     Asserts a boolean condition and prints a message in case the assert fails.
   - **test** - _Boolean_  
     A value that should not be Falsy.
   - **message** - _String_  
     The message to be displayed in case the asserted value is Falsy.
   - **...formatParams** - Array of _Object_  
     Optional formatting parameters to be applied to the printed message.
 - **info(** message _Object_, ...formatParams Array of _Object_ **)**  
     Reports some information.
   - **message** - _Object_  
     The information message to be printed to the console.
   - **...formatParams** - Array of _Object_  
     Optional formatting parameters to be applied to the printed message.
 - **warn(** message _Object_, ...formatParams Array of _Object_ **)**  
     Reports a warning.
   - **message** - _Object_  
     The warning message to be printed to the console.
   - **...formatParams** - Array of _Object_  
     Optional formatting parameters to be applied to the printed message.
 - **error(** message _Object_, ...formatParams Array of _Object_ **)**  
     Reports an error.
   - **message** - _Object_  
     The error message to be printed to the console.
   - **...formatParams** - Array of _Object_  
     Optional formatting parameters to be applied to the printed message.
 - **log(** message _Object_, ...formatParams Array of _Object_ **)**  
     Verbously logs a message.
   - **message** - _Object_  
     The message to be printed to the console.
   - **...formatParams** - Array of _Object_  
     Optional formatting parameters to be applied to the printed message.
 - **trace()**  
     Prints the current stack trace in the console.
 - **dump(** obj _Object_ **)**  
     Prints the state of the specified object to the console.
   - **obj** - _Object_  
     The object instance to be dumped.
 - **dir(** obj _Object_ **)**  
     Prints the state of the specified object to the console.
   - **obj** - _Object_