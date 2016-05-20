---
title: Installation
description: Choose between a local and cloud tool set and set up our system to work with NativeScript.
position: 2
slug: quick-start
previous_url: /setup/quick-setup
---

# Set Up Your System

Before you can begin development with NativeScript, you need to choose your tool set and configure your system to use it.

When you develop with NativeScript, you can choose between a local tool set ([NativeScript Command-Line Interface][NativeScript CLI]) and a cloud tool set ([Telerik AppBuilder][AppBuilder]).

* [The NativeScript CLI](#the-nativescript-cli)
* [The AppBuilder Tool Set](#the-appbuilder-toolset)

## The NativeScript CLI

*Create, store, develop, build and test apps locally and free of charge on Windows, OS X or Ubuntu*

> **TIP:** If you are familiar with the Apache Cordova CLI, you might want to try the NativeScript CLI. It provides a similar set of commands and an identical experience.

With the open-source [NativeScript Command-Line Interface][NativeScript CLI] and an IDE or text editor of your choice, you can create, develop, store and build your apps entirely locally, free of charge and anonymously.

To take advantage of this autonomy, you need to configure your system with the tools and SDKs for native development of the platforms for which you want to develop. The NativeScript CLI uses them to produce truly native builds of your cross-platform projects.

### Quick setup

NativeScript CLI is a Node.js application. If you have Node.js already installed, just run the following command.

```Shell
npm i -g nativescript
```

If you do not have Node.js, you need to install it first. Here's how to install it on [Mac]({% slug osx %}), [Windows]({% slug windows %}) or [Linux]({% slug linux %})

To develop your apps, you need the Native SDK dependencies.
If this is your first time developing a mobile project, consider using the one-liner scripts in this section to effortlessly setup your machine. 
If you have experience developing mobile apps, you may skip to the [advanced setup](#advanced-setup) section below.

 * On Windows:

Open Start Menu, search for `Command Prompt` and start it. This opens a console window. Copy and paste this script:

> @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"

You may need to accept an User Account Control prompt to grant the script administrative privileges. Note that the script downloads and installs some big dependencies and may take some time to complete. 

 * On Mac:

Using Spotlight, search `Terminal` and start it. This opens a console window. Copy and paste this script:

> ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"

The script calls some of the commands using `sudo` and you may need to provide your password several times. Note that the script downloads and installs some big dependencies and may take some time to complete.

### Advanced setup

* [Set Up on Windows]({% slug windows %})
* [Set Up on OS X]({% slug osx %})
* [Set Up on Linux]({% slug linux %})

## The AppBuilder Tool Set

*Create, store, develop, build and test apps in the cloud without installing any additional dependencies*

> **TIP:** If you are unfamiliar with the complexity of native development, you might want to try the AppBuilder tool set. It does not require additional tools and SDKs installed on your system.

[Telerik AppBuilder][AppBuilder] provides a wide range of IDE choices paired with storage, compile and build services in the cloud. If you have access to the Internet and a Telerik account, you can use AppBuilder to develop NativeScript apps without configuring any additional tools and SDKs for native development. Telerik AppBuilder takes your cross-platform  project, compiles and builds it in the cloud and produces a truly native app.

[NativeScript CLI]: https://www.npmjs.com/package/nativescript
[AppBuilder]: http://www.telerik.com/appbuilder
