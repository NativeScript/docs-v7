---
nav-title: "Module ui/list-view"
title: "Module ui/list-view"
description: "Module ui/list-view"
---
# Module: "ui/list-view"

``` JavaScript
// To import the "ui/list-view" module:
var uilist_view = require("ui/list-view");
```

Class | Description
------|------------
[ListView](../../ui/list-view/ListView.md) | Represents a view that shows items in a vertically scrolling list.

Object | Description
------|------------
[ItemEventData](../../ui/list-view/ItemEventData.md) | Event data containing information for the index and the view associated to a list view item.

Namespace | Description
------|------------
[knownEvents](../../ui/list-view/knownEvents/) | Known event names.
[knownTemplates](../../ui/list-view/knownTemplates/) | Known template names.

##### Variables
 - **itemsProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the items property of each ListView instance.
 - **isScrollingProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the isScrolling property of each ListView instance.