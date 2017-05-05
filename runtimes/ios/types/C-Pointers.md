---
nav-title: "C Pointers"
title: "C Pointers"
description: "Describes how C pointers are exposed."
position: 8
---

# C Pointers

## `interop.Pointer`
This type represents a `void*`.

```typescript
interface Pointer {
    /**
     * Creates a new pointer with the given offset.
     * @param offset The offset in bytes.
     */
    new (offset: number);

    /**
     * Creates a new pointer by adding an offset to the current pointer.
     * @param offset The offset in bytes.
     * @returns A new Pointer
     */
    add(offset: number): Pointer;

    /**
     * Creates a new pointer by removing an offset from the current pointer.
     * @param offset The offset in bytes.
     * @returns A new Pointer
     */
    subtract(offset: number): Pointer;

    /**
     * Converts the value of this instance to a number.
     */
    toNumber(): number;
}

/**
 * A pointer that will free the memory it points to automatically when garbage collected.
 */
interface AdoptedPointer extends Pointer {
}
```

## `interop.alloc`
```typescript
/**
 * Allocates memory.
 * @param size The size in bytes.
 * @return A pointer that will free the memory when garbage collected
 */
function alloc(size: number): AdoptedPointer;
```

## `interop.free`
```typescript
/**
 * Releases the memory of a pointer.
 * The pointer should not be adopted.
 * @param ptr A pointer to the memory to free.
 */
function free(ptr: Pointer): void;
```

## `interop.sizeof`
```typescript
/**
 * Returns the size of the provided type.
 * @param type A class constructor (of Objective-C interface),
 * an instance (wrapper of Objective-C interface), struct constructor, struct instance,
 * reference, protocol, function (for c function), fundamental types.
 */
function sizeof(type: any): number;
```

## `interop.handleof`
```typescript
/**
 * From a JavaScript object gets a pointer to the backing native object.
 * @param instance A class constructor (of Objective-C interface),
 * an instance (wrapper of Objective-C interface), struct instance, reference,
 * protocol, function (for c function) or block.
 * @return The native pointer handle
 */
function handleof(instance: any): Pointer;
```

## `interop.Reference`
This type represents a `<type>*` or `<type>[]`. You can use it with the [runtime types](../types/Runtime-Types.md).

```typescript
/**
 * A type that wraps a pointer and allows read/write operations on its value.
 */
interface Reference<T> {
    value: T;
}

/**
 * A Reference constructor.
 */
var Reference: {

    /**
     * Creates a new reference around a value.
     * The native representation of the type will be determined the first time the Reference is used
     * in operation involving marshalling.
     * @param value The JavaScript value used to initialize the reference.
     */
    new <T>(value?: T): Reference<T>;

    /**
     * Creates a reference to the pointer with a given type.
     * @param type The type to interpret the pointer
     */
    new <T>(type: Type<T>, data: Pointer): Reference<T>;

    /**
     * Creates a new reference around a value.
     * @param type The type to interpret the value
     */
    new <T>(type: Type<T>, value: any): Reference<T>;

    /**
     * Gets the value using pointer arithmetic.
     */
    [index: number]: any;

    /**
     * Dereferences the pointer.
     */
    value: any;
}

/** A type for propagating an unmanaged object reference.
 * When you use this type, you become partially responsible for
 * keeping the object alive.
 */
interface Unmanaged<T> {
    /**
     * Get the value of this unmanaged reference as a managed
     * reference and consume an unbalanced retain of it.
     * This is useful when a function returns an unmanaged reference
     * and you know that you're responsible for releasing the result.
     */
    takeRetainedValue(): T;

    /**
     * Get the value of this unmanaged reference as a managed
     * reference without consuming an unbalanced retain of it.
     * This is useful when a function returns an unmanaged reference
     * and you know that you're not responsible for releasing the result.
     */
    takeUnretainedValue(): T;
}
```

You can pass [ArrayBuffers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) where a pointer is expected.

`NULL` pointer is marshalled as JavaScript `null`.

## Examples

### `NSString`

```objective-c
@interface NSString : NSObject
- (void)getCharacters:(unichar *)buffer;
@end
```

#### Raw pointers
```javascript
var nsstring = NSString.stringWithString("test");

// Calls the native C malloc function. You must call free when finished using it.
var buffer = malloc(4 * interop.sizeof(interop.types.unichar));

nsstring.getCharacters(buffer); // Fill the buffer

// Reinterpret the void* buffer as unichar*. The reference variable doesn't retain the allocated buffer.
var reference = new interop.Reference(interop.types.unichar, buffer);
console.log(reference[0], reference[1], reference[2], reference[3]); // "t" "e" "s" "t"

free(buffer); // Same as interop.free(buffer)
```

#### Smart pointers
```javascript
var nsstring = NSString.stringWithString("test");

// The allocated memory will be deleted when the buffer and reference variables get garbage collected
var buffer = interop.alloc(4 * interop.sizeof(interop.types.unichar));

nsstring.getCharacters(buffer); // Fill the buffer

// Reinterpret the void* buffer as unichar*
var reference = new interop.Reference(interop.types.unichar, buffer);
console.log(reference[0], reference[1], reference[2], reference[3]); // "t" "e" "s" "t"
```
