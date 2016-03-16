---
nav-title: "placeholder How-To"
title: "How-To"
description: "Examples for using placeholder"
---
# Placeholder
Using the placeholder requires the Placeholder module.
``` JavaScript
var placeholderModule = require("ui/placeholder");
```
Creating native view for the Placeholder using creatingView event.
``` XML
<Page>
  {%raw%}<Placeholder creatingView="creatingView" />{%endraw%}
</Page>
```
``` JavaScript
var platform = require("platform");
var utils = require("utils/utils");

function creatingView(args) {
   var nativeView;
   if (platform.device.os === platform.platformNames.ios) {
       nativeView = new UITextView();
       nativeView.text = "Native";
   } else if (platform.device.os === platform.platformNames.android) {
       nativeView = new android.widget.TextView(utils.ad.getApplicationContext());
       nativeView.setText("Native");
   }

   args.view = nativeView;
}

exports.creatingView = creatingView;
```
