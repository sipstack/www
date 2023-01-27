func1() {
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
# if [ ! -d "src/views/pages/resources/knowledge-base/${CATEGORY}/${SLUG}" ]; then
#   mkdir -p src/views/pages/resources/knowledge-base/${CATEGORY}/${SLUG}
# fi

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
        photo: "${IMAGE_AUTHOR}",
    },
})

@@include('components/layouts/tail.html')
EOF
}

## output the data json file for blog landing
func2() {
# CREATED="${CREATED//-/$''}"
# create folder if doesnt exist

if [ ! -d "src/data/knowledge-base/${CATEGORY}" ]; then
  mkdir -p src/data/knowledge-base/${CATEGORY}/
fi

cat << EOF > src/data/knowledge-base/${CATEGORY}/${SLUG}.json
{
  slug: "${SLUG}",
  title: "${TITLE}",
  description: "${DESCRIPTION}",
  category: "${CATEGORY}",
  tags: [${TAGS}],
  created: "${CREATED}",
  author: {
    name: "${AUTHOR}",
    photo: "/assets/img/team/${IMAGE_AUTHOR}"
  }
},
EOF
}