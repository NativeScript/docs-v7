---
nav-title: "Object ui/action-bar.AndroidActionBarSettings"
title: "Object ui/action-bar.AndroidActionBarSettings"
description: "Object ui/action-bar.AndroidActionBarSettings"
---
## Object: "ui/action-bar".AndroidActionBarSettings  
Represents Android specific options of the action bar.

##### Properties
 - **icon** - _String_.    
  Gets or sets the action bar icon.
 - **iconVisibility** - _String_.    
  Gets or sets the visibility of the action bar icon.
The icon is visible by default in pre-lollipop (API level < 20) versions of android and is hidden in lollipop (API level >= 20)
The possible values are:
 1. auto - the default behavior. This is the default value.
 2. always - the icon is aways shown.
 3. never - the icon is aways hidden.