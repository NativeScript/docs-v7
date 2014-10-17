---
nav-title: "Class media-player"
title: "Class media-player"
description: "Class media-player"
---
# Module: "media-player"

``` JavaScript
// To import the "media-player" module:
var media_player = require("media-player");
```

##### Functions
 - **playAudioFile(** path _String_ **)** [_Promise_](../promises/Promise.md)  
     play audio file
   - **path** - _String_
   - _**return**_ - [_Promise_](../promises/Promise.md)
 - **playAudioURL(** url _String_ **)** [_Promise_](../promises/Promise.md)  
     play audio file
   - **url** - _String_
   - _**return**_ - [_Promise_](../promises/Promise.md)
 - **playVideoURL(** url _String_, view [_View_](../ui/core/view/View.md) **)** [_Promise_](../promises/Promise.md)  
     play video file
   - **url** - _String_
   - **view** - [_View_](../ui/core/view/View.md)
   - _**return**_ - [_Promise_](../promises/Promise.md)
 - **playVideoFile(** path _String_, view [_View_](../ui/core/view/View.md) **)** [_Promise_](../promises/Promise.md)  
     play video file
   - **path** - _String_
   - **view** - [_View_](../ui/core/view/View.md)
   - _**return**_ - [_Promise_](../promises/Promise.md)