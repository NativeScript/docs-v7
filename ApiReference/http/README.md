---
nav-title: "Module http"
title: "Module http"
description: "Module http"
---
# Module: "http"

``` JavaScript
// To import the "http" module:
var http = require("http");
```

Object | Description
------|------------
[HttpRequestOptions](../http/HttpRequestOptions.md) | Provides options for the http requests.
[HttpResponse](../http/HttpResponse.md) | Encapsulates HTTP-response information from an HTTP-request.
[HttpContent](../http/HttpContent.md) | Encapsulates the content of an HttpResponse.

##### Functions
 - **getString(** url _String_ **)** _Promise_...  
     Downloads the content from the specified URL as a string.
   - **url** - _String_  
     The URL to request from.
   - _**return**_ - _Promise_ of _String_
 - **getString(** options [_HttpRequestOptions_](../http/HttpRequestOptions.md) **)** _Promise_...  
     Downloads the content from the specified URL as a string.
   - **options** - [_HttpRequestOptions_](../http/HttpRequestOptions.md)  
     An object that specifies various request options.
   - _**return**_ - _Promise_ of _String_
 - **getJSON(** url _String_ **)** _Promise_...    
     _Types Parameters:_ _**T**_  
     Downloads the content from the specified URL as a string and returns its JSON.parse representation.
   - **url** - _String_  
     The URL to request from.
   - _**return**_ - _Promise_ of _T_
 - **getJSON(** options [_HttpRequestOptions_](../http/HttpRequestOptions.md) **)** _Promise_...    
     _Types Parameters:_ _**T**_  
     Downloads the content from the specified URL as a string and returns its JSON.parse representation.
   - **options** - [_HttpRequestOptions_](../http/HttpRequestOptions.md)  
     An object that specifies various request options.
   - _**return**_ - _Promise_ of _T_
 - **getImage(** url _String_ **)** _Promise_...  
     Downloads the content from the specified URL and attempts to decode it as an image.
   - **url** - _String_  
     The URL to request from.
   - _**return**_ - _Promise_ of [_ImageSource_](../image-source/ImageSource.md)
 - **getImage(** options [_HttpRequestOptions_](../http/HttpRequestOptions.md) **)** _Promise_...  
     Downloads the content from the specified URL and attempts to decode it as an image.
   - **options** - [_HttpRequestOptions_](../http/HttpRequestOptions.md)  
     An object that specifies various request options.
   - _**return**_ - _Promise_ of [_ImageSource_](../image-source/ImageSource.md)
 - **request(** options [_HttpRequestOptions_](../http/HttpRequestOptions.md) **)** _Promise_...  
     Makes a generic http request using the provided options and returns a HttpResponse Object.
   - **options** - [_HttpRequestOptions_](../http/HttpRequestOptions.md)  
     An object that specifies various request options.
   - _**return**_ - _Promise_ of [_HttpResponse_](../http/HttpResponse.md)