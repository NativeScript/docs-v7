---
nav-title: "console How-To"
title: "console How-To"
description: "Examples for using console"
---
# Console
### Logging
Logging to the console does not require the "console" module since the console variable is global. It can be used anywhere within your code.
You can log your message in several different categories.
``` JavaScript
// Verbously logs a message.
console.log("Hello, world!");
console.info("I am NativeScript");
console.warn("Low memory");
console.error("Uncaught Application Exception");
```
### Time
``` JavaScript
// Begins counting a time span for a given name (key).
console.time("LoadTime");
// Do something...
// Ends a previously started time span through the time method.
console.timeEnd("LoadTime");
```
### Assert
``` JavaScript
// Asserts a boolean condition and prints a message in case the assert fails.
console.assert(2 === 2, "2 equals 2");
```
### Dir
``` JavaScript
// Prints the state of the specified object to the console.
var obj = { name: "John", age: 34 };
console.dir(obj);
```
### Dump
``` JavaScript
// Prints the state of the specified object to the console.
var obj = { name: "John", age: 34 };
console.dump(obj);
```
### Trace
``` JavaScript
// Prints the current stack trace in the console.
console.trace();
```
