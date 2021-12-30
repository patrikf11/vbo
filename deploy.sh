#!/usr/bin/env sh

set - e

npm run build

MSG=`git log -1 --pretty=%B`
cd dist

git init 
git add -A
git commit -m '${MSG}'
git push -f git@github.com:patrikf11/vbo.git master:gh-pages

cd -
