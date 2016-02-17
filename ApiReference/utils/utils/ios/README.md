---
nav-title: "Module utils/utils.ios"
title: "Module utils/utils.ios"
description: "Module utils/utils.ios"
---
## Namespace: "utils/utils".ios
Module with ios specific utilities.

Object | Description
------|------------
[TextUIView](../../../utils/utils/ios/TextUIView.md) | 

Namespace | Description
------|------------
[collections](../../../utils/utils/ios/collections/) | Utility module dealing with some iOS collections.

##### Variables
 - **MajorVersion** - _Number_.    
  Gets the iOS device major version (for 8.1 will return 8).

##### Functions
 - **setTextDecorationAndTransform(** view _Object_, decoration _String_, transform _String_ **)**
   - **view** - _Object_
   - **decoration** - _String_
   - **transform** - _String_
 - **setWhiteSpace(** view, value _String_, parentView? _Object_ **)**
   - **view**
   - **value** - _String_
   - **parentView** - _(optional)_ - _Object_
 - **setTextAlignment(** view, value _String_ **)**
   - **view**
   - **value** - _String_
 - **getColor(** uiColor _Object_ **)** [_Color_](../../../color/Color.md)  
     Gets NativeScript color from [UIColor](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIColor_Class/).
   - **uiColor** - _Object_  
     - UIColor instance used to create a NativeScript color.
   - _**return**_ - [_Color_](../../../color/Color.md)
 - **isLandscape()** _Boolean_  
     Gets an information about if current mode is Landscape.
   - _**return**_ - _Boolean_
 - **openFile(** filePath _String_ **)** _Boolean_  
     Opens file with associated application.
   - **filePath** - _String_  
     The file path.
   - _**return**_ - _Boolean_