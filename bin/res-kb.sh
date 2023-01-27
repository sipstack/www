#!/bin/bash

. "${BASH_SOURCE%/*}/res-kb_func.sh"
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
echo "You can also run this with bin/res-kb.sh <catagory>/<slug>"
echo "-----------------------------------------------------"

## if path provided as parameter check ini
if [ ! -z "$2" ]; then
CATEGORY=$1
SLUG=$2
  echo "Checking for INI file: ${SLUG}"
  if [ -f "src/views/pages/resources/knowledge-base/${CATEGORY}/${SLUG}/article.ini" ]; then

    . src/views/pages/resources/knowledge-base/${CATEGORY}/${SLUG}/article.ini
 
  else
    echo "INI file not found. Please check and try again."
    exit 0
  fi
else
  # read -p "Article Slug (Example: article-name): " SLUG
  # read -p "Article Category: " CATEGORY
  # read -p "Article Title: " TITLE
  # read -p "Article Description: " DESCRIPTION
  # read -p "Article Duration: " DURATION
  # read -p "Article Keywords (voip, pbx, technology): " KEYWORDS
  # read -p "Article Author: " AUTHOR
  # # read -p "Article Image: " IMAGE
  # read -p "Article Pubish Date (yyyy-mm-dd): " CREATED
  for file in src/views/pages/resources/knowledge-base/*/*/article.ini ; do
    IFS="\/" read -a TEST <<< $file
    
    echo "Processing ${file}"
    . ${file}
    func1
    func2
    # func3
  done
fi


echo "Completed successfully!"
echo "Please check output: src/views/pages/resources/knowledge-base/${CATEGORY}/${SLUG}/index.html"