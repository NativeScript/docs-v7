---
nav-title: "Limitations"
title: "Limitations"
description: "NativeScript iOS Runtime Limitations"
position: 50
---

# Limitations

The following members can not be accessed from JavaScript:

* Unions
* Variadic Objective-C methods, function pointers, blocks
* Inline functions<sup>1</sup>
* `int64_t`, `uint64_t` outside the [-2^53, 2^53] range
* `long double`, `int128_t`, `uint128_t`

<sup>1</sup>some of the most used inline functions are [implemented in JavaScript](https://github.com/NativeScript/ios-runtime/blob/release/src/NativeScript/inlineFunctions.js) and therefore available
