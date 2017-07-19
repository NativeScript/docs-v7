#!/usr/bin/env bash

get_artifacts() {
    BUILD_NAME="$1"
    shift
    
    while (( "$#" )) ; do
        ARTIFACT_ID="$1"
        shift

        JENKINS_PREFIX="http://nsbuild01.telerik.com:8080/build/view/Docs/job/"
        JENKINS_SUFFIX="/lastSuccessfulBuild/deployedArtifacts/download/artifact.$ARTIFACT_ID/"
        URL="$JENKINS_PREFIX$BUILD_NAME$JENKINS_SUFFIX"

        wget --clobber --content-disposition "$URL"
        echo "URL: $URL"
    done
}

get_dependencies() {
    rm -rf *.tar.gz
    rm -rf _dependencies
    mkdir -p _dependencies
    (cd _dependencies &&
        get_artifacts "sdk-examples-docs-$ENV" 1 && \
        get_artifacts "nativescript-angular-docs-$ENV" 1 && \
        get_artifacts "modules-docs-$ENV" {1..3})
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
         tar zxvf ../_dependencies/nativescript-api-reference*.tar.gz)
}
