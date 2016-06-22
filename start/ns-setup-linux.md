---
title: NativeScript Advanced Setup—Linux
description: Configure your Linux system to create, develop and build projects locally with NativeScript.
position: 5
slug: linux
publish: false
previous_url: /setup/ns-cli-setup/ns-setup-linux
---

# NativeScript Advanced Setup: Linux

This page contains a list of all system requirements needed to build and run NativeScript apps on Linux, as well as a guided walkthrough for getting these requirements in place.

* [System Requirements](#system-requirements)
* [Advanced Setup Steps](#advanced-setup-steps)

> **NOTE**: On Linux systems you can only use the NativeScript CLI to develop Android apps. This is because the NativeScript CLI uses Xcode to build iOS apps, which is only available on the OS X operating system. If you’re interested in building iOS apps on Linux, you may want to try out the [Telerik Platform](http://www.telerik.com/platform). The Telerik Platform provides robust tooling for NativeScript apps, including a service that performs iOS and Android builds in the cloud, removing the need to complete these system requirements, and allowing you to build for iOS on Linux.

## System Requirements

* Ubuntu 14.04 LTS
* The latest Node.js 0.10.x, 0.12.x, 4.x, or 5.x stable official release
* G++ compiler
* JDK 8 or a later stable official release
* Android SDK 22 or a later stable official release
* Local Maven repository for Support Libraries
* Android SDK Build-tools 23.0.3 or a later stable official release
* (Optional) Genymotion to expand your testing options

You must also have the following two environment variables setup for Android development:

* JAVA_HOME
* ANDROID_HOME

## Advanced Setup Steps

Complete the following steps to set up NativeScript on your Linux development machine:

1. Install the latest Node.js [0.10.x](https://nodejs.org/dist/latest-v0.10.x/), [0.12.x](https://nodejs.org/dist/latest-v0.12.x/), or [4.x](https://nodejs.org/dist/latest-v4.x/) stable official release.

1. If you are running on a 64-bit system, install the runtime libraries for the ia32/i386 architecture.

    <pre class="add-copy-button"><code class="language-terminal">sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 libstdc++6:i386
    </code></pre>

1. Install the G++ compiler.

    <pre class="add-copy-button"><code class="language-terminal">sudo apt-get install g++
    </code></pre>

1. Install [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
    1. Run the following commands.

        <pre class="add-copy-button"><code class="language-terminal">sudo apt-get install python-software-properties
        sudo add-apt-repository ppa:webupd8team/java
        sudo apt-get update
        sudo apt-get install oracle-java8-installer
        </code></pre>

    1. After installation if you have multiple installations of java you can choose which to use:

        <pre class="add-copy-button"><code class="language-terminal">sudo update-alternatives --config java
        </code></pre>

    1. Set the JAVA_HOME system environment variable.

        <pre class="add-copy-button"><code class="language-terminal">export JAVA_HOME=$(update-alternatives --query javac | sed -n -e 's/Best: *\(.*\)\/bin\/javac/\1/p')
        </code></pre>

1. Install the [Android SDK](http://developer.android.com/sdk/index.html).<br/>If you experience issues with the installation, go to [Installing the Android SDK](https://developer.android.com/sdk/installing/index.html?pkg=tools), expand the **Show instructions for all platforms** section, expand the **Troubleshooting Ubuntu** section and review the troubleshooting guide.
    1. Go to [Android Studio and SDK Downloads](https://developer.android.com/sdk/index.html#Other) and in the **SDK Tools Only** section download the package for Linux.
    1. After the download completes, unpack the downloaded archive.
    1. Set the ANDROID_HOME system environment variable.
        <pre><code class="language-terminal">export ANDROID_HOME=Path to Android installation directory
        </code></pre>
        For example: ANDROID_HOME=/android/sdk/
        <blockquote><b>NOTE</b>: This is the directory that contains the <code>tools</code> and <code>platform-tools</code> directories.</blockquote>

1. Install the required Android SDKs and the Local Maven repository for Support Libraries.

    <pre class="add-copy-button"><code class="language-terminal">sudo $ANDROID_HOME/tools/android update sdk --filter tools,platform-tools,android-23,build-tools-23.0.3,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui
    </code></pre>

1. (Optional) Install Genymotion.<br/>Genymotion is a third-party native emulator.
    1. Go to [Download VirtualBox](https://www.virtualbox.org/wiki/Downloads) and download and install VirtualBox for Linux.
    1. Go to [Get Genymotion](https://www.genymotion.com/#!/download), select Linux and click the download link for Ubuntu.
    1. After the download completes, run the installer and complete the installation.

1. Install the NativeScript CLI.
    1. Run the following command.

    <pre class="add-copy-button"><code class="language-terminal">sudo npm install nativescript -g --unsafe-perm
    </code></pre>

    1. Restart the command prompt.

1. To check if your system is configured properly, run the following command.

    <pre class="add-copy-button"><code class="language-terminal">tns doctor
    </code></pre>

## What’s Next

* [Return to the JavaScript tutorial](http://docs.nativescript.org/tutorial/chapter-1#11-install-nativescript-and-configure-your-environment)
* [Return to the TypeScript & Angular tutorial](http://docs.nativescript.org/angular/tutorial/ng-chapter-1#11-install-nativescript-and-configure-your-environment)
