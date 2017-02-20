---
title: NativeScript Advanced Setup—macOS
description: Configure your macOS system to create, develop and build projects locally with NativeScript.
position: 40
publish: false
slug: osx
previous_url: /setup/ns-cli-setup/ns-setup-os-x
---

# NativeScript Advanced Setup: macOS

This page contains a list of all system requirements needed to build and run NativeScript apps on macOS, as well as a guided walkthrough for getting these requirements in place. On macOS systems, you can use the NativeScript CLI to develop Android and iOS apps.

* [System Requirements](#system-requirements)
* [Advanced Setup Steps](#advanced-setup-steps)

## System Requirements

* macOS Mavericks or later
* The latest stable official release of Node.js (LTS) [6.x](https://nodejs.org/dist/latest-v6.x/) 
* (Optional) Homebrew to simplify the installation of dependencies
* For iOS development
    * Latest Xcode
    * Command-line tools for Xcode
    * xcodeproj ruby gem
    * CocoaPods
    * (Optional) xcproj command line tool
* For Android development
    * JDK 8 or a later stable official release
    * Android SDK 22 or a later stable official release
    * Local Maven repository for Support Libraries
    * Android SDK Build-tools 25.0.2 or a later stable official release
    * (Optional) Genymotion to expand your testing options

You must also have the following two environment variables setup for Android development:

* JAVA_HOME
* ANDROID_HOME

## Advanced Setup Steps

Complete the following steps to setup NativeScript on your macOS development machine:

1. Install [Homebrew](http://brew.sh) to simplify the installation process.

    <pre class="add-copy-button"><code class="language-terminal">ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    </code></pre>

1. Install the latest Node.js [6.x](https://nodejs.org/dist/latest-v6.x/) or [7.x](https://nodejs.org/dist/latest-v7.x/) stable official release. We recommend using Node.js v6.x.

    <pre class="add-copy-button"><code class="language-terminal">brew update
    </code></pre>

    <pre class="add-copy-button"><code class="language-terminal">brew install node@6
    </code></pre>

1. Install the dependencies for iOS development.
    1. Run the App Store and download and install Xcode 5 or later.
    1. Go to [Downloads for Apple Developers](https://developer.apple.com/downloads/index.action), log in and download and install the **Command Line Tools for Xcode** for your version of macOS and Xcode.
    1. Install the [xcodeproj ruby gem](https://rubygems.org/gems/xcodeproj/versions/0.28.2) with the following command.

        <pre class="add-copy-button"><code class="language-terminal">sudo gem install xcodeproj
        </code></pre>

    1. Install [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)

        <pre class="add-copy-button"><code class="language-terminal">sudo gem install cocoapods
        </code></pre>

    1. (Optional) If you are using Xcode 7.3 as well as an older version of CocoaPods (0.39.0 or earlier), you must install the `xcproj` command-line tool by running `brew install xcproj` in your terminal. You can check your CocoaPods version with pod --version.

        <pre class="add-copy-button"><code class="language-terminal">brew install xcproj
        </code></pre>

1. Install the dependencies for Android development.
    1. Install [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
        1. Go to [Java SE Downloads](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and click **Download** for JDK.
        1. In the **Java SE Development Kit** section, accept the license agreement and click the download link for Mac macOS.
        1. Wait for the download to complete and install the JDK.
    1. Set the JAVA_HOME system environment variable.

        <pre class="add-copy-button"><code class="language-terminal">export JAVA_HOME=$(/usr/libexec/java_home)
        </code></pre>

    1. Install the [Android SDK](http://developer.android.com/sdk/index.html).
        1. In the terminal, run the following commands:

            <pre class="add-copy-button"><code class="language-terminal">brew install android-sdk
            </code></pre>

        1. Next, run the following command to set the ANDROID_HOME system environment variable:

            <pre class="add-copy-button"><code class="language-terminal">export ANDROID_HOME=/usr/local/opt/android-sdk
            </code></pre>

            <blockquote><b>NOTE</b>: This is the directory that contains the <code>tools</code> and <code>platform-tools</code> directories.</blockquote>

        1. Select all packages for the Android 22 SDK, Android SDK Build-tools 23.0.3 or later, Local Maven repository for Support Libraries (under Extras) and any other SDKs that you want to install and click **Install**. You can alternatively use the following command, which will install all required tools:

           <pre class="add-copy-button"><code class="language-terminal">android update sdk --filter tools,platform-tools,android-23,build-tools-23.0.3,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui
           </code></pre>

1. (Optional) Install Genymotion.<br/>Genymotion is a third-party native emulator.
    1. Go to [Download VirtualBox](https://www.virtualbox.org/wiki/Downloads) and download and install VirtualBox for macOS.
    1. Go to [Get Genymotion](https://www.genymotion.com/#!/download), select Mac and click **Get Genymotion**.
    1. After the download completes, run the installer and complete the installation.
    1. Add the following file paths to the `PATH` system environment variable.

        <pre><code class="language-terminal">Path to the MacOS directory in the Contents directory in the Genymotion Shell app
        Path to the MacOS directory in the Contents directory in the Genymotion app
        </code></pre>

        For example: Run the following command `export PATH=$PATH:/Applications/Genymotion\ Shell.app/Contents/MacOS/:/Applications/Genymotion.app/Contents/MacOS/`
   1. Go to the settings tab inside Genymotion, navigate to ADB and change the ADB tool connection settings to custom. Enter the path of your Android SDK:

        <pre><code class="language-terminal">Android SDK: /usr/local/opt/android-sdk</code></pre>

1. Install the NativeScript CLI.
    1. Run the following command.

        <pre class="add-copy-button"><code class="language-terminal">npm i -g nativescript
        </code></pre>

    1. Restart the command prompt.

1. To check if your system is configured properly, run the following command.

    <pre class="add-copy-button"><code class="language-terminal">tns doctor
    </code></pre>

## What’s Next

* [Return to the JavaScript tutorial](http://docs.nativescript.org/tutorial/chapter-1#11-install-nativescript-and-configure-your-environment)
* [Return to the TypeScript & Angular tutorial](http://docs.nativescript.org/angular/tutorial/ng-chapter-1#11-install-nativescript-and-configure-your-environment)
