#!/bin/bash
set -e

if [[ "$#" -ne "0" && "$#" -ne "2" || ( "$#" -eq "2" && "$1" -ne "changes" ) ]]; then
    echo "Invalid arguments. Usage: $0 or $0 changes [branchname]"
    exit
fi

#Fetch the CHANGELOGs from the external repositories and push them to the current branch
[[ "$1" == "changes" ]] && changes="true" || changes="false"


if [[ "$changes" == "true" ]]; then
    # bin links break on Vagrant with Windows host filesystem.
    npm install --no-bin-links

    echo "Updating changelogs. Branch: $2"
    grunt default --branch=$2
fi
