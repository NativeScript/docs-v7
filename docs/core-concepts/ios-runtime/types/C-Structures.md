---
nav-title: "C Structures"
title: "C Structures"
description: "Describes how structures are exposed."
position: 5
---

# Structures

You can pass object literals where a structure is expected:
```objective-c
typedef struct _NSRange {
    NSUInteger location;
    NSUInteger length;
} NSRange;

@interface NSMutableArray (NSExtendedMutableArray)
- (void)removeObjectsInRange:(NSRange)range;
@end
```
```javascript
var array = NSMutableArray.arrayWithArray([1, 2, 3, 4]);
array.removeObjectsInRange({ location: 1, length: 2 });
console.log(array); // [1, 4]
```

For each structure there exists a constructor object with the name of the structure (or typedef). When marshalled from native, structure instances are exposed as wrapper objects, which manage the lifetime of their memory buffer.

```javascript
var instance = new NSRange(); // Creates a structure with zeroed memory
console.log(instance.location); // 0
console.log(instance.length); // 0
```

You can also construct a wrapper from object literal. Not all fields are required.
```javascript
var instance = new NSRange({ location: 3, length: 4 });
console.log(instance.location); // 3
console.log(instance.length); // 4
```

## Constructing/Casting from `Pointer`
The struct constructor can be used to cast from [`Pointer`](C-Pointers.md) to structure instance.
```javascript
var size = interop.sizeof(NSRange);
var buffer = interop.alloc(size);

var struct1 = NSRange(buffer); // Does not create a copy
console.log(interop.handleof(struct1) === buffer); // true

var struct2 = new NSRange(buffer); // Creates a copy
console.log(interop.handleof(struct2) === buffer); // false
```

## Testing for Equality
To check if two structures are equal you can use: `<StructConstructor>.equals(a, b)`:
```javascript
console.log({ location: 0, length: 3 } === { location: 0, length: 3 }); // false
console.log(NSRange.equals({ location: 0, length: 3 }, { location: 0, length: 3 })); // true
```

This method performs deep equality for nested structures.

## `toString` and `toJSON`
To view the contents of the structure use `JSON.stringify()`.
```javascript
console.log(new NSRange().toString()); // "<struct NSRange: 0x7f9e1a497710>"
console.log(JSON.stringify(new NSRange())); // "{ location: 0, length: 0 }"
```

## Nested Structures Gotchas
Be careful when working with nested structures:

```objective-c
struct CGPoint {
    CGFloat x;
    CGFloat y;
};

struct CGSize {
    CGFloat width;
    CGFloat height;
};

struct CGRect {
    CGPoint origin;
    CGSize size;
};
```

```javascript
var rect = new CGRect();
rect.size.height = 3; // Doesn't work as expected
console.log(rect.size.height); // 0
```

A temporary `CGSize` is created and its height is set to 3. The size of the `rect` structure is still 0.

## Limitations
 * Structures with arrays are not supported.
