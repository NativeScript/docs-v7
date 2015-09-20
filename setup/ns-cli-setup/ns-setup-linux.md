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
* Node.js 0.10.35 or a later stable 0.x release
* G++ compiler
* JDK 8 or a later stable official release
* Android SDK 22 or a later stable official release
* Gradle 2.3 or a later stable official release
* Android Support Repository
* Android SDK Build-tools 22.0.0 or a later stable official release
* ANDROID_HOME environment variable must be set
* (Optional) Genymotion to expand your testing options

## Setup

1. Run the terminal.
1. Install [Node.js](https://nodejs.org/dist/latest-v0.12.x/).
1. If you are running on a 64-bit system, install the runtime libraries for the ia32/i386 architecture.

    ```Shell
    sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 libstdc++6:i386
    ```
1. Install the G++ compiler.

    ```Shell
    sudo apt-get install g++
    ```
1. Install [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
	1. Run the following commands.

    	```Shell
        sudo apt-get install python-software-properties
    	sudo add-apt-repository ppa:webupd8team/java
    	sudo apt-get update
    	sudo apt-get install oracle-java8-installer
        ```
    1. After installation if you have multiple installations of java you can choose which to use:

    	```Shell
    	sudo update-alternatives --config java
    	```
1. Install [Gradle 2.3](https://docs.gradle.org/current/userguide/installation.html) or a later stable official release.
    1. Run the following commands.

    	```Shell
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
    1. Restart the command prompt.
1. Install the required Android SDKs and the Android Support Repository.

	```Shell
	sudo android update sdk --filter tools,platform-tools,android-22,android-17,build-tools-22.0.1,sys-img-x86-android-22,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui
	```
1. Set ANDROID_HOME system environment variable
    ```
    export ANDROID_HOME=Path to Android installation directory
    ```
    For example: ANDROID_HOME=/android/sdk/
    > NOTE: The home directory is the one that contains `tools` and `platform-tools` directories.
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

Return to the [getting started guide](/getting-started).
