---
nav-title: "Objective-C Categories"
title: "Objective-C Categories"
description: "Describes how Objective-C categories are exposed."
position: 1
---

# Objective-C Categories
Objective-C categories are a powerful mechanism for extending existing Objective-C classes or grouping common APIs together.

Consider the `NSURLPathUtilities` category on `NSURL`:
```objective-c
@interface NSURL (NSURLPathUtilities)
+ (NSURL *)fileURLWithPathComponents:(NSArray *)components;
@property (readonly, copy) NSArray *pathComponents;
// ...
@end
```

It adds on the Objective-C `NSURL` class some properties and methods.

They will be exposed as static methods on the JavaScript constructor function or instance methods and properties on the prototype object generated for `NSURL` (see [Objective-C Classes](ObjC-Classes.md)).

> **NOTE:** This applies also to Objective-C categories added by third-party frameworks.

You can use them from JavaScript:
``` javascript
var url = NSURL.fileURLWithPathComponents(["foo", "bar"]);
console.log(url); // "foo/bar -- file:///"
console.log(url.pathComponents); // ["/", "foo", "bar"]
```

Objective-C categories can implement [Objective-C protocols](ObjC-Protocols.md) and their methods and properties will be also exposed.
