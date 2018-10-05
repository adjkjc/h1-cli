#!/bin/bash
set -e

BRANCH="develop"
NODE="$(command -v nodejs || command -v node)"

if [ ! -d "repo" ]; then
    mkdir repo;
    curl -L https://github.com/hyperonecom/h1-cli/archive/develop.tar.gz -o /tmp/h1-cli-repo.tar.gz;
    tar xvzf /tmp/h1-cli-repo.tar.gz -C repo --strip-components=1;
fi;

pushd repo;
    npm install;
    rm -r docs;
    mkdir docs;
    $NODE ./bin/h1 config cli;
    npm run docs -- --theme site;
popd;
ln -s repo/docs dist;
