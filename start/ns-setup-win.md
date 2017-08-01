---
title: NativeScript Advanced Setup—Windows
description: Configure your Windows system to create, develop and build projects locally with NativeScript.
position: 30
slug: windows
publish: false
previous_url: /setup/ns-cli-setup/ns-setup-win
---

# NativeScript Advanced Setup: Windows

This page contains a list of all system requirements needed to build and run NativeScript apps on Windows, as well as a guided walkthrough for getting these requirements in place.

* [System Requirements](#system-requirements)
* [Advanced Setup Steps](#advanced-setup-steps)

> **NOTE**: On Windows systems you can only use the NativeScript CLI to develop Android apps. This is because the NativeScript CLI uses Xcode to build iOS apps, which is only available on the macOS operating system. If you’re interested in building iOS apps on Windows, you may want to try out the public preview of [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick). NativeScript Sidekick provides robust tooling for NativeScript apps, including a service that performs iOS and Android builds in the cloud, removing the need to complete these system requirements, and allowing you to build for iOS on Windows.

## System Requirements

* Windows 7 Service Pack 1 or later
* The latest stable official release of Node.js (LTS) [6.x](https://nodejs.org/dist/latest-v6.x/) 
* (Optional) Chocolatey to simplify the installation of dependencies
* JDK 8 or a later stable official release
* Android SDK 22 or a later stable official release
* Android Support Repository
* (Optional) Google Repository
* Android SDK Build-tools 25.0.2 or a later stable official release
* Set up Android virtual devices to expand your testing options

You must also have the following two environment variables setup for Android development, which will automatically be added for you as part of the installation:

* JAVA_HOME
* ANDROID_HOME

## Advanced Setup Steps

Complete the following steps to set up NativeScript on your Windows development machine:

1. Install [Chocolatey](https://chocolatey.org) to simplify the installation and configuration of the requirements.
    - Run the command prompt as an Administrator.
    - Copy and paste the following script in the command prompt.

        <pre class="add-copy-button"><code class="language-terminal">@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
        </code></pre>
    - Restart the command prompt.

2. Install the latest Node.js [6.x](https://nodejs.org/dist/latest-v6.x/) or [7.x](https://nodejs.org/dist/latest-v7.x/) stable official release. We recommend using Node.js v4.x.

    - In the command prompt, run the following command.

        <pre class="add-copy-button"><code class="language-terminal">choco install nodejs-lts -y
        </code></pre>

3. Install [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
    - In the command prompt, run the following command.

        <pre class="add-copy-button"><code class="language-terminal">choco install jdk8 -y
        </code></pre>

4. Install the [Android SDK](http://developer.android.com/sdk/index.html).
    - In the command prompt, run the following command.

        <pre class="add-copy-button"><code class="language-terminal">choco install android-sdk -y
        </code></pre>

    - Restart the command prompt.

5. Install all packages for the Android SDK Platform 25, Android SDK Build-Tools 25.0.2 or later, Android Support Repository, Google Repository and any other SDKs that you may need. You can alternatively use the following command, which will install all required packages.

    <pre class="add-copy-button"><code class="language-terminal">"%ANDROID_HOME%\tools\bin\sdkmanager" "tools" "platform-tools" "platforms;android-25" "build-tools;25.0.2" "extras;android;m2repository" "extras;google;m2repository"
    </code></pre>

6. Install Android virtual devices (AVDs)
    - Go to [Setup Android emulators](https://docs.nativescript.org/tooling/android-virtual-devices) 
    - Follow the steps to create and start AVD with enabled HAXM.

    Alternatively a [Visual Studio Emulator for Android](https://www.visualstudio.com/vs/msft-android-emulator/) can be used.

7. Install the NativeScript CLI.
    - Run the following command.

        <pre class="add-copy-button"><code class="language-terminal">npm i -g nativescript
        </code></pre>

    - Restart the command prompt.

8. To check if your system is configured properly, run the following command.

    <pre class="add-copy-button"><code class="language-terminal">tns doctor
    </code></pre>

## What’s Next

* [Return to the JavaScript tutorial](http://docs.nativescript.org/tutorial/chapter-1#11-install-nativescript-and-configure-your-environment)
* [Return to the TypeScript & Angular tutorial](http://docs.nativescript.org/angular/tutorial/ng-chapter-1#11-install-nativescript-and-configure-your-environment)
