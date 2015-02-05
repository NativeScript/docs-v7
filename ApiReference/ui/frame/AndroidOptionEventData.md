---
nav-title: "Class ui/frame.AndroidOptionEventData"
title: "Class ui/frame.AndroidOptionEventData"
description: "Class ui/frame.AndroidOptionEventData"
---
## Object: "ui/frame".AndroidOptionEventData  
_Extends:_ [_EventData_](../../data/observable/EventData.md)  
Represents the data passed to the knownEvents.android.optionSelected event. 
This event is raised by the Android OS when an option in the Activity's action bar has been selected.

##### Properties
 - **item** - _Object_.    
  Gets the Android-specific menu item that has been selected.
 - **handled** - _Boolean_.    
  True to mark the event as handled (that is to prevent the default processing).