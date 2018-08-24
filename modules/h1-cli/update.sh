#!/bin/bash
set -e

BRANCH="develop"

if [ ! -d "repo" ]; then
    mkdir repo;
    wget https://github.com/ad-m/h1-cli/archive/add-docs-theme.tar.gz -O /tmp/h1-cli-repo.tar.gz;
    tar xvzf /tmp/h1-cli-repo.tar.gz -C repo --strip-components=1;
fi;

pushd repo;
    npm install;
    rm -r docs;
    mkdir docs;
    nodejs ./bin/h1 config cli;
    npm run docs -- --theme site;
popd;
ln -s repo/docs dist;