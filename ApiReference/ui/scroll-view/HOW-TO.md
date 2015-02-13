---
nav-title: "scroll-view How-To"
title: "How-To"
description: "Examples for using scroll-view"
---
# ScrollView
Using a ScrollView requires the ScrollView module.
``` JavaScript
var scrollViewModule = require("ui/scroll-view");
```
### Declaring the ScrollView.
```XML
<Page>
 <ScrollView>
   {%raw%}<Image source="{{ someBigImage }}" />{%endraw%}
 </ScrollView>
</Page>
```
### Creating a ScrollView
``` JavaScript
var scrollView = new scrollViewModule.ScrollView();
```
