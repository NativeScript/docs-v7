# Jenkins Build Infrastructure

This document describes the way documentation artifacts are built on Jenkins.

The final documentation build is a static web site that is mostly built by Jekyll. There are cases where Jekyll is not enough, and we have some additional steps that provide additional Jekyll input articles and manipulate the final site after Jekyll finishes.

Additional dependencies:

- Code snippets coming from the NativeScript (modules) repository.
- Code snippets coming from the nativescript-angular repository.
- Cookbook articles from the NativeScript repository.
- API reference HTML from the NativeScript repository.
- Code samples articles coming from the nativescript-sdk-examples-ng repository.

## Build machine setup

You need `rvm` and Ruby 2.3.0. Then you need all the gems in the bundler file.

1. Import the `rvm` keys
    `$ curl -sSL https://rvm.io/mpapis.asc | gpg2 --import -`
2. Install rvm and Ruby 2.3.0:
    `$ curl -sSL https://get.rvm.io | bash -s stable --ruby=2.3.0`
3. Activate rvm:
    `$ . ~/.rvm/scripts/rvm`
4. Install bundler:
    `$ gem install bundler`
5. Install jekyll and other gems:
    `$ bundle install`


## Upstream Builds

Each of the dependency repositories has a Jenkins build configured that produces several artifacts which the final documentation build uses. Depending on the current branch, we can have `*-stable` (master branch) or `*-production` (release branch) builds. For example:

- Whenever the NativeScript repository master branch changes it triggers a `modules-docs-stable` build. It will produce three archives:
    - nativescript-api-reference-stable-1.2.3.200.tar.gz
    - nativescript-cookbook-stable-1.2.3.200.tar.gz
    - nativescript-snippets-stable-1.2.3.200.tar.gz
- The same happens for the other repositories:
    - nativescript-angular triggers `nativescript-angular-docs-stable` and produces `nativescript-angular-snippets-stable-1.2.3.200.tar.gz`.
    - nativescript-sdk-examples-ng triggers `sdk-examples-docs-stable` and produces `sdk-code-samples-stable-1.2.3.200.tar.gz`.

## Main Docs Build

The "main" `docs-stable` and `docs-production` builds are very simple now. They fetch the last successful build artifacts from the upstream builds, extract the archives to the correct locations, and build the Jekyll site. There are some weird moments though:

- Jekyll will wipe its entire output directory, so we take extra care to run the "nativescript" Jekyll build before the "angular" one, since the "angular" one outputs its files in a subdirectory of the "nativescript" build. If the order was reversed, the "nativescript" build would wipe the "angular" build output.
- We place the prebuilt `api-reference` folder in the "nativescript" output directory. Again, that has to happen *after* Jekyll builds to prevent it from wiping that content.
- Upstream build artifact resolution is controlled by the `ENV` environment variable. It must be either `stable` or `production`, so that it resolves the correct build and its artifact URL.

## Git Submodules and Additional Content

The main content comes from the `Content` git submodule. That one contains other git submodules for articles coming from the runtimes' repositories.

There is *no* infrastructure in place to maintain those submodule references. Whenever an article changes in the runtimes repo, the submodule reference has to be updated.

## Changelog Management

The documentation build tries to extract changelogs from various repositories: NativeScript modules, runtimes, CLI, etc. This is error-prone, slow, and sub-optimal. We have agreed on moving all changelogs to the NativeScript/docs repo as separate markdown documents and link to those from the external repositories' changelog articles.

# Configure Production Builds (delete me after the 3.0 release!)

0. Create `release` branches for all related repositories. Base those on the `master` branch so that they have the necessary scripts:
   - telerik/nativescript-docs
   - NativeScript/docs
   - prerequisite repositories (see above).

1. Make sure NativeScript/docs submodules point to the right branches for runtime repos.
2. Change the `docs-production` Jenkins build, so that its script matches the one for `docs-stable` almost perfectly. The only difference should be the `export ENV="production"` part.
3. Change all dependency `*-production` builds, so that they:
    - pull their sources from the `release` branch of the respective repository (they use `master` now).
    - trigger a `docs-production` build on success.
4. If everything went well, you should have a working production docs build.
