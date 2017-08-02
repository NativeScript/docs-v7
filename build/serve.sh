#!/bin/bash

set -e
export dir=dist
./sync-dist.sh

(cd $dir && ../run-jekyll.sh serve --host 0.0.0.0)
