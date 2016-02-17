---
nav-title: "Class ui/image-cache.Cache"
title: "Class ui/image-cache.Cache"
description: "Class ui/image-cache.Cache"
---
## Class: "ui/image-cache".Cache  
_Inherits:_ [_Observable_](../../data/observable/Observable.md)  
Represents a class that stores handles image download requests and caches the already downloaded images.

##### Static Properties
 - **downloadedEvent** - _String_.    
  String value used when hooking to downloaded event.

##### Instance Properties
 - **placeholder** - [_ImageSource_](../../image-source/ImageSource.md).    
  The image to be used to notify for a pending download request - e.g. loading indicator.
 - **maxRequests** - _Number_.    
  The maximum number of simultaneous download requests. Defaults to 5.

##### Instance Functions
 - **enableDownload()**  
     Enables previously suspended download requests.
 - **disableDownload()**  
     Temporary disables download requests.
 - **push(** request [_DownloadRequest_](../../ui/image-cache/DownloadRequest.md) **)**  
     Adds a new download request at the top of the download queue. This will be the next immediate download to start.
   - **request** - [_DownloadRequest_](../../ui/image-cache/DownloadRequest.md)
 - **enqueue(** request [_DownloadRequest_](../../ui/image-cache/DownloadRequest.md) **)**  
     Adds a new download request at the end of the download queue. This will be the last download to start.
   - **request** - [_DownloadRequest_](../../ui/image-cache/DownloadRequest.md)
 - **get(** key _String_ **)** _Object_  
     Gets the image for the specified key. May be undefined if the key is not present in the cache.
   - **key** - _String_
   - _**return**_ - _Object_
 - **set(** key _String_, image _Object_ **)**  
     Sets the image for the specified key.
   - **key** - _String_
   - **image** - _Object_
 - **remove(** key _String_ **)**  
     Removes the cache for the specified key.
   - **key** - _String_
 - **clear()**  
     Removes all the previously cached images.
 - **on(** eventNames _String_, callback _Function_..., thisArg? _Object_ **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   - **callback** - _Function_(args [_EventData_](../../data/observable/EventData.md))  
     - Callback function which will be executed when event is raised.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when the image has been downloaded.
   - **event**
   - **callback** - _Function_(args [_DownloadedData_](../../ui/image-cache/DownloadedData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **_downloadCore(** request [_DownloadRequest_](../../ui/image-cache/DownloadRequest.md) **)**
   - **request** - [_DownloadRequest_](../../ui/image-cache/DownloadRequest.md)
 - **_onDownloadCompleted(** key _String_, image _Object_ **)**
   - **key** - _String_
   - **image** - _Object_