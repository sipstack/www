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

. "${BASH_SOURCE%/*}/commit_func.sh"
BRANCH=$(git status | head -1 | cut -c 11-)
# RELEASE=$(tail -1 RELEASE)
RELEASE=$(grep -oP '(?<="version": ").*?(?=",)' package.json)
APPNAME=$(grep -oP '(?<="name": ").*?(?=",)' package.json)
SUBNAME=""

## check if branch passed requirement (release)
# if [[ "${BRANCH}" != "release-"* ]]; then 
if [[ "${BRANCH}" == "main" ]]; then 
    echo "Cannot publish from this branch (${BRANCH}).";
    exit 0
else 
    echo "Commit types:"
    echo "--------------------------------------------------------------------------------"
    echo "feat: (new feature for the user, not a new feature for build script) * DEFAULT"
    echo "fix: (bug fix for the user, not a fix to a build script)"
    echo "docs: (changes to the documentation)"
    echo "style: (formatting, missing semi colons, etc; no production code change)"
    echo "refactor: (refactoring production code, eg. renaming a variable)"
    echo "test: (adding missing tests, refactoring tests; no production code change)"
    echo "chore: (updating grunt tasks etc; no production code change)"
    echo "--------------------------------------------------------------------------------"
    read -p "Specify commit type (feat): " COMMIT_TYPE
        COMMIT_TYPE=${COMMIT_TYPE:-feat} 
        case "$COMMIT_TYPE" in 
            feat ) echo "feat";;
            fix ) echo "fix";;
            docs ) echo "docs";;
            style ) echo "style";;
            refactor ) echo "refactor";;
            test ) echo "test";;
            chore ) echo "chore";;
            * ) echo "Enter a valid commit type." && exit 0;;
        esac 
    
    read -p "Commit message: " COMMIT_MSG
    if [[ "${COMMIT_MSG}" == "" ]]; then
        echo "Enter a valid commit message."
        exit 0
    fi
    git add .
    git commit -m "${COMMIT_TYPE}: ${COMMIT_MSG}"
    git push

    if [[ "${BRANCH}" == "develop" ]]; then 
        # if [ -n "$(git status --porcelain)" ]; then
        #     func_dev1 # build
        # else
        #     echo "No changes on branch: ${BRANCH}. Continue next."
        # fi
        func_dev1 # build
        echo ""
        echo "--------------------------------------------------------------------------------"
        func_yesno "Ready to merge ${APPNAME}: ${BRANCH} to main then deploy to production servers?"
        
        read -p "Specify new version of ${APPNAME} (Current: ${RELEASE}): " VER
            VER=${VER:-${RELEASE}}
        echo ${VER}

        read -p "Are you ready to merge ${BRANCH} to main: (y/n)?: " SE
        if [[ "${SE}" == "y" ]]; then
            # echo ${VER} > RELEASE
            sed -i "s|\"version\": \"${RELEASE}\"|\"version\": \"${VER}\"|g" package.json
            git commit -a --no-verify -m "${BRANCH} (${VER})"
            git push origin ${BRANCH}
            git checkout main
            # git merge --no-ff ${BRANCH} -m "${BRANCH} -> main (${VER})"
            git merge --no-verify --no-ff ${BRANCH} -m "${VER}"
            git tag -a ${VER} -m "${VER}"
            git add .
            # git commit -m "${BRANCH} -> master (${VER})"
            git commit --no-verify -m "${VER}"
            git push
            git push origin --tags 
            git checkout develop
            echo ""
            echo "Merge into main complete: review output above."

            func_dev2 # ci/cd
            func_dev3 # deploy (if required)

            ### when using branch release- ----------------------------
            # echo "Merging main -> develop to complete the commit."
            # git checkout develop
            # git merge --no-ff ${BRANCH} -m "${BRANCH} -> develop (${VER})"
            # git add .
            # git commit -m "${BRANCH} -> develop (${VER})"
            # git push
            # git branch -d ${BRANCH}
            # git push origin --delete ${BRANCH}

            echo "------------------------------------------------------------------"
            echo "Success! ${APPNAME} is now live with version: ${VER}"

            exit 0
        fi
    fi
fi

