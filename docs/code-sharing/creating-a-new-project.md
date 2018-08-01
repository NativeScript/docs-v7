---
title: Creating a new project
description: NativeScript Documentation - Code Sharing - Creating a new project
position: 20
slug: code-sharing
environment: angular
previous_url: /intro
---

# Creating a new project

Creating a code sharing project is a straight forwards process. You can use Angular CLI and NativeScript schematics to generate a brand new project with a code sharing setup.

## Prerequisites 

You need to use the following versions of npm modules:

 * **Angular CLI** - v6.1.0 or newer
	 * **npm i -g @angular/cli**
 * The latest version of **NativeScript Schematics** 
	 * **npm i -g @nativescript/schematics**

## NG CLI to create a project

To create a new code sharing project, we need to use the **ng new** command, with **@nativescript/schematics** as the source collection and the **--shared** flag.

```
ng new --collection=@nativescript/schematics project-name --shared
```

or using a shorthand for **collection**


```
ng new -c=@nativescript/schematics project-name --shared
```

## Styling

By default, the project will be generated with **css** as the default format for styling. With the following style files:

 * **app.css** - stylesheet for the mobile app
 * **style.css** - stylesheet for the web app

### SASS

However, if you prefer to use **SASS**, you can set the **style** flag to **scss**, like this:

```
ng new -c=@nativescript/schematics sass-project --shared --style=scss
```

This will generate the following files:

 * **_app-common.scss** - stylesheet with common variables to be shared between **web**, **iOS** and **Android**,
 * **_app-variables.scss** - stylesheet with common variables to be shared between **iOS** and **Android**. It also imports **NativeScript Core Theme** variables,
 * **app.android.scss** - stylesheet for the **Android** app
 * **app.ios.scss** - stylesheet for the **iOS** app
 * **styles.scss** - stylesheet for the **Web** app
 
### NativeScript Core Theme
 
By default, all projects will be generated with **NativeScript Core Theme**.

In case you don't want to use **NativeScript Core Theme** in your project, you can provide the **--no-theme** flag. Like this:

```CSS
ng new -c=@nativescript/schematics no-theme-project --shared --no-theme
```

```SCSS
ng new -c=@nativescript/schematics sass-no-theme-project --shared --style=scss --no-theme
```

This will skip any configuration for NativeScript theme, by removing it from **package.json** and removing all references from the **NativeScript** stylesheets.

