func1(){

# create folder if doesnt exist
if [ ! -d "src/views/pages/jobs/${SLUG}" ]; then
  mkdir -p src/views/pages/jobs/${SLUG}
fi

cat << EOF > src/views/pages/jobs/${SLUG}/index.html
<!-- prettier-ignore -->
@@include('components/layouts/head.html', {
    title: "SIPSTACK",
    meta: {
        description: "${DESCRIPTION}",
        keywords: "job, jobs, carrer, hiring, hire, resume, ${TITLE}, ${KEYWORDS}",
        author: "${RECRUITER}",
        robots: "index, follow",
        url: "",
        image: "logo/logo.png",
        type: "article",
        created: "${CREATED}", 
        updated: "", 
    },
    body: "",
    css: [],
    nav: {
        class: ''
    }
})

<!-- prettier-ignore -->
@@include('components/sections/jobs.page.html',
    {
        slug: "${SLUG}",
        category: "${CATEGORY}",
        location: "${LOCATION}",
        title: "${TITLE}",
        description: "${DESCRIPTION}",
        created: "${CREATED}",
        email: "${EMAIL}",
        salary: "${SALARY}",
        type: "${TYPE}",
        stacks:[${TAGS}],
        perks: "${PERKS}",
        recruiter: "${RECRUITER}"
    }
)
<!-- prettier-ignore -->
@@include('components/sections/jobs.footer.html', {
    job_id: '${JOB_ID}',
    slug: '${SLUG}',
})

<!-- prettier-ignore -->
@@include('components/layouts/tail.html')
EOF
}


func2() {
cat << EOF > src/views/pages/jobs/_jobs.json
{
    slug: "${SLUG}",
    title: "${TITLE}",
    description: "${DESCRIPTION}",
    type: "${TYPE}",
    category: "${CATEGORY}",
    location: "${LOCATION}",
    salary: "${SALARY}",
    created: "${CREATED}"
},
EOF
}

func3() {
cat << EOF > src/views/pages/jobs/_jobs.html
<!-- prettier-ignore -->
@@include('components/sections/jobs.list.html', {
        categories: ['Engineering', 'Executive', 'Marketing', 'Sales'],
        cols: [
EOF
cat src/views/pages/jobs/_jobs.json >> src/views/pages/jobs/_jobs.html
echo "]})" >> src/views/pages/jobs/_jobs.html
## cleanup
rm src/views/pages/jobs/_jobs.json
}