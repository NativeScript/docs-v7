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
* Node.js 0.10.26 or a later stable official release except Node.js 0.10.34
* (Optional) Chocolatey to simplify the installation of dependencies
* JDK 7 or a later stable official release
* Apache Ant 1.8 or later
* Android SDK 19 or later
* (Optional) Genymotion to expand your testing options

## Setup

1. Install [Node.js](http://nodejs.org).
    1. Go to [http://nodejs.org](http://nodejs.org) and click **Install**.
    1. If prompted, confirm the download.
    1. After the download completes, run the installer and complete the installation.
1. Install [Chocolatey](https://chocolatey.org) to simplify the installation and configuration of the Android tools and SDKs.
    1. Run the command prompt as an Administrator.
    1. Copy and paste the following script in the command prompt.

        ```Shell
        @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
        ```
    1. Restart the command prompt.
1. Install [JDK 7](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
    1. In the command prompt, run the following command. 
        
        ```Shell
        choco install java
        ```
    1. If not present, create the following environment variable.

        ```
        JAVA_HOME=Path to the jdk* install folder
        ```

        For example: `SET JAVA_HOME=C:\Program Files\Java\jdk1.8.0_11`
1. Install [Apache Ant 1.8](http://ant.apache.org/bindownload.cgi) or a later stable official release.
    1. In the command prompt, run the following command.

        ```Shell
        choco install ant
        ```
    1. If not present, add the following file path to the `PATH` system environment variable.

        ```
        Path to the bin directory in the Apache Ant installation folder
        ```

        For example: `PATH=...;...;C:\tools\apache-ant-1.9.4\bin`
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
    1. Restart the command prompt and run the following command.

        ```
        android update sdk
        ```
    1. Select all packages for the Android 19 SDK and any other SDKs that you want to install and click **Install**.
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

## What's Next

Create your first [Hello World app with the NativeScript CLI](../../hello-world/hello-world-ns-cli.md).

[NativeScript CLI]: https://www.npmjs.com/package/nativescript
