#!/usr/bin/env bash
set -ex

ENV="${ENV:-stable}"
. ./dependencies.sh

PACKAGE_VERSION=${PACKAGE_VERSION:-0.0.0}
export TARGET_DIR=dist
rm -rf $TARGET_DIR
mkdir -p $TARGET_DIR

get_dependencies
extract_prebuild_dependencies

fetchExternals=${FETCH_EXTERNALS:=}
./update-changelog.sh $fetchExternals

# Run "nativescript" build first since Jekyll wipes its target dir and
# would wipe the "angular" output subdir
./build-jekyll.sh "nativescript"
./build-jekyll.sh "angular"

extract_postbuild_dependencies

(cd $TARGET_DIR && \
    tar -czvf "../site_${PACKAGE_VERSION}.tar.gz" ./ \
        --exclude="./snippets" \
        --exclude="./angular/snippets")
