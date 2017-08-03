#!/usr/bin/env bash
set -e

API_TARGET=${1:-$TARGET_DIR/api-reference}

repoDir=${NS_REPO_DIR:-./_nsRepo}
apiRefBranch=${API_REF_BRANCH:-master}
nsDirName=nativescript
nsDir=$repoDir/$nsDirName

(cd $nsDir && \
    npm install && \
    npm run typedoc)

rsync -a --delete "$nsDir/bin/dist/apiref/" "$API_TARGET"
