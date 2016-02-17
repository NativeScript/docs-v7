---
nav-title: "image-cache How-To"
title: "How-To"
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
cache.placeholder = imageSource.fromFile(fs.path.join(__dirname, "res/no-image.png"));
cache.maxRequests = 5;
// Enable download while not scrolling
cache.enableDownload();
var imgSouce;
var url = "https://github.com/NativeScript.png";
// Try to read the image from the cache
var image = cache.get(url);
if (image) {
    // If present -- use it.
    imgSouce = imageSource.fromNativeSource(image);
}
else {
    // If not present -- request its download.
    cache.push({
        key: url,
        url: url,
        completed: function (image, key) {
            if (url === key) {
                imgSouce = imageSource.fromNativeSource(image);
            }
        }
    });
}
// Disable download while scrolling
cache.disableDownload();
```
