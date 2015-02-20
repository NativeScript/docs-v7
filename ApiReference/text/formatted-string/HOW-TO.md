---
nav-title: "Formatted String How-To"
title: "How-To"
description: "Examples for using Formatted String"
---
# Formatted String
Using a formatted string requires loading formatted-string and span module.
``` JavaScript
var formattedStringModule = require("text/formatted-string");
var spanModule = require("text/span");
```
### How to set formatted text content for a label
``` JavaScript
var label = new LabelModule.Label();
var formattedString = new formattedStringModule.FormattedString();
var firstSpan = new spanModule.Span();
firstSpan.fontSize = 15;
firstSpan.text = "LoremIpsum";
formattedString.spans.push(firstSpan);
label.formattedText = formattedString;
```
