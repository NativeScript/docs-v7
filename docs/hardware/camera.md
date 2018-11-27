---
title: Using the Device Camera with NativeScript
description: Learn how to use the nativescript-camera plugin to access the camera of the device so you can capture images and store them on the mobile device.
position: 20
tags: nativescript camera, nativescript access camera
slug: camera
previous_url: /camera
---

# Using the Device Camera with NativeScript

## Overview

Almost every mobile application needs the option to capture, save and share images. The NativeScript camera plugin was designed for the first two parts of the job (taking a picture and optionally saving to device storage).

## Installation

Navigate to project folder and run NativeScript-CLI command 
``` 
tns plugin add nativescript-camera
``` 

Plugin could be also added as a standard npm dependency running command 
``` 
npm install nativescript-camera --save 
``` 

> Note: the `--save` flag will add the plugin as dependency in your package.json file

## Usage

For detailed information about plugin's usage, check the [plugin's README in GitHub](https://github.com/NativeScript/nativescript-camera#nativescript-camera-).