---
nav-title: "Module utils/utils.ios"
title: "Module utils/utils.ios"
description: "Module utils/utils.ios"
---
## Namespace: "utils/utils".ios
Module with ios specific utilities.

Namespace | Description
------|------------
[collections](../../../utils/utils/ios/collections/) | Utility module dealing with some iOS collections.

##### Variables
 - **MajorVersion** - _Number_.    
  Gets the iOS device major version (for 8.1 will return 8).

##### Functions
 - **getColor(** uiColor _UIColor_ **)** [_Color_](../../../color/Color.md)  
     Gets NativeScript color from [UIColor](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIColor_Class/).
   - **uiColor** - _UIColor_  
     - UIColor instance used to create a NativeScript color.
   - _**return**_ - [_Color_](../../../color/Color.md)
 - **isLandscape()** _Boolean_  
     Gets an information about if current mode is Landscape.
   - _**return**_ - _Boolean_