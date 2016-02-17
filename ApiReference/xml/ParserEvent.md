---
nav-title: "Object xml.ParserEvent"
title: "Object xml.ParserEvent"
description: "Object xml.ParserEvent"
---
## Object: "xml".ParserEvent  
Provides information for a parser event.

##### Properties
 - **eventType** - _String_.    
  Returns the type of the parser event. This is one of the ParserEventType static members.
 - **position** - [_Position_](../xml/Position.md).    
  Get the position in the xml string where the event was generated.
 - **prefix** - _(optional)_ - _String_.    
  If namespace processing is enabled, returns the prefix of the element in case the eventType is ParserEventType.StartElement or ParserEventType.EndElement.
 - **namespace** - _(optional)_ - _String_.    
  If namespace processing is enabled, returns the namespace of the element in case the eventType is ParserEventType.StartElement or ParserEventType.EndElement.
 - **elementName** - _(optional)_ - _String_.    
  Returns the name of the element in case the eventType is ParserEventType.StartElement or ParserEventType.EndElement.
 - **attributes** - _(optional)_ - _Object_.    
  Returns a JSON object with the attributes of an element in case the eventType is ParserEventType.StartElement.
 - **data** - _(optional)_ - _String_.    
  Returns the relevant data in case the eventType is ParserEventType.Text, ParserEventType.CDATA or ParserEventType.Comment.

##### Functions
 - **toString()** _String_  
     Returns a JSON string representation of this instance.
   - _**return**_ - _String_