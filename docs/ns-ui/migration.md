---
title: Migrating
page_title: Migrating | Progress NativeScript UI Documentation
description: Each component from NativeScript UI now has its own package available for all NativeScript developers on NPMJS.
slug: nativescript-ui-migration
tags: migration, nativescript-pro-ui, nativescript, free, plugin
position: 100
publish: true
---

# Overview

Some ago we [announced](https://www.nativescript.org/blog/nativescript-ui-whats-next) that each component from NativeScript UI was soon to be used as a standalone plugin. Now that the change is a fact, the [nativescript-pro-ui](https://www.npmjs.com/package/nativescript-pro-ui), [nativescript-telerik-ui](https://www.npmjs.com/package/nativescript-telerik-ui) and [nativescript-telerik-ui-pro](https://www.npmjs.com/package/nativescript-telerik-ui-pro) plugins are being deprecated in favor of the new plugins that contain only one component each. This article will guide you through the process of migrating your existing applications to the new plugins.

# Migration Steps

If you have an existing NativeScript application using one of the depecated plugins: `nativescript-pro-ui`, `nativescript-telerik-ui` or `nativescript-telerik-ui-pro` you can follow these steps to migrate:

1. Remove the old plugin by using the plugin remove command. For example if you have been using `nativescript-pro-ui`, execute the following command:
        ```
        tns plugin remove nativescript-pro-ui
        ```

2. Add the new plugins for each component that your application is using. For example, if you are using all components, execute the following commands:
        ```
        tns plugin add nativescript-ui-chart
        tns plugin add nativescript-ui-calendar
        tns plugin add nativescript-ui-autocomplete
        tns plugin add nativescript-ui-listview
        tns plugin add nativescript-ui-sidedrawer
        tns plugin add nativescript-ui-gauge
        tns plugin add nativescript-ui-dataform
        ```

3. Iterate over your `.ts` and `.js` files where the plugin is imported and make sure ro change the import from `nativescript-pro-ui/<component-name>` to `nativescript-ui-<component-name>`. For example, if you have a chart import `nativescript-pro-ui/chart`, change it to `nativescript-ui-chart`. This applies to imports regarding Angular wrappers as well. In that case you will have to update your paths from `nativescript-pro-ui/<component-name>/angular` to `nativescript-ui-<component-name>/angular`. For example, if you have a chart import `nativescript-pro-ui/chart/angular`, change it to `nativescript-ui-chart/angular`.

    > Note, that the `NativeScriptUIGaugesModule` has been renamed to `NativeScriptUIGaugeModule`, meaning that if you are using the Gauge in Angular, you will have to change the `import { NativeScriptUIGaugesModule } from "nativescript-pro-ui/gauges/angular";` to `import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";`


4. If you have `.xml` files that have imports of the old packages, you will need to update them as well from `nativescript-pro-ui/<component-name>` to `nativescript-ui-<component-name>`. For example, if you have a chart import `nativescript-pro-ui/chart`, change it to `nativescript-ui-chart`.

5. Rebuild the application.

> You may need to delete the `node_modules` and `platforms` directories if you get an error during the build.
