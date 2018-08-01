---
title: Code Splitting
description: NativeScript Documentation - Code Sharing - Code Splitting
position: 50
environment: angular
---

# Code Splitting

When building a code-sharing app, you will share a big part of your code across all platforms. However, you will encounter situations where you need to provide different code for the web app and for the mobile app. The most common scenario is with Angular components, where you need to define different markup  for your web and mobile apps.

There is a simple a naming convention that allows you to provide two versions of the same file. All you need to do is create two files and add a **.tns** before the file extension to one of them, i.e.

 * **name.component.html** - web-specific file
 * **name.component.tns.html** - NativeScript-specific file

The file with the **.tns** part, is designated as a NativeScript-specific file, while the file without **.tns** is designated to be a web-only file.

> **TIP**: You can use the naming convention with any file extension:
> 
 * **file.tns.ts**
 * **file.tns.html**
 * **file.tns.css**
 * **file.tns.scss**

## Web build

When you run **ng serve**, no **.tns** files will be bundled. 

Or in different words:
> **.tns** files are excluded from web builds.

## NativeScript build

When you run **tns run [ios|android] --bundle**, all **.tns** files will be bundled instead of the web files.

Or in different words:
> **.tns** files replace the web files in the NativeScript builds.

## iOS, Android, web files

While **.tns** is used for NativeScript-specific files, you can also create **Android**- and **iOS**-specific files. This is again done with a naming convention where **.android** is used for Android files and **ios** is used for iOS files.

 * **file.ts** - **web**-specific file
 * **file.android.ts** - **android**-specific file
 * **file.ios.ts** - **iOS**-specific file


## Angular Components

It’s important to understand code splitting in the context of an Angular Component.

The most common scenario is a component with the following file structure:

 * **name.component.ts** - web + NativeScript shared file 
 * **name.component.html** - web UI file
 * **name.component.tns.html** - NativeScript UI file
 * **name.component.css** - web stylesheet
 * **name.component.tns.css**- NativeScript stylesheet

![project-structure](./img/code-splitting.png?raw=true)

The important thing to note here is that the **@Component** decorator points to the files without the **.tns** extension.

```ts
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {}
```

This is because all **.tns** files are either ignored by the **Web Build** or they are renamed by the **NativeScript Build**.


## Ng Modules

Code splitting is useful when working with NgModules, as often you need to import web- or NativeScript-specific modules. 

### HttpClient

For example, when you want to use **HttpClient**, in a web project you need to import **HttpClientModule**, while in a NativeScript project you need to import **NativeScriptHttpClientModule**.

![module-splitting](./img/ngmodule-http.png?raw=true)

 To achieve that create two files:

**my.module.ts**

```TypeScript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class MyModule { }
```

**my.module.tns.ts**

```TypeScript
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  imports: [
    NativeScriptHttpClientModule
  ]
})
export class MyModule { }
```

### UI libraries

Another example could be around using additional UI libraries. You could easily add **Kendo UI** and/or **Angular Material** to the web version of a NgModule, and separately, you could add **NativeScript UI Pro** to the NativeScript version of a NgModule.

## Partial differences

Sometimes, you will be faced with situations where your component has multiple methods, of which one would require a platform-specific piece of code. 

For example, you might need to add some code to grab an instance of **RadSideDrawer** and then show it or hide it.

```TypeScript
@Component({...})
export class NameComponent {
  // a lot of shared code here
  
  public showMenu() {
    const sideDrawer = <RadSideDrawer>getRootView();
    drawer.showDrawer();
  }

  public hideMenu() {
    const sideDrawer = <RadSideDrawer>getRootView();
    drawer.closeDrawer();
  }
}
```

This code would make your web build fail.

### Split components

One solution would be to have two versions of the same file (**name.component.ts** and **name.component.tns.ts**). With this approach you could easily add the platform-specific code to each file. However, this introduces unnecessary code duplication, which would make maintenance time consuming.

### Helper file

A better solution is to create a helper pair of files, each with the platform-specific code.

**drawer-helper.ts**

```TypeScript
export class DrawerHelper {
  
  public show() {
    // do nothing or add web implementation here  
  }

  public hide() {
    // do nothing or add web implementation here
  }
}
```

**drawer-helper.tns.ts**

```TypeScript
export class DrawerHelper {
  
  public show() {
    const sideDrawer = <RadSideDrawer>getRootView();
    drawer.showDrawer();
  }

  public hide() {
    const sideDrawer = <RadSideDrawer>getRootView();
    drawer.closeDrawer();
  }
}
```

And then call its functions from your component:

**name.component.ts**

```TypeScript
import { DrawerHelper } from "./drawer-helper";
@Component({...})
export class NameComponent {
  // a lot of shared code here
  
  public showMenu() {
    DrawerHelper.show();
  }

  public hideMenu() {
    DrawerHelper.hide();
  }
}
```
