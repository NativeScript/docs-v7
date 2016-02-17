---
nav-title: "Object ui/core/view.ApplyXmlAttributes"
title: "Object ui/core/view.ApplyXmlAttributes"
description: "Object ui/core/view.ApplyXmlAttributes"
---
## Object: "ui/core/view".ApplyXmlAttributes  
Defines an interface used to create a member of a class from string representation (used in xml declaration).

##### Functions
 - **_applyXmlAttribute(** attributeName _String_, attrValue _Object_ **)** _Boolean_  
     Called for every attribute in xml declaration. <... fontAttributes="bold" ../>
   - **attributeName** - _String_  
     - the name of the attribute (fontAttributes)
   - **attrValue** - _Object_  
     - the value of the attribute (bold)
Should return true if this attribute is handled and there is no need default handler to process it.
   - _**return**_ - _Boolean_