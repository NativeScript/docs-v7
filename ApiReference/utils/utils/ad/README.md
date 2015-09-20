---
nav-title: "Module utils/utils.ad"
title: "Module utils/utils.ad"
description: "Module utils/utils.ad"
---
## Namespace: "utils/utils".ad
Module with android specific utilities.

Namespace | Description
------|------------
[collections](../../../utils/utils/ad/collections/) | Utility module dealing with some android collections.
[resources](../../../utils/utils/ad/resources/) | Utility module related to android resources.

##### Functions
 - **getApplication()** _Object_  
     Gets the native Android application instance.
   - _**return**_ - _Object_
 - **getApplicationContext()** _Object_  
     Gets the Android application context.
   - _**return**_ - _Object_
 - **async(** doInBackground _Function_..., callback _Function_... **)**    
     _Types Parameters:_ _**T**_
   - **doInBackground** - _Function_() _T_
   - **callback** - _Function_(result _T_)