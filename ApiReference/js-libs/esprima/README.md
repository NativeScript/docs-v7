---
nav-title: "Class js-libs/esprima"
title: "Class js-libs/esprima"
description: "Class js-libs/esprima"
---
# Module: "js-libs/esprima"

``` JavaScript
// To import the "js-libs/esprima" module:
var js_libsesprima = require("js-libs/esprima");
```

Object | Description
------|------------
[Token](../../js-libs/esprima/Token.md) | 
[Options](../../js-libs/esprima/Options.md) | 

Namespace | Description
------|------------
[Syntax](../../js-libs/esprima/Syntax/) | 

##### Variables
 - **version** - _String_.

##### Functions
 - **parse(** code _String_, options? [_Options_](../../js-libs/esprima/Options.md) **)** [_Program_](../../js-libs/esprima/Syntax/Program.md)
   - **code** - _String_
   - **options** - _(optional)_ - [_Options_](../../js-libs/esprima/Options.md)
   - _**return**_ - [_Program_](../../js-libs/esprima/Syntax/Program.md)
 - **tokenize(** code _String_, options? [_Options_](../../js-libs/esprima/Options.md) **)** _Array_...
   - **code** - _String_
   - **options** - _(optional)_ - [_Options_](../../js-libs/esprima/Options.md)
   - _**return**_ - _Array_ of [_Token_](../../js-libs/esprima/Token.md)