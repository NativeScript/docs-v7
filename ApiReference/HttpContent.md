---
nav-title: "Object HttpContent"
title: "Object HttpContent"
description: "Object HttpContent"
---
## Object: HttpContent  
Encapsulates the content of an HttpResponse.

##### Properties
 - **raw** - _Object_.    
  Gets the response body as raw data.
 - **toString** - _Function_() _String_.    
  Gets the response body as string.
 - **toJSON** - _Function_() _Object_.    
  Gets the response body as JSON object.
 - **toImage** - _Function_() _Promise_ of _Object_.    
  Gets the response body as ImageSource.
 - **toFile** - _Function_(destinationFilePath _String_) _Object_.    
  Gets the response body as file.