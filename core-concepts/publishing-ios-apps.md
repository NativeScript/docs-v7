---
title: Publishing for iOS
description: Learn how to publish your app at the App Store for iOS users.
position: 10
slug: publishing-ios-apps
---

# Publishing in the App Store

0. [Overview](#overview)
1. [Creating iOS NativeScript App](#creating-ios-nativescript-app)
  1. [Bundle ID](#bundle-id)
  2. [App Name](#app-name)
  3. [App Icons](#app-icons)
  4. [Launch Files](#launch-files)
    1. [Launch Screen Images](#launch-screen-images)
    2. [Launch Screen Storyboard](#launch-screen-storyboard)
2. [Certificates, Identifiers & Profiles](#certificates-identifiers--profiles)
  1. [Account with Apple ID](#account-with-apple-id)
  2. [Development Certificates](#development-certificates)
  3. [Distribution Certificates](#distribution-certificates)
  4. [Identifiers - App IDs](#identifiers---app-ids)
  5. [Devices](#devices)
  6. [Development Provisioning Profiles](#development-provisioning-profiles)
  7. [Distribution Provisioning Profiles](#distribution-provisioning-profiles)
3. [iTunes Connect](#itunes-connect)
  1. [Account](#account)
  2. [Creating an App](#creating-an-app)
  3. [Builds](#builds)
    1. [Build Versioning](#build-versioning)
    2. [Submit from Xcode](#submit-from-xcode)
    3. [Submit with the Telerik AppManager](#submit-with-the-telerik-appmanager)
    4. [Submission Automation](#submission-automation)
  4. [Send for Approval and Publish](#send-for-approval-and-publish)

## Overview
Publishing NativeScript apps in the *App Store* is similar to [releasing pure native iOS apps](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html).

 1. Verify that the iOS native project inside your app contains your latest changes and resources by running the following command.
     ```
     tns prepare ios
     ```
 2. Open the iOS native project in Xcode. Your native project is located at: `{app-name}/platforms/ios/{app-name}.xcodeproj`.
 3. [Configure the project for distribution](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html).
 4. [Upload the app to iTunes Connect](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/UploadingYourApptoiTunesConnect/UploadingYourApptoiTunesConnect.html).
 5. [Submit it to the *App Store*](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/SubmittingTheApp.html).

## Creating iOS NativeScript App
### Bundle ID
The *Bundle ID* is a unique identifier, provided by you for your app.
It uses reverse domain name notation, for example the NativeScript CLI will use `org.nativescript.<AppName>` as default.
During `tns create` you can provide the *Bundle ID* using the `--appid <id>` option.

In iOS Apps it is stored in the `CFBundleIdentifier` in the `Info.plist`,
but the NativeScript CLI will explicitly set this to the value of the `nativescript.id` key
stored in the `package.json` file in the root of your application.

> **NOTE:** To edit the *Bundle ID*, edit the `package.json` of your app and set the `nativescript.id` key.

The value is used to precisely identify your app at various situations and plays important role,
when it is build and launched by the CLI, as well as when provisioning profiles and certificates are crated at the apple member center.

For more information consider [the 'About Bundle IDs' in the following article](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html).

### App Name
This is the display name for your app. It is purely cosmetic but higly important. It will appear under the app icon for example.
The value is stored in the `app/App_Resources/iOS/Info.plist` file as the `CFBundleDisplayName` key.

### App Icons
The NativeScript framework will use icons from `app/App_Resources/iOS/`.
All files from that folder are added as resources in the generated Xcode project in `platforms/ios`.

*App Store* submissions will be rejected if certain icon files are not present.
To ensure you have the required icons you can consider the following Apple article: ['App Icons on iPad and iPhone'](https://developer.apple.com/library/ios/qa/qa1686/_index.html).

If you want to extend the default Icon set, don't want to use the default naming, and need finer control, you can use the `app/App_Resources/iOS/Info.plist`.
List the icons using [`CFBundleIconFiles`](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/TP40009249-SW10) or [`CFBundleIcon`](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/TP40009249-SW13). The NativeScript framework does not yet support icons in Xcode assets files.

For example listing icons using `CFBundleIconFiles`:
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <!-- The full content of the Info.plist still should be here. -->
	<key>CFBundleIconFiles</key>
	<array>
		<string>Icon@2x.png</string>
		<string>Icon.png</string>
		<string>Icon-Small@3x.png</string>
		<string>Icon-Small@2x.png</string>
		<string>Icon-Small.png</string>
		<string>Icon-Small-50@2x.png</string>
        <!-- etc -->
	</array>
</dict>
</plist>
```

### Launch Files
Launch screens are essential part of your iOS App.
This is the first thing your users see when they start your App,
the Springboard will play a subtle animation transitioning from the home screen to your app.
To provide a pleasing experience its best to avoid a default all black or white.

The launch files are not a splash screen,
instead they are a way for the OS to quickly grab a preview image of your app and use it during the first ~300ms while your app is booting.

[For design guidelines you can consider the following article provided by Apple](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/LaunchImages.html).

> **QUOTE:** If you think that following these guidelines will result in a plain, boring launch image, you’re right. Remember, the launch image doesn’t provide you with an opportunity for artistic expression. It’s solely intended to enhance the user’s perception of your app as quick to launch and immediately ready for use.

*App Store* submissions will be rejected if certain launch files are not present.
Make sure when new iOS versions and devices are released to update your *Launch Files* and accomodate for upcomming form factors.

If your app is missing the launch file for larger screens your app may degrade and be presented in smaller resolution.

Earlier iOS versions had to support small range of form factors. As such providing a different launch image per screen size was trivial.
With the new devices released by apple the ranged and number of images that had to be shipped increased.
That's where *Launch Screen Storyboard* were introduced. The later allows basic primitives such as images to presented on the screen and positioned or scaled with layout constraints.
Making it possible to desing a single *Launch Screen* that will fit all form factors.

The NativeScript framework default project has *Launch Screen Storyboard* and *Launch Images*.
New iOS versions will use the *Launch Screen Storyboard*, while earlier iOS7 versions will display the Launch Images.

### Launch Screen Images
The images are placed, similar to the icons allready mentioned, in `app/App_Resources/iOS`.
The default project template ships several `Default-*.PNG` files there, you may consider chaning them.

The last iOS versions will prefer to use the *Launch Screen Storybard*.
If you want to use images on all devices you can consider disableing the *Launch Screen Storyboard*, explained later in the article.

Similar to the icons you can use the [`UILaunchImageFile`](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/uid/TP40009252-SW24) and [`UILaunchImages`](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/uid/TP40009252-SW28) key in the `app/App_Resources/iOS`.

### Launch Screen Storyboard
The NativeScript framework will provide an *Launch Screen Storyboard* in the `platforms/ios/<YourAppName>/en.lproj/LaunchScreen.xib`, but does **not** provide yet means to store it at `app/App_Resources/iOS`.
If you want to edit it you can use the xcodeproj generated in `platforms/ios` but you will have to take extra care to preserve it in source control.
CLI rebuilds may overwrite it without warning.

To disable the default *Launch Screen Storyboard* remove the `UILaunchStoryboardName` from the `app/App_Resources/iOS/Info.plist`:
```
	<key>UILaunchStoryboardName</key>
	<string>LaunchScreen</string>
```
This will demand all supported launch screens to have *Launch Image*.

## Certificates, Identifiers & Profiles
There are multiple types of certificates but for *App Store* build submission you will use Development and Distribution.
They are managed at [https://developer.apple.com/membercenter](https://developer.apple.com/membercenter)

[You should really explore the information Apple provide on certificates and identities](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html).
This article will cover only the basics.

### Account with Apple ID
You will need a developer account with apple id so you can access the ['Apple Developer Member Center'](https://developer.apple.com/membercenter).
You will need to be added as an iOS developer in your organization.

### Development Certificates
Development certificates are used to sign iOS apps proving the origin of the app.
It is possible to use Xcode to build for device (requirement for submission) without signing,
but if you plan to use the Xcode tooling it would be best to create one.

A few pitfalls are:
 - If you ever deployed and tested your app on a real iOS device probably you are good to go. 
 - A developer is allowed to have one certificate at any time. You must 'Revoke' an existing certificate to create a new one.
 - Certificates consist of public and private keys, the private is never sent to Apple, so you can not 'Download' your certificate from the member center. If you loose the private key of your certificate, you have to revoke it and create a new one. 
 - When Revoked or Expired the certificates may further invalidate provisioning profiles. Once the certificate is recreated, the provisioning profiles need to be updated as well.
 - Making a certificate requires a Mac, you use the Keychain Access tool to create a certificate request, generating a public and private keys at your side, then send the public key to Apple while storing the private key in your keychain.
 - If you follow the steps at the member center to create a new one (link below) the certificate will (and must) be stored in your keychain, you can consider exporting it and backing it up.

Go to [https://developer.apple.com/account/ios/certificate/certificateList.action?type=development](https://developer.apple.com/account/ios/certificate/certificateList.action?type=development) click the '+' (add) button and follow the instructions for making a new 'iOS App Development'.

### Distribution Certificates
Distribution certificates work similar to development certificates. They consist of public and private key.
The private stays at your side and is never sent to Apple. Your app is signed with the distribution certificate using your private key,
 so Apple can verify the origin of submissions at itunesconnect using the public key you send them.

This certificate is used to sign the application binaries when it is prepared for submission.
Usually when the app is built for a device its IPA file is signed with the development certificate.
Later the tooling resigns the IPA with distribution certificates and appends the distribution provisioning profile when submitting to itunesconnect.

A few pitfalls are:
 - Share the issues with development certificates (read above)
 - Creating distribution certificates is more restricted than creating development certificates. There is a limit of the number of distribution certificates per team.
 - Since these are limited in quantity per team, and frequently shared between multiple team members, you must be extremely careful when you Revoke an existing distribution certificate. If you ultimately lost your private key of a distribution certificate and Revoke it, consult with anyone that may have backed it up or is in need of the new certificate. Hopefully this will avoid your new copy being revoked in the short future or loosing your admin rights.
 - Can be shared between team members. If you follow the steps at the member center to create a new one (link below) the certificate will be stored in your keychain, you can consider exporting it as a .p12 file, easily backing it up and sharing it with senior team peers.

If you need a new distribution certificate, go to [https://developer.apple.com/account/ios/certificate/certificateList.action?type=distribution](https://developer.apple.com/account/ios/certificate/certificateList.action?type=distribution) click the '+' (add) button and follow the instructions for making a new 'App Store Distribution' certificate. Chances are you are part of a larger organization and your role does not have sufficient rights to create a new distribution certificate. Admins or other team member may provide you the certificates in that case. In such case you will probably be given a .p12 file and a password. You should import the file in your keychain using the `Keychain Access` application.

### Identifiers - App IDs
To test on device or submit at the *App Store* you will need to create an *App ID*.
App IDs consist of a *Prefix* or a *Team ID* that is generated by apple, followed by an ID provided by you that must match your *Bundle ID*.
For example you can create *App ID* with the `org.nativescript.*` ID that will match all your nativescript apps.
Wildcard impose some restrictions on the services you can use so you may also cosider making a non-wildcard such as `org.nativescript.<my-app>`.

These identifiers are later used in provisioning profiles, to bind apps with provisioning profiles.

### Devices
At the member center you can register the devices you and your team uses for testing.
Go to [https://developer.apple.com/account/ios/device/deviceList.action](https://developer.apple.com/account/ios/device/deviceList.action).

To register a phone you will need its UUID, the easiet way to find it out is to connect it to your mac and open iTunes.
In the 'Devices' section select the device and in on the 'Summary' page click the 'Serial Number'. The filds will change and display the device' identifier.

### Development Provisioning Profiles
Development Provisioning Profiles bound together one or multiple developer signing identities (developer certificates), *App ID* and device IDs.
These are created at [https://developer.apple.com/account/ios/profile/profileList.action?type=limited](https://developer.apple.com/account/ios/profile/profileList.action?type=limited).
If you are making a new one, or adding a new app to an existing one, make sure to select the 3:
 - Your *Development Certificate*
 - *App ID identifier*, that matches your App ID
 - The *Device* you will test on

Unlike the certificates, provisioning profiles are files that can be easily updated and downloaded from the mamber center (in .mobileprovision files), installed in Xcode by double clicking that file.

Xcode is also capable of obtaing these automatically. Open Xcode and from the menu go to  `Xcode > Preferences... > Accounts > (select your apple ID) > (select your Team Name) > View Details...`.
There you can check all signing identities (developer and distribution certificates) available to Xcode as well as `Download All` provisioning profiles.

When you run an app on a device, Xcode will sign the app with your development certificate and add a provisioning profile that has your certificate, device id and app id.

While the *Distribution Provisioning Profiles* are easily created and updated, they frequently invalidate, especially when multiple *Developer Certificates* are involved, every time one of them is revoked or expires, the provisioning certificate will need update.

These are not of a particular interest for *App Store* submission but you may need one to test on a real device.

### Distribution Provisioning Profiles
There are several *Distribution Provisioning Profile* types, the one you will need for *App Store* submission is 'App Store Distribution Provisioning Profile'.
These are similar to the *Development Provisioning Profiles* with that they bind:
 - Your *Distribution Certificate*
 - Your *Device*-es
 - An *App Id*
 - Various settings, enabled services etc.

They are created at [https://developer.apple.com/account/ios/profile/profileList.action?type=production](https://developer.apple.com/account/ios/profile/profileList.action?type=production).

For *App Store* submission it is a must to create a *App Store Distribution Provisioning Profile*. Once you create it, download it and double click it on your Mac so it gets registerd with Xcode.

*Distribution Provisioning Profile* invalidate rarely since they refer a single *Distribution Certificate*.

## iTunes Connect
While you manage your provisioning profiles and certificates at the Apple developer member center, apps are registered and submitted at [iTunes Connect](https://itunesconnect.apple.com).
This is where you will be able to create new apps, prepare app screens, descriptions, manage app versions etc.

### Account
You will need your apple id added to your organization with sufficient rights at the [https://itunesconnect.apple.com](https://itunesconnect.apple.com).

### Creating an App
To publish your app at the iOS *App Store* you will have to create an app. Log into [https://itunesconnect.apple.com](https://itunesconnect.apple.com), go to 'My Apps'.
There you can check the status and edit existing apps or create a new app.

Click the '+' button at the top left corner. 'New App' dialog should appear.
There you will have to fill the public *App Store* name of your app, primary language.

Also you will have to set *Bundle ID* which must match the *Bundle ID* referred in ['1.1. Bundle ID'](#bundle-id).
If the drop down does not contain a suitable match probably you are missing an App ID Identifier refered at ['2.4. Identifiers - App IDs'](#identifiers-app-ids).
If there is a wildcard *App ID* that is potential match, select it, you will be allow to type the suffix, replacing the wildcard, in a text box.

At that point you will have to fill in the App Information.
There are various assets that you must provide such as screenshots, icons, description, etc.
Failing to provide all necessary assets may prevent you to submit your app, or result in app rejection.

E.g. screenshots not matching the actual app may result in rejection of new version sent for approval.

### Builds
Once you have your app information registed at [https://itunesconnect.apple.com](https://itunesconnect.apple.com) it is time to build your NativeScript app for iOS and submit is.

There are two main ways to submit an App to iTunes Connect. Using Xcode and using Application Loader.

#### Build Versioning
The NativeScript will have most of the settings in place for you.
We have alrady explained how the *Bundle ID* is set in your project,
how lauch screen and images are added to your app, and how you can set display name.

Prior the build however there two important things to set. The *Bundle Short Version String* and the *Bundle Version String*.

*Bundle Short Version String* is the public version of your app. It is incremented between releases. For example: `2.1`.
*Bundle Version String* is the internal build number. One public release usually have multiple release candidates. For example `2.1.1`, `2.1.1` etc.

There is a restriction that a bundle can not be uploaded with the same version twice.
So you will be incrementing the *Bundle Version String* with each upload.

The *Bundle Short Version String* should be incremented once your app version is uploaded, send for approval, approved and published.

Both values are stored in `app/App_Resources/iOS/Info.plist`:
 - The `CFBundleShortVersionString` key stores the *Bundle Short Version String*
 - The `CFBundleVersion` key stores the *Bundle Version String*

In the `app/App_Resources/iOS/Info.plist` they appear as:
```
	<key>CFBundleShortVersionString</key>
	<string>2.1</string>
	<key>CFBundleVersion</key>
	<string>2.1.2</string>
```

If you need to edit these from the command line, there is a handy tool called `PlistBuddy` that can read and write Plist files.
For example the following shell script appends the Jenkins `$BUILD_NUMBER` to the Info.plist:
``` bash
### Set CFBundleVersion ###
export CFBundleVersion=`/usr/libexec/PlistBuddy app/App_Resources/iOS/Info.plist -c "Print :CFBundleVersion"`
/usr/libexec/PlistBuddy app/App_Resources/iOS/Info.plist -c "Set :CFBundleVersion $CFBundleVersion.$BUILD_NUMBER"
```

#### Submit from Xcode
You can execute the following command using the CLI:
```
tns prepare ios
```
This will create an Xcode project in `platforms/ios/`. Then you may consider the following Apple article about how to [configure the project for distribution](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html).

The `platform` folder however is not meant to stay in source control and you should be careful when you do modifications there.
Rebuilds may erase your changes and you should add changed files to source control. 

A common pitfall, if you are using CocoaPods, would be to open the Xcode project instead the workspace.

Once you have it open in Xcode you have to go to your target's General settings and pick a team.
In 'Build Settins' there should be a suitable 'iOS Developer' 'Code Signing Identity'.

From the top dropdown select your target, and from the devices and emulators, pick 'Generic iOS Device'.

Then you should be able to select from the top menu `Product > Archive`.
This will make an xcodearchive and open it in the Xcode Organizer.
From the organizer you will be listed builds of your app. Pick the last and click `Upload to App Store...`.
You will have to select team again and whether to include app symbols for your app, as well as you will be listed the binary and entitlements.
Click `Upload`.

If you upload successfuly you should be able to log at [https://itunesconnect.apple.com](https://itunesconnect.apple.com) and see your build in 'Activities'.
From there you can enable Test Flight beta testing or send it for approval.

#### Submit with the Telerik AppManager
It is worth to mention that the NativeScript platform is integreated in the Telerik platform.
And the Telerik platform has everything you need in the cloud, easing the submission process.
This include managing your distribution certificates and provisioning profiles,
as well as support for clout builds and *App Store* submission.

['Introduction to Telerik AppManager'](http://docs.telerik.com/platform/appmanager/getting-started/introduction)

### Submission Automation
Then there are some tools that allow the submission process to be automated - [MIT Licensed one: fastlane](https://github.com/fastlane/fastlane).
Also the mentioned *Application Loader* has a command line tool called *iTMSTransporter* in its package which you may use to hach your own [shell scripts](https://gist.github.com/jedi4ever/b1f8b27d4a803d487fa4) around.

### Send for Approval and Publish
Once you successfuly submit a build at *iTunes Connect*, you can enable testing through *Test Flight*.
When ready to to the 'Build' section of your iOS APP, pick the build, and 'Submit for Review' that version.
If your app passes Apple review your app will go live at the *App Store*.
