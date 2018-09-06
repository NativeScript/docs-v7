---
title: Installation
description: 
position: 3
publish: true
slug: installation
---

# Set Up Your System and Install Sidekick

## Step 1: Install Node.js

To run {{ site.ns-sk }}, you need to have Node.js installed on your machine. To check whether Node.js is installed on your development machine, you should open a terminal or command prompt and run the `node --version` command. If you get an error, head to [https://nodejs.org/](https://nodejs.org/en/) and download and install the latest [Node.js LTS](https://github.com/nodejs/LTS#lts-schedule) version. We recommend using [Node.js 8.x](https://nodejs.org/dist/latest-v8.x/).

## Step 2: Install the {{ site.ns-cli }}

To run {{ site.ns-sk }}, you need to have the latest version of the {{ site.ns-cli }} installed on your machine. To install the latest version of {{ site.ns-cli }} from npm, you should open a terminal or command prompt and run the following command:

<pre class="add-copy-button"><code class="language-terminal">npm install -g nativescript</code></pre>

## Step 3: Download and Install Sidekick

1. Download the installation file appropriate for your operating system:
	* [Windows 64-bit](https://www.nativescript.org/nativescript-sidekick/download-windows-latest)
	* [macOS 64-bit](https://www.nativescript.org/nativescript-sidekick/download-macos-latest)
	* [Linux 64-bit](https://www.nativescript.org/nativescript-sidekick/download-linux-latest)
2. Run the downloaded installable and complete the installation.
	* The easiest way to install Sidekick on Ubuntu based distributions is to install the .deb package downloaded from the link above either through the graphical software center or through the command line by executing the following commands:
  
		```
		sudo dpkg -i NativeScriptSidekick-amd64.deb
		sudo apt-get install -f # Install dependencies
		```

> When you launch Sidekick on a macOS system, you might see the following error message: `{{ site.ns-sk }} can't be opened because the identity of the developer cannot be confirmed `. How to resolve this issue is explained in our [Frequently Asked Questions]({% slug frequently-asked-questions %}) section.

## Step 4 (Optional): Install iOS and Android Requirements for Local Builds

> If you plan on using only the Cloud build functionality, you should disregard this step.

To build locally with {{ site.ns-sk }}, you need to set up each platform you intend to build for on your development machine.

* [Set up a Windows machine](https://docs.nativescript.org/start/ns-setup-win)
* [Set up a macOS machine](https://docs.nativescript.org/start/ns-setup-os-x)
* [Set up a Linux machine](https://docs.nativescript.org/start/ns-setup-linux)