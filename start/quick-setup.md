---
title: Installation
description: Set up your system to work with NativeScript.
position: 20
slug: quick-start
previous_url: /setup/quick-setup
---

# Set Up Your System

With the open-source NativeScript command-line interface and an IDE or text editor of your choice, you can create, develop, store and build your apps entirely locally, free of charge and anonymously. Let’s look at how to set up the CLI for development.

> **NOTE**: The steps on this page are quick setup steps intended for users new to mobile development. If you have existing mobile experience, if you’re on Linux, or if you want full control of the installation process, refer to one of the advanced setup guides below, which walk you through manually setting up your environment for NativeScript development.
> * [Advanced setup: Windows](/start/ns-setup-win)
> * [Advanced setup: OS X](/start/ns-setup-os-x)
> * [Advanced setup: Linux](/start/ns-setup-linux)

## Step 1: Install Node.js

The NativeScript CLI is built on Node.js, and as such you need to have Node.js installed to use NativeScript.

You can check whether you have Node.js set up by opening a terminal or command prompt on your development machine and executing `node --version`. If you get an error, head to  <https://nodejs.org/> and download and install the latest “LTS” (long-term support) distribution for your development machine.

> **TIP**:
> * If you’re on OS X and use [Homebrew](http://brew.sh/), you can alternatively install the Node.js LTS release by running `brew install homebrew/versions/node6-lts` in your terminal.
> * The NativeScript CLI supports a wide variety of Node.js versions, so if you already have Node.js installed you should be good to go. If, by chance, you’re running an unsupported version, the `tns doctor` command we’ll run momentarily will flag the problem so you can upgrade.

## Step 2: Install the NativeScript CLI

Open your terminal or command prompt and execute the following command to install the NativeScript CLI from npm, which is Node.js’ package manager:

<pre class="add-copy-button"><code class="language-terminal">npm install -g nativescript</code></pre>

> **NOTE**:
> * You may be asked two questions during the installation—_Do you want to visit the official documentation?_, and _Do you want to run the setup script?_ Go ahead and answer “No” to both questions for now as we’ll cover the documentation and scripts momentarily.
> * If you’re on OS X and receive an EACCES error, you either need to rerun the previous command with `sudo`—that is, `sudo npm install -g nativescript`—or take a moment to [fix your npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) so that you don’t need admin rights to globally install npm packages.

After completing the setup you should have two commands available from your terminal or command prompt: `tns`—which is short for <b>T</b>elerik <b>N</b>ative<b>S</b>cript—and `nativescript`. The two commands are equivalent, so we'll stick with the shorter `tns`.

You can verify the installation was successful by running `tns` in your terminal. You should see something like this:

```
$ tns
# NativeScript
┌─────────┬─────────────────────────────────────────────────────────────────────┐
│ Usage   │ Synopsis                                                            │
│ General │ $ tns <Command> [Command Parameters] [--command <Options>]          │
│ Alias   │ $ nativescript <Command> [Command Parameters] [--command <Options>] │
└─────────┴─────────────────────────────────────────────────────────────────────┘
```

## Step 3: Install iOS and Android requirements

When you build with NativeScript you’re building truly native iOS and Android apps, and as such, you need to set up each platform you intend to build for on your development machine. To ease the pain of installing all of these requirements manually, the NativeScript CLI provides quick-start scripts for Windows and OS X that handle the necessary setup for you automatically. Let’s look at how they work.

> **TIP**: Setting up your machine for native development can be tricky, especially if you’re new to mobile development. If you get stuck, or if you have questions while going through these instructions, the [NativeScript community forum](http://forum.nativescript.org/) is a great place to get help.

### Windows

If you’re on Windows, copy and paste the script below into your command prompt and press Enter:

<pre class="add-copy-button"><code class="language-terminal">@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"</code></pre>

During installation you may need to accept a User Account Control prompt to grant the script administrative privileges. Also, be aware that the script downloads and installs some big dependencies—so it’s common for the script to take a while to complete. When the script finishes, close and reopen your command prompt.

While Intel HAXM is downloaded by the above installation script, Windows users must manually run the installer. To do this, run the following command in your command prompt:

<pre class="add-copy-button"><code class="language-terminal">%ANDROID_HOME%\extras\intel\Hardware_Accelerated_Execution_Manager\intelhaxm-android.exe</code></pre>


> **NOTE**: On Windows systems you can only use the NativeScript CLI to develop Android apps. This is because the NativeScript CLI uses Xcode to build iOS apps, which is only available on the OS X operating system. If you’re interested in building iOS apps on Windows, you may want to try out the [Telerik Platform](http://www.telerik.com/platform). The Telerik Platform provides robust tooling for NativeScript apps, including a service that performs iOS and Android builds in the cloud, removing the need to complete these system requirements, and allowing you to build for iOS on Windows.

### OS X

If you’re on a Mac, copy and paste the script below into your terminal and press Enter:

<pre class="add-copy-button"><code class="language-terminal">ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"</code></pre>

Much like the Windows script, the OS X script needs administrative access to run some commands using `sudo`; therefore, you may need to provide your password several times during execution. The OS X script also may take some time to complete, as it’s installing the dependencies for both iOS and Android development. When the script finishes, close and restart your terminal.

## Step 4: Verify the setup

Once you’ve finished installing NativeScript and its dependencies, run the `tns doctor` command, which will check for any issues with your installation.

```
tns doctor
```

If you see “No issues were detected” you’re good to go!

## What’s Next

* [Return to the JavaScript tutorial](http://docs.nativescript.org/tutorial/chapter-1#11-install-nativescript-and-configure-your-environment)
* [Return to the TypeScript & Angular tutorial](http://docs.nativescript.org/angular/tutorial/ng-chapter-1#11-install-nativescript-and-configure-your-environment)
