---
title: Troubleshooting
titletag: End to End Testiing - Troubleshooting
description: Write and execute UI E2E automation tests to ensure that newly added features are working correctly and no regressions are introduced in the mobile app.
position: 90
tags: ui testing, app ui testing, nativescript ui testing, automation testing, app automation testing, nativescript automation testing, appium, ui test automation, e2e testing
slug: e2e-testing-troubleshooting
previous_url: /testing,/core-concepts/testing
---

# Troubleshooting

Use the `--verbose` option to get error details:

```
$ npm run e2e -- --runType android25 --verbose
```

## Common Problems

Most of them provide error/warning and suggest an action.

1. Missing installed appium. To resolve it install appium globally.

    ```
    npm i -g appium
    ```
2. Misleading appPath or capabilities location. Please make sure that the path to the app or capabilities location is correct.
3. Misleading details for device specified in appium config. If the plugin fails to find the emulator/simulator you have, check that the *avd*, *platformName*, *deviceName* or any other related capability is properly set.