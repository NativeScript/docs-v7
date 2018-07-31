
# Platform Specific Components

Sometimes you may need to create a Component that is used only by the web app or NativeScript app.
If you have a component that is not declared in any `Module`, will result in an error during **AOT build**. This can be avoided.

## NativeScript Only Component

To create a NativeScript only Component, all you need is to create the component class with `.tns` extension. For example: 

```
|- my
   | my.component.css
   | my.component.html
   | my.component.tns.ts
```

The **Web TypeScript config** (`tsconfig.app.json`) automatically excludes `.tns` files, as well as all `.android` and `.ios` files.

```json
{
...
  "exclude": [
    "**/*.tns.ts",
    "**/*.android.ts",
    "**/*.ios.ts",
    ...
  ]
}
```

In this case for all your imports you will need to use a path that includes `.tns`, for example:

```TypeScript
import { MyComponent } from './my/my.component.tns';
```

## Web Only Components

To create a web only component, the component structure is the same as usual:

```
|- my
   | my.component.css
   | my.component.html
   | my.component.ts
```

You just need to exclude the component from **NativeScript's AOT TypeScript Config** (`tsconfig.aot.json`), for example:

```json
{
  ...
  "exclude": [
    "**/*.ns.ts",
    "**/*.tns.ts",
    "**/*.android.ts",
    "**/*.ios.ts",
    "**/*.spec.ts",
    "src/app/my/my.component.ts"  <== Like this
  ]
}
```