#!/usr/bin/env bash

printf "Installing nodejs ..."
sudo apt-get -qq install -y npm libssl-dev build-essential

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

source $HOME/.nvm/nvm.sh

nvm install 4.2.3
nvm alias default node

npm install -g node-gyp
npm install -g cordova
npm install -g ionic
npm install -g bower
npm install -g gulp