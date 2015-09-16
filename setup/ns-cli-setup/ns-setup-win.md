---
nav-title: Set Up the NativeScript CLI on Windows
title: Set Up the NativeScript CLI on Windows
description: Configure your Windows system to create, develop and build projects locally with NativeScript.
position: 1
---

# Set Up the NativeScript CLI on Windows

With the open-source [NativeScript Command-Line Interface][NativeScript CLI] and an IDE or text editor of your choice, you can create, develop, store and build your apps entirely locally, free of charge, without an Internet connection and anonymously.

On Windows systems, you can use the NativeScript CLI to develop only Android apps. This limitation is caused by the requirements for iOS development.

* [System Requirements](#system-requirements)
* [Setup](#setup)

## System Requirements

* Windows Vista or later
* Node.js 0.10.35 or a later stable 0.x release
* (Optional) Chocolatey to simplify the installation of dependencies
* JDK 8 or a later stable official release
* Android SDK 22 or a later stable official release
* Gradle 2.3 or a later stable official release
* Android Support Repository 21.0.0
* (Optional) Genymotion to expand your testing options

## Setup

1. Install [Node.js](https://nodejs.org/dist/latest-v0.12.x/).
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
    1. If not present, create the following environment variable from a command-prompt, started as administrator.

        ```
        SETX JAVA_HOME "Path to the jdk* install folder" /M
        ```

        For example: `SETX JAVA_HOME C:\Program Files\Java\jdk1.8.0_11 /M`
1. Download and install [Gradle 2.3](https://docs.gradle.org/current/userguide/installation.html) or a later stable official release.
1. If not present, add the following file path to the `PATH` system environment variable.

	```
	Path to the bin directory in the Gradle installation folder
	```

	For example: `PATH=...;...;C:\tools\gradle-2.3\bin`
1. Install the [Android SDK](http://developer.android.com/sdk/index.html).
    1. In the command prompt, run the following command.

        ```Shell
        choco install android-sdk
        ```
    1. If not present, add the following file paths to the `PATH` system environment variable.

        ```
        Path to tools directory in the Android SDK installation folder
        Path to platform-tools directory in the Android SDK installation folder
        ```

        For example: `PATH=...;...;C:\Users\MyUser\AppData\Local\Android\android-sdk\tools;C:\Users\MyUser\AppData\Local\Android\android-sdk\platform-tools`
    1. Restart the command prompt.
1. Install the required Android SDKs and the Android Support Repository.

	```Shell
	echo yes | android update sdk --filter tools,platform-tools,android-22,android-17,build-tools-22.0.1,sys-img-x86-android-22,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui
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

Return to the [getting started guide](/getting-started).
