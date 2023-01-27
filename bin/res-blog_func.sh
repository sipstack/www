func0 (){
    echo $SLUG
}

func1(){
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
}
func2(){
    CREATED="${CREATED//-/$''}"
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
}