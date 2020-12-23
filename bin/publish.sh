#!/bin/bash

echo "#############################################################################"
echo " ____ ___ ____  ____ _____  _    ____ _  __"
echo "/ ___|_ _|  _ \/ ___|_   _|/ \  / ___| |/ /"
echo "\___ \| || |_) \___ \ | | / _ \| |   | ' / "
echo " ___) | ||  __/ ___) || |/ ___ \ |___| . \ "
echo "|____/___|_|   |____/ |_/_/   \_\____|_|\_\\"
echo ""
echo "#############################################################################"
echo ""

BRANCH=$(git status | head -1 | cut -c 11-)
RELEASE=$(tail -1 RELEASE)

## check if branch passed requirement (release)
if [[ "${BRANCH}" != "release-"* ]]; then 
    echo "Cannot publish from this branch (${BRANCH}).";
    exit 0
fi

read -p "Specify new version to release (Current: ${RELEASE}): " VER
read -p "Are you ready to publish ${BRANCH} to master: (y/n)?: " SE
if [[ "${SE}" == "y" ]]; then
    echo ${VER} > RELEASE
    sed -i "s|\"version\": \"${RELEASE}\"|\"version\": \"${VER}\"|g" package.json
    git commit -a -m "${BRANCH} -> master ($VER})"
    git push origin ${BRANCH}
    git checkout master
    git merge --no-ff ${BRANCH}
    git tag -a {$VER}
    git add .
    git commit -m "${BRANCH} -> master ($VER})"
    git push
    git push origin --tags

    node_modules/.bin/gulp build --env production && node_modules/.bin/gulp publish --env production 
    rsync --recursive --exclude=assets dist/ lamp:/var/www/html/www/

    git checkout develop
    git merge --no-ff ${BRANCH}
    git add .
    git commit -m "${BRANCH} -> master ($VER})"
    git push
    git branch -d ${BRANCH}
    
    exit 0
fi