#!/bin/bash
BRANCH=$(git status | head -1 | cut -c 11-)
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
# RELEASE=$(grep -oP '(?<="version": ").*?(?=",)' package.json)
# IFS='.' read -r -a VERSION <<< "$RELEASE"
# BUMP=$(expr ${VERSION[2]} + 1)
# NEWRELEASE=${VERSION[0]}.${VERSION[1]}.$BUMP

# read -p "Confirm new version bump - Current: ${RELEASE} -> ${NEWRELEASE} (Press enter to confirm or input new version): " VER
# VER=${VER:-$NEWRELEASE}

read -p "Are you ready to COMMIT ${BRANCH}: (y/n)?: " SE
if [[ "${SE}" == "y" ]]; then
    sed -i "s|\"version\": \"${RELEASE}\"|\"version\": \"${VER}\"|g" package.json
    exit 0
    git commit -a -m "${BRANCH} (${VER})"
    git push origin ${BRANCH}
    git checkout master
    git merge --no-ff ${BRANCH} -m "${BRANCH} -> master (${VER})"
    git tag -a ${VER} -m "${VER}"
    git add .
    git commit -m "${BRANCH} -> master (${VER})"
    git push
    git push origin --tags 

        read -p "Ready to deploy to ${VER} environment using release: ${BRANCH}? (y/n): " SE 
    SE=${SE:-n} 
    case "$SE" in 
        y|Y ) echo "yes";;
        n|N ) echo "no" && exit 0;;
        * ) echo "Options: y/n" && exit 0;;
    esac

    RESP=$(node_modules/.bin/pm2 deploy ecosystem.config.js production update --env production | tail -1 )
    echo $RESP

    read -p "Did the publish succeed? (y/n): " SE 
    SE=${SE:-n} 
    case "$SE" in 
        y|Y ) echo "yes";;
        n|N ) echo "no" && exit 0;;
        * ) echo "Options: y/n" && exit 0;;
    esac

    echo "Pushing content to CDN"
    mkdir -p tmp
    gulp publish --env production

    git checkout develop
    git merge --no-ff ${BRANCH} -m "${BRANCH} -> develop (${VER})"
    git add .
    git commit -m "${BRANCH} -> develop (${VER})"
    git push
    git branch -d ${BRANCH}
    git push origin --delete ${BRANCH}

    echo "------------------------------------------------------------------"
    echo "Success! https://hub.sipstack.com is now live with version: ${VER}"

    exit 0
fi