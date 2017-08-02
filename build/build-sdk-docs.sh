#!/usr/bin/env bash
set -e

targetDir=${1:-Content/code-samples}
rm -rf $targetDir
mkdir -p $targetDir

repoDir=${SDK_REPO_DIR:-./_sdkRepo}
sdkExamplesBranch=${SDK_EXAMPLES_BRANCH:-master}
sdkDir=$repoDir/nativescript-sdk-examples-ng

npm install --no-bin-links

rm -rf $repoDir

mkdir $repoDir

(cd $repoDir && git clone --depth 1 --branch $sdkExamplesBranch https://github.com/NativeScript/nativescript-sdk-examples-ng.git)
(cd $sdkDir && npm install)
(cd $sdkDir && npm run build)

cp -R $sdkDir/dist/sdk-examples/* $targetDir

