#!/usr/bin/env bash

apt-get -qq update
# Install build tools
apt-get install -y make g++ git curl vim
apt-get install -y bash-completion wget python-software-properties python build-essential