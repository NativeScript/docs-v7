---
nav-title: "Module utils/utils"
title: "Module utils/utils"
description: "Module utils/utils"
---
# Module: "utils/utils"

``` JavaScript
// To import the "utils/utils" module:
var utilsutils = require("utils/utils");
```

Namespace | Description
------|------------
[layout](../../utils/utils/layout/) | Utility module related to layout.
[ad](../../utils/utils/ad/) | Module with android specific utilities.
[ios](../../utils/utils/ios/) | Module with ios specific utilities.

##### Variables
 - **RESOURCE_PREFIX** - _String_.

##### Functions
 - **copyFrom(** source _Object_, target _Object_ **)**  
     An utility function that copies properties from source object to target object.
   - **source** - _Object_  
     - The source object.
   - **target** - _Object_  
     - The target object.
 - **GC()**  
     An utility function that invokes garbage collection on the JavaScript side.
 - **isFileOrResourcePath(** path _String_ **)** _Boolean_  
     Returns true if the specified path points to a resource or local file.
   - **path** - _String_  
     The path.
   - _**return**_ - _Boolean_
 - **isDataURI(** uri _String_ **)** _Boolean_  
     Returns true if the specified URI is data URI (http://en.wikipedia.org/wiki/Data_URI_scheme).
   - **uri** - _String_  
     The URI.
   - _**return**_ - _Boolean_
 - **parseJSON(** source _String_ **)** _Object_  
     Returns object from JSON or JSONP string.
   - **source** - _String_  
     The JSON or JSONP string.
   - _**return**_ - _Object_
 - **openUrl(** url _String_ **)** _Boolean_  
     Opens url.
   - **url** - _String_  
     The url.
   - _**return**_ - _Boolean_