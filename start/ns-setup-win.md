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

> **NOTE**: On Windows systems you can only use the NativeScript CLI to develop Android apps. This is because the NativeScript CLI uses Xcode to build iOS apps, which is only available on the OS X operating system. If you’re interested in building iOS apps on Windows, you may want to try out the [Telerik Platform](http://www.telerik.com/platform). The Telerik Platform provides robust tooling for NativeScript apps, including a service that performs iOS and Android builds in the cloud, removing the need to complete these system requirements, and allowing you to build for iOS on Windows.

## System Requirements

* Windows 7 Service Pack 1 or later
* The latest Node.js 0.10.x, 0.12.x, 4.x, 5.x, or 6.x stable official release
* (Optional) Chocolatey to simplify the installation of dependencies
* JDK 8 or a later stable official release
* Android SDK 22 or a later stable official release
* Local Maven repository for Support Libraries
* Android SDK Build-tools 23.0.3 or a later stable official release
* (Optional) Genymotion to expand your testing options

You must also have the following two environment variables setup for Android development, which will automatically be added for you as part of the installation:

* JAVA_HOME
* ANDROID_HOME

## Advanced Setup Steps

Complete the following steps to set up NativeScript on your Windows development machine:

1. Install [Chocolatey](https://chocolatey.org) to simplify the installation and configuration of the Android tools and SDKs.
    1. Run the command prompt as an Administrator.
    1. Copy and paste the following script in the command prompt.

        <pre class="add-copy-button"><code class="language-terminal">@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
        </code></pre>
    1. Restart the command prompt.

1. Install the [Node.js LTS (Long Term Support) Version](https://nodejs.org/). Currently the LTS version is Node.js v4.x.

    1. In the command prompt, run the following command.

        <pre class="add-copy-button"><code class="language-terminal">choco install nodejs -y -version 4.6.0
        </code></pre>

1. Install [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or a later stable official release.
    1. In the command prompt, run the following command.

        <pre class="add-copy-button"><code class="language-terminal">choco install jdk8 -y
        </code></pre>

1. Install the [Android SDK](http://developer.android.com/sdk/index.html).
    1. In the command prompt, run the following command.

        <pre class="add-copy-button"><code class="language-terminal">choco install android-sdk -y
        </code></pre>

    1. Restart the command prompt.

1. Install the required Android SDKs and the Local Maven repository for Support Libraries.

    <pre class="add-copy-button"><code class="language-terminal">echo yes | "%ANDROID_HOME%\tools\android" update sdk --filter tools,platform-tools,android-23,build-tools-23.0.3,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui
    </code></pre>

1. (Optional) Install Genymotion.<br/>Genymotion is a third-party native emulator.
    1. Go to [Get Genymotion](https://www.genymotion.com/#!/download), select Windows and click **Get Genymotion**.<br/>You might want to download the larger archive which contains VirtualBox.
    1. If prompted, confirm the download.
    1. After the download completes, run the installer and complete the installation.

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
