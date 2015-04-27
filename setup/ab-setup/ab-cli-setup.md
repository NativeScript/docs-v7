---
nav-title: Set Up the AppBuilder Command-Line Interface
title: Set Up the AppBuilder Command-Line Interface
description: Begin NativeScript development in a few minutes in your preferred IDE and take advantage of the AppBuilder cloud services.
position: 4
---

# Set Up the AppBuilder Command-Line Interface

With the [AppBuilder command-line interface](http://www.telerik.com/appbuilder/command-line-interface) you can use the cloud services provided by AppBuilder paired with an IDE or text editor of your choice. If you are an avid Sublime Text user, you can pair the AppBuilder CLI with the [AppBuilder package for Sublime Text](http://www.telerik.com/appbuilder/sublime-text-package).

With this IDE, you can develop for Android and iOS on Windows, OS X or Linux.

* [Set Up on Windows](#set-up-on-windows)
* [Set Up on OS X](#set-up-on-os-x)
* [Set Up on Linux](#set-up-on-linux)

## Set Up on Windows

**System Requirements**

* Telerik account
* Windows 7 or later
* .NET 4.0 or later
* Node.js
    * (Windows 7 systems): Node.js 0.10.26 or a later stable official release except 0.10.34<br/>A [known issue](https://github.com/joyent/node/issues/8894) prevents the {{site.ab-cli}} from working properly with Node.js 0.10.34.
    * (Windows 8 and later systems): Node.js 0.12.0 or a later stable official release<br/>A [known issue](https://github.com/SBoudrias/Inquirer.js/issues/235) in Inquirer.js prevents the interactive prompts from working properly in `cmd` shells on Windows 8 or later systems with Node.js 0.10.x.
* (Optional) For iOS development
    * (Latest official) iTunes<br/>The bitness of Node.js and iTunes must match.
* (Optional) For Android development with the native emulators
    * (Optional) Chocolatey to simplify the installation of dependencies
    * Android device drivers for your device
    * JDK 7 or a later stable official release
    * Android SDK 19 or later
    * (Optional) Genymotion

**Setup**

1. In your browser, navigate to [https://platform.telerik.com](https://platform.telerik.com) and log in.
1. If you do not have a Telerik account, you can log in with a social provider of your choice and begin a Telerik Platform trial.<br/>With the Telerik Platform trial, you can use the AppBuilder CLI.
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
1. (Optional) Install Genymotion.<br/>Genymotion is a third-party native emulator.
    1. Go to [Get Genymotion](https://www.genymotion.com/#!/download), select Windows and click **Get Genymotion**.<br/>You might want to download the larger archive which contains VirtualBox.
    1. If prompted, confirm the download.
    1. After the download completes, run the installer and complete the installation.
1. Install the AppBuilder CLI.
    1. Run the following command. 
    
        ```Shell
        npm i -g appbuilder
        ```
    1. Restart the command prompt.

## Set Up on OS X

**System Requirements**

* Telerik account
* OS X Mavericks or later
* Node.js 0.10.26 or a later stable official release except Node.js 0.10.34
* (Optional) Homebrew to simplify the installation of dependencies
* For iOS development
    * Xcode 5 or later
    * (Latest official) iTunes
* For Android development
    * JDK 7 or a later stable official release
    * Android SDK 19 or later
    * (Optional) Genymotion to expand your testing options

**Setup**

1. In your browser, navigate to [https://platform.telerik.com](https://platform.telerik.com) and log in.
1. If you do not have a Telerik account, you can log in with a social provider of your choice and begin a Telerik Platform trial.<br/>With the Telerik Platform trial, you can use the AppBuilder CLI.
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
    1. Verify that you have updated iTunes to the latest version.
1. Install the dependencies for Android development.
    1. Install [JDK 7](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
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

            For example: Run the following command `export PATH=${PATH}:/Applications/Android Studio.app/sdk/tools:/Applications/Android Studio.app/sdk/platform-tools`
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
1. Install the AppBuilder CLI.
    1. Run the following command. 
    
        ```Shell
        npm i -g appbuilder
        ```
    1. Restart the command prompt.

## Set Up on Linux

**System Requirements**

* Telerik account
* Ubuntu 14.04 LTS
* Node.js 0.10.26 or a later stable official release except Node.js 0.10.34
* G++ compiler
* (Optional) For Android development with the native emulators
    * JDK 7 or a later stable official release
    * Android SDK 19 or later
    * (Optional) Genymotion to expand your testing options

**Setup**

1. In your browser, navigate to [https://platform.telerik.com](https://platform.telerik.com) and log in.
1. If you do not have a Telerik account, you can log in with a social provider of your choice and begin a Telerik Platform trial.<br/>With the Telerik Platform trial, you can use the AppBuilder CLI.
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
1. Install [JDK 7](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
    
    ```Shell
    sudo apt-get install oracle-java8-installer
    ```
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
1. (Optional) Install Genymotion.<br/>Genymotion is a third-party native emulator.
    1. Go to [Download VirtualBox](https://www.virtualbox.org/wiki/Downloads) and download and install VirtualBox for Linux.
    1. Go to [Get Genymotion](https://www.genymotion.com/#!/download), select Linux and click the download link for Ubuntu.
    1. After the download completes, run the installer and complete the installation.
1. Install the AppBuilder CLI.
    1. Run the following command. 
    
        ```Shell
        sudo npm i -g appbuilder
        ```
    1. Restart the command prompt.

## What's Next

Create your first [Hello World app with AppBuilder](../../hello-world/hello-world-appbuilder.md).
