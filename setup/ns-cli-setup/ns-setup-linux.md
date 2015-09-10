---
nav-title: Set Up the NativeScript CLI on Linux
title: Set Up the NativeScript CLI on Linux
description: Configure your Linux system to create, develop and build projects locally with NativeScript.
position: 3
---

# Set Up the NativeScript CLI on Linux

With the open-source [NativeScript Command-Line Interface][NativeScript CLI] and an IDE or text editor of your choice, you can create, develop, store and build your apps entirely locally, free of charge, without an Internet connection and anonymously.

On Linux systems, you can use the NativeScript CLI to develop only Android apps. This limitation is caused by the requirements for iOS development.

* [System Requirements](#system-requirements)
* [Setup](#setup)

## System Requirements

* Ubuntu 14.04 LTS
* Node.js 0.10.26 or a later stable official release except Node.js 0.10.34
* G++ compiler
* JDK 8 or a later stable official release
* Apache Ant 1.8 or later
* Android SDK 19 or later
* (Optional) Genymotion to expand your testing options

## Setup

1. Run the terminal.
1. Install [Node.js](http://nodejs.org).

    > **TIP:** You can follow the instructions provided [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) to install Node.js on your system.
    
1. If you are running on a 64-bit system, install the runtime libraries for the ia32/i386 architecture.

    ```Shell
    sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 libstdc++6:i386
    ```
1. Install the G++ compiler.

    ```Shell
    sudo apt-get install g++
    ```
1. Install [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
    1. Normal installation
    ```Shell
    sudo apt-get install oracle-java8-installer
    ```
	1.If you have problems installing oracle-java8-installer you can take a look here:
	```Shell
    sudo apt-get install python-software-properties
	sudo add-apt-repository ppa:webupd8team/java
	sudo apt-get update
	
	sudo apt-get install oracle-java8-installer
    ```
	After installation if you have multiple installations of java you can choose which to use:
	```Shell
	sudo update-alternatives --config java
	```
1. Install [Gradle 2.3](https://docs.gradle.org/current/userguide/installation.html) or a later stable official release.
    1.Normal installation.
	```Sell
	sudo wget https://services.gradle.org/distributions/gradle-2.3-bin.zip
	sudo unzip gradle-2.3-bin.zip
	```
	1. If not present, add the following file path to the `PATH` system environment variable.

		```
		Path to the bin directory in the Gradle installation folder
		```
		For example: `PATH=...:...:/usr/tools/gradle-2.3/bin`
1. Install the [Android SDK](http://developer.android.com/sdk/index.html).<br/>If you experience issues with the installation, go to [Installing the Android SDK](https://developer.android.com/sdk/installing/index.html?pkg=tools), expand the **Show instructions for all platforms** section, expand the **Troubleshooting Ubuntu** section and review the troubleshooting guide.
    1. Go to [Android Studio and SDK Downloads](https://developer.android.com/sdk/index.html#Other) and in the **SDK Tools Only** section download the package for Linux.
    1. After the download completes, unpack the downloaded archive.
    1. Аdd the following file paths to the `PATH` system environment variable.

        ```
        Path to tools directory in the Android SDK installation folder
        Path to platform-tools directory in the Android SDK installation folder
        ```

        For example: Run the following command `export PATH=${PATH}:/android/sdk/tools:/android/sdk/platform-tools`
    1. Restart the command prompt and run the following command.

        ```
        android update sdk
        ```
    1. Select all packages for the Android 19 SDK and any other SDKs that you want to install and click **Install**.
1. Install Android Support Repository through the android sdk manager.
    1. If you have installed the android sdk manager correctly you can open up command prompt and run the "android" command.
		The android sdk manager windows should pop up and there you can find the Android Support Repository at the bottom and install it.
	1. If you cannot run the android sdk manager with the "android" command, you can find the installation folder of android sdk. From there navigate to "tools" folder, open a terminal and run command "sudo ./android".
1. (Optional) Install Genymotion.<br/>Genymotion is a third-party native emulator.
    1. Go to [Download VirtualBox](https://www.virtualbox.org/wiki/Downloads) and download and install VirtualBox for Linux.
    1. Go to [Get Genymotion](https://www.genymotion.com/#!/download), select Linux and click the download link for Ubuntu.
    1. After the download completes, run the installer and complete the installation.
1. Install the NativeScript CLI.
    1. Run the following command. 
    
        ```Shell
        sudo npm install nativescript -g --unsafe-perm
        ```
    1. Restart the command prompt.
1. To check if your system is configured properly, run the following command.

    ```Shell
    tns doctor
    ```

## What's Next

Create your first [Hello World app with the NativeScript CLI](../../hello-world/hello-world-ns-cli.md).

[NativeScript CLI]: https://www.npmjs.com/package/nativescript
