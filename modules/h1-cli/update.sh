#!/bin/bash
BRANCH="develop"
if [ ! -d "repo" ]; then
    git clone git@github.com:hyperonecom/h1-cli.git -b "$BRANCH" repo
fi;
pushd repo;
git pull origin "$BRANCH";
npm install;
rm -r docs; mkdir docs;
npm run docs -- --theme site;
popd;
ln -s repo/docs dist;