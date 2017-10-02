#!/usr/bin/env bash
set -ex

skipDependencies=false
for i in $@; do
    if [ $i = "--skipDependencies" ]; then
        skipDependencies=true
    fi
done

ENV="${ENV:-stable}"

if [ "$skipDependencies" = false ]; then
    . ./dependencies.sh
fi 

PACKAGE_VERSION=${PACKAGE_VERSION:-0.0.0}
export TARGET_DIR=dist
rm -rf $TARGET_DIR
mkdir -p $TARGET_DIR

if [ "$skipDependencies" = false ]; then
    get_dependencies
    extract_prebuild_dependencies
fi

fetchExternals=${FETCH_EXTERNALS:=}
./update-changelog.sh $fetchExternals

# Run "nativescript" build first since Jekyll wipes its target dir and
# would wipe the "angular" output subdir
./build-jekyll.sh "nativescript"
./build-jekyll.sh "angular"

if [ "$skipDependencies" = false ]; then
    extract_postbuild_dependencies
fi

(cd $TARGET_DIR && \
    tar -czvf "../site_${PACKAGE_VERSION}.tar.gz" ./ \
        --exclude="./snippets" \
        --exclude="./angular/snippets")
