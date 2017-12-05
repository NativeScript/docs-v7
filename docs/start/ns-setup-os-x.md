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
    * JDK 8
    * Android SDK 22 or a later stable official release
    * Android Support Repository
    * (Optional) Google Repository
    * Android SDK Build-tools 25.0.2 or a later stable official release

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
    1. Install [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
        1. Go to [Java SE Downloads](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and click **Download** for JDK.
        1. In the **Java SE Development Kit** section, accept the license agreement and click the download link for macOS.
        1. Wait for the download to complete and install the JDK.
    1. Set the JAVA_HOME system environment variable.

        <pre class="add-copy-button"><code class="language-terminal">export JAVA_HOME=$(/usr/libexec/java_home)
        </code></pre>

    1. Install the [Android SDK](http://developer.android.com/sdk/index.html).
        1. In the terminal, run the following commands:

            <pre class="add-copy-button"><code class="language-terminal">brew cask install android-sdk
            </code></pre>

        1. Next, run the following command to set the ANDROID_HOME system environment variable:

            <pre class="add-copy-button"><code class="language-terminal">export ANDROID_HOME=/usr/local/share/android-sdk
            </code></pre>

            <blockquote><b>NOTE</b>: This is the directory that contains the <code>tools</code> and <code>platform-tools</code> directories.</blockquote>
            <blockquote><b>NOTE</b>: In order to persist these variables after your terminal session is closed, they have to be persisted in your shell profile file (e.g. <code>~/.bash_profile</code> if you are using Bash, <code>~/.zprofile if you are using Zsh)</blockquote>            

        1. In addition, install all packages for the Android SDK Platform 25, Android SDK Build-Tools 25.0.2 or later, Android Support Repository, Google Repository and any other SDKs that you may need. You can alternatively use the following command, which will install all required packages.

           <pre class="add-copy-button"><code class="language-terminal">$ANDROID_HOME/tools/bin/sdkmanager "tools" "platform-tools" "platforms;android-25" "build-tools;25.0.2" "extras;android;m2repository" "extras;google;m2repository"
           </code></pre>

1. Setup Android Emulators (AVD) by following the article [here]({%slug android-emulators%})

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
