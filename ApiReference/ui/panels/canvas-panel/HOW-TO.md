---
nav-title: "CanvasPanel How-To"
title: "CanvasPanel How-To"
description: "Examples for using CanvasPanel"
---
# CanvasPanel
Using a CanvasPanel requires the CanvasPanel module.
``` JavaScript
var canvasPanelModule = require("ui/panels/canvas-panel");
```
### Creating and populating a CanvasPanel with children
``` JavaScript
var canvasPanel = new canvasPanelModule.CanvasPanel();
canvasPanel.width = 230;
canvasPanel.height = 230;
canvasPanel.style.backgroundColor = new colorModule.Color("LightGray");
var label;
Left Top
label = new labelModule.Label();
label.width = 100;
label.height = 100;
label.text = "LT";
label.id = "LT";
label.style.backgroundColor = new colorModule.Color("Red");
canvasPanelModule.CanvasPanel.setLeft(label, 10);
canvasPanelModule.CanvasPanel.setTop(label, 10);
canvasPanel.addChild(label);
Right Top
label = new labelModule.Label();
label.width = 100;
label.height = 100;
label.text = "RT";
label.id = "RT";
label.style.backgroundColor = new colorModule.Color("LightGreen");
canvasPanelModule.CanvasPanel.setRight(label, 10);
canvasPanelModule.CanvasPanel.setTop(label, 10);
canvasPanel.addChild(label);
Left Bottom
label = new labelModule.Label();
label.width = 100;
label.height = 100;
label.text = "LB";
label.id = "LB";
label.style.backgroundColor = new colorModule.Color("LightBlue");
canvasPanelModule.CanvasPanel.setLeft(label, 10);
canvasPanelModule.CanvasPanel.setBottom(label, 10);
canvasPanel.addChild(label);
Right Bottom
label = new labelModule.Label();
label.width = 100;
label.height = 100;
label.text = "RB";
label.id = "RB";
label.style.backgroundColor = new colorModule.Color("Yellow");
canvasPanelModule.CanvasPanel.setRight(label, 10);
canvasPanelModule.CanvasPanel.setBottom(label, 10);
canvasPanel.addChild(label);
```
