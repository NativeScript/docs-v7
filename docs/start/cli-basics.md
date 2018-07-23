---
title: Command-Line Interface Basics
position: 30
environment: nativescript
guide: true
description: Learn the basics of the NativeScript CLI, including how to create, run, and debug NativeScript apps
---

# Basics of the NativeScript Command-Line Interface

In this article you’re going to learn the basics of the NativeScript command-line interface, including how to create new apps, how to get those apps running on emulators, and how to set up a development workflow that lets you iterate fast.

## Creating apps

In NativeScript you create and run apps using the NativeScript CLI. After [installation](/start/quick-setup), the NativeScript CLI is available on your terminal or command prompt as a `tns` command—which is short for <b>T</b>elerik <b>N</b>ative<b>S</b>cript.

In this section you’ll familiarize yourself with the NativeScript CLI, and use the CLI’s `create` command to start your first NativeScript app.

<h4 class="exercise-start">
    <b>Exercise</b>: Use the <code>tns create</code> command
</h4>

Open your terminal or command prompt and run the following command to create a new NativeScript application.

{% nativescript %}
```
tns create HelloWorld --template tns-template-blank
```
{% endnativescript %}

{% angular %}
```
tns create HelloWorld --template tns-template-blank-ng
```
{% endangular %}

Here you’re passing two things to the `create` command: `HelloWorld` which determines the name of the app you’re creating, and the `--template` option, which tells the NativeScript CLI to scaffold an app using a predefined template named “nativescript-template-tutorial”.

> **TIP**: You can use the `tns create` command to scaffold apps at a [variety of different starting points](https://market.nativescript.org/?tab=templates&category=all_templates). The “tns-template-blank” template creates a dead-simple app for the purposes of teaching the basics of NativeScript.

The `create` command will take a minute to complete, as the NativeScript CLI needs to download a few dependencies while setting up your new app.

When the command finishes, use the `cd` command (change directory) to navigate into your new app’s folder.

```
cd HelloWorld
```

<div class="exercise-end"></div>

Now that you have created an app, let’s look at how to get your new app up and running in an emulator.

> **TIP**: You can run the `tns help` command to view the NativeScript CLI’s help documentation in your web browser.

## Running apps

Now that you have an app scaffolded on your local computer and you have `cd`‘ed to the root of the app, you are ready to run your application on an emulator.

<h4 class="exercise-start">
    <b>Exercise</b>: Use the <code>tns run</code> command
</h4>

In NativeScript you use the CLI’s `tns run` command to run your apps on iOS or Android. Let’s start with Android.

Execute the following command in your terminal to run your app on an Android emulator.

```
tns run android
```

> **NOTE**:
> * If you get an error at this point you likely haven’t completed the [NativeScript CLI installation instructions](/start/quick-setup). If you’ve gone through the instructions and are still stuck, try asking for help in the [NativeScript community forum](http://forum.nativescript.org/).
> * You must have at least one AVD (Android Virtual Device) configured on your development machine for this command to run your app up on an Android emulator. If you don’t have one installed currently go ahead and [set one up now](/tooling/android-virtual-devices).

The `run` command will take a few seconds to complete, as the NativeScript CLI will actually be building and deploying a native Android application. When the command finishes the native emulator will open and you will see your app:

![Basic hello world app running on Android](/img/start/cli-basics/android/1.png)

If you’re on macOS and would prefer to develop for iOS first, type `Ctrl` + `C` in your terminal to end the previous `tns run android` command, and then execute the following command instead.

```
tns run ios
```

> **NOTE**: NativeScript uses Xcode under the hood to build and run iOS apps, and Xcode is only available on macOS; therefore, you can only run iOS apps on macOS.

The `run` command will again take a few seconds, as the NativeScript CLI will be building and deploying a native iOS application. When the command finishes the native emulator will open and you will see your app:

![Basic hello world app running on iOS](/img/start/cli-basics/ios/1.png)

<div class="exercise-end"></div>

You might have noticed that the `tns run` command never terminates. That is, you cannot type in your terminal or command prompt after your app starts up.

<img src="/img/start/cli-basics/terminal-1.png" alt="Terminal display after executing tns run" class="plain">

This happens because the `tns run` command not only starts your apps, it also watches your code for changes. When the `tns run` command detects a code change, the command automatically refreshes, or _livesyncs_, your app so you can see those changes immediately. Let’s make some updates to your code so you can see this in action.

<h4 class="exercise-start">
    <b>Exercise</b>: Try Livesync
</h4>

Open your new project in your favorite text editor or IDE.

> **TIP**: You can use any editor to develop NativeScript apps, but we recommend Visual Studio Code. Feel free to [skip ahead to this chapter’s appendix](#appendix-a-choosing-an-editor) for more information.

{% nativescript %}
Let’s add a simple image to your app so you can see how livesync works. Open your app’s  `app/main-page.xml` file, and replace its contents with the following code:

``` XML
<Page loaded="pageLoaded">
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <Image src="https://user-images.githubusercontent.com/544280/42960643-66d498ac-8b5a-11e8-8946-7224eefea6a5.jpg"></Image>
</Page>
```
{% endnativescript %}

{% angular %}
Let’s add a simple image to your app so you can see how livesync works. Open your app’s  `app/home/home.component.ts` file, and replace its contents with the following code:

``` TypeScript
import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <Image src="https://user-images.githubusercontent.com/544280/42960643-66d498ac-8b5a-11e8-8946-7224eefea6a5.jpg"></Image>
  `
})
export class HomeComponent {
  // Your TypeScript logic goes here
}
```
{% endangular %}

> **NOTE**: Don’t worry about the specifics of how this code works yet. We’ll cover the details momentarily—for now just get comfortable with how livesync works.

Your emulator should refresh and display the new image.

![Apple on the iOS emulator](/img/start/cli-basics/ios/2.png)
![Apple on the Android emulator](/img/start/cli-basics/android/2.png)

Next, open your app’s `app/app.css` and paste the following code in at the bottom of the file. Again don’t worry about the details of what this code is doing right now.

``` CSS
@keyframes spin {
    from { transform: rotate(0); }
    to { transform: rotate(360); }
}
Image {
    animation-name: spin; 
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
```

When your emulator refreshes, you should see a crazy spinning apple!

![App with a blue action bar](/img/start/cli-basics/ios/3.gif)
![Apple spinning on the Android emulator](/img/start/cli-basics/android/3.gif)

Let’s make one final change.

Find the first line of your app’s `app/app.css` file, which imports a `core.light.css` file. This import tells NativeScript to use a “light” color scheme. Let’s change to the “sky” color scheme by replacing the existing line of code with the one shown below.

``` CSS
@import "nativescript-theme-core/css/sky.css";
```

<div class="exercise-end"></div>

The emulator should refresh and you should see a nice blue ActionBar color:

![iOS app with a blue action bar](/img/start/cli-basics/ios/4.png)
![Android app with a blue action bar](/img/start/cli-basics/android/4.png)

<h4 class="exercise-start">
    <b>Challenge</b>: Pick a different color scheme
</h4>

Looking for a little more fun? NativeScript has several color schemes available for styling your iOS and Android apps. Pick a different stylesheet from the [full list](/ui/theme#color-schemes) and try it out in your app. Which one looks best?

<div class="exercise-end"></div>

Overall, the NativeScript CLI’s livesync process makes native iOS and Android development feel a lot like web development. You have the ability to change your CSS, markup, and JavaScript code, and see those changes reflected on the fly—all in a completely native mobile app.

> **WARNING**: There are situations where you’ll need to stop `tns run` and rebuild your app from scratch—for instance if need to install a new dependency from npm. In those cases you need to type `Ctrl + C` in your terminal to stop the current `tns run` process, and then re-execute `tns run android` or `tns run ios` to get your app up and running again. Don’t worry though; when situations that require a restart come up in this tutorial, those instructions will be explicitly listed.

## Debugging apps

You now know how to create and run NativeScript apps. Your next step is learning how to debug your apps when things go wrong. Let’s look at how debugging works in NativeScript.

There are three main paths you can take when you want to debug a NativeScript application:

**Chrome**
The default way of debugging a NativeScript application is by using the integration with Chrome. You can find more information on the actual steps [here](http://docs.nativescript.org/tooling/debugging).

**Visual Studio Code**
One of the preferred ways of debugging a NativeScript application is with the [NativeScript extension for Visual Studio Code](http://docs.nativescript.org/tooling/debugging#debugging-with-visual-studio-code).

You’ll want to check out the Chrome Dev Tools and the Visual Studio debugger as you have the need to step through your JavaScript code or TypeScript code, but for the moment let’s look at how to do some simple logging in your apps.

<h4 class="exercise-start">
    <b>Exercise</b>: Console logging in NativeScript
</h4>

One of the easiest things you can do to debug apps in any environment is writing to the system’s log. In NativeScript logging works a lot like it does on the web, as most of the same `console` APIs that work on the web also work in NativeScript.

{% nativescript %}
To see this action open your app’s `app/main-page.js` file and replace its contents with the code below.

``` JavaScript
exports.pageLoaded = function() {
     console.log("Hello World");
};
```
{% endnativescript %}

{% angular %}
To see this action open your app’s `app/home/home.component.ts` file and replace its contents with the code below.

``` TypeScript
import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My Apple" class="action-bar"></ActionBar>
    <Image src="https://user-images.githubusercontent.com/544280/42960643-66d498ac-8b5a-11e8-8946-7224eefea6a5.jpg"></Image>
  `
})
export class HomeComponent {
  constructor() {
    console.log("Hello World");
  }
}
```
{% endangular %}

After the NativeScript CLI refreshes your app, head back to your terminal or command prompt. You should see a “Hello World” message at the bottom that looks like something like this.

<img src="/img/start/cli-basics/terminal-2.png" alt="Terminal display after running a console log" class="plain">

The `console.log()` function is great for outputting primitive values such as strings, numbers, and booleans, but it doesn’t work so well for objects. For those situations you’ll want to use another of the `console` object’s methods intended for complex object output: `console.dir()`.

{% nativescript %}
To see this in action replace the contents of your `app/main-page.js` file with the code below, which uses `console.log()` to log a simple object.

``` TypeScript
exports.pageLoaded = function() {
    console.log({
      type: "Apple",
      color: "Red"
    });
};
```
{% endnativescript %}

{% angular %}
To see this in action replace the contents of your `app/home/home.component.ts` file with the code below, which uses `console.log()` to log a simple object.

``` TypeScript
import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My Apple" class="action-bar"></ActionBar>
    <Image src="https://user-images.githubusercontent.com/544280/42960643-66d498ac-8b5a-11e8-8946-7224eefea6a5.jpg"></Image>
  `
})
export class HomeComponent {
  constructor() {
    console.log({
      type: "Apple",
      color: "Red"
    });
  }
}
```
{% endangular %}

If you look at your console you’ll see the following not-very-helpful output.

```
JS: [object Object]
```

Go ahead and replace your code’s `console.log` reference with `console.dir`. After the NativeScript CLI refreshes your app you should see the full output of the object in your terminal or command prompt.

```
JS: === dump(): dumping members ===
JS: {
JS:     "type": "Apple",
JS:     "color": "Red"
JS: }
JS: === dump(): dumping function and properties names ===
JS: === dump(): finished ===
```

<div class="exercise-end"></div>

The `console.log()` and `console.dir()` functions are two of the many tools available when debugging your NativeScript applications. You might want to try out [step debugging](https://www.nativescript.org/nativescript-for-visual-studio-code) as you move into more advanced development, but for now let’s shift our attention to how to deal with errors in NativeScript apps.

<h4 class="exercise-start">
    <b>Exercise</b>: Error handling in NativeScript
</h4>

Errors happen, and when they do it’s important to know how to handle them. Let’s mess up a few things in your new app.

{% nativescript %}
Find the line of code that declares an `<ActionBar>` (line 2 of your `app/main-page.xml` file). Remove that line’s final `>` character so that the line looks like this.

``` XML
<ActionBar title="My Apple" class="action-bar"></ActionBar
```
{% endnativescript %}

{% angular %}
Find the line of code that declares an `<ActionBar>` (line 6 of your `app/home/home.component.ts` file). Remove that line’s final `>` character so that the line looks like this.

``` XML
<ActionBar title="My Apple" class="action-bar"></ActionBar
```
{% endangular %}

This is invalid markup, and as you might expect NativeScript is unable to render your user interface. What NativeScript does do, however, is log any relevant errors and stack traces to your console. If you return to your terminal and scroll up just a bit you’ll see following error logged that indicates exactly where the problem is.

{% nativescript %}
```
JS ERROR Error: Building UI from XML. @file:///app/main-page.xml:2:50
	 > close tag
```

Let’s fix the error now by adding the `>` back to line 2 in your `main-page.xml` file.

``` XML
<ActionBar title="My Apple" class="action-bar"></ActionBar>
```
{% endnativescript %}

{% angular %}
```
JS: ERROR Error: Uncaught (in promise): Error: Template parse errors:
JS: Unexpected character "<" ("
JS:     <ActionBar title="My Apple" class="action-bar"></ActionBar
JS:     [ERROR ->]<Image src="https://user-images.githubusercontent.com/544280/42960643-66d498ac-8b5a-11e8-8946-7224eef"): ng:///HomeModule/HomeComponent.html@2:4
```

Let’s fix the error now by adding the `>` back to line 6 in your `home.component.ts` file.

``` XML
<ActionBar title="My Apple" class="action-bar"></ActionBar>
```
{% endangular %}

The NativeScript CLI continues to watch the files in your application, even after errors. As such, after you correct this problem, the CLI updates your app to its previous state.

<div class="exercise-end"></div>

## Appendix A: Choosing an editor

You can develop NativeScript apps in any text editor or IDE you wish. Therefore, if you’re deeply committed to an editor, by all means continue to use your editor of choice as you build applications with NativeScript.

> TIP: If you’re a WebStorm user, check out this [popular community-written plugin](https://plugins.jetbrains.com/webstorm/plugin/8588-nativescript) that adds a number of NativeScript-related features.

However, if you’re not absolutely committed to an editor, or if you’re looking to try something new, the NativeScript team recommends using Microsoft’s Visual Studio Code to develop your NativeScript applications. Here’s why.

- Visual Studio Code has excellent support for [TypeScript](https://www.typescriptlang.org/), which you may wish to use as an alternative to JavaScript for your NativeScript development.
- Visual Studio Code gives you the ability to debug JavaScript and TypeScript code directly in your editor. The NativeScript team maintains an official [NativeScript Visual Studio Code extension](https://www.nativescript.org/nativescript-for-visual-studio-code) that enables step debugging for NativeScript apps.
- Visual Studio Code is a fast, modern editor that Microsoft [updates frequently](https://code.visualstudio.com/updates/).
- Visual Studio Code is available for Windows, macOS, and Linux.
- Visual Studio Code is backed by Microsoft; therefore, you can feel confident that the editor will continue to be supported in the future.

If you do choose to [try Visual Studio Code](https://code.visualstudio.com/), let’s look at one tip you might find useful as you develop NativeScript apps.

### Tip #1: The `code` command

After you install Visual Studio Code you can open projects using the editor’s `File` → `Open` menu option, but there’s an alternative option that works far better for command-line-based projects like NativeScript: the `code` command.

The `code` command runs in your command-line or terminal, and it works just like the `tns` command does for NativeScript apps. Visual Studio Code installs the `code` command by default on Windows on Linux, but on macOS there’s [one manual step](https://code.visualstudio.com/docs/setup/mac) you must perform.

Once set up, you can type `code .` in your terminal to open the files in your current folder for editing. For example, you could use the following sequence of commands to create a new NativeScript app and open it for editing.

```
tns create MyNewApp
cd MyNewApp
code .
```
