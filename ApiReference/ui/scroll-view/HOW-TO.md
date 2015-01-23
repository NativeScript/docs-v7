---
nav-title: "scroll-view How-To"
title: "scroll-view How-To"
description: "Examples for using scroll-view"
---
# ScrollView
Using a ScrollView requires the ScrollView module.
``` JavaScript
var scrollViewModule = require("ui/scroll-view");
```
Declaring the ScrollView.
```XML
<Page>
 <ScrollView>
   <Image source="{{ someBigImage }}" />
 </ScrollView>
</Page>
```
## Creating a ScrollView
``` JavaScript
var scrollView = new scrollViewModule.ScrollView();
```
