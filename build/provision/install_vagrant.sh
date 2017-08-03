#!/bin/bash

set -e

nodejs() {
    curl https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

    . ~/.nvm/nvm.sh
    nvm install v5.11.0
    nvm alias default 5.11.0
}

gruntcli() {
    npm install -g grunt-cli
}

bundler() {
    sudo gem install bundler
}

install_ruby() {
    curl -sSL https://get.rvm.io | bash -s stable --ruby=2.3.0
    . ~/.rvm/scripts/rvm
    gem install bundler
}

install_project_gems() {
    cd /vagrant
    bundle install
}

setNsRemoteRepoDirVar() {
    echo "export NS_REPO_DIR=/ns/_remoteRepo" >> ~/.bashrc
}

setSdkRemoteRepoDirVar() {
    echo "export SDK_REPO_DIR=/ns-ng-sdk/_remoteRepo" >> ~/.bashrc
}

if [ "${BASH_SOURCE[0]}" == "$0" ] ; then
    nodejs
    gruntcli
    install_ruby
    install_project_gems
    setNsRemoteRepoDirVar
    setSdkRemoteRepoDirVar
fi
