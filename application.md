# Application in NativeScript

Application module in NativeScript framework is the main module that must be required in order to have working application. This module provides several callback functions to notify developer when specific event occurred.

For example you can set callback for:

+ onLaunch(context) - method called when application launch.
+ onSuspend() - method called when the application is suspended.
+ onResume() - method called when the application is resumed after it has been suspended.
+ onExit() - method called when the application is about to exit.
+ onLowMemory() - method called when there is low memory on the target device.

Application module also provides short-cut for navigating to main page - a property **mainModule**. When set application module will use the top-most frame (or will create one if there is none) and will navigate to the module with name specified in mainModule property.

If you don't specify **mainModule** you will have to set **onLaunch** callback, instantiate **Frame** object and call its **navigate** method.
For more information see Navigation article.

### Application start.
You are required to call **start** method on the application module once you are ready with its initialization.
This method doesn't do anything for Android application at the moment but may do in the future.
In iOS application this call will start UIApplication and will trigger its UI message loop.

Here is sample code that specify **mainModule**, **onLowMemory** callback and **starts** application:
``` JavaScript
var application = require("application");
application.mainModule = "mainPage";
application.onLowMemory = function () {
	// clean up some resources to free memory.
};
application.start();
```