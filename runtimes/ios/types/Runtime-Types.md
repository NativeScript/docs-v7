---
nav-title: "Runtime Types"
title: "Runtime Types"
description: "Describes how to use types at runtime."
position: 10
---

# Runtime Types
These types can be used with the [Objective-C subclassing API](../how-to/ObjC-Subclassing.md) or with the [C pointers API](C-Pointers.md).

You can use any type to cast a [`Pointer`](C-Pointers.md) to the selected type.

## Primitive Types
* `interop.types.void`
* `interop.types.bool`
* `interop.types.int8`
* `interop.types.uint8`
* `interop.types.int16`
* `interop.types.uint16`
* `interop.types.int32`
* `interop.types.uint32`
* `interop.types.int64`
* `interop.types.uint64`
* `interop.types.float`
* `interop.types.double`
* `interop.types.UTF8CString`
* `interop.types.unichar`
* `interop.types.id`
* `interop.types.protocol`
* `interop.types.class`
* `interop.types.selector`

## C Structures Types
You can use the [struct constructor](C-Structures.md) as a type.

## Objective-C Objects
You can use the [class constructor](ObjC-Classes.md) as a type.

## `interop.types.ReferenceType`
You can create new reference types, passing the inner type as argument.

## `interop.types.FunctionReferenceType`
You can create new function reference types, passing the return type and parameter types as arguments.

## `interop.types.BlockType`
You can create new block types, passing the return type and parameter types as arguments.
