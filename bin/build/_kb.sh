func1() {

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



func4() {
  DEST=src/views/pages/resources/knowledge-base/${CATEGORY}/_articles.html
  echo '@@include("components/sections/kb.articles.html", {articles: [' > ${DEST}
  cat src/data/knowledge-base/${CATEGORY}/*.json >> ${DEST}
  echo ']})' >> ${DEST}
}