#!/bin/bash

dir=${dir:-dist}

mkdir -p $dir

rsync -a --delete --exclude $dir --exclude .git --exclude _site --exclude .gitmodules --exclude .gitignore --exclude node_modules --exclude remote_repos --exclude Content ./ $dir
rsync -a Content/ $dir
