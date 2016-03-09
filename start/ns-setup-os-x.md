---
title: Set Up OS X
description: Configure your OS X system to create, develop and build projects locally with NativeScript.
position: 4
publish: false
slug: osx
previous_url: /setup/ns-cli-setup/ns-setup-os-x
---

# Set Up the NativeScript CLI on OS X

With the open-source [NativeScript Command-Line Interface](https://github.com/NativeScript/nativescript-cli) and an IDE or text editor of your choice, you can create, develop, store and build your apps entirely locally, free of charge and anonymously.

On OS X systems, you can use the NativeScript CLI to develop Android and iOS apps.

* [System Requirements](#system-requirements)
* [Environment Requirements](#environment-requirements)
* [Setup](#setup)

## System Requirements

* OS X Mavericks or later
* The latest Node.js 0.10.x, 0.12.x, 4.x, or 5.x stable official release
* (Optional) Homebrew to simplify the installation of dependencies
* For iOS development
    * Latest Xcode
    * Command-line tools for Xcode
* For Android development
    * JDK 8 or a later stable official release
    * Android SDK 22 or a later stable official release
    * Android Support Repository
    * Android SDK Build-tools 23.0.0 or a later stable official release
    * (Optional) Genymotion to expand your testing options

### Quick setup

If this is your first time developing a mobile project, consider using the one-liner scripts in this section to effortlessly setup your machine.
If you have experience developing mobile apps, you may skip to the [Environment Requirements](#environment-requirements) section below.

Using Spotlight, search `Terminal` and start it. This opens a console window. Copy and paste this script:

> ruby -e "$(curl -fsSL https://raw.githubusercontent.com/NativeScript/nativescript-cli/production/setup/native-script.rb)"

The script calls some of the commands using `sudo` and you may need to provide your password several times. Note that the script downloads and installs some big dependencies and may take some time to complete.

## Environment Requirements

For Android development

* JAVA_HOME environment variable must be set
* ANDROID_HOME environment variable must be set

## Setup

1. Install [Homebrew](http://brew.sh) to simplify the installation process.

    ```Shell
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
1. Install the latest Node.js stable official release. We recommend using Node.js v4.x

    ```Shell
    brew install homebrew/versions/node4-lts
    ```
1. Install the dependencies for iOS development.
    1. Run the App Store and download and install Xcode 5 or later.
    1. Go to [Downloads for Apple Developers](https://developer.apple.com/downloads/index.action), log in and download and install the **Command Line Tools for Xcode** for your version of OS X and Xcode.
1. Install the dependencies for Android development.
    1. Install [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
        1. Go to [Java SE Downloads](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and click **Download** for JDK.
        1. In the **Java SE Development Kit** section, accept the license agreement and click the download link for Mac OS X.
        1. Wait for the download to complete and install the JDK.
    1. Set the JAVA_HOME system environment variable.
        ```
        export JAVA_HOME=$(/usr/libexec/java_home)
        ```
    1. Install the [Android SDK](http://developer.android.com/sdk/index.html).
        1. In the terminal, run the following command.

            ```Shell
            brew install android-sdk
            ```
        1. Set the ANDROID_HOME system environment variable.
            ```
            export ANDROID_HOME=Path to Android installation directory
            ```
            For example: ANDROID_HOME=/usr/local/Cellar/android-sdk/24/
            > NOTE: This is the directory that contains `tools` and `platform-tools` directories.
        1. Select all packages for the Android 22 SDK, Android SDK Build-tools 23.0.0 or later, Android Support Repository (under Extras) and any other SDKs that you want to install and click **Install**.
           You can use the following command, that will install all required tools:
           ```
           android update sdk --filter tools,platform-tools,android-22,build-tools-23.0.2,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui
           ```
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
1. To check if your system is configured properly, run the following command.

    ```Shell
    tns doctor
    ```

## What's Next

Return to the [introduction]({% slug introduction %}).
