---
nav-title: "Border How-To"
title: "Border How-To"
description: "Examples for using Border"
---
# Border
Using borders requires the "ui/border" module.
``` JavaScript
var borderModule = require("ui/border");
```
### Declaring a Border.
```XML
 <Page>
     <Border cornerRadius="10" borderWidth="1" borderColor="#FF0000">
         <Button text="OK"/>
     </Border>
 </Page>
```
### Creating a Border programmatically
``` JavaScript
var button = new buttonModule.Button();
button.text = "OK";
var border = new borderModule.Border();
border.cornerRadius = 10;
border.borderWidth = 1;
border.borderColor = new colorModule.Color("#FF0000");
border.content = button;
```
