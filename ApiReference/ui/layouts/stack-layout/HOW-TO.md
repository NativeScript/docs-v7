---
nav-title: "stack-layout How-To"
title: "How-To"
description: "Examples for using stack-layout"
---
### import StackLayout and Button classes
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var Button = require("ui/button").Button;
### Create StackLayout
``` JavaScript        
var stackLayout = new stack_layout_1.StackLayout();
 ```
### Declaring a StackLayout.
``` XML
<Page>
  <StackLayout orientation="horizontal">
    <Label text="This is Label 1" />
  </StackLayout>
</Page>
```
