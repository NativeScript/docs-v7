---
nav-title: "Limitations"
title: "Limitations"
description: "NativeScript iOS Runtime Limitations"
position: 2
---

# Limitations

The following members can not be accessed from JavaScript:

* Unions
* Variadic Objective-C methods, function pointers, blocks
* Structs with constant size array members
* Vectors
* Inline functions
* `int64_t`, `uint64_t` outside the [-2^53, 2^53] range
* `long double`, `int128_t`, `uint128_t`
