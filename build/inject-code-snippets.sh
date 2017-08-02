#!/bin/bash
set -e

branch=${branch:-master}
repoTmp="remote_repos/"

angularRepo="nativescript-angular"
angularDir="$repoTmp/$angularRepo/tests"
angularRepoUrl="https://github.com/NativeScript/$angularRepo.git"

nativescriptRepo="NativeScript"
nativescriptDir="$repoTmp/$nativescriptRepo"
nativescriptRepoUrl="https://github.com/NativeScript/$nativescriptRepo.git"

# cleanup
echo "---- Clean-up remote repos"
rm -rf "$repoTmp"
mkdir "$repoTmp"

# Enure mdinject
npm install

injectSnippets() {
    snippetEnv=$1
    snippetDirVar="${snippetEnv}Dir"
    snippetUrlVar="${snippetEnv}RepoUrl"
    snippetDir=${!snippetDirVar}
    snippetRepoUrl=${!snippetUrlVar}

    echo "---- Injecting '$snippetEnv' code snippets from branch $branch"

    (cd "$repoTmp" && git clone --depth 1 --branch "$branch" "$snippetRepoUrl")
    npm run mdinject -- --root="$snippetDir" --docsroot=Content --sourceext=".js|.ts|.xml|.html|.css" --snippettitles="JavaScript|TypeScript|XML|HTML|CSS"

    echo "---- Injecting snippets DONE"
}

injectSnippets "$JEKYLL_ENV"
