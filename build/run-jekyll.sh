#!/bin/bash

# Fallback to system-wide jekyll install if bundle not found
JEKYLL="jekyll"

if which bundle > /dev/null; then
    JEKYLL="bundle exec jekyll"
fi

$JEKYLL $@
