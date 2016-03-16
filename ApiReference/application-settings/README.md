---
nav-title: "Module application-settings"
title: "Module application-settings"
description: "Module application-settings"
---
# Module: "application-settings"

``` JavaScript
// To import the "application-settings" module:
var application_settings = require("application-settings");
```

##### Functions
 - **hasKey(** key _String_ **)** _Boolean_  
     Checks whether such a key exists.
   - **key** - _String_  
     The key to check for.
   - _**return**_ - _Boolean_
 - **getBoolean(** key _String_, defaultValue? _Boolean_ **)** _Boolean_  
     Gets a value (if existing) for a key as a Boolean Object. A default value can be provided in case there is no existing value.
   - **key** - _String_  
     The key to check for.
   - **defaultValue** - _(optional)_ - _Boolean_  
     An optional value to be returned in case there is no existing value.
   - _**return**_ - _Boolean_
 - **getString(** key _String_, defaultValue? _String_ **)** _String_  
     Gets a value (if existing) for a key as a String Object. A default value can be provided in case there is no existing value.
   - **key** - _String_  
     The key to check for.
   - **defaultValue** - _(optional)_ - _String_  
     An optional value to be returned in case there is no existing value.
   - _**return**_ - _String_
 - **getNumber(** key _String_, defaultValue? _Number_ **)** _Number_  
     Gets a value (if existing) for a key as a Number Object. A default value can be provided in case there is no existing value.
   - **key** - _String_  
     The key to check for.
   - **defaultValue** - _(optional)_ - _Number_  
     An optional value to be returned in case there is no existing value.
   - _**return**_ - _Number_
 - **setBoolean(** key _String_, value _Boolean_ **)**  
     Sets a Boolean Object for a key.
   - **key** - _String_  
     The key.
   - **value** - _Boolean_  
     The value.
 - **setString(** key _String_, value _String_ **)**  
     Sets a String Object for a key.
   - **key** - _String_  
     The key.
   - **value** - _String_  
     The value.
 - **setNumber(** key _String_, value _Number_ **)**  
     Sets a Number Object for a key.
   - **key** - _String_  
     The key.
   - **value** - _Number_  
     The value.
 - **remove(** key _String_ **)**  
     Removes a value (if existing) for a key.
   - **key** - _String_  
     The key to check for.
 - **clear()**  
     Removes all values.