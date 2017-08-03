#!/bin/bash
set -e

for jekyll_dir in {_assets,_includes,_layouts,_plugins,fonts,images,web.config}; do
    rsync -a --delete $jekyll_dir ./Content
done

