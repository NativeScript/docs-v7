---
nav-title: "dock-layout How-To"
title: "How-To"
description: "Examples for using dock-layout"
---
# DockLayout
Using a DockLayout requires the DockLayout module.
``` JavaScript
var dockModule = require("ui/layouts/dock-layout");
```
### Declaring a DockLayout.
``` XML
<Page>
 <DockLayout stretchLastChild="true">
   <Button dock="left" text="left" style="background-color: red; margin: 5;" />
   <Button dock="top" text="top" style="background-color: lightblue; margin: 5;" />
   <Button dock="right" text="right" style="background-color: lightgreen; margin: 5;" />
   <Button dock="bottom" text="bottom" style="background-color: lightpink; margin: 5;" />
   <Button text="fill" style="background-color: wheat; margin: 5;" />
 </DockLayout>
</Page>
```
## Create DockLayout
``` JavaScript
var dockLayout = new dockModule.DockLayout();
 ```
## Add child view to layout
``` JavaScript
var btn = new button.Button();
dockLayout.addChild(btn);
 ```
## Remove child view from layout
``` JavaScript
dockLayout.removeChild(btn);
```
## Setting the dock property
``` JavaScript
var btnDockedToRight = new button.Button();
dockModule.DockLayout.setDock(btnDockedToRight, enums.Dock.right);
dockLayout.addChild(btnDockedToRight);
```
