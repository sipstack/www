
## output blog index file in the slug directory
func1() {
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

## output the data json file for blog landing
func2(){
    CREATE="${CREATED//-/$''}"

cat << EOF > src/data/blog/${CREATE}-${SLUG}.json
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

# output 3 latest articles for main page
func3() {
files=( src/data/blog/20*.json )
echo "@@include('components/sections/feature.posts.html',{ posts: [" > src/views/pages/_posts.html
cat "${files[@]: -3}" >> src/views/pages/_posts.html
# ls -r src/data/blog/20*.json | xargs cat >> >> src/views/pages/_posts.html
echo "]})" >> src/views/pages/_posts.html
}

# output all articles for main landing view
func4() {
  echo "Generating 3 latest blogs for homepage..."
  DEST=src/views/pages/resources/blog/_articles.html
  echo '@@include("components/sections/blog.posts.html", {categories : ["Business","History", "News", "Regulatory", "Robocall", "Technology"],tags: [],posts: [' > ${DEST}
  ls -r src/data/blog/20*.json | xargs cat >> ${DEST}
  echo ']})' >> ${DEST}
}

# clean up
func5() {
  echo "Cleaning up..."
# rm -rf src/data/blog/*.json
}