#!/bin/bash
set -e

default_branch=${branch:-master}
repoTmp="${1:-./_nsRepo/}"

angularRepo="nativescript-angular"
angularDir="$repoTmp/$angularRepo/tests"
angularRepoUrl="https://github.com/NativeScript/$angularRepo.git"

nativescriptRepo="nativescript"
nativescriptDir="$repoTmp/$nativescriptRepo"
nativescriptRepoUrl="https://github.com/NativeScript/$nativescriptRepo.git"

# cleanup
echo "---- Clean-up remote repos"
rm -rf "$repoTmp"
mkdir -p "$repoTmp"

# Ensure snippets tool installed
npm install

extractSnippets() {
    snippetEnv=$1
    branch="${2:-default_branch}"
    snippetDirVar="${snippetEnv}Dir"
    snippetUrlVar="${snippetEnv}RepoUrl"
    snippetRepoVar="${snippetEnv}Repo"
    snippetDir=${!snippetDirVar}
    snippetRepoUrl=${!snippetUrlVar}
    snippetRepo=${!snippetRepoVar}

    echo "---- Extracting '$snippetEnv' code snippets from branch $branch"

    (cd "$repoTmp" && git clone --depth 1 --branch "$branch" "$snippetRepoUrl" "$snippetRepo")
    npm run mdextract -- --root="$snippetDir" --target=Content/snippets --sourceext=".js|.ts|.xml|.html|.css"

    echo "---- Extracting snippets DONE"
}

rm -rf Content/snippets
mkdir Content/snippets

extractSnippets "nativescript" "$default_branch"
extractSnippets "angular" "$default_branch"
