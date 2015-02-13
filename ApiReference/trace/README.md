---
nav-title: "Class trace"
title: "Class trace"
description: "Class trace"
---
# Module: "trace"

``` JavaScript
// To import the "trace" module:
var trace = require("trace");
```

Object | Description
------|------------
[TraceWriter](../trace/TraceWriter.md) | An interface used to define a writer used by trace to print (log).
[EventListener](../trace/EventListener.md) | An interface used to trace information about specific event.  

Namespace | Description
------|------------
[categories](../trace/categories/) | An enum that defines all predefined categories.
[messageType](../trace/messageType/) | An enum that defines all predefined message types.

##### Functions
 - **enable()**  
     Enables the trace module.
 - **disable()**  
     Disables the trace module.
 - **addWriter(** writer [_TraceWriter_](../trace/TraceWriter.md) **)**  
     Adds a TraceWriter instance to the trace module.
   - **writer** - [_TraceWriter_](../trace/TraceWriter.md)  
     The TraceWriter instance to add.
 - **removeWriter(** writer [_TraceWriter_](../trace/TraceWriter.md) **)**  
     Removes a TraceWriter instance from the trace module.
   - **writer** - [_TraceWriter_](../trace/TraceWriter.md)  
     The TraceWriter instance to remove.
 - **clearWriters()**  
     Clears all the writers from the trace module.
 - **setCategories(** categories _String_ **)**  
     Sets the categories the module will trace.
   - **categories** - _String_  
     The comma-separated list of categories. If not specified all messages from all categories will be traced.
 - **write(** message _Object_, category _String_, type? _Number_ **)**  
     Writes a message using the available writers.
   - **message** - _Object_  
     The message to be written.
   - **category** - _String_  
     The category of the message.
   - **type** - _(optional)_ - _Number_  
     Optional, the type of the message - info, warning, error.
 - **notifyEvent(** object _Object_, name _String_, data? _Object_ **)**  
     Notifies all the attached listeners for an event that has occurred in the sender object.
   - **object** - _Object_  
     The Object instance that raised the event.
   - **name** - _String_  
     The name of the raised event.
   - **data** - _(optional)_ - _Object_  
     An optional parameter that passes the data associated with the event.
 - **addEventListener(** listener [_EventListener_](../trace/EventListener.md) **)**
   - **listener** - [_EventListener_](../trace/EventListener.md)
 - **removeEventListener(** listener [_EventListener_](../trace/EventListener.md) **)**
   - **listener** - [_EventListener_](../trace/EventListener.md)