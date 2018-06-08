---
nav-title: "C Function Pointers"
title: "C Function Pointers"
description: "Describes how function pointers are exposed."
position: 9
---

# Function Pointers

To create a native function pointer from a JavaScript function you must use the `interop.FunctionReference()` constructor which accepts a single parameter - a JavaScript function. You must keep the returned object alive as long as the native side would need it.

Example:
```objective-c
@interface NSMutableArray
+ (instancetype)arrayWithArray:(NSArray *)array;
- (void)sortUsingFunction:(NSInteger (*)(id, id, void *))compare context:(void *)context;
@end
```

```javascript
var array = NSMutableArray.arrayWithArray([1, 3, 2, 4]);

array.sortUsingFunctionContext(new interop.FunctionReference(function (a, b, ctx) {
    return a - b;
}), null);

console.log(array); // [1, 2, 3, 4]
```

When a function pointer is marshalled to JavaScript it is exposed as a JavaScript function.
