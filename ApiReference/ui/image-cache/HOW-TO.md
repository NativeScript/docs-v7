---
nav-title: "image-cache How-To"
title: "image-cache How-To"
description: "Examples for using image-cache"
---
# ImageCache
Using the ImageCache requires the "ui/image-cache" module.
``` JavaScript
var imageCacheModule = require("ui/image-cache");
var imageSource = require("image-source");
var fs = require("file-system");
```
### Requesting Images
``` JavaScript
var cache = new imageCacheModule.Cache();
cache.invalid = imageSource.fromFile(fs.path.join(__dirname, "res/reddit-logo.png"));
cache.placeholder = imageSource.fromFile(fs.path.join(__dirname, "res/no-image.png"));
cache.maxRequests = 5;
// Enable download while not scrolling
cache.enableDownload();
var src;
var url = "https://github.com/NativeScript.png";
// Try to read the image from the cache
var result = cache.get(url);
if (result) {
    // If present -- use it.
    src = result;
}
else {
    // If not present -- request its download.
    cache.push({
        key: url,
        url: url,
        completed: function (result, key) {
            if (url === key) {
                src = result;
            }
        }
    });
}
// Disable download while scrolling
cache.disableDownload();
```
