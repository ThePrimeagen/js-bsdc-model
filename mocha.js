#!/usr/bin/env sh
npm install
node ./node_modules/mocha/bin/mocha -R nyan -w -G --recursive 
# --debug-brk=49850

