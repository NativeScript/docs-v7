---
title: Unit Tests
description: A guide describing how easy it is to write unit tests for plugin created using the NativeScript plugin seed.
position: 99
slug: plugin-unit-tests
environment: nativescript
---

# Unit Tests

Writing unit tests for a plugin that is developed using the [nativescript-plugin-seed](https://github.com/NativeScript/nativescript-plugin-seed) is as simple as building the plugin itself. Before we continue, take a look at [Building Plugins]({% slug building-plugins %}) topic if you have missed that.

In this article you will find:
- [Test Implementation](#test-implementation)
- [Test Execution](#test-execution)
- [Continuous Integration](#continuous-integration)

## Test Implementation

You have completed your plugin and it works great, but how you can be sure that every other change applied to the code base will not break some functionality and how to easily check a plugin's state. Here, unit tests come to assistance with their best feature - 'fast execution'.

The starting point of writing unit tests is the `tests` folder in your demo app directory. There you will find `tests.js` file containing sample [Jasmine](https://jasmine.github.io/) tests.

```
my-plugin
├── demo
|   └── app
|       └── tests
└── src
     
```

The [NativeScript plugin seed](https://github.com/NativeScript/nativescript-plugin-seed) builds this structure automatically when you initialize your plugin, so don’t worry about creating these files and folders manually.

Let’s add a few additional tests to the `tests.js` file. We will continue from the point where [Building UI Plugins Using Composite Components]({% slug building-ui-plugins-composite-components %}) article left us so be sure you are aware of it. In order to test the three properties defined there we will write a test for each of them. Each test will be in a separate suite.

```
describe("topText property", function() {
    it("value is applied to top label", function() {
        uiPlugin.topText = "pain";
        expect(uiPlugin.getChildAt(0).getChildAt(0).text).toEqual("pain");
    });
});

describe("imageSource property", function() {
    it("value is applied to image element", function() {
        uiPlugin.imageSource = "/some/path/to/image.png";
        expect(uiPlugin.getChildAt(0).getChildAt(1).src).toEqual("/some/path/to/image.png");
    });
});

describe("bottomText property", function() {
    it("value is applied to bottom label", function() {
        uiPlugin.bottomText = "gain";
        expect(uiPlugin.getChildAt(0).getChildAt(2).text).toEqual("gain");
    });
});
```
Every test assigns a value to the property in testing and verifies that the same value is applied to the element in the visual tree that uses it. The visual tree of the [nativescript-ui-plugin](https://github.com/NativeScript/nativescript-ui-plugin) in our example is pretty simple. It has a grid layout containing three elements which makes it easy to orientate in the structure. In case of more complicated plugin I would suggest that you use some of the [LayoutBase](https://docs.nativescript.org/api-reference/classes/_ui_layouts_layout_base_.layoutbase.html) class methods to explore the visual three. For example:

```
var UiPlugin = require("nativescript-ui-plugin").Meme;
var uiPlugin = new UiPlugin();

var uiElement = uiPlugin.getChildAt(0);
uiElement.eachChildView((view)=>{
    console.log("======START======");
    console.log("Index: " + uiElement.getChildIndex(view));
    console.log("Element: " + view);
    console.log("======END======");
    console.log(" ");
});
```
In this example, we use [getChildAt()](https://docs.nativescript.org/api-reference/classes/_ui_layouts_layout_base_.layoutbase.html#getchildat) function to select the one and only layout in our plugin at index zero. This function returns the `View` class - the base class for all UI components. Then we traverse all elements in the layout using [eachChildView()](https://docs.nativescript.org/api-reference/classes/_ui_layouts_layout_base_.layoutbase.html#eachchildview), get their index with [getChildIndex()](https://docs.nativescript.org/api-reference/classes/_ui_layouts_layout_base_.layoutbase.html#getchildindex) and print all that information.

You can find the complete `tests.js` file [here](https://github.com/NativeScript/nativescript-ui-plugin/blob/master/demo/app/tests/tests.js).

## Test Execution

We have our tests ready and it is time to get them in action. Fortunately, [nativescript-plugin-seed](https://github.com/NativeScript/nativescript-plugin-seed) has already provided the commands we need in the form of npm scripts. Just navigate to your `src` folder and run:

```
npm run test.android
npm run test.ios
```

Be sure that you have available android/ios device or simulator.

> **NOTE**: Using the npm scripts to run your tests is the best option, but in case of debugging purposes, where you want to output some console logs, you will have to navigate to your `demo` folder and run `tns test android` or `tns test ios`.

## Continuous Integration

By starting from the [nativescript-plugin-seed](https://github.com/NativeScript/nativescript-plugin-seed) you get out-of-the-box fully-functional `.travis.yml` file ready to run your unit tests on Android and iOS in [Travis CI](https://travis-ci.org/). All you have to do is to log in to Travis CI, activate your repository, and make sure `Build pushes` and `Build pull requests` are [enabled](https://docs.travis-ci.com/images/settings-env-vars.png).

## See Also

* [Ensure Plugins Quality]({% slug ensure-plugins-quality %})