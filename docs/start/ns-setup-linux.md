---
title: NativeScript Advanced Setup — Linux
description: Review all system requirements needed to build and run NativeScript apps on Linux and follow the walkthrough to learn how to install and configure these dependencies.
position: 50
tags: nativescript setup, nativescript linux, nativescript ubuntu
slug: linux
publish: false
previous_url: /setup/ns-cli-setup/ns-setup-linux
---

# NativeScript Advanced Setup: Linux

This page contains a list of all system requirements needed to build and run NativeScript apps on Linux, as well as a guided walkthrough for getting these requirements in place.

> **NOTE**: On Linux systems you can only use the NativeScript CLI to develop Android apps. This is because the NativeScript CLI uses Xcode to build iOS apps, which is only available on the macOS operating system. 

## System Requirements

* Ubuntu 16.04, 18.04 or 20.04 LTS
* The latest stable official release of Node.js (LTS) [12.x](https://nodejs.org/dist/latest-v12.x/) 
* G++ compiler
* JDK 8
* Android SDK
* Android Support Repository
* (Optional) Google Repository
* Android SDK Build-tools 28.0.3 or a later stable official release

You must also have the following environment variables setup for Android development:

* JAVA_HOME
* ANDROID_HOME
* ANDROID_SDK_ROOT

## Advanced Setup Steps

Complete the following steps to set up NativeScript on your Linux development machine:

1. Install the latest Node.js [12.x](https://nodejs.org/dist/latest-v12.x/) stable official release. 

2. If you are running on a 64-bit system, install the runtime libraries for the ia32/i386 architecture.

    We need to enable i386 support on some platforms
    <pre class="add-copy-button"><code class="language-terminal">sudo dpkg --add-architecture i386
    </code></pre>

    <pre class="add-copy-button"><code class="language-terminal">sudo apt-get update && sudo apt-get upgrade -y
    </code></pre>
    
    - Ubuntu 16.04 &amp; 18.04 LTS base

    <pre class="add-copy-button"><code class="language-terminal">sudo apt-get install lib32z1 lib32ncurses5 libbz2-1.0:i386 libstdc++6:i386
    </code></pre>

    - Ubuntu 20.04 LTS base

    <pre class="add-copy-button"><code class="language-terminal">sudo apt-get install lib32z1 lib32ncurses-dev libbz2-1.0:i386 libstdc++6:i386
    </code></pre>
    
    
3. Install the G++ compiler.

    <pre class="add-copy-button"><code class="language-terminal">sudo apt-get install g++
    </code></pre>

4. Set up [JDK 8] [JDK 8](https://openjdk.java.net/install/).
    1. Run the following commands.

        <pre class="add-copy-button"><code class="language-terminal">
        sudo apt-get install openjdk-8-jdk
        </code></pre>

    2. After installation if you have multiple installations of java you can choose which to use:

        <pre class="add-copy-button"><code class="language-terminal">sudo update-alternatives --config java
        </code></pre>

    3. Set the JAVA_HOME system environment variable. Open `~/.bashrc` 
    
        <pre class="add-copy-button"><code class="language-terminal">nano ~/.bashrc
        </code></pre>
        
        and add the following:
    
        <pre class="add-copy-button"><code class="language-terminal">export JAVA_HOME=$(update-alternatives --query javac | sed -n -e 's/Best: *\(.*\)\/bin\/javac/\1/p')</code></pre>  
        
        You may need to reload the `bashrc`file either by logging out and in again, or by running `source .bashrc` in the terminal from your Home directory.  

5. Install the [Android SDK](http://developer.android.com/sdk/index.html).

    1. We need to create a directory to house the android tooling, on most systems the best place is /usr/local/android however if your prefer to use a different directory structure just replace the directorys with your own directory path.     
    <pre class="add-copy-button"><code class="language-terminal">sudo mkdir -p /usr/local/android/sdk/cmdline-tools && cd /usr/local/android/sdk/cmdline-tools
    </code></pre> 
    
    2. Go to [Android Studio and SDK Downloads](https://developer.android.com/sdk/index.html#Other) and in the **Command line tools only** section download the package for Linux (at the bottom of the page), you should see the latest version and you can then update the following command to be the latest.

    <pre class="add-copy-button"><code class="language-terminal">sudo wget https://dl.google.com/android/repository/commandlinetools-linux-6609375_latest.zip .
    </code></pre>

    3. After the download completes, unzip the file and remove the download using the following command:
    <pre class="add-copy-button"><code class="language-terminal">sudo unzip commandlinetools-linux-6609375_latest.zip && sudo rm commandlinetools-linux-6609375_latest.zip</code></pre>
        
    4. Set the ANDROID_HOME & ANDROID_SDK_ROOT environment variables. Open `~/.bashrc` 

        <pre class="add-copy-button"><code class="language-terminal">nano ~/.bashrc</code></pre>
    
        and add the following:
        <pre><code class="language-terminal">export ANDROID_HOME="/usr/local/android/sdk/"
       export ANDROID_SDK_ROOT="/usr/local/android/sdk/"
       export PATH="${PATH}:${ANDROID_SDK_ROOT}cmdline-tools/tools/:${ANDROID_SDK_ROOT}platform-tools/"</code></pre>
        
     5. Update your current session variables by running:
     <pre><code class="language-terminal">source ~/.bashrc</code></pre>
     or logout from current user and login again so environment variables changes take place.

6. Install all packages for the Android SDK Platform 28, Android SDK Build-Tools 28.0.3 or later, Android Support Repository, Google Repository and any other SDKs that you may need. You can alternatively use the following command, which will install all required packages. In order to install SDK's go to Android Studio -> Settings -> System Settings -> Android SDK -> Mark all the Android versions you would like to support within your project (The API Level column indicates the SDK Platform).

    <pre class="add-copy-button"><code class="language-terminal">sudo $ANDROID_SDK_ROOT/cmdline-tools/tools/bin/sdkmanager "tools" "emulator" "platform-tools" "platforms;android-28" "build-tools;28.0.3" "extras;android;m2repository" "extras;google;m2repository"
    </code></pre>

7. Setup Android Emulators (AVD) by following the article [here]({%slug android-emulators%})
    1. After creating an emulated device you need to:
        * Enable its Developer mode - go to _Settings -> About emulated device_ and tap 7 times on _Build number_
        * Enable USB debugging - go to _Settings -> Developer options_ and enable USB Debugging 

8. Install the NativeScript CLI.
    1. Run the following command.

    Please note this is the recommended, safest and most secure method to install any NPM packages globally.
    <pre class="add-copy-button"><code class="language-terminal">sudo npm install nativescript -g --unsafe-perm
    </code></pre>

9. To check if your system is configured properly, run the following command.

    <pre class="add-copy-button"><code class="language-terminal">tns doctor
    </code></pre>

If you see "No issues were detected" you are good to go!

![NativeScript tns doctor result](../img/start/linux-tns-doctor.png)

## What’s Next

{% angular %}
* [Learn the Basics of the NativeScript CLI](/start/cli-basics)
{% endangular %}

{% nativescript %}
* [Learn the Basics of the NativeScript CLI](/start/cli-basics)
{% endnativescript %}
