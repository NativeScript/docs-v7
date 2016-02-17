---
nav-title: "Object ui/action-bar.IOSActionItemSettings"
title: "Object ui/action-bar.IOSActionItemSettings"
description: "Object ui/action-bar.IOSActionItemSettings"
---
## Object: "ui/action-bar".IOSActionItemSettings  
Represents iOS specific options of the action item.

##### Properties
 - **position** - _String_.    
  Gets or sets the position of the action item in the action bar.
 1. left - items is shown at the left part of the navigation bar. This is the default value.
 2. right - items is shown at the right part of the navigation bar.
Note: Property not applicable to NavigationButton
 - **systemIcon** - _Number_.    
  Gets or sets a number representing the iOS system item to be displayed.
Use this property instead of ActionItem.icon if you want to diplsay a built-in iOS system icon.
Note: Property not applicable to NavigationButton
The value should be a number from the UIBarButtonSystemItem enumeration
(https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIBarButtonItem_Class/#//apple_ref/c/tdef/UIBarButtonSystemItem)
 0: Done
 1: Cancel
 2: Edit
 3: Save
 4: Add
 5: FlexibleSpace
 6: FixedSpace
 7: Compose
 8: Reply
 9: Action
10: Organize
11: Bookmarks
12: Search
13: Refresh
14: Stop
15: Camera
16: Trash
17: Play
18: Pause
19: Rewind
20: FastForward
21: Undo
22: Redo
23: PageCurl