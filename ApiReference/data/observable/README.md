---
nav-title: "Module data/observable"
title: "Module data/observable"
description: "Module data/observable"
---
# Module: "data/observable"

``` JavaScript
// To import the "data/observable" module:
var dataobservable = require("data/observable");
```

Class | Description
------|------------
[WrappedValue](../../data/observable/WrappedValue.md) | Helper class that is used to fire property change even when real object is the same.
By default property change will not be fired for a same object.
By wrapping object into a WrappedValue instance `same object restriction` will be passed.
[Observable](../../data/observable/Observable.md) | Observable is used when you want to be notified when a change occurs. Use on/off methods to add/remove listener.

Object | Description
------|------------
[EventData](../../data/observable/EventData.md) | Base event data.
[PropertyChangeData](../../data/observable/PropertyChangeData.md) | Data for the "propertyChange" event.