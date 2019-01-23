---
title: Troubleshooting
description: Write and execute UI E2E automation tests to ensure that newly added features are working correctly and no regressions are introduced in the mobile app.
position: 90
tags: ui testing, app ui testing, nativescript ui testing, automation testing, app automation testing, nativescript automation testing, appium, ui test automation, e2e testing
slug: e2e-testing-troubleshooting
previous_url: /testing,/core-concepts/testing
---

# E2E Testing - Troubleshooting

Use the `--verbose` option to get error details:

```
$ npm run e2e -- --runType android25 --verbose
```

## Common Problems

1. Missing installed appium
2. Misleading appPath or capabilities location. Please make sure that the path to the app or capabilities location is correct.
3. Misleading detials for device specified in appium config

// TODO: Add more info about the common problem - what do they mean and how to solve them