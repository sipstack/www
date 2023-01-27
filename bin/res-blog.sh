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

## if path provided as parameter check ini
if [ ! -z "$1" ]; then
SLUG=$1
  echo "Checking for INI file: ${SLUG}"
  if [ -f "src/views/pages/resources/blog/${SLUG}/article.ini" ]; then

    . src/views/pages/resources/blog/${SLUG}/article.ini
 
  else
    exit 0
  fi
else
  read -p "Article Slug (Example: article-name): " SLUG
  read -p "Article Category (Example: Technology / SPAM / Scam): " CATEGORY
  read -p "Article Title: " TITLE
  read -p "Article Description: " DESCRIPTION
  read -p "Article Duration: " DURATION
  read -p "Article Keywords (voip, pbx, technology): " KEYWORDS
  read -p "Article Author: " AUTHOR
  read -p "Article Image: " IMAGE
  read -p "Article Pubish Date (yyyy-mm-dd): " CREATED
fi
# clean up 
DESCRIPTION="${DESCRIPTION//’/$'\''}"
TITLE="${TITLE//’/$'\''}"

# generate tag in array format from keywords
TAGS="'${KEYWORDS//,/$'\', \''}'"
TAGS="${TAGS//\' /$'\''}"

# generate author image name from AUTHOR
if [ -z "${IMAGE_AUTHOR}" ]; then 
  arr=(${AUTHOR})
  IMAGE_AUTHOR="${arr[0]}${arr[1]:0:1}" # returns first name + lastname letter1
  IMAGE_AUTHOR=${IMAGE_AUTHOR,,}.jpg #lower case
fi
# create folder if doesnt exist
if [ ! -d "src/views/pages/resources/blog/${SLUG}" ]; then
  mkdir -p src/views/pages/resources/blog/${SLUG}
fi

cat << EOF > src/views/pages/resources/blog/${SLUG}/index.html
<!-- prettier-ignore -->
@@include('components/layouts/head.html', {
    title: "${TITLE} // SIPSTACK",
    meta: {
        description: "${DESCRIPTION}",
        keywords: "${KEYWORDS}",
        author: "${AUTHOR}",
        robots: "index, follow",
        url: "resources/blog/${SLUG}",
        image: "resources/blog/${IMAGE}",
        type: "article",
        created: "${CREATED}", 
        updated: "", 
    },
    body: "",
    css: []
})

<!-- ARTICLE START --------------------------------------------------------------------------------------------- -->
<!-- prettier-ignore -->
@@include('components/sections/blog.article-header.html', {
    slug: "${SLUG}",
    image: "${IMAGE}",
    category: "${CATEGORY}",
    tags: [${TAGS}],
    views: "0",
    title: "${TITLE}",
    abstract: "${DESCRIPTION}",
    created: "${CREATED}",
    updated: "",
    duration: "${DURATION}",
    author: {
        name: "${AUTHOR}",
        role: "Author",
        photo: "${IMAGE_AUTHOR}",
    },
})

<!-- prettier-ignore -->
@@include('components/sections/blog.article-v1.html', {
    slug: "${SLUG}",
})

<!-- ARTICLE END -------------------------------------------------------------------------------------------- -->
@@include('components/layouts/tail.html')
EOF

## output the data json file for blog landing
cat << EOF > src/data/blog/${CREATED}-${SLUG}.json
{
  slug: "${SLUG}",
  title: "${TITLE}",
  description: "${DESCRIPTION}",
  category: "${CATEGORY}",
  tags: [${TAGS}],
  image: "/assets/img/resources/blog/${IMAGE}",
  created: "${CREATED}",
  author: {
    name: "${AUTHOR}",
    photo: "/assets/img/team/${IMAGE_AUTHOR}"
  }
},
EOF

echo "Completed successfully!"
echo "Please check output: src/views/pages/resources/blog/${SLUG}/index.html"