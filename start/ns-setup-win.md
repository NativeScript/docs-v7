---
title: Set Up Windows
description: Configure your Windows system to create, develop and build projects locally with NativeScript.
position: 3
slug: windows
publish: false
previous_url: /setup/ns-cli-setup/ns-setup-win
---

# Set Up the NativeScript CLI on Windows

With the open-source [NativeScript Command-Line Interface](https://github.com/NativeScript/nativescript-cli) and an IDE or text editor of your choice, you can create, develop, store and build your apps entirely locally, free of charge, without an Internet connection and anonymously.

On Windows systems, you can use the NativeScript CLI to develop only Android apps. This limitation is caused by the requirements for iOS development.

* [System Requirements](#system-requirements)
* [Environment Requirements](#environment-requirements)
* [Setup](#setup)

## System Requirements

* Windows Vista or later
* The latest Node.js 0.10.x, 0.12.x, 4.2.x, or 5.1.x stable official release
* (Optional) Chocolatey to simplify the installation of dependencies
* JDK 8 or a later stable official release
* Android SDK 22 or a later stable official release
* Android Support Repository
* Android SDK Build-tools 22.0.0 or a later stable official release
* (Optional) Genymotion to expand your testing options

## Environment Requirements

For Android development

* JAVA_HOME environment variable must be set
* ANDROID_HOME environment variable must be set

## Setup

1. Install the latest Node.js [0.10.x](https://nodejs.org/dist/latest-v0.10.x/), [0.12.x](https://nodejs.org/dist/latest-v0.12.x/), or [4.2.x](https://nodejs.org/dist/latest-v4.x/) stable official release.
1. Install [Chocolatey](https://chocolatey.org) to simplify the installation and configuration of the Android tools and SDKs.
    1. Run the command prompt as an Administrator.
    1. Copy and paste the following script in the command prompt.

        ```Shell
        @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
        ```
    1. Restart the command prompt.
1. Install [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
    1. In the command prompt, run the following command.

        ```Shell
        choco install jdk8
        ```
    1. If not present, create the following environment variable from a command-prompt, started as an administrator.

        ```
        SETX JAVA_HOME "Path to the jdk* install folder" /M
        ```

        For example: `SETX JAVA_HOME "C:\Program Files\Java\jdk1.8.0_65" /M`
1. Install the [Android SDK](http://developer.android.com/sdk/index.html).
    1. In the command prompt, run the following command.

        ```Shell
        choco install android-sdk
        ```
    1. If not present, create the following environment variable from a command-prompt, started as an administrator.

        ```
        SETX ANDROID_HOME "Path to the Android SDK install folder" /M
        ```

        For example: `SETX ANDROID_HOME "C:\Program Files (x86)\Android\android-sdk" /M`
    1. Restart the command prompt.
1. Install the required Android SDKs and the Android Support Repository.

	```Shell
	echo yes | %ANDROID_HOME%\tools\android update sdk --filter tools,platform-tools,android-22,build-tools-22.0.1,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui
	```
1. (Optional) Install Genymotion.<br/>Genymotion is a third-party native emulator.
    1. Go to [Get Genymotion](https://www.genymotion.com/#!/download), select Windows and click **Get Genymotion**.<br/>You might want to download the larger archive which contains VirtualBox.
    1. If prompted, confirm the download.
    1. After the download completes, run the installer and complete the installation.
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
