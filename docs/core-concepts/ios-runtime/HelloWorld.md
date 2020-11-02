---
nav-title: "Hello World Application"
title: "Hello World Application"
description: "A simple hello-world application"
position: 30
---

# Hello World Application

Here is a sample iOS native application's implementation in Objective-C versus NativeScript:

```objective-c
#import <UIKit/UIKit.h>

// RootViewController
@interface RootViewController : UIViewController
- (void)viewDidLoad;
@end

@implementation RootViewController
- (void)viewDidLoad {
    [super viewDidLoad];

    UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 250, 60)];
    label.text = @"Hello, World!";

    label.center = self.view.center;
    label.textAlignment = NSTextAlignmentCenter;

    [self.view addSubview:label];
}
@end

// AppDelegate
@interface AppDelegate : UIResponder <UIApplicationDelegate>
@property (strong, nonatomic) UIWindow *window;
@end

@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    self.window.rootViewController = [[RootViewController alloc] init];
    [self.window makeKeyAndVisible];
    return true;
}
@end

// Main
int main(int argc, char * argv[]) {
    @autoreleasepool {
        return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
    }
}
```
```javascript
var RootViewController = UIViewController.extend({
    viewDidLoad() {
        UIViewController.prototype.viewDidLoad.apply(this, arguments);

        var label = new UILabel(CGRectMake(0, 0, 250, 60));
        label.text = "Hello, World!";

        label.center = this.view.center;
        label.textAlignment = NSTextAlignment.NSTextAlignmentCenter;

        this.view.addSubview(label);
    }
});

var AppDelegate = UIResponder.extend({
    applicationDidFinishLaunchingWithOptions(application, launchOptions) {
        this._window = new UIWindow(UIScreen.mainScreen.bounds);
        this._window.backgroundColor = UIColor.whiteColor;
        this._window.rootViewController = new RootViewController();
        this._window.makeKeyAndVisible();
        return true;
    }
}, {
    protocols: [UIApplicationDelegate]
});

UIApplicationMain(0, null, null, NSStringFromClass(AppDelegate.class()));
```
