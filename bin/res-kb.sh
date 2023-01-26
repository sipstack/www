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
echo "You can also run this with bin/res-kb.sh <catagory>/<slug>"
echo "-----------------------------------------------------"

## if path provided as parameter check ini
if [ ! -z "$1" ]; then
SLUG=$1
  echo "Checking for INI file: ${SLUG}"
  if [ -f "src/views/pages/resources/knowledge-base/${CATEGORY}/${SLUG}/article.ini" ]; then

    . src/views/pages/resources/knowledge-base/${CATEGORY}/${SLUG}/article.ini
 
  else
    exit 0
  fi
else
  read -p "Article Slug (Example: article-name): " SLUG
  read -p "Article Category: " CATEGORY
  read -p "Article Title: " TITLE
  read -p "Article Description: " DESCRIPTION
  read -p "Article Duration: " DURATION
  read -p "Article Keywords (voip, pbx, technology): " KEYWORDS
  read -p "Article Author: " AUTHOR
  # read -p "Article Image: " IMAGE
  read -p "Article Pubish Date (yyyy-mm-dd): " CREATED
fi
# clean up 
DESCRIPTION="${DESCRIPTION//’/$'\''}"
TITLE="${TITLE//’/$'\''}"

# generate tag in array format from keywords
TAGS="'${KEYWORDS//,/$'\', \''}'"
TAGS="${TAGS//\' /$'\''}"

# generate author image name from AUTHOR
arr=(${AUTHOR})
IMAGE_AUTHOR="${arr[0]}${arr[1]:0:1}" # returns first name + lastname letter1
IMAGE_AUTHOR=${IMAGE_AUTHOR,,} #lower case

# create folder if doesnt exist
if [ ! -d "src/views/pages/resources/knowledge-base/${CATEGORY}/${SLUG}" ]; then
  mkdir -p src/views/pages/resources/knowledge-base/${CATEGORY}/${SLUG}
fi

cat << EOF > src/views/pages/resources/knowledge-base/${CATEGORY}/${SLUG}/index.html
<!-- prettier-ignore -->
@@include('components/layouts/head.html', {
    title: "${TITLE} // SIPSTACK",
    meta: {
        description: "${DESCRIPTION}",
        keywords: "${KEYWORDS}",
        author: "${AUTHOR}",
        robots: "index, follow",
        url: "resources/knowledge-base/${CATEGORY}/${SLUG}",
        image: "logo/logo.png",
        type: "article",
        created: "${CREATED}", 
        updated: "", 
    },
    body: "",
    css: []
})


<!-- prettier-ignore -->
@@include('components/sections/kb.article.html', {
    slug: "${SLUG}",
    title: "${TITLE}",
    description: "${DESCRIPTION}",
    category: "${CATEGORY}",
    created: "${CREATED}",
    updated: "",
    duration: "${DURATION}",
    author: {
        name: "${AUTHOR}",
        role: "Author",
        photo: "${IMAGE_AUTHOR}.jpg",
    },
})

@@include('components/layouts/tail.html')
EOF

echo "Completed successfully!"
echo "Please check output: src/views/pages/resources/knowledge-base/${CATEGORY}/${SLUG}/index.html"