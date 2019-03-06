---
title: Continuous Integration
titletag: End to End Testiing - Continuous Integration
description: Write and execute UI E2E automation tests to ensure that newly added features are working correctly and no regressions are introduced in the mobile app.
position: 50
tags: ui testing, app ui testing, nativescript ui testing, automation testing, app automation testing, nativescript automation testing, appium, ui test automation, e2e testing
slug: e2e-testing-continuous-integration
previous_url: /testing,/core-concepts/testing
---

# Continuous Integration

Once you have a set of tests, it's good to run them on a regular basis or when a new code is added to the code base. This is where the Continuous Integrations(CI) comes into play. There are different platforms that can be used for CI - some require local installation, others are public and free for open-source projects. To mention some of them:

- [Jenkins](https://jenkins.io/)
- [Travis CI](https://travis-ci.org/)
- [Circle CI](https://circleci.com/)
- [SauceLabs](https://saucelabs.com/)


A descriptive real example of CI you can find in [Plugin UI Tests]({% slug plugin-ui-tests %}#continuous-integration) article that demostrates step by step all the needed actions.

In short, you need a .travis.xml on the root of the repository which tells travis what machine instances to setup and which commands to execute. Then in the UI testing stage defined in your travis file, run the nativescript-dev-appium command you usually use by providing proper *--runType* and just add *--sauceLab* flag that tells plugin to execute tests in SauceLabs instead locally.