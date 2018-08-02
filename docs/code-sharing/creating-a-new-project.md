---
title: Creating a New Project
description: NativeScript Documentation - Code Sharing - Creating a new project
position: 20
environment: angular
---

# Creating a New Project

Creating a code-sharing project is a straightforward process. You can use Angular CLI and NativeScript schematics to generate a brand new project with a code-sharing setup.

## Prerequisites 

You need to use the following versions of npm modules:

 * **Angular CLI** - v6.1.0 or newer
	 * **npm i -g @angular/cli**
 * The latest version of **NativeScript Schematics** 
	 * **npm i -g @nativescript/schematics**

## Using the Angular CLI

To create a new code-sharing project, we need to use the Angular CLI’s **ng new** command, with **@nativescript/schematics** as the source collection and the **--shared** flag.

```
ng new --collection=@nativescript/schematics project-name --shared
```

If you’d like, you can also use the `-c` shorthand instead of `--collection`. That looks like this.


```
ng new -c=@nativescript/schematics project-name --shared
```

## Styling

By default, the project will be generated with **CSS** as the default format for styling, with the following style files:

 * **app.css** - The stylesheet to use for your mobile app
 * **styles.css** - The stylesheet to use for your web app

### SASS

However, if you prefer to use **SASS**, you can set the **style** flag to **scss** when creating a new project with `ng new`. The full command to run looks like this.

```
ng new -c=@nativescript/schematics sass-project --shared --style=scss
```

This will generate the following files:

 * **_app-common.scss** - a stylesheet with common variables to be shared between **web**, **iOS** and **Android**,
 * **_app-variables.scss** - a stylesheet with common variables to be shared between **iOS** and **Android**. It also imports the **NativeScript Core Theme** variables,
 * **app.android.scss** - a stylesheet for your **Android** app
 * **app.ios.scss** - a stylesheet for your **iOS** app
 * **styles.scss** - a stylesheet for your **Web** app
 
### NativeScript Core Theme
 
By default, all projects will be generated with the [NativeScript Core Theme](../ui/theme).

> The **NativeScript Core Theme** is a CSS Theme for native applications.

In case you don't want to use **NativeScript Core Theme** in your project, you can provide the **--no-theme** flag. That looks like this when using CSS.

```CSS
ng new -c=@nativescript/schematics no-theme-project --shared --no-theme
```

And like this when using SASS.

```SCSS
ng new -c=@nativescript/schematics sass-no-theme-project --shared --style=scss --no-theme
```

This will skip any configuration for NativeScript theme, by removing it from your **package.json** and removing all references from your NativeScript stylesheets.

