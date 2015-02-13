---
nav-title: "Class ui/image-cache.Cache"
title: "Class ui/image-cache.Cache"
description: "Class ui/image-cache.Cache"
---
## Class: "ui/image-cache".Cache  
_Inherits:_ [_Observable_](../../data/observable/Observable.md)  
Represents a class that stores handles image download requests and caches the already downloaded images.

##### Instance Properties
 - **invalid** - [_ImageSource_](../../image-source/ImageSource.md).    
  The image to be used when the requested url is invalid or the result may not be decoded.
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
 - **get(** key _String_ **)** [_ImageSource_](../../image-source/ImageSource.md)  
     Gets the image for the specified key. May be undefined if the key is not present in the cache.
   - **key** - _String_
   - _**return**_ - [_ImageSource_](../../image-source/ImageSource.md)
 - **set(** key _String_, source [_ImageSource_](../../image-source/ImageSource.md) **)**  
     Sets the image for the specified key.
   - **key** - _String_
   - **source** - [_ImageSource_](../../image-source/ImageSource.md)
 - **remove(** key _String_ **)**  
     Removes the cache for the specified key.
   - **key** - _String_
 - **clear()**  
     Removes all the previously cached images.
 - **_downloadCore(** request [_DownloadRequest_](../../ui/image-cache/DownloadRequest.md) **)**
   - **request** - [_DownloadRequest_](../../ui/image-cache/DownloadRequest.md)
 - **_onDownloadCompleted(** key _String_, result [_ImageSource_](../../image-source/ImageSource.md) **)**
   - **key** - _String_
   - **result** - [_ImageSource_](../../image-source/ImageSource.md)