#!/bin/bash
set -ex

ENV="${1:-nativescript}"
export JEKYLL_ENV="$ENV"

./sync-content.sh
./run-jekyll.sh build --config _config_$ENV.yml,_config.yml
