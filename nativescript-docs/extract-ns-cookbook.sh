#!/usr/bin/env bash
set -e

COOKBOOK_TARGET=${1:-Content/cookbook}

repoDir=${NS_REPO_DIR:-./_nsRepo}
apiRefBranch=${API_REF_BRANCH:-master}
nsDirName=nativescript
nsDir=$repoDir/$nsDirName

npm install --no-bin-links

rm -rf $repoDir

mkdir $repoDir

(cd $repoDir && \
    git clone --depth 1 --branch $apiRefBranch https://github.com/NativeScript/nativescript.git $nsDirName)
(cd $nsDir && \
    npm install && \
    grunt articles)
cp -R $nsDir/bin/dist/articles/* $COOKBOOK_TARGET
