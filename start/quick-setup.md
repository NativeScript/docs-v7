---
title: Installation
description: Set up your system to work with NativeScript.
position: 2
slug: quick-start
previous_url: /setup/quick-setup
---

# NativeScript Setup

With the open-source [NativeScript command-line interface](https://www.npmjs.com/package/nativescript) and an IDE or text editor of your choice, you can create, develop, store and build your apps entirely locally, free of charge and anonymously.

To take advantage of this autonomy, you need to configure your system with the tools and SDKs for native development of the platforms for which you want to develop. The NativeScript CLI uses them to produce truly native builds of your cross-platform projects.

> **TIP**: Setting up your machine for native development can be tricky, especially if you’re new to mobile development. If you get stuck, or if you have questions at any point while going through this guide, the [NativeScript Community Slack channel](http://developer.telerik.com/wp-login.php?action=slack-invitation) is a great place to ask questions.

> **Warning**: The steps below are the quick setup steps intended for users new to mobile development. If you have existing mobile experience, if you’re on Linux, or if you want full control of the installation process, refer to one of the advanced setup guide below, which walk you through manually setting up your environment for NativeScript development.
> * [Advanced setup: Windows](http://docs.nativescript.org/start/ns-setup-win#setup)
> * [Advanced setup: OS X](http://docs.nativescript.org/start/ns-setup-os-x#setup)
> * [Advanced setup: Linux](http://docs.nativescript.org/start/ns-setup-linux#setup)

## Step 1: Install Node.js

The NativeScript CLI is built on Node.js, and as such you need to have Node.js installed to use NativeScript.

You can check whether you have Node.js setup by opening a terminal or command prompt on your development machine and executing `node --version`. If you get an error, head to  <https://nodejs.org/> and download and install the latest “LTS” (long-term support) distribution for your development machine.

> **TIP**: The NativeScript CLI supports a wide variety of Node.js versions, so if you already have Node.js installed you should be good to go. If, by chance, you’re running an unsupported version, the `tns doctor` command we’ll run momentarily will flag the problem so you can upgrade.

## Step 2: Install the NativeScript CLI

Open your terminal or command prompt and execute the following command to install the NativeScript CLI from npm, which is Node.js’ package manager:

```
npm install -g nativescript
```

> **NOTE**: If you’re on OS X and receive an EACCES error, you either need to rerun the previous command with `sudo`—that is, `sudo npm install -g nativescript`—or take a moment to [fix your npm persmissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) so that you don’t need admin rights to globally install npm packages.

After completing the setup you should have two commands available from your terminal or command prompt: `tns`—which is short for <b>T</b>elerik <b>N</b>ative<b>S</b>cript—and `nativescript`. The two commands are equivalent, so we'll stick with the shorter `tns`.

You can verify the installation was successful by running `tns` in your terminal. You should see something like this:

<div class="no-copy-button"></div>

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

When you build with NativeScript you’re building truly native iOS and Android apps, and as such, you need to setup each platform you intend to build for on your development machine. To ease the pain of installing all of these requirements manually, the NativeScript CLI provides quick-start scripts for Windows and OS X that handle the necessary setup for you automatically. Let’s look at how they work.

### Windows

If you’re on Windows, copy and paste the script below into your command prompt and press Enter:

```
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/NativeScript/nativescript-cli/production/setup/native-script.ps1'))"
```

During installation you may need to accept a User Account Control prompt to grant the script administrative privileges. Also, be aware that the script downloads and installs some big dependencies—so it’s common for the script to take a while to complete. When the script finishes, close and reopen your command prompt.

### OS X

If you’re on a Mac, copy and paste the script below into your terminal and press Enter:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/NativeScript/nativescript-cli/production/setup/native-script.rb)"
```

Much like the Windows script, the OS X script needs administrative access to run some commands using `sudo`; therefore, you may need to provide your password several times during execution. The OS X script also may take some time to complete, as it’s installing the dependencies for both iOS and Android development. When the script finishes, close and restart your terminal.

## Step 4: Verify the setup

Once you’ve finished installing NativeScript and its dependencies, run the `tns doctor` command, which will check for any issues with your installation.

```
tns doctor
```

If you see “No issues were detected” you’re good to go!
