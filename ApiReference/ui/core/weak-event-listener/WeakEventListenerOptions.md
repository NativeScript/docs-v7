---
nav-title: "Class ui/core/weak-event-listener.WeakEventListenerOptions"
title: "Class ui/core/weak-event-listener.WeakEventListenerOptions"
description: "Class ui/core/weak-event-listener.WeakEventListenerOptions"
---
## Object: "ui/core/weak-event-listener".WeakEventListenerOptions  
An interface that defines all options needed for creating weak event listener.

##### Properties
 - **targetWeakRef** - _WeakRef_ of _Object_.    
  Weak reference to the subscriber (target) of the event listener.
 - **sourceWeakRef** - _WeakRef_ of [_Observable_](../../../data/observable/Observable.md).    
  Weak reference to an instance of observable.Observable class which emits the event.
 - **eventName** - _String_.    
  Name of the event.
 - **handler** - _Function_(eventData [_EventData_](../../../data/observable/EventData.md)).    
  The function which should be called when event occurs.
 - **handlerContext** - _(optional)_ - _Object_.    
  The context (thisArg) in which handler should be executed.
 - **key** - _(optional)_ - _String_.    
  A string to use as key for key value pair instance.