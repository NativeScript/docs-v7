---
nav-title: "Marshalling"
title: "Marshalling "
description: "Describes how JavaScript objects are marshalled to Objective-C and back."
position: 40
---

# Marshalling
NativeScript for iOS handles the conversion between JavaScript and Objective-C data types implicitly. However, the rules that govern this conversion need to take into account the differences between JavaScript and Objective-C. NativeScript tries to translate idioms between languages, but there are quirks and features in both that are hard to reconcile. The following is a thorough but not exhaustive list of rules and exceptions NativeScript abides by when exposing Objective-C APIs in JavaScript.

## Objective-C Classes and Objects
The most common data type in Objective-C by far is the class. Classes can have instance or static methods, and properties which are always instance. NativeScript exposes an Objective-C class and its members as a JavaScript constructor function with an associated prototype according to the [prototypal inheritance model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain). This means that each static method on an Objective-C class becomes a function on its JavaScript constructor function, each instance method becomes a function on the JavaScript prototype, and each property becomes a property descriptor on the same prototype. Every JavaScript constructor function created to expose an Objective-C class is arranged in a prototype chain that mirrors the class hierarchy in Objective-C: if `NSMutableArray` extends `NSArray`, which in turn extends `NSObject` in Objective-C, then in JavaScript the prototype of the `NSObject` constructor function is the prototype of `NSArray`, which in turn is the prototype of `NSMutableArray`.

To illustrate:
```objective-c
@interface NSArray : NSObject

+ (instancetype)arrayWithArray:(NSArray *)anArray;

- (id)objectAtIndex:(NSUInteger)index;

@property (readonly) NSUInteger count;

@end
```

```javascript
var NSArray = {
    __proto__: NSObject,

    arrayWithArray: function () {
        [native code]
    }
}

NSArray.prototype = {
    __proto__: NSObject.prototype,

    constructor: NSArray,

    objectAtIndex: function () {
        [native code]
    },

    get count() {
        [native code]
    }
}
```

Instances of Objective-C classes exist in JavaScript as special "wrapper" exotic objects - they keep track of and reference native objects, as well as manage their memory. When a native API returns an Objective-C object, NativeScript constructs such a wrapper for it in case one doesn't already exist. Wrappers have a prototype just like regular JavaScript objects. This prototype is the same as the prototype of the JavaScript constructor function that exposes the class the native object is an instance of. In essence:
```javascript
var tableViewController = new UITableViewController(); // returns a wrapper around a UITableViewController instance
Object.getPrototypeOf(tableViewController) === UITableViewController.prototype; // returns true
```

There is only one JavaScript wrapper around an Objective-C object, always. This means that Objective-C wrappers maintain JavaScript identity equality:
```javascript
tableViewController.tableView === tableViewController.tableView
```

Calling native APIs that expect Objective-C classes or objects is easy - just pass the JavaScript constructor function for the class, or the wrapper for the object.

If an API is declared as accepting a `Class` in Objective-C, the argument in JavaScript is the constructor function:
```objective-c
NSString *className = NSStringFromClass([NSArray class]);
```
```javascript
var className = NSStringFromClass(NSArray);
```

Conversely, if an API is declared as accepting an instance of a specific class such as `NSDate`, the argument is a wrapper around an object inheriting from that class.
```objective-c
NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
NSDate *date = [NSDate date];
NSString *formattedDate = [formatter stringFromDate:date];
```
```javascript
var formatter = new NSDateFormatter();
var date = NSDate.date();
var formattedDate = formatter.stringFromDate(date);
```

An API expecting the `id` data type in Objective-C means it will any accept Objective-C class or object in JavaScript.
```objective-c
NSMutableArray *array = [[NSMutableArray alloc] init];
Class buttonClass = [UIButton class];
UIButton *button = [[buttonClass alloc] init];
[array setObject:buttonClass atIndex:0];
[array setObject:button atIndex:1];
```
```javascript
var array = new NSMutableArray();
var buttonClass = UIButton;
var button = new buttonClass();
array.setObjectAtIndex(buttonClass, 0);
array.setObjectAtIndex(button, 1);
```

### Primitive Exceptions
NativeScript considers instances of `NSNull`, `NSNumber`, `NSString` and `NSDate` to be "primitives". This means that instances of these classes won't be exposed in JavaScript via a wrapper exotic object, instead they will be converted to the equivalent JavaScript data type: `NSNull` becomes `null`, `NSNumber` becomes `number` or `boolean`, `NSString` becomes `string` and `NSDate` becomes `Date`. The exception to this are the methods on those classes declared as returning `instancetype` - init methods and factory methods. This means that a call to `NSString.stringWithString` whose return type in Objective-C is `instancetype` will return a wrapper around an `NSString` instance, rather than a JavaScript string. This applies for all methods on `NSNull`, `NSNumber`, `NSString` and `NSDate` returning `instancetype`.

On the other hand, any API that expects a `NSNull`, `NSNumber`, `NSString` or `NSDate` instance in Objective-C can be called either with a wrapper object or a JavaScript value - `null`, `number` or `boolean`, `string` or `Date`, in JavaScript. The conversion is automatically handled by NativeScript.

More information on how NativeScript deals with Objective-C classes is available [here](types/ObjC-Classes.md).

## Objective-C Protocols
Protocols in Objective-C are like interfaces in other languages - they are blueprints of what members a class should contain, a sort of an API contract. Protocols are exposed as empty objects in JavaScript. Protocols are usually only referenced when [subclassing](../how-to/ObjC-Subclassing.md) an Objective-C class or when checking whether an object or class conforms to a protocol.
```objective-c
BOOL isCopying = [NSArray conformsToProtocol:@protocol(NSCopying)];
```
```javascript
var isCopying = NSArray.conformsToProtocol(NSCopying);
```

## Objective-C Selectors
In Objective-C `SEL` is a data type that represents the name of a method of an Objective-C class. NativeScript exposes this data type as a JavaScript string. Whenever an API expects a selector value in Objective-C, it's JavaScript projection will expect a string with the method name.
```objective-c
NSMutableString *aString = [[NSMutableString alloc] init];
BOOL hasAppend = [aString respondsToSelector:@selector(appendString:)];
```
```javascript
var aString = NSMutableString.alloc().init();
var hasAppend = aString.respondsToSelector("appendString:");
```

## Objective-C Blocks
[Objective-C blocks](https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/Blocks/Articles/00_Introduction.html) are anonymous functions in Objective-C. They can be closures, just like JavaScript functions, and are often used as callbacks. NativeScript implicitly exposes an Objective-C block as a JavaScript function. Any API that accepts a block in Objective-C accepts a JavaScript function when called in JavaScript:
```objective-c
NSURL *url = [NSURL URLWithString:@"http://example.com"];
NSURLRequest *request = [NSURLRequest requestWithURL:url];
[NSURLConnection sendAsynchronousRequest:request queue:nil completionHandler:^(NSURLResponse *response, NSData *data, NSError *connectionError) {
    NSLog(@"request complete");
}];
```
```javascript
var url = NSURL.URLWithString("http://example.com");
var request = NSURLRequest.requestWithURL(url);
NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(request, null, function(response, data, connectionError) {
    console.log("request complete");
});
```

Blocks in Objective-C, especially blocks that are closures, need to be properly retained and released in order to not leak memory. NativeScript does this automatically - a block exposed as a JavaScript function is released as soon as the function is garbage collected. A JavaScript function implicitly converted to a block will not be garbage collected as long the block is not released.

## CoreFoundation Objects
iOS contains both an Objective-C standard library (the Foundation framework) and a pure C standard library (Core Foundation). Core Foundation is modeled after Foundation to a great extent and implements a limited object model. Data types such as CFDictionaryRef and CFBundleRef are Core Foundation objects. Core Foundation objects are retained and released just like Objective-C objects, using the CFRetain and CFRelease functions. NativeScript implements automatic memory management for functions that are annotated as returning a retained Core Foundation object. For those that are not annotated, NativeScript returns an Unmanaged type that wraps the Core Foundation instance. This makes you partially responsible for keeping the instance allive. You could either
* Call takeRetainedValue() which would return managed reference to the wrapped instance, decrementing the reference count while doing so
* Call takeUnretainedValue() which would return managed reference to the wrapped instance *without* decrementing the reference count

### Toll-free Bridging
Core Foundation has the concept of [Toll-free bridged types](https://developer.apple.com/library/ios/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html) - data types which can be used interchangably with their Objective-C counterparts. When dealing with a toll-free bridged type NativeScript always treats it as its Objective-C counterpart. Core Foundation objects on the [toll-free bridged types list](https://developer.apple.com/library/ios/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677-SW4) are exposed as if they were instances of the equivalent Objective-C class. This means that a `CFDictionaryRef` value in JavaScript has the same methods on its prototype as if it were a `NSDictionary` object. Unlike regular Core Foundation objects, toll-free bridged types are automatically memory managed by NativeScript, so there is no need to retain or release them using `CFRetain` and `CFRelease`.

## Null Values
Objective-C has three null values - `NULL`, `Nil` and `nil`. `NULL` means a regular C pointer to zero, `Nil` is a `NULL` pointer to an Objective-C class, and `nil` is a `NULL` pointer to an Objective-C object. They are implicitly converted to `null` in JavaScript. When calling a native API with a `null` argument NativeScript converts the JavaScript null value to a C pointer to zero. Some APIs require their arguments to not be pointers to zero - invoking them with null in JavaScript can potentially crash the application without a chance to recover.

## Numeric Types
Integer and floating point data types in Objective-C are converted to JavaScript numbers. This includes types such as `char`, `int`, `long`, `float`, `double`, `NSInteger` and their unsigned variants. However, integer values larger than ±2<sup>53</sup> will lose their precision because the JavaScript number type is limited in size to 53-bit integers.

## Struct Types
NativeScript exposes Objective-C structures as JavaScript objects. The properties on such an object are the same as the fields on the structure it exposes. APIs that expect a struct type in Objective-C can be called with a JavaScript object with the same shape as the structure:
```objective-c
CGRect rect = {
    .origin = {
        .x = 0,
        .y = 0
    },
    .size = {
        .width = 100,
        .height = 100
    }
};
UIView *view = [[UIView alloc] initWithFrame:rect];
```
```javascript
var rect = {
    origin: {
        x: 0,
        y: 0
    },
    size: {
        width: 100,
        height: 100
    }
};
var view = UIView.alloc().initWithFrame(rect);
```

More information on how NativeScript deals with structures is available [here](./types/C-Structures.md).

## `NSError **` marshalling
### Native to JavaScript

```objective-c
@interface NSFileManager : NSObject
+ (NSFileManager *)defaultManager;
- (NSArray *)contentsOfDirectoryAtPath:(NSString *)path error:(NSError **)error;
@end
```

We can use this method from JavaScript in the following way:

```javascript
var fileManager = NSFileManager.defaultManager;
var bundlePath = NSBundle.mainBundle.bundlePath;

console.log(fileManager.contentsOfDirectoryAtPathError(bundlePath, null));
```

If we want to check the error using out parameters:
```javascript
var errorRef = new interop.Reference();
fileManager.contentsOfDirectoryAtPathError('/not-existing-path', errorRef);
console.log(errorRef.value); // NSError: "The folder '/not-existing-path' doesn't exist."
```

Or we can skip passing the **last NSError **** out parameter and a JavaScript error will be thrown if the `NSError **` is set from native:
```javascript
try {
    fileManager.contentsOfDirectoryAtPathError('/not-existing-path');
} catch (e) {
    console.log(e); // NSError: "The folder '/not-existing-path' doesn't exist."
}
```

### JavaScript to Native
When overriding a method having **NSError ** out parameter in the end** any thrown JavaScript error will be wrapped and set to the `NSError **` argument (if given).

## Pointer Types
Languages in the C family have the notion of a pointer data type. A pointer is a value that points to another value, or, more accurately, to the location of that value in memory. JavaScript has no notion of pointers, but the pointer data type is used throughout the iOS SDK. To overcome this, NativeScript introduces the `Reference` object. References are special objects which allow JavaScript to reason about and access pointer values. Consider this example:
```objective-c
NSFileManager *fileManager = [NSFileManager defaultManager];
BOOL isDirectory;
BOOL exists = [fileManager fileExistsAtPath:@"/var/log" isDirectory:&isDirectory];
if (isDirectory) {
    NSLog(@"The path is actually a directory");
}
```
This snippet calls the `fileExistsAtPath:isDirectory` method of the `NSFileManager` class. This method accepts a `NSString` as its first argument and a pointer to a boolean value as its second argument. During its execution the method will use the pointer to update the boolean value. This means it will directly change the value of `isDirectory`. The same code can be written as follows:
```javascript
var fileManager = NSFileManager.defaultManager;
var isDirectory = new interop.Reference();
var exists = fileManager.fileExistsAtPathIsDirectory("/var/log", isDirectory);
if (isDirectory.value) {
    console.log("The path is actually a directory");
}
```
