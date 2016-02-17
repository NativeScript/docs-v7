---
nav-title: "Module ui/core/weak-event-listener"
title: "Module ui/core/weak-event-listener"
description: "Module ui/core/weak-event-listener"
---
# Module: "ui/core/weak-event-listener"

``` JavaScript
// To import the "ui/core/weak-event-listener" module:
var uicoreweak_event_listener = require("ui/core/weak-event-listener");
```

##### Functions
 - **addWeakEventListener(** source [_Observable_](../../../data/observable/Observable.md), eventName _String_, handler _Function_..., target _Object_ **)**  
     Attaches a WeakEventListener.
   - **source** - [_Observable_](../../../data/observable/Observable.md)  
     Observable class which emits the event.
   - **eventName** - _String_  
     The event name.
   - **handler** - _Function_(eventData [_EventData_](../../../data/observable/EventData.md))  
     The function which should be called when event occurs.
   - **target** - _Object_  
     Subscriber (target) of the event listener. It will be used as a thisArg in the handler function.
 - **removeWeakEventListener(** source [_Observable_](../../../data/observable/Observable.md), eventName _String_, handler _Function_..., target _Object_ **)**  
     Removes a WeakEventListener.
   - **source** - [_Observable_](../../../data/observable/Observable.md)  
     Observable class which emits the event.
   - **eventName** - _String_  
     The event name.
   - **handler** - _Function_(eventData [_EventData_](../../../data/observable/EventData.md))  
     The function which should be called when event occurs.
   - **target** - _Object_  
     Subscriber (target) of the event listener. It will be used as a thisArg in the handler function.