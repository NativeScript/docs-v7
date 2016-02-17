---
nav-title: "HtmlView How-To"
title: "How-To"
description: "Examples for using HtmlView"
---
# HtmlView
Using a HtmlView requires the html-view module.
``` JavaScript
var htmlViewModule = require("ui/html-view");
```
### Declaring a HtmlView.
```XML
 <Page>
      {%raw%}<HtmlView html="{{ htmlString }}" />{%endraw%}
 </Page>
```
### Creating a HtmlView
``` JavaScript
var htmlView = new htmlViewModule.HtmlView();
```
### Using HtmlView
``` JavaScript
htmlView.html = '<span><font color="#ff0000">Test</font></span>';
```
