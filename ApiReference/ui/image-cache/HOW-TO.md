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
exports.cache = new imageCacheModule.Cache();
```
## Requesting Images
``` JavaScript
exports.cache.invalid = imageSource.fromFile(fs.path.join(__dirname, "res/reddit-logo.png"));
;
exports.cache.placeholder = imageSource.fromFile(fs.path.join(__dirname, "res/no-image.png"));
;
exports.cache.maxRequests = 5;
// Enable download while not scrolling
exports.cache.enableDownload();
var src;
var url = "https://github.com/NativeScript.png";
// Try to read the image from the cache
var result = exports.cache.get(url);
if (result) {
    // If present -- use it.
    src = result;
}
else {
    // If not present -- request its download.
    exports.cache.push({
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
exports.cache.disableDownload();
```
