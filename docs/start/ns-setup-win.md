---
title: NativeScript Advanced Setup — Windows
description: Follow this walkthrough to learn how to install the NativeScript requirements in order to start creating, developing and building mobile apps on Windows. 
position: 30
tags: nativescript setup, nativescript windows setup
slug: windows
publish: false
previous_url: /setup/ns-cli-setup/ns-setup-win,/start/ns-setup-installer
---

# NativeScript Advanced Setup: Windows

This page contains a guided walkthrough for installing NativeScript requirements and start building and running NativeScript apps on Windows.

> **NOTE**: On Windows systems you can only use the NativeScript CLI to develop Android apps. This is because the NativeScript CLI uses Xcode to build iOS apps, which is only available on the macOS operating system. If you’re interested in building iOS apps on Windows, you may want to try out [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick). NativeScript Sidekick provides robust tooling for NativeScript apps, including a service that performs iOS and Android builds in the cloud, removing the need to complete these system requirements, and allowing you to build for iOS on Windows.

## Prerequisites
* Windows 7 Service Pack 1 or later

## Setup Steps

Complete the following steps to set up NativeScript on your Windows development machine:

1. Install [Chocolatey](https://chocolatey.org) to simplify the installation and configuration of the requirements.
    - Run the command prompt as an Administrator.
    - Copy and paste the following script in the command prompt.

        <pre class="add-copy-button"><code class="language-terminal">@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
        </code></pre>
    - Restart the command prompt.

2. Install [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html) (required to debug NativeScript apps)
    - In the command prompt, run the following command.

        <pre class="add-copy-button"><code class="language-terminal">choco install googlechrome -y
        </code></pre>

3. Install the latest [Node.js LTS](https://nodejs.org/en/)

    - In the command prompt, run the following command.

        <pre class="add-copy-button"><code class="language-terminal">choco install nodejs-lts -y
        </code></pre>

4. Set up [JDK 8](https://openjdk.java.net/install/)
    - In the command prompt, run the following command.

        <pre class="add-copy-button"><code class="language-terminal">choco install adoptopenjdk --version 8.192
        </code></pre>

5. Install the [Android SDK](http://developer.android.com/sdk/index.html).
    - In the command prompt, run the following command.

        <pre class="add-copy-button"><code class="language-terminal">choco install android-sdk -y
        </code></pre>

    - Restart the command prompt.

6. Install all packages for the Android SDK Platform 28, Android SDK Build-Tools 28.0.3 or later, Android Support Repository, Google Repository and any other SDKs that you may need. You can alternatively use the following command, which will install all required packages.

    <pre class="add-copy-button"><code class="language-terminal">"%ANDROID_HOME%\tools\bin\sdkmanager" "emulator" "platform-tools" "platforms;android-28" "build-tools;28.0.3" "extras;android;m2repository" "extras;google;m2repository"
    </code></pre>

7. Setup Android Emulators (AVD) by following the article [here]({%slug android-emulators%})

8. Install the NativeScript CLI.
    - Run the following command.

        <pre class="add-copy-button"><code class="language-terminal">npm i -g nativescript
        </code></pre>

    - Restart the command prompt.

9.  To check if your system is configured properly, run the following command.

    <pre class="add-copy-button"><code class="language-terminal">tns doctor
    </code></pre>

If you see "No issues were detected" you are good to go!

![NativeScript tns doctor result](../img/start/window-tns-doctor.png)

## What’s Next

{% angular %}
* [Learn the Basics of the NativeScript CLI](/start/cli-basics)
{% endangular %}

{% nativescript %}
* [Learn the Basics of the NativeScript CLI](/start/cli-basics)
{% endnativescript %}
