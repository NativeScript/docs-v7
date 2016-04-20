---
title: Publishing for iOS
description: Learn how to publish your app in the App Store for iOS users.
position: 12
slug: publishing-ios-apps
previous_url: /core-concepts/releasing-apps
---

# Publishing a NativeScript iOS App in the App Store

0. [Overview](#overview)
1. [Creating iOS NativeScript app](#creating-ios-nativescript-app)
  1. [Bundle ID](#bundle-id)
  2. [App name](#app-name)
  3. [App icons](#app-icons)
  4. [Launch files](#launch-files)
    1. [Launch screen images](#launch-screen-images)
    2. [Launch Screen Storyboard](#launch-screen-storyboard)
2. [Certificates, identifiers & profiles](#certificates-identifiers--profiles)
  1. [Account with Apple ID](#account-with-apple-id)
  2. [Development certificates](#development-certificates)
  3. [Production certificates](#distribution-certificates)
  4. [Identifiers - App IDs](#identifiers---app-ids)
  5. [Devices](#devices)
  6. [Development provisioning profiles](#development-provisioning-profiles)
  7. [Distribution provisioning profiles](#distribution-provisioning-profiles)
3. [iTunes Connect](#itunes-connect)
  1. [Account](#account)
  2. [Creating an app](#creating-an-app)
  3. [Builds](#builds)
    1. [Build versioning](#build-versioning)
    2. [Submit from the NativeScript CLI](#submit-from-the-nativescript-cli)
    3. [Submit from Xcode](#submit-from-xcode)
    4. [Submit with Telerik AppManager](#submit-with-telerik-appmanager)
    5. [Submission automation](#submission-automation)
  4. [Send for approval and publish](#send-for-approval-and-publish)

## Overview
You can publish a NativeScript app in the *App Store* the same way you would [release a purely native iOS app](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html).

 1. Verify that the iOS native project inside your app contains your latest changes and resources by running the following command.
     ```
     tns prepare ios
     ```
 2. Open the iOS native project in Xcode. Your native project is located at: `{app-name}/platforms/ios/{app-name}.xcodeproj`.
 3. [Configure the project for distribution](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html).
 4. [Upload the app to iTunes Connect](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/UploadingYourApptoiTunesConnect/UploadingYourApptoiTunesConnect.html).
 5. [Submit it to the *App Store*](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/SubmittingTheApp.html).

## Creating iOS NativeScript app
### Bundle ID
The *Bundle ID* is a unique identifier, provided by you for your app. It uses reverse domain name notation. For example, the NativeScript CLI will use `org.nativescript.<AppName>` as default. During `tns create` you can provide the *Bundle ID* using the `--appid <id>` option.

In iOS apps, the *Bundle ID* is stored in the `CFBundleIdentifier` in the `Info.plist`, but the NativeScript CLI will explicitly set this to the value of the `nativescript.id` key stored in the `package.json` file in the root of your application.

> **NOTE:** To edit the *Bundle ID*, edit the `package.json` of your app and set the `nativescript.id` key.

The *Bundle ID* is used to precisely identify your app at various situations and plays an important role, when it is built and launched by the CLI, as well as when *Provisioning Profiles* and certificates are created in the *Apple Member Center*.

For more information consider [the 'About Bundle IDs' section in the following article](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html).

### App name
This is the display name for your app. It is purely cosmetic but highly important. Fot example, it will appear under the app icon.
The value is stored in the `app/App_Resources/iOS/Info.plist` file as the `CFBundleDisplayName` key.

### App icons
The NativeScript framework will use icons from `app/App_Resources/iOS/`. All files from that folder are added as resources in the generated Xcode project in `platforms/ios`.

*App Store* submissions will be rejected if certain icon files are not present. To ensure you have the required icons, you can consider the following Apple article: ['App Icons on iPad and iPhone'](https://developer.apple.com/library/ios/qa/qa1686/_index.html).

If you want to extend the default icon set, and you don't want to use the default naming, or you need finer control, you can use the `app/App_Resources/iOS/Info.plist`.
List the icons using [`CFBundleIconFiles`](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/TP40009249-SW10) or [`CFBundleIcon`](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/TP40009249-SW13).

For example, listing icons using `CFBundleIconFiles`:
### Example 1: How to customise Info.plist.__>
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

### Launch files
Launch screens are an essential part of your iOS app. This is the first thing your users see when they start your app.

The Springboard will play a subtle animation transitioning from the home screen to your app. In order to provide a pleasing experience, it's best to avoid a default that's entirely black or white.

The launch files are not a splash screen; instead, they are a way for the OS to quickly grab a preview image of your app and use it during the first ~300ms while your app is booting.

[For design guidelines you can consider the following article provided by Apple](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/LaunchImages.html).

> **QUOTE:** If you think that following these guidelines will result in a plain, boring launch image, you’re right. Remember, the launch image doesn’t provide you with an opportunity for artistic expression. It’s solely intended to enhance the user’s perception of your app as quick to launch and immediately ready for use.

*App Store* submissions will be rejected if certain launch files are not present. Make sure that when new iOS versions and devices are released that you update your *launch files* and accommodate the upcomming form factors.

If a customer runs your app on a device with a high resolution screen and your app is missing the launch screen file for that device, then iOS will render your app using a smaller resolution, degrading its quality:
 - Your app may be upscaled, and blurred
 - Your app may have black areas

Earlier iOS versions had to support a small range of form factors. Providing a different launch image per screen size was trivial. With the new devices released by Apple, the number of images that had to be provided increased. That's where Apple introduced the *launch screen storyboard*. 
The storyboard allows basic primitives such as images to be presented on the screen, and you can have dynamic layout using layout constraints. This makes it possible to design a single *launch screen* that fits well for all form factors.

The NativeScript framework default project has a *Launch Screen Storyboard* and *Launch Images*. In iOS8 and later, your app may use storyboards; your app can use launch images for devices that run earlier versions of iOS. 

#### Launch screen images
The images are placed, similar to the icons already mentioned, in `app/App_Resources/iOS`. The default project template ships several `Default-*.PNG` files there; you may consider changing them.

In iOS8 and later versions, your app will display its storyboard. If you want to use images on all devices, you can consider disabling the *Launch Screen Storyboard*. Instructions for how to do this are explained later in the next section.

Similar to the icons, you can use the [`UILaunchImageFile`](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/uid/TP40009252-SW24) and [`UILaunchImages`](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/uid/TP40009252-SW28) key in the `app/App_Resources/iOS`.

#### Launch Screen Storyboard
The NativeScript framework will provide a *Launch Screen Storyboard* in `platforms/ios/<YourAppName>/en.lproj/LaunchScreen.xib`, but does **not** yet provide a means to store it at `app/App_Resources/iOS`.
If you want to edit it you can use the `.xcodeproj` generated in `platforms/ios`. You will have to add it in source control.
CLI rebuilds may overwrite it, so you will have to watch out for automatic changes in it when you commit.

To disable the default *Launch Screen Storyboard*, remove the `UILaunchStoryboardName` from the `app/App_Resources/iOS/Info.plist`:
```
	<key>UILaunchStoryboardName</key>
	<string>LaunchScreen</string>
```
This will force all supported launch screens to use the *launch image*. 

## Certificates, identifiers & profiles
Certificates, identifiers and profiles are managed at [https://developer.apple.com/membercenter](https://developer.apple.com/membercenter).

[You should really explore the information Apple provides on certificates and identities](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html).
This article will cover only the basics.

### Account with Apple ID
You will need a developer account with an *Apple ID* so you can access the [Apple Developer Member Center](https://developer.apple.com/membercenter). 

You will need to be added as an iOS developer in your organization.

### Development certificates
Development certificates are used to sign iOS apps proving the origin of the app. If you plan to use the Xcode tooling it would be best to create a *development certificate*.

A few pitfalls are:
 - A developer is allowed to have one certificate at any time. You must 'revoke' an existing certificate before you can create a new one.
 - Certificates consist of public and private keys. The private key is never sent to Apple, so you cannot 'download' your certificate from the *Member Center*. If you lose the private key of your certificate, you have to revoke it and create a new one.
 - When revoked or expired, the certificates may further invalidate *provisioning profiles*. Once the certificate is recreated, the *provisioning profiles* need to be updated as well.
 - Making a certificate requires a Mac. You use the Keychain Access tool to create a certificate request, generating a public and private keys at your side, then send the public key to Apple while storing the private key in your keychain.
 - If you follow the steps at the *Member Center* to create a new *development certificate*, the certificate must be stored in your keychain. You can consider exporting it and backing it up.

> **NOTE:** Go to [https://developer.apple.com/account/ios/certificate/certificateList.action?type=development](https://developer.apple.com/account/ios/certificate/certificateList.action?type=development) click the '+' (add) button and follow the instructions for making a new 'iOS App Development' certificate. 

### Production certificates
*Production certificates* work similarly to development certificates. They consist of public and private keys. The private key stays at your side and is never sent to Apple. Your app is signed with the distribution certificate using your private key,
 so Apple can verify the origin of submissions in *iTunes Connect* using the public key you sent them. <Comment: You have not mentioned or defined distribution certificate. What is it, and how does it differ from a production certificate?>

This certificate <Comment: Do you mean the production certificate (or the distribution certificate)?>is used to sign the application binary when it is prepared for submission.
Usually when an app is built for a device, its IPA file is signed with the development certificate. 
> **Note** You can read more about IPA (file extention) [here](https://en.wikipedia.org/wiki/.ipa_(file_extension))
Later, the tooling resigns the IPA with the *production certificate* and appends the distribution provisioning profile when submitting to *iTunes Connect*.

A few pitfalls are:
 - Creating *production certificates* are more restricted than creating development certificates. Apple limit the number of *production certificates* per team.
 - Because production certificates are limited in quantity per team, and frequently shared between multiple team members, you must be extremely careful when you revoke an existing distribution certificate. If you ultimately lost your private key of a distribution certificate and revoke it, consult with anyone that may have backed it up or is in need of the new certificate. Hopefully this will avoid your new copy being revoked in the future or losing your admin rights. 
 - *Production certificates* can be shared between team members. If you follow the steps at the *Member Center* to create a new one (link below) the certificate will be stored in your keychain. You can export it as a .p12 file, easily backing it up and sharing it with senior team peers.

If you need a new distribution certificate, go to [https://developer.apple.com/account/ios/certificate/certificateList.action?type=distribution](https://developer.apple.com/account/ios/certificate/certificateList.action?type=distribution) click the '+' (add) button and follow the instructions for making a new 'App Store Distribution' certificate. Chances are you are part of a larger organization and your role does not have sufficient rights to create a new distribution certificate. Admins or other team member may provide you the certificates in that case. In such cases, you will probably be given a .p12 file and a password. You should import the file in your keychain using the `Keychain Access` application. 

### Identifiers - App IDs
To test your app on a device or submit in the *App Store*, you will need to create an *App ID*.
App IDs consist of a *Prefix* or a *Team ID* that is generated by Apple, followed by an ID provided by you that must match your *Bundle ID*.
For example, you can create an *App ID* with the `org.nativescript.*` ID that will match all your NativeScript apps.
The wildcard pattern imposes some restrictions on the services you can use, so you may also cosider using a non-wildcard pattern such as `org.nativescript.<my-app>`.

These identifiers are later used to bind apps with *provisioning profiles*.

### Devices
At the *Member Center* you can register the devices you and your team use for testing.
Go to [https://developer.apple.com/account/ios/device/deviceList.action](https://developer.apple.com/account/ios/device/deviceList.action).

To register a phone you will need its UDID. Connect it to the Mac and run in a terminal:
```
instruments -s devices
```
It will output all known devices and their UDIDs.

### Development provisioning profiles
Development provisioning profiles bind together one or multiple developer signing identities (developer certificates), *App ID* and device IDs.
These are created at [https://developer.apple.com/account/ios/profile/profileList.action?type=limited](https://developer.apple.com/account/ios/profile/profileList.action?type=limited).
If you are making a new one, or adding a new app to an existing one, make sure to select these three:
 - Your *development certificate*
 - *App ID identifier*, that matches your App ID
 - The *device* you will test on

Unlike the certificates, *provisioning profiles* are files that can be easily updated and downloaded from the Member Center (in .mobileprovision files) and installed in Xcode by double-clicking that file.

Xcode is also capable of obtaining these automatically. Open Xcode and from the menu go to  `Xcode > Preferences... > Accounts > (select your apple ID) > (select your Team Name) > View Details...`.
There you can check all signing identities (developer and *production certificates*) available to Xcode as well as `Download All` *provisioning profiles*.

When you run an app on a device, Xcode will sign the app with your development certificate and add a provisioning profile that has your certificate, device ID and App ID.

While the *development provisioning profiles* are easily created and updated, they frequently invalidate, especially when multiple *developer certificates* are involved. Every time one of them is revoked or expires, you need to update the provisioning certificate.

These are not of a particular interest for *App Store* submissions but you may need one to test on a real device.

### Distribution provisioning profiles
There are several *distribution provisioning profile* types. The one you will need for *App Store* submission is 'App Store Distribution Provisioning Profile'.
These are similar to the *development provisioning profiles* because they bind:
 - Your *distribution certificate*
 - Your *device*-es
 - An *App ID*
 - Various settings, enabled services, etc.

*Distribution provisioning profiles* are created at [https://developer.apple.com/account/ios/profile/profileList.action?type=production](https://developer.apple.com/account/ios/profile/profileList.action?type=production).

For *App Store* submissions, you must create an *App Store Distribution Provisioning Profile*. Once you create it, download it and double-click it on your Mac so it gets registerd with Xcode.

*Distribution provisioning profiles* invalidate rarely since they refer a single *Distribution Certificate*.

## iTunes Connect
While you manage your *provisioning profiles* and certificates at the *Apple Developer Member Center*, apps are registered and submitted at [iTunes Connect](https://itunesconnect.apple.com).
This is where you will be able to create new apps, prepare app screens, descriptions, manage app versions, etc.

### Account
You will need your *Apple ID* added to your organization with sufficient rights at [https://itunesconnect.apple.com](https://itunesconnect.apple.com).

### Creating an app
To publish your app in the iOS *App Store* you will have to create an app. Log into [https://itunesconnect.apple.com](https://itunesconnect.apple.com) and go to 'My Apps'.
There you can check the status and edit existing apps or create a new app. <Comment: I am a bit confused about the difference between the app the customer has created with NativeScript and the app that they create in iTunes Connect. Can you explain? This is a good place for an image from iTunes Connect and some numbered steps to explain all of the iTunes Connect steps.>

Click the '+' button at the top left corner. The 'New App' dialog should appear. There you have to fill the public *App Store* name of your app and primary language.

Also, you have to set *Bundle ID*, which must match the *Bundle ID* referred in ['1.1. Bundle ID'](#bundle-id).
If the drop-down does not contain a suitable match, you are probably missing an *App ID* refered at ['2.4. Identifiers - App IDs'](#identifiers-app-ids).
If there is a wildcard *App ID*, that is a potential match so select it. You will be able to type the suffix, replacing the wildcard in a text box.

At that point you have to fill in the App Information.
There are various assets that you must provide such as screenshots, icons, description, etc.
Failing to provide all necessary assets may prevent you from submitting your app, or result in app rejection.

>Note: Screenshots not matching the actual app may result in rejection of a new version sent for approval.

### Builds
Once you have your app information registered at [https://itunesconnect.apple.com](https://itunesconnect.apple.com) it is time to build your NativeScript app for iOS and submit it.

There are two main ways to submit an app to *iTunes Connect* — using Xcode or using *Application Loader*.

#### Build versioning
We have already explained how the *Bundle ID* is set in your project, how the lauch screen (or storyboard) and images are added to your app, and how you can set the display name.

Before the build, you need to set two important things: the *Bundle Short Version String* and the *Bundle Version String*.

*Bundle Short Version String* is the public version of your app. It is incremented between releases. For example: `2.1`.
*Bundle Version String* is the internal build number. One public release usually has multiple release candidates. For example `2.1.1`, `2.1.1`, etc.

iTunes Connect has a restriction that a bundle cannot be uploaded with the same version twice, so you must increment the *Bundle Version String* with each upload.

The *Bundle Short Version String* should be incremented once your app version is uploaded, sent for approval, approved and published.

Both values are stored in `app/App_Resources/iOS/Info.plist`:
 - The `CFBundleShortVersionString` key stores the *Bundle Short Version String*.
 - The `CFBundleVersion` key stores the *Bundle Version String*.

In the `app/App_Resources/iOS/Info.plist` they appear as:
```
	<key>CFBundleShortVersionString</key>
	<string>2.1</string>
	<key>CFBundleVersion</key>
	<string>2.1.2</string>
```

If you need to edit these from the command line, there is a handy tool called `PlistBuddy` that can read and write Plist files.
For example, the following shell script appends the Jenkins `$BUILD_NUMBER` to the `CFBundleVersion` in the Info.plist:
``` bash
### Set CFBundleVersion ###
export CFBundleVersion=`/usr/libexec/PlistBuddy app/App_Resources/iOS/Info.plist -c "Print :CFBundleVersion"`
/usr/libexec/PlistBuddy app/App_Resources/iOS/Info.plist -c "Set :CFBundleVersion $CFBundleVersion.$BUILD_NUMBER"
```

#### Submit from the NativeScript CLI
You can execute the following command inside a NativeScript project using the CLI:
```
tns publish ios
```

The command will prompt for your `Apple ID` and `Password` for authentication with [iTunes Connect](https://itunesconnect.apple.com) and then produce a `release` build and proceed to upload it to iTunes Connect.

Alternatively, you can use an existing build by running the following command:
```
tns publish ios --ipa <Ipa File Path>
```

For more information, run the following command:
```
tns help publish ios
```

#### Submit from Xcode
You can execute the following command using the CLI:
```
tns prepare ios
```
This will create an Xcode project in `platforms/ios/`. Then you may consider the following Apple article about how to [configure the project for distribution](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html).

The `platform` folder is not meant to stay in source control and you should be careful when you do modifications there.
Rebuilds may erase your changes and you should add changed files to source control.

A common pitfall, if you are using CocoaPods, is to open the Xcode project instead of the workspace.

Once you have it open in Xcode, you have to go to your target's General settings and pick a team.
In 'Build Settings' there should be a suitable 'iOS Developer' and 'Code Signing Identity'.

From the top drop-down, select your target, and from the devices and emulators, pick 'Generic iOS Device'.

Then you should be able to select from the top menu `Product > Archive`.

This makes an xcodearchive and opens it in the Xcode Organizer.
The Xcode Organizer displays a list with builds of your app. Pick the last build and click `Upload to App Store...`.
You should select a team again and whether to include app symbols for your app. Next, you can see a list with the binary information, entitlements, etc.
Click `Upload`.

If you upload successfully, you should be able to log in at [https://itunesconnect.apple.com](https://itunesconnect.apple.com) and see your build in 'Activities'. From there you can enable Test Flight beta testing or send it for approval.

#### Submit with Telerik AppManager
<Comment: This section is a direct cut/paste from your Android docs. Please carefully update this to use the names of the Apple certificates and indicate whether something goes to the App Store or to iTunes Connect.>
It is worth mentioning that the NativeScript platform is integreated in the Telerik platform.
The Telerik platform has everything you need in the cloud, easing the submission process.
This includes managing your *production certificates* and *provisioning profiles*,
as well as support for cloud builds and *Google Play* submission. 

Read more about app submission process in the *Telerik Platform* in ['Introduction to Telerik AppManager'](http://docs.telerik.com/platform/appmanager/getting-started/introduction)

#### Submission automation
Automation can be achieved using the NativeScript CLI only. All of the parameters needed for publishing can be passed to the `publish` command directly:

```
tns publish ios [<Apple ID> [<Password> [<Mobile Provisioning Profile Identifier> [<Code Sign Identity>]]]]]
```
For example, assuming that you want to issue a build using a mobile provision with an identifier *d5d40f61-b303-4fc8-aea3-fbb229a8171c*, you could run:
```
tns publish ios my-apple-id my-password d5d40f61-b303-4fc8-aea3-fbb229a8171c "iPhone Distribution"
```
Note that the `Code Sign Identity` can be set to something generic like *iPhone Distribution* in order to let the build automatically detect a code sign identity.

You can also automate the uploads of already built packages:
```
tns publish ios my-apple-id my-password --ipa /tmp/build/myIpa.ipa
```

Some tools that allow the submission process to be automated - [MIT Licensed one: fastlane](https://github.com/fastlane/fastlane). 
Also, the previously mentioned *Application Loader* has a command line tool called *iTMSTransporter* in its package,
which you may use to hack your own [shell scripts](https://gist.github.com/jedi4ever/b1f8b27d4a803d487fa4) around.

### Send for approval and publish
Once you successfully submit a build at *iTunes Connect*, you can enable testing through *Test Flight*.
When you are ready, go to the 'Build' section of your iOS app, pick the build, and click 'Submit for Review' for that version.
The app will pass through several [App Statuses](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/ChangingAppStatus.html#//apple_ref/doc/uid/TP40011225-CH30-SW23). If your app passes Apple review, it can go live at the *App Store*.
