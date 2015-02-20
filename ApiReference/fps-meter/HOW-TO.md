---
nav-title: "fps-meter How-To"
title: "How-To"
description: "Examples for using fps-meter"
---
# Frames-per-second meter
Logging frames-per-second statistics for your app requires the "fps-meter" module.
``` JavaScript
var fpsMeter = require("fps-meter");
```
### Start and stop logging
``` JavaScript
var callbackId = fpsMeter.addCallback(function (fps, minFps) {
    console.info("fps=" + fps + " minFps=" + minFps);
});
fpsMeter.start();
//...
fpsMeter.removeCallback(callbackId);
fpsMeter.stop();
```
