---
title: Installation
description: Set up your system to work with NativeScript.
position: 20
slug: quick-start
previous_url: /setup/quick-setup
---

# Set Up Your System

With the open-source NativeScript command-line interface and an IDE or text editor of your choice, you can create, develop, store, and build your apps locally, free of charge and anonymously. Let’s look at how to set up the CLI for development.

> **TIP**: Try [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick) for a one-click setup experience for macOS, Windows, and Linux. Sidekick installs the NativeScript CLI and dependencies listed below for macOS and Windows - and offers starter kits, cloud-based builds for iOS and Android, and app store publishing.

## Step 1: Install Node.js

The NativeScript CLI is built on [Node.js](https://nodejs.org/en/), and as such you need to have Node.js installed to use NativeScript.

To check whether you have Node.js installed, open a terminal or command prompt and execute `node --version`. If there is an error, head to  <https://nodejs.org/> and download and install the latest “LTS” (long-term support) distribution and restart your terminal or command prompt.

> **TIP**:
> * If you’re on macOS and use [Homebrew](http://brew.sh/), you can alternatively install the Node.js LTS release by running `brew update` (to download the latest updates) and then `brew install node@6` in your terminal.
> * The NativeScript CLI supports a wide variety of Node.js versions, so if you already have Node.js installed you should be good to go. If, by chance, you’re running an unsupported version, the `tns doctor` command will run momentarily and flag the problem so you can upgrade.

> **NOTE**: Mac users, bear in mind that you should add the path to `node@6/bin` manually by running `echo 'export PATH="/usr/local/opt/node@6/bin:$PATH"' >> ~/.bash_profile` and restart your terminal.

## Step 2: Install the NativeScript CLI

Open your terminal or command prompt and execute the following command to install the NativeScript CLI from 
[npm](https://www.npmjs.com/), which is the Node.js package manager:

<pre class="add-copy-button"><code class="language-terminal">npm install -g nativescript</code></pre>

> **NOTE**:
> * You may be asked two questions during the installation—_Do you want to visit the official documentation?_, and _Do you want to run the setup script?_ Go ahead and answer “No” to both questions for now as we’ll cover the documentation and scripts momentarily.
> * If you’re on macOS and receive an EACCES error, you either need to rerun the previous command with `sudo`—that is, `sudo npm install -g nativescript`—or take a moment to [fix your npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) so that you don’t need admin rights to globally install npm packages.

After completing the setup there should be two commands available on the terminal/command prompt: `tns` (short for <b>T</b>elerik <b>N</b>ative<b>S</b>cript) and `nativescript`. The two commands are identical, so we'll stick with the shorter `tns`.

Verify that the installation was successful by running `tns` in the terminal. You should see a long list of commands that starts with this section:

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

NativeScript builds truly native iOS and Android apps, and as such, each target platform needs setting up on the development machine. To ease the pain of installing all of these requirements manually, the `tns` command provides quick-start scripts for Windows and macOS. Let’s look at how they work.

> **TIP**:
> * Setting up your machine for native development can be tricky, especially if you’re new to mobile development. If you get stuck, or if you have questions while going through these instructions, the [forum](https://discourse.nativescript.org/c/getting-started) is a great place to get help.
> * If you’re not comfortable with a script automatically installing dependencies on your development machine, or if you’re on Linux, refer to one of the advanced setup guides below for details on manually installing the iOS and Android dependencies.
>     * [Advanced setup: Windows](/start/ns-setup-win)
>     * [Advanced setup: macOS](/start/ns-setup-os-x)
>     * [Advanced setup: Linux](/start/ns-setup-linux)
> * Also look at [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick) for cloud builds (includes free tier)

### Windows

#### Prerequisites
* Windows 7 Service Pack 1 or later

#### Setup

If running OS is Windows; copy and paste the script below into your command prompt as an administrator and press Enter:

Please be sure that you run this command in cmd as an administator (Windows key > type "cmd" > right click > Run as Administrator).

<pre class="add-copy-button"><code class="language-terminal">@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"</code></pre>

During installation you may need to accept a User Account Control prompt to grant the script administrative privileges. Also, be aware that the script downloads and installs some big dependencies—so it’s common for the script to take a while to complete. When the script finishes, close and reopen your command prompt.

> **NOTE**: On Windows and Linux systems you can only use the `tns` command to develop Android apps. This is because the NativeScript CLI uses Xcode to build iOS apps, which is only available on macOS. If you’re interested in building iOS apps on Windows or Linux, you should download [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick).

After the installation the system setup should have:
* The latest stable official release of Node.js (LTS) [6.x](https://nodejs.org/dist/latest-v6.x/) 
* Google Chrome 
* JDK 8
* Android SDK 22 or a later stable official release
* Android Support Repository
* Google Repository
* Android SDK Build-tools 25.0.2 or a later stable official release
* Android Studio
* Set up Android virtual devices to expand your testing options

The two environment variables `JAVA_HOME` and `ANDROID_HOME` are required for Android development, which should have been automatically added as part of the installation:


> **NOTE** To check if `JAVA_HOME` and `ANDROID_HOME` are set:
- close any open Command Prompt windows,
- open a new Command Prompt
- execute `echo %JAVA_HOME%` and make sure a valid path is returned
- execute `echo %ANDROID_HOME%` and make sure a valid path is returned

### macOS

If OS is a Mac, copy and paste the script below into your terminal and press Enter:

<pre class="add-copy-button"><code class="language-terminal">ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"</code></pre>

The macOS script needs administrative access to run some commands using `sudo`; therefore, you may need to provide your password several times during execution. The macOS script also may take some time to complete, as it’s installing the dependencies for both iOS and Android development. When the script finishes, close and restart your terminal.

## Step 4: Verify the setup

To verify the setup, run the `tns doctor` command which will check for any issues with the installation. If you see “No issues were detected” you’re good to go!

## What’s Next

* [Return to the JavaScript tutorial](http://docs.nativescript.org/tutorial/chapter-1#11-install-nativescript-and-configure-your-environment)
* [Return to the TypeScript & Angular tutorial](http://docs.nativescript.org/angular/tutorial/ng-chapter-1#11-install-nativescript-and-configure-your-environment)
