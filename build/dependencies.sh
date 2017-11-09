#!/usr/bin/env bash

get_artifacts() {
    BUILD_NAME="$1"
    ARTIFACT_ID="$2"
    JENKINS_PREFIX="http://nsbuild01.telerik.com:8080/build/view/Docs/job/"
    JENKINS_SUFFIX="/lastSuccessfulBuild/artifact/bin/dist/$ARTIFACT_ID.tar.gz"
    URL="$JENKINS_PREFIX$BUILD_NAME$JENKINS_SUFFIX"
    wget --clobber --content-disposition "$URL"
    echo "URL: $URL"
}

get_dependencies() {
    rm -rf *.tar.gz
    rm -rf _dependencies
    mkdir -p _dependencies
    (cd _dependencies &&
        get_artifacts "sdk-examples-docs-$ENV" "sdk-code-samples" && \
        get_artifacts "nativescript-angular-docs-$ENV" "nativescript-angular-snippets" && \
        get_artifacts "modules-docs-$ENV" "nativescript-api-reference-stable" && \
        get_artifacts "modules-docs-$ENV" "nativescript-cookbook-stable" && \
        get_artifacts "modules-docs-$ENV" "nativescript-snippets-stable" && \
        get_artifacts "sidekick-docs-$ENV" "sidekick-docs")
}

extract_prebuild_dependencies() {
    (cd Content && \
         tar zxvf ../_dependencies/nativescript-snippets*.tar.gz && \
         tar zxvf ../_dependencies/nativescript-angular-snippets*.tar.gz && \
         tar zxvf ../_dependencies/nativescript-cookbook*.tar.gz && \
         tar zxvf ../_dependencies/sdk-code-samples*.tar.gz)
}

extract_postbuild_dependencies() {
    (cd dist && \
         tar zxvf ../_dependencies/nativescript-api-reference*.tar.gz && \
         tar zxvf ../_dependencies/sidekick-docs*.tar.gz)
}
