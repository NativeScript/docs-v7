---
nav-title: "Class ui/core/weakEventListener.WeakEventListenerOptions"
title: "Class ui/core/weakEventListener.WeakEventListenerOptions"
description: "Class ui/core/weakEventListener.WeakEventListenerOptions"
---
## Object: "ui/core/weakEventListener".WeakEventListenerOptions

##### Properties
 - **target** - _WeakRef_ of _Object_.    
  Weak reference to the subscriber (target) of the event listener.
 - **source** - _WeakRef_ of [_Observable_](../../../data/observable/Observable.md).    
  Weak reference to an instance of observable.Observable class which emits the event.
 - **eventName** - _String_.    
  Name of the event.
 - **handler** - _Function_(eventData [_EventData_](../../../data/observable/EventData.md)).    
  The function which should be called when event occurs.
 - **handlerContext** - _(optional)_ - _Object_.    
  The context (thisArg) in which handler should be executed.
 - **key** - _String_.    
  A string to use as key for key value pair instance.