---
nav-title: "Object ui/action-bar.AndroidActionItemSettings"
title: "Object ui/action-bar.AndroidActionItemSettings"
description: "Object ui/action-bar.AndroidActionItemSettings"
---
## Object: "ui/action-bar".AndroidActionItemSettings  
Represents Android specific options of the action item.

##### Properties
 - **position** - _String_.    
  Gets or sets the position of the action item in the action bar.
 1. actionBar - item is shown in the action bar.
 2. actionBarIfRoom - item is shown in the action bar if there is room for it. Otherwise it is put in the popup menu.
 3. popup - item is shown in the popup menu.
 - **systemIcon** - _String_.    
  Gets or sets the name of the system drawable resource to be displayed.
Use this property instead of ActionItemBase.icon if you want to diplsay a built-in Android system icon.
The value should be a string such as 'ic_menu_search' if you want to display the built-in Android Menu Search icon for example.
For a full list of Android drawable names, please visit http://androiddrawables.com