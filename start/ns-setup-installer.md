---
title: NativeScript Windows Setup Installer
description: Configure your Windows system.
position: 60
slug: windows-installer
publish: false
---

# NativeScript CLI installer

## Installation

Install the latest version of NativeScript CLI and its missing prerequisites for Windows OS via an executable installer.

[Download Installer](https://www.nativescript.org/docs/default-source/default-document-library/nativescript-cli-setup-wix.exe)

> **WARNING**:
> * The NativeScript Windows installer only works on machines that do not currently have an Android SDK installed. If you’re working on a machine with Android SDKs already in place, go through the manual installation steps on [this page](https://docs.nativescript.org/start/ns-setup-win) to set up NativeScript.
> * The NativeScript Windows installer can **not** be used to update existing NativeScript installations. To get the latest version of NativeScript, refer to our article on [updating your NativeScript versions](http://docs.nativescript.org/releases/upgrade-instructions).

### Prerequisites

The installation requires .NET Framework 4 and Windows 7 SP1 or later.

In case .NET Framework 4 is missing the installer offers to download and install it.

![](../img/start/installer-001.png "NativeScript CLI setup requires .NET Framework")

In case the OS prerequisite is not met, a message pops up and the installer is shut down.

![](../img/start/installer-002.png "Not supported operating system")

### Welcome Screen

![](../img/start/installer-003.png "Welcome")

The welcome screen describes what will be done by the installer. It also allows the user to review the GitHub repository and the license agreement of the product.

- _**I Agree – Continue**_ button proceeds to the next step of the setup wizard.

- _**Cancel**_ button opens a dialog to confirm the cancelation. If &quot;Yes&quot; is clicked the setup is canceled and the application is closed. If &quot;No&quot; is clicked the dialog is closed and the user can continue with the setup.

When there is no Internet connection an appropriate text appears on the page and the &quot;I Agree – Continue&quot; button is disabled.

### Requirements Screen

Displays all the requirements for NativeScript CLI and their status – whether they are installed or need additional setup:

- Java Development Kit 1.8 or later
- Node.js 6 LTS or later
- Android SDK

![](../img/start/installer-006.png "Requirements")

License information about the prerequisites that are about to be installed is shown when the &quot;Install&quot; button is enabled.

#### Java Development Kit

Shows whether a supported JDK version is installed on the machine. If no such version detected a &quot;Supported JDK version not found&quot; message appears with information about where it can be downloaded from. The &quot;Install&quot; button is disabled.

When supported JDK version is detected, the Install button is enabled and the user can proceed. An additional setup action is shown in case the `JAVA_HOME` environment variable is not set or it points to a wrong location.

#### Node.js

Shows whether a supported Node.js version is installed on the machine. If no such version detected, information about what version will be installed and how much space it requires is shown.

If supported Node.js is installed but its NPM feature is not installed or not added to PATH environment variable then, an appropriate message is shown and the &quot;Install&quot; button is disabled.

#### Android SDK

Shows whether Android SDK is installed on the machine. If an Android SDK is not detected, information about what version will be installed and how much space it requires is shown.

Whether the Android SDK is installed or not, the following setup actions are available:

- &quot;Set ANDROID\_HOME environment variable&quot; – visible only if the ANDROID\_HOME variable is not set or set incorrectly
- &quot;Update SDK features&quot; – always visible. Use this option to update the installed SDK features

![](../img/start/installer-007.png "Start Installation Popup")

_**Install**_ button

A dialog is shown to the user to confirm the installation as it can take a lot of time and cannot be canceled. If &quot;Yes&quot; is clicked proceeds to the installation page and the installation process is started. If &quot;No&quot; is clicked the dialog is closed.

### Installation Screen

Shows a progress bar and information about the current installation that is executing. All buttons are disabled. The operation cannot be canceled. The installer cannot be closed and the &quot;X&quot; button is disabled, too.

![](../img/start/installer-017.png "Installation Screen")

### Installation successful

![](../img/start/installer-021.png "Installation successful")

After successful installation, the installer shows a reference to a [documentation article](https://docs.nativescript.org/tooling/android-virtual-devices) on how to setup Android Emulator. Also, a checkbox to open documentation is checked.
