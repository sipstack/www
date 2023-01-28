#!/bin/bash

# SLUG=
# CATEGORY=
# TITLE=
# DESCRIPTION=
# KEYWORDS=
# AUTHOR=
# IMAGE=
# CREATED=
# DURATION=

# generate blog from params
echo "Reminder: this command must be run from project root."
echo "-----------------------------------------------------"

## INITIAL VARS -------------------------------------------------------
COUNT=0

## INITIAL INCLUDES ---------------------------------------------------
. "${BASH_SOURCE%/*}/build/_common.sh"
. "${BASH_SOURCE%/*}/build/_blog.sh"


# generate blog from params
echo "Reminder: this command must be run from project root."
echo "-----------------------------------------------------"

  for file in src/views/pages/resources/blog/*/article.ini ; do
    IFS="\/" read -a TEST <<< $file
    SLUG=${TEST[5]}
    echo "Processing ${SLUG}"
    . src/views/pages/resources/blog/${SLUG}/article.ini

    ## common ----------------------------------------------------------
    common_clean
    common_tags
    common_imgauthor

    ## functions --------------------------------------------------------
    func1
    func2
    func4
    COUNT=$(expr ${COUNT} + 1)
  done

if [ ${COUNT} -gt 0 ]; then
  func3
  func5
fi

echo "Completed successfully!"
exit 0