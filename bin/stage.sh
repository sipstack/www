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

read -p "Are you pull requesting? (y/n): " PR 
    PR=${PR:-n} 
    case "$PR" in 
    y|Y ) echo "yes";;
    n|N ) echo "no";;
    * ) echo "Options: y/n" && exit 0;;
    esac

# if [[ "${PR}" == "y" ]]; then
#     read -p "Did you export insomnia? (y/n): " IN 
#         IN=${IN:-n} 
#             case "$IN" in 
#             y|Y ) echo "yes";;
#             n|N ) echo "Please import insomnia first and re-run." && exit 0;;
#             * ) echo "Options: y/n" && exit 0;;
#             esac
    
    ## revert the ecosystem.config.js file to stage develop branch by default
    sed -i "s|origin/${BRANCH}|origin/develop|g" ecosystem.config.js
    git add . && git commit -m "pull request from branch: ${BRANCH}" && git push
    echo "Please pull request from Azure DevOps"
    exit 0
fi

read -p "Ready to deploy to PRODUCTION environment using branch: ${BRANCH}? (y/n): " SE 
    SE=${SE:-n} 
    case "$SE" in 
    y|Y ) echo "yes";;
    n|N ) echo "no" && exit 0;;
    * ) echo "Options: y/n" && exit 0;;
    esac


if [[ "${SE}" == "y" ]]; then
    ## update the ecosystem.config.js file to stage current branch
    git add . && git commit -m "stage test on branch: ${BRANCH}" && git push
    node_modules/.bin/gulp publish --env production
   
    echo "If Success: check https://www.sipstack.com and logs."
    exit 0
fi
