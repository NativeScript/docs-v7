---
title: Placeholder
description: Learn how to use the Placeholder to add any native widget to the visual tree. The samples show how to set up the Placeholder in the XML and how to define the native widget properly via code-behind.
position: 110
slug: placeholder
publish: false
previous_url: /placeholder
environment: nativescript
---

# Placeholder

The Placeholder allows you to add any native widget to your application. To do that, you need to put a Placeholder somewhere in the UI hierarchy and then create and configure the native widget that you want to appear there. Finally, pass your native widget to the event arguments of the **creatingView** event.

## main-page.xml

```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <StackLayout>
    <Placeholder creatingView="creatingView"/>
  </StackLayout>
</Page>
```

## main-page.**android**.js\main-page.**android**.ts

```JavaScript
function creatingView(args) {
    var nativeView = new android.widget.TextView(args.context);
    nativeView.setSingleLine(true);
    nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
    nativeView.setText("Native");
    args.view = nativeView;
}
exports.creatingView = creatingView;
```
```TypeScript
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";

export function creatingView(args: CreateViewEventData) {
    let nativeView = new android.widget.TextView(args.context);
    nativeView.setSingleLine(true);
    nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
    nativeView.setText("Native");
    args.view = nativeView;
}
```

## main-page.**ios**.js\main-page.**ios**.ts

```JavaScript
function creatingView(args) {
    var nativeView = new UILabel();
    nativeView.text = "Native";
    args.view = nativeView;
}
exports.creatingView = creatingView;
```
```TypeScript
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";

export function creatingView(args: CreateViewEventData) {
    let nativeView = new UILabel();
    nativeView.text = "Native";
    args.view = nativeView;
}
```
