---
nav-title: Set Up the AppBuilder Windows Client
title: Set Up the AppBuilder Windows Client
description: Begin NativeScript development in a few minutes on your Windows system and take advantage of the AppBuilder cloud services.
position: 2
---

# Set Up the AppBuilder Windows Client

With the [AppBuilder Windows client](http://www.telerik.com/appbuilder/windows-client), you can create, develop, build and test NativeScript apps from the convenience of your Windows desktop. This IDE option provides extensive coding and testing capabilities such as deployment and debugging on devices and in the native emulator.

With this IDE, you can develop for Android and iOS on Windows systems.

* [System Requirements](#system-requirements)
* [Setup](#setup)

## System Requirements

* Internet connection
* Telerik account
* Operating systems
    * Windows 8.x
    * Windows 7
    * Windows Vista SP1 or later
    * Windows XP SP3
* [Microsoft .NET Framework 4](http://www.microsoft.com/en-us/download/details.aspx?id=17851), updated to [this version](http://support.microsoft.com/kb/2468871/en-us), or later
* (Optional) For iOS development
    * (Latest official) iTunes
* (Optional) For Android development with the native emulators
    * (Optional) Chocolatey to simplify the installation of dependencies
    * Android device drivers for your device
    * JDK 7 or a later stable official release
    * Android SDK 19 or later

## Setup

1. In your browser, navigate to [https://platform.telerik.com](https://platform.telerik.com) and log in.
1. If you do not have a Telerik account, you can log in with a social provider of your choice and begin a Telerik Platform trial.<br/>With the Telerik Platform trial, you can use the AppBuilder Windows client.
1. Install [iTunes](http://www.apple.com/itunes/).
    1. Go to [Download iTunes](http://www.apple.com/itunes/download/), fill in the form and click **Download Now**.
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

        For example: `JAVA_HOME=C:\Program Files\Java\jdk1.8.0_11`
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
1. Install the [AppBuilder Windows client](http://www.telerik.com/appbuilder/windows-client).
    1. In your browser, navigate to [https://platform.telerik.com](https://platform.telerik.com) and log in.
    1. In the title bar, click **Getting Started** and select **Downloads**.
    1. Click **AppBuilder NativeScript**.
    1. Click **Download** for AppBuilder Windows client.
    1. Double-click the downloaded <code>setup.exe</code> bootstrapper, click **Run** and wait for the installer to verify that your system meets the system requirements.
    1. Click **Install** and wait for the installation to complete.

## What's Next

Create your first [Hello World app with AppBuilder](../../hello-world/hello-world-appbuilder.md).
