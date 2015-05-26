---
nav-title: Set Up the NativeScript CLI on OS X
title: Set Up the NativeScript CLI on OS X
description: Configure your OS X system to create, develop and build projects locally with NativeScript.
position: 2
---

# Set Up the NativeScript CLI on OS X

With the open-source [NativeScript Command-Line Interface][NativeScript CLI] and an IDE or text editor of your choice, you can create, develop, store and build your apps entirely locally, free of charge, without an Internet connection and anonymously.

On OS X systems, you can use the NativeScript CLI to develop Android and iOS apps.

* [System Requirements](#system-requirements)
* [Setup](#setup)

## System Requirements

* OS X Mavericks or later
* Node.js 0.10.26 or a later stable official release except Node.js 0.10.34
* (Optional) Homebrew to simplify the installation of dependencies
* For iOS development
    * Latest Xcode
    * Command-line tools for Xcode
* For Android development
    * JDK 8 or a later stable official release
    * Apache Ant 1.8 or later
    * Android SDK 19 or later
    * (Optional) Genymotion to expand your testing options

## Setup

1. Install [Homebrew](http://brew.sh) to simplify the installation process.
    
    ```Shell
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
1. Install [Node.js 0.10.26](http://nodejs.org) or a later stable official release.

    ```Shell
    brew install node
    ```
1. Install the dependencies for iOS development.
    1. Run the App Store and download and install Xcode 5 or later.
    1. Go to [Downloads for Apple Developers](https://developer.apple.com/downloads/index.action), log in and download and install the **Command Line Tools for Xcode** for your version of OS X and Xcode.
1. Install the dependencies for Android development.
    1. Install [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
        1. Go to [Java SE Downloads](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and click **Download** for JDK.
        1. In the **Java SE Development Kit** section, accept the license agreement and click the download link for Mac OS X.
        1. Wait for the download to complete and install the JDK.
    1. Install [Apache Ant 1.8](http://ant.apache.org/bindownload.cgi) or a later stable official release.
        1. In the terminal, run the following command.

            ```Shell
            brew install ant
            ```
        1. If not present, add the following file path to the `PATH` system environment variable.

            ```
            Path to the bin directory in the Apache Ant installation folder
            ```

            For example: Run the following command `export PATH=${PATH}:/ant/apache-ant-1.9.4/bin`
    1. Install the [Android SDK](http://developer.android.com/sdk/index.html).
        1. In the terminal, run the following command.

            ```Shell
            brew install android-sdk
            ```
        1. If not present, add the following file paths to the `PATH` system environment variable.

            ```
            Path to the tools subdirectory in the Android SDK installation directory
            Path to the platform-tools subdirectory in the Android SDK installation directory
            ```

            For example: Run the following command `export PATH="$PATH:/usr/local/Cellar/android-sdk/24/tools:/usr/local/Cellar/android-sdk/24/platform-tools"`
        1. Run the following command.

            ```
            android update sdk
            ```
        1. Select all packages for the Android 19 SDK and any other SDKs that you want to install and click **Install**.
    1. (Optional) Install Genymotion.<br/>Genymotion is a third-party native emulator.
        1. Go to [Download VirtualBox](https://www.virtualbox.org/wiki/Downloads) and download and install VirtualBox for OS X.
        1. Go to [Get Genymotion](https://www.genymotion.com/#!/download), select Mac and click **Get Genymotion**.
        1. After the download completes, run the installer and complete the installation.
        1. Add the following file paths to the `PATH` system environment variable.

            ```
            Path to the MacOS directory in the Contents directory in the Genymotion Shell app
            Path to the MacOS directory in the Contents directory in the Genymotion app
            ```

            For example: Run the following command `export PATH=$PATH:/Applications/Genymotion\ Shell.app/Contents/MacOS/:/Applications/Genymotion.app/Contents/MacOS/`
1. Install the NativeScript CLI.
    1. Run the following command. 
    
        ```Shell
        npm i -g nativescript
        ```
    1. Restart the command prompt.

## What's Next

Create your first [Hello World app with the NativeScript CLI](../../hello-world/hello-world-ns-cli.md).

[NativeScript CLI]: https://www.npmjs.com/package/nativescript
