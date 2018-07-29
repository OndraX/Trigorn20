#!/bin/bash
npm i -g npm-check-updates
#npm install findup-sync resolve nopt -g
#npm link findup-sync resolve nopt
# requires apt install node-grunt-cli
ncu -u
npm install
npm i -D grunt-cli
npm update --save
