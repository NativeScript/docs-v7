#!/bin/bash

set -e

base_packages() {
    apt-get update
    apt-get -y install build-essential git
}

ruby() {
    add-apt-repository -y ppa:brightbox/ruby-ng
    apt-get update
    apt-get -y install ruby2.2 ruby2.2-dev libxml2 zlib1g-dev libxml2-dev
}

curl() {
    apt-get install -y git-core curl
}

nsRemoteRepoDir() {
    rm -rf /ns
    mkdir -p /ns/_remoteRepo
    chown -R vagrant:root /ns
}

sdkRemoteRepoDir() {
    rm -rf /ns-ng-sdk
    mkdir -p /ns-ng-sdk/_remoteRepo
    chown -R vagrant:root /ns-ng-sdk
}

webServer() {
    sudo apt-get -y install nginx
    SITE_CONFIG="/etc/nginx/sites-available/default"
    # point site root to the jekyll output dir
    # enable directory index
    sudo sed -i  \
        -e "s#\s\+root.*;#root /vagrant/dist;#" \
        -e "/autoindex/ d" \
        -e "/^\s*root/ a    autoindex on;" \
        "$SITE_CONFIG"
    service nginx restart
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]] ; then
    base_packages
    curl
    ruby
    nsRemoteRepoDir
    sdkRemoteRepoDir
    webServer
fi
