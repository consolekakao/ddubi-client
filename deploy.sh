#!/bin/bash

tarname="ddubi-client"

rm -rf dist "$tarname.tar"

yarn build

tar cvf "$tarname.tar" ./dist

SSH="ssh -i ~/Downloads/develop.pem ubuntu@3.37.80.237"

${SSH} "cd /var/www/ddubi-client;  rm -rf *;"

scp -i ~/Downloads/develop.pem ${tarname}.tar ubuntu@3.37.80.237:/var/www/ddubi-client

${SSH} "cd /var/www/ddubi-client; tar xvf ${tarname}.tar;"
