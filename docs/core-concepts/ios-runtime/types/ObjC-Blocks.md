---
nav-title: "Objective-C Blocks"
title: "Objective-C Blocks"
description: "Describes how Objective-C Blocks are Exposed."
position: 3
---

# Objective-C Blocks
Objective-C blocks are the iOS vision of lambdas, they are available for use in JavaScript.

## Objective-C Blocks to JavaScript Functions
When an Objective-C Block has to be marshalled to JavaScript object, it is wrapped in a JavaScript function. The function signature, used for the marshalling of the arguments and the return type, depends on the Objective-C declarations.

The following Objective-C declaration:
```objective-c
typedef void(^ProgressCallbackBlock)(double);
@interface MYWork : NSObject
@property (nonatomic, copy) ProgressCallbackBlock progressBlock;
@end
```

Can be used from JavaScript to call the exposed block:
```javascript
var myWork = MYWork.alloc().init();
myWork.progressBlock(0.33);
```

> **NOTE:** If the native API returns an "id" type we will not be able to marshal it as a JavaScript function.

## JavaScript Functions to Objective-C Blocks
When a JavaScript function instance has to be marshalled to Objective-C block we will create an Objective-C block. When the block is called it will invoke the JavaScript function. The signature of the block is inferred from the Objective-C declaration, and will be used for arguments and return type marshalling.

For the following declarations of the `NSArray`:
```objective-c
// NSArray.h
@interface NSArray (NSExtendedArray)
- (void)enumerateObjectsUsingBlock:(void (^)(id obj, NSUInteger idx, BOOL *stop))block NS_AVAILABLE(10_6, 4_0);
@end
```

Allow you to use the enumeration API from JavaScript:
```javascript
var array = NSMutableArray.alloc().init();
array.addObject(1);
array.addObject(3);
array.addObject(5);

array.enumerateObjectsUsingBlock(function(item, index, boolRef) {
    console.log("Item: " + item + ", index:", index);
});
// Item: 1, index: 0
// Item: 3, index: 1
// Item: 5, index: 2
```

> **NOTE:** Marshalling of a JavaScript function to Objective-C API where the "id" type is expected will not create an Objective-C block, because we can not infer the native Objective-C signature of the block.
