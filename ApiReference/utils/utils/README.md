---
nav-title: "Class utils/utils"
title: "Class utils/utils"
description: "Class utils/utils"
---
# Module: "utils/utils"

``` JavaScript
// To import the "utils/utils" module:
var utilsutils = require("utils/utils");
```

Namespace | Description
------|------------
[ad](../../utils/utils/ad/) | Module with android specific utilities.
[ios](../../utils/utils/ios/) | Module with ios specific utilities.
[platform](../../utils/utils/platform/) | Provides information about the current running platform.

##### Functions
 - **copyFrom(** source _Object_, target _Object_ **)**  
     An utility function that copies properties from source object to target object.
   - **source** - _Object_  
     - The source object.
   - **target** - _Object_  
     - The target object.
 - **GC()**  
     An utility function that invokes garbage collection on the java script side.
 - **targetPlatform()** _String_  
     An utility function that returns current running platform.
   - _**return**_ - _String_