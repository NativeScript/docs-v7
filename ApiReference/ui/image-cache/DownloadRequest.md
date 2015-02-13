---
nav-title: "Interface ui/image-cache.DownloadRequest"
title: "Interface ui/image-cache.DownloadRequest"
description: "Interface ui/image-cache.DownloadRequest"
---
## Object: "ui/image-cache".DownloadRequest  
Represents a single download request.

##### Properties
 - **url** - _String_.    
  The url of the image.
 - **key** - _String_.    
  The key used to cache the image.
 - **completed** - _(optional)_ - _Function_(result [_ImageSource_](../../image-source/ImageSource.md), key _String_).    
  An optional function to be called when the download is complete.