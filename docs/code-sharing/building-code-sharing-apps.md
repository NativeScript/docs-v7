# Build Process

![build-process](./img/build-process.png?raw=true)

The code sharing project comes with a build process that is capable of using the shared files together with the platform specific ones, and provide a web or mobile app as a result.

## Web Build

To build a web app, it is **Business as usual**, just use Angular CLI to do the job.
When you call `ng serve` or `ng build`, Angular CLI will ignore all NativeScript specific files - as none of the web files would directly reference any `.tns` files.

 > `ng serve` -> builds a web app from a code sharing project

For AOT builds, you may need to give TypeScript a helping hand, by adding NativeScript extensions to `tsconfig.json` exclude list.

```ts
"exclude": [
  "**/*.ns.ts",
  "**/*.tns.ts",
  "**/*.android.ts",
  "**/*.ios.ts"
]
```

## Mobile Build

In order to build an iOS or an Android app with NativeScript, we need to use [NativeScript CLI](https://www.npmjs.com/package/nativescript) with [nativescript-dev-webpack plugin](https://www.npmjs.com/package/nativescript-dev-webpack).

To build a mobile app from a code sharing project run:

**iOS**

```bash
tns run ios --bundle
```

**Android**

```bash
tns run android --bundle
```

### Behind the scenes

The build process consists of two major steps: bundling and building the native app.

For bundling `nativescript-dev-webpack` prepares the project in a **Virtual File System**. The **VFS** is used to provide **NativeScript specific** files.

Every time a file is requested from the **File System**, like this import statement:

```TypeScript
import { MyComponent } from './my/my.component';
```

Webpack checks **VFS** for the `.tns` file first (in this case `my.component.tns.ts`) and serves the **NativeScript specific** file, if not it provides the shared file.

> This **virtually** replaces web files with NativeScript files.

Finally, the NativeScript build process takes the bundled image of the project and completes the build with Native Build Tools (XCode for iOS and Gradle for Android), and as a result producing a Native Mobile app.
