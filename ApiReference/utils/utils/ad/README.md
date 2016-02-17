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
 - **setTextTransform(** view, value _String_ **)**
   - **view**
   - **value** - _String_
 - **setWhiteSpace(** view, value _String_ **)**
   - **view**
   - **value** - _String_
 - **setTextDecoration(** view, value _String_ **)**
   - **view**
   - **value** - _String_
 - **getApplication()** _Object_  
     Gets the native Android application instance.
   - _**return**_ - _Object_
 - **getApplicationContext()** _Object_  
     Gets the Android application context.
   - _**return**_ - _Object_
 - **getInputMethodManager()** _Object_  
     Gets the native Android input method manager.
   - _**return**_ - _Object_
 - **dismissSoftInput(** nativeView _Object_ **)**  
     Hides the soft input method, ususally a soft keyboard.
   - **nativeView** - _Object_
 - **showSoftInput(** nativeView _Object_ **)**  
     Shows the soft input method, ususally a soft keyboard.
   - **nativeView** - _Object_